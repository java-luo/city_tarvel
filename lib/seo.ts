import type {Metadata} from 'next';
import type {Locale} from '@/i18n/routing';
import {alternatesFor} from './locale';

const descriptions: Record<Locale, string> = {
  en: 'Practical China travel preparation for visa, payment, internet, apps, hotels and trains.',
  ja: '中国旅行前にビザ、決済、通信、アプリ、ホテル、交通を確認できる実用ガイド。',
  zh: '面向来华旅行者的出发前准备指南，覆盖签证、支付、网络、App、酒店和交通。'
};

export function pageMetadata(locale: Locale, title: string, path = ''): Metadata {
  return {
    title,
    description: descriptions[locale],
    keywords: [
      'China travel checklist',
      'China travel preparation',
      'Alipay for foreigners',
      'WeChat Pay for tourists',
      'China travel apps',
      'China transport guide'
    ],
    alternates: {
      canonical: `/${locale}${path}`,
      languages: alternatesFor(path)
    },
    openGraph: {
      title,
      description: descriptions[locale],
      type: 'website',
      locale
    }
  };
}
