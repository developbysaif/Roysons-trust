export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  maxWidth = "max-w-2xl",
}) {
  const isCentered = align === "center";

  return (
    <div className={`mb-12 ${isCentered ? "text-center mx-auto" : "text-left"} ${maxWidth}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A99D]/10 border border-[#00A99D]/30 text-xs font-black uppercase tracking-widest text-[#042E3A] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00A99D] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042E3A] tracking-tight leading-snug mb-3">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
