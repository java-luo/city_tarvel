import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import type {Locale} from '@/i18n/routing';

type GuideCardProps = {
  locale: Locale;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function GuideCard({locale, title, description, href, icon: Icon}: GuideCardProps) {
  return (
    <Link href={`/${locale}${href}`} className="document-card group block min-h-64 rounded-[1.35rem] border border-white/80 bg-[#fffdf7] p-5 shadow-[0_16px_42px_rgba(31,31,31,0.09)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_58px_rgba(31,31,31,0.14)]">
      <div className="-mx-5 -mt-5 mb-5 flex items-center justify-between border-b border-ink/10 bg-[#123735] px-5 py-3 text-white">
        <span className="text-xs font-black uppercase tracking-[0.18em] text-gold">Travel note</span>
        <span className="passport-stamp px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.14em] text-gold">CN</span>
      </div>
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-paper text-cinnabar transition duration-300 group-hover:rotate-3 group-hover:scale-105">
          <Icon size={22} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-xl font-black leading-tight text-ink md:text-2xl">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-ink/68 md:text-base md:leading-7">{description}</p>
        </div>
      </div>
      <div className="mt-6 space-y-2" aria-hidden="true">
        <div className="h-2 rounded-full bg-ink/10" />
        <div className="h-2 w-2/3 rounded-full bg-ink/10" />
      </div>
      <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-black text-cinnabar">
        Open guide
        <ArrowRight className="card-arrow transition" size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}
