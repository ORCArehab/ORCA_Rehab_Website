import { BookOpenCheck, GraduationCap, Handshake, Heart, MessageCircle, ShieldCheck, type LucideIcon } from "lucide-react";

export interface WhyChooseFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChooseFeatures: WhyChooseFeature[] = [
  {
    title: "Experienced Physicians",
    description: "Board-focused physiatrists with deep experience across rehabilitation medicine settings.",
    icon: GraduationCap,
  },
  {
    title: "Patient-Centered Care",
    description: "Treatment plans built around each patient's goals, function, and quality of life.",
    icon: Heart,
  },
  {
    title: "Collaborative Approach",
    description: "Close coordination with therapists, nurses, case managers, and facility staff.",
    icon: Handshake,
  },
  {
    title: "Evidence-Based Medicine",
    description: "Clinical decisions grounded in current rehabilitation medicine practice.",
    icon: BookOpenCheck,
  },
  {
    title: "Reliable Facility Partnerships",
    description: "Consistent, dependable physician support that facilities can count on.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive Communication",
    description: "Timely responses and clear updates for patients, families, and facility teams.",
    icon: MessageCircle,
  },
];
