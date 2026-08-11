"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const inputStyles =
  "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-2 focus:outline-offset-1 focus:outline-blue-600";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Placeholder submit handler for Version 1.
    // Connect this form to an email service, CRM, or API route (e.g. a Next.js Route Handler)
    // to deliver submissions once a backend destination has been decided.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-slate-900">Thank you for reaching out</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          This form is not yet connected to a live inbox. Please contact us directly using the information provided
          on this page until form submissions are enabled.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-900">
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-900">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-slate-900">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputStyles} />
        </div>
        <div>
          <label htmlFor="organization" className="text-sm font-medium text-slate-900">
            Organization
          </label>
          <input id="organization" name="organization" type="text" autoComplete="organization" className={inputStyles} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-900">
            Message
          </label>
          <textarea id="message" name="message" rows={5} required className={inputStyles} />
        </div>

        <div className="flex items-start gap-3 sm:col-span-2">
          <input
            id="smsConsent"
            name="smsConsent"
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
          />
          <label htmlFor="smsConsent" className="text-sm leading-relaxed text-slate-600">
            I consent to receive customer care text messages from ORCA Rehab. Message frequency may vary. Message
            and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is not a condition of
            receiving services. View our{" "}
            <Link href="/privacy-policy" className="font-medium text-blue-600 underline hover:text-blue-700">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/sms-terms" className="font-medium text-blue-600 underline hover:text-blue-700">
              SMS Terms and Conditions
            </Link>{" "}
            for more information.
          </label>
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit">
          Send Message
          <Send className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </form>
  );
}
