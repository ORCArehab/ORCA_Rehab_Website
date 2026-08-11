import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Handshake,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { FacilityCard } from "@/components/ui/facility-card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/services";
import { facilities } from "@/lib/facilities";
import { whyChooseFeatures } from "@/lib/why-choose";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ORCA Rehab, a physician-led provider of physical medicine, rehabilitation, and pain management services focused on compassionate, collaborative care.",
  openGraph: {
    title: "About ORCA Rehab",
    description:
      "Learn about ORCA Rehab, a physician-led provider of physical medicine, rehabilitation, and pain management services focused on compassionate, collaborative care.",
  },
};

interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

const coreValues: CoreValue[] = [
  { title: "Compassion", description: "Treating every patient with empathy, dignity, and respect.", icon: Heart },
  {
    title: "Clinical Excellence",
    description: "Holding our physicians and care processes to a high clinical standard.",
    icon: Award,
  },
  {
    title: "Collaboration",
    description: "Working closely with facilities and care teams toward shared goals.",
    icon: Handshake,
  },
  {
    title: "Innovation",
    description: "Applying modern tools and thinking to improve rehabilitation care.",
    icon: Sparkles,
  },
  {
    title: "Integrity",
    description: "Acting honestly and transparently in every patient and partner relationship.",
    icon: BadgeCheck,
  },
  {
    title: "Reliability",
    description: "Being a physician partner that facilities can consistently depend on.",
    icon: ShieldCheck,
  },
  {
    title: "Patient-Centered Care",
    description: "Keeping each patient's function, goals, and quality of life at the center of care.",
    icon: Users,
  },
];

const fivePillars = [
  {
    title: "Smarter admissions reviews",
    description:
      "We review every admission carefully to fill in missing hospital details and make sure each resident's medical picture is complete from day one.",
  },
  {
    title: "More accurate diagnoses",
    description:
      "We help move beyond vague labels like 'general weakness' to diagnoses that truly reflect a patient's neurologic or orthopedic condition.",
  },
  {
    title: "Capture important conditions",
    description:
      "We identify health conditions that affect care and daily rates — such as severe malnutrition or kidney disease — whenever they are supported by the clinical record.",
  },
  {
    title: "Support skilled therapy",
    description:
      "We spot residents who may benefit from continued therapy and help document the medical reasons so therapy can keep moving forward.",
  },
  {
    title: "Justify continued stay",
    description:
      "We write clear, plain-language notes that explain why a resident still needs skilled nursing care and how their diagnosis connects to their daily function.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Who We Are */}
      <section className="relative overflow-hidden bg-white">
        {/* Mobile / tablet: text, then image below */}
        <div className="lg:hidden">
          <Container className="py-16 sm:py-20">
            <Reveal variant="fade-up">
              <WhoWeAreCopy />
            </Reveal>
            <Reveal variant="fade-up" delayMs={150}>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                <Image
                  src="/who-we-are.jpg"
                  alt="An ORCA Rehab physician placing a reassuring hand on a patient's shoulder"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </Container>
        </div>

        {/* Desktop: full-width photo with header text set into the negative space */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-[2/1] w-full">
            <Reveal variant="slide-right" className="h-full w-full">
              <Image
                src="/who-we-are.jpg"
                alt="An ORCA Rehab physician placing a reassuring hand on a patient's shoulder"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </Reveal>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white from-5% via-white/80 via-40% to-white/0 to-65%"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center">
            <Container>
              <div className="pointer-events-auto max-w-lg">
                <Reveal variant="fade-up">
                  <WhoWeAreCopy />
                </Reveal>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section background="white">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal variant="slide-left">
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                To improve patient outcomes by delivering physician-led rehabilitation medicine and pain management
                services in close partnership with the facilities and care teams we serve.
              </p>
            </div>
          </Reveal>
          <Reveal variant="slide-right">
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-slate-900">Our Vision</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                To be a trusted, forward-thinking partner in rehabilitation medicine — known for clinical
                excellence, reliable collaboration, and consistent, patient-centered care across the continuum of
                care.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Five Pillars */}
      <Section background="gray">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Our Approach</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Five Pillars</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            How we help skilled nursing facilities strengthen documentation and protect reimbursement.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fivePillars.map((pillar, index) => (
            <Reveal key={pillar.title} variant="slide-left" delayMs={index * 150}>
              <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Core Values */}
      <Section background="white">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Our Core Values</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The principles that guide how we care for patients and partner with facilities every day.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => (
            <Reveal key={value.title} variant="grow" delayMs={index * 100}>
              <FeatureCard icon={value.icon} title={value.title} description={value.description} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Our Services */}
      <Section background="gray">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Our Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Rehabilitation Medicine Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Comprehensive, physician-directed services designed to support patients and the facilities that care for
            them.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} variant="fade-up" delayMs={index * 120}>
              <ServiceCard icon={service.icon} title={service.title} summary={service.summary} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/services" variant="secondary">
            View All Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Section>

      {/* Why Choose ORCA Rehab */}
      <Section background="white">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Why Choose Us</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Choose ORCA Rehab</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A trusted physician partner focused on quality outcomes and dependable collaboration.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseFeatures.map((feature, index) => (
            <Reveal
              key={feature.title}
              variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              delayMs={Math.floor(index / 2) * 120}
            >
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Facilities We Serve */}
      <Section background="gray">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Facilities We Serve</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Partnering Across the Continuum of Care
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We work with a wide range of healthcare facilities and teams to deliver consistent, coordinated
            rehabilitation medicine.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <Reveal key={facility.name} variant="fade-up" delayMs={index * 80}>
              <FacilityCard icon={facility.icon} name={facility.name} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section background="white">
        <Reveal variant="fade-up">
          <CtaBanner
            title="Interested in Partnering With Us?"
            description="Reach out to learn more about how ORCA Rehab can support your facility's rehabilitation medicine needs."
            primaryLabel="Contact Us"
            primaryHref="/contact"
          />
        </Reveal>
      </Section>
    </>
  );
}

function WhoWeAreCopy() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">About ORCA Rehab</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-4xl xl:text-5xl">
        Who We Are
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        ORCA Rehab is a physician-led healthcare organization specializing in physical medicine and rehabilitation,
        also known as physiatry, and pain management. We provide expert rehabilitation medicine services designed to
        improve patient function, mobility, independence, and overall quality of life.
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        Our physicians work alongside skilled nursing facilities, hospitals, long-term care facilities, and
        outpatient rehabilitation centers, supporting the interdisciplinary teams that make quality patient care
        possible.
      </p>
    </>
  );
}
