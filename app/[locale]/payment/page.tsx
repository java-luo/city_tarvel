import type {Metadata} from 'next';
import {ShieldCheck} from 'lucide-react';
import {PaymentMockup} from '@/components/PaymentMockup';
import {paymentGuideCopy} from '@/data/payment';
import {isLocale} from '@/lib/locale';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/i18n/routing';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const safeLocale = isLocale(locale) ? locale : 'en';
  return pageMetadata(safeLocale, paymentGuideCopy[safeLocale].title, '/payment');
}

export default async function PaymentPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const copy = paymentGuideCopy[locale];

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <section className="grid gap-6 md:grid-cols-[0.82fr_1.18fr] md:items-end">
        <div>
          <p className="passport-stamp inline-flex px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cinnabar">Step 02</p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">{copy.title}</h1>
        </div>
        <div className="paper-sheet rounded-[1.5rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)]">
          <p className="text-lg leading-8 text-ink/76">{copy.intro}</p>
          <div className="mt-4 flex gap-3 rounded-2xl border border-teal/20 bg-white/70 p-4">
            <ShieldCheck className="mt-1 shrink-0 text-teal" size={21} aria-hidden="true" />
            <div>
              <p className="font-black">{copy.checked}</p>
              <p className="mt-1 text-sm text-ink/62">{copy.screenshotNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 rounded-[1.6rem] bg-[#123735] p-5 text-white shadow-[0_18px_50px_rgba(31,31,31,0.15)] lg:grid-cols-[0.86fr_1.14fr] lg:items-center md:p-7">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-gold">Video guide</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{copy.videoTitle}</h2>
          <p className="mt-4 max-w-xl text-white/72">{copy.videoDescription}</p>
          <p className="mt-4 text-xs leading-5 text-white/52">{copy.videoCredit}</p>
        </div>
        <div className="mx-auto w-full max-w-[24rem] overflow-hidden rounded-[1.5rem] border border-white/16 bg-black shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
          <video className="aspect-[9/16] w-full bg-black object-contain" controls preload="metadata" playsInline>
            <source src="/videos/alipay-guide.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-black">{copy.priorityTitle}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {copy.priorities.map((item) => (
            <div key={item.title} className="paper-sheet rounded-[1.35rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)]">
              <p className="passport-stamp inline-flex px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-cinnabar">{item.label}</p>
              <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/68">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="rounded-[1.6rem] bg-[#123735] p-5 text-white shadow-[0_18px_50px_rgba(31,31,31,0.15)]">
          <h2 className="text-3xl font-black">{copy.beforeTitle}</h2>
          <ul className="mt-5 grid gap-3">
            {copy.beforeItems.map((item) => (
              <li key={item} className="rounded-2xl border border-white/12 bg-white/9 p-4 text-sm leading-6 text-white/78">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <SectionIntro title={copy.alipayTitle} body={copy.alipayIntro} />
      </section>

      <section className="mt-12">
        <GuideBlock title={copy.alipayTitle} intro={copy.alipayIntro} note={copy.screenshotNote} steps={copy.steps.alipay} />
      </section>

      <section className="mt-12">
        <div className="grid gap-5 md:grid-cols-[0.86fr_1.14fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal">At the counter</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{copy.offlineTitle}</h2>
          </div>
          <p className="max-w-2xl text-ink/68">{copy.offlineIntro}</p>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {copy.offlineMethods.map((method) => (
            <div key={method.title} className="paper-sheet grid gap-5 rounded-[1.5rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)] lg:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-2xl font-black">{method.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/68">{method.body}</p>
              </div>
              <PaymentMockup variant={method.mockup} note={copy.screenshotNote} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cinnabar">Troubleshooting</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{copy.stuckTitle}</h2>
          </div>
          <p className="max-w-2xl text-ink/68">{copy.stuckIntro}</p>
        </div>
        <div className="mt-6 grid gap-3">
          {copy.troubleshooting.map((item) => (
            <details key={item.title} className="paper-sheet rounded-[1.25rem] border border-white/80 p-5 shadow-[0_10px_28px_rgba(31,31,31,0.07)]">
              <summary className="cursor-pointer list-none text-lg font-black text-ink [&::-webkit-details-marker]:hidden">{item.title}</summary>
              <ul className="mt-4 grid gap-3">
                {item.body.map((line) => (
                  <li key={line} className="flex gap-3 rounded-2xl border border-ink/8 bg-white/72 p-4 text-sm leading-6 text-ink/72">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cinnabar" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

    </article>
  );
}

function SectionIntro({title, body}: {title: string; body: string}) {
  return (
    <div className="paper-sheet rounded-[1.6rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)]">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-cinnabar">Quick idea</p>
      <h2 className="mt-4 text-3xl font-black">{title}</h2>
      <p className="mt-3 text-ink/68">{body}</p>
    </div>
  );
}

function GuideBlock({
  title,
  intro,
  note,
  steps
}: {
  title: string;
  intro: string;
  note: string;
  steps: {title: string; body: string; mockup: 'download' | 'alipay-card' | 'pay-method'}[];
}) {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-[0.82fr_1.18fr] md:items-end">
        <div>
          <p className="passport-stamp inline-flex px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cinnabar">Setup</p>
          <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">{title}</h2>
        </div>
        <p className="max-w-2xl text-ink/68">{intro}</p>
      </div>
      <div className="mt-6 grid gap-5">
        {steps.map((step, index) => (
          <section key={step.title} className="paper-sheet grid gap-5 rounded-[1.5rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)] lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Step {index + 1}</p>
              <h3 className="mt-3 text-2xl font-black">{step.title}</h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-ink/70">{step.body}</p>
            </div>
            <PaymentMockup variant={step.mockup} note={note} />
          </section>
        ))}
      </div>
    </div>
  );
}
