import Image from 'next/image';

type PaymentMockupVariant =
  | 'download'
  | 'alipay-card'
  | 'pay-method'
  | 'scan'
  | 'present';

const screenshots: Record<PaymentMockupVariant, {src: string; alt: string; source: string; tall?: boolean}> = {
  download: {
    src: '/images/payment/alipay-home.webp',
    alt: 'Official Alipay app home screen showing Add Now',
    source: 'Alipay+',
    tall: true
  },
  'alipay-card': {
    src: '/images/payment/alipay-add-bank-card.webp',
    alt: 'Official Alipay app add bank card screen',
    source: 'Alipay+',
    tall: true
  },
  'pay-method': {
    src: '/images/payment/alipay-scan-pay.webp',
    alt: 'Official Alipay QR payment screenshot',
    source: 'Alipay+'
  },
  scan: {
    src: '/images/payment/alipay-scan-pay.webp',
    alt: 'Official Alipay screenshot showing QR scan payment',
    source: 'Alipay+'
  },
  present: {
    src: '/images/payment/alipay-payment-complete.webp',
    alt: 'Official Alipay screenshot showing payment completion',
    source: 'Alipay+'
  }
};

export function PaymentMockup({variant, note}: {variant: PaymentMockupVariant; note: string}) {
  const screenshot = screenshots[variant];

  return (
    <figure className="mx-auto w-full max-w-[18rem]">
      <div className="overflow-hidden rounded-[1.65rem] border border-ink/10 bg-white shadow-[0_18px_50px_rgba(31,31,31,0.18)]">
        <div className={`relative ${screenshot.tall ? 'aspect-[9/16]' : 'aspect-square'}`}>
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            sizes="(min-width: 1024px) 18rem, 80vw"
            className="object-contain"
          />
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs leading-5 text-ink/58">
        {screenshot.source}. {note}
      </figcaption>
    </figure>
  );
}
