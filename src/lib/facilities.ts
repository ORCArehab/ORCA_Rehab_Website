import { Activity, Building2, HeartHandshake, Hospital, House, Stethoscope, type LucideIcon } from "lucide-react";

export interface Facility {
  name: string;
  icon: LucideIcon;
}

export const facilities: Facility[] = [
  { name: "Skilled Nursing Facilities", icon: Building2 },
  { name: "Long-Term Care Facilities", icon: House },
  { name: "Inpatient Rehabilitation Facilities", icon: Activity },
  { name: "Assisted Living Facilities", icon: HeartHandshake },
  { name: "Hospitals", icon: Hospital },
  { name: "Outpatient Rehabilitation Centers", icon: Stethoscope },
];
