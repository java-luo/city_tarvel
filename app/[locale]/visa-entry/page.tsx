import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowDown, ExternalLink, FileCheck2, Globe2, Landmark, Plane, ShieldAlert} from 'lucide-react';
import {CountryPolicySelector} from '@/components/CountryPolicySelector';
import {isLocale} from '@/lib/locale';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/i18n/routing';
import {transitVisaFreeCountries, unilateralVisaFreeCountries, visaDetailCopy} from '@/data/visa';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const safeLocale = isLocale(locale) ? locale : 'en';
  return pageMetadata(safeLocale, visaDetailCopy[safeLocale].title, '/visa-entry');
}

export default async function VisaEntryPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const copy = visaDetailCopy[locale];
  const [unilateralSource, faqSource, transitSource, lVisaSource, arrivalCardSource] = copy.sourceLinks;

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <section className="grid gap-6 md:grid-cols-[0.78fr_1.22fr] md:items-end">
        <div>
          <p className="passport-stamp inline-flex px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cinnabar">Step 01</p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">{copy.title}</h1>
        </div>
        <div className="paper-sheet rounded-[1.5rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)]">
          <p className="text-lg leading-8 text-ink/76">{copy.intro}</p>
          <div className="mt-4 flex gap-3 rounded-2xl border border-cinnabar/20 bg-white/70 p-4">
            <ShieldAlert className="mt-1 shrink-0 text-cinnabar" size={21} aria-hidden="true" />
            <div>
              <p className="font-black">{copy.officialOnly}</p>
              <p className="mt-1 text-sm text-ink/62">{copy.checked}</p>
            </div>
          </div>
        </div>
      </section>

      <CountryPolicySelector locale={locale} />

      <section className="mt-10" aria-labelledby="decision-tree">
        <div className="grid gap-4 md:grid-cols-[0.72fr_1.28fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal">Decision tree</p>
            <h2 id="decision-tree" className="mt-3 text-3xl font-black leading-tight md:text-5xl">{copy.decisionTitle}</h2>
          </div>
          <p className="max-w-2xl text-ink/68">{copy.decisionDescription}</p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {copy.pathCards.map((path) => (
            <DecisionCard key={path.id} path={path} labels={copy.pathLabels} />
          ))}
        </div>
      </section>

      <section id="visa-free" className="mt-14 scroll-mt-24">
        <PathHeader number="A" icon={Globe2} label={copy.pathCards[0].label} title={copy.unilateralTitle} summary={copy.unilateralSummary} />
        <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <InfoPanel title={copy.eligibilityTitle} items={copy.eligibilityItems} />
          <InfoPanel title={copy.validityTitle} items={copy.validityItems} />
          <InfoPanel title={copy.documentsTitle} items={copy.visaFreeDocs} className="lg:col-span-2" />
        </div>
        <details className="paper-sheet mt-5 rounded-[1.5rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)]" open>
          <summary className="cursor-pointer list-none font-black text-ink [&::-webkit-details-marker]:hidden">
            {copy.pathLabels.countries}: {copy.unilateralTitle}
          </summary>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {unilateralVisaFreeCountries.map((group) => (
              <CountryGroup key={group.region} title={copy.regionLabels[group.region] || group.region} countries={group.countries} />
            ))}
          </div>
        </details>
        <SourceStrip sources={[unilateralSource, faqSource, arrivalCardSource]} label={copy.pathLabels.source} />
      </section>

      <section id="transit" className="mt-14 scroll-mt-24">
        <PathHeader number="B" icon={Plane} label={copy.pathCards[1].label} title={copy.transitTitle} summary={copy.transitSummary} />
        <InfoPanel title={copy.transitTitle} items={copy.transitItems} className="mt-6" />
        <details className="paper-sheet mt-5 rounded-[1.5rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)]">
          <summary className="cursor-pointer list-none font-black text-ink [&::-webkit-details-marker]:hidden">
            {copy.pathLabels.countries}: 240-hour transit visa-free
          </summary>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {transitVisaFreeCountries.map((group) => (
              <CountryGroup key={group.region} title={copy.regionLabels[group.region] || group.region} countries={group.countries} compact />
            ))}
          </div>
        </details>
        <SourceStrip sources={[transitSource]} label={copy.pathLabels.source} />
      </section>

      <section id="tourist-visa" className="mt-14 scroll-mt-24">
        <PathHeader number="C" icon={FileCheck2} label={copy.pathCards[2].label} title={copy.lVisaTitle} summary={copy.lVisaSummary} />
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <InfoPanel title={copy.lVisaTitle} items={copy.lVisaDocs} />
          <InfoPanel title={copy.mistakesTitle} items={copy.mistakes} />
        </div>
        <SourceStrip sources={[lVisaSource]} label={copy.pathLabels.source} />
      </section>

      <section className="mt-14 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <InfoPanel title={copy.checklistTitle} items={copy.checklistItems} />
        <section className="rounded-[1.6rem] bg-[#123735] p-5 text-white shadow-[0_18px_50px_rgba(31,31,31,0.16)] md:p-7">
          <div className="flex items-center gap-3">
            <Landmark className="text-gold" size={24} aria-hidden="true" />
            <h2 className="text-2xl font-black">{copy.sourcesTitle}</h2>
          </div>
          <div className="mt-5 grid gap-3">
            {copy.sourceLinks.map((source) => (
              <SourceLink key={source.url} source={source} label={copy.sourceLabel} dark />
            ))}
          </div>
        </section>
      </section>
    </article>
  );
}

function DecisionCard({
  path,
  labels
}: {
  path: {label: string; title: string; summary: string; bestFor: string; href: string};
  labels: {bestFor: string; check: string};
}) {
  return (
    <Link href={path.href} className="paper-sheet group flex min-h-72 flex-col rounded-[1.5rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(31,31,31,0.13)]">
      <span className="passport-stamp w-fit px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cinnabar">{path.label}</span>
      <h3 className="mt-6 text-2xl font-black leading-tight">{path.title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/68">{path.summary}</p>
      <div className="mt-auto pt-6">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-teal">{labels.bestFor}</p>
        <p className="mt-2 text-sm leading-6 text-ink/70">{path.bestFor}</p>
        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#123735] px-4 py-2 text-sm font-black text-white">
          {labels.check}
          <ArrowDown className="transition group-hover:translate-y-0.5" size={15} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

function PathHeader({number, icon: Icon, label, title, summary}: {number: string; icon: typeof Globe2; label: string; title: string; summary: string}) {
  return (
    <div className="grid gap-5 rounded-[1.75rem] bg-[#123735] p-5 text-white shadow-[0_18px_50px_rgba(31,31,31,0.15)] md:grid-cols-[auto_1fr] md:p-7">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gold text-2xl font-black text-ink">{number}</div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/18 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-gold">{label}</span>
          <Icon size={22} className="text-gold" aria-hidden="true" />
        </div>
        <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-white/72">{summary}</p>
      </div>
    </div>
  );
}

function CountryGroup({title, countries, compact = false}: {title: string; countries: string[]; compact?: boolean}) {
  return (
    <div className="rounded-[1.25rem] border border-ink/10 bg-white/72 p-4">
      <h3 className="text-lg font-black">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {countries.map((country) => (
          <span key={country} className={`rounded-full border border-ink/10 bg-white/78 px-3 py-2 font-bold text-ink/76 ${compact ? 'text-xs' : 'text-sm'}`}>
            {country}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoPanel({title, items, className = ''}: {title: string; items: string[]; className?: string}) {
  return (
    <section className={`paper-sheet rounded-[1.5rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)] ${className}`}>
      <h2 className="text-2xl font-black">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 rounded-2xl border border-ink/8 bg-white/72 p-4 text-sm leading-6 text-ink/76">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cinnabar" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SourceStrip({sources, label}: {sources: {title: string; publisher: string; url: string}[]; label: string}) {
  return (
    <div className="mt-5 grid gap-3 md:grid-cols-2">
      {sources.map((source) => (
        <SourceLink key={source.url} source={source} label={label} />
      ))}
    </div>
  );
}

function SourceLink({source, label, dark = false}: {source: {title: string; publisher: string; url: string}; label: string; dark?: boolean}) {
  return (
    <Link
      href={source.url}
      target="_blank"
      rel="noreferrer"
      className={`rounded-2xl p-4 transition ${
        dark
          ? 'border border-white/14 bg-white/9 hover:bg-white/14'
          : 'border border-ink/10 bg-white/72 shadow-sm hover:bg-white'
      }`}
    >
      <p className={`text-sm font-black ${dark ? 'text-gold' : 'text-cinnabar'}`}>{source.publisher}</p>
      <p className={`mt-2 font-black leading-6 ${dark ? 'text-white' : 'text-ink'}`}>{source.title}</p>
      <span className={`mt-3 inline-flex items-center gap-2 text-sm ${dark ? 'text-white/70' : 'text-ink/62'}`}>
        {label}
        <ExternalLink size={15} aria-hidden="true" />
      </span>
    </Link>
  );
}
