import type { SiteContent } from '../data/content';

interface ApproachProps {
  approach: SiteContent['approach'];
}

export function Approach({ approach }: ApproachProps) {
  return (
    <section
      id="approach"
      className="scroll-reveal border-t border-white/10 bg-[#091525] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-[22ch] text-3xl font-bold tracking-tight text-[#f1f5f9] sm:text-4xl">
          {approach.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {approach.principles.map((item) => (
            <div key={item.index} className="border-t border-[#22d3ee]/30 pt-6">
              <span className="font-mono text-xs font-semibold text-[#22d3ee]">
                {item.index}
              </span>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-[#f1f5f9]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
