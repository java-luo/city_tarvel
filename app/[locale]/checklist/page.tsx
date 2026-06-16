import type {Metadata} from 'next';
import {Download} from 'lucide-react';
import {ChecklistItem} from '@/components/ChecklistItem';
import {pageCopy} from '@/data/pages';
import {isLocale} from '@/lib/locale';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/i18n/routing';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const safeLocale = isLocale(locale) ? locale : 'en';
  return pageMetadata(safeLocale, pageCopy[safeLocale].checklist.title, '/checklist');
}

export default async function ChecklistPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const copy = pageCopy[locale].checklist;
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h1 className="text-3xl font-semibold md:text-5xl">{copy.title}</h1>
          <p className="mt-4 text-lg leading-8 text-ink/70">{copy.intro}</p>
        </div>
        <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-cinnabar px-5 py-3 font-black text-white shadow-[0_16px_35px_rgba(179,38,30,0.22)] transition hover:-translate-y-1" type="button">
          <Download size={18} aria-hidden="true" />
          {copy.download}
        </button>
      </div>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {copy.items.map((item) => <ChecklistItem key={item}>{item}</ChecklistItem>)}
      </ul>
    </section>
  );
}
