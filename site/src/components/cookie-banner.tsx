"use client";

import { useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie-consent";

type ConsentStatus = "accepted" | "refused" | null;

function getConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CONSENT_KEY) as ConsentStatus;
}

function setConsent(status: "accepted" | "refused") {
  localStorage.setItem(CONSENT_KEY, status);
}

export function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    // Initialize state based on consent
    const consent = getConsent();
    return !consent;
  });

  function handleAccept() {
    setConsent("accepted");
    setVisible(false);
  }

  function handleRefuse() {
    setConsent("refused");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg sm:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              Ce site utilise des cookies essentiels et un outil d&apos;analyse cookieless (
              <strong>Plausible Analytics</strong>) pour mesurer l&apos;audience sans collecter de
              données personnelles.{" "}
              <Link
                href="/confidentialite"
                className="text-[#4a7bb7] underline hover:text-[#1e3a5f]"
              >
                En savoir plus
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleRefuse}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Refuser tout
            </button>
            <button
              onClick={handleAccept}
              className="rounded-md bg-[#1e3a5f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#152e4d]"
            >
              Accepter tout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
