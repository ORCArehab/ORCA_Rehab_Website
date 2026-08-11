import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ORCA Rehab's services: physical medicine and rehabilitation, pain management, care coordination, and rehabilitation consulting.",
  openGraph: {
    title: "Services | ORCA Rehab",
    description:
      "Explore ORCA Rehab's services: physical medicine and rehabilitation, pain management, care coordination, and rehabilitation consulting.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Rehabilitation Medicine Services Header */}
      <section className="relative overflow-hidden bg-white">
        {/* Mobile / tablet: text, then image below */}
        <div className="lg:hidden">
          <Container className="py-16 sm:py-20">
            <ServicesHeaderCopy />
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image
                src="/services-header.jpg"
                alt="A physical therapist assisting a patient with gait training using parallel bars"
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
              src="/services-header.jpg"
              alt="A physical therapist assisting a patient with gait training using parallel bars"
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
                <ServicesHeaderCopy />
              </div>
            </Container>
          </div>
        </div>
      </section>

      <Section background="white">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              summary={service.summary}
              audience={service.audience}
              benefits={service.benefits}
            />
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-slate-500">
          The information above is provided for general informational purposes and does not constitute medical
          advice or a guarantee of specific patient outcomes. Care plans are individualized based on each
          patient&apos;s condition and needs.
        </p>
      </Section>

      <Section background="gray">
        <CtaBanner
          title="Have Questions About Our Services?"
          description="Contact our team to learn more about how ORCA Rehab can support your facility and patients."
          primaryLabel="Contact Us"
          primaryHref="/contact"
        />
      </Section>
    </>
  );
}

function ServicesHeaderCopy() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Our Services</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-4xl xl:text-5xl">
        Rehabilitation Medicine Services
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        Physician-directed services designed to support patient recovery and help healthcare facilities deliver
        consistent, coordinated care.
      </p>
    </>
  );
}
