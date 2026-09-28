import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Check, DollarSign, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/ui/cta-banner";
import { jobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the ORCA Rehab team. Explore a career in physical medicine, rehabilitation, and pain management with a physician-led, patient-centered organization.",
  openGraph: {
    title: "Careers | ORCA Rehab",
    description:
      "Join the ORCA Rehab team. Explore a career in physical medicine, rehabilitation, and pain management with a physician-led, patient-centered organization.",
  },
};

const reasonsToJoin = [
  "Work alongside experienced rehabilitation medicine specialists",
  "Make a meaningful impact on patients' recovery and quality of life",
  "Collaborate with multidisciplinary healthcare teams",
  "Practice in supportive and patient-centered environments",
  "Be part of an organization that values clinical excellence and continuous improvement",
  "Grow your career with opportunities for professional development",
];

export default function CareersPage() {
  return (
    <>
      {/* Build a Career Header */}
      <section className="relative overflow-hidden bg-white">
        {/* Mobile / tablet: text, then image below */}
        <div className="lg:hidden">
          <Container className="py-16 sm:py-20">
            <CareersHeaderCopy />
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image
                src="/careers-header.jpg"
                alt="Three smiling ORCA Rehab clinicians in navy scrubs"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Container>
        </div>

        {/* Desktop: full-width photo with header text set into the negative space */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/careers-header.jpg"
              alt="Three smiling ORCA Rehab clinicians in navy scrubs"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white from-5% via-white/80 via-40% to-white/0 to-65%"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center">
            <Container>
              <div className="pointer-events-auto max-w-lg">
                <CareersHeaderCopy />
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section background="white">
        <div className="max-w-3xl">
          <p className="text-base leading-relaxed text-slate-600">
            At ORCA Rehab, we&apos;re passionate about improving lives through exceptional rehabilitation medicine,
            compassionate patient care, and innovative healthcare solutions. Our providers and team members work
            collaboratively to deliver high-quality care across a wide range of healthcare settings.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Whether you&apos;re an experienced physician, advanced practice provider, therapist, or healthcare
            professional, you&apos;ll be joining a team that values clinical excellence, integrity, collaboration,
            and continuous growth.
          </p>
        </div>
      </Section>

      {/* Why ORCA Rehab */}
      <Section background="gray">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Why ORCA Rehab?</h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {reasonsToJoin.map((reason) => (
            <li
              key={reason}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-slate-700">{reason}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Current Opportunities */}
      <Section background="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Current Opportunities</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We&apos;re always looking for talented professionals who share our commitment to compassionate,
            evidence-based care.
          </p>
        </div>

        {jobs.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {jobs.map((job) => (
              <li key={job.slug}>
                <Link
                  href={`/careers/${job.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:border-blue-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600">{job.title}</h3>
                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-slate-400" aria-hidden="true" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4 text-slate-400" aria-hidden="true" />
                      {job.employmentType}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-slate-400" aria-hidden="true" />
                      {job.salary}
                    </span>
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{job.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                    View details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-10">
          <CtaBanner
            title="Ready to Join Our Team?"
            description="If you're interested in joining ORCA Rehab, we'd love to hear from you. Apply today and become part of a team dedicated to helping patients regain function, restore independence, and improve quality of life."
            primaryLabel="Apply Today"
            primaryHref="/careers/apply"
          />
        </div>
      </Section>
    </>
  );
}

function CareersHeaderCopy() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Join the ORCA Rehab Team</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-4xl xl:text-5xl">
        Build a Career That Makes a Difference
      </h1>
    </>
  );
}
