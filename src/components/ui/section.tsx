import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "gray" | "navy";
  id?: string;
}

const backgroundStyles: Record<NonNullable<SectionProps["background"]>, string> = {
  white: "bg-white",
  gray: "bg-slate-50",
  navy: "bg-slate-900",
};

export function Section({ children, className = "", containerClassName = "", background = "white", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${backgroundStyles[background]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
