import type {Metadata} from 'next';
import Image from 'next/image';
import type {LucideIcon} from 'lucide-react';
import {
  AlertTriangle,
  BedDouble,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileText,
  Home,
  KeyRound,
  Landmark,
  MapPinned,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  UserCheck,
  WalletCards
} from 'lucide-react';
import {hotelGuideCopy} from '@/data/hotel';
import {isLocale} from '@/lib/locale';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/i18n/routing';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const safeLocale = isLocale(locale) ? locale : 'en';
  return pageMetadata(safeLocale, hotelGuideCopy[safeLocale].title, '/hotel-check-in');
}

export default async function HotelCheckInPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const copy = hotelGuideCopy[locale];
  const essentialIcons = [BedDouble, Home, PhoneCall];
  const stayIcons = [BedDouble, Building2, CalendarCheck];
  const deskIcons = [FileText, UserCheck, ClipboardCheck, WalletCards, KeyRound];
  const registrationIcons = [ShieldCheck, Smartphone, Landmark, MapPinned];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex flex-col justify-center rounded-[1.75rem] border border-white/80 bg-white/82 p-5 shadow-[0_18px_48px_rgba(31,31,31,0.08)] md:p-7">
          <p className="passport-stamp inline-flex w-fit px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cinnabar">Step 05</p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">{copy.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72">{copy.intro}</p>
          <div className="mt-6 flex gap-3 rounded-[1.35rem] border border-teal/18 bg-white/68 p-4 shadow-sm">
            <ShieldCheck className="mt-1 shrink-0 text-teal" size={22} aria-hidden="true" />
            <div>
              <p className="font-black text-ink">{copy.checked}</p>
              <p className="mt-1 text-sm leading-6 text-ink/62">{copy.officialNote}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-white/80 shadow-[0_22px_60px_rgba(31,31,31,0.14)]">
            <Image src="/images/china-street.webp" alt="" fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,31,31,0),rgba(31,31,31,0.22))]" />
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {copy.essentials.map((item, index) => {
              const Icon = essentialIcons[index] ?? ShieldCheck;
              return (
                <div key={item.title} className="rounded-[1.15rem] border border-white/80 bg-white p-4 shadow-[0_12px_30px_rgba(31,31,31,0.08)]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#123735] text-gold">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-cinnabar">{item.label}</p>
                  <h2 className="mt-2 text-base font-black leading-tight text-ink">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink/68">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="stay-route">
        <div className="grid gap-5 md:grid-cols-[0.78fr_1.22fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal">Decision route</p>
            <h2 id="stay-route" className="mt-3 text-3xl font-black leading-tight md:text-5xl">{copy.routeTitle}</h2>
          </div>
          <p className="max-w-2xl text-ink/68">{copy.routeIntro}</p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {copy.stayTypes.map((item, index) => {
            const Icon = stayIcons[index] ?? BedDouble;
            return <StayTypeCard key={item.title} item={item} icon={Icon} />;
          })}
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="passport-stamp inline-flex px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cinnabar">Booking</p>
          <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">{copy.beforeTitle}</h2>
          <p className="mt-4 text-ink/68">{copy.beforeIntro}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          {copy.beforeCards.map((card) => (
            <ChecklistPanel key={card.title} title={card.title} items={card.items} />
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-[1.75rem] bg-[#123735] px-5 py-7 text-white shadow-[0_22px_60px_rgba(31,31,31,0.16)] md:px-7">
        <div className="grid gap-5 md:grid-cols-[0.78fr_1.22fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-gold">Front desk flow</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{copy.deskTitle}</h2>
          </div>
          <p className="max-w-2xl text-white/72">{copy.deskIntro}</p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-5">
          {copy.deskSteps.map((step, index) => {
            const Icon = deskIcons[index] ?? ClipboardCheck;
            return <DeskStep key={step.title} step={step} index={index} icon={Icon} />;
          })}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="non-hotel-registration">
        <div className="grid gap-5 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cinnabar">Registration</p>
            <h2 id="non-hotel-registration" className="mt-3 text-3xl font-black leading-tight md:text-5xl">{copy.registrationTitle}</h2>
          </div>
          <p className="max-w-2xl text-ink/68">{copy.registrationIntro}</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {copy.localGuides.map((guide, index) => {
            const Icon = registrationIcons[index] ?? ShieldCheck;
            return <RegistrationCard key={guide.title} guide={guide} icon={Icon} />;
          })}
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-cinnabar" size={24} aria-hidden="true" />
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cinnabar">Troubleshooting</p>
          </div>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">{copy.problemTitle}</h2>
          <p className="mt-4 max-w-xl text-ink/68">{copy.problemIntro}</p>
        </div>

        <div className="grid gap-3">
          {copy.problems.map((problem) => (
            <details key={problem.title} className="paper-sheet rounded-[1.25rem] border border-white/80 p-5 shadow-[0_10px_28px_rgba(31,31,31,0.07)]">
              <summary className="cursor-pointer list-none text-lg font-black text-ink [&::-webkit-details-marker]:hidden">{problem.title}</summary>
              <ul className="mt-4 grid gap-3">
                {problem.body.map((line) => (
                  <li key={line} className="flex gap-3 rounded-2xl border border-ink/8 bg-white/72 p-4 text-sm leading-6 text-ink/72">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cinnabar" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="grid gap-5 md:grid-cols-[0.78fr_1.22fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal">Verified links</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{copy.sourcesTitle}</h2>
          </div>
          <p className="max-w-2xl text-ink/68">{copy.sourcesIntro}</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {copy.sources.map((source) => (
            <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="group rounded-[1.25rem] border border-white/80 bg-white/78 p-5 shadow-[0_12px_34px_rgba(31,31,31,0.07)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_48px_rgba(31,31,31,0.11)]">
              <p className="text-sm font-black text-cinnabar">{source.publisher}</p>
              <h3 className="mt-2 text-lg font-black leading-6 text-ink">{source.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/66">{source.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#123735]">
                {copy.sourceLabel}
                <ExternalLink className="transition group-hover:translate-x-0.5" size={15} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}

function StayTypeCard({
  item,
  icon: Icon
}: {
  item: {label: string; title: string; body: string; items: string[]};
  icon: LucideIcon;
}) {
  return (
    <section className="paper-sheet flex min-h-[23rem] flex-col rounded-[1.5rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(31,31,31,0.12)]">
      <div className="flex items-center justify-between gap-4">
        <span className="passport-stamp inline-flex px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cinnabar">{item.label}</span>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#123735] text-gold">
          <Icon size={22} aria-hidden="true" />
        </span>
      </div>
      <h3 className="mt-6 text-2xl font-black leading-tight">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/68">{item.body}</p>
      <ul className="mt-auto grid gap-2 pt-5">
        {item.items.map((line) => (
          <li key={line} className="flex gap-2 text-sm leading-6 text-ink/72">
            <CheckCircle2 className="mt-1 shrink-0 text-teal" size={16} aria-hidden="true" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ChecklistPanel({title, items}: {title: string; items: string[]}) {
  return (
    <section className="rounded-[1.25rem] border border-white/80 bg-white/88 p-5 shadow-[0_12px_30px_rgba(31,31,31,0.07)]">
      <h3 className="text-xl font-black leading-tight">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink/70">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cinnabar" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function DeskStep({
  step,
  index,
  icon: Icon
}: {
  step: {title: string; body: string};
  index: number;
  icon: LucideIcon;
}) {
  return (
    <section className="rounded-[1.2rem] border border-white/14 bg-white/9 p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-black text-gold">{String(index + 1).padStart(2, '0')}</span>
        <Icon size={21} className="text-gold" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-black leading-tight">{step.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{step.body}</p>
    </section>
  );
}

function RegistrationCard({
  guide,
  icon: Icon
}: {
  guide: {label: string; title: string; body: string; items: string[]};
  icon: LucideIcon;
}) {
  return (
    <section className="rounded-[1.4rem] border border-white/80 bg-white/88 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)]">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#123735] text-gold">
          <Icon size={22} aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cinnabar">{guide.label}</p>
          <h3 className="mt-2 text-xl font-black leading-tight">{guide.title}</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-ink/70">{guide.body}</p>
      <ul className="mt-4 grid gap-3 border-t border-borderRice pt-4">
        {guide.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink/70">
            <CheckCircle2 className="mt-1 shrink-0 text-teal" size={16} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
