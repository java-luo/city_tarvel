import {routing, type Locale} from '@/i18n/routing';

export function isLocale(value: string): value is Locale {
  return routing.locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, pathname = '') {
  const clean = pathname === '/' ? '' : pathname.replace(/^\/(en|ja|zh)/, '');
  return `/${locale}${clean || ''}`;
}

export function alternatesFor(pathname = '') {
  const clean = pathname === '/' ? '' : pathname.replace(/^\/(en|ja|zh)/, '');
  return Object.fromEntries(routing.locales.map((locale) => [locale, `/${locale}${clean}`]));
}
