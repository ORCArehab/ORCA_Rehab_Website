import "server-only";

/**
 * Client for the ORCA Careers API (Cloud Run). Server-only: the API key must
 * never reach the browser, so this module can't be imported by client code.
 *
 * The website can only read application forms and submit applications.
 * Everything HR-related lives in the employee portal.
 */

export type QuestionType = "yes_no" | "years" | "text" | "select";

export interface ScreeningQuestion {
  key: string;
  label: string;
  type: QuestionType;
  options: string[] | null;
  required: boolean;
}

export interface ApplicationFormDefinition {
  job: { slug: string; title: string; location: string; employmentType: string };
  maxResumeBytes: number;
  questions: ScreeningQuestion[];
}

export type SubmitResult =
  | { ok: true }
  | { ok: false; kind: "validation"; fieldErrors: Record<string, string> }
  | { ok: false; kind: "unavailable" };

function getConfig() {
  const url = process.env.CAREERS_API_URL?.trim().replace(/\/+$/, "");
  const key = process.env.CAREERS_API_KEY?.trim();
  return url && key ? { url, key } : null;
}

export function isCareersApiConfigured() {
  return getConfig() !== null;
}

/** The job's application form, `null` if it doesn't take online applications, or "unavailable" on error. */
export async function getApplicationForm(slug: string): Promise<ApplicationFormDefinition | null | "unavailable"> {
  const config = getConfig();
  if (!config) return "unavailable";

  try {
    const res = await fetch(`${config.url}/v1/public/jobs/${encodeURIComponent(slug)}/application-form`, {
      headers: { authorization: `Bearer ${config.key}` },
      // Questions change rarely; cache briefly so Cloud Run cold starts don't slow every page view.
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(10_000),
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as ApplicationFormDefinition;
  } catch (error) {
    console.error("[careers-api] could not load application form", { slug, error: String(error) });
    return "unavailable";
  }
}

export async function submitApplicationToApi(form: FormData): Promise<SubmitResult> {
  const config = getConfig();
  if (!config) return { ok: false, kind: "unavailable" };

  try {
    const res = await fetch(`${config.url}/v1/public/applications`, {
      method: "POST",
      headers: { authorization: `Bearer ${config.key}` },
      body: form,
      cache: "no-store",
      signal: AbortSignal.timeout(30_000),
    });
    if (res.ok) return { ok: true };
    if (res.status === 400 || res.status === 413) {
      const body = (await res.json().catch(() => ({}))) as { fieldErrors?: Record<string, string> };
      return { ok: false, kind: "validation", fieldErrors: body.fieldErrors ?? {} };
    }
    // Status only — never the response body or the applicant's details.
    console.error("[careers-api] submission failed", { status: res.status });
    return { ok: false, kind: "unavailable" };
  } catch (error) {
    console.error("[careers-api] submission failed", { error: error instanceof Error ? error.name : "unknown" });
    return { ok: false, kind: "unavailable" };
  }
}
