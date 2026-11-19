import { ArrowUpRight, LockSimple } from '@phosphor-icons/react';
import type { ProjectItem, SiteContent } from '../data/content';

interface SelectedWorkProps {
  work: SiteContent['work'];
}

function getGridSpan(span: ProjectItem['span']): string {
  switch (span) {
    case 'wide':
      return 'md:col-span-4';
    case 'narrow':
      return 'md:col-span-2';
    case 'half':
      return 'md:col-span-3';
  }
}

function getSurfaceClass(surface: ProjectItem['surface']): string {
  switch (surface) {
    case 'visual':
      return 'bg-[#0c192b] border-white/12';
    case 'tinted':
      return 'bg-gradient-to-br from-[#0f233b] via-[#0b1b30] to-[#081526] border-[#22d3ee]/20';
    case 'dark':
      return 'bg-[#0a1626] border-white/10';
  }
}

export function SelectedWork({ work }: SelectedWorkProps) {
  return (
    <section id="work" className="scroll-reveal py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#22d3ee]">
          {work.eyebrow}
        </p>
        <h2 className="mt-3 max-w-[34ch] text-3xl font-bold tracking-tight text-[#f1f5f9] sm:text-4xl">
          {work.heading}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-6">
          {work.projects.map((project) => (
            <article
              key={project.id}
              className={`group flex flex-col justify-between overflow-hidden rounded-xl border transition-colors hover:border-[#22d3ee]/45 ${getGridSpan(
                project.span
              )} ${getSurfaceClass(project.surface)}`}
            >
              <div>
                {project.image && (
                  <div className="overflow-hidden border-b border-white/10 bg-[#07111e]">
                    <img
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      decoding="async"
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                        project.span === 'wide' ? 'h-56 sm:h-64' : 'h-48 sm:h-52'
                      }`}
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold tracking-tight text-[#f1f5f9] sm:text-xl">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="transition-colors hover:text-[#22d3ee]"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>

                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.linkLabel ?? 'Open'} ${project.title}`}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-[#07111e] text-[#cbd5e1] transition-colors hover:border-[#22d3ee]/60 hover:text-[#22d3ee]"
                      >
                        <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                      </a>
                    ) : (
                      <span
                        title={work.privateNote}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#07111e]/70 text-[#64748b]"
                      >
                        <LockSimple size={15} weight="regular" aria-hidden="true" />
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">
                    {project.summary}
                  </p>

                  <p className="mt-3 text-xs font-medium text-[#cbd5e1]">
                    {project.impact}
                  </p>

                  {project.specs && (
                    <dl className="mt-5 grid grid-cols-1 gap-2.5 border-t border-white/10 pt-5">
                      {project.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="rounded-lg border border-white/8 bg-[#07111e]/60 px-3 py-2"
                        >
                          <dt className="font-mono text-[11px] font-semibold text-[#22d3ee]">
                            {spec.label}
                          </dt>
                          <dd className="mt-0.5 text-xs text-[#cbd5e1]">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/8 px-6 py-4">
                <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-white/10 bg-[#07111e]/80 px-2 py-0.5 font-mono text-[11px] text-[#cbd5e1]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.href && project.linkLabel && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 whitespace-nowrap font-mono text-xs font-medium text-[#22d3ee] transition-colors hover:text-[#67e8f9]"
                  >
                    <span>{project.linkLabel}</span>
                    <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
