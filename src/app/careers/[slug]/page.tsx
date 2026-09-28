import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  CalendarClock,
  Check,
  DollarSign,
  Hospital,
  MapPin,
  UserRound,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { getJob, jobs, type Job } from "@/lib/jobs";
import { siteConfig } from "@/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps<"/careers/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};

  const title = `${job.title} – ${job.location}`;
  return {
    title,
    description: job.summary,
    openGraph: { title: `${title} | ${siteConfig.name}`, description: job.summary },
  };
}

export default async function JobPage({ params }: PageProps<"/careers/[slug]">) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const facts = [
    { icon: MapPin, label: "Location", value: job.location },
    { icon: Briefcase, label: "Employment Type", value: job.employmentType },
    ...(job.setting ? [{ icon: Hospital, label: "Setting", value: job.setting }] : []),
    { icon: CalendarClock, label: "Schedule", value: job.schedule },
    { icon: DollarSign, label: "Salary", value: job.salary },
    { icon: Building2, label: "Work Location", value: job.workLocation },
    ...(job.reportsTo ? [{ icon: UserRound, label: "Reports To", value: job.reportsTo }] : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd(job)).replace(/</g, "\\u003c") }}
      />

      <div className="border-b border-slate-200 bg-slate-50">
        <Container className="py-12 sm:py-16">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-slate-600 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All openings
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-blue-600">Careers</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{job.title}</h1>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-base text-slate-600">
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
        </Container>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <article className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">About the Role</h2>
            {job.about.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}

            {job.sections.map((section) => (
              <section key={section.title} className="mt-12">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">{section.title}</h2>
                {section.groups.map((group, index) => (
                  <div key={group.title ?? index} className="mt-6">
                    {group.title ? <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3> : null}
                    {group.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="mt-3 text-base leading-relaxed text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                    {group.items?.length ? (
                      <ul className="mt-3 space-y-3">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                            <span className="text-base leading-relaxed text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </section>
            ))}
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Job Details</h2>
              <dl className="mt-4 space-y-4">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</dt>
                      <dd className="mt-0.5 text-sm text-slate-800">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <Button href={`/careers/apply?position=${job.slug}`} className="mt-6 w-full">
                Apply Now
              </Button>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

const employmentTypes: Record<string, string> = {
  "Full-Time": "FULL_TIME",
  "Part-Time": "PART_TIME",
  Contract: "CONTRACTOR",
  Temporary: "TEMPORARY",
  "Per Diem": "PER_DIEM",
};

// Google Jobs structured data: https://developers.google.com/search/docs/appearance/structured-data/job-posting
function jobPostingJsonLd(job: Job) {
  const [city, region] = job.location.split(",").map((part) => part.trim());

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: [
      ...job.about.map((paragraph) => `<p>${paragraph}</p>`),
      ...job.sections.map(
        (section) =>
          `<h2>${section.title}</h2>` +
          section.groups
            .map(
              (group) =>
                (group.title ? `<h3>${group.title}</h3>` : "") +
                (group.paragraphs ?? []).map((paragraph) => `<p>${paragraph}</p>`).join("") +
                (group.items?.length ? `<ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""),
            )
            .join(""),
      ),
    ].join(""),
    datePosted: job.datePosted,
    // "Full-Time, W-2" → "Full-Time"
    employmentType: employmentTypes[job.employmentType.split(",")[0].trim()] ?? job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
      logo: `${siteConfig.url}/orca-logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: region === "California" ? "CA" : region,
        addressCountry: "US",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.salaryRange.min,
        maxValue: job.salaryRange.max,
        unitText: job.salaryRange.unit,
      },
    },
  };
}
