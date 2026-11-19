import { useEffect, useRef, useState } from 'react';
import { Check, Copy, EnvelopeSimple, GithubLogo } from '@phosphor-icons/react';
import { EMAIL_ADDRESS, GITHUB_URL, type SiteContent } from '../data/content';

interface ContactSectionProps {
  contact: SiteContent['contact'];
  footer: SiteContent['footer'];
}

export function ContactSection({ contact, footer }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${EMAIL_ADDRESS}`;
    }
  }

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#091525] pt-20 pb-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rounded-xl border border-white/12 bg-[#0c192b] p-8 sm:p-10 lg:p-12">
          <h2 className="max-w-[26ch] text-2xl font-bold tracking-tight text-[#f1f5f9] sm:text-3xl">
            {contact.heading}
          </h2>
          <p className="mt-3 max-w-[54ch] text-base leading-relaxed text-[#94a3b8]">
            {contact.body}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#22d3ee] px-5 py-3 text-sm font-semibold text-[#04131c] transition-all hover:bg-[#67e8f9] active:scale-[0.98]"
            >
              <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
              <span>{contact.primaryCta}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg border border-white/15 bg-[#07111e] px-4 py-3 font-mono text-xs font-medium text-[#e2e8f0] transition-all hover:border-[#22d3ee]/50 hover:text-[#22d3ee] active:scale-[0.98]"
            >
              {copied ? (
                <Check size={16} weight="bold" className="text-[#22d3ee]" aria-hidden="true" />
              ) : (
                <Copy size={16} weight="regular" aria-hidden="true" />
              )}
              <span>{copied ? contact.copiedEmail : EMAIL_ADDRESS}</span>
            </button>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-white/15 bg-[#07111e] px-4 py-3 text-sm font-semibold text-[#f1f5f9] transition-all hover:border-[#22d3ee]/50 hover:text-[#22d3ee] active:scale-[0.98]"
            >
              <GithubLogo size={18} weight="bold" aria-hidden="true" />
              <span>{contact.secondaryCta}</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/8 pt-6 text-xs text-[#64748b] sm:flex-row sm:items-center">
          <p>{footer.credit}</p>
          <p className="font-mono">{EMAIL_ADDRESS}</p>
        </div>
      </div>
    </footer>
  );
}
