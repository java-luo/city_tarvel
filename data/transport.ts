import type {Localized} from '@/lib/types';

export const transportCopy: Localized<{
  title: string;
  intro: string;
  warning: string;
  modules: {
    title: string;
    subtitle: string;
    points: string[];
    steps: string[];
  }[];
  stationTitle: string;
  stationSteps: {title: string; body: string}[];
  situationTitle: string;
  situationCards: {title: string; body: string; tip: string}[];
  phraseTitle: string;
  phrases: {label: string; chinese: string; pinyin: string}[];
  sourcesTitle: string;
  sources: {label: string; href: string}[];
}> = {
  en: {
    title: 'China Transport Guide for Foreign Visitors',
    intro: 'A practical route for using high-speed trains, metro, taxis and ride-hailing without getting stuck at the first gate.',
    warning: 'Transport rules and payment support differ by city and station. Keep your passport, hotel address in Chinese and backup payment ready.',
    modules: [
      {
        title: 'High-speed rail',
        subtitle: 'Best for city-to-city trips',
        points: ['Book on 12306, Trip.com or station ticket counters.', 'Foreign visitors can use valid passports on the 12306 English website and app.', 'Complete identity verification before you need to buy urgent tickets.'],
        steps: ['Create a 12306 account or prepare Trip.com as a fallback.', 'Enter passport name and number exactly as shown on the passport.', 'Arrive early for security, station navigation and possible manual passport gates.']
      },
      {
        title: 'Metro and bus',
        subtitle: 'Best for daily city travel',
        points: ['Many cities support Alipay or WeChat transport QR codes.', 'Shanghai supports several metro payment options, including Metro Daduhui and international card support in some flows.', 'Beijing has enabled overseas Visa and Mastercard cards at metro gates on many lines.'],
        steps: ['Open Alipay, tap Transport, choose the city and activate metro or bus code.', 'Scan the city transport QR code when entering and exiting gates.', 'If mobile payment fails, buy a single ticket or ask station staff.']
      },
      {
        title: 'Taxi',
        subtitle: 'Best when you have luggage or arrive late',
        points: ['Use official taxi queues at airports and railway stations.', 'Show the destination address in Chinese.', 'Keep cash or mobile payment ready in case card acceptance is limited.'],
        steps: ['Avoid drivers who approach you away from the official queue.', 'Show the Chinese hotel name and district before departure.', 'Ask for the meter or use ride-hailing for clearer pricing.']
      },
      {
        title: 'Ride-hailing',
        subtitle: 'Best for point-to-point city rides',
        points: ['Foreign travelers can book rides through Alipay, WeChat or DiDi Rider.', 'Enter pickup and destination carefully because large stations have multiple exits.', 'Messaging translation helps, but pickup points still need attention.'],
        steps: ['Use Alipay Transport or DiDi to enter pickup and destination.', 'Check plate number, car color and pickup gate before getting in.', 'Keep the app open until pickup is confirmed.']
      }
    ],
    stationTitle: 'Train Station Flow',
    stationSteps: [
      {title: 'Before booking', body: 'Use the same passport for booking, identity verification, station entry and boarding.'},
      {title: 'At the station', body: 'Expect security screening before the waiting hall. Large stations can take time to navigate.'},
      {title: 'Ticket gate', body: 'Some passport holders may need the staffed manual gate. Keep the original passport ready.'},
      {title: 'After arrival', body: 'Keep your passport accessible for exit gates or manual ticket checks.'}
    ],
    situationTitle: 'Choose by Situation',
    situationCards: [
      {title: 'Airport to hotel', body: 'Metro or airport rail is predictable; official taxi queues and ride-hailing are easier with luggage.', tip: 'Save hotel address in Chinese before landing.'},
      {title: 'Within the city', body: 'Metro is usually the most stable option. Ride-hailing is useful after late dinners or when transfers are awkward.', tip: 'Set up the city transport QR code once per city.'},
      {title: 'Between cities', body: 'High-speed rail is often easier than flying for routes like Beijing-Shanghai or Shanghai-Hangzhou.', tip: 'Book earlier around holidays and weekends.'}
    ],
    phraseTitle: 'Show These Phrases',
    phrases: [
      {label: 'Taxi destination', chinese: '请带我去这个地址。', pinyin: 'Qǐng dài wǒ qù zhège dìzhǐ.'},
      {label: 'Station help', chinese: '请问人工通道在哪里？', pinyin: 'Qǐngwèn réngōng tōngdào zài nǎlǐ?'},
      {label: 'Metro station', chinese: '我想去最近的地铁站。', pinyin: 'Wǒ xiǎng qù zuìjìn de dìtiězhàn.'}
    ],
    sourcesTitle: 'Sources checked',
    sources: [
      {label: '12306 China Railway English FAQ', href: 'https://www.12306.cn/en/faq.html'},
      {label: 'China Job daily life transportation guide', href: 'https://www.chinajob.com/city/detail.php?cata2=city_life&city_id=rBHsCpCp6OwT7pLmVp&id=f70AGkaSbRzCrkES0H'},
      {label: 'Shanghai official metro guide', href: 'https://english.shanghai.gov.cn/en-Transportation/20231214/c727f5e15eff4b8c9340651dd95f3f7c.html'}
    ]
  },
  ja: {
    title: '中国旅行の交通ガイド',
    intro: '高速鉄道、地下鉄、タクシー、配車を使うための実用ガイドです。最初の改札や駅で迷わない準備をまとめます。',
    warning: '交通ルールや支払い対応は都市・駅によって異なります。パスポート、中国語のホテル住所、予備の支払い手段を用意してください。',
    modules: [
      {
        title: '高速鉄道',
        subtitle: '都市間移動に便利',
        points: ['12306、Trip.com、駅窓口で予約できます。', '12306英語サイトとアプリでは、有効な外国パスポートを利用できます。', '急な予約前に本人確認を済ませておくと安心です。'],
        steps: ['12306アカウントを作るか、Trip.comを予備にする。', 'パスポートの氏名と番号を正確に入力。', '保安検査、駅構内移動、有人改札に備えて早めに到着。']
      },
      {
        title: '地下鉄・バス',
        subtitle: '市内移動の基本',
        points: ['多くの都市でAlipayやWeChatの交通QRコードが使えます。', '上海地下鉄はMetro Daduhuiなど複数の支払い方法に対応しています。', '北京では海外発行Visa/Mastercardを改札で使える路線があります。'],
        steps: ['AlipayのTransportを開き、都市を選んで地下鉄・バスコードを有効化。', '入場・出場時に交通QRコードをスキャン。', '失敗した場合は券売機や駅係員を利用。']
      },
      {
        title: 'タクシー',
        subtitle: '荷物が多い時や夜遅い時に便利',
        points: ['空港や駅では公式タクシー乗り場を使います。', '目的地の中国語住所を見せます。', 'カード対応が限られる場合に備え、現金やモバイル決済を準備します。'],
        steps: ['公式乗り場以外で声をかけてくる車は避ける。', '出発前にホテル名と区名を中国語で見せる。', 'メーター確認、または配車アプリで料金を明確にする。']
      },
      {
        title: '配車アプリ',
        subtitle: '目的地まで直接行きたい時に便利',
        points: ['外国人旅行者はAlipay、WeChat、DiDi Riderで配車できます。', '大型駅は出口が多いため、乗車地点を慎重に選びます。', 'メッセージ翻訳は便利ですが、乗車場所の確認が重要です。'],
        steps: ['Alipay TransportまたはDiDiで出発地と目的地を入力。', 'ナンバー、車種色、乗車ゲートを確認。', '乗車確定までアプリを開いたままにする。']
      }
    ],
    stationTitle: '鉄道駅の流れ',
    stationSteps: [
      {title: '予約前', body: '予約、本人確認、駅入場、乗車では同じパスポートを使います。'},
      {title: '駅到着', body: '待合エリア前に保安検査があります。大きな駅では移動時間を見込みます。'},
      {title: '改札', body: 'パスポート利用者は有人通路が必要な場合があります。原本をすぐ出せるようにします。'},
      {title: '到着後', body: '出場改札や確認に備えて、到着後もパスポートを出しやすくします。'}
    ],
    situationTitle: '場面別の選び方',
    situationCards: [
      {title: '空港からホテル', body: '地下鉄や空港鉄道は安定。荷物が多い時は公式タクシーや配車が便利です。', tip: '到着前にホテル住所を中国語で保存。'},
      {title: '市内移動', body: '地下鉄が最も安定しやすく、夜遅い時間や乗換が複雑な時は配車が便利です。', tip: '都市ごとに交通QRコードを設定。'},
      {title: '都市間移動', body: '北京-上海、上海-杭州などは飛行機より高速鉄道が楽な場合があります。', tip: '連休や週末は早めに予約。'}
    ],
    phraseTitle: '見せる中国語',
    phrases: [
      {label: 'タクシー目的地', chinese: '请带我去这个地址。', pinyin: 'Qǐng dài wǒ qù zhège dìzhǐ.'},
      {label: '有人通路', chinese: '请问人工通道在哪里？', pinyin: 'Qǐngwèn réngōng tōngdào zài nǎlǐ?'},
      {label: '地下鉄駅', chinese: '我想去最近的地铁站。', pinyin: 'Wǒ xiǎng qù zuìjìn de dìtiězhàn.'}
    ],
    sourcesTitle: '確認した資料',
    sources: [
      {label: '12306 China Railway English FAQ', href: 'https://www.12306.cn/en/faq.html'},
      {label: 'China Job daily life transportation guide', href: 'https://www.chinajob.com/city/detail.php?cata2=city_life&city_id=rBHsCpCp6OwT7pLmVp&id=f70AGkaSbRzCrkES0H'},
      {label: '上海市公式地下鉄ガイド', href: 'https://english.shanghai.gov.cn/en-Transportation/20231214/c727f5e15eff4b8c9340651dd95f3f7c.html'}
    ]
  },
  zh: {
    title: '来华交通出行指南',
    intro: '把高铁、地铁、出租车和网约车一次讲清楚，重点解决外国游客第一次来中国最容易卡住的购票、进站、扫码和叫车问题。',
    warning: '不同城市和车站的支付支持、闸机规则会有差异。请随身带护照，提前保存中文酒店地址，并准备备用支付方式。',
    modules: [
      {
        title: '高铁',
        subtitle: '适合城市之间移动',
        points: ['可通过 12306、Trip.com 或车站窗口购票。', '12306 英文网站和 App 支持外国游客使用有效外国护照。', '建议提前完成身份核验，不要等到临出发才注册。'],
        steps: ['注册 12306，或把 Trip.com 作为备用购票方案。', '姓名和护照号必须与护照完全一致。', '提前到站，预留安检、找候车室和人工通道时间。']
      },
      {
        title: '地铁和公交',
        subtitle: '适合城市内日常移动',
        points: ['许多城市支持支付宝或微信乘车码。', '上海地铁支持 Metro Daduhui、支付宝/微信等多种方式，部分流程支持国际卡。', '北京多条城市轨道线路支持境外 Visa/Mastercard 直接刷卡过闸。'],
        steps: ['打开支付宝，进入 Transport/出行，选择所在城市并开通地铁或公交码。', '进站和出站都扫城市乘车码。', '手机支付失败时，改买单程票或找站内工作人员。']
      },
      {
        title: '出租车',
        subtitle: '适合带行李、深夜或短距离兜底',
        points: ['机场和高铁站优先使用官方出租车排队区。', '把目的地中文地址给司机看。', '部分出租车不一定支持国际卡，准备现金或移动支付备用。'],
        steps: ['不要乘坐在官方排队区外主动揽客的车辆。', '出发前展示中文酒店名、区名和详细地址。', '确认打表，或使用网约车获得更清晰的价格。']
      },
      {
        title: '网约车',
        subtitle: '适合点到点出行',
        points: ['外国游客可通过支付宝、微信或 DiDi Rider 叫车。', '大型机场和高铁站出口很多，定位上车点时要仔细。', 'App 内消息可翻译，但仍要核对车牌和上车点。'],
        steps: ['在支付宝出行或滴滴里输入上车点和目的地。', '上车前核对车牌、车辆颜色和上车口。', '司机到达前保持 App 在线，方便联系。']
      }
    ],
    stationTitle: '高铁站乘车流程',
    stationSteps: [
      {title: '购票前', body: '购票、身份核验、进站和乘车请使用同一本护照。'},
      {title: '到达车站', body: '进入候车区前通常要安检，大型车站动线较长，请预留时间。'},
      {title: '检票进站', body: '护照旅客有时需要走人工通道，请把护照原件拿在手边。'},
      {title: '到达后', body: '出站闸机或人工核验仍可能需要护照，不要把护照收进行李深处。'}
    ],
    situationTitle: '按场景选择交通方式',
    situationCards: [
      {title: '机场到酒店', body: '地铁或机场线时间稳定；行李多时，官方出租车和网约车更省力。', tip: '落地前保存中文酒店地址。'},
      {title: '市区内移动', body: '地铁通常最稳定；深夜、换乘复杂或多人同行时，网约车更方便。', tip: '每到一个城市先开通当地乘车码。'},
      {title: '城市之间', body: '北京-上海、上海-杭州等路线，高铁常常比飞机更省心。', tip: '节假日和周末尽早订票。'}
    ],
    phraseTitle: '可以直接给工作人员看的中文',
    phrases: [
      {label: '出租车目的地', chinese: '请带我去这个地址。', pinyin: 'Qǐng dài wǒ qù zhège dìzhǐ.'},
      {label: '人工通道', chinese: '请问人工通道在哪里？', pinyin: 'Qǐngwèn réngōng tōngdào zài nǎlǐ?'},
      {label: '最近地铁站', chinese: '我想去最近的地铁站。', pinyin: 'Wǒ xiǎng qù zuìjìn de dìtiězhàn.'}
    ],
    sourcesTitle: '资料来源',
    sources: [
      {label: '12306 中国铁路英文 FAQ', href: 'https://www.12306.cn/en/faq.html'},
      {label: 'China Job 外国人在华交通服务指南', href: 'https://www.chinajob.com/city/detail.php?cata2=city_life&city_id=rBHsCpCp6OwT7pLmVp&id=f70AGkaSbRzCrkES0H'},
      {label: '上海市官方地铁乘坐指南', href: 'https://english.shanghai.gov.cn/en-Transportation/20231214/c727f5e15eff4b8c9340651dd95f3f7c.html'}
    ]
  }
};
