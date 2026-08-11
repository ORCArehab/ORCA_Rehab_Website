import type { LucideIcon } from "lucide-react";

interface FacilityCardProps {
  icon: LucideIcon;
  name: string;
}

export function FacilityCard({ icon: Icon, name }: FacilityCardProps) {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <span className="text-sm font-medium text-slate-900">{name}</span>
    </div>
  );
}
