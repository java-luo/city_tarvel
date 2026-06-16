import Link from 'next/link';
import {useTranslations} from 'next-intl';
import type {Locale} from '@/i18n/routing';
import {bottomNav} from '@/data/site';

export function MobileBottomNav({locale}: {locale: Locale}) {
  const t = useTranslations('bottom');

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:hidden" aria-label="Mobile bottom navigation">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1 rounded-full border border-white/80 bg-[#fffaf0]/94 p-2 shadow-[0_-18px_50px_rgba(31,31,31,0.14)] backdrop-blur-xl">
        {bottomNav.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href || 'home'} href={`/${locale}${item.href}`} className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-full text-[0.72rem] font-black text-ink/70 transition hover:-translate-y-1 hover:bg-white hover:text-ink">
              <Icon size={18} aria-hidden="true" />
              <span>{t(item.key)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
