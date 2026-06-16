import {
  AppWindow,
  BedDouble,
  CheckSquare,
  CreditCard,
  FileText,
  Home,
  Landmark,
  Plane,
  ShieldCheck,
  Smartphone,
  Train
} from 'lucide-react';
import type {Locale, Localized} from '@/lib/types';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  zh: '中文'
};

export const navLinks = [
  {href: '', labelKey: 'before'},
  {href: '/cities', labelKey: 'during'}
] as const;

export const bottomNav = [
  {href: '', icon: Home, key: 'home'},
  {href: '/checklist', icon: CheckSquare, key: 'checklist'},
  {href: '/payment', icon: CreditCard, key: 'payment'},
  {href: '/visa-entry', icon: ShieldCheck, key: 'help'}
] as const;

export const homeContent: Localized<{
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  quickActions: {title: string; href: string; icon: typeof CheckSquare}[];
  prepTitle: string;
  popularTitle: string;
  checklistCta: string;
}> = {
  en: {
    heroTitle: 'Travel to China with confidence.',
    heroSubtitle: 'Check your visa, payment, apps, internet, transport, and hotel setup before you fly.',
    heroCta: 'View Payment Guide',
    quickActions: [
      {title: 'Payment Setup', href: '/payment', icon: CreditCard},
      {title: 'Apps & Internet', href: '/apps-internet', icon: Smartphone},
      {title: 'Transport', href: '/transport', icon: Train}
    ],
    prepTitle: 'Five things to prepare before China',
    popularTitle: 'Popular guides',
    checklistCta: 'Download Checklist'
  },
  ja: {
    heroTitle: '安心して中国へ',
    heroSubtitle: 'ビザ、決済、通信、交通、ホテルを出発前にまとめて確認。',
    heroCta: '決済ガイドを見る',
    quickActions: [
      {title: '決済設定', href: '/payment', icon: CreditCard},
      {title: 'アプリと通信', href: '/apps-internet', icon: Smartphone},
      {title: '交通', href: '/transport', icon: Train}
    ],
    prepTitle: '中国旅行前に準備する5項目',
    popularTitle: '人気ガイド',
    checklistCta: 'チェックリスト'
  },
  zh: {
    heroTitle: '安心来中国旅行',
    heroSubtitle: '签证、支付、网络、交通、酒店，出发前一次检查清楚。',
    heroCta: '点击开始',
    quickActions: [
      {title: '支付设置', href: '/payment', icon: CreditCard},
      {title: 'App 与网络', href: '/apps-internet', icon: Smartphone},
      {title: '交通出行', href: '/transport', icon: Train}
    ],
    prepTitle: '来华前五项准备',
    popularTitle: '热门指南',
    checklistCta: '下载清单'
  }
};

export const preparationCards: Localized<{title: string; description: string; href: string; icon: typeof Plane}[]> = {
  en: [
    {title: 'Visa & Entry', description: 'Know documents, passport validity and official checks.', href: '/visa-entry', icon: FileText},
    {title: 'Payment Setup', description: 'Prepare Alipay, WeChat Pay and backup cash.', href: '/payment', icon: CreditCard},
    {title: 'Internet & Apps', description: 'Plan data access and install essential apps.', href: '/apps-internet', icon: AppWindow},
    {title: 'Transport', description: 'Use trains, metro, taxi and ride-hailing with less friction.', href: '/transport', icon: Train},
    {title: 'Hotel Check-in', description: 'Confirm passport check-in before arrival.', href: '/hotel-check-in', icon: BedDouble}
  ],
  ja: [
    {title: 'ビザと入境', description: '書類、パスポート有効期限、公式確認を整理します。', href: '/visa-entry', icon: FileText},
    {title: '決済設定', description: 'Alipay、WeChat Pay、現金の備えを準備します。', href: '/payment', icon: CreditCard},
    {title: '通信とアプリ', description: '通信手段と必須アプリを出発前に整えます。', href: '/apps-internet', icon: AppWindow},
    {title: '交通', description: '鉄道、地下鉄、タクシーを使いやすくします。', href: '/transport', icon: Train},
    {title: 'ホテルチェックイン', description: 'パスポートで宿泊できるか事前確認します。', href: '/hotel-check-in', icon: BedDouble}
  ],
  zh: [
    {title: '签证与入境', description: '确认材料、护照有效期和官方信息。', href: '/visa-entry', icon: FileText},
    {title: '支付设置', description: '准备支付宝、微信支付和现金备用方案。', href: '/payment', icon: CreditCard},
    {title: '网络与 App', description: '提前安排网络方案并安装常用 App。', href: '/apps-internet', icon: AppWindow},
    {title: '交通出行', description: '降低高铁、地铁、打车使用门槛。', href: '/transport', icon: Train},
    {title: '酒店入住', description: '确认酒店可用护照办理入住。', href: '/hotel-check-in', icon: BedDouble}
  ]
};

export const popularGuides: Localized<{title: string; description: string; href: string; icon: typeof Landmark}[]> = {
  en: [
    {title: 'How to pay in China', description: 'Primary: Alipay. Backup: WeChat Pay. Fallback: cash and international card.', href: '/payment', icon: CreditCard},
    {title: 'Best apps for China', description: 'Maps, translation, ride-hailing, trains, hotels and food.', href: '/apps-internet', icon: Smartphone},
    {title: 'Visa and entry basics', description: 'A practical overview with official-source reminders.', href: '/visa-entry', icon: Landmark}
  ],
  ja: [
    {title: '中国での支払い方', description: '基本はAlipay、予備はWeChat Pay、最後は現金と国際カード。', href: '/payment', icon: CreditCard},
    {title: '中国旅行アプリ', description: '地図、翻訳、配車、鉄道、ホテル、食事。', href: '/apps-internet', icon: Smartphone},
    {title: 'ビザと入境の基本', description: '公式情報確認を前提に、要点を整理します。', href: '/visa-entry', icon: Landmark}
  ],
  zh: [
    {title: '外国游客如何在中国支付', description: '主用支付宝，备用微信支付，兜底现金和国际卡。', href: '/payment', icon: CreditCard},
    {title: '来华旅行必备 App', description: '地图、翻译、打车、高铁、酒店和餐饮。', href: '/apps-internet', icon: Smartphone},
    {title: '签证与入境基础', description: '以官方信息为准，先了解常见要点。', href: '/visa-entry', icon: Landmark}
  ]
};

export const journeyContent: Localized<{
  eyebrow: string;
  title: string;
  description: string;
  finalEyebrow: string;
  checklistTitle: string;
  checklistDescription: string;
}> = {
  en: {
    eyebrow: 'China readiness route',
    title: 'Follow the five steps from entry to hotel check-in.',
    description: 'Each stop answers one practical question a first-time traveler usually has before China.',
    finalEyebrow: 'Final pass',
    checklistTitle: 'Make the final departure pass',
    checklistDescription: 'Use the checklist as your last scan before airport day.'
  },
  ja: {
    eyebrow: '中国旅行の準備ルート',
    title: '入境からホテルチェックインまで、5ステップで確認。',
    description: '初めて中国へ行く人が出発前に迷いやすい実用ポイントを順番に整理します。',
    finalEyebrow: '最終確認',
    checklistTitle: '出発前の最終確認',
    checklistDescription: '空港へ向かう前に、チェックリストで最後の確認をしましょう。'
  },
  zh: {
    eyebrow: '来华准备路线',
    title: '从入境到入住，用 5 步看清准备逻辑。',
    description: '每一步回答第一次来中国旅行者出发前最容易卡住的实际问题。',
    finalEyebrow: '最后检查',
    checklistTitle: '出发前最后检查',
    checklistDescription: '去机场前，用清单快速扫一遍关键准备。'
  }
};

export const journeySteps: Localized<{
  question: string;
  title: string;
  description: string;
  href: string;
  image: string;
  icon: typeof Plane;
}[]> = {
  en: [
    {question: 'Can I enter?', title: 'Visa & Entry', description: 'Check visa-free rules, transit policies, passport validity and arrival documents.', href: '/visa-entry', image: '/images/beijing.webp', icon: FileText},
    {question: 'Can I pay?', title: 'Payment Setup', description: 'Set up Alipay first, prepare WeChat Pay as backup, and keep cash for failures.', href: '/payment', image: '/images/shanghai.webp', icon: CreditCard},
    {question: 'Can I connect?', title: 'Apps & Internet', description: 'Prepare a China-ready internet plan and install maps, translation and booking apps.', href: '/apps-internet', image: '/images/guilin.webp', icon: Smartphone},
    {question: 'Can I move around?', title: 'Transport', description: 'Understand metro, taxi, ride-hailing and high-speed train basics before arrival.', href: '/transport', image: '/images/high-speed-rail.webp', icon: Train},
    {question: 'Can I check in?', title: 'Hotel Check-in', description: 'Confirm passport check-in and save hotel names and addresses in Chinese.', href: '/hotel-check-in', image: '/images/hero-china.webp', icon: BedDouble}
  ],
  ja: [
    {question: '入国できる？', title: 'ビザと入境', description: 'ビザ免除、トランジット、パスポート有効期限、到着書類を確認します。', href: '/visa-entry', image: '/images/beijing.webp', icon: FileText},
    {question: '支払える？', title: '決済設定', description: 'まずAlipay、予備にWeChat Pay、失敗時に備えて現金も用意します。', href: '/payment', image: '/images/shanghai.webp', icon: CreditCard},
    {question: 'つながる？', title: 'アプリと通信', description: '中国で使える通信手段と、地図・翻訳・予約アプリを準備します。', href: '/apps-internet', image: '/images/guilin.webp', icon: Smartphone},
    {question: '移動できる？', title: '交通', description: '地下鉄、タクシー、配車、高速鉄道の基本を出発前に確認します。', href: '/transport', image: '/images/high-speed-rail.webp', icon: Train},
    {question: '宿泊できる？', title: 'ホテルチェックイン', description: 'パスポートで宿泊できるか確認し、ホテル名と住所を中国語で保存します。', href: '/hotel-check-in', image: '/images/hero-china.webp', icon: BedDouble}
  ],
  zh: [
    {question: '能不能入境？', title: '签证与入境', description: '确认免签、过境政策、护照有效期和抵达材料。', href: '/visa-entry', image: '/images/beijing.webp', icon: FileText},
    {question: '能不能支付？', title: '支付设置', description: '优先设置支付宝，准备微信支付备用，并保留现金兜底。', href: '/payment', image: '/images/shanghai.webp', icon: CreditCard},
    {question: '能不能联网？', title: 'App 与网络', description: '准备适合中国大陆使用的网络方案，并安装地图、翻译和预订 App。', href: '/apps-internet', image: '/images/guilin.webp', icon: Smartphone},
    {question: '能不能顺利移动？', title: '交通出行', description: '提前了解地铁、出租车、打车和高铁的基础使用方式。', href: '/transport', image: '/images/high-speed-rail.webp', icon: Train},
    {question: '能不能入住？', title: '酒店入住', description: '确认酒店支持护照入住，并保存中文酒店名称和地址。', href: '/hotel-check-in', image: '/images/hero-china.webp', icon: BedDouble}
  ]
};
