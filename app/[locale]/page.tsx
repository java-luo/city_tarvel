import type {Metadata} from 'next';
import {HeroSection} from '@/components/HeroSection';
import {JourneyStepCard} from '@/components/JourneyStepCard';
import {homeContent, journeyContent, journeySteps} from '@/data/site';
import {pageMetadata} from '@/lib/seo';
import {isLocale} from '@/lib/locale';
import type {Locale} from '@/i18n/routing';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const safeLocale = isLocale(locale) ? locale : 'en';
  const titles = {
    en: 'China Travel Readiness Guide | Prepare for Your First Trip to China',
    ja: '中国旅行準備ガイド | 初めての中国旅行を安心に',
    zh: '来华旅行准备指南 | 第一次来中国也能安心出发'
  };
  return pageMetadata(safeLocale, titles[safeLocale]);
}

export default async function HomePage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const content = homeContent[locale];
  const journey = journeyContent[locale];
  const steps = journeySteps[locale];

  return (
    <>
      <HeroSection
        locale={locale}
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        cta={content.heroCta}
        ctaHref="#journey-step-1"
        imageAlt="Great Wall sunrise landscape"
      />

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
        <div className="grid gap-5 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <p className="passport-stamp inline-flex px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cinnabar">{journey.eyebrow}</p>
            <h2 className="mt-5 text-3xl font-black leading-tight md:text-6xl">{journey.title}</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-ink/68 md:text-lg md:leading-8">
            {journey.description}
          </p>
        </div>

        <div className="relative mt-10">
          <div className="absolute bottom-6 left-5 top-6 w-px bg-ink/12 md:left-1/2" aria-hidden="true" />
          <div className="grid gap-7">
            {steps.map((step, index) => (
              <div key={step.title} id={index === 0 ? 'journey-step-1' : undefined} className="relative scroll-mt-24 pl-12 md:pl-0">
                <div className="absolute left-[0.58rem] top-8 z-10 grid h-9 w-9 place-items-center rounded-full border-4 border-[#f5e7cb] bg-[#123735] text-xs font-black text-gold md:left-[calc(50%-1.125rem)]">
                  {index + 1}
                </div>
                <JourneyStepCard locale={locale} index={index} {...step} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
