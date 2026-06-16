import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {MobileBottomNav} from '@/components/MobileBottomNav';
import {isLocale} from '@/lib/locale';
import {routing, type Locale} from '@/i18n/routing';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://china-travel-readiness.example.com'),
  title: {
    default: 'China Travel Readiness Guide',
    template: '%s | China Travel Readiness Guide'
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: Promise<{locale: string}>}) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-paper antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale as Locale} />
          <main>{children}</main>
          <Footer locale={locale as Locale} />
          <MobileBottomNav locale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
