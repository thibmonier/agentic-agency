"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-[#1e3a5f]">Agentic Agency</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Ouvrir le menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/30 z-50" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="text-2xl font-bold text-[#1e3a5f]">Agentic Agency</span>
                  </Link>
                  <Dialog.Close asChild>
                    <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                      <span className="sr-only">Fermer le menu</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </Dialog.Close>
                </div>
                <VisuallyHidden.Root>
                  <Dialog.Title>Menu de navigation</Dialog.Title>
                  <Dialog.Description>
                    Naviguer dans les différentes sections du site
                  </Dialog.Description>
                </VisuallyHidden.Root>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Link
                        href="/#offres"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Offres
                      </Link>
                      <Link
                        href="/services/developpement-web"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Services
                      </Link>
                      <Link
                        href="/blog"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/#contact"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                    <div className="py-6">
                      <Link
                        href="/#contact"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#1e3a5f] hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Échanger sur votre projet
                      </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          <Link
            href="/#offres"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#1e3a5f] transition-colors"
          >
            Offres
          </Link>
          <Link
            href="/services/developpement-web"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#1e3a5f] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#1e3a5f] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#1e3a5f] transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild size="default">
            <Link href="/#contact">Échanger sur votre projet</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
