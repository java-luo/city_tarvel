import type {Metadata} from 'next';
import Image from 'next/image';
import {AlertTriangle, CarFront, ClipboardCheck, ExternalLink, Hotel, Languages, Map, Plane, Router, ShieldCheck, Smartphone, Soup, Store, TrainFront, WalletCards, Wifi} from 'lucide-react';
import {pageCopy} from '@/data/pages';
import {isLocale} from '@/lib/locale';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/i18n/routing';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const safeLocale = isLocale(locale) ? locale : 'en';
  return pageMetadata(safeLocale, pageCopy[safeLocale].apps.title, '/apps-internet');
}

export default async function AppsInternetPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const copy = pageCopy[locale].apps;
  const categoryIcons = [WalletCards, Map, Languages, CarFront, TrainFront, Hotel, Soup];
  const networkIcons = [Smartphone, Plane, Store, Router];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <h1 className="text-3xl font-semibold md:text-5xl">{copy.title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/70">{copy.intro}</p>
      <div className="mt-6 flex gap-3 rounded-[1.25rem] border border-gold/50 bg-[#fffaf0]/90 p-4 shadow-sm">
        <AlertTriangle className="mt-1 shrink-0 text-[#7a6013]" size={20} aria-hidden="true" />
        <p className="leading-7 text-ink/78">{copy.warning}</p>
      </div>
      <section className="mt-10 rounded-[1.6rem] border border-white/80 bg-white/55 p-4 shadow-[0_16px_40px_rgba(31,31,31,0.06)] md:p-6">
        <div className="flex flex-col gap-2 border-b border-borderRice pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase text-[#7a6013]">01 Internet</p>
            <h2 className="mt-2 text-2xl font-black md:text-3xl">{copy.networkGuide.title}</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-ink/68">{copy.networkGuide.intro}</p>
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {copy.networkGuide.options.map((option, index) => {
            const OptionIcon = networkIcons[index] ?? Wifi;
            return (
              <div key={option.title} className="rounded-[1.25rem] border border-white/80 bg-white/92 p-5 shadow-[0_12px_30px_rgba(31,31,31,0.07)]">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#123735] text-white">
                    <OptionIcon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black">{option.title}</h3>
                    <p className="mt-1 text-sm font-black text-[#7a6013]">{option.bestFor}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-ink/70">{option.body}</p>
                <ol className="mt-4 space-y-2">
                  {option.steps.map((step, stepIndex) => (
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
        <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="rounded-[1.25rem] border border-white/80 bg-[#123735] p-5 text-white shadow-[0_12px_30px_rgba(31,31,31,0.1)]">
            <div className="flex items-center gap-3">
              <ClipboardCheck size={22} aria-hidden="true" />
              <h3 className="text-lg font-black">{copy.networkGuide.checklistTitle}</h3>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {copy.networkGuide.checklist.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-3 text-sm leading-6 text-white/88">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-gold/40 bg-[#fffaf0] p-5 shadow-[0_12px_30px_rgba(31,31,31,0.06)]">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#7a6013]" size={22} aria-hidden="true" />
              <h3 className="text-lg font-black">{copy.networkGuide.noteTitle}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/72">{copy.networkGuide.note}</p>
            <div className="mt-4 border-t border-gold/30 pt-4">
              <p className="text-xs font-black uppercase text-ink/45">{copy.networkGuide.sourcesTitle}</p>
              <div className="mt-2 space-y-2">
                {copy.networkGuide.sources.map((source) => (
                  <a key={source.href} href={source.href} className="flex items-center gap-2 text-sm font-semibold text-[#123735] hover:underline" target="_blank" rel="noreferrer">
                    <ExternalLink size={14} aria-hidden="true" />
                    <span>{source.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 rounded-[1.6rem] border border-white/80 bg-white/55 p-4 shadow-[0_16px_40px_rgba(31,31,31,0.06)] md:p-6">
        <div className="border-b border-borderRice pb-5">
          <p className="text-sm font-black uppercase text-[#7a6013]">02 Apps</p>
          <h2 className="mt-2 text-2xl font-black md:text-3xl">{copy.appModuleTitle}</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-ink/68">{copy.intro}</p>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-[14rem_minmax(0,1fr)]">
          <aside className="rounded-[1.25rem] border border-[#123735]/15 bg-[#123735] p-3 text-white shadow-[0_10px_26px_rgba(31,31,31,0.1)] lg:sticky lg:top-24 lg:self-start">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {copy.appGroups.map((group, index) => {
                const CategoryIcon = categoryIcons[index] ?? Wifi;
                return (
                  <a key={group.category} href={`#app-group-${index}`} className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-black transition hover:bg-white/10">
                    <CategoryIcon size={18} aria-hidden="true" />
                    <span>{group.category}</span>
                  </a>
                );
              })}
            </div>
          </aside>
          <div className="overflow-hidden rounded-[1.25rem] border border-white/80 bg-white/92 shadow-[0_14px_36px_rgba(31,31,31,0.08)]">
            {copy.appGroups.map((group, index) => {
              const CategoryIcon = categoryIcons[index] ?? Wifi;
              return (
                <section key={group.category} id={`app-group-${index}`} className="grid border-b border-borderRice last:border-b-0 md:grid-cols-[12rem_minmax(0,1fr)]">
                  <div className="bg-[#f7eedb] p-5">
                    <div className="flex items-center gap-3 md:block">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#123735] text-white md:mb-4">
                        <CategoryIcon size={21} aria-hidden="true" />
                      </span>
                      <div>
                        <h2 className="text-xl font-black">{group.category}</h2>
                        <p className="mt-1 text-sm leading-6 text-ink/64">{group.note}</p>
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-borderRice">
                    {group.apps.map((app) => (
                      <div key={`${group.category}-${app.name}`} className="flex gap-4 p-5 transition hover:bg-[#fffaf0]">
                        <Image
                          src={app.iconSrc}
                          alt=""
                          width={56}
                          height={56}
                          className="h-14 w-14 shrink-0 rounded-[1.05rem] object-cover shadow-sm"
                        />
                        <div className="min-w-0">
                          <h3 className="text-base font-black leading-6">{app.name}</h3>
                          <p className="mt-1 text-sm leading-6 text-ink/68">{app.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
