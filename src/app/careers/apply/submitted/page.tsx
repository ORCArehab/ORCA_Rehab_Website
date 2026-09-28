import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { getJob } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Application Received",
  robots: { index: false },
};

export default async function ApplicationSubmittedPage({ searchParams }: PageProps<"/careers/apply/submitted">) {
  const { position } = await searchParams;
  const job = typeof position === "string" ? getJob(position) : undefined;

  return (
    <Section background="gray">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <CheckCircle2 className="mx-auto h-12 w-12 text-blue-600" aria-hidden="true" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">Application Received</h1>
        {job ? <p className="mt-2 text-sm font-medium text-slate-500">{job.title} · {job.location}</p> : null}
        <p className="mt-6 text-base leading-relaxed text-slate-600">
          Thank you for your interest in ORCA Rehab. Our team has received your application and will contact you if
          your qualifications match our current needs.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/careers" variant="secondary">
            View Other Openings
          </Button>
          <Button href="/">Return Home</Button>
        </div>
      </div>
    </Section>
  );
}
