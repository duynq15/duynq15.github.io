import { useState } from 'react';
import { Briefcase, GraduationCap } from '@phosphor-icons/react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { SiteContent } from '../data/content';

interface BackgroundProps {
  background: SiteContent['background'];
}

export function Background({ background }: BackgroundProps) {
  const [activeTab, setActiveTab] = useState(background.stackCategories[0].id);
  const reduceMotion = useReducedMotion();

  const currentCategory =
    background.stackCategories.find((cat) => cat.id === activeTab) ??
    background.stackCategories[0];

  return (
    <section id="background" className="scroll-reveal border-t border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#f1f5f9] sm:text-4xl">
          {background.heading}
        </h2>

        {/* Interactive Technical Stack Tabs */}
        <div className="mt-10 rounded-xl border border-white/10 bg-[#0c192b] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-bold text-[#f1f5f9]">
              {background.stackHeading}
            </h3>

            <div
              role="tablist"
              aria-label={background.stackHeading}
              className="flex flex-wrap gap-1.5 rounded-lg border border-white/10 bg-[#07111e] p-1"
            >
              {background.stackCategories.map((cat) => {
                const selected = cat.id === currentCategory.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    id={`tab-${cat.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${cat.id}`}
                    onClick={() => setActiveTab(cat.id)}
                    className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                      selected
                        ? 'bg-[#22d3ee] text-[#04131c]'
                        : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              role="tabpanel"
              id={`panel-${currentCategory.id}`}
              aria-labelledby={`tab-${currentCategory.id}`}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="mt-6"
            >
              <p className="max-w-[60ch] text-sm text-[#94a3b8]">
                {currentCategory.summary}
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {currentCategory.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/8 bg-[#07111e]/85 px-3.5 py-2.5 font-mono text-xs text-[#e2e8f0]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Experience & Education Split */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5">
              <Briefcase size={20} weight="regular" className="text-[#22d3ee]" aria-hidden="true" />
              <h3 className="text-lg font-bold text-[#f1f5f9]">
                {background.experienceHeading}
              </h3>
            </div>

            <div className="mt-6 space-y-8">
              {background.experience.map((entry) => (
                <div
                  key={entry.role}
                  className="border-l border-white/15 pl-5"
                >
                  <p className="font-mono text-xs font-medium text-[#22d3ee]">
                    {entry.period}
                  </p>
                  <h4 className="mt-1.5 text-base font-bold text-[#f1f5f9]">
                    {entry.role}
                  </h4>
                  <p className="mt-0.5 text-sm font-medium text-[#cbd5e1]">
                    {entry.org}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#94a3b8]">
                    {entry.highlights.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <GraduationCap size={20} weight="regular" className="text-[#22d3ee]" aria-hidden="true" />
              <h3 className="text-lg font-bold text-[#f1f5f9]">
                {background.educationHeading}
              </h3>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#0c192b] p-6">
              <p className="font-mono text-xs font-medium text-[#22d3ee]">
                {background.education.period}
              </p>
              <h4 className="mt-2 text-base font-bold text-[#f1f5f9]">
                {background.education.school}
              </h4>
              <p className="mt-1 text-sm text-[#cbd5e1]">
                {background.education.degree}
              </p>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-[#f1f5f9]">
                  {background.education.thesisTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
                  {background.education.thesisDetail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
