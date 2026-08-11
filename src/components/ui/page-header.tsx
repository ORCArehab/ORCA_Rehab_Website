interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
        {description ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p> : null}
      </div>
    </div>
  );
}
