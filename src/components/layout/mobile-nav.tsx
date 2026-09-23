"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Lock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/site-config";

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the menu when navigation occurs, without an effect (React docs:
  // "Adjusting state when a prop changes").
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      {isOpen ? (
        <div
          id="mobile-nav-menu"
          className="absolute inset-x-0 top-16 border-b border-slate-200 bg-white px-4 pb-6 pt-2 shadow-lg sm:top-20"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4">
            <Button href="/contact" className="w-full">
              Contact Us
            </Button>
            <a
              href={siteConfig.employeePortalUrl}
              className="mt-3 flex items-center justify-center gap-1.5 rounded-sm py-2 text-sm font-medium text-slate-500 hover:text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Employee Sign In
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
