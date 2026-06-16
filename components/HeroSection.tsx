import Image from 'next/image';
import Link from 'next/link';
import {CheckCircle2, Route} from 'lucide-react';
import type {Locale} from '@/i18n/routing';

type HeroSectionProps = {
  locale: Locale;
  title: string;
  subtitle: string;
  cta: string;
  ctaHref?: string;
  image?: string;
  imageAlt: string;
};

export function HeroSection({locale, title, subtitle, cta, ctaHref, image = '/images/hero-china.webp', imageAlt}: HeroSectionProps) {
  const routeLabels = {
    en: ['Enter', 'Pay', 'Connect', 'Move', 'Check in'],
    ja: ['入境', '決済', '通信', '移動', '宿泊'],
    zh: ['入境', '支付', '联网', '移动', '入住']
  };
  const eyebrow = {
    en: 'China readiness route',
    ja: '中国旅行の準備ルート',
    zh: '来华准备路线'
  };
  return (
    <section className="relative -mt-[4.75rem] min-h-[84svh] overflow-hidden bg-ink px-4 pb-6 pt-28 text-white md:px-6 md:pb-10 md:pt-32">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,32,31,0.82),rgba(18,32,31,0.48),rgba(18,32,31,0.16))]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,#f5e7cb,rgba(245,231,203,0))]" />

      <div className="relative mx-auto flex min-h-[calc(84svh-8rem)] max-w-6xl flex-col justify-end gap-8">
        <div className="reveal-up max-w-3xl pb-2">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/32 bg-white/16 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur">
            <Route size={15} aria-hidden="true" />
            {eyebrow[locale]}
          </div>
          <h1 className="text-5xl font-black leading-[0.94] md:text-7xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/84 md:text-xl md:leading-9">{subtitle}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href={ctaHref ?? `/${locale}/payment`} className="group inline-flex min-h-14 items-center justify-center rounded-full bg-gold px-6 py-3 font-black text-ink shadow-[0_16px_34px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:bg-[#f0c94f]">
              {cta}
              <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="reveal-up-delay rounded-[1.5rem] border border-white/28 bg-white/14 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-md">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {routeLabels[locale].map((label, index) => (
              <div key={label} className="flex min-h-16 items-center gap-2 rounded-2xl bg-white/86 px-3 py-3 text-ink">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#123735] text-xs font-black text-gold">{index + 1}</span>
                <span className="text-sm font-black leading-tight">{label}</span>
                <CheckCircle2 className="ml-auto hidden text-teal sm:block" size={16} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
