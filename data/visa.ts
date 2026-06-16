import type {Localized} from '@/lib/types';

export const unilateralVisaFreeCountries = [
  {
    region: 'Europe',
    countries: [
      'Andorra',
      'Austria',
      'Belgium',
      'Bulgaria',
      'Croatia',
      'Cyprus',
      'Denmark',
      'Estonia',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'Hungary',
      'Iceland',
      'Ireland',
      'Italy',
      'Latvia',
      'Liechtenstein',
      'Luxembourg',
      'Malta',
      'Monaco',
      'Montenegro',
      'Netherlands',
      'North Macedonia',
      'Norway',
      'Poland',
      'Portugal',
      'Romania',
      'Russian Federation',
      'Slovakia',
      'Slovenia',
      'Spain',
      'Sweden',
      'Switzerland',
      'United Kingdom of Great Britain and Northern Ireland'
    ]
  },
  {region: 'Oceania', countries: ['Australia', 'New Zealand']},
  {
    region: 'Asia',
    countries: ['Bahrain', 'Brunei Darussalam', 'Japan', 'Kuwait', 'Oman', 'Republic of Korea', 'Saudi Arabia']
  },
  {
    region: 'Americas',
    countries: ['Argentina', 'Brazil', 'Canada', 'Chile', 'Peru', 'Uruguay']
  }
];

export const transitVisaFreeCountries = [
  {
    region: 'Europe',
    countries: [
      'Albania',
      'Austria',
      'Belarus',
      'Belgium',
      'Bosnia and Herzegovina',
      'Bulgaria',
      'Croatia',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Estonia',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'Hungary',
      'Iceland',
      'Ireland',
      'Italy',
      'Latvia',
      'Lithuania',
      'Luxembourg',
      'Malta',
      'Monaco',
      'Montenegro',
      'the Netherlands',
      'North Macedonia',
      'Norway',
      'Poland',
      'Portugal',
      'Romania',
      'Russia',
      'Serbia',
      'Slovakia',
      'Slovenia',
      'Spain',
      'Sweden',
      'Switzerland',
      'Ukraine',
      'United Kingdom'
    ]
  },
  {region: 'Americas', countries: ['Argentina', 'Brazil', 'Canada', 'Chile', 'Mexico', 'the United States']},
  {region: 'Oceania', countries: ['Australia', 'New Zealand']},
  {region: 'Asia', countries: ['Brunei', 'Indonesia', 'Japan', 'Qatar', 'Singapore', 'South Korea', 'United Arab Emirates']}
];

export const visaDetailCopy: Localized<{
  title: string;
  intro: string;
  checked: string;
  officialOnly: string;
  sourceLabel: string;
  decisionTitle: string;
  decisionDescription: string;
  pathLabels: {bestFor: string; check: string; details: string; countries: string; source: string};
  pathCards: {id: 'visaFree' | 'transit' | 'visa'; label: string; title: string; summary: string; bestFor: string; href: string}[];
  checklistTitle: string;
  checklistItems: string[];
  unilateralTitle: string;
  unilateralSummary: string;
  regionLabels: Record<string, string>;
  eligibilityTitle: string;
  eligibilityItems: string[];
  validityTitle: string;
  validityItems: string[];
  documentsTitle: string;
  visaFreeDocs: string[];
  transitTitle: string;
  transitSummary: string;
  transitItems: string[];
  lVisaTitle: string;
  lVisaSummary: string;
  lVisaDocs: string[];
  mistakesTitle: string;
  mistakes: string[];
  sourcesTitle: string;
  sourceLinks: {title: string; publisher: string; url: string}[];
}> = {
  en: {
    title: 'Visa & Entry',
    intro: 'Start here before booking the rest of your China trip. Visa-free entry depends on passport, purpose, length of stay and route.',
    checked: 'Information checked against official sources on June 14, 2026.',
    officialOnly: 'Policies change. Use this page as a preparation guide and verify with official sources before departure.',
    sourceLabel: 'Official source',
    decisionTitle: 'First, choose your entry path',
    decisionDescription: 'Most travelers fall into one of these three paths. Start with the first one that matches your passport and route.',
    pathLabels: {bestFor: 'Best for', check: 'Check', details: 'Details', countries: 'Countries', source: 'Source'},
    pathCards: [
      {id: 'visaFree', label: 'Path A', title: '30-day visa-free entry', summary: 'Use this if your ordinary passport is from a listed country and your stay is no more than 30 days.', bestFor: 'Direct tourism or business trips to China.', href: '#visa-free'},
      {id: 'transit', label: 'Path B', title: '240-hour transit visa-free', summary: 'Use this if you are transiting China on the way to a third country or region.', bestFor: 'Multi-country itineraries with a confirmed onward ticket.', href: '#transit'},
      {id: 'visa', label: 'Path C', title: 'Apply for a tourist visa', summary: 'Use this if you do not meet visa-free or transit conditions.', bestFor: 'Longer stays, non-listed passports, or trips outside visa-free purposes.', href: '#tourist-visa'}
    ],
    checklistTitle: 'Departure check',
    checklistItems: [
      'My passport type and nationality match the policy I plan to use.',
      'My stay length is within the allowed limit.',
      'My travel purpose matches the entry path.',
      'I have tickets, hotel bookings or invitation documents that support my purpose.',
      'I checked the official source shortly before departure.'
    ],
    unilateralTitle: '30-day unilateral visa-free entry',
    unilateralSummary: 'According to China’s National Immigration Administration, nationals of the following 50 countries holding ordinary passports may enter China visa-free for eligible purposes and stay up to 30 days.',
    regionLabels: {Europe: 'Europe', Oceania: 'Oceania', Asia: 'Asia', Americas: 'Americas'},
    eligibilityTitle: 'Who can use it',
    eligibilityItems: [
      'You hold a valid ordinary passport from one of the listed countries.',
      'Your purpose is business, tourism, visiting relatives or friends, exchange visit, or transit.',
      'Your stay is no more than 30 days. The stay period is counted from 00:00 on the day after entry.',
      'Individual travelers and tour groups can both use the policy if they meet the conditions.',
      'Work, study, news reporting and similar purposes are not covered by this visa-free policy.'
    ],
    validityTitle: 'Policy validity',
    validityItems: [
      'Brunei Darussalam: no expiry date stated in the official FAQ.',
      'Russian Federation: official FAQ says the unilateral visa-free policy remains effective until December 31, 2027.',
      'Other 48 countries: official FAQ says the policy remains effective until December 31, 2026.'
    ],
    documentsTitle: 'Carry these documents for visa-free entry',
    visaFreeDocs: [
      'Valid ordinary passport. Temporary, emergency or non-ordinary travel documents do not qualify for unilateral visa-free entry.',
      'Round-trip or onward tickets, hotel or accommodation bookings, and a simple itinerary.',
      'Invitation letter if your purpose is business, exchange, family or friends visit.',
      'Any proof that matches your stated purpose of entry. Border inspection may examine the purpose of stay.'
    ],
    transitTitle: '240-hour transit visa-free policy',
    transitSummary: 'For eligible travelers transiting to a third country or region, China’s NIA lists 55 countries and 65 eligible ports. This is different from ordinary tourist visa-free entry.',
    transitItems: [
      'You must be a citizen of one of the 55 countries listed below.',
      'You need a valid international travel document with at least 3 months of validity.',
      'You need interline tickets or other proof for travel to a third country or region within 240 hours.',
      'You must stay within permitted areas for visa-free transit travelers.',
      'Tourism, business, exchange visits and family visits are allowed during transit; work, study and news reporting still need the proper visa.'
    ],
    lVisaTitle: 'If you still need a tourist visa',
    lVisaSummary: 'If you do not meet visa-free or transit conditions, prepare a visa before travel. For ordinary tourism, the relevant visa type is usually L.',
    lVisaDocs: [
      'Complete the online visa application according to the Chinese embassy or consulate where you apply.',
      'Submit passport and photo, proof of legal stay or residence if applying outside your country of citizenship, and previous Chinese passport or visa if applicable.',
      'Provide round-trip ticket and hotel booking materials, or an invitation letter from a Chinese organization or individual.',
      'An invitation letter should include the invitee’s personal information, itinerary details, and inviter information.',
      'A consular officer may request additional materials depending on the case.'
    ],
    mistakesTitle: 'Common mistakes',
    mistakes: [
      'Assuming your nationality is visa-free without checking the current official list.',
      'Using the 240-hour transit policy without a confirmed ticket to a third country or region.',
      'Planning work, study or media activities under a tourist or visa-free entry route.',
      'Not carrying hotel bookings, onward tickets or invitation documents that match your stated purpose.',
      'Forgetting the online or arrival-card process before immigration inspection.'
    ],
    sourcesTitle: 'Official sources used',
    sourceLinks: [
      {
        title: 'List of Countries Covered by Unilateral Visa Exemption Policies',
        publisher: 'National Immigration Administration',
        url: 'https://en.nia.gov.cn/n147418/n147463/c183390/content.html'
      },
      {
        title: 'FAQs on Visa-free Entry into China',
        publisher: 'China Consular Service, Ministry of Foreign Affairs',
        url: 'https://cs.mfa.gov.cn/gyls/lsgz/fwxx/202511/t20251110_11749824.shtml'
      },
      {
        title: 'Conditions for Foreign Nationals Applying for 240-Hour Visa-Free Transit Policy',
        publisher: 'National Immigration Administration',
        url: 'https://en.nia.gov.cn/n147413/c187308/content.html'
      },
      {
        title: 'Tourist Visa (L Visa) required materials',
        publisher: 'China Consular Service, Ministry of Foreign Affairs',
        url: 'https://cs.mfa.gov.cn/wgrlh/lhqz/cjwdn_660600/201407/t20140717_961493.shtml'
      },
      {
        title: 'Official online arrival card filling notice',
        publisher: 'National Immigration Administration',
        url: 'https://en.nia.gov.cn/n147418/n147463/c191530/content.html'
      }
    ]
  },
  ja: {
    title: 'ビザと入境',
    intro: '中国旅行の準備はここから始めます。ビザ免除は、パスポート、渡航目的、滞在日数、経路によって変わります。',
    checked: '2026年6月14日に公式情報で確認。',
    officialOnly: '政策は変更される可能性があります。出発前に必ず公式情報で再確認してください。',
    sourceLabel: '公式情報',
    decisionTitle: 'まず入境ルートを選ぶ',
    decisionDescription: '多くの旅行者はこの3つのどれかに当てはまります。自分のパスポートと経路に合うものから確認してください。',
    pathLabels: {bestFor: '向いているケース', check: '確認', details: '詳細', countries: '対象国', source: '出典'},
    pathCards: [
      {id: 'visaFree', label: 'ルートA', title: '30日以内のビザ免除', summary: '対象国の普通旅券で、滞在が30日以内ならここを確認します。', bestFor: '中国へ直接行く観光・商用旅行。', href: '#visa-free'},
      {id: 'transit', label: 'ルートB', title: '240時間トランジット免除', summary: '第三国・地域へ向かう途中で中国に滞在する場合に確認します。', bestFor: '確定済みの乗継チケットがある複数国旅程。', href: '#transit'},
      {id: 'visa', label: 'ルートC', title: '観光ビザを申請', summary: 'ビザ免除やトランジット条件に当てはまらない場合はこちらです。', bestFor: '長めの滞在、対象外パスポート、免除対象外の目的。', href: '#tourist-visa'}
    ],
    checklistTitle: '出発前チェック',
    checklistItems: [
      '自分の旅券種類と国籍が利用予定の政策に合っている。',
      '滞在日数が上限内である。',
      '渡航目的が入境ルートに合っている。',
      '航空券、ホテル予約、招待状など目的を説明できる資料がある。',
      '出発直前に公式情報を再確認した。'
    ],
    unilateralTitle: '30日以内の一方的ビザ免除',
    unilateralSummary: '中国国家移民管理局によると、下記50か国の普通旅券保持者は、対象目的で30日以内の滞在ならビザ免除で入境できます。',
    regionLabels: {Europe: 'ヨーロッパ', Oceania: 'オセアニア', Asia: 'アジア', Americas: 'アメリカ大陸'},
    eligibilityTitle: '利用条件',
    eligibilityItems: [
      '対象国の有効な普通旅券を持っている。',
      '目的が商用、観光、親族・友人訪問、交流訪問、または通過である。',
      '滞在が30日以内。滞在期間は入境翌日の0時から計算されます。',
      '条件を満たせば、個人旅行でもツアーでも利用できます。',
      '就労、留学、報道などはこのビザ免除の対象外です。'
    ],
    validityTitle: '政策の有効期間',
    validityItems: [
      'ブルネイ：公式FAQでは期限なし。',
      'ロシア：公式FAQでは2027年12月31日まで。',
      'その他48か国：公式FAQでは2026年12月31日まで。'
    ],
    documentsTitle: 'ビザ免除入境時に持っておきたい資料',
    visaFreeDocs: [
      '有効な普通旅券。臨時・緊急渡航文書などは一方的ビザ免除の対象外です。',
      '往復または次の目的地への航空券、ホテル予約、簡単な旅程。',
      '商用、交流、親族・友人訪問の場合は招待状。',
      '入境目的を説明できる資料。国境検査で滞在目的を確認される場合があります。'
    ],
    transitTitle: '240時間トランジットビザ免除',
    transitSummary: '第三国・地域へ乗り継ぐ対象者向けの制度です。国家移民管理局は55か国、65対象口岸を示しています。通常の観光ビザ免除とは別です。',
    transitItems: [
      '下記55か国の国民であること。',
      '有効期間3か月以上の国際旅行証件を持っていること。',
      '240時間以内に第三国・地域へ向かう確定済みの乗継チケット等を持っていること。',
      '許可された滞在区域内にとどまること。',
      '期間中の観光、商用、交流、親族訪問は可能ですが、就労、留学、報道には適切なビザが必要です。'
    ],
    lVisaTitle: 'ビザが必要な場合',
    lVisaSummary: 'ビザ免除やトランジット条件に当てはまらない場合は、渡航前にビザを準備します。通常の観光目的はL字ビザです。',
    lVisaDocs: [
      '申請地の中国大使館・領事館の要求に従い、オンライン申請表を記入します。',
      '旅券と写真、第三国で申請する場合の合法滞在・居留証明、該当する場合は旧中国旅券または旧中国ビザを提出します。',
      '往復航空券とホテル予約、または中国国内の団体・個人による招待状を提出します。',
      '招待状には被招待者情報、旅程、招待者情報が必要です。',
      '個別状況により、領事官が追加資料を求める場合があります。'
    ],
    mistakesTitle: 'よくあるミス',
    mistakes: [
      '現在の公式対象国リストを確認せず、自分の国籍がビザ免除だと思い込む。',
      '第三国・地域への確定チケットなしで240時間トランジット制度を使おうとする。',
      '観光またはビザ免除で、就労・留学・報道活動を予定する。',
      'ホテル予約、次の移動チケット、招待状など目的に合う資料を持たない。',
      '入境カードのオンラインまたは到着時手続きを忘れる。'
    ],
    sourcesTitle: '使用した公式情報',
    sourceLinks: [
      {title: 'List of Countries Covered by Unilateral Visa Exemption Policies', publisher: 'National Immigration Administration', url: 'https://en.nia.gov.cn/n147418/n147463/c183390/content.html'},
      {title: '単方面免签政策常见问题解答 / FAQs on Visa-free Entry into China', publisher: '中国领事服务网 / 外交部', url: 'https://cs.mfa.gov.cn/gyls/lsgz/fwxx/202511/t20251110_11749824.shtml'},
      {title: '240-Hour Visa-Free Transit Policy Conditions', publisher: 'National Immigration Administration', url: 'https://en.nia.gov.cn/n147413/c187308/content.html'},
      {title: '旅游签证（L字签证）所需材料', publisher: '中国领事服务网 / 外交部', url: 'https://cs.mfa.gov.cn/wgrlh/lhqz/cjwdn_660600/201407/t20140717_961493.shtml'},
      {title: 'Official online arrival card filling notice', publisher: 'National Immigration Administration', url: 'https://en.nia.gov.cn/n147418/n147463/c191530/content.html'}
    ]
  },
  zh: {
    title: '签证与入境',
    intro: '来华旅行准备从这里开始。是否免签取决于护照、来华目的、停留时长和路线。',
    checked: '已于 2026年6月14日 对照官方来源核查。',
    officialOnly: '政策可能变化，本页用于准备参考，出发前请务必再次核对官方信息。',
    sourceLabel: '官方来源',
    decisionTitle: '先判断你属于哪条入境路径',
    decisionDescription: '大多数旅行者会落在下面三种情况之一。先选最符合你护照和路线的一项，再看详细条件。',
    pathLabels: {bestFor: '适合', check: '先看', details: '详情', countries: '国家名单', source: '来源'},
    pathCards: [
      {id: 'visaFree', label: '路径 A', title: '30 天免签入境', summary: '如果你持名单内国家普通护照，且停留不超过 30 天，先看这一项。', bestFor: '直接来中国旅游、商务或探亲访友。', href: '#visa-free'},
      {id: 'transit', label: '路径 B', title: '240 小时过境免签', summary: '如果你经中国前往第三国或地区，且已有后续行程票据，看这一项。', bestFor: '多国行程，且有确定的后续机票或车船票。', href: '#transit'},
      {id: 'visa', label: '路径 C', title: '办理旅游签证', summary: '如果不符合免签或过境免签条件，就应提前申请签证。', bestFor: '停留更久、护照不在名单内，或目的不属于免签范围。', href: '#tourist-visa'}
    ],
    checklistTitle: '出发前核对',
    checklistItems: [
      '我的护照类型和国籍符合计划使用的政策。',
      '我的停留时长在允许范围内。',
      '我的来华目的符合对应入境路径。',
      '我有机票、酒店订单或邀请函等能说明来华目的的材料。',
      '我在出发前再次核对了官方来源。'
    ],
    unilateralTitle: '30 天单方面免签入境',
    unilateralSummary: '根据国家移民管理局信息，以下 50 个国家持普通护照人员，符合来华目的和停留时长条件的，可免办签证入境中国并停留不超过 30 天。',
    regionLabels: {Europe: '欧洲', Oceania: '大洋洲', Asia: '亚洲', Americas: '美洲'},
    eligibilityTitle: '适用条件',
    eligibilityItems: [
      '持名单内国家的有效普通护照。',
      '来华目的为经商、旅游观光、探亲访友、交流访问或过境。',
      '停留不超过 30 天；停留期限自入境次日 0 时起算。',
      '符合条件的个人游客和旅游团组均可适用。',
      '来华工作、学习、采访报道等不属于该免签范围。'
    ],
    validityTitle: '政策有效期',
    validityItems: [
      '文莱：官方 FAQ 显示未设期限。',
      '俄罗斯：官方 FAQ 显示实施至 2027年12月31日。',
      '其余 48 国：官方 FAQ 显示实施至 2026年12月31日。'
    ],
    documentsTitle: '免签入境建议携带资料',
    visaFreeDocs: [
      '有效普通护照；旅行证、临时或紧急证件等普通护照以外证件不适用单方面免签。',
      '往返或后续行程票据、酒店或住宿订单、简单行程单。',
      '如为商务、交流、探亲访友目的，建议携带邀请函。',
      '与来华目的相符的证明材料；边检机关可能依法核查来华事由。'
    ],
    transitTitle: '240 小时过境免签',
    transitSummary: '这是面向前往第三国或地区的过境旅客政策，与普通旅游免签不同。国家移民管理局列明适用 55 个国家和 65 个口岸。',
    transitItems: [
      '申请人须为下列 55 个国家公民。',
      '须持有效期不少于 3 个月的国际旅行证件。',
      '须持有 240 小时内前往第三国或地区的已确定日期和座位的联程客票或相关证明。',
      '须在过境免签允许停留区域内活动。',
      '过境期间可从事旅游、商务、交流访问、探亲访友等活动；工作、学习、采访报道仍需提前办妥相应签证。'
    ],
    lVisaTitle: '如果仍需办理旅游签证',
    lVisaSummary: '如果不符合免签或过境免签条件，应在出发前办理签证。普通旅游通常对应 L 字签证。',
    lVisaDocs: [
      '按申请地中国使领馆要求，在线填写签证申请表。',
      '提交申请人护照和照片；如在非国籍国申请，提交合法停留或居留证明；如适用，提交原中国护照或原中国签证。',
      '提交往返机票订单和酒店订单等行程材料，或中国境内单位/个人出具的邀请函。',
      '邀请函应包含被邀请人个人信息、行程安排信息、邀请单位或邀请人信息。',
      '因个案不同，领事官员还可能要求提供其他材料。'
    ],
    mistakesTitle: '常见错误',
    mistakes: [
      '不查最新官方名单，就默认自己的国籍可以免签。',
      '没有前往第三国或地区的确定票据，却计划使用 240 小时过境免签。',
      '用旅游或免签方式安排工作、学习、采访报道等活动。',
      '没有携带酒店订单、后续行程票据、邀请函等与来华目的相符的资料。',
      '忘记提前或抵达时填写入境卡。'
    ],
    sourcesTitle: '使用的官方来源',
    sourceLinks: [
      {title: '单方面免签国家范围名单', publisher: '国家移民管理局', url: 'https://en.nia.gov.cn/n147418/n147463/c183390/content.html'},
      {title: '单方面免签政策常见问题解答', publisher: '中国领事服务网 / 外交部', url: 'https://cs.mfa.gov.cn/gyls/lsgz/fwxx/202511/t20251110_11749824.shtml'},
      {title: '240 小时过境免签适用条件', publisher: '国家移民管理局', url: 'https://en.nia.gov.cn/n147413/c187308/content.html'},
      {title: '旅游签证（L字签证）所需材料', publisher: '中国领事服务网 / 外交部', url: 'https://cs.mfa.gov.cn/wgrlh/lhqz/cjwdn_660600/201407/t20140717_961493.shtml'},
      {title: '外国人入境卡官方线上填报提示', publisher: '国家移民管理局', url: 'https://en.nia.gov.cn/n147418/n147463/c191530/content.html'}
    ]
  }
};
