import { useState } from 'react';
import { EnvelopeSimple, List, X } from '@phosphor-icons/react';
import { EMAIL_ADDRESS, type Locale, type SiteContent } from '../data/content';

interface NavbarProps {
  locale: Locale;
  onLocaleChange: (next: Locale) => void;
  nav: SiteContent['nav'];
}

const LOCALES: Array<{ code: Locale; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'vi', label: 'VI' },
  { code: 'ja', label: 'JA' },
];

export function Navbar({ locale, onLocaleChange, nav }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#work', label: nav.work },
    { href: '#approach', label: nav.approach },
    { href: '#background', label: nav.background },
    { href: '#contact', label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111e]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-[#f1f5f9] transition-colors hover:text-[#22d3ee]"
        >
          <span className="inline-block h-2 w-2 rounded-xs bg-[#22d3ee]" aria-hidden="true" />
          <span>duynq15</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-[#94a3b8] transition-colors hover:text-[#f1f5f9]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex items-center rounded-lg border border-white/10 bg-[#0c192b] p-0.5"
          >
            {LOCALES.map((item) => {
              const active = item.code === locale;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onLocaleChange(item.code)}
                  aria-pressed={active}
                  className={`cursor-pointer rounded-md px-2.5 py-1 font-mono text-xs font-medium transition-colors ${
                    active
                      ? 'bg-[#22d3ee] text-[#04131c]'
                      : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="hidden items-center gap-2 whitespace-nowrap rounded-lg bg-[#22d3ee] px-3.5 py-2 text-sm font-semibold text-[#04131c] transition-all hover:bg-[#67e8f9] active:scale-[0.98] sm:inline-flex"
          >
            <EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
            <span>{nav.primaryCta}</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-[#0c192b] text-[#f1f5f9] md:hidden"
          >
            {menuOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#07111e] px-5 py-4 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-3">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-1.5 text-sm font-medium text-[#cbd5e1] hover:bg-white/5 hover:text-[#f1f5f9]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#22d3ee] px-4 py-2.5 text-sm font-semibold text-[#04131c]"
            >
              <EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
              <span>{nav.primaryCta}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
