import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Briefcase, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ApplicationForm } from "@/components/application-form";
import { getApplicationForm } from "@/lib/careers-api";
import { getJob, jobs } from "@/lib/jobs";
import { contactInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply for a position with ORCA Rehab.",
  // Application pages don't belong in search results; the job postings do.
  robots: { index: false },
};

export default async function ApplyPage({ searchParams }: PageProps<"/careers/apply">) {
  const { position } = await searchParams;
  const slug = typeof position === "string" ? position : undefined;
  const posting = slug ? getJob(slug) : undefined;

  if (!slug || !posting) return <ChoosePosition />;

  const form = await getApplicationForm(slug);

  return (
    <>
      <div className="border-b border-slate-200 bg-slate-50">
        <Container className="py-12 sm:py-16">
          <Link
            href={`/careers/${posting.slug}`}
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-slate-600 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to job details
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-blue-600">Applying for</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{posting.title}</h1>
          <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-base text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-slate-400" aria-hidden="true" />
              {posting.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 text-slate-400" aria-hidden="true" />
              {posting.employmentType}
            </span>
          </p>
        </Container>
      </div>

      <Section background="white">
        <div className="max-w-3xl">
          {form === "unavailable" || form === null ? (
            <div role="status" className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                {form === null ? "Online applications aren't open for this position" : "Online applications are temporarily unavailable"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Please try again later, or reach us at{" "}
                <a href={`mailto:${contactInfo.email}`} className="font-medium text-blue-600 underline hover:text-blue-700">
                  {contactInfo.email}
                </a>{" "}
                or {contactInfo.phone}.
              </p>
            </div>
          ) : (
            <>
              <p className="mb-8 text-sm text-slate-600">
                Fields marked <span className="text-red-600">*</span> are required.
              </p>
              <ApplicationForm position={posting.slug} questions={form.questions} />
            </>
          )}
        </div>
      </Section>
    </>
  );
}

function ChoosePosition() {
  return (
    <>
      <div className="border-b border-slate-200 bg-slate-50">
        <Container className="py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Careers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Apply to ORCA Rehab</h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600">Choose the position you&apos;d like to apply for.</p>
        </Container>
      </div>
      <Section background="white">
        <ul className="grid max-w-3xl grid-cols-1 gap-4">
          {jobs.map((job) => (
            <li key={job.slug}>
              <Link
                href={`/careers/apply?position=${job.slug}`}
                className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>
                  <span className="block font-semibold text-slate-900 group-hover:text-blue-600">{job.title}</span>
                  <span className="mt-1 block text-sm text-slate-600">
                    {job.location} · {job.employmentType}
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
