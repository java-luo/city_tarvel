import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import type {Locale} from '@/i18n/routing';

type JourneyStepCardProps = {
  locale: Locale;
  index: number;
  question: string;
  title: string;
  description: string;
  href: string;
  image: string;
  icon: LucideIcon;
};

export function JourneyStepCard({locale, index, question, title, description, href, image, icon: Icon}: JourneyStepCardProps) {
  const step = String(index + 1).padStart(2, '0');
  const copy = {
    en: {stop: 'Stop', open: 'Open this step'},
    ja: {stop: 'Step', open: 'このステップを見る'},
    zh: {stop: '步骤', open: '查看这一步'}
  };

  return (
    <article className="group grid overflow-hidden rounded-[1.6rem] border border-white/75 bg-[#fffdf7] shadow-[0_18px_50px_rgba(31,31,31,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(31,31,31,0.15)] md:grid-cols-[0.92fr_1.08fr]">
      <div className="relative min-h-56 overflow-hidden md:min-h-80">
        <Image src={image} alt={title} fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,31,31,0.08),rgba(31,31,31,0.45))]" />
        <div className="absolute left-4 top-4 rounded-full border border-white/45 bg-white/18 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur">
          {copy[locale].stop} {step}
        </div>
      </div>

      <div className="paper-sheet flex flex-col justify-between p-5 md:p-7">
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="passport-stamp px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cinnabar">{question}</span>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#123735] text-gold">
              <Icon size={22} aria-hidden="true" />
            </span>
          </div>
          <h3 className="mt-6 text-3xl font-black leading-tight text-ink md:text-4xl">{title}</h3>
          <p className="mt-4 text-base leading-7 text-ink/70">{description}</p>
        </div>

        <Link href={`/${locale}${href}`} className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cinnabar px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(179,38,30,0.2)] transition hover:bg-[#941f19] sm:w-fit">
          {copy[locale].open}
          <ArrowRight className="card-arrow transition" size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
