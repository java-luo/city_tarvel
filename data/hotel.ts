import type {Localized} from '@/lib/types';

export const hotelGuideCopy: Localized<{
  title: string;
  intro: string;
  checked: string;
  officialNote: string;
  essentials: {label: string; title: string; body: string}[];
  routeTitle: string;
  routeIntro: string;
  stayTypes: {label: string; title: string; body: string; items: string[]}[];
  beforeTitle: string;
  beforeIntro: string;
  beforeCards: {title: string; items: string[]}[];
  deskTitle: string;
  deskIntro: string;
  deskSteps: {title: string; body: string}[];
  registrationTitle: string;
  registrationIntro: string;
  localGuides: {label: string; title: string; body: string; items: string[]}[];
  problemTitle: string;
  problemIntro: string;
  problems: {title: string; body: string[]}[];
  phraseTitle: string;
  phraseIntro: string;
  phrases: {label: string; chinese: string; pinyin: string; meaning: string}[];
  sourcesTitle: string;
  sourcesIntro: string;
  sourceLabel: string;
  sources: {publisher: string; title: string; url: string; summary: string}[];
}> = {
  en: {
    title: 'Hotel Check-in',
    intro: 'For a first China trip, the goal is simple: book a place that can check you in with your original passport, then know who handles accommodation registration.',
    checked: 'Information checked against official and government sources on June 15, 2026.',
    officialNote: 'This page is a practical travel guide. Local implementation can differ, so use the linked official pages as the final source.',
    essentials: [
      {label: 'Hotel stay', title: 'The hotel registers you', body: 'During hotel check-in, staff register foreign guest accommodation information with local public security.'},
      {label: 'Non-hotel stay', title: 'Register within 24 hours', body: 'If you stay with a friend, in a private apartment, or another non-hotel address, you or the host handle registration.'},
      {label: 'Help channel', title: '12367 for immigration questions', body: 'The national immigration service hotline is referenced by official guidance for policy questions and help.'}
    ],
    routeTitle: 'Choose your stay path',
    routeIntro: 'Pick the situation closest to your first night in China. Most tourist friction comes from choosing the wrong path before arrival.',
    stayTypes: [
      {
        label: 'Path A',
        title: 'I booked a hotel',
        body: 'This is the easiest path for a first-time visitor. Bring your original passport and booking confirmation. The hotel should complete the accommodation registration during check-in.',
        items: ['Use the same name order as your passport.', 'Save the hotel name, address, and phone number in Chinese.', 'Ask before arrival if the front desk can process foreign passport check-in.']
      },
      {
        label: 'Path B',
        title: 'I stay with friends or in an apartment',
        body: 'This is not a normal hotel check-in. You and the host need to complete temporary accommodation registration within 24 hours, either online where available or at the local police station.',
        items: ['Ask your host which police station or online channel applies.', 'Prepare your passport and proof of address, such as lease or property documents if requested.', 'Register again if your address or city changes and local rules require it.']
      },
      {
        label: 'Path C',
        title: 'I have not booked yet',
        body: 'Make the first night low-risk. Choose a hotel with clear passport check-in support and an easy cancellation policy.',
        items: ['Prefer established hotels or hotels with many foreign guest reviews for the first night.', 'Message the property: Can I check in with a foreign passport?', 'Avoid arriving very late at a small hotel on your first night.']
      }
    ],
    beforeTitle: 'Before you book',
    beforeIntro: 'Do these before paying for the room. They prevent most front-desk problems.',
    beforeCards: [
      {
        title: 'Ask the right question',
        items: ['Can foreign guests check in with a passport?', 'Can your front desk complete foreigner accommodation registration?', 'Is late check-in available if my flight arrives at night?']
      },
      {
        title: 'Keep these screenshots',
        items: ['Booking confirmation with guest name.', 'Hotel Chinese name and full address.', 'Hotel phone number and platform chat history.']
      },
      {
        title: 'Match the passport',
        items: ['Use the passport name for the booking.', 'Bring the original passport, not only a copy.', 'If you renewed your passport, bring documents that explain the booking/passport mismatch.']
      }
    ],
    deskTitle: 'At the front desk',
    deskIntro: 'This is the normal hotel flow. If staff ask for extra information, answer calmly and keep your booking app open.',
    deskSteps: [
      {title: 'Show passport and booking', body: 'Hand over the original passport and show your reservation. If the order name differs, explain it immediately.'},
      {title: 'Staff verifies identity', body: 'The front desk checks your passport details, entry information, and room booking.'},
      {title: 'Accommodation registration is filed', body: 'For hotel stays, the hotel submits foreign guest accommodation information to the local public security organ.'},
      {title: 'Pay room fee or deposit', body: 'Some hotels take a deposit. Prepare Alipay, an international card, or cash as backup.'},
      {title: 'Save the address card', body: 'Keep the hotel address in Chinese for taxis, ride-hailing, police station visits, or delivery forms.'}
    ],
    registrationTitle: 'If it is not a hotel',
    registrationIntro: 'Non-hotel stays are where travelers get confused. The rule is about accommodation registration, not about booking a hotel room.',
    localGuides: [
      {
        label: 'National rule',
        title: 'Hotels file registration, non-hotels register within 24 hours',
        body: 'The National Immigration Administration explains that hotels register foreign guests. If you stay somewhere other than a hotel, registration is handled by you or the host within 24 hours.',
        items: ['Non-hotel addresses include friends, family, private rentals, and some serviced apartments.', 'Failure to register can lead to a warning or fine under the cited law.', 'Ask the host to help with the first registration because they know the address details.']
      },
      {
        label: 'Online pilot',
        title: 'NIA online registration started as a pilot on March 20, 2026',
        body: 'For non-hotel stays, official guidance says online registration is available through NIA channels in pilot provincial-level regions, with national expansion planned.',
        items: ['Pilot regions listed by the State Council page: Hebei, Liaoning, Zhejiang, Hubei, Guangxi, Chongqing, and Sichuan.', 'Channels include the NIA Government Service Platform, NIA 12367 App, WeChat mini program, and Alipay mini program.', 'If online registration fails, use the local exit-entry window or police station.']
      },
      {
        label: 'Beijing',
        title: 'Beijing provides online and offline registration channels',
        body: 'Beijing states that hotel stays are registered by hotel staff during check-in. For non-hotel addresses, online and police-station channels are listed.',
        items: ['Online materials can include passport information page, a recent photo, and address proof.', 'Offline registration is done at the local police station for the residence.', 'The Beijing page says its online system supports English, French, Russian, Japanese, and Korean.']
      },
      {
        label: 'Shanghai',
        title: 'Shanghai system says hotel guests do not need to declare separately',
        body: 'The Shanghai public security registration system states that non-hotel stays should be registered within 24 hours and can use WeChat or the local police station.',
        items: ['Hotel guests do not need to declare separately in that Shanghai system.', 'The page references the 12367 immigration service hotline for special needs.', 'Use English or Chinese input where the system requires it.']
      }
    ],
    problemTitle: 'If something goes wrong',
    problemIntro: 'Use this as a calm decision list at the counter. The fastest fix is usually operational, not argumentative.',
    problems: [
      {title: 'The hotel says it cannot check in foreign guests', body: ['Show the booking and ask whether a manager can help with passport check-in.', 'Contact the booking platform immediately and ask for relocation or cancellation support.', 'If it is late, switch to a larger chain, international brand, or hotel with clear foreign passport reviews.', 'For policy questions or complaints, official guidance points to channels such as 12367 and local hotlines.']},
      {title: 'The booking name does not match the passport', body: ['Ask the platform or hotel to update the guest name before arrival.', 'If you used a nickname, show the booking account and explain the passport name.', 'For multiple guests, make sure each person has their own original passport.']},
      {title: 'You only have a passport photo', body: ['Bring the original passport. A photo or photocopy is not a reliable check-in document.', 'Keep passport photos in cloud storage only as backup if the passport is lost.', 'If the passport is lost, contact your embassy or consulate and local police.']},
      {title: 'You are staying at a friend or private rental', body: ['Do not assume the hotel rule applies. Ask the host to help register within 24 hours.', 'Prepare passport, address proof, host information, and photos if the local channel asks for them.', 'If online registration is unavailable, go to the local police station or exit-entry window.']},
      {title: 'Your flight arrives after midnight', body: ['Message the hotel with your arrival time before boarding.', 'Keep the hotel phone number available for taxi drivers or front-desk calls.', 'Choose a hotel with 24-hour front desk for the first night.']}
    ],
    phraseTitle: 'Chinese lines for check-in',
    phraseIntro: 'These are not a replacement for translation apps. They are quick lines for the exact hotel situation.',
    phrases: [
      {label: 'Passport check-in', chinese: '请问可以用护照办理入住吗？', pinyin: 'Qǐngwèn kěyǐ yòng hùzhào bànlǐ rùzhù ma?', meaning: 'Can I check in with my passport?'},
      {label: 'Booking', chinese: '我已经预订了房间，这是订单。', pinyin: 'Wǒ yǐjīng yùdìng le fángjiān, zhè shì dìngdān.', meaning: 'I have booked a room. This is the reservation.'},
      {label: 'Registration', chinese: '请帮我确认住宿登记是否已经完成。', pinyin: 'Qǐng bāng wǒ quèrèn zhùsù dēngjì shìfǒu yǐjīng wánchéng.', meaning: 'Please help me confirm whether accommodation registration is complete.'},
      {label: 'Address', chinese: '这是酒店中文地址，请帮我确认。', pinyin: 'Zhè shì jiǔdiàn Zhōngwén dìzhǐ, qǐng bāng wǒ quèrèn.', meaning: 'This is the hotel address in Chinese. Please help me confirm it.'},
      {label: 'Non-hotel stay', chinese: '请问附近派出所或线上住宿登记怎么办理？', pinyin: 'Qǐngwèn fùjìn pàichūsuǒ huò xiànshàng zhùsù dēngjì zěnme bànlǐ?', meaning: 'How do I handle accommodation registration at the nearby police station or online?'}
    ],
    sourcesTitle: 'Official sources',
    sourcesIntro: 'The page content was simplified from these official or government sources.',
    sourceLabel: 'Open source',
    sources: [
      {
        publisher: 'National Immigration Administration',
        title: 'Regulations on Filing Accommodation Registration for Foreigners',
        url: 'https://en.nia.gov.cn/n147423/n147478/n147715/c158241/content.html',
        summary: 'Hotel registration, non-hotel 24-hour registration, and legal liability.'
      },
      {
        publisher: 'State Council / NIA',
        title: 'Policy Interpretation of Online Accommodation Registration Service',
        url: 'https://english.www.gov.cn/services/visitchina/202603/21/content_WS69ce124cc6d00ca5f9a0a368.html',
        summary: 'Online registration channels and the March 20, 2026 pilot scope for non-hotel stays.'
      },
      {
        publisher: 'Beijing Municipal Government',
        title: 'Accommodation Registration Guide for Foreigners in Beijing',
        url: 'https://english.beijing.gov.cn/livinginbeijing/applicationfordocuments/202107/t20210719_2439278.html',
        summary: 'Beijing online and offline registration materials and channels.'
      },
      {
        publisher: 'Shanghai Public Security Bureau',
        title: 'Online registration system for overseas personnel temporary residence',
        url: 'https://gaj.sh.gov.cn/crj/24hr/',
        summary: 'Shanghai notice for non-hotel registration, WeChat/local police station options, and 12367 help.'
      },
      {
        publisher: 'Ministry of Commerce and six departments',
        title: 'Measures to facilitate accommodation for overseas personnel',
        url: 'https://www.mofcom.gov.cn/zcfb/fwmy/art/2024/art_838b27c3ad49478e9a6db346ff0ebff1.html',
        summary: 'National policy direction to remove unreasonable accommodation restrictions and improve service channels.'
      }
    ]
  },
  ja: {
    title: 'ホテルチェックイン',
    intro: '初めて中国へ行く場合の目的はシンプルです。原本のパスポートで泊まれる宿を選び、宿泊登録を誰が行うかを理解します。',
    checked: '2026年6月15日に公式・政府系情報で確認。',
    officialNote: 'このページは旅行者向けの実用ガイドです。地域ごとの運用差があるため、最終確認はリンク先の公式情報で行ってください。',
    essentials: [
      {label: 'ホテル宿泊', title: '登録はホテルが行う', body: 'ホテルに泊まる場合、チェックイン時にスタッフが外国人宿泊情報を公安機関へ登録します。'},
      {label: 'ホテル以外', title: '24時間以内に登録', body: '友人宅、民泊、個人アパートなどでは、本人または受け入れ側が宿泊登録を行います。'},
      {label: '相談先', title: '12367で確認', body: '公式案内では、移民管理関連の相談や困った時の窓口として12367が案内されています。'}
    ],
    routeTitle: '宿泊パターンを選ぶ',
    routeIntro: '中国での最初の夜に一番近いものを選んでください。多くのつまずきは、到着前の選び方で防げます。',
    stayTypes: [
      {
        label: 'Path A',
        title: 'ホテルを予約済み',
        body: '初めての旅行者に一番簡単な方法です。パスポート原本と予約確認を持参します。ホテルはチェックイン時に宿泊登録を処理します。',
        items: ['予約名はパスポート表記に合わせる。', 'ホテル名、住所、電話番号を中国語で保存する。', '到着前に外国パスポートでチェックインできるか確認する。']
      },
      {
        label: 'Path B',
        title: '友人宅やアパートに泊まる',
        body: 'これは通常のホテルチェックインではありません。本人またはホストが24時間以内に、一時宿泊登録をオンラインまたは管轄派出所で行います。',
        items: ['ホストに管轄派出所またはオンライン窓口を確認する。', 'パスポート、住所証明、賃貸契約など必要になりうる書類を準備する。', '住所や都市が変わる場合、再登録が必要か確認する。']
      },
      {
        label: 'Path C',
        title: 'まだ予約していない',
        body: '最初の一泊はリスクを下げましょう。外国パスポートでのチェックインが明確で、キャンセルしやすいホテルを選びます。',
        items: ['最初の夜はチェーンホテルや外国人レビューが多いホテルを優先する。', '宿に「外国パスポートで泊まれるか」を事前に送る。', '初日の深夜到着で小規模ホテルを選ぶのは避ける。']
      }
    ],
    beforeTitle: '予約前に確認',
    beforeIntro: '支払い前に確認しておくと、フロントでの問題をかなり減らせます。',
    beforeCards: [
      {
        title: '聞くべき質問',
        items: ['外国人はパスポートでチェックインできますか。', 'フロントで外国人宿泊登録を処理できますか。', '深夜到着でもチェックインできますか。']
      },
      {
        title: '保存する画面',
        items: ['宿泊者名が見える予約確認。', 'ホテルの中国語名と詳細住所。', 'ホテル電話番号と予約サイトのチャット履歴。']
      },
      {
        title: 'パスポートに合わせる',
        items: ['予約名はパスポート表記にする。', 'コピーではなくパスポート原本を持参する。', 'パスポートを更新した場合、予約名との違いを説明できる資料を持つ。']
      }
    ],
    deskTitle: 'フロントでの流れ',
    deskIntro: '一般的なホテルチェックインの流れです。追加確認があっても、予約アプリを開いたまま落ち着いて対応します。',
    deskSteps: [
      {title: 'パスポートと予約を見せる', body: 'パスポート原本と予約画面を提示します。名前が違う場合はすぐ説明します。'},
      {title: '本人確認', body: 'フロントがパスポート情報、入境情報、予約内容を確認します。'},
      {title: '宿泊登録', body: 'ホテル宿泊の場合、ホテルが外国人宿泊情報を現地公安機関へ提出します。'},
      {title: '支払いまたはデポジット', body: 'デポジットが必要な場合があります。Alipay、国際カード、現金を予備として準備します。'},
      {title: '住所を保存', body: 'タクシー、配車、派出所、配送フォーム用にホテル住所を中国語で保存します。'}
    ],
    registrationTitle: 'ホテル以外に泊まる場合',
    registrationIntro: '旅行者が混乱しやすいのはここです。問題はホテル予約ではなく、宿泊登録の手続きです。',
    localGuides: [
      {
        label: '全国ルール',
        title: 'ホテルはホテルが登録、ホテル以外は24時間以内',
        body: '国家移民管理局は、ホテルは外国人宿泊者を登録し、ホテル以外では本人またはホストが24時間以内に登録すると説明しています。',
        items: ['友人宅、家族宅、個人賃貸、一部サービスアパートなどが該当します。', '未登録の場合、警告または罰金の対象になり得ます。', '最初の登録は住所情報を知るホストに手伝ってもらうのが安全です。']
      },
      {
        label: 'オンライン試行',
        title: '2026年3月20日からNIAオンライン登録を試行',
        body: 'ホテル以外の宿泊について、公式案内は試行地域でオンライン登録できると説明しています。',
        items: ['試行地域は河北、遼寧、浙江、湖北、広西、重慶、四川です。', 'NIA政務サービス平台、NIA 12367 App、WeChatミニプログラム、Alipayミニプログラムが案内されています。', 'オンラインが使えない場合は出入境窓口または管轄派出所で相談します。']
      },
      {
        label: '北京',
        title: '北京はオンラインと窓口の両方を案内',
        body: '北京市は、ホテル宿泊はチェックイン時にホテルスタッフが登録し、ホテル以外はオンラインまたは派出所で登録できると説明しています。',
        items: ['オンライン資料にはパスポート情報ページ、最近の写真、住所証明などが含まれます。', '窓口の場合は居住地管轄の派出所で手続きします。', '北京のページでは英語、フランス語、ロシア語、日本語、韓国語対応が案内されています。']
      },
      {
        label: '上海',
        title: '上海のシステムはホテル宿泊者の別申告不要と説明',
        body: '上海公安の登録システムは、ホテル以外では24時間以内の登録が必要で、WeChatまたは管轄派出所を使えると説明しています。',
        items: ['ホテル宿泊者はそのシステムで別途申告する必要がありません。', '特別な事情がある場合の相談先として12367が案内されています。', 'システム入力は中国語または英語が求められる場合があります。']
      }
    ],
    problemTitle: '困ったとき',
    problemIntro: 'フロントで使うための判断リストです。まずは運用上の解決を優先します。',
    problems: [
      {title: 'ホテルが外国人を泊められないと言う', body: ['予約画面を見せ、マネージャーにパスポートチェックインを確認してもらいます。', '予約プラットフォームへすぐ連絡し、代替ホテルまたはキャンセル対応を依頼します。', '深夜なら、大手チェーン、国際ブランド、外国パスポートレビューが明確なホテルへ切り替えます。', '政策相談や苦情は、公式案内にある12367や現地ホットラインを利用します。']},
      {title: '予約名とパスポート名が違う', body: ['到着前に予約サイトまたはホテルへ宿泊者名修正を依頼します。', 'ニックネームで予約した場合は、アカウント画面を見せてパスポート名を説明します。', '複数人の場合、全員がパスポート原本を持ちます。']},
      {title: 'パスポート写真しかない', body: ['原本を持参してください。写真やコピーだけでは安定したチェックイン書類になりません。', '写真データは紛失時の予備としてクラウド保存します。', '紛失した場合は大使館・領事館と現地警察へ連絡します。']},
      {title: '友人宅や個人賃貸に泊まる', body: ['ホテルのルールがそのまま使えると思わず、24時間以内の登録をホストと確認します。', 'パスポート、住所証明、ホスト情報、写真などを準備します。', 'オンライン不可なら、管轄派出所または出入境窓口へ行きます。']},
      {title: '深夜に到着する', body: ['搭乗前に到着時刻をホテルへ送ります。', 'タクシーやフロントへの連絡用にホテル電話番号を保存します。', '最初の夜は24時間フロントのホテルを選びます。']}
    ],
    phraseTitle: 'チェックイン用の中国語',
    phraseIntro: '翻訳アプリの代わりではありません。ホテルでよく使う短い文だけに絞っています。',
    phrases: [
      {label: 'パスポート', chinese: '请问可以用护照办理入住吗？', pinyin: 'Qǐngwèn kěyǐ yòng hùzhào bànlǐ rùzhù ma?', meaning: 'パスポートでチェックインできますか。'},
      {label: '予約', chinese: '我已经预订了房间，这是订单。', pinyin: 'Wǒ yǐjīng yùdìng le fángjiān, zhè shì dìngdān.', meaning: '部屋を予約済みです。これが予約です。'},
      {label: '宿泊登録', chinese: '请帮我确认住宿登记是否已经完成。', pinyin: 'Qǐng bāng wǒ quèrèn zhùsù dēngjì shìfǒu yǐjīng wánchéng.', meaning: '宿泊登録が完了したか確認してください。'},
      {label: '住所', chinese: '这是酒店中文地址，请帮我确认。', pinyin: 'Zhè shì jiǔdiàn Zhōngwén dìzhǐ, qǐng bāng wǒ quèrèn.', meaning: 'これがホテルの中国語住所です。確認してください。'},
      {label: 'ホテル以外', chinese: '请问附近派出所或线上住宿登记怎么办理？', pinyin: 'Qǐngwèn fùjìn pàichūsuǒ huò xiànshàng zhùsù dēngjì zěnme bànlǐ?', meaning: '近くの派出所またはオンライン宿泊登録はどう手続きしますか。'}
    ],
    sourcesTitle: '公式情報',
    sourcesIntro: 'ページ内容は以下の公式・政府系情報を旅行者向けに整理したものです。',
    sourceLabel: '開く',
    sources: [
      {
        publisher: '国家移民管理局',
        title: 'Regulations on Filing Accommodation Registration for Foreigners',
        url: 'https://en.nia.gov.cn/n147423/n147478/n147715/c158241/content.html',
        summary: 'ホテル登録、ホテル以外の24時間登録、法的責任。'
      },
      {
        publisher: '国務院 / 国家移民管理局',
        title: 'Policy Interpretation of Online Accommodation Registration Service',
        url: 'https://english.www.gov.cn/services/visitchina/202603/21/content_WS69ce124cc6d00ca5f9a0a368.html',
        summary: 'オンライン登録ルートと2026年3月20日開始の試行範囲。'
      },
      {
        publisher: '北京市政府',
        title: 'Accommodation Registration Guide for Foreigners in Beijing',
        url: 'https://english.beijing.gov.cn/livinginbeijing/applicationfordocuments/202107/t20210719_2439278.html',
        summary: '北京のオンライン・窓口登録資料と手続き。'
      },
      {
        publisher: '上海市公安局',
        title: 'Online registration system for overseas personnel temporary residence',
        url: 'https://gaj.sh.gov.cn/crj/24hr/',
        summary: '上海のホテル以外宿泊登録、WeChat/派出所、12367案内。'
      },
      {
        publisher: '商務部ほか6部門',
        title: 'Measures to facilitate accommodation for overseas personnel',
        url: 'https://www.mofcom.gov.cn/zcfb/fwmy/art/2024/art_838b27c3ad49478e9a6db346ff0ebff1.html',
        summary: '宿泊制限の是正、サービス窓口、支払い利便性の改善方針。'
      }
    ]
  },
  zh: {
    title: '酒店入住',
    intro: '第一次来中国，酒店这一步只抓两个重点：能不能用护照办入住，以及住宿登记到底由谁来处理。',
    checked: '已于 2026年6月15日 对照官方和政府来源核查。',
    officialNote: '本页是面向旅行者的执行指南，不是实时法律判断。不同城市落地方式可能不同，请以页面底部官方链接为最终依据。',
    essentials: [
      {label: '住酒店', title: '酒店负责登记', body: '正常酒店入住时，前台会登记并向当地公安机关报送外国人住宿信息。'},
      {label: '非酒店住宿', title: '24 小时内登记', body: '住朋友家、私人公寓、部分民宿或非酒店地址时，通常由本人或接待人办理住宿登记。'},
      {label: '咨询渠道', title: '12367 可咨询', body: '官方文件和地方系统均提到，可通过国家移民管理政务服务平台 12367 咨询相关问题。'}
    ],
    routeTitle: '先判断你住在哪里',
    routeIntro: '选择最接近你在中国第一晚的情况。大部分入住问题，都可以在订房前避免。',
    stayTypes: [
      {
        label: '路径 A',
        title: '我订的是酒店',
        body: '这是第一次来中国最省心的方式。带好护照原件和订单，酒店前台应在办理入住时完成住宿登记。',
        items: ['订单姓名尽量和护照一致。', '保存酒店中文名、中文地址和电话。', '到达前确认前台能否办理外国护照入住。']
      },
      {
        label: '路径 B',
        title: '我住朋友家或公寓',
        body: '这不是普通酒店入住。本人或接待人需要在 24 小时内，通过当地线上渠道或派出所办理临时住宿登记。',
        items: ['提前问接待人：归哪个派出所，能不能线上办。', '准备护照、住址证明，必要时准备租赁合同或房产信息。', '换城市或换地址后，按当地要求确认是否需要重新登记。']
      },
      {
        label: '路径 C',
        title: '我还没订住宿',
        body: '第一晚尽量降低风险。优先选择明确支持外国护照入住、可取消、评价里有外国游客入住记录的酒店。',
        items: ['第一晚优先选连锁酒店、国际品牌或外国游客评价较多的酒店。', '给酒店发消息确认：可以用外国护照办理入住吗？', '第一次来华，不建议深夜到达后再去小型酒店碰运气。']
      }
    ],
    beforeTitle: '订房前先确认',
    beforeIntro: '付款前做完这些，前台卡住的概率会低很多。',
    beforeCards: [
      {
        title: '问对问题',
        items: ['外国客人可以用护照办理入住吗？', '前台可以完成外国人住宿登记吗？', '如果航班晚上到，是否支持深夜入住？']
      },
      {
        title: '提前截图保存',
        items: ['包含入住人姓名的酒店订单。', '酒店中文名和完整中文地址。', '酒店电话，以及和酒店或平台的聊天记录。']
      },
      {
        title: '和护照保持一致',
        items: ['订单入住人姓名尽量使用护照姓名。', '带护照原件，不要只带复印件或照片。', '如果换过护照，准备能解释订单和新护照关系的材料。']
      }
    ],
    deskTitle: '到前台以后怎么做',
    deskIntro: '这是普通酒店入住的流程。前台如果多问几句，保持订单页面打开，按步骤配合即可。',
    deskSteps: [
      {title: '出示护照和订单', body: '把护照原件交给前台，同时展示酒店订单。如果订单名和护照名不同，先主动说明。'},
      {title: '前台核验身份', body: '前台会核对护照信息、入境信息和订单信息。'},
      {title: '办理住宿登记', body: '住酒店时，酒店会向当地公安机关报送外国人住宿登记信息。'},
      {title: '支付房费或押金', body: '部分酒店需要押金。准备支付宝、国际银行卡或少量现金作为备用。'},
      {title: '保存酒店地址', body: '把酒店中文地址保存好，打车、叫车、去派出所或填写外卖配送信息都会用到。'}
    ],
    registrationTitle: '如果你住的不是酒店',
    registrationIntro: '这里最容易混淆。问题不是“订不订酒店”，而是“住宿登记由谁办理”。',
    localGuides: [
      {
        label: '全国规则',
        title: '酒店由酒店登记，非酒店 24 小时内登记',
        body: '国家移民管理局说明：外国人在中国住酒店，由酒店登记；住酒店以外的地址，由本人或接待人在 24 小时内办理住宿登记。',
        items: ['非酒店地址包括朋友家、亲属家、私人租赁住房、部分服务式公寓等。', '未按规定登记，可能被警告或罚款。', '第一次办理最好让接待人协助，因为对方更熟悉住址信息。']
      },
      {
        label: '线上试点',
        title: '2026年3月20日起，NIA 线上住宿登记开始试点',
        body: '国务院和国家移民管理局页面说明，非酒店住宿可通过指定线上渠道办理，先在部分省级地区试点，再逐步扩大。',
        items: ['试点地区包括河北、辽宁、浙江、湖北、广西、重庆、四川。', '渠道包括国家移民管理局政务服务平台、NIA 12367 App、微信小程序、支付宝小程序。', '线上办不了时，去当地出入境窗口或派出所现场办理。']
      },
      {
        label: '北京',
        title: '北京提供线上和线下办理方式',
        body: '北京市政府页面说明，住酒店由酒店员工在入住时登记；住非酒店地址时，可走线上系统、微信公众号或当地派出所。',
        items: ['线上材料可能包括护照资料页照片、近期照片、房屋产权或租赁合同地址页。', '线下办理地点通常是居住地所属派出所。', '北京页面说明线上系统支持英文、法文、俄文、日文、韩文。']
      },
      {
        label: '上海',
        title: '上海系统说明，住酒店不需要另行申报',
        body: '上海公安出入境住宿登记系统提示：非酒店住宿需在 24 小时内登记，可通过微信或属地派出所办理。',
        items: ['该系统提示：住酒店的用户不需要自行申报。', '系统公告中提到，如有特殊需要可拨打 12367 服务热线。', '系统输入可能要求使用中文或英文。']
      }
    ],
    problemTitle: '入住卡住时怎么办',
    problemIntro: '前台现场优先解决问题，不要陷入争吵。下面按常见情况处理。',
    problems: [
      {title: '酒店说不能接待外国客人', body: ['先出示订单，礼貌询问能否请经理确认护照入住和住宿登记。', '立刻联系预订平台，要求协助换酒店或取消退款。', '如果时间很晚，先换到连锁酒店、国际品牌或明确有外国护照入住评价的酒店。', '政策咨询或投诉可使用官方提到的 12367 或当地热线渠道。']},
      {title: '订单姓名和护照姓名不一致', body: ['到达前让平台或酒店修改入住人姓名。', '如果用了昵称，展示账号和订单，说明护照上的真实姓名。', '多人入住时，每个人都要带护照原件。']},
      {title: '只有护照照片，没有原件', body: ['酒店入住应携带护照原件，照片或复印件不一定能办理入住。', '护照照片只能作为丢失时的备用资料。', '如果护照丢失，联系本国使领馆和当地公安机关。']},
      {title: '住朋友家或私人公寓', body: ['不要套用酒店逻辑，提前和接待人确认 24 小时内住宿登记。', '准备护照、地址证明、接待人信息和当地渠道要求的照片。', '线上不能办时，到当地派出所或出入境窗口办理。']},
      {title: '航班半夜到达', body: ['登机前把预计到店时间发给酒店。', '保存酒店电话，方便司机或前台沟通。', '第一晚尽量选择 24 小时前台的酒店。']}
    ],
    phraseTitle: '入住时可直接给前台看的中文',
    phraseIntro: '这不是替代翻译软件，只保留酒店入住最常用的几句。',
    phrases: [
      {label: '护照入住', chinese: '请问可以用护照办理入住吗？', pinyin: 'Qǐngwèn kěyǐ yòng hùzhào bànlǐ rùzhù ma?', meaning: 'Can I check in with my passport?'},
      {label: '出示订单', chinese: '我已经预订了房间，这是订单。', pinyin: 'Wǒ yǐjīng yùdìng le fángjiān, zhè shì dìngdān.', meaning: 'I have booked a room. This is the reservation.'},
      {label: '确认登记', chinese: '请帮我确认住宿登记是否已经完成。', pinyin: 'Qǐng bāng wǒ quèrèn zhùsù dēngjì shìfǒu yǐjīng wánchéng.', meaning: 'Please help me confirm whether accommodation registration is complete.'},
      {label: '确认地址', chinese: '这是酒店中文地址，请帮我确认。', pinyin: 'Zhè shì jiǔdiàn Zhōngwén dìzhǐ, qǐng bāng wǒ quèrèn.', meaning: 'This is the hotel address in Chinese. Please help me confirm it.'},
      {label: '非酒店住宿', chinese: '请问附近派出所或线上住宿登记怎么办理？', pinyin: 'Qǐngwèn fùjìn pàichūsuǒ huò xiànshàng zhùsù dēngjì zěnme bànlǐ?', meaning: 'How do I register accommodation at the police station or online?'}
    ],
    sourcesTitle: '官方来源',
    sourcesIntro: '页面内容根据以下官方或政府来源整理，并转换成旅行者可执行步骤。',
    sourceLabel: '打开来源',
    sources: [
      {
        publisher: '国家移民管理局',
        title: 'Regulations on Filing Accommodation Registration for Foreigners',
        url: 'https://en.nia.gov.cn/n147423/n147478/n147715/c158241/content.html',
        summary: '说明酒店登记、非酒店 24 小时登记和未登记责任。'
      },
      {
        publisher: '国务院 / 国家移民管理局',
        title: 'Policy Interpretation of Online Accommodation Registration Service',
        url: 'https://english.www.gov.cn/services/visitchina/202603/21/content_WS69ce124cc6d00ca5f9a0a368.html',
        summary: '说明非酒店线上住宿登记渠道，以及 2026年3月20日 起的试点范围。'
      },
      {
        publisher: '北京市政府',
        title: 'Accommodation Registration Guide for Foreigners in Beijing',
        url: 'https://english.beijing.gov.cn/livinginbeijing/applicationfordocuments/202107/t20210719_2439278.html',
        summary: '北京线上和线下住宿登记材料、渠道和常见问题。'
      },
      {
        publisher: '上海市公安局',
        title: 'Online registration system for overseas personnel temporary residence',
        url: 'https://gaj.sh.gov.cn/crj/24hr/',
        summary: '上海非酒店住宿登记提示、微信/派出所渠道和 12367 提示。'
      },
      {
        publisher: '商务部等 7 部门',
        title: '关于服务高水平对外开放便利境外人员住宿若干措施的通知',
        url: 'https://www.mofcom.gov.cn/zcfb/fwmy/art/2024/art_838b27c3ad49478e9a6db346ff0ebff1.html',
        summary: '要求优化境外人员住宿服务、整治违规限制住宿、畅通咨询投诉渠道。'
      }
    ]
  }
};
