import type { SiteContent } from '../data/content';

interface MetricsStripProps {
  metrics: SiteContent['metrics'];
}

export function MetricsStrip({ metrics }: MetricsStripProps) {
  return (
    <section aria-label="Key milestones" className="border-y border-white/10 bg-[#091525]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
        {metrics.map((item) => (
          <div key={item.label} className="py-7 md:px-8 md:first:pl-0 md:last:pr-0">
            <p className="font-mono text-3xl font-bold tracking-tight text-[#22d3ee] sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-[#94a3b8]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
