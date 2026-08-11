import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "SMS Terms and Conditions",
  description: "ORCA Rehab's SMS Terms and Conditions governing text message communications.",
  openGraph: {
    title: "SMS Terms and Conditions | ORCA Rehab",
    description: "ORCA Rehab's SMS Terms and Conditions governing text message communications.",
  },
};

export default function SmsTermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="ORCA Rehab SMS Terms and Conditions" />

      <Section background="white">
        <div className="max-w-3xl space-y-8">
          <p className="text-sm text-slate-500">Last Updated: August 11, 2026</p>

          <p className="text-base leading-relaxed text-slate-600">
            These SMS Terms and Conditions (&ldquo;SMS Terms&rdquo;) govern text message communications from ORCA
            Rehab (&ldquo;ORCA Rehab,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By providing
            your mobile phone number and opting in to receive SMS messages from ORCA Rehab, you agree to these SMS
            Terms.
          </p>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">1. Consent for SMS Communication</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              By opting in to receive SMS messages from ORCA Rehab, you consent to receive text messages at the
              mobile phone number you provide.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Phone numbers and SMS consent information obtained through our SMS opt-in process will not be sold,
              rented, or shared with third parties or affiliates for marketing or promotional purposes. Your
              information will be used for communications related to ORCA Rehab and its services, subject to our{" "}
              <Link href="/privacy-policy" className="font-semibold text-blue-600 underline hover:text-blue-700">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Consent to receive SMS messages is not a condition of receiving services from ORCA Rehab.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">2. Types of SMS Communications</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              If you opt in, you may receive customer-care and service-related SMS messages from ORCA Rehab. These
              communications may include:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-relaxed text-slate-600">
              <li>Appointment-related communications</li>
              <li>Scheduling and coordination messages</li>
              <li>Responses to questions or requests</li>
              <li>Service-related notifications</li>
              <li>Follow-up communications</li>
              <li>Other customer-care communications related to ORCA Rehab services</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              SMS messages are intended to facilitate communication between ORCA Rehab and individuals who have
              consented to receive text messages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">3. Message Frequency</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Message frequency varies depending on your interactions with ORCA Rehab and the nature of the services
              or communications requested.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">4. Message and Data Rates</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Message and data rates may apply depending on your mobile carrier and wireless service plan. ORCA
              Rehab is not responsible for charges imposed by your mobile carrier.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Carrier rates may vary for domestic and international messages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">5. SMS Opt-In</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              You may opt in to receive SMS communications through the consent form available on the ORCA Rehab
              website.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The SMS consent form will include language substantially similar to:
            </p>
            <blockquote className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5 text-base leading-relaxed text-slate-600 italic">
              &ldquo;I consent to receive customer care text messages from ORCA Rehab. Message frequency may vary.
              Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is not a
              condition of receiving services. View our Privacy Policy and SMS Terms and Conditions for more
              information.&rdquo;
            </blockquote>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              By submitting the form with the SMS consent option selected, you confirm that you are authorized to
              use the mobile number provided and consent to receive SMS communications from ORCA Rehab.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">6. Opt-Out Instructions</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              You may opt out of SMS communications at any time by replying STOP to a message from ORCA Rehab.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              After submitting an opt-out request, you may receive a final confirmation message indicating that you
              have been unsubscribed. You will no longer receive SMS messages unless you subsequently opt in again.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              You may also contact ORCA Rehab directly to request removal from SMS communications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">7. Help and Support</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              For assistance with SMS communications, reply HELP to a message from ORCA Rehab.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              You may also contact ORCA Rehab directly through the contact information provided on our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">8. SMS Participation Is Optional</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Receiving SMS communications is optional. If you do not wish to receive SMS messages from ORCA Rehab,
              do not select the SMS consent checkbox when submitting an applicable website form.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Choosing not to receive SMS messages will not prevent you from receiving services from ORCA Rehab.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">9. Standard Messaging Disclosures</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              By opting in to ORCA Rehab SMS communications, you acknowledge that:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-relaxed text-slate-600">
              <li>Message and data rates may apply.</li>
              <li>Message frequency may vary.</li>
              <li>Reply STOP to opt out at any time.</li>
              <li>Reply HELP for assistance.</li>
              <li>Consent to receive SMS messages is not a condition of receiving services.</li>
              <li>
                Mobile information and SMS consent will not be shared with third parties or affiliates for marketing
                or promotional purposes.
              </li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              For additional information regarding how ORCA Rehab collects, uses, and protects information, please
              review our{" "}
              <Link href="/privacy-policy" className="font-semibold text-blue-600 underline hover:text-blue-700">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">10. Changes to These SMS Terms</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              ORCA Rehab may update these SMS Terms and Conditions from time to time. Any changes will be posted on
              the ORCA Rehab website with an updated effective date. Continued participation in the SMS program
              following an update constitutes acceptance of the revised terms, to the extent permitted by
              applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">11. Contact Us</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              If you have questions regarding these SMS Terms and Conditions or ORCA Rehab&apos;s SMS communications,
              please contact ORCA Rehab using the contact information provided on our website.
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
