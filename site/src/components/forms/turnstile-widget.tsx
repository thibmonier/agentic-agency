"use client";

import { useEffect, useRef, useCallback } from "react";

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
}

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

export function TurnstileWidget({ onVerify }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const scriptLoaded = useRef(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile || !siteKey) return;

    if (widgetId.current) {
      try {
        window.turnstile?.remove(widgetId.current);
      } catch {
        // Ignore errors on remove
      }
    }

    widgetId.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: (token: string) => {
        onVerify(token);
      },
      "error-callback": () => {
        console.error("Turnstile error");
      },
      theme: "light",
      size: "normal",
    });
  }, [siteKey, onVerify]);

  useEffect(() => {
    if (!siteKey) return;

    if (!scriptLoaded.current) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        scriptLoaded.current = true;
        renderWidget();
      };
      document.head.appendChild(script);
    } else {
      renderWidget();
    }

    return () => {
      if (widgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          // Ignore errors on remove
        }
      }
    };
  }, [siteKey, renderWidget]);

  if (!siteKey) return null;

  return <div ref={containerRef} className="mt-4" />;
}
