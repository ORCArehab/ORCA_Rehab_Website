"use client";

import { useActionState, useRef, useState, startTransition, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { AlertCircle, FileText, Loader2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitApplication } from "@/app/careers/apply/actions";
import { MAX_RESUME_BYTES, type ApplyFormState } from "@/app/careers/apply/form-state";

type QuestionType = "yes_no" | "years" | "text" | "select";

export interface ApplicationFormQuestion {
  key: string;
  label: string;
  type: QuestionType;
  options: string[] | null;
  required: boolean;
}

const inputStyles =
  "rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-2 focus:outline-offset-1 focus:outline-blue-600";

function inputClass(error?: string, size = "mt-1.5 w-full") {
  return `${size} ${inputStyles} ${error ? "border-red-500" : "border-slate-300"}`;
}

const initialState: ApplyFormState = { status: "idle" };

export function ApplicationForm({ position, questions }: { position: string; questions: ApplicationFormQuestion[] }) {
  const [state, formAction, isPending] = useActionState(submitApplication, initialState);
  // One key per form load: a double-click or retry is recognized as the same application.
  const [idempotencyKey] = useState(() => crypto.randomUUID());
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [resumeName, setResumeName] = useState<string | null>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const serverErrors = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const errors = { ...serverErrors, ...clientErrors };
  const message = state.status === "error" ? state.message : undefined;

  function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setResumeName(file?.name ?? null);
    setClientErrors((previous) => {
      const next = { ...previous };
      delete next.resume;
      if (file && !(file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf"))) {
        next.resume = "Please upload your résumé as a PDF";
      } else if (file && file.size > MAX_RESUME_BYTES) {
        next.resume = "Your résumé must be 4 MB or smaller";
      }
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Submit manually rather than via `action` so React doesn't clear the form on a validation error.
    event.preventDefault();
    if (isPending) return;
    if (clientErrors.resume) {
      errorSummaryRef.current?.focus();
      return;
    }
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" aria-busy={isPending}>
      <input type="hidden" name="position" value={position} />
      <input type="hidden" name="idempotencyKey" value={idempotencyKey} />
      {/* Hidden from people; bots that fill it are ignored. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {message || Object.keys(errors).length > 0 ? (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p>{message ?? "Please correct the highlighted fields and submit again."}</p>
        </div>
      ) : null}

      <fieldset>
        <legend className="text-lg font-semibold text-slate-900">Your Information</legend>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <TextField name="firstName" label="First Name" autoComplete="given-name" required error={errors.firstName} />
          <TextField name="lastName" label="Last Name" autoComplete="family-name" required error={errors.lastName} />
          <TextField name="email" label="Email Address" type="email" autoComplete="email" required error={errors.email} />
          <TextField name="phone" label="Phone Number" type="tel" autoComplete="tel" required error={errors.phone} />
          <div className="sm:col-span-2">
            <TextField
              name="linkedinUrl"
              label="LinkedIn Profile URL"
              type="url"
              optional
              placeholder="https://www.linkedin.com/in/your-name"
              error={errors.linkedinUrl}
            />
          </div>
        </div>
      </fieldset>

      {questions.length > 0 ? (
        <fieldset>
          <legend className="text-lg font-semibold text-slate-900">Screening Questions</legend>
          <div className="mt-4 space-y-6">
            {questions.map((question) => (
              <Question key={question.key} question={question} error={errors[`answers.${question.key}`]} />
            ))}
          </div>
        </fieldset>
      ) : null}

      <fieldset>
        <legend className="text-lg font-semibold text-slate-900">Résumé</legend>
        <label
          htmlFor="resume"
          className={`mt-4 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors hover:border-blue-400 hover:bg-blue-50/40 ${
            errors.resume ? "border-red-400" : "border-slate-300"
          }`}
        >
          {resumeName ? (
            <FileText className="h-8 w-8 text-blue-600" aria-hidden="true" />
          ) : (
            <Upload className="h-8 w-8 text-slate-400" aria-hidden="true" />
          )}
          <span className="text-sm font-medium text-slate-900">
            {resumeName ?? "Choose your résumé"}
            <span className="text-red-600"> *</span>
          </span>
          <span className="text-xs text-slate-500">
            {resumeName ? "Click to choose a different file" : "PDF only, up to 4 MB"}
          </span>
          <input
            id="resume"
            name="resume"
            type="file"
            accept="application/pdf,.pdf"
            required
            onChange={handleResumeChange}
            aria-describedby={errors.resume ? "resume-error" : "resume-hint"}
            aria-invalid={errors.resume ? true : undefined}
            className="sr-only"
          />
        </label>
        <p id="resume-hint" className="sr-only">
          PDF only, up to 4 MB
        </p>
        <FieldError id="resume-error" error={errors.resume} />
      </fieldset>

      <fieldset>
        <legend className="text-lg font-semibold text-slate-900">
          Additional Comments / Cover Letter <span className="text-sm font-normal text-slate-500">(optional)</span>
        </legend>
        <label htmlFor="coverLetter" className="sr-only">
          Additional comments or cover letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={6}
          maxLength={5000}
          aria-invalid={errors.coverLetter ? true : undefined}
          className={inputClass(errors.coverLetter)}
        />
        <FieldError error={errors.coverLetter} />
      </fieldset>

      <div className="border-t border-slate-200 pt-6">
        <p className="mb-4 text-xs leading-relaxed text-slate-500">
          By submitting, you confirm the information above is accurate. We use it only to evaluate your application.
          See our{" "}
          <Link href="/privacy-policy" className="font-medium text-blue-600 underline hover:text-blue-700">
            Privacy Policy
          </Link>
          .
        </p>
        <Button type="submit" disabled={isPending} className="w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting…
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </div>
    </form>
  );
}

function FieldError({ error, id }: { error?: string; id?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600">
      {error}
    </p>
  );
}

function TextField({
  name,
  label,
  type = "text",
  autoComplete,
  required,
  optional,
  placeholder,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-slate-900">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
        {optional ? <span className="font-normal text-slate-500"> (optional)</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputClass(error)}
      />
      <FieldError id={`${name}-error`} error={error} />
    </div>
  );
}

function Question({ question, error }: { question: ApplicationFormQuestion; error?: string }) {
  const name = `answers.${question.key}`;
  const id = `q-${question.key}`;
  const requiredMark = question.required ? <span className="text-red-600"> *</span> : null;

  if (question.type === "yes_no" || question.type === "select") {
    const options = question.type === "yes_no" ? ["yes", "no"] : (question.options ?? []);
    return (
      <div role="radiogroup" aria-labelledby={`${id}-label`} aria-describedby={error ? `${id}-error` : undefined}>
        <p id={`${id}-label`} className="text-sm font-medium text-slate-900">
          {question.label}
          {requiredMark}
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          {options.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-blue-600"
            >
              <input type="radio" name={name} value={option} required={question.required} className="h-4 w-4 accent-blue-600" />
              {question.type === "yes_no" ? (option === "yes" ? "Yes" : "No") : option}
            </label>
          ))}
        </div>
        <FieldError id={`${id}-error`} error={error} />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-900">
        {question.label}
        {requiredMark}
      </label>
      {question.type === "years" ? (
        <div className="mt-1.5 flex items-center gap-2">
          <input
            id={id}
            name={name}
            type="number"
            inputMode="decimal"
            min={0}
            max={60}
            step={0.5}
            required={question.required}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            className={inputClass(error, "w-28")}
          />
          <span className="text-sm text-slate-600">years</span>
        </div>
      ) : (
        <input
          id={id}
          name={name}
          type="text"
          maxLength={1000}
          required={question.required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClass(error)}
        />
      )}
      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}
