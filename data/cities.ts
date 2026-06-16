import type {Localized} from '@/lib/types';

export type CitySlug = 'beijing' | 'shanghai' | 'chongqing' | 'zhangjiajie';

export type CityAttraction = {
  name: string;
  subtitle: string;
  description: string;
  story: string;
  image: string;
  bestTime: string;
  timeNeeded: string;
};

export type CityGuide = {
  slug: CitySlug;
  name: string;
  tagline: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  badges: string[];
  storyTitle: string;
  story: string[];
  highlights: string[];
  practical: {label: string; value: string}[];
  attractionsTitle: string;
  attractionsIntro: string;
  attractions: CityAttraction[];
};

const cities: Record<CitySlug, CityGuide> = {
  beijing: {
    slug: 'beijing',
    name: '北京',
    tagline: '皇城历史、世界级地标和北方城市日常，一次看见。',
    summary: '北京不只是中国的首都，它是一座把“秩序、权力、防御、礼制和日常生活”都摆在游客眼前的城市。对外国游客来说，北京最有意思的地方，是很多景点不是孤立的打卡点，而是能连成一条理解中国历史和城市性格的线。',
    heroImage: '/images/cities/beijing/forbidden-city.png',
    heroAlt: '北京故宫宫殿建筑',
    badges: ['中国首都', '历史文化', '长城一日游'],
    storyTitle: '为什么外国游客会觉得北京有意思',
    story: [
      '很多世界城市是围绕港口、商业或现代政府区发展起来的，北京的老城则很大程度上围绕“秩序”展开。中轴线、城门、宫殿、祭祀建筑、胡同和市场共同构成了一种空间等级。',
      '北京的大景点之间有很强的故事关系。故宫讲皇权空间，天坛讲皇帝与“天”的关系，长城讲中原王朝与北方边疆。',
      '北京也不是只有宏大的历史。胡同、早餐摊、公园晨练、老人下棋、夜晚散步和烤鸭餐桌，能让外国游客看到帝都之外的普通生活。'
    ],
    highlights: ['沿中轴线感受北京的城市格局，从天安门到故宫再到景山。', '长城建议只选一个段落深度游，不要一天塞太多点。', '除了大景点，也留时间给胡同、博物馆、烤鸭和夜景散步。'],
    practical: [
      {label: '适合人群', value: '第一次来中国、喜欢历史文化、想看经典地标'},
      {label: '建议天数', value: '3-5 天'},
      {label: '市内交通', value: '地铁为主，晚间或跨区长距离可配合打车'}
    ],
    attractionsTitle: '北京出名景区',
    attractionsIntro: '先把这三个代表性景区做好：一个看皇城，一个看山河，一个看礼制与城市生活。',
    attractions: [
      {
        name: '故宫',
        subtitle: '北京皇城的核心记忆',
        description: '故宫是明清两代皇帝居住和处理国家事务的宫殿群，也是外国游客最容易直观看到“中国皇权如何被空间表达出来”的地方。',
        story: '游故宫时可以把它想象成一座“权力剧场”。外朝用于大典和政治仪式，内廷接近皇帝和后妃的生活区。黄色琉璃瓦、龙纹、石狮和层层宫门都在制造权力距离。登上景山回看，故宫会从一组建筑变成一张城市地图。',
        image: '/images/cities/beijing/forbidden-city.png',
        bestTime: '上午入场',
        timeNeeded: '3-4 小时'
      },
      {
        name: '长城',
        subtitle: '北京最经典的山河名片',
        description: '真正站上北京周边的长城，最震撼的往往不是“墙很长”，而是它如何顺着山脊起伏，把军事、防御、地形和王朝边疆感连在一起。',
        story: '长城可以理解为一套古代边防系统，而不只是一面墙。敌情可以通过烽火和信号传递，关口控制交通，城墙借助山势形成防线。外国游客如果想避开“到此一游”的感觉，可以在敌楼里停一会儿，看看墙体如何沿山脊延伸到远处。',
        image: '/images/cities/beijing/great-wall.png',
        bestTime: '晴天上午或傍晚',
        timeNeeded: '半天'
      },
      {
        name: '天坛',
        subtitle: '看礼制建筑，也看北京人的公园生活',
        description: '天坛最适合帮助外国游客理解一个概念：在传统中国，皇帝不只是政治统治者，也承担着与“天”沟通、为国家祈求风调雨顺的礼制角色。',
        story: '祈年殿的圆形屋顶、台基、道路和整体布局，都和“天圆地方”、天人关系、农业社会对丰收的期待有关。清晨来最有反差感：一边是庄严的帝国礼制建筑，一边是当地人在公园里唱歌、跳舞、练太极、下棋。',
        image: '/images/cities/beijing/temple-of-heaven.png',
        bestTime: '清晨',
        timeNeeded: '2-3 小时'
      }
    ]
  },
  shanghai: {
    slug: 'shanghai',
    name: '上海',
    tagline: '一边是外滩的近代世界，一边是浦东的未来 skyline。',
    summary: '上海很适合作为外国游客理解现代中国的第一站。它不像北京那样以皇城秩序为核心，而是一座围绕港口、贸易、金融、移民和城市生活展开的城市。',
    heroImage: '/images/cities/shanghai/bund.png',
    heroAlt: '上海外滩与浦东 skyline',
    badges: ['国际都市', '外滩夜景', '江南园林'],
    storyTitle: '为什么外国游客会觉得上海有意思',
    story: [
      '上海最容易打动外国游客的地方，是它把不同年代直接摆在同一条江边。站在外滩，身后是近代银行、商会、饭店和航运建筑，眼前隔着黄浦江就是浦东高楼。',
      '上海的故事不只是“很现代”。它曾经是中国与世界频繁接触的窗口，贸易、租界、电影、时装、金融、咖啡馆、石库门和弄堂生活共同塑造了这座城市的气质。',
      '玩上海最好不要只追高楼。把外滩、豫园、陆家嘴和普通街区放在一起看，才能看到上海真正的魅力。'
    ],
    highlights: ['傍晚从外滩看浦东，再换到浦东回看外滩。', '用豫园理解上海现代外表下的江南文化底色。', '留一晚给黄浦江夜景、街区散步和本地小吃。'],
    practical: [
      {label: '适合人群', value: '喜欢城市、建筑、夜景、购物、美食和轻松交通的游客'},
      {label: '建议天数', value: '2-4 天'},
      {label: '市内交通', value: '地铁非常方便，外滩和老城厢适合步行'}
    ],
    attractionsTitle: '上海出名景区',
    attractionsIntro: '这三个点能把上海的城市故事讲清楚：近代贸易、江南园林和现代 skyline。',
    attractions: [
      {
        name: '外滩',
        subtitle: '一条江边看懂上海的近代史',
        description: '外滩是上海最经典的城市景观，沿江历史建筑与对岸浦东高楼隔江相望。对外国游客来说，这里不是单纯看夜景，而是看上海如何从通商口岸、金融中心一步步变成今天的国际都市。',
        story: '外滩的建筑曾经属于银行、航运公司、俱乐部和贸易机构。夜晚灯光亮起时，外滩老建筑和浦东摩天楼同时出现，黄浦江就像一条时间线：这边是近代上海，那边是当代中国。',
        image: '/images/cities/shanghai/bund.png',
        bestTime: '傍晚到夜晚',
        timeNeeded: '1-2 小时'
      },
      {
        name: '豫园',
        subtitle: '在高楼城市里看江南园林',
        description: '豫园是上海老城厢里最有代表性的古典园林之一，有池塘、假山、亭台、曲桥和层层转折的空间。',
        story: '中国园林的重点不是“一个大建筑”，而是让人在有限空间里不断遇到新的小景。曲折路线、窗框里的景、池水倒影、石头和植物的组合，都在制造一种慢下来的体验。',
        image: '/images/cities/shanghai/yu-garden.png',
        bestTime: '上午',
        timeNeeded: '1.5-2.5 小时'
      },
      {
        name: '陆家嘴',
        subtitle: '现代中国向上生长的 skyline',
        description: '陆家嘴是上海最具未来感的金融区，东方明珠、上海中心等建筑构成了中国最知名的城市天际线之一。',
        story: '陆家嘴像一个城市宣言，表达改革开放后上海重新面向世界的野心。最好的体验不一定只是上观景台，也可以在江边慢慢走，回望外滩，理解这座城市为什么总是在“过去”和“未来”之间切换。',
        image: '/images/cities/shanghai/lujiazui.png',
        bestTime: '下午到夜晚',
        timeNeeded: '2-3 小时'
      }
    ]
  },
  chongqing: {
    slug: 'chongqing',
    name: '重庆',
    tagline: '山、江、桥、轻轨、火锅和夜景叠在一起的魔幻城市。',
    summary: '重庆对外国游客的吸引力，首先来自它不像一座“平面城市”。长江和嘉陵江在这里交汇，城市沿山坡和江岸层层展开，道路、桥梁、轻轨、楼房和台阶经常处在不同高度。',
    heroImage: '/images/cities/chongqing/hongya-cave.png',
    heroAlt: '重庆洪崖洞夜景',
    badges: ['山城夜景', '火锅之城', '立体交通'],
    storyTitle: '为什么外国游客会觉得重庆像电影场景',
    story: [
      '很多外国游客第一次到重庆，会发现地图不太可靠：两点看起来很近，中间可能隔着坡、桥、楼梯、电梯和好几层道路。',
      '重庆的“魔幻感”不是刻意制造出来的，而是地形逼出来的。山地限制了平地，江河切割了城市，交通系统只能顺着地形寻找办法。',
      '外国游客也很容易被重庆的感官记忆抓住：潮湿的空气、火锅的辣味、江边雾气、夜晚灯光和热闹街巷。'
    ],
    highlights: ['洪崖洞适合夜晚看氛围，但要预期人多。', '长江索道重点不是刺激，而是看懂山城和江河。', '李子坝适合短暂停留，用来理解重庆的立体交通。'],
    practical: [
      {label: '适合人群', value: '喜欢美食、夜景、摄影、城市探索的游客'},
      {label: '建议天数', value: '2-4 天'},
      {label: '市内交通', value: '轨道交通加步行和打车，注意坡多、楼梯多、换乘时间长'}
    ],
    attractionsTitle: '重庆出名景区',
    attractionsIntro: '重庆的景点不只是“看建筑”，更是在看一座山城如何把交通、生活和地形叠在一起。',
    attractions: [
      {
        name: '洪崖洞',
        subtitle: '江边层叠夜景的代表',
        description: '洪崖洞以吊脚楼风格建筑、江景、灯光和多层空间出名，很适合外国游客第一次感受重庆的“立体城市”印象。',
        story: '洪崖洞把重庆的高差和夜生活集中成了一个舞台：道路在上方，江水在下方，桥梁从旁边穿过，建筑一层层亮起来。外国游客常会觉得它像电影里的城市。',
        image: '/images/cities/chongqing/hongya-cave.png',
        bestTime: '日落后',
        timeNeeded: '1-2 小时'
      },
      {
        name: '长江索道',
        subtitle: '从空中看懂重庆的江与城',
        description: '长江索道横跨长江，能让游客在短时间里看到江面、桥梁、坡地建筑和城市高差。',
        story: '长江索道原本不是为了游客拍照而存在，它曾经是市民跨江通勤的一部分。坐在车厢里看下去，江水、船、桥、山坡和楼房同时出现，你会明白重庆为什么不能像平原城市那样规划。',
        image: '/images/cities/chongqing/yangtze-cableway.png',
        bestTime: '傍晚或夜晚',
        timeNeeded: '1-1.5 小时'
      },
      {
        name: '李子坝',
        subtitle: '轻轨穿楼的城市奇观',
        description: '李子坝因为轻轨列车穿过建筑而出名，是外国游客最容易理解重庆立体交通的地点之一。',
        story: '李子坝真正有趣的不是“拍到列车穿楼”这一秒，而是它背后的城市逻辑。重庆地形复杂，交通、居住和道路必须挤在有限空间里寻找解决方案。',
        image: '/images/cities/chongqing/liziba.png',
        bestTime: '白天',
        timeNeeded: '30-60 分钟'
      }
    ]
  },
  zhangjiajie: {
    slug: 'zhangjiajie',
    name: '张家界',
    tagline: '石英砂岩峰林、云雾峡谷和玻璃桥组成的自然奇观。',
    summary: '张家界和北京、上海、重庆完全不同，它不是城市文化型目的地，而是自然景观型目的地。外国游客来到这里，通常是为了看那些像电影场景一样的石柱山峰、云雾森林、天门洞、峡谷和玻璃桥。',
    heroImage: '/images/cities/zhangjiajie/wulingyuan.png',
    heroAlt: '张家界武陵源石柱峰林',
    badges: ['世界级自然景观', '山地旅行', '摄影友好'],
    storyTitle: '为什么外国游客会觉得张家界不真实',
    story: [
      '张家界最特别的地方，是它不像普通山脉。这里不是一整片连续的山坡，而是无数细长的石英砂岩峰柱从森林和峡谷里竖起来。',
      '很多外国游客会把张家界和电影视觉联系起来，但真正让它值得看的，是地质、时间和天气共同塑造的景观。',
      '张家界不适合用“打卡速度”玩。天气、排队、景区交通、步道和体力都会影响体验，雾散开的那几分钟往往就是最震撼的时刻。'
    ],
    highlights: ['武陵源建议至少安排一整天，不要只看一个观景台。', '天门山适合看索道、盘山路、天门洞和崖壁步道。', '玻璃桥适合想体验刺激的人，但恐高游客要谨慎。'],
    practical: [
      {label: '适合人群', value: '喜欢自然、摄影、徒步、山地景观的游客'},
      {label: '建议天数', value: '3-4 天'},
      {label: '景区交通', value: '景区环保车、索道、电梯和步行结合，实际耗时会比地图看起来更长'}
    ],
    attractionsTitle: '张家界出名景区',
    attractionsIntro: '张家界的三个代表体验：峰林看地貌，天门山看悬崖与天门洞，大峡谷玻璃桥看现代刺激体验。',
    attractions: [
      {
        name: '武陵源风景区',
        subtitle: '张家界最经典的石柱峰林',
        description: '武陵源是张家界最核心的自然景观，以石英砂岩峰林、峡谷、森林和云雾闻名。',
        story: '武陵源最好不要理解成“一个景点”，而是一整套山地景观系统。你会通过环保车、步道、索道、电梯和观景台在不同高度之间移动。雾气会不断改变画面，有时几分钟内峰柱突然从白雾里露出来。',
        image: '/images/cities/zhangjiajie/wulingyuan.png',
        bestTime: '雨后清晨或晴朗天气',
        timeNeeded: '一整天或更久'
      },
      {
        name: '天门山',
        subtitle: '索道、盘山路和天门洞的戏剧性旅程',
        description: '天门山以长距离索道、悬崖步道、盘山公路和天然穿山洞“天门洞”闻名。',
        story: '天门山很适合外国游客，因为它的旅行叙事非常清楚：先从城市上空慢慢升到山上，再看到盘山公路像丝带一样缠绕山体，最后来到巨大的天门洞前。',
        image: '/images/cities/zhangjiajie/tianmen-mountain.png',
        bestTime: '晴朗上午',
        timeNeeded: '半天到一天'
      },
      {
        name: '大峡谷玻璃桥',
        subtitle: '峡谷上方的现代刺激体验',
        description: '张家界大峡谷玻璃桥横跨峡谷，把自然峡谷和现代工程结合在一起，视觉冲击强，也很适合拍照。',
        story: '玻璃桥真正让人紧张的不是“桥很长”这个事实，而是脚下透明空间带来的心理反应。建议把玻璃桥当成大峡谷行程的一部分，而不是张家界唯一重点。',
        image: '/images/cities/zhangjiajie/glass-bridge.png',
        bestTime: '晴朗上午',
        timeNeeded: '2-3 小时'
      }
    ]
  }
};

export const cityGuides: Localized<Record<CitySlug, CityGuide>> = {
  en: cities,
  ja: cities,
  zh: cities
};

export const cityList: CitySlug[] = ['beijing', 'shanghai', 'chongqing', 'zhangjiajie'];
