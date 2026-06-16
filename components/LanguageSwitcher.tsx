'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {localeNames} from '@/data/site';
import {routing, type Locale} from '@/i18n/routing';

export function LanguageSwitcher({currentLocale, variant = 'light'}: {currentLocale: Locale; variant?: 'light' | 'dark'}) {
  const pathname = usePathname() || `/${currentLocale}`;
  const suffix = pathname.replace(/^\/(en|ja|zh)/, '') || '';
  const isDark = variant === 'dark';

  return (
    <nav aria-label="Language switcher" className="flex flex-wrap items-center gap-1 text-sm">
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${suffix}`}
          className={`rounded-full px-3 py-2 font-semibold transition hover:-translate-y-0.5 ${
            locale === currentLocale
              ? isDark
                ? 'bg-gold text-ink shadow-sm'
                : 'bg-ink text-gold shadow-sm'
              : isDark
                ? 'text-white/82 hover:bg-white/16 hover:text-white'
                : 'text-ink/75 hover:bg-white hover:text-ink'
          }`}
          aria-current={locale === currentLocale ? 'page' : undefined}
        >
          {localeNames[locale]}
        </Link>
      ))}
    </nav>
  );
}
