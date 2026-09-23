import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { contactInfo, navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <Image src="/orca-icon.png" alt="" width={44} height={39} className="h-9 w-auto" />
              <span className="text-lg font-bold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Physician-led physical medicine, rehabilitation, and pain management services for healthcare facilities
              across the continuum of care.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-sm text-sm text-slate-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
                  className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>Fax: {contactInfo.fax}</li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.address.line1}</li>
              <li>{contactInfo.address.line2}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Business Hours</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {contactInfo.hours.map((entry) => (
                <li key={entry.days}>
                  <span className="block text-slate-300">{entry.days}</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="rounded-sm text-slate-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/sms-terms"
              className="rounded-sm text-slate-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              SMS Terms and Conditions
            </Link>
            <a
              href={siteConfig.employeePortalUrl}
              className="rounded-sm text-slate-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Employee Sign In
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
