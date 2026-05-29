"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  contactSchema,
  type ContactFormData,
  sujetLabels,
  budgetLabels,
  delaiLabels,
  sourceLabels,
} from "@/lib/schemas/contact";
import { TurnstileWidget } from "./turnstile-widget";

interface ContactFormProps {
  defaultSubject?: string;
}

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ defaultSubject }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [showDetails, setShowDetails] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      sujet: defaultSubject as ContactFormData["sujet"] | undefined,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitState("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <div className="text-lg font-semibold text-green-800">
          Merci ! Nous vous répondrons sous 24-48h ouvrées.
        </div>
        <button
          type="button"
          onClick={() => setSubmitState("idle")}
          className="mt-4 text-sm text-green-700 underline hover:text-green-900"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot field */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Nom */}
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-[#1e3a5f]">
          Nom <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="nom"
          {...register("nom")}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#4a7bb7] focus:outline-none focus:ring-1 focus:ring-[#4a7bb7]"
        />
        {errors.nom && <p className="mt-1 text-sm text-red-600">{errors.nom.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1e3a5f]">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#4a7bb7] focus:outline-none focus:ring-1 focus:ring-[#4a7bb7]"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Société */}
      <div>
        <label htmlFor="societe" className="block text-sm font-medium text-[#1e3a5f]">
          Société <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="societe"
          {...register("societe")}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#4a7bb7] focus:outline-none focus:ring-1 focus:ring-[#4a7bb7]"
        />
        {errors.societe && <p className="mt-1 text-sm text-red-600">{errors.societe.message}</p>}
      </div>

      {/* Sujet */}
      <div>
        <label htmlFor="sujet" className="block text-sm font-medium text-[#1e3a5f]">
          Sujet <span className="text-red-600">*</span>
        </label>
        <select
          id="sujet"
          {...register("sujet")}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#4a7bb7] focus:outline-none focus:ring-1 focus:ring-[#4a7bb7]"
        >
          <option value="">Sélectionnez un sujet</option>
          {Object.entries(sujetLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errors.sujet && <p className="mt-1 text-sm text-red-600">{errors.sujet.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1e3a5f]">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#4a7bb7] focus:outline-none focus:ring-1 focus:ring-[#4a7bb7]"
          placeholder="Décrivez votre projet, vos besoins et vos objectifs (minimum 50 caractères)..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* Collapsible Details Section */}
      <div className="border-t border-gray-200 pt-6">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="flex w-full items-center justify-between text-sm font-medium text-[#1e3a5f] hover:text-[#4a7bb7]"
        >
          <span>Plus de détails (optionnel)</span>
          <svg
            className={`h-5 w-5 transition-transform ${showDetails ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showDetails && (
          <div className="mt-6 space-y-6">
            {/* Téléphone */}
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-[#1e3a5f]">
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                {...register("telephone")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#4a7bb7] focus:outline-none focus:ring-1 focus:ring-[#4a7bb7]"
              />
              {errors.telephone && (
                <p className="mt-1 text-sm text-red-600">{errors.telephone.message}</p>
              )}
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-[#1e3a5f]">
                Budget estimé
              </label>
              <select
                id="budget"
                {...register("budget")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#4a7bb7] focus:outline-none focus:ring-1 focus:ring-[#4a7bb7]"
              >
                <option value="">Sélectionnez une fourchette</option>
                {Object.entries(budgetLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
              )}
            </div>

            {/* Délai */}
            <div>
              <label htmlFor="delai" className="block text-sm font-medium text-[#1e3a5f]">
                Délai souhaité
              </label>
              <select
                id="delai"
                {...register("delai")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#4a7bb7] focus:outline-none focus:ring-1 focus:ring-[#4a7bb7]"
              >
                <option value="">Sélectionnez un délai</option>
                {Object.entries(delaiLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              {errors.delai && <p className="mt-1 text-sm text-red-600">{errors.delai.message}</p>}
            </div>

            {/* Source */}
            <div>
              <label htmlFor="source" className="block text-sm font-medium text-[#1e3a5f]">
                Comment nous avez-vous connus ?
              </label>
              <select
                id="source"
                {...register("source")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#4a7bb7] focus:outline-none focus:ring-1 focus:ring-[#4a7bb7]"
              >
                <option value="">Sélectionnez une source</option>
                {Object.entries(sourceLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              {errors.source && (
                <p className="mt-1 text-sm text-red-600">{errors.source.message}</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Consentement */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="consentement"
          {...register("consentement")}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#4a7bb7] focus:ring-[#4a7bb7]"
        />
        <label htmlFor="consentement" className="ml-2 block text-sm text-gray-700">
          <span className="text-red-600">*</span> J&apos;accepte la{" "}
          <Link href="/confidentialite" className="text-[#4a7bb7] underline hover:text-[#1e3a5f]">
            politique de confidentialité
          </Link>
        </label>
      </div>
      {errors.consentement && (
        <p className="mt-1 text-sm text-red-600">{errors.consentement.message}</p>
      )}

      {/* Turnstile Widget */}
      <TurnstileWidget onVerify={setTurnstileToken} />

      {/* Error message */}
      {submitState === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-800">
            Une erreur est survenue lors de l&apos;envoi du formulaire. Veuillez réessayer.
          </p>
        </div>
      )}

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="w-full rounded-lg bg-[#1e3a5f] px-6 py-3 text-white transition-colors hover:bg-[#152e4d] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitState === "submitting" ? "Envoi en cours..." : "Envoyer"}
        </button>
      </div>
    </form>
  );
}
