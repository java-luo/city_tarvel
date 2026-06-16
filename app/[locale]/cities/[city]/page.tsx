import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft, Clock3, Compass, MapPin, Route, Sparkles} from 'lucide-react';
import {notFound} from 'next/navigation';
import {cityGuides, cityList, type CitySlug} from '@/data/cities';
import {isLocale} from '@/lib/locale';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/i18n/routing';

const copy = {
  en: {
    back: 'Choose another city',
    overview: 'City overview',
    highlights: 'What to plan around',
    practical: 'Travel notes',
    bestTime: 'Best time',
    timeNeeded: 'Time needed'
  },
  ja: {
    back: '別の都市を選ぶ',
    overview: '都市紹介',
    highlights: '旅程の軸',
    practical: '旅行メモ',
    bestTime: 'おすすめ時間',
    timeNeeded: '所要時間'
  },
  zh: {
    back: '返回选择城市',
    overview: '城市介绍',
    highlights: '行程重点',
    practical: '旅行提示',
    bestTime: '推荐时间',
    timeNeeded: '建议游玩'
  }
};

function isCitySlug(value: string): value is CitySlug {
  return cityList.includes(value as CitySlug);
}

export function generateStaticParams() {
  return cityList.map((city) => ({city}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string; city: string}>}): Promise<Metadata> {
  const {locale, city} = await params;
  const safeLocale = isLocale(locale) ? locale : 'en';

  if (!isCitySlug(city)) {
    return pageMetadata(safeLocale, copy[safeLocale].overview, '/cities');
  }

  const guide = cityGuides[safeLocale][city];
  return pageMetadata(safeLocale, `${guide.name} ${copy[safeLocale].overview}`, `/cities/${city}`);
}

export default async function CityPage({params}: {params: Promise<{locale: Locale; city: string}>}) {
  const {locale, city} = await params;

  if (!isCitySlug(city)) {
    notFound();
  }

  const guide = cityGuides[locale][city];
  const t = copy[locale];

  return (
    <article>
      <section className="relative -mt-[4.75rem] min-h-[74svh] overflow-hidden bg-ink px-4 pb-10 pt-28 text-white md:px-6 md:pt-32">
        <Image src={guide.heroImage} alt={guide.heroAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,32,31,0.84),rgba(18,32,31,0.5),rgba(18,32,31,0.12))]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,#f5e7cb,rgba(245,231,203,0))]" />

        <div className="relative mx-auto flex min-h-[calc(74svh-8rem)] max-w-6xl flex-col justify-end">
          <Link href={`/${locale}/cities`} className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/32 bg-white/16 px-4 py-2 text-sm font-black text-white backdrop-blur transition hover:bg-white/24">
            <ArrowLeft size={16} aria-hidden="true" />
            {t.back}
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex flex-wrap gap-2">
              {guide.badges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/32 bg-white/16 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur">{badge}</span>
              ))}
            </div>
            <h1 className="mt-5 text-5xl font-black leading-[0.94] md:text-7xl">{guide.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86 md:text-xl md:leading-9">{guide.tagline}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="rounded-[1.6rem] border border-white/80 bg-[#fffdf7] p-5 shadow-[0_16px_40px_rgba(31,31,31,0.06)] md:p-7">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#123735] text-gold">
              <Compass size={21} aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-black md:text-3xl">{t.overview}</h2>
          </div>
          <p className="mt-5 text-base leading-8 text-ink/72 md:text-lg md:leading-9">{guide.summary}</p>
          <div className="mt-7 rounded-[1.25rem] border border-borderRice bg-[#fffaf0] p-5">
            <h3 className="text-xl font-black leading-tight">{guide.storyTitle}</h3>
            <div className="mt-4 space-y-4">
              {guide.story.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-ink/72 md:text-base md:leading-8">{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {guide.highlights.map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-borderRice bg-[#fffaf0] p-4 text-sm font-semibold leading-6 text-ink/72">
                {item}
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[1.6rem] border border-white/80 bg-[#123735] p-5 text-white shadow-[0_16px_40px_rgba(31,31,31,0.1)] lg:self-start">
          <div className="flex items-center gap-3">
            <Sparkles className="text-gold" size={21} aria-hidden="true" />
            <h2 className="text-xl font-black">{t.practical}</h2>
          </div>
          <div className="mt-5 grid gap-3">
            {guide.practical.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-gold">{item.label}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/86">{item.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="passport-stamp inline-flex px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cinnabar">
              <MapPin size={14} aria-hidden="true" className="mr-2" />
              {guide.name}
            </p>
            <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">{guide.attractionsTitle}</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-ink/68 md:text-lg md:leading-8">{guide.attractionsIntro}</p>
        </div>

        <div className="mt-10 grid gap-8">
          {guide.attractions.map((attraction, index) => (
            <article key={attraction.name} className="group overflow-hidden rounded-[1.6rem] border border-white/80 bg-[#fffdf7] shadow-[0_18px_50px_rgba(31,31,31,0.1)] lg:grid lg:grid-cols-[1.12fr_0.88fr]">
              <div className={`relative min-h-[22rem] overflow-hidden lg:min-h-[31rem] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image src={attraction.image} alt={attraction.name} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full border border-white/45 bg-white/18 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="paper-sheet flex flex-col justify-center p-5 md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#7a6013]">{attraction.subtitle}</p>
                <h3 className="mt-3 text-3xl font-black leading-tight md:text-4xl">{attraction.name}</h3>
                <p className="mt-5 text-base leading-8 text-ink/72">{attraction.description}</p>
                <p className="mt-4 border-l-4 border-gold pl-4 text-base leading-8 text-ink/72">{attraction.story}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-borderRice bg-white/72 p-4">
                    <div className="flex items-center gap-2 text-sm font-black text-ink">
                      <Clock3 size={16} aria-hidden="true" />
                      {t.bestTime}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-ink/68">{attraction.bestTime}</p>
                  </div>
                  <div className="rounded-2xl border border-borderRice bg-white/72 p-4">
                    <div className="flex items-center gap-2 text-sm font-black text-ink">
                      <Route size={16} aria-hidden="true" />
                      {t.timeNeeded}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-ink/68">{attraction.timeNeeded}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
