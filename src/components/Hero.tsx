import { EnvelopeSimple, GithubLogo } from '@phosphor-icons/react';
import { motion, useReducedMotion } from 'motion/react';
import { EMAIL_ADDRESS, GITHUB_URL, type SiteContent } from '../data/content';

interface HeroProps {
  hero: SiteContent['hero'];
}

export function Hero({ hero }: HeroProps) {
  const reduceMotion = useReducedMotion();

  const enterProps = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0.92, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <motion.p
            {...enterProps(0)}
            className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#22d3ee]"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...enterProps(0.06)}
            className="mt-4 text-4xl font-extrabold tracking-tight text-[#f1f5f9] leading-[1.1] sm:text-5xl lg:text-[3.25rem]"
          >
            <span className="block">{hero.headlineLine1}</span>
            <span className="block text-[#cbd5e1]">{hero.headlineLine2}</span>
          </motion.h1>

          <motion.p
            {...enterProps(0.12)}
            className="mt-6 max-w-[52ch] text-base leading-relaxed text-[#94a3b8] sm:text-lg"
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            {...enterProps(0.18)}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#22d3ee] px-5 py-3 text-sm font-semibold text-[#04131c] transition-all hover:bg-[#67e8f9] active:scale-[0.98]"
            >
              <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
              <span>{hero.primaryCta}</span>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-white/15 bg-[#0c192b] px-5 py-3 text-sm font-semibold text-[#f1f5f9] transition-all hover:border-[#22d3ee]/50 hover:bg-[#11233b] active:scale-[0.98]"
            >
              <GithubLogo size={18} weight="bold" aria-hidden="true" />
              <span>{hero.secondaryCta}</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          {...enterProps(0.12)}
          className="flex justify-start lg:col-span-5 lg:justify-end"
        >
          <div className="relative w-full max-w-[320px] overflow-hidden rounded-xl border border-white/12 bg-[#0c192b] shadow-2xl shadow-black/40 sm:max-w-[380px]">
            <img
              src="/images/avatar.jpg"
              alt={hero.portraitAlt}
              width={460}
              height={460}
              fetchPriority="high"
              decoding="async"
              className="aspect-square w-full object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07111e]/60 via-[#07111e]/15 to-transparent"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
