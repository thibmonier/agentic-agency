"use client";

import { useEffect, useRef } from "react";

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

  // Don't render if no site key (dev mode)
  if (!siteKey) return null;

  useEffect(() => {
    // Load Turnstile script
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

    function renderWidget() {
      if (!containerRef.current || !window.turnstile) return;

      // Remove existing widget if any
      if (widgetId.current) {
        try {
          window.turnstile?.remove(widgetId.current);
        } catch (e) {
          // Ignore errors on remove
        }
      }

      // Render new widget
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
    }

    // Cleanup on unmount
    return () => {
      if (widgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch (e) {
          // Ignore errors on remove
        }
      }
    };
  }, [siteKey, onVerify]);

  return <div ref={containerRef} className="mt-4" />;
}
