import { Check, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  summary: string;
  audience?: string;
  benefits?: string[];
}

export function ServiceCard({ icon: Icon, title, summary, audience, benefits }: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{summary}</p>

      {audience ? (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Who It Supports</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{audience}</p>
        </div>
      ) : null}

      {benefits && benefits.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
