"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { submitApplicationToApi } from "@/lib/careers-api";
import { isRateLimited } from "@/lib/rate-limit";
import { MAX_RESUME_BYTES, type ApplyFormState } from "./form-state";

const TEXT_FIELDS = ["firstName", "lastName", "email", "phone", "linkedinUrl", "coverLetter", "idempotencyKey"] as const;
const SLUG = /^[a-z0-9-]{1,100}$/;

/**
 * Receives the application form and forwards it to the Careers API, which
 * does the authoritative validation and storage. The checks here only catch
 * obvious problems early and keep junk from reaching the API.
 */
export async function submitApplication(_previous: ApplyFormState, formData: FormData): Promise<ApplyFormState> {
  const position = String(formData.get("position") ?? "");
  if (!SLUG.test(position)) return { status: "error", message: "Please choose a position to apply for." };

  // Bots fill every field, including this one hidden from people. Pretend it worked.
  if (String(formData.get("website") ?? "") !== "") redirect(`/careers/apply/submitted?position=${position}`);

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(`apply:${ip}`)) {
    return { status: "error", message: "Too many attempts. Please wait a few minutes and try again." };
  }

  const resume = formData.get("resume");
  if (!(resume instanceof File) || resume.size === 0) {
    return { status: "error", fieldErrors: { resume: "Please attach your résumé as a PDF" } };
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return { status: "error", fieldErrors: { resume: "Your résumé must be 4 MB or smaller" } };
  }

  // Rebuild the payload from known fields only.
  const payload = new FormData();
  payload.set("position", position);
  for (const name of TEXT_FIELDS) payload.set(name, String(formData.get(name) ?? ""));
  const answers: Record<string, string> = {};
  for (const [name, value] of formData.entries()) {
    if (name.startsWith("answers.") && typeof value === "string") answers[name.slice("answers.".length)] = value;
  }
  payload.set("answers", JSON.stringify(answers));
  payload.set("resume", resume, resume.name || "resume.pdf");

  const result = await submitApplicationToApi(payload);
  if (result.ok) redirect(`/careers/apply/submitted?position=${position}`);

  if (result.kind === "validation") {
    return {
      status: "error",
      message: "Please correct the highlighted fields and submit again.",
      fieldErrors: result.fieldErrors,
    };
  }
  return {
    status: "error",
    message:
      "We couldn't submit your application right now. Your entries are still here — please try again in a few minutes.",
  };
}
