"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

interface ShareButtonProps {
  url: string;
  title: string;
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.5 18h3V8.3h-3V18zM4 6.3c1 0 1.8-.8 1.8-1.8S5 2.8 4 2.8 2.2 3.5 2.2 4.5 3 6.3 4 6.3zM18 18h-3v-5.6c0-3.4-4-3.1-4 0V18H8V8.3h3v1.8c1.4-2.6 7-2.8 7 2.5V18z" />
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M3 13V5a2 2 0 0 1 2-2h8" />
    </svg>
  );
}

export function ShareButton({ url, title }: ShareButtonProps) {
  const [showToast, setShowToast] = useState(false);

  const handleLinkedInShare = () => {
    const urlWithUtm = `${url}?utm_source=linkedin&utm_medium=social&utm_campaign=blog`;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlWithUtm)}`,
      "_blank",
      "noopener,width=600,height=500"
    );
    trackEvent("share", { platform: "linkedin", article: title });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      trackEvent("copy_link", { article: title });
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleLinkedInShare}
        className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#1e3a5f]"
        aria-label="Partager sur LinkedIn"
      >
        <LinkedInIcon className="h-5 w-5" />
        <span>Partager sur LinkedIn</span>
      </button>

      <button
        onClick={handleCopyLink}
        className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#1e3a5f]"
        aria-label="Copier le lien"
      >
        <CopyIcon className="h-5 w-5" />
        <span>Copier le lien</span>
        {showToast && <span className="ml-1 text-sm text-green-600">Lien copié !</span>}
      </button>
    </div>
  );
}
