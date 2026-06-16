'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import type {Locale} from '@/i18n/routing';

const footerText = {
  en: 'Practical travel preparation. Verify visa and entry details with official sources before departure.',
  ja: '実用的な中国旅行準備ガイド。ビザと入境情報は出発前に公式情報で確認してください。',
  zh: '实用来华旅行准备指南。签证与入境信息请在出发前以官方来源为准。'
};

export function Footer({locale}: {locale: Locale}) {
  const pathname = usePathname();

  if (pathname === `/${locale}/cities`) {
    return null;
  }

  return (
    <footer className="border-t border-borderRice bg-[#fffaf0] px-4 py-10 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-ink">China Travel Readiness Guide</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-ink/70">{footerText[locale]}</p>
        </div>
        <div className="grid gap-2 text-sm">
          <Link href={`/${locale}/payment`} className="hover:text-cinnabar">Payment Setup</Link>
          <Link href={`/${locale}/transport`} className="hover:text-cinnabar">Transport Guide</Link>
        </div>
      </div>
    </footer>
  );
}
