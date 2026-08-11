import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AmbientVideo } from "@/components/ambient-video";

export default function Home() {
  return (
    <>
      {/* Strategic Partner Intro */}
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-10 sm:py-12">
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-3 sm:gap-12">
            <div className="sm:col-span-2">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Your strategic partner in <span className="font-serif italic text-blue-600">clinical excellence</span>,
                operational performance &amp;{" "}
                <span className="underline decoration-2 underline-offset-4 decoration-blue-600">
                  financial success
                </span>
                .
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Specialized physiatry services for skilled nursing facilities — focused on functional outcomes that
                bridge hospital record gaps and ensure audit‑proof reimbursement through precision documentation.
              </p>
            </div>
            <div className="flex justify-center sm:col-span-1 sm:justify-end">
              <video
                src="/orca-icon-animated.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                className="h-24 w-auto sm:h-32 lg:h-40"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Mobile / tablet: text, then image below */}
        <div className="lg:hidden">
          <Container className="py-16 sm:py-20">
            <HeroCopy />
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image
                src="/hero-banner.jpg"
                alt="An ORCA Rehab clinician guiding a patient through a mobility exercise"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Container>
        </div>

        {/* Desktop: full-width photo with headline set into the negative space */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/hero-banner.jpg"
              alt="An ORCA Rehab clinician guiding a patient through a mobility exercise"
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
                <HeroCopy />
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Compassionate Care Video */}
      <section className="relative overflow-hidden bg-white">
        {/* Mobile / tablet: text, then video below */}
        <div className="lg:hidden">
          <Container className="py-16 sm:py-20">
            <CareVideoCopy />
            <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <AmbientVideo
                src="/wheelchair-care.mp4"
                poster="/wheelchair-care-poster.jpg"
                className="absolute inset-0"
                autoPlay={false}
              />
            </div>
          </Container>
        </div>

        {/* Desktop: full-width video with copy set into the negative space on the right */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-[2/1] w-full">
            <AmbientVideo src="/wheelchair-care.mp4" poster="/wheelchair-care-poster.jpg" className="absolute inset-0" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white from-5% via-white/80 via-40% to-white/0 to-65%"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center">
            <Container>
              <div className="pointer-events-auto ml-auto max-w-lg">
                <CareVideoCopy />
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Physician-Led Rehabilitation Medicine */}
      <section id="about-preview" className="relative overflow-hidden bg-white">
        {/* Mobile / tablet: text, then image below */}
        <div className="lg:hidden">
          <Container className="py-16 sm:py-20">
            <PhysicianLedCopy />
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image
                src="/physician-photo.jpg"
                alt="An ORCA Rehab physiatrist standing in a hospital hallway"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Container>
        </div>

        {/* Desktop: full-width photo with copy set into the negative space */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/physician-photo.jpg"
              alt="An ORCA Rehab physiatrist standing in a hospital hallway"
              fill
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
                <PhysicianLedCopy />
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Personalized Care Video */}
      <section className="relative overflow-hidden bg-white">
        {/* Mobile / tablet: contained card, click-to-play, caption set into the bottom */}
        <div className="lg:hidden">
          <Container className="py-16 sm:py-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <AmbientVideo
                src="/nurse-talking.mp4"
                poster="/nurse-talking-poster.jpg"
                className="absolute inset-0"
                autoPlay={false}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white from-0% via-white/90 via-60% to-white/35 to-100%"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 pr-16">
                <NurseVideoCopy />
              </div>
            </div>
          </Container>
        </div>

        {/* Desktop: full-width video with the caption set into the bottom */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-[2/1] w-full">
            <AmbientVideo src="/nurse-talking.mp4" poster="/nurse-talking-poster.jpg" className="absolute inset-0" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white from-5% via-white/85 via-35% to-white/0 to-70%"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 pb-12">
            <Container>
              <div className="max-w-2xl">
                <NurseVideoCopy />
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Beyond Recovery */}
      <section className="relative overflow-hidden bg-white">
        {/* Mobile / tablet: text, then video below */}
        <div className="lg:hidden">
          <Container className="py-16 sm:py-20">
            <BeyondRecoveryCopy />
            <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <AmbientVideo
                src="/patient-flower.mp4"
                poster="/patient-flower-poster.jpg"
                className="absolute inset-0"
                autoPlay={false}
              />
            </div>
          </Container>
        </div>

        {/* Desktop: full-width video with copy set into the left side */}
        <div className="relative hidden lg:block">
          <div className="relative aspect-[2/1] w-full">
            <AmbientVideo src="/patient-flower.mp4" poster="/patient-flower-poster.jpg" className="absolute inset-0" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white from-5% via-white/80 via-40% to-white/0 to-65%"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center">
            <Container>
              <div className="pointer-events-auto max-w-lg">
                <BeyondRecoveryCopy />
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroCopy() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        Physiatry &amp; Pain Management
      </p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-4xl xl:text-5xl">
        Expert Rehabilitation Medicine. Better Patient Outcomes.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        ORCA Rehab provides physician-led physical medicine and rehabilitation, pain management, and collaborative
        care services — partnering with healthcare facilities to support patients across the continuum of care.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href="/contact">Contact Us</Button>
        <Button href="#about-preview" variant="secondary">
          Learn More
        </Button>
      </div>
    </>
  );
}

function PhysicianLedCopy() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">About ORCA Rehab</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Physician-Led Rehabilitation Medicine
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        Our physiatrists restore function, manage pain, and guide recovery — partnering with hospitals, nursing
        facilities, and care teams across the continuum of care.
      </p>
      <div className="mt-8">
        <Button href="/about" variant="secondary">
          Learn More
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </>
  );
}

function CareVideoCopy() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Compassionate Care, Every Day</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 lg:text-3xl xl:text-4xl">
        Care That Supports Every Step
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        From hospital hallways to therapy sessions, our team is there for the small moments that matter — helping
        patients move safely, comfortably, and with dignity throughout their recovery.
      </p>
    </>
  );
}

function NurseVideoCopy() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
        Personalized, Attentive Care
      </p>
      <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl xl:text-4xl">
        Conversations That Build Trust
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3 sm:text-base lg:text-lg">
        Every care plan starts with listening. Our providers take the time to understand each patient&apos;s goals,
        answer questions clearly, and keep patients and families informed every step of the way.
      </p>
    </>
  );
}

function BeyondRecoveryCopy() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Beyond Recovery</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Care That Restores <span className="font-serif italic text-blue-600">Confidence</span>, Not Just Function
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Recovery is about more than movement. Our physiatrists help patients rebuild the independence, comfort, and
        confidence to fully return to the life they know — restoring not just what they can do, but how they feel
        doing it.
      </p>
      <div className="mt-8">
        <Button href="/contact">Contact Us</Button>
      </div>
    </>
  );
}
