import { Activity, ClipboardList, Syringe, Users, type LucideIcon } from "lucide-react";

export interface ServiceContent {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  audience: string;
  benefits: string[];
}

export const services: ServiceContent[] = [
  {
    slug: "physical-medicine-rehabilitation",
    title: "Physical Medicine & Rehabilitation",
    icon: Activity,
    summary:
      "Physician-directed rehabilitation care focused on restoring function, mobility, and independence after illness, injury, or surgery.",
    audience:
      "Patients recovering in skilled nursing, long-term care, and inpatient rehabilitation settings, along with the interdisciplinary teams who support them.",
    benefits: [
      "Physiatrist-led evaluation and treatment planning",
      "Coordinated care with therapy and nursing teams",
      "Focus on functional recovery and independence",
      "Ongoing monitoring throughout the rehabilitation stay",
    ],
  },
  {
    slug: "pain-management",
    title: "Pain Management",
    icon: Syringe,
    summary:
      "Comprehensive, physician-guided approaches to managing acute and chronic pain as part of a broader rehabilitation plan.",
    audience:
      "Patients whose pain is affecting participation in therapy, mobility, or overall recovery, and facilities seeking physician support for pain-related care planning.",
    benefits: [
      "Individualized pain management strategies",
      "Close coordination with attending physicians",
      "Support for improved therapy participation",
      "Ongoing reassessment as patient needs change",
    ],
  },
  {
    slug: "care-coordination",
    title: "Care Coordination",
    icon: Users,
    summary:
      "Structured communication and collaboration across physicians, therapists, nurses, and case managers to keep care aligned.",
    audience:
      "Interdisciplinary care teams, case managers, and administrators who need consistent physician engagement across the patient's stay.",
    benefits: [
      "Clear communication across the care team",
      "Support for care planning and case conferences",
      "Alignment between clinical and administrative goals",
      "Fewer gaps in transitions of care",
    ],
  },
  {
    slug: "rehabilitation-consulting",
    title: "Rehabilitation Consulting",
    icon: ClipboardList,
    summary:
      "Advisory support that helps facilities strengthen rehabilitation programs, workflows, and physician coverage.",
    audience:
      "Facility administrators and operators evaluating or refining their rehabilitation medicine services and physician partnerships.",
    benefits: [
      "Guidance on rehabilitation program structure",
      "Support for physician coverage and staffing needs",
      "Operational and workflow recommendations",
      "A collaborative, long-term partnership approach",
    ],
  },
];
