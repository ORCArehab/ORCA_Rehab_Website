"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { patientLinks } from "@/lib/site-config";

export function PatientsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="patients-menu"
        className="flex items-center gap-1 rounded-sm text-sm font-medium text-slate-700 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Patients
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen ? (
        // pt-3 bridges the gap under the button so hover isn't lost moving into the menu.
        <div id="patients-menu" className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
          <ul className="min-w-52 rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
            {patientLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
