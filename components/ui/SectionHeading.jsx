export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  maxWidth = "max-w-2xl",
}) {
  const isCentered = align === "center";

  return (
    <div className={`mb-7 ${isCentered ? "text-center mx-auto" : "text-left"} ${maxWidth}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-bold uppercase tracking-widest text-neutral-800 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00A99D] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight leading-snug mb-3">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
