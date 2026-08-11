import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, Printer } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact-form";
import { contactInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ORCA Rehab to learn more about our physical medicine, rehabilitation, and pain management services.",
  openGraph: {
    title: "Contact ORCA Rehab",
    description:
      "Get in touch with ORCA Rehab to learn more about our physical medicine, rehabilitation, and pain management services.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Healthcare facilities, care teams, and potential partners are welcome to reach out with questions about our services."
      />

      <Section background="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-slate-900">Contact Information</h2>
            <ul className="mt-6 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
                    className="mt-0.5 block text-sm text-slate-600 hover:text-blue-600"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Printer className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Fax</p>
                  <p className="mt-0.5 text-sm text-slate-600">{contactInfo.fax}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="mt-0.5 block text-sm text-slate-600 hover:text-blue-600"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Office Address</p>
                  <p className="mt-0.5 text-sm text-slate-600">{contactInfo.address.line1}</p>
                  <p className="text-sm text-slate-600">{contactInfo.address.line2}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Business Hours</p>
                  {contactInfo.hours.map((entry) => (
                    <p key={entry.days} className="mt-0.5 text-sm text-slate-600">
                      {entry.days}: {entry.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold text-slate-900">Send Us a Message</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Fill out the form below and our team will follow up with you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
