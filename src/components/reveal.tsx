"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "fade-up" | "slide-left" | "slide-right" | "grow";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delayMs?: number;
  className?: string;
}

const variantClasses: Record<RevealVariant, string> = {
  "fade-up": "opacity-0 translate-y-8",
  "slide-left": "opacity-0 -translate-x-12",
  "slide-right": "opacity-0 translate-x-12",
  grow: "opacity-0 scale-90",
};

export function Reveal({ children, variant = "fade-up", delayMs = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delayMs}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:!translate-x-0 motion-reduce:!translate-y-0 motion-reduce:!scale-100 motion-reduce:!opacity-100 ${
        isVisible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : variantClasses[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}
