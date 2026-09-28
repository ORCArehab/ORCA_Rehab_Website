/** Must match MAX_RESUME_BYTES in the Careers API. Vercel caps requests at ~4.5 MB. */
export const MAX_RESUME_BYTES = 4 * 1024 * 1024;

export type ApplyFormState =
  | { status: "idle" }
  | { status: "error"; message?: string; fieldErrors?: Record<string, string> };
