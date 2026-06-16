import type {Metadata} from 'next';
import Image from 'next/image';
import {AlertTriangle, BusFront, CarTaxiFront, CheckCircle2, ExternalLink, MapPinned, MessageSquareText, Route, ShieldCheck, TrainFront} from 'lucide-react';
import {transportCopy} from '@/data/transport';
import {isLocale} from '@/lib/locale';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/i18n/routing';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const safeLocale = isLocale(locale) ? locale : 'en';
  return pageMetadata(safeLocale, transportCopy[safeLocale].title, '/transport');
}

export default async function TransportPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const copy = transportCopy[locale];
  const moduleIcons = [TrainFront, BusFront, CarTaxiFront, Route];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <section className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-stretch">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase text-[#7a6013]">Step 04</p>
          <h1 className="mt-3 text-3xl font-semibold md:text-5xl">{copy.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/70">{copy.intro}</p>
          <div className="mt-6 flex gap-3 rounded-[1.25rem] border border-gold/50 bg-[#fffaf0]/90 p-4 shadow-sm">
            <AlertTriangle className="mt-1 shrink-0 text-[#7a6013]" size={20} aria-hidden="true" />
            <p className="leading-7 text-ink/78">{copy.warning}</p>
          </div>
        </div>
        <div className="relative min-h-[18rem] overflow-hidden rounded-[1.6rem] border border-white/80 shadow-[0_18px_45px_rgba(31,31,31,0.12)]">
          <Image src="/images/high-speed-rail.webp" alt="" fill sizes="(min-width: 1024px) 25rem, 100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#123735] text-white">
                <TrainFront size={21} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-black text-ink/55">High-speed rail, metro, taxi</p>
                <p className="text-lg font-black text-ink">Passport + payment + Chinese address</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[1.6rem] border border-white/80 bg-white/55 p-4 shadow-[0_16px_40px_rgba(31,31,31,0.06)] md:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {copy.modules.map((item, index) => {
            const Icon = moduleIcons[index] ?? Route;
            return (
              <div key={item.title} className="rounded-[1.25rem] border border-white/80 bg-white/92 p-5 shadow-[0_12px_30px_rgba(31,31,31,0.07)]">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#123735] text-white">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-xl font-black">{item.title}</h2>
                    <p className="mt-1 text-sm font-black text-[#7a6013]">{item.subtitle}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <div key={point} className="flex gap-2 text-sm leading-6 text-ink/72">
                      <CheckCircle2 className="mt-1 shrink-0 text-[#2f6f73]" size={16} aria-hidden="true" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <ol className="mt-4 space-y-2 border-t border-borderRice pt-4">
                  {item.steps.map((step, stepIndex) => (
                    <li key={step} className="flex gap-3 text-sm leading-6 text-ink/72">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f7eedb] text-xs font-black text-ink">{stepIndex + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="rounded-[1.6rem] border border-white/80 bg-white/92 p-5 shadow-[0_16px_40px_rgba(31,31,31,0.07)] md:p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#123735]" size={24} aria-hidden="true" />
            <h2 className="text-2xl font-black">{copy.stationTitle}</h2>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {copy.stationSteps.map((step, index) => (
              <div key={step.title} className="rounded-[1.1rem] border border-borderRice bg-[#fffdf7] p-4">
                <p className="text-sm font-black text-[#7a6013]">0{index + 1}</p>
                <h3 className="mt-1 text-lg font-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/68">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.6rem] border border-white/80 bg-[#123735] p-5 text-white shadow-[0_16px_40px_rgba(31,31,31,0.12)] md:p-6">
          <div className="flex items-center gap-3">
            <MessageSquareText size={23} aria-hidden="true" />
            <h2 className="text-xl font-black">{copy.phraseTitle}</h2>
          </div>
          <div className="mt-5 space-y-3">
            {copy.phrases.map((phrase) => (
              <div key={phrase.chinese} className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-black text-white/58">{phrase.label}</p>
                <p className="mt-2 text-lg font-black">{phrase.chinese}</p>
                <p className="mt-1 text-sm text-white/70">{phrase.pinyin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[1.6rem] border border-white/80 bg-white/72 p-5 shadow-[0_16px_40px_rgba(31,31,31,0.06)] md:p-6">
        <div className="flex items-center gap-3">
          <MapPinned className="text-[#123735]" size={24} aria-hidden="true" />
          <h2 className="text-2xl font-black">{copy.situationTitle}</h2>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {copy.situationCards.map((card) => (
            <div key={card.title} className="rounded-[1.15rem] border border-borderRice bg-[#fffdf7] p-4">
              <h3 className="text-lg font-black">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/68">{card.body}</p>
              <p className="mt-4 rounded-2xl bg-[#f7eedb] p-3 text-sm font-semibold leading-6 text-ink/74">{card.tip}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 border-t border-borderRice pt-5">
          <p className="text-xs font-black uppercase text-ink/45">{copy.sourcesTitle}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {copy.sources.map((source) => (
              <a key={source.href} href={source.href} className="inline-flex items-center gap-2 rounded-full border border-borderRice bg-white px-4 py-2 text-sm font-semibold text-[#123735] hover:bg-[#fffaf0]" target="_blank" rel="noreferrer">
                <ExternalLink size={14} aria-hidden="true" />
                <span>{source.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
