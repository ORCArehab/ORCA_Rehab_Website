import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ORCA Rehab's SMS Privacy Policy explaining how we collect, use, protect, and disclose SMS communication data.",
  openGraph: {
    title: "Privacy Policy | ORCA Rehab",
    description:
      "ORCA Rehab's SMS Privacy Policy explaining how we collect, use, protect, and disclose SMS communication data.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="ORCA Rehab SMS Privacy Policy" />

      <Section background="white">
        <div className="max-w-3xl space-y-8">
          <p className="text-sm text-slate-500">Last Updated: August 11, 2026</p>

          <p className="text-base leading-relaxed text-slate-600">
            ORCA Rehab (&ldquo;ORCA Rehab,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) values the
            privacy of your communications and is committed to safeguarding the information associated with SMS
            communications.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            This SMS Privacy Policy explains how we collect, use, protect, retain, and disclose information when you
            communicate with ORCA Rehab through text messaging.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            ORCA Rehab does not sell, rent, or share SMS contact information or SMS consent information with third
            parties or affiliates for marketing or promotional purposes.
          </p>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">1. Types of SMS Data Collected</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              When you communicate with ORCA Rehab via SMS, we may collect information including:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-relaxed text-slate-600">
              <li>Your mobile phone number</li>
              <li>The content of messages you send to us</li>
              <li>Messages sent by ORCA Rehab to you</li>
              <li>The date and time of SMS communications</li>
              <li>Information you voluntarily provide through SMS</li>
              <li>Records of your SMS consent and opt-in or opt-out status</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Depending on the nature of your communication with ORCA Rehab, messages may contain information
              necessary to respond to your request or provide our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">2. How We Use SMS Data</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Information collected through SMS communications may be used to:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-relaxed text-slate-600">
              <li>Respond to your inquiries</li>
              <li>Provide customer care and support</li>
              <li>Communicate regarding appointments or scheduling</li>
              <li>Coordinate services</li>
              <li>Provide service-related notifications</li>
              <li>Respond to requests from patients, providers, facilities, or other individuals with whom ORCA Rehab works</li>
              <li>Maintain records of communication where appropriate</li>
              <li>Comply with applicable legal and regulatory obligations</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              ORCA Rehab will not use your SMS contact information or SMS consent information for third-party
              marketing or promotional purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              3. SMS Consent and Mobile Information
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Your consent to receive SMS messages applies specifically to communications from ORCA Rehab.
            </p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-slate-900">
              Mobile information will not be shared with third parties or affiliates for marketing or promotional
              purposes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Information sharing with service providers that support ORCA Rehab&apos;s SMS communications may occur
              only as necessary to provide those communications and subject to appropriate privacy and security
              requirements.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              SMS opt-in data and consent will not be shared with third parties for their marketing or promotional
              purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">4. Protection of SMS Data</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              ORCA Rehab uses administrative, technical, and organizational safeguards designed to protect SMS
              contact and communication data against unauthorized access, use, disclosure, alteration, or
              destruction.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              While no method of electronic communication or data storage can be guaranteed to be completely
              secure, ORCA Rehab takes reasonable measures appropriate to the nature and sensitivity of the
              information it handles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">5. Disclosure of SMS Data</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              ORCA Rehab does not sell SMS contact or content data.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We may disclose information when reasonably necessary to:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-relaxed text-slate-600">
              <li>Comply with applicable laws, regulations, court orders, subpoenas, or other lawful requests</li>
              <li>
                Protect the rights, property, security, or safety of ORCA Rehab, our patients, users, personnel, or
                others
              </li>
              <li>Provide services requested by you</li>
              <li>
                Work with service providers that perform functions on our behalf, subject to appropriate privacy and
                security obligations
              </li>
              <li>Fulfill other purposes authorized or consented to by you</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              SMS consent and opt-in information will not be provided to third parties for marketing or promotional
              purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">6. Your Rights and Choices</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Depending on applicable law, you may have the right to request access to, correction of, or deletion
              of certain personal information maintained by ORCA Rehab.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Some information may need to be retained when required or permitted by applicable law, regulation,
              contractual obligation, or legitimate business requirement.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              You may opt out of SMS communications at any time by replying <strong className="font-semibold text-slate-900">STOP</strong> to
              an ORCA Rehab text message.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              For assistance with SMS communications, reply <strong className="font-semibold text-slate-900">HELP</strong> or
              contact ORCA Rehab directly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">7. Data Retention</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              ORCA Rehab retains personal information only for as long as reasonably necessary to fulfill the
              purposes for which it was collected and to satisfy applicable legal, regulatory, accounting,
              operational, or reporting requirements.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              When determining an appropriate retention period, ORCA Rehab may consider the amount, nature, and
              sensitivity of the information; the purposes for which the information is processed; potential risks
              associated with unauthorized use or disclosure; and applicable legal and regulatory requirements.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              When information is no longer reasonably necessary and no legal or regulatory requirement requires its
              continued retention, ORCA Rehab may securely delete, destroy, or anonymize the information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">8. SMS Messaging Disclosures</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              By opting in to receive SMS communications from ORCA Rehab:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-relaxed text-slate-600">
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>
                Reply <strong className="font-semibold text-slate-900">STOP</strong> at any time to opt out.
              </li>
              <li>
                Reply <strong className="font-semibold text-slate-900">HELP</strong> for assistance.
              </li>
              <li>Consent to receive SMS communications is not a condition of receiving services from ORCA Rehab.</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Please review our{" "}
              <Link href="/sms-terms" className="font-semibold text-blue-600 underline hover:text-blue-700">
                SMS Terms and Conditions
              </Link>{" "}
              for additional information regarding ORCA Rehab&apos;s SMS communications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              9. Changes to This SMS Privacy Policy
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              ORCA Rehab reserves the right to update or modify this SMS Privacy Policy from time to time.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Changes will become effective when the revised policy is posted on our website, unless otherwise
              required by applicable law. The &ldquo;Last Updated&rdquo; date at the top of this policy indicates
              when the policy was most recently revised.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">10. Contact Us</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              If you have questions or concerns regarding this SMS Privacy Policy, ORCA Rehab&apos;s SMS practices,
              or your personal information, please contact us using the contact information provided on our
              website.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <p className="text-base font-semibold text-slate-900">ORCA Rehab</p>
            <p className="text-sm text-slate-500">Physiatry and Rehabilitation Services</p>
          </div>
        </div>
      </Section>
    </>
  );
}
