'use client';

import {useMemo, useState} from 'react';
import Link from 'next/link';
import {CheckCircle2, Search, XCircle} from 'lucide-react';
import type {Locale} from '@/i18n/routing';
import {transitVisaFreeCountries, unilateralVisaFreeCountries, visaDetailCopy} from '@/data/visa';

const selectorCopy = {
  en: {
    title: 'Check by passport country',
    description: 'Type your passport country to see which official policy lists include it.',
    label: 'Passport country',
    placeholder: 'Try Canada, Japan, United States...',
    noMatch: 'No exact country match yet. Choose one of the suggestions below.',
    notListedTitle: 'This country is not in the visa-free lists on this page.',
    notListedBody: 'You may need to apply for a visa, or check if another agreement applies. Verify with the Chinese embassy or consulate before travel.',
    visaFree: 'Listed for 30-day unilateral visa-free entry',
    transit: 'Listed for 240-hour transit visa-free policy',
    notListed: 'Not listed',
    next: 'Next step',
    reminder: 'This only checks country lists. You still need to match passport type, purpose, stay length, route and documents.',
    source: 'Official list'
  },
  ja: {
    title: 'パスポートの国で確認',
    description: 'パスポートの国を入力すると、このページの公式リストに含まれるか確認できます。',
    label: 'パスポートの国',
    placeholder: 'Canada, Japan, United States など',
    noMatch: '完全一致する国がまだありません。下の候補から選んでください。',
    notListedTitle: 'この国は本ページのビザ免除リストにありません。',
    notListedBody: 'ビザ申請が必要な場合があります。別の協定がある可能性もあるため、渡航前に中国大使館・領事館で確認してください。',
    visaFree: '30日以内の一方的ビザ免除リストにあります',
    transit: '240時間トランジットビザ免除リストにあります',
    notListed: 'リスト外',
    next: '次に確認',
    reminder: 'これは国リストの照合のみです。旅券種類、目的、滞在日数、経路、資料条件も満たす必要があります。',
    source: '公式リスト'
  },
  zh: {
    title: '按护照国家快速筛选',
    description: '输入你的护照国家，查看它是否出现在本页引用的官方政策名单中。',
    label: '护照国家',
    placeholder: '例如 Canada, Japan, United States...',
    noMatch: '还没有精确匹配国家，请从下方候选项选择。',
    notListedTitle: '该国家不在本页的免签名单中。',
    notListedBody: '你可能需要申请签证，或核对是否存在其他互免协议。出发前请向中国使领馆确认。',
    visaFree: '在 30 天单方面免签名单中',
    transit: '在 240 小时过境免签名单中',
    notListed: '未列入',
    next: '下一步',
    reminder: '这里只核对国家名单。你仍需满足护照类型、来华目的、停留时长、路线和材料条件。',
    source: '官方名单'
  }
} as const;

const aliasToCanonical: Record<string, string> = {
  america: 'united states',
  brunei: 'brunei darussalam',
  britain: 'united kingdom',
  korea: 'south korea',
  'republic of korea': 'south korea',
  russia: 'russia',
  'russian federation': 'russia',
  'the netherlands': 'netherlands',
  'the united states': 'united states',
  uae: 'united arab emirates',
  uk: 'united kingdom',
  us: 'united states',
  usa: 'united states'
};

type CountryOption = {
  key: string;
  labels: Record<Locale, string>;
  unilateral: boolean;
  transit: boolean;
};

const localizedCountryNames: Record<string, Partial<Record<Locale, string>>> = {
  albania: {ja: 'アルバニア', zh: '阿尔巴尼亚'},
  andorra: {ja: 'アンドラ', zh: '安道尔'},
  argentina: {ja: 'アルゼンチン', zh: '阿根廷'},
  australia: {ja: 'オーストラリア', zh: '澳大利亚'},
  austria: {ja: 'オーストリア', zh: '奥地利'},
  bahrain: {ja: 'バーレーン', zh: '巴林'},
  belarus: {ja: 'ベラルーシ', zh: '白俄罗斯'},
  belgium: {ja: 'ベルギー', zh: '比利时'},
  'bosnia and herzegovina': {ja: 'ボスニア・ヘルツェゴビナ', zh: '波斯尼亚和黑塞哥维那'},
  brazil: {ja: 'ブラジル', zh: '巴西'},
  'brunei darussalam': {en: 'Brunei Darussalam', ja: 'ブルネイ', zh: '文莱'},
  bulgaria: {ja: 'ブルガリア', zh: '保加利亚'},
  canada: {ja: 'カナダ', zh: '加拿大'},
  chile: {ja: 'チリ', zh: '智利'},
  croatia: {ja: 'クロアチア', zh: '克罗地亚'},
  cyprus: {ja: 'キプロス', zh: '塞浦路斯'},
  'czech republic': {ja: 'チェコ', zh: '捷克'},
  denmark: {ja: 'デンマーク', zh: '丹麦'},
  estonia: {ja: 'エストニア', zh: '爱沙尼亚'},
  finland: {ja: 'フィンランド', zh: '芬兰'},
  france: {ja: 'フランス', zh: '法国'},
  germany: {ja: 'ドイツ', zh: '德国'},
  greece: {ja: 'ギリシャ', zh: '希腊'},
  hungary: {ja: 'ハンガリー', zh: '匈牙利'},
  iceland: {ja: 'アイスランド', zh: '冰岛'},
  indonesia: {ja: 'インドネシア', zh: '印度尼西亚'},
  ireland: {ja: 'アイルランド', zh: '爱尔兰'},
  italy: {ja: 'イタリア', zh: '意大利'},
  japan: {ja: '日本', zh: '日本'},
  kuwait: {ja: 'クウェート', zh: '科威特'},
  latvia: {ja: 'ラトビア', zh: '拉脱维亚'},
  liechtenstein: {ja: 'リヒテンシュタイン', zh: '列支敦士登'},
  lithuania: {ja: 'リトアニア', zh: '立陶宛'},
  luxembourg: {ja: 'ルクセンブルク', zh: '卢森堡'},
  malta: {ja: 'マルタ', zh: '马耳他'},
  mexico: {ja: 'メキシコ', zh: '墨西哥'},
  monaco: {ja: 'モナコ', zh: '摩纳哥'},
  montenegro: {ja: 'モンテネグロ', zh: '黑山'},
  netherlands: {en: 'Netherlands', ja: 'オランダ', zh: '荷兰'},
  'new zealand': {ja: 'ニュージーランド', zh: '新西兰'},
  'north macedonia': {ja: '北マケドニア', zh: '北马其顿'},
  norway: {ja: 'ノルウェー', zh: '挪威'},
  oman: {ja: 'オマーン', zh: '阿曼'},
  peru: {ja: 'ペルー', zh: '秘鲁'},
  poland: {ja: 'ポーランド', zh: '波兰'},
  portugal: {ja: 'ポルトガル', zh: '葡萄牙'},
  qatar: {ja: 'カタール', zh: '卡塔尔'},
  romania: {ja: 'ルーマニア', zh: '罗马尼亚'},
  russia: {en: 'Russian Federation / Russia', ja: 'ロシア', zh: '俄罗斯'},
  'saudi arabia': {ja: 'サウジアラビア', zh: '沙特阿拉伯'},
  serbia: {ja: 'セルビア', zh: '塞尔维亚'},
  singapore: {ja: 'シンガポール', zh: '新加坡'},
  slovakia: {ja: 'スロバキア', zh: '斯洛伐克'},
  slovenia: {ja: 'スロベニア', zh: '斯洛文尼亚'},
  'south korea': {en: 'Republic of Korea / South Korea', ja: '韓国', zh: '韩国'},
  spain: {ja: 'スペイン', zh: '西班牙'},
  sweden: {ja: 'スウェーデン', zh: '瑞典'},
  switzerland: {ja: 'スイス', zh: '瑞士'},
  ukraine: {ja: 'ウクライナ', zh: '乌克兰'},
  'united arab emirates': {ja: 'アラブ首長国連邦', zh: '阿联酋'},
  'united kingdom': {en: 'United Kingdom', ja: 'イギリス', zh: '英国'},
  'united states': {en: 'United States', ja: 'アメリカ合衆国', zh: '美国'},
  uruguay: {ja: 'ウルグアイ', zh: '乌拉圭'}
};

function normalizeCountry(country: string) {
  const cleaned = country
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^the\s+/, '');

  return aliasToCanonical[cleaned] || cleaned;
}

function displayName(country: string) {
  const key = normalizeCountry(country);
  const overrides: Record<string, string> = {
    'brunei darussalam': 'Brunei Darussalam',
    netherlands: 'Netherlands',
    russia: 'Russian Federation / Russia',
    'south korea': 'Republic of Korea / South Korea',
    'united kingdom': 'United Kingdom',
    'united states': 'United States'
  };
  return overrides[key] || country.replace(/^the\s+/i, '');
}

function labelsForCountry(country: string): Record<Locale, string> {
  const key = normalizeCountry(country);
  const en = localizedCountryNames[key]?.en || displayName(country);
  return {
    en,
    ja: localizedCountryNames[key]?.ja || en,
    zh: localizedCountryNames[key]?.zh || en
  };
}

function buildOptions(): CountryOption[] {
  const map = new Map<string, CountryOption>();

  for (const group of unilateralVisaFreeCountries) {
    for (const country of group.countries) {
      const key = normalizeCountry(country);
      const existing = map.get(key);
      map.set(key, {
        key,
        labels: existing?.labels || labelsForCountry(country),
        unilateral: true,
        transit: existing?.transit || false
      });
    }
  }

  for (const group of transitVisaFreeCountries) {
    for (const country of group.countries) {
      const key = normalizeCountry(country);
      const existing = map.get(key);
      map.set(key, {
        key,
        labels: existing?.labels || labelsForCountry(country),
        unilateral: existing?.unilateral || false,
        transit: true
      });
    }
  }

  return Array.from(map.values()).sort((a, b) => a.labels.en.localeCompare(b.labels.en));
}

const countryOptions = buildOptions();

export function CountryPolicySelector({locale}: {locale: Locale}) {
  const [query, setQuery] = useState('');
  const copy = selectorCopy[locale];
  const visaCopy = visaDetailCopy[locale];
  const normalized = normalizeCountry(query);
  const queryText = query.trim().toLowerCase();
  const exact = countryOptions.find((country) => (
    country.key === normalized ||
    Object.values(country.labels).some((label) => label.toLowerCase() === queryText)
  ));

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countryOptions.slice(0, 8);
    const normalizedQuery = normalizeCountry(q);
    return countryOptions
      .filter((country) => (
        country.key.includes(normalizedQuery) ||
        Object.values(country.labels).some((label) => label.toLowerCase().includes(q))
      ))
      .slice(0, 8);
  }, [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <section className="paper-sheet mt-8 rounded-[1.6rem] border border-white/80 p-5 shadow-[0_14px_36px_rgba(31,31,31,0.08)] md:p-6">
      <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-teal">{copy.title}</p>
          <p className="mt-3 text-sm leading-6 text-ink/68">{copy.description}</p>
          <label className="mt-5 block">
            <span className="text-sm font-black text-ink">{copy.label}</span>
            <span className="mt-2 flex min-h-14 items-center gap-2 rounded-full border border-ink/10 bg-white px-4 shadow-sm">
              <Search size={18} className="shrink-0 text-ink/48" aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                list="passport-country-options"
                className="min-w-0 flex-1 bg-transparent text-base outline-none"
                placeholder={copy.placeholder}
              />
            </span>
          </label>
          <datalist id="passport-country-options">
            {countryOptions.map((country) => (
              <option key={country.key} value={country.labels[locale]} />
            ))}
          </datalist>
        </div>

        <div className="rounded-[1.25rem] border border-ink/10 bg-white/74 p-4">
          {exact ? (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-black text-ink">{exact.labels[locale]}</h3>
                <span className="rounded-full bg-[#123735] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-gold">{copy.source}</span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <PolicyMatch
                  active={exact.unilateral}
                  title={copy.visaFree}
                  href="#visa-free"
                  next={copy.next}
                />
                <PolicyMatch
                  active={exact.transit}
                  title={copy.transit}
                  href="#transit"
                  next={copy.next}
                />
              </div>
              {!exact.unilateral && !exact.transit ? (
                <div className="mt-4 rounded-2xl border border-cinnabar/20 bg-cinnabar/8 p-4">
                  <p className="font-black text-cinnabar">{copy.notListedTitle}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/68">{copy.notListedBody}</p>
                  <Link href="#tourist-visa" className="mt-4 inline-flex rounded-full bg-cinnabar px-4 py-2 text-sm font-black text-white">
                    {copy.next}
                  </Link>
                </div>
              ) : null}
              <p className="mt-4 text-xs leading-5 text-ink/58">{copy.reminder}</p>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-black text-ink">{hasQuery ? copy.noMatch : visaCopy.decisionTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/62">{hasQuery ? copy.reminder : visaCopy.decisionDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {suggestions.map((country) => (
                  <button
                    key={country.key}
                    type="button"
                    onClick={() => setQuery(country.labels[locale])}
                    className="rounded-full border border-ink/10 bg-white px-3 py-2 text-sm font-bold text-ink/72 transition hover:bg-paper"
                  >
                    {country.labels[locale]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function PolicyMatch({active, title, href, next}: {active: boolean; title: string; href: string; next: string}) {
  return (
    <div className={`rounded-2xl border p-4 ${active ? 'border-teal/25 bg-teal/10' : 'border-ink/10 bg-white/70'}`}>
      <div className="flex items-start gap-3">
        {active ? (
          <CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={20} aria-hidden="true" />
        ) : (
          <XCircle className="mt-0.5 shrink-0 text-ink/35" size={20} aria-hidden="true" />
        )}
        <div>
          <p className={`font-black ${active ? 'text-teal' : 'text-ink/48'}`}>{title}</p>
          {active ? (
            <Link href={href} className="mt-3 inline-flex rounded-full bg-[#123735] px-4 py-2 text-sm font-black text-white">
              {next}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
