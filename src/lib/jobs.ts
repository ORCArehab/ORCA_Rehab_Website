export interface JobSectionGroup {
  title?: string;
  /** Paragraphs shown before the bullet list (or on their own). */
  paragraphs?: string[];
  items?: string[];
}

export interface JobSection {
  title: string;
  groups: JobSectionGroup[];
}

export interface Job {
  slug: string;
  title: string;
  /** Short blurb for the job card on the Careers page. */
  summary: string;
  location: string;
  employmentType: string;
  setting?: string;
  schedule: string;
  salary: string;
  /** Numeric salary range for Google Jobs structured data. */
  salaryRange: { min: number; max: number; unit: "YEAR" | "HOUR" };
  workLocation: string;
  reportsTo?: string;
  /** ISO date (YYYY-MM-DD) the job was posted. */
  datePosted: string;
  about: string[];
  sections: JobSection[];
}

// Same PA/NP posting for each region we hire in; edit once here to update all of them.
// `area` is how the region reads mid-sentence, e.g. "the Indio area".
function physicianAssistantJob(region: string, area: string, regionSlug: string): Job {
  return {
    slug: `physician-assistant-nurse-practitioner-${regionSlug}`,
    title: "Physician Assistant / Nurse Practitioner",
    summary:
      `Deliver in-person rehabilitation and pain management care to patients in inpatient and post-acute facilities throughout ${area}. PM&R experience preferred but not required.`,
    location: `${region}, California`,
    employmentType: "Full-Time, W-2",
    setting: "Inpatient & Post-Acute Care",
    schedule: "Monday–Friday with Flexible Hours; One Weekend per Month",
    salary: "$140,000–$160,000 per year",
    salaryRange: { min: 140000, max: 160000, unit: "YEAR" },
    workLocation: "In Person",
    datePosted: "2026-09-28",
    about: [
      "ORCA Rehab is a leading Physical Medicine & Rehabilitation (PM&R) group specializing in comprehensive rehabilitation care, including pain management.",
      "Our goal is to improve each patient’s function, comfort, independence, and overall quality of life. We work closely with physicians, therapists, nurses, case managers, and facility staff to provide coordinated, patient-centered rehabilitation care.",
      `We are seeking a Physician Assistant or Nurse Practitioner to join our ${region} team. The provider will deliver in-person care at inpatient and post-acute facilities throughout ${area}.`,
      "You will care for patients recovering from conditions such as stroke, neurological disorders, orthopedic injuries, medically complex hospitalizations, and functional decline.",
      "This position focuses on evaluating patients’ pain, mobility, functional abilities, medical needs, and rehabilitation progress. Previous PM&R experience is preferred but not required. Training and support will be provided to candidates who demonstrate strong clinical judgment, organization, and a genuine interest in rehabilitation medicine.",
    ],
    sections: [
      {
        title: "Key Responsibilities",
        groups: [
          {
            title: "Patient Care",
            items: [
              "Perform initial evaluations and follow-up visits in inpatient and post-acute settings.",
              "Conduct comprehensive histories and physical examinations.",
              "Assess patients’ pain, mobility, functional status, medical needs, and rehabilitation progress.",
              "Develop treatment plans that support recovery, function, comfort, independence, and quality of life.",
              "Manage pain and other medical conditions that may affect participation in rehabilitation.",
              "Order and review appropriate laboratory tests, imaging, and other diagnostic studies.",
            ],
          },
          {
            title: "Collaborative Care",
            items: [
              "Collaborate with physiatrists, physicians, therapists, nurses, case managers, and facility staff.",
              "Participate in interdisciplinary care and discharge planning.",
              "Communicate changes in patient condition and escalate clinical concerns appropriately.",
              "Educate patients and families regarding treatment plans and rehabilitation goals.",
            ],
          },
          {
            title: "Documentation & Compliance",
            items: [
              "Complete clinical documentation and billing sheets accurately and within required timelines.",
              "Maintain patient confidentiality.",
              "Follow all applicable clinical, ethical, and regulatory standards.",
            ],
          },
        ],
      },
      {
        title: "Qualifications",
        groups: [
          {
            title: "Licensure & Certification",
            items: [
              "Active California Physician Assistant or Nurse Practitioner license required.",
              "Active DEA registration required.",
              "BLS certification required.",
              "Board certification, as applicable to the candidate’s profession, required.",
              "ACLS certification preferred.",
            ],
          },
          {
            title: "Clinical Skills",
            items: [
              "Strong clinical judgment and patient assessment skills.",
              "Excellent communication and interdisciplinary collaboration skills.",
              "Strong organizational and time-management abilities.",
              "Commitment to timely and accurate clinical documentation.",
              "Ability to work independently while collaborating with a multidisciplinary clinical team.",
              "Commitment to compassionate, patient-centered care.",
            ],
          },
          {
            title: "Preferred Experience",
            paragraphs: ["Experience in any of the following areas is preferred but not required:"],
            items: [
              "Physical Medicine & Rehabilitation (PM&R)",
              "Pain management",
              "Inpatient care",
              "Skilled nursing facilities (SNF)",
              "Post-acute care",
            ],
          },
        ],
      },
      {
        title: "Compensation & Benefits",
        groups: [
          {
            items: [
              "Salary: $140,000–$160,000 per year",
              "Employment: Full-time W-2",
              "Health Insurance",
              "401(k): Employer matching",
              "Paid Time Off",
              "Paid Holidays",
              "Flexible Schedule",
              "Professional Growth: Opportunities to develop experience in PM&R and rehabilitation medicine",
            ],
          },
        ],
      },
      {
        title: "Schedule",
        groups: [
          {
            paragraphs: [
              "This is a full-time position with a Monday–Friday schedule and flexible working hours.",
              "Providers are also required to work one weekend per month.",
            ],
          },
        ],
      },
      {
        title: "Ideal Candidate",
        groups: [
          {
            paragraphs: [
              "The ideal candidate is compassionate, dependable, organized, and comfortable working in a collaborative healthcare environment.",
              "They are interested in helping patients improve their function and quality of life, can manage clinical responsibilities independently, and understand the importance of timely communication and accurate documentation.",
            ],
          },
        ],
      },
    ],
  };
}

// To add a job, copy an entry below and edit it. It appears on the Careers page
// and gets its own page at /careers/<slug>. Remove the entry once it's filled.
export const jobs: Job[] = [
  physicianAssistantJob("Orange County", "Orange County", "orange-county"),
  physicianAssistantJob("Indio", "the Indio area", "indio"),
];

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
