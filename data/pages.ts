import type {Localized} from '@/lib/types';

export const pageCopy: Localized<{
  payment: {title: string; intro: string; sections: {title: string; body: string[]}[]; phrase: {foreign: string; chinese: string}};
  apps: {
    title: string;
    intro: string;
    warning: string;
    sections: string[];
    appModuleTitle: string;
    networkGuide: {
      title: string;
      intro: string;
      options: {title: string; bestFor: string; body: string; steps: string[]}[];
      checklistTitle: string;
      checklist: string[];
      noteTitle: string;
      note: string;
      sourcesTitle: string;
      sources: {label: string; href: string}[];
    };
    appGroups: {
      category: string;
      note: string;
      apps: {name: string; description: string; iconSrc: string; icon?: string; color?: string}[];
    }[];
  };
  visa: {title: string; intro: string; warning: string; sections: {title: string; body: string}[]};
  checklist: {title: string; intro: string; download: string; items: string[]};
}> = {
  en: {
    payment: {
      title: 'How to Pay in China as a Foreigner',
      intro: 'For most daily spending, prepare mobile payment first and keep a backup for edge cases.',
      sections: [
        {title: 'How payment works in China', body: ['Mobile payment is common for restaurants, metro tickets, shops and attractions.', 'Primary: Alipay. Backup: WeChat Pay. Fallback: cash plus an international card.']},
        {title: 'Set up Alipay', body: ['Install it before departure, verify your identity, add an international card and test small steps in advance.']},
        {title: 'Set up WeChat Pay', body: ['Useful as a backup because some people and smaller vendors prefer WeChat Pay.']},
        {title: 'Prepare backup payment', body: ['Carry a small amount of RMB cash and one international card for hotels or emergencies.']},
        {title: 'What to do if payment fails', body: ['Try another card.', 'Try WeChat Pay.', 'Ask if cash is accepted.', 'Use hotel front desk or staff help.']}
      ],
      phrase: {foreign: 'My payment is not working. Can I pay with cash?', chinese: '我的支付失败了，可以用现金吗？'}
    },
    apps: {
      title: 'Best Apps and Internet Setup for China',
      intro: 'Prepare internet access and essential apps before you fly, especially if this is your first visit.',
      warning: 'Some overseas apps and websites may not work reliably on mainland China networks. Prepare your internet plan before arrival.',
      sections: ['Before you fly', 'Internet options', 'Must-have apps', 'Navigation', 'Translation', 'Ride-hailing', 'Train booking', 'Food and restaurants'],
      appModuleTitle: 'Essential Apps',
      networkGuide: {
        title: 'How to Get Online in China',
        intro: 'Pick your internet setup before landing. The best choice depends on your phone, trip length, need for a Chinese number, and whether you rely on overseas apps.',
        options: [
          {
            title: 'Travel eSIM',
            bestFor: 'Fast setup before arrival',
            body: 'Buy and install before departure, then turn on data roaming after landing. It is usually data-only, so it may not give you a mainland China phone number.',
            steps: ['Check that your phone supports eSIM and is unlocked.', 'Install the eSIM while you still have reliable internet.', 'After landing, enable the eSIM line and data roaming.']
          },
          {
            title: 'Home Carrier Roaming',
            bestFor: 'Shortest trips and low effort',
            body: 'Keep your original number and avoid local registration. It is convenient, but heavy data use can be expensive.',
            steps: ['Confirm China roaming price and data cap with your carrier.', 'Turn on roaming only when needed.', 'Keep maps and translation packs downloaded as backup.']
          },
          {
            title: 'Local SIM Card',
            bestFor: 'Longer stays and local phone number',
            body: 'Buy at airport counters or official China Mobile, China Unicom or China Telecom stores. Foreign visitors normally need a passport for real-name registration.',
            steps: ['Bring your passport and an unlocked phone.', 'Choose a tourist or prepaid plan with enough data.', 'Ask staff to activate the SIM and test mobile data before leaving.']
          },
          {
            title: 'Pocket Wi-Fi',
            bestFor: 'Families or several devices',
            body: 'Rent before travel or at some airports. It can share one connection across devices, but you must keep the router charged and return it.',
            steps: ['Book pickup and return details before departure.', 'Carry a power bank for full-day sightseeing.', 'Keep one phone with backup data in case the router battery dies.']
          }
        ],
        checklistTitle: 'Before You Fly',
        checklist: ['Unlock your phone and confirm it supports China network bands.', 'Save your hotel address in Chinese for SIM registration or delivery forms.', 'Install VPN or overseas-service alternatives before entering mainland China if you need them.', 'Download offline maps, translation packs and booking screenshots.'],
        noteTitle: 'Important network note',
        note: 'A mainland China SIM usually gives the best local coverage and a local number, but some overseas websites and apps may not work reliably on mainland networks. Roaming or many travel eSIMs may behave differently, so prepare the apps you depend on before arrival.',
        sourcesTitle: 'Sources checked',
        sources: [
          {label: 'Beijing official SIM card guide', href: 'https://english.beijing.gov.cn/quickguideservices/purchasingsimcards/'},
          {label: 'MOFCOM daily life services for foreign nationals', href: 'https://fdi.mofcom.gov.cn/EN/come-newzonghe.html?Liindex=1&comeID=7&name=Foreign+Nationals+in+China&parentId=132'},
          {label: 'China Unicom CUniq eSIM information', href: 'https://us.cuniq.com/esim'}
        ]
      },
      appGroups: [
        {category: 'Payment', note: 'Set up cards before departure.', apps: [
          {name: 'Alipay', description: 'Main payment app for shops, transport, attractions and mini programs.', iconSrc: '/images/apps/alipay.jpg', icon: '支', color: '#1677ff'},
          {name: 'WeChat', description: 'Messaging, WeChat Pay backup, QR codes and local service mini programs.', iconSrc: '/images/apps/wechat.jpg', icon: '微', color: '#1aad19'}
        ]},
        {category: 'Maps', note: 'Save hotel and attraction addresses in Chinese.', apps: [
          {name: 'Apple Maps', description: 'Easy option on iPhone for route checks and saved places.', iconSrc: '/images/apps/apple-maps.jpg', icon: '', color: '#1f1f1f'},
          {name: 'Amap', description: 'China-focused maps with walking, metro, bus, taxi and traffic details.', iconSrc: '/images/apps/amap.jpg', icon: '高', color: '#0d8bff'}
        ]},
        {category: 'Translation', note: 'Download offline language packs before you fly.', apps: [
          {name: 'Google Translate', description: 'Useful offline text translation when packs are downloaded in advance.', iconSrc: '/images/apps/google-translate.jpg', icon: 'G', color: '#4285f4'},
          {name: 'Apple Translate', description: 'Built-in iPhone translation for quick phrases and conversations.', iconSrc: '/images/apps/apple-translate.jpg', icon: '译', color: '#0a84ff'}
        ]},
        {category: 'Ride-hailing', note: 'Prepare this before airport arrival.', apps: [
          {name: 'DiDi', description: 'Common ride-hailing app for airport transfers and city rides.', iconSrc: '/images/apps/didi.jpg', icon: 'D', color: '#ff7a00'},
          {name: 'Alipay Ride-hailing', description: 'Access taxi and ride options inside Alipay when a separate app is inconvenient.', iconSrc: '/images/apps/alipay.jpg', icon: '车', color: '#1677ff'}
        ]},
        {category: 'Train', note: 'Passport details are usually needed.', apps: [
          {name: 'Trip.com', description: 'Foreigner-friendly train, flight and hotel booking with English support.', iconSrc: '/images/apps/trip-com.jpg', icon: 'T', color: '#3264ff'},
          {name: '12306', description: 'Official China railway app for tickets, schedules and order management.', iconSrc: '/images/apps/railway-12306.jpg', icon: '铁', color: '#d62828'}
        ]},
        {category: 'Hotel', note: 'Confirm passport check-in before booking.', apps: [
          {name: 'Trip.com', description: 'Good for China hotel filters, train connections and English support.', iconSrc: '/images/apps/trip-com.jpg', icon: 'T', color: '#3264ff'},
          {name: 'Booking', description: 'Useful backup for international-style hotel search and reservation records.', iconSrc: '/images/apps/booking.jpg', icon: 'B', color: '#003b95'}
        ]},
        {category: 'Food', note: 'Useful for reviews, opening hours and nearby choices.', apps: [
          {name: 'Dianping', description: 'Local restaurant reviews, photos, hours and rankings in Chinese.', iconSrc: '/images/apps/dianping.jpg', icon: '点', color: '#ffbe00'},
          {name: 'Meituan', description: 'Food discovery, takeout and local services in many Chinese cities.', iconSrc: '/images/apps/meituan.jpg', icon: '美', color: '#ffd100'}
        ]}
      ]
    },
    visa: {
      title: 'China Visa and Entry Guide',
      intro: 'Use this page as a preparation checklist, not as legal advice or a live visa decision system.',
      warning: 'Visa policies change. Always verify with official sources before travel.',
      sections: [
        {title: 'Do I need a visa?', body: 'Requirements depend on passport, route, stay length and purpose of travel.'},
        {title: 'Visa-free entry', body: 'Some travelers may qualify for visa-free entry. Check current official rules before buying tickets.'},
        {title: 'Transit visa-free policy', body: 'Transit policies often have route, port and time limits. Keep onward tickets ready.'},
        {title: 'Passport validity', body: 'Many trips require a passport valid beyond the travel period. Confirm requirements early.'},
        {title: 'Arrival documents', body: 'Keep hotel bookings, return or onward tickets, insurance and local contact details accessible.'},
        {title: 'Common mistakes', body: 'Do not rely on old screenshots, social posts or unofficial summaries for final entry decisions.'}
      ]
    },
    checklist: {
      title: 'Downloadable China Travel Checklist',
      intro: 'A web checklist for your final pass before departure. PDF export can be connected later.',
      download: 'Download PDF',
      items: ['Visa and passport checked with official sources', 'Alipay set up and card added', 'WeChat Pay prepared as backup', 'China-ready internet plan prepared', 'Essential apps installed', 'Hotel accepts passport check-in', 'Train and transport plan ready', 'Emergency contacts saved', 'Food allergy phrases saved', 'Copies of documents stored safely']
    }
  },
  ja: {
    payment: {
      title: '中国での支払い方',
      intro: '日常の支払いはモバイル決済が中心です。予備手段も準備しておきましょう。',
      sections: [
        {title: '中国の決済事情', body: ['飲食店、地下鉄、店舗、観光施設ではモバイル決済が広く使われます。', '基本はAlipay、予備はWeChat Pay、最後は現金と国際カードです。']},
        {title: 'Alipayを設定', body: ['出発前にインストールし、本人確認、国際カード追加、基本操作の確認を済ませます。']},
        {title: 'WeChat Payを設定', body: ['一部の小規模店舗や個人相手ではWeChat Payが役立つ場合があります。']},
        {title: '予備の支払い手段', body: ['少額の人民元現金と国際カードをホテルや緊急時用に持っておきます。']},
        {title: '決済に失敗したら', body: ['別のカードを試す。', 'WeChat Payを試す。', '現金で払えるか聞く。', 'ホテルやスタッフに相談する。']}
      ],
      phrase: {foreign: '決済がうまくいきません。現金で支払えますか？', chinese: '我的支付失败了，可以用现金吗？'}
    },
    apps: {
      title: '中国旅行のアプリと通信準備',
      intro: '初めての中国旅行では、通信手段と必須アプリを出発前に準備しておくと安心です。',
      warning: '中国本土のネットワークでは、一部の海外アプリやウェブサイトが安定して利用できない場合があります。渡航前に通信手段を準備してください。',
      sections: ['出発前', '通信手段', '必須アプリ', '地図', '翻訳', '配車', '鉄道予約', '食事とレストラン'],
      appModuleTitle: '必須アプリ',
      networkGuide: {
        title: '中国でネットにつなぐ方法',
        intro: '到着前に通信手段を決めておきましょう。端末、滞在日数、中国の電話番号が必要か、海外アプリを使うかで選び方が変わります。',
        options: [
          {
            title: '旅行用eSIM',
            bestFor: '到着後すぐ使いたい',
            body: '出発前に購入・設定し、到着後にデータローミングをオンにします。多くはデータ専用で、中国本土の電話番号は付きません。',
            steps: ['端末がeSIM対応でSIMフリーか確認。', '安定した通信環境で出発前にeSIMをインストール。', '到着後、eSIM回線とデータローミングをオン。']
          },
          {
            title: '日本の携帯会社のローミング',
            bestFor: '短期滞在・設定を増やしたくない',
            body: '普段の番号をそのまま使え、現地SIMの登録も不要です。ただし大容量利用では料金が高くなりやすいです。',
            steps: ['中国でのローミング料金と容量制限を確認。', '必要な時だけローミングをオン。', '地図と翻訳データをオフライン保存。']
          },
          {
            title: '中国本土のSIMカード',
            bestFor: '長めの滞在・中国の電話番号が必要',
            body: '空港カウンター、または中国移動・中国聯通・中国電信などの公式店舗で購入します。外国人は通常、実名登録にパスポートが必要です。',
            steps: ['パスポートとSIMフリー端末を持参。', '滞在日数に合う旅行者向けまたはプリペイドプランを選択。', '店舗で開通と通信テストまで確認。']
          },
          {
            title: 'ポケットWi-Fi',
            bestFor: '家族旅行・複数端末',
            body: '事前予約または一部空港でレンタルできます。複数端末で共有できますが、充電と返却が必要です。',
            steps: ['受取・返却場所を事前確認。', '終日観光用にモバイルバッテリーを用意。', 'ルーター電池切れに備え、1台は予備通信を確保。']
          }
        ],
        checklistTitle: '出発前チェック',
        checklist: ['スマホがSIMフリーで中国の通信バンドに対応しているか確認。', 'ホテル住所を中国語で保存。SIM登録や配送フォームで役立ちます。', '必要ならVPNや海外サービスの代替アプリを中国入国前に準備。', 'オフライン地図、翻訳データ、予約画面を保存。'],
        noteTitle: '通信の注意点',
        note: '中国本土SIMは現地カバー範囲と中国電話番号の面で便利ですが、一部の海外サイトやアプリは中国本土ネットワークで安定しない場合があります。ローミングや旅行用eSIMでは挙動が異なることがあるため、必要なアプリは事前準備がおすすめです。',
        sourcesTitle: '確認した資料',
        sources: [
          {label: '北京市公式SIMカード購入ガイド', href: 'https://english.beijing.gov.cn/quickguideservices/purchasingsimcards/'},
          {label: '中国商務部 外国人の日常生活サービス', href: 'https://fdi.mofcom.gov.cn/EN/come-newzonghe.html?Liindex=1&comeID=7&name=Foreign+Nationals+in+China&parentId=132'},
          {label: 'China Unicom CUniq eSIM information', href: 'https://us.cuniq.com/esim'}
        ]
      },
      appGroups: [
        {category: '決済', note: '出発前にカードを追加。', apps: [
          {name: 'Alipay', description: '店舗、交通、観光施設、ミニプログラムで使いやすい主要決済アプリ。', iconSrc: '/images/apps/alipay.jpg', icon: '支', color: '#1677ff'},
          {name: 'WeChat', description: '連絡、WeChat Payの予備、QRコード、現地サービスに便利。', iconSrc: '/images/apps/wechat.jpg', icon: '微', color: '#1aad19'}
        ]},
        {category: '地図', note: 'ホテルや目的地の中国語住所を保存。', apps: [
          {name: 'Apple Maps', description: 'iPhoneで経路確認や保存場所を使う場合の手軽な選択肢。', iconSrc: '/images/apps/apple-maps.jpg', icon: '', color: '#1f1f1f'},
          {name: 'Amap', description: '徒歩、地下鉄、バス、タクシー、交通状況に強い中国向け地図。', iconSrc: '/images/apps/amap.jpg', icon: '高', color: '#0d8bff'}
        ]},
        {category: '翻訳', note: '渡航前にオフラインデータを保存。', apps: [
          {name: 'Google Translate', description: '事前に言語データを入れておくと、オフライン翻訳に便利。', iconSrc: '/images/apps/google-translate.jpg', icon: 'G', color: '#4285f4'},
          {name: 'Apple Translate', description: '短いフレーズや会話をすばやく確認できるiPhone標準アプリ。', iconSrc: '/images/apps/apple-translate.jpg', icon: '訳', color: '#0a84ff'}
        ]},
        {category: '配車', note: '空港到着前に準備。', apps: [
          {name: 'DiDi', description: '空港送迎や市内移動でよく使われる配車アプリ。', iconSrc: '/images/apps/didi.jpg', icon: 'D', color: '#ff7a00'},
          {name: 'Alipay Ride-hailing', description: '別アプリを増やしたくない時にAlipay内から配車できます。', iconSrc: '/images/apps/alipay.jpg', icon: '車', color: '#1677ff'}
        ]},
        {category: '鉄道', note: 'パスポート情報が必要になることがあります。', apps: [
          {name: 'Trip.com', description: '英語対応で鉄道、航空券、ホテル予約に使いやすいアプリ。', iconSrc: '/images/apps/trip-com.jpg', icon: 'T', color: '#3264ff'},
          {name: '12306', description: '中国鉄道の公式アプリ。チケット、時刻、注文管理に使います。', iconSrc: '/images/apps/railway-12306.jpg', icon: '鉄', color: '#d62828'}
        ]},
        {category: 'ホテル', note: 'パスポートで宿泊できるか確認。', apps: [
          {name: 'Trip.com', description: '中国ホテル検索や鉄道との組み合わせに便利。英語サポートもあります。', iconSrc: '/images/apps/trip-com.jpg', icon: 'T', color: '#3264ff'},
          {name: 'Booking', description: '国際的なホテル検索や予約記録の予備として使えます。', iconSrc: '/images/apps/booking.jpg', icon: 'B', color: '#003b95'}
        ]},
        {category: '食事', note: '口コミ、営業時間、近くの店探しに便利。', apps: [
          {name: 'Dianping', description: '中国語のレストラン口コミ、写真、営業時間、ランキングを確認。', iconSrc: '/images/apps/dianping.jpg', icon: '点', color: '#ffbe00'},
          {name: 'Meituan', description: '飲食店探し、デリバリー、現地サービスに使われます。', iconSrc: '/images/apps/meituan.jpg', icon: '美', color: '#ffd100'}
        ]}
      ]
    },
    visa: {
      title: '中国ビザ・入境ガイド',
      intro: 'このページは準備用チェックリストです。法的助言やリアルタイム判定ではありません。',
      warning: 'ビザ政策は変更される可能性があります。渡航前に必ず公式情報を確認してください。',
      sections: [
        {title: 'ビザは必要？', body: 'パスポート、経路、滞在期間、渡航目的によって異なります。'},
        {title: 'ビザ免除', body: '一部の旅行者はビザ免除の対象になる場合があります。購入前に最新の公式情報を確認してください。'},
        {title: 'トランジット免除', body: '経路、入出境地、時間制限があるため、乗継券をすぐ出せるようにします。'},
        {title: 'パスポート有効期限', body: '旅行期間より長い有効期限が必要な場合があります。早めに確認しましょう。'},
        {title: '到着時の書類', body: 'ホテル予約、復路・ onward チケット、保険、現地連絡先を用意します。'},
        {title: 'よくあるミス', body: '古いスクリーンショットや非公式まとめだけで判断しないでください。'}
      ]
    },
    checklist: {
      title: '中国旅行チェックリスト',
      intro: '出発前の最終確認用チェックリストです。PDF出力は後で接続できます。',
      download: 'PDFをダウンロード',
      items: ['ビザとパスポートを公式情報で確認', 'Alipay設定とカード追加', 'WeChat Payを予備として準備', '中国で使える通信手段を準備', '必須アプリをインストール', 'ホテルがパスポート宿泊に対応', '鉄道と交通手段を確認', '緊急連絡先を保存', '食物アレルギー表現を保存', '書類コピーを安全に保存']
    }
  },
  zh: {
    payment: {
      title: '外国游客如何在中国支付',
      intro: '日常消费优先准备移动支付，同时保留备用支付方式。',
      sections: [
        {title: '中国支付环境', body: ['餐厅、地铁、商店和景区普遍使用移动支付。', '主用支付宝，备用微信支付，兜底现金和国际卡。']},
        {title: '设置支付宝', body: ['出发前安装、完成身份验证、绑定国际卡，并提前熟悉基础操作。']},
        {title: '设置微信支付', body: ['部分小商户或个人场景可能更适合微信支付，可作为备用。']},
        {title: '准备备用支付', body: ['携带少量人民币现金和一张国际卡，用于酒店或紧急情况。']},
        {title: '支付失败怎么办', body: ['尝试另一张卡。', '尝试微信支付。', '询问是否接受现金。', '请酒店前台或工作人员协助。']}
      ],
      phrase: {foreign: '我的支付失败了，可以用现金吗？', chinese: '我的支付失败了，可以用现金吗？'}
    },
    apps: {
      title: '来华旅行 App 与网络准备',
      intro: '第一次来中国，建议在出发前准备网络方案并安装必要 App。',
      warning: '部分海外常用 App 在中国大陆网络环境下可能无法直接稳定访问，建议提前准备合适的网络方案。',
      sections: ['出发前', '网络方案', '必备 App', '导航', '翻译', '打车', '高铁订票', '餐饮'],
      appModuleTitle: '来华必备 App',
      networkGuide: {
        title: '外国人来华如何搞定网络',
        intro: '先决定联网方案，再装 App。选择时重点看四件事：手机是否支持、停留多久、是否需要中国手机号、是否依赖海外 App。',
        options: [
          {
            title: '旅行 eSIM',
            bestFor: '适合想落地马上联网',
            body: '出发前购买并安装，到中国后打开这条 eSIM 和数据漫游即可。多数旅行 eSIM 是纯流量，不一定提供中国大陆手机号。',
            steps: ['确认手机支持 eSIM，且不是运营商锁机。', '出发前在稳定网络下安装 eSIM。', '落地后开启 eSIM 线路和数据漫游，先测试地图和翻译。']
          },
          {
            title: '原手机号国际漫游',
            bestFor: '适合短途、怕麻烦',
            body: '保留原手机号，不用在中国办理实名 SIM。优点是省事，缺点是费用和流量限制要提前确认。',
            steps: ['出发前向本国运营商确认中国漫游价格、限速和流量上限。', '只在需要时开启漫游，避免后台耗流量。', '提前下载离线地图、翻译包和酒店订单。']
          },
          {
            title: '中国本地 SIM 卡',
            bestFor: '适合停留较久、需要中国手机号',
            body: '可在机场柜台或中国移动、中国联通、中国电信等官方营业厅办理。外国游客通常需要护照进行实名登记。',
            steps: ['带好护照和无锁手机。', '选择旅行者套餐或预付费套餐，确认流量够用。', '让工作人员现场激活，并在离开柜台前测试移动数据。']
          },
          {
            title: '随身 Wi-Fi',
            bestFor: '适合多人同行、多设备',
            body: '可以提前预订或在部分机场租用，一台设备多人共享。但需要充电、携带和归还。',
            steps: ['提前确认领取和归还地点。', '全天出行准备充电宝。', '至少保留一台手机有备用网络，避免 Wi-Fi 设备没电后失联。']
          }
        ],
        checklistTitle: '出发前先做这几件事',
        checklist: ['确认手机已解锁，并支持中国大陆常用 4G/5G 网络频段。', '保存酒店中文地址，办理 SIM 或填写配送信息时可能会用到。', '如果需要使用部分海外 App，入境前先安装 VPN 或准备替代 App。', '下载离线地图、离线翻译包，并保存机票酒店订单截图。'],
        noteTitle: '重要提醒',
        note: '中国本地 SIM 通常覆盖好、资费低、还能获得中国手机号，但部分海外网站和 App 在中国大陆网络环境下可能无法稳定访问。国际漫游或部分旅行 eSIM 的网络表现可能不同，所以关键 App 一定要出发前准备好。',
        sourcesTitle: '资料来源',
        sources: [
          {label: '北京市官方 SIM 卡购买指南', href: 'https://english.beijing.gov.cn/quickguideservices/purchasingsimcards/'},
          {label: '中国商务部：外国人在华日常生活服务', href: 'https://fdi.mofcom.gov.cn/EN/come-newzonghe.html?Liindex=1&comeID=7&name=Foreign+Nationals+in+China&parentId=132'},
          {label: '中国联通 CUniq eSIM 信息', href: 'https://us.cuniq.com/esim'}
        ]
      },
      appGroups: [
        {category: '支付', note: '出发前绑定卡片。', apps: [
          {name: 'Alipay 支付宝', description: '日常消费主力 App，可用于商店、交通、景区和小程序服务。', iconSrc: '/images/apps/alipay.jpg', icon: '支', color: '#1677ff'},
          {name: 'WeChat 微信', description: '聊天联系、微信支付备用、扫码和本地服务小程序都很常用。', iconSrc: '/images/apps/wechat.jpg', icon: '微', color: '#1aad19'}
        ]},
        {category: '地图', note: '提前保存酒店和景点中文地址。', apps: [
          {name: 'Apple Maps 苹果地图', description: 'iPhone 用户可用于路线查询、收藏地点和基础导航。', iconSrc: '/images/apps/apple-maps.jpg', icon: '', color: '#1f1f1f'},
          {name: 'Amap 高德地图', description: '中国大陆常用地图，适合步行、地铁、公交、打车和实时路况。', iconSrc: '/images/apps/amap.jpg', icon: '高', color: '#0d8bff'}
        ]},
        {category: '翻译', note: '出发前下载离线语言包。', apps: [
          {name: 'Google Translate', description: '提前下载离线包后，可用于文字翻译和基础沟通。', iconSrc: '/images/apps/google-translate.jpg', icon: 'G', color: '#4285f4'},
          {name: 'Apple Translate 翻译', description: 'iPhone 自带翻译工具，适合快速翻译短句和对话。', iconSrc: '/images/apps/apple-translate.jpg', icon: '译', color: '#0a84ff'}
        ]},
        {category: '打车', note: '机场到达前先准备好。', apps: [
          {name: 'DiDi 滴滴', description: '常用打车 App，适合机场接送、市内短途和跨区出行。', iconSrc: '/images/apps/didi.jpg', icon: 'D', color: '#ff7a00'},
          {name: '支付宝打车', description: '可以在支付宝内叫车，适合不想额外安装太多 App 的旅客。', iconSrc: '/images/apps/alipay.jpg', icon: '车', color: '#1677ff'}
        ]},
        {category: '高铁', note: '通常需要护照信息。', apps: [
          {name: 'Trip.com 携程', description: '对外国游客更友好，可预订高铁、机票和酒店，支持多语言。', iconSrc: '/images/apps/ctrip.jpg', icon: 'T', color: '#3264ff'},
          {name: '12306', description: '中国铁路官方 App，可查票、购票、改签并管理订单。', iconSrc: '/images/apps/railway-12306.jpg', icon: '铁', color: '#d62828'}
        ]},
        {category: '酒店', note: '确认可用护照入住。', apps: [
          {name: 'Trip.com 携程', description: '适合查找中国酒店、核对入住政策，并和交通预订一起管理。', iconSrc: '/images/apps/ctrip.jpg', icon: 'T', color: '#3264ff'},
          {name: 'Booking', description: '可作为国际酒店搜索和订单记录的备用选择。', iconSrc: '/images/apps/booking.jpg', icon: 'B', color: '#003b95'}
        ]},
        {category: '餐饮', note: '适合查看评价、营业时间和附近选择。', apps: [
          {name: 'Dianping 大众点评', description: '查看餐厅评分、照片、营业时间和本地热门榜单。', iconSrc: '/images/apps/dianping.jpg', icon: '点', color: '#ffbe00'},
          {name: 'Meituan 美团', description: '可用于找餐厅、外卖和本地生活服务，覆盖城市较多。', iconSrc: '/images/apps/meituan.jpg', icon: '美', color: '#ffd100'}
        ]}
      ]
    },
    visa: {
      title: '中国签证与入境指南',
      intro: '本页作为准备清单，不提供实时签证判断或法律意见。',
      warning: '签证政策可能变化，出发前请务必以官方信息为准。',
      sections: [
        {title: '我是否需要签证？', body: '取决于护照、路线、停留时间和旅行目的。'},
        {title: '免签入境', body: '部分旅客可能适用免签政策，购票前请核对最新官方信息。'},
        {title: '过境免签政策', body: '过境政策通常有路线、口岸和时间限制，请准备好后续行程票据。'},
        {title: '护照有效期', body: '许多行程要求护照在旅行期外仍有足够有效期，请尽早确认。'},
        {title: '抵达材料', body: '准备酒店预订、返程或后续机票、保险和中国联系人信息。'},
        {title: '常见错误', body: '不要只依赖旧截图、社交媒体帖子或非官方总结做最终判断。'}
      ]
    },
    checklist: {
      title: '来华旅行准备清单',
      intro: '用于出发前最后检查。PDF 下载按钮 MVP 阶段先作为占位。',
      download: '下载 PDF',
      items: ['通过官方来源确认签证和护照', '支付宝已设置并绑定卡片', '微信支付作为备用方案', '准备适合中国大陆使用的网络方案', '安装必要 App', '酒店确认可用护照入住', '高铁和市内交通方案已确认', '保存紧急联系方式', '保存食物过敏表达', '安全保存证件副本']
    }
  }
};
