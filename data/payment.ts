import type {Localized} from '@/lib/types';

export const paymentGuideCopy: Localized<{
  title: string;
  intro: string;
  checked: string;
  screenshotNote: string;
  videoTitle: string;
  videoDescription: string;
  videoCredit: string;
  priorityTitle: string;
  priorities: {label: string; title: string; body: string}[];
  beforeTitle: string;
  beforeItems: string[];
  alipayTitle: string;
  alipayIntro: string;
  offlineTitle: string;
  offlineIntro: string;
  stuckTitle: string;
  stuckIntro: string;
  steps: {
    alipay: {title: string; body: string; mockup: 'download' | 'alipay-card' | 'pay-method'}[];
  };
  offlineMethods: {title: string; body: string; mockup: 'scan' | 'present'}[];
  troubleshooting: {title: string; body: string[]}[];
}> = {
  en: {
    title: 'Payment Setup',
    intro: 'China is very mobile-payment friendly. For first-time visitors, set up Alipay first and keep cash or a bank card for fallback.',
    checked: 'Information checked against official and government sources on June 14, 2026.',
    screenshotNote: 'Real screenshots from official or government guide pages. App screens and button names may still change.',
    videoTitle: 'Watch: Alipay setup video',
    videoDescription: 'A short authorized Xiaohongshu video walkthrough showing how foreign visitors can register and use Alipay in China.',
    videoCredit: 'Authorized Xiaohongshu video: 外国人如何使用支付宝 Alipay Guide',
    priorityTitle: 'Use this order',
    priorities: [
      {label: 'Primary', title: 'Alipay', body: 'Best first setup for most visitors. Add an international card before departure and test the payment entry points.'},
      {label: 'Fallback', title: 'Cash + card', body: 'Carry some RMB cash and one international bank card. Cards and cash are backup, not your daily default.'}
    ],
    beforeTitle: 'Before you fly',
    beforeItems: [
      'Install Alipay before departure.',
      'Register with a phone number that can receive SMS while abroad.',
      'Add at least one international bank card. A second card from another bank is helpful.',
      'Save your passport name spelling exactly as it appears on your passport.',
      'Keep a small amount of RMB cash for airports, taxis, or payment failures.'
    ],
    alipayTitle: 'Set up Alipay',
    alipayIntro: 'Official Alipay+ guidance says overseas users can download Alipay, choose the International Version after signing up, and bind an international bank card.',
    offlineTitle: 'How to pay at a shop',
    offlineIntro: 'There are two common QR payment flows. Ask the cashier which one they want, or look for the QR code on the counter.',
    stuckTitle: 'If you get stuck',
    stuckIntro: 'Pick the problem closest to what you see. This is designed for first-time visitors standing at a counter.',
    steps: {
      alipay: [
        {title: 'Download and register', body: 'Download Alipay from the app store. Register with your phone number and choose the International Version when prompted.', mockup: 'download'},
        {title: 'Add your bank card', body: 'Open Me, go to Bank Cards, choose Add bank card or Add Now, then follow the on-screen prompts.', mockup: 'alipay-card'},
        {title: 'Know where payment lives', body: 'For offline purchases, use Scan to scan the merchant QR code, or Pay/Receive so the cashier can scan your code.', mockup: 'pay-method'}
      ]
    },
    offlineMethods: [
      {title: 'You scan the merchant', body: 'Tap Scan, scan the QR code at the counter, enter the amount if needed, then confirm.', mockup: 'scan'},
      {title: 'Merchant scans you', body: 'Tap Pay/Receive or Pay Code, show the code to the cashier, and wait for confirmation.', mockup: 'present'}
    ],
    troubleshooting: [
      {title: 'SMS verification does not arrive', body: ['Check roaming and whether your SIM can receive international SMS.', 'Try Wi-Fi plus mobile network, wait a few minutes, then request another code.', 'Set up payment before flying so you are not doing this at the counter.']},
      {title: 'Card cannot be added', body: ['Try a second card from another bank or card network.', 'Check that the billing address, passport name and card details match.', 'Some cards may trigger bank fraud checks. Approve the transaction or call your card issuer.']},
      {title: 'Payment fails at checkout', body: ['Try the other payment flow: scan merchant QR or show your payment code.', 'Try another bank card if you added more than one.', 'Ask if cash or an international card is accepted.']},
      {title: 'Small shop does not accept cards', body: ['This is common. Mobile payment is usually easier than an international card.', 'Use Alipay first, then RMB cash if needed.']},
      {title: 'Fees or limits appear', body: ['Limits and fees can depend on the platform, card type, identity verification and promotion period.', 'Use official app prompts and your bank statement as the final source for exchange rate and fee details.']}
    ]
  },
  ja: {
    title: '決済設定',
    intro: '中国ではモバイル決済が日常的に使われます。初めての旅行者は、まずAlipayを設定し、最後の手段として現金またはカードを用意しましょう。',
    checked: '2026年6月14日に公式・政府系情報で確認。',
    screenshotNote: '公式または政府系ガイドページの実際のスクリーンショットです。ただしアプリ画面やボタン名は変わる場合があります。',
    videoTitle: '動画で見る：Alipay設定',
    videoDescription: '外国人旅行者が中国でAlipayを登録・利用する流れを説明する、許諾済みの小紅書動画です。',
    videoCredit: '許諾済み小紅書動画：外国人如何使用支付宝 Alipay Guide',
    priorityTitle: 'この順番で準備',
    priorities: [
      {label: '基本', title: 'Alipay', body: '多くの旅行者にとって最初に準備しやすい方法です。出発前に国際カードを追加します。'},
      {label: '最後の手段', title: '現金 + カード', body: '少額の人民元現金と国際カードを持ちます。日常の主役ではなく予備です。'}
    ],
    beforeTitle: '出発前にやること',
    beforeItems: [
      'Alipayを出発前にインストール。',
      'SMSを受け取れる電話番号で登録。',
      '国際カードを少なくとも1枚追加。別銀行の2枚目があると安心。',
      'パスポート表記と同じ名前を使う。',
      '空港や決済失敗に備えて少額の人民元現金を用意。'
    ],
    alipayTitle: 'Alipayを設定',
    alipayIntro: 'Alipay+公式情報では、海外ユーザーはAlipayをダウンロードし、登録後にInternational Versionを選び、国際カードを追加できると説明されています。',
    offlineTitle: '店舗での支払い方',
    offlineIntro: 'QR決済には主に2つの流れがあります。レジでどちらを使うか確認しましょう。',
    stuckTitle: '困ったとき',
    stuckIntro: 'レジ前で止まった時に、近い状況を選んで確認します。',
    steps: {
      alipay: [
        {title: 'ダウンロードして登録', body: 'アプリストアでAlipayをダウンロードし、電話番号で登録。表示されたらInternational Versionを選びます。', mockup: 'download'},
        {title: '銀行カードを追加', body: 'MeからBank Cardsへ進み、Add bank card または Add Now を選んで画面の案内に従います。', mockup: 'alipay-card'},
        {title: '支払い入口を覚える', body: '店舗ではScanで店のQRを読むか、Pay/Receiveで自分のコードを見せます。', mockup: 'pay-method'}
      ]
    },
    offlineMethods: [
      {title: '店のQRをスキャン', body: 'Scanをタップし、レジのQRコードを読み取り、金額を入力して確認します。', mockup: 'scan'},
      {title: '店員にコードを見せる', body: 'Pay/ReceiveまたはPay Codeを開き、店員にコードをスキャンしてもらいます。', mockup: 'present'}
    ],
    troubleshooting: [
      {title: 'SMSが届かない', body: ['ローミングと国際SMS受信を確認します。', 'Wi-Fiとモバイル回線を切り替え、少し待って再送します。', '出発前に設定しておくと安心です。']},
      {title: 'カードを追加できない', body: ['別の銀行または別ブランドのカードを試します。', '請求先住所、パスポート名、カード情報を確認します。', 'カード会社の不正利用確認が出る場合があります。']},
      {title: '支払いに失敗する', body: ['店のQRを読む方法と、自分のコードを見せる方法を切り替えます。', '複数カードを追加している場合は別のカードを試します。', '現金または国際カードが使えるか聞きます。']},
      {title: '小さな店でカードが使えない', body: ['よくあります。国際カードよりモバイル決済が便利です。', 'Alipayを試し、最後に人民元現金を使います。']},
      {title: '手数料や上限が出る', body: ['手数料や上限は平台、カード、本人確認、キャンペーンにより変わります。', 'アプリ表示とカード明細を最終確認にします。']}
    ]
  },
  zh: {
    title: '支付设置',
    intro: '中国日常消费高度依赖移动支付。第一次来中国，建议先设置支付宝，最后用现金或银行卡兜底。',
    checked: '已于 2026年6月14日 对照官方和政府来源核查。',
    screenshotNote: '下方为官方或政府指南页面中的真实截图，但真实 App 页面和按钮名称仍可能变化。',
    videoTitle: '视频教程：支付宝设置',
    videoDescription: '一段已获授权的小红书视频，演示外国游客如何在中国注册和使用支付宝。',
    videoCredit: '已获授权小红书视频：外国人如何使用支付宝 Alipay Guide',
    priorityTitle: '按这个顺序准备',
    priorities: [
      {label: '主用', title: '支付宝', body: '多数游客最适合先设置。出发前绑定国际银行卡，并熟悉付款入口。'},
      {label: '兜底', title: '现金 + 银行卡', body: '准备少量人民币现金和一张国际银行卡。它们是备用，不是日常主力。'}
    ],
    beforeTitle: '出发前先做完',
    beforeItems: [
      '提前安装 Alipay。',
      '使用能够接收短信验证码的手机号注册。',
      '至少绑定一张国际银行卡；最好再准备另一家银行的备用卡。',
      '姓名拼写尽量和护照保持一致。',
      '准备少量人民币现金，用于机场、打车或支付失败时兜底。'
    ],
    alipayTitle: '设置支付宝',
    alipayIntro: 'Alipay+ 官方说明：海外用户可以下载支付宝，注册后选择 International Version，并绑定国际银行卡。',
    offlineTitle: '到店怎么付款',
    offlineIntro: '线下 QR 支付通常有两种方式。看柜台有没有二维码，或问收银员需要哪一种。',
    stuckTitle: '卡住时怎么办',
    stuckIntro: '如果你是第一次来中国，站在柜台前卡住了，优先看这里。',
    steps: {
      alipay: [
        {title: '下载并注册', body: '从应用商店下载 Alipay，用手机号注册。出现提示时选择 International Version。', mockup: 'download'},
        {title: '绑定银行卡', body: '进入 Me，找到 Bank Cards，选择 Add bank card 或 Add Now，然后按页面提示完成。', mockup: 'alipay-card'},
        {title: '记住付款入口', body: '线下消费时，用 Scan 扫商家二维码，或打开 Pay/Receive 让收银员扫你的付款码。', mockup: 'pay-method'}
      ]
    },
    offlineMethods: [
      {title: '你扫商家二维码', body: '点击 Scan，扫描柜台二维码，必要时输入金额，然后确认支付。', mockup: 'scan'},
      {title: '商家扫你的付款码', body: '点击 Pay/Receive 或 Pay Code，把二维码展示给收银员扫描，等待成功提示。', mockup: 'present'}
    ],
    troubleshooting: [
      {title: '收不到短信验证码', body: ['确认手机开通漫游和国际短信接收。', '切换 Wi-Fi 和移动网络，等几分钟再重新发送。', '尽量出发前完成设置，不要到柜台前才注册。']},
      {title: '银行卡绑定失败', body: ['换另一家银行或另一种卡组织的卡试试。', '检查账单地址、护照姓名和卡信息是否一致。', '有些银行会触发风控，需要在银行 App 或电话里确认。']},
      {title: '付款失败', body: ['切换付款方式：扫商家码，或让商家扫你的付款码。', '如果你添加了多张银行卡，换另一张卡试试。', '询问是否可以使用现金或国际银行卡。']},
      {title: '小店不能刷国际卡', body: ['这很常见。小店通常更习惯移动支付。', '优先支付宝，最后使用人民币现金。']},
      {title: '出现手续费或限额', body: ['手续费和限额可能受平台、卡类型、实名认证、优惠期影响。', '以 App 页面提示和银行卡账单为最终准确信息。']}
    ]
  }
};
