'use client';

import Link from 'next/link';
import {Menu, MountainSnow} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';
import type {Locale} from '@/i18n/routing';
import {navLinks} from '@/data/site';
import {LanguageSwitcher} from './LanguageSwitcher';

export function Header({locale}: {locale: Locale}) {
  const t = useTranslations();
  const pathname = usePathname();
  const isFullscreenCitiesPage = pathname === `/${locale}/cities`;

  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2 shadow-[0_16px_45px_rgba(31,31,31,0.11)] backdrop-blur-xl md:px-4 ${
        isFullscreenCitiesPage
          ? 'border border-white/38 bg-ink/34 text-white'
          : 'border border-white/70 bg-[#fffaf0]/86 text-ink'
      }`}>
        <Link href={`/${locale}`} className={`flex min-w-0 items-center gap-2 rounded-full pr-2 font-semibold transition ${
          isFullscreenCitiesPage ? 'text-white hover:bg-white/12' : 'text-ink hover:bg-white/80'
        }`}>
          <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] ${
            isFullscreenCitiesPage ? 'bg-gold text-ink' : 'bg-ink text-gold'
          }`}>
            <MountainSnow size={21} aria-hidden="true" />
          </span>
          <span className="hidden truncate text-base md:block md:text-lg">{t('brand')}</span>
          <span className="truncate text-base md:hidden">China Ready</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={`/${locale}${link.href}`} className={`magnetic-link rounded-full px-4 py-2 text-sm font-semibold ${
              isFullscreenCitiesPage ? 'text-white/84 hover:bg-white/14 hover:text-white' : 'text-ink/72 hover:bg-white hover:text-ink'
            }`}>
              {t(`nav.${link.labelKey}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LanguageSwitcher currentLocale={locale} variant={isFullscreenCitiesPage ? 'dark' : 'light'} />
        </div>

        <details className="group relative lg:hidden">
          <summary className={`flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold shadow-sm [&::-webkit-details-marker]:hidden ${
            isFullscreenCitiesPage ? 'border border-white/28 bg-white/14 text-white' : 'border border-borderRice bg-white text-ink'
          }`}>
            <Menu size={18} aria-hidden="true" />
            {t('nav.menu')}
          </summary>
          <div className="absolute right-0 mt-3 w-[min(90vw,22rem)] rounded-3xl border border-white/80 bg-[#fffaf0] p-3 shadow-soft">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={`/${locale}${link.href}`} className="rounded-2xl px-3 py-3 text-base font-semibold text-ink hover:bg-white">
                  {t(`nav.${link.labelKey}`)}
                </Link>
              ))}
            </div>
            <div className="mt-3 border-t border-borderRice pt-3">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
