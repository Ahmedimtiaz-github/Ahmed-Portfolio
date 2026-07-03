type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm tracking-widest uppercase text-violet mb-2">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl text-ink-dim leading-relaxed">{description}</p>
      )}
    </div>
  );
}
