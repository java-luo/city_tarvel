import type {Metadata} from 'next';
import {CityFullscreenCarousel} from '@/components/CityFullscreenCarousel';
import {cityGuides, cityList} from '@/data/cities';
import {isLocale} from '@/lib/locale';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/i18n/routing';

const copy = {
  en: {
    title: 'Choose a city',
    intro: 'Start with a city guide, then plan the route, attractions, and practical details around that city.',
    eyebrow: 'City guides',
    open: 'View city guide',
    available: 'Available now'
  },
  ja: {
    title: '都市を選ぶ',
    intro: '都市ガイドから始めて、行程、名所、実用情報をその都市に合わせて確認できます。',
    eyebrow: '都市ガイド',
    open: '都市ガイドを見る',
    available: '公開中'
  },
  zh: {
    title: '选择城市',
    intro: '先选择一个目的地城市，再看这座城市的介绍、经典景区和实用旅行建议。',
    eyebrow: '城市指南',
    open: '查看城市介绍',
    available: '已开放'
  }
};

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const safeLocale = isLocale(locale) ? locale : 'en';
  return pageMetadata(safeLocale, copy[safeLocale].title, '/cities');
}

export default async function CitiesPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = copy[locale];
  const cities = cityList.map((slug) => cityGuides[locale][slug]);

  return (
    <article>
      <CityFullscreenCarousel locale={locale} cities={cities} copy={t} />
    </article>
  );
}
