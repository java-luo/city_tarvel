import type {Locale} from '@/i18n/routing';

export type {Locale};

export type Localized<T> = Record<Locale, T>;
