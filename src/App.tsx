import { useEffect, useState } from 'react';
import { SITE_CONTENT, type Locale } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { SelectedWork } from './components/SelectedWork';
import { Approach } from './components/Approach';
import { Background } from './components/Background';
import { ContactSection } from './components/ContactSection';

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param === 'vi' || param === 'ja' || param === 'en') {
    return param;
  }
  const saved = window.localStorage.getItem('duynq15_locale');
  if (saved === 'vi' || saved === 'ja' || saved === 'en') {
    return saved;
  }
  return 'en';
}

export function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const content = SITE_CONTENT[locale];

  useEffect(() => {
    document.documentElement.lang = content.langAttr;
    document.title = content.metaTitle;
    window.localStorage.setItem('duynq15_locale', locale);
  }, [content.langAttr, content.metaTitle, locale]);

  return (
    <div className="min-h-[100dvh] bg-[#07111e] text-[#f1f5f9]">
      <Navbar locale={locale} onLocaleChange={setLocale} nav={content.nav} />
      <main>
        <Hero hero={content.hero} />
        <MetricsStrip metrics={content.metrics} />
        <SelectedWork work={content.work} />
        <Approach approach={content.approach} />
        <Background background={content.background} />
      </main>
      <ContactSection contact={content.contact} footer={content.footer} />
    </div>
  );
}
