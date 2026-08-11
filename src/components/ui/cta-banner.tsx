import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
}

export function CtaBanner({ title, description, primaryLabel, primaryHref }: CtaBannerProps) {
  return (
    <div className="rounded-2xl bg-slate-900 px-6 py-12 text-center sm:px-12 sm:py-16">
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-300">{description}</p>
      <div className="mt-8 flex justify-center">
        <Button href={primaryHref} variant="primary">
          {primaryLabel}
        </Button>
      </div>
    </div>
  );
}
