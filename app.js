/**
 * Palau｜帛琉南島永續實踐之旅 - Application Core
 * Powered by pure vanilla JavaScript for maximum performance, offline reliability & zero dependencies.
 */

// -----------------------------------------------------------------------------
// 1. Initial State & Data Definitions
// -----------------------------------------------------------------------------

const ITINERARY_DATA = [
  {
    day: 1,
    date: "116/07/29 (三)",
    title: "啟程啟航．跨越南島海域",
    phase: "啟程奠基",
    activities: [
      "自台灣桃園國際機場集合出發，直飛帛琉羅曼·莫圖國際機場（ROR）。",
      "辦理帛琉入境手續，並於護照加蓋簽署著名的《帛琉誓詞》（Palau Pledge）。",
      "抵達第一大城柯羅（Koror），前往基地飯店辦理入住手續。",
      "行前破冰交流與生活環境定向，提醒在地生活文化與環保守則。"
    ],
    focus: "深刻體會全球第一個將生態承諾寫入入境護照國家的永續初心。"
  },
  {
    day: 2,
    date: "116/07/30 (四)",
    title: "官方拜會與永續使命啟動",
    phase: "官方與學術",
    activities: [
      "正式拜會中華民國駐帛琉共和國大使館，深入理解台帛邦交與國際援助歷程。",
      "參訪帛琉國際珊瑚礁中心（PICRC），由研究員引領認識南太平洋海洋科研現況。",
      "觀摩硨磲貝繁育苗圃與珊瑚礁微棲地監測系統，理解海島保育政策架構。",
      "召開首次研習小組討論，釐清後續實踐調查之研究分工與問題意識。"
    ],
    focus: "探討台帛在海洋科研與氣候變遷因應層面的實質外交合作經驗。"
  },
  {
    day: 3,
    date: "116/07/31 (五)",
    title: "洛克群島世界遺產考察（一）：生態多樣性",
    phase: "海洋生態",
    activities: [
      "搭乘低碳遊艇航向被列為 UNESCO 自然與文化雙遺產的洛克群島南部潟湖。",
      "於指定浮潛保護區展開珊瑚覆蓋率調查與海洋生物多樣性紀錄。",
      "觀察軸孔珊瑚、鹿角珊瑚與熱帶魚群之微生境互動關係。",
      "記錄海洋保護區（PAN）制度落實狀況及海上觀光巡查執行細節。"
    ],
    focus: "學習水下調查方法，實地體會帛琉嚴格的海洋空間規劃與執法成效。"
  },
  {
    day: 4,
    date: "116/08/01 (六)",
    title: "洛克群島世界遺產考察（二）：地質地貌與承載量",
    phase: "海洋生態",
    activities: [
      "深入牛奶湖（Milky Way）特殊石灰岩潟湖地質，探查火山泥沉積與水質成因。",
      "實地踏查無毒水母湖（Jellyfish Lake）周遭海洋湖生態系統與環境監測站。",
      "研討極端氣候（如聖嬰現象水溫升高）對海洋湖泊無脊椎生物族群的長期影響。",
      "探討帛琉高價值、低衝擊（High-value, Low-impact）觀光政策之遊客承載量管控。"
    ],
    focus: "反思脆弱生態島嶼在觀光收益與環境永續極限之間的權衡治理。"
  },
  {
    day: 5,
    date: "116/08/02 (日)",
    title: "紅樹林藍碳生態踏查與獨木舟考察",
    phase: "藍碳保育",
    activities: [
      "換乘無動力生態獨木舟，緩行進入曲折交錯的沿海紅樹林水道。",
      "認識紅樹林根系結構如何有效防禦海浪侵蝕、保護海岸線水土。",
      "實地考察紅樹林作為海洋魚苗與甲殼類「天然育嬰房」的生物保育價值。",
      "深入理解「藍碳（Blue Carbon）」高效率碳封存機制與國際碳權潛力。"
    ],
    focus: "透過低衝擊獨木舟視角，理解紅樹林在島嶼適應氣候變遷的生態屏障作用。"
  },
  {
    day: 6,
    date: "116/08/03 (一)",
    title: "南島航海與文化尋根：石頭錢幣採石場",
    phase: "南島文史",
    activities: [
      "探訪隱身於森林石灰岩洞的「石頭錢幣島」採石場遺址（Metuker Ra Bisech）。",
      "實地勘查古代雅浦島（Yap）人跨越400海浬來帛琉採鑿巨型石幣（Rai）之遺跡。",
      "聆聽地方文史工作者講述南島語族冒險遠洋航海、貿易結盟與貨幣社會學意涵。",
      "研討非物質文化資產保存與文化觀光發展的平衡實踐模式。"
    ],
    focus: "從巨大石幣開鑿歷史，看見數百年前太平洋南島語族緊密相連的航海網絡。"
  },
  {
    day: 7,
    date: "116/08/04 (二)",
    title: "巴貝大島雨林健行與淡水流域生態",
    phase: "山林水系",
    activities: [
      "搭車跨越日帛友誼大橋，前往帛琉最大島嶼——巴貝大島（Babeldaob）。",
      "展開熱帶雨林生態步道健行，考察天然集水區植被與原生種植物。",
      "造訪帛琉落差最大之安得貌大瀑布（Ngardmau Waterfall），考察淡水水文環境。",
      "探討環島公路建設對島嶼水土保持與珊瑚礁流域沖刷的環境因應對策。"
    ],
    focus: "跳脫純海洋視角，全面理解「山海相連」流域治理（Ridge to Reef）概念。"
  },
  {
    day: 8,
    date: "116/08/05 (三)",
    title: "傳統部落治理與母系氏族走讀",
    phase: "南島文史",
    activities: [
      "前往艾萊州（Airai），走訪擁有數百年歷史之傳統男人會館（Airai Bai）。",
      "細緻解讀 Bai 會館木構柱樑上的傳統圖騰神話、階級規範與集會法度。",
      "拜會當地母系氏族長老長姊（Clan Matriarchs），請益母系社會權力運作方式。",
      "深入探討傳統生態智慧——「禁漁禁採令（Bul）」如何成功轉化為現代海洋法規。"
    ],
    focus: "南島傳統母系智慧與現代環境法制的跨世紀融合啟示。"
  },
  {
    day: 9,
    date: "116/08/06 (四)",
    title: "帛琉文史典藏與南島工藝復興",
    phase: "南島文史",
    activities: [
      "參訪密克羅尼西亞歷史最悠久的帛琉國家博物館（Belau National Museum）。",
      "觀摩南島傳統航海獨木舟結構、編織工藝、貝殼飾品與各族群遷徙地圖。",
      "造訪艾佩森博物館（Etpison Museum），研習海洋生態保育宣導展示手法。",
      "與帛琉傳統工藝師交流傳統雕版故事版（Storyboards）的現代演繹。"
    ],
    focus: "思考博物館在守護少數族群語言、記憶與文化認同的動態角色。"
  },
  {
    day: 10,
    date: "116/08/07 (五)",
    title: "在地農業韌性與糧食自給實踐",
    phase: "永續農業",
    activities: [
      "參訪財團法人國際合作發展基金會（ICDF）駐帛琉技術團園區。",
      "觀摩蔬果育苗推廣、土壤改良技術、有機堆肥與循環農業示範作業。",
      "走訪在地社區小農菜園，了解島嶼在高度依賴進口糧食下的自給挑戰。",
      "就熱帶海島因應氣候風險之農業調適策略進行深度交流。"
    ],
    focus: "體會台灣農業軟實力如何協助太平洋友邦深耕糧食安全與低碳生產。"
  },
  {
    day: 11,
    date: "116/08/08 (六)",
    title: "海洋減塑與循環經濟青年行動",
    phase: "減塑永續",
    activities: [
      "與在地環保志工共同執行海灘廢棄物監測與國際淨灘（ICC）標準分類。",
      "統計洋流帶來的跨國海漂垃圾成分，分析海洋塑膠污染的全球連帶問題。",
      "參訪在地玻璃與塑膠再生工坊，了解將廢棄玻璃瓶轉化為文創手工品之模式。",
      "體驗循環手作工藝，探討偏遠海島廢棄物逆向物流與永續去化方案。"
    ],
    focus: "親身實踐源頭減量，將清理海廢的勞動化為具體可行的循環提案。"
  },
  {
    day: 12,
    date: "116/08/09 (日)",
    title: "青年跨文化對話論壇與社區交流",
    phase: "青年交流",
    activities: [
      "與帛琉社區大學（PCC）青年及地方環保組織代表舉辦跨國圓桌論壇。",
      "兩國青年就「島嶼氣候危機」、「原民文化復振」與「青年參與決策」展開分組對談。",
      "體驗帛琉傳統地熱烹調在地食材（Kankum, Taro 等），進行味蕾文化交流。",
      "建立台帛青年夥伴永續溝通社群，奠定後續跨海長期連結基石。"
    ],
    focus: "青年世代以同理心與平等對話，激盪跨越海洋的青年永續行動同盟。"
  },
  {
    day: 13,
    date: "116/08/10 (一)",
    title: "田野數據統整與青年行動方案共創",
    phase: "行動統整",
    activities: [
      "全體召開工作坊，系統化梳理過去 12 天的田野筆記、影像與訪談記錄。",
      "運用設計思考（Design Thinking）方法，聚焦帛琉與台灣共鳴之永續議題。",
      "進行小組行動方案簡報製作，擬定具可行性之「台帛青年永續實踐倡議」。",
      "邀請隨團師長與在地諮詢顧問進行預審回饋與優化指引。"
    ],
    focus: "將見習感悟凝鍊為具備論述力與落地價值的實質行動成果。"
  },
  {
    day: 14,
    date: "116/08/11 (二)",
    title: "計畫成果發表會與文化惜別晚會",
    phase: "成果發表",
    activities: [
      "於駐帛琉大使館會議廳舉辦「青年百億海外圓夢計畫 N-10-3」專題成果發表會。",
      "邀請我國駐帛代表、帛琉環境與文化部會官員、合作機構夥伴蒞臨指導與聆聽。",
      "學員輪流進行全英文/中英雙語專題簡報，展現台灣青年的國際行動力。",
      "晚間舉辦文化惜別茶會，共同演出傳統樂舞，互道珍重與祝福。"
    ],
    focus: "向友邦及師長展現圓夢實踐豐碩成果，深化兩國人民友誼。"
  },
  {
    day: 15,
    date: "116/08/12 (三)",
    title: "滿載永續心靈．返抵台灣邁向新程",
    phase: "圓滿賦歸",
    activities: [
      "收拾行裝，檢查田野紀錄與採集資料完整性，辦理飯店退房。",
      "前往羅曼·莫圖國際機場搭乘定期航班，俯瞰最後一眼碧藍的洛克群島。",
      "平安返抵台灣桃園國際機場，完成為期 15 天之南島永續圓夢實踐旅程。",
      "返國後續行動展望：籌備校園與公共分享會，擴大青年圓夢外溢效應。"
    ],
    focus: "不是旅程的終點，而是青年將永續智慧化為在地行動的嶄新起點。"
  }
];

const ATTRACTIONS_DATA = [
  {
    id: "rock-islands",
    name: "洛克群島南部潟湖",
    nameEn: "Rock Islands Southern Lagoon",
    tag: "UNESCO 世界雙遺產",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    intro: "聯合國教科文組織認定的世界文化與自然雙重遺產。由445座由石灰岩構成的蕈狀無人島組成，擁有清澈見底的藍綠色潟湖、發達的珊瑚礁脈以及獨一無二的海洋湖生態，是帛琉最受敬仰的自然殿堂。",
    tip: "嚴格落實無痕山林與無痕海洋，入海禁止塗抹含氧苯酮等有害珊瑚防曬乳。",
    mapQuery: "Rock Islands Southern Lagoon Palau"
  },
  {
    id: "stone-money",
    name: "石頭錢幣島採石場遺址",
    nameEn: "Metuker Ra Bisech (Yapese Stone Money Quarry)",
    tag: "南島航海與貨幣史",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    intro: "深藏在熱帶森林岩窟中的古代密克羅尼西亞歷史證物。數百年前雅浦島航海家冒險划獨木舟橫跨汪洋，來此開鑿巨大的方解石圓盤並搬運回鄉作為傳統財富與家族聲望的象徵，見證了驚人的南島跨海經貿網絡。",
    tip: "歷史文化國寶級遺址，請保持肅穆敬意，嚴禁攀爬或觸碰古代石幣表面。",
    mapQuery: "Metuker Ra Bisech Palau"
  },
  {
    id: "mangrove",
    name: "紅樹林藍碳水道生態區",
    nameEn: "Palau Mangrove & Blue Carbon Channels",
    tag: "藍碳與氣候韌性",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    intro: "帛琉群島沿岸最關鍵的「海岸守護神」。綿密的紅樹林水道不僅是沉積物天然濾網與熱帶幼魚的育嬰所，更具備高達陸域森林數倍的碳封存能力（藍碳），是抵禦全球極端海平面上升的天然防護網。",
    tip: "推薦以輕聲划行無動力獨木舟方式造訪，盡量避免驚擾水道中的幼生生物與水鳥。",
    mapQuery: "Palau Mangrove Ecosystem"
  },
  {
    id: "waterfall",
    name: "安得貌大瀑布",
    nameEn: "Ngardmau Waterfall",
    tag: "山林水系與流域保育",
    img: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    intro: "帛琉全境規模最宏偉、落差超過 30 公尺的天然瀑布，隱身在巴貝大島最高峰山麓。奔騰的水流穿越古老的雨林峽谷注入溪流，是全島最重要的淡水流域之一，展示了海島山海連動的流域水土依存關係。",
    tip: "健行路面石階多苔蘚濕滑，建議務必穿著專業防滑溯溪鞋或抓地力良好之水陸兩用鞋。",
    mapQuery: "Ngardmau Waterfall Palau"
  },
  {
    id: "airai-bai",
    name: "艾萊州傳統男人會館",
    nameEn: "Airai Bai (Traditional Chiefs Meeting House)",
    tag: "南島母系與部落治理",
    img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
    intro: "帛琉保存最完整、歷史超過百年的傳統木造茅草會議廳。三角山牆與橫樑上手繪著精緻的黃、黑、赭紅神話圖騰故事版，象徵部落傳統法規、道德警示與社會秩序，更是長老們議決重大公共事務的神聖核心。",
    tip: "會館具備高度傳統文化禁忌，入內前應先脫鞋並著過膝長褲或沙龍，依從部落導覽引導。",
    mapQuery: "Airai Bai Palau"
  },
  {
    id: "picrc",
    name: "帛琉國際珊瑚礁中心",
    nameEn: "Palau International Coral Reef Center (PICRC)",
    tag: "海洋科研與國際合作",
    img: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
    intro: "太平洋頂尖的海洋科學研究與環境教育樞紐，肩負帛琉國家保護區網絡（PAN）監測與珊瑚白化救援使命。館內附設帛琉水族館，以活體培育槽展示硨磲貝發育、海草床生態以及台灣與各國合作的海洋保育專案。",
    tip: "館內備有豐富之科研文獻與在地出版品，是學員建立海洋研究背景知識的最佳第一站。",
    mapQuery: "Palau International Coral Reef Center Koror"
  },
  {
    id: "national-museum",
    name: "帛琉國家博物館",
    nameEn: "Belau National Museum",
    tag: "南島人文與歷史典藏",
    img: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80",
    intro: "密克羅尼西亞歷史最悠久的博物館，成立於1955年。典藏數千件珍貴的南島航海器物、貝幣、編織陶器與殖民時期歷史檔案，戶外還建有一座完整復原的傳統 Bai 男人會館與植物園。",
    tip: "館內特設有南島語族航海路線對照圖，可清晰看見台灣原住民與帛琉語言文化之高度親緣性。",
    mapQuery: "Belau National Museum Koror Palau"
  },
  {
    id: "capitol",
    name: "帛琉國會建築群（小白宮）",
    nameEn: "Palau National Capitol (Ngerulmud)",
    tag: "首都地標與歷史行政",
    img: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    intro: "坐落於巴貝大島梅萊凱奧克州恩吉魯穆德的新首都行政中樞。典雅的米白色圓頂新古典主義建築聳立在開闊翠綠的丘陵之上，四面環繞著原始熱帶森林，遠眺浩瀚太平洋，象徵帛琉主權獨立與現代立憲體制。",
    tip: "園區寬闊無遮蔽，烈日下陽光強烈，建議攜帶遮陽帽並適時補充水分。",
    mapQuery: "Palau National Capitol Ngerulmud"
  }
];

const INITIAL_CHECKLIST = [
  // documents
  { id: "chk_1", category: "documents", text: "中華民國護照正本（效期 6 個月以上）", checked: true, isDefault: true },
  { id: "chk_2", category: "documents", text: "電子機票行程確認單（列印紙本＋電子檔備存）", checked: true, isDefault: true },
  { id: "chk_3", category: "documents", text: "青年百億海外圓夢基金計畫入選證明與手冊", checked: true, isDefault: true },
  { id: "chk_4", category: "documents", text: "海外旅遊與突發醫療平安保險單（英文版）", checked: false, isDefault: true },
  { id: "chk_5", category: "documents", text: "美元現金（建議備 300~500 美元零鈔與小面額）", checked: false, isDefault: true },
  { id: "chk_6", category: "documents", text: "身分證正反面影本、大頭照2張（遺失備用）", checked: false, isDefault: true },

  // marine
  { id: "chk_7", category: "marine", text: "海洋友善防曬乳（法定 Reef-Safe，不可含禁藥成分）", checked: true, isDefault: true },
  { id: "chk_8", category: "marine", text: "長袖防曬水母衣／防磨衣（UPF 50+）", checked: true, isDefault: true },
  { id: "chk_9", category: "marine", text: "個人浮潛面鏡與防浪呼吸管（確保密合度）", checked: false, isDefault: true },
  { id: "chk_10", category: "marine", text: "防滑浮潛膠鞋／溯溪鞋（保護腳掌避免割傷）", checked: false, isDefault: true },
  { id: "chk_11", category: "marine", text: "戶外防水袋（15L~20L，出海保護隨身物品）", checked: false, isDefault: true },
  { id: "chk_12", category: "marine", text: "手機高密封專用防水保護套", checked: false, isDefault: true },
  { id: "chk_13", category: "marine", text: "超細纖維輕薄快乾運動浴巾", checked: false, isDefault: true },

  // fieldwork
  { id: "chk_14", category: "fieldwork", text: "田野防水筆記本＋耐水性黑色/藍色原子筆", checked: true, isDefault: true },
  { id: "chk_15", category: "fieldwork", text: "行動電源 10000~20000mAh（隨身行李攜帶）", checked: false, isDefault: true },
  { id: "chk_16", category: "fieldwork", text: "筆記型電腦／平板電腦與充電線（簡報成果製作）", checked: false, isDefault: true },
  { id: "chk_17", category: "fieldwork", text: "相機／GoPro 運動相機、備用電池與大容量記憶卡", checked: false, isDefault: true },
  { id: "chk_18", category: "fieldwork", text: "隨身 USB 隨身碟（資料互傳備份）", checked: false, isDefault: true },

  // clothing
  { id: "chk_19", category: "clothing", text: "輕便透氣排汗短袖上衣（5-7 件）", checked: false, isDefault: true },
  { id: "chk_20", category: "clothing", text: "薄款防風抗UV連帽外套（機艙與夜間乘船用）", checked: false, isDefault: true },
  { id: "chk_21", category: "clothing", text: "正式場合服裝1套（成果發表會與官方拜會用）", checked: false, isDefault: true },
  { id: "chk_22", category: "clothing", text: "寬沿遮陽帽／戶外抗UV漁夫帽", checked: false, isDefault: true },
  { id: "chk_23", category: "clothing", text: "偏光抗紫外線太陽眼鏡", checked: false, isDefault: true },
  { id: "chk_24", category: "clothing", text: "個人常備個人藥物（暈船藥、腸胃止瀉藥、過敏藥）", checked: false, isDefault: true },
  { id: "chk_25", category: "clothing", text: "天然成分防蚊液（避免化學毒性影響海島生態）", checked: false, isDefault: true },

  // eco
  { id: "chk_26", category: "eco", text: "個人環保保溫水壺（減少一次性塑膠瓶購買）", checked: true, isDefault: true },
  { id: "chk_27", category: "eco", text: "可重複使用環保餐具組（筷子、湯匙、矽膠吸管）", checked: false, isDefault: true },
  { id: "chk_28", category: "eco", text: "輕量便攜摺疊購物環保袋", checked: false, isDefault: true },
  { id: "chk_29", category: "eco", text: "個人盥洗旅行組（牙刷、牙膏、生物分解沐浴皂）", checked: false, isDefault: true }
];

const INITIAL_EXPENSES = [
  {
    id: "exp_1",
    title: "洛克群島環境保育與浮潛許可證 (Rock Islands Permit)",
    amount: 50.00,
    currency: "USD",
    category: "activity",
    date: "116/07/31",
    notes: "帛琉科羅州法定環境保育規費（效期10天）"
  },
  {
    id: "exp_2",
    title: "田野調查防水記錄冊與文具採購",
    amount: 480,
    currency: "TWD",
    category: "gear",
    date: "116/07/28",
    notes: "行前在台灣準備之專業耐水筆記本"
  },
  {
    id: "exp_3",
    title: "柯羅市區在地小吃與椰子水（小組討論）",
    amount: 14.50,
    currency: "USD",
    category: "food",
    date: "116/07/30",
    notes: "品嘗當地芋頭與椰子水，交流文化筆記"
  },
  {
    id: "exp_4",
    title: "艾萊州男人會館文化參訪敬獻與導覽費",
    amount: 15.00,
    currency: "USD",
    category: "culture",
    date: "116/08/05",
    notes: "支持在地傳統氏族文化資產維護"
  }
];

const INITIAL_JOURNALS = [
  {
    id: "jrn_1",
    title: "初抵柯羅：護照蓋上《帛琉誓詞》的深刻震撼",
    date: "116/07/29",
    mood: "✨ 感動",
    tag: "Day 1 啟程",
    content: "搭乘飛機降落在羅曼·莫圖國際機場的那一刻，推開機艙門迎面而來的是太平洋濕潤而溫暖的海風。\n\n海關人員在我的護照上蓋下了那一整頁的《帛琉誓詞》（Palau Pledge），並輕聲說：『請大聲為島上的孩子們宣讀並簽名。』\n\n『我宣誓保護並維護美麗而脆弱的島嶼家園，踏著輕柔的腳步，僅留下可以被沖刷的足跡……』\n親手簽下名字的那一瞬間，才真正體會到：永續不再是教科書上的口號，而是每個來到這片土地的人共同的契約。接下來的14天，我們將帶著這份承諾深入田野，期待這趟旅程能轉化為我們青春最真實的實踐！"
  },
  {
    id: "jrn_2",
    title: "在碧藍深處：遇見洛克群島的珊瑚與硨磲貝",
    date: "116/07/31",
    mood: "🌊 碧海",
    tag: "Day 3 海洋調查",
    content: "今天整天浸泡在洛克群島的清澈潟湖裡。水質透明度超過20公尺，低頭就能看見比手掌還大的藍紫色巨型硨磲貝正在呼吸，五彩斑斕的雀鯛在鹿角珊瑚間穿梭。\n\n在 PICRC 研究員的帶領下，我們實際學習水下調查方法。看見健康珊瑚的生機勃勃，也看到幾處過去高溫白化的殘骸，更深刻感受到海洋面臨暖化危機的急迫性。\n\n出發前我們全員堅持換上長袖水母衣，一滴非友善海洋的防曬乳都沒塗。用肌膚感受海水溫度的同時，我們也正在用行動實踐不干擾這片淨土的承諾。"
  }
];

// Exchange rate default (1 USD ~ 32.5 TWD)
const USD_TO_TWD_RATE = 32.5;

// -----------------------------------------------------------------------------
// 2. Storage Helpers (localStorage wrapper)
// -----------------------------------------------------------------------------

const Storage = {
  get(key, defaultValue) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.warn(`Error reading from localStorage [${key}]:`, e);
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn(`Error writing to localStorage [${key}]:`, e);
    }
  }
};

// -----------------------------------------------------------------------------
// 3. Application State Manager
// -----------------------------------------------------------------------------

const AppState = {
  currentTab: "home",
  itineraryFilter: "all",
  checklistFilter: "all",
  checklist: [],
  expenses: [],
  journals: [],
  currencyDisplay: "ALL", // ALL, USD, TWD

  init() {
    this.checklist = Storage.get("palau_checklist_v1", INITIAL_CHECKLIST);
    this.expenses = Storage.get("palau_expenses_v1", INITIAL_EXPENSES);
    this.journals = Storage.get("palau_journals_v1", INITIAL_JOURNALS);

    // Bind event listeners
    this.setupNavigation();
    this.setupScrollListener();
    this.setupCountdown();

    // Render components
    this.renderItinerary();
    this.renderAttractions();
    this.renderChecklist();
    this.renderBudget();
    this.renderJournals();
  },

  setupNavigation() {
    // Desktop & Mobile buttons
    const navButtons = document.querySelectorAll("[data-nav-target]");
    navButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-nav-target");
        this.switchTab(target);
      });
    });

    // Handle hash on load
    const hash = window.location.hash.replace("#", "");
    if (hash && ["home", "itinerary", "attractions", "checklist", "budget", "journal"].includes(hash)) {
      this.switchTab(hash);
    }
  },

  switchTab(tabId) {
    this.currentTab = tabId;
    window.location.hash = tabId;

    // Toggle views
    document.querySelectorAll(".page-view").forEach(view => {
      view.classList.remove("active-view");
    });
    const activeSection = document.getElementById(`view-${tabId}`);
    if (activeSection) {
      activeSection.classList.add("active-view");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Toggle desktop nav
    document.querySelectorAll(".nav-desktop .nav-item-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-nav-target") === tabId);
    });

    // Toggle mobile nav
    document.querySelectorAll(".mobile-nav-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-nav-target") === tabId);
    });
  },

  setupScrollListener() {
    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    });
  },

  setupCountdown() {
    const countdownEl = document.getElementById("departureCountdown");
    if (!countdownEl) return;

    // 116年 (2027年) 7月29日 09:00:00 GMT+8
    const departureDate = new Date("2027-07-29T09:00:00+08:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = departureDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        countdownEl.innerText = `${days} 天`;
      } else {
        countdownEl.innerText = "已啟程！";
      }
    };

    updateTimer();
    setInterval(updateTimer, 60000);
  },

  // ---------------------------------------------------------------------------
  // 4. Feature 2: Itinerary
  // ---------------------------------------------------------------------------
  renderItinerary() {
    const container = document.getElementById("itineraryList");
    if (!container) return;

    const filtered = ITINERARY_DATA.filter(item => {
      if (this.itineraryFilter === "all") return true;
      if (this.itineraryFilter === "sea") return ["海洋生態", "藍碳保育"].includes(item.phase);
      if (this.itineraryFilter === "culture") return ["南島文史"].includes(item.phase);
      if (this.itineraryFilter === "eco") return ["永續農業", "減塑永續", "山林水系"].includes(item.phase);
      if (this.itineraryFilter === "action") return ["官方與學術", "青年交流", "行動統整", "成果發表", "啟程奠基", "圓滿賦歸"].includes(item.phase);
      return true;
    });

    container.innerHTML = filtered.map(item => `
      <div class="day-card" data-day="${item.day}">
        <div class="day-card-header">
          <div class="day-badge-wrap">
            <span class="day-badge-num">Day ${item.day < 10 ? '0' + item.day : item.day}</span>
            <span class="day-badge-date">${item.date}</span>
          </div>
          <span class="day-phase-tag">${item.phase}</span>
        </div>
        <div class="day-card-body">
          <h3 class="day-theme-title">${item.title}</h3>
          <ul class="day-activities-list">
            ${item.activities.map(act => `<li>${act}</li>`).join("")}
          </ul>
          <div class="day-focus-box">
            <span style="font-weight: 700; color: #2d6a75; white-space: nowrap;">🎯 核心目標：</span>
            <span>${item.focus}</span>
          </div>
        </div>
      </div>
    `).join("");

    // Set filter tab active state
    document.querySelectorAll(".itinerary-filter-bar .filter-pill").forEach(pill => {
      pill.classList.toggle("active", pill.getAttribute("data-filter") === this.itineraryFilter);
    });
  },

  setItineraryFilter(filter) {
    this.itineraryFilter = filter;
    this.renderItinerary();
  },

  // ---------------------------------------------------------------------------
  // 5. Feature 3: Attractions
  // ---------------------------------------------------------------------------
  renderAttractions() {
    const container = document.getElementById("attractionsGrid");
    if (!container) return;

    container.innerHTML = ATTRACTIONS_DATA.map(spot => {
      const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapQuery)}`;
      return `
        <div class="attraction-card">
          <div class="attraction-img-wrap">
            <img src="${spot.img}" alt="${spot.name}" class="attraction-img" loading="lazy" />
            <span class="attraction-tag-badge">${spot.tag}</span>
          </div>
          <div class="attraction-content">
            <h3 class="attraction-name">${spot.name}</h3>
            <p class="attraction-en">${spot.nameEn}</p>
            <p class="attraction-intro">${spot.intro}</p>
            <div class="attraction-tip">
              <span style="flex-shrink:0;">🌱</span>
              <span><strong>實踐叮嚀：</strong>${spot.tip}</span>
            </div>
            <a href="${gmapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-gmaps">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              在 Google 地圖查看
            </a>
          </div>
        </div>
      `;
    }).join("");
  },

  // ---------------------------------------------------------------------------
  // 6. Feature 4: Packing Checklist
  // ---------------------------------------------------------------------------
  renderChecklist() {
    const listContainer = document.getElementById("checklistGroups");
    const statText = document.getElementById("checkStatText");
    const pctBadge = document.getElementById("checkPctBadge");
    const progressBar = document.getElementById("checkProgressFill");

    if (!listContainer) return;

    const totalCount = this.checklist.length;
    const completedCount = this.checklist.filter(item => item.checked).length;
    const pct = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    if (statText) statText.innerText = `準備進度：${completedCount} / ${totalCount} 項已完成`;
    if (pctBadge) pctBadge.innerText = `${pct}%`;
    if (progressBar) progressBar.style.width = `${pct}%`;

    const categoryNames = {
      documents: "📋 重要證件與文件",
      marine: "🤿 海洋與生態考察裝備",
      fieldwork: "📝 田野調查與數位設備",
      clothing: "👕 衣物與日常防護用品",
      eco: "🌿 永續旅遊個人用品",
      custom: "⭐ 自訂攜帶項目"
    };

    // Filter items
    let visibleItems = this.checklist;
    if (this.checklistFilter === "completed") {
      visibleItems = visibleItems.filter(i => i.checked);
    } else if (this.checklistFilter === "uncompleted") {
      visibleItems = visibleItems.filter(i => !i.checked);
    } else if (this.checklistFilter !== "all") {
      visibleItems = visibleItems.filter(i => i.category === this.checklistFilter);
    }

    if (visibleItems.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🎒</div>
          <p>此類別目前沒有待辦項目</p>
        </div>
      `;
      return;
    }

    // Group items by category
    const grouped = {};
    visibleItems.forEach(item => {
      const cat = item.category || "custom";
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    });

    listContainer.innerHTML = Object.keys(grouped).map(catKey => {
      const items = grouped[catKey];
      return `
        <div class="checklist-group">
          <h4 class="checklist-group-title">
            <span>${categoryNames[catKey] || catKey}</span>
            <span style="font-size:0.78rem; font-weight:600; color:#62777c;">(${items.filter(x => x.checked).length}/${items.length})</span>
          </h4>
          <div class="checklist-items-grid">
            ${items.map(item => `
              <label class="check-item-label ${item.checked ? 'checked' : ''}" data-id="${item.id}">
                <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="AppState.toggleCheckItem('${item.id}')" />
                <div class="custom-checkbox">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span class="check-item-text">${item.text}</span>
                ${!item.isDefault ? `
                  <button type="button" class="btn-delete-check" title="刪除此項目" onclick="event.preventDefault(); AppState.deleteCheckItem('${item.id}')">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                ` : ''}
              </label>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");

    // Update filter active states
    document.querySelectorAll(".checklist-toolbar .filter-pill").forEach(pill => {
      pill.classList.toggle("active", pill.getAttribute("data-cat") === this.checklistFilter);
    });
  },

  toggleCheckItem(id) {
    const item = this.checklist.find(i => i.id === id);
    if (item) {
      item.checked = !item.checked;
      Storage.set("palau_checklist_v1", this.checklist);
      this.renderChecklist();
    }
  },

  addCheckItem(text, category) {
    if (!text || text.trim() === "") return;
    const newItem = {
      id: "chk_cust_" + Date.now(),
      category: category || "custom",
      text: text.trim(),
      checked: false,
      isDefault: false
    };
    this.checklist.push(newItem);
    Storage.set("palau_checklist_v1", this.checklist);
    this.renderChecklist();
    this.showToast("已成功新增清單項目！");
  },

  deleteCheckItem(id) {
    this.checklist = this.checklist.filter(i => i.id !== id);
    Storage.set("palau_checklist_v1", this.checklist);
    this.renderChecklist();
    this.showToast("已刪除該自訂項目");
  },

  resetChecklist() {
    if (confirm("確定要將所有項目的勾選狀態重置為「未完成」嗎？")) {
      this.checklist.forEach(i => i.checked = false);
      Storage.set("palau_checklist_v1", this.checklist);
      this.renderChecklist();
      this.showToast("已重置所有項目勾選狀態");
    }
  },

  setChecklistFilter(cat) {
    this.checklistFilter = cat;
    this.renderChecklist();
  },

  // ---------------------------------------------------------------------------
  // 7. Feature 5: Budget Tracker
  // ---------------------------------------------------------------------------
  renderBudget() {
    const listContainer = document.getElementById("expenseList");
    const totalUsdEl = document.getElementById("totalExpenseUsd");
    const totalTwdEl = document.getElementById("totalExpenseTwd");
    const countEl = document.getElementById("expenseCount");

    if (!listContainer) return;

    // Calculate totals
    let totalUSD = 0;
    this.expenses.forEach(item => {
      if (item.currency === "USD") {
        totalUSD += Number(item.amount) || 0;
      } else {
        totalUSD += (Number(item.amount) || 0) / USD_TO_TWD_RATE;
      }
    });

    const totalTWD = Math.round(totalUSD * USD_TO_TWD_RATE);

    if (totalUsdEl) totalUsdEl.innerText = `$ ${totalUSD.toFixed(2)}`;
    if (totalTwdEl) totalTwdEl.innerText = `NT$ ${totalTWD.toLocaleString()}`;
    if (countEl) countEl.innerText = `${this.expenses.length} 筆`;

    const categoryIcons = {
      food: "🍽️",
      transport: "🚢",
      activity: "🤿",
      culture: "🏛️",
      gear: "🎒",
      souvenir: "🎁",
      other: "🏷️"
    };

    const categoryLabels = {
      food: "餐飲",
      transport: "交通",
      activity: "門票生態",
      culture: "文化拜會",
      gear: "裝備物資",
      souvenir: "紀念品",
      other: "雜支"
    };

    if (this.expenses.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">💸</div>
          <p>目前尚無支出紀錄，歡迎從左側表單新增！</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = this.expenses.map(item => {
      const isUsd = item.currency === "USD";
      const displayAmount = isUsd
        ? `$ ${Number(item.amount).toFixed(2)}`
        : `NT$ ${Number(item.amount).toLocaleString()}`;
      const approxAmount = isUsd
        ? `≈ NT$ ${Math.round(item.amount * USD_TO_TWD_RATE).toLocaleString()}`
        : `≈ $ ${(item.amount / USD_TO_TWD_RATE).toFixed(2)} USD`;

      return `
        <div class="expense-row">
          <div class="expense-info">
            <div class="expense-cat-badge">
              ${categoryIcons[item.category] || "💵"}
            </div>
            <div>
              <div class="expense-name">${item.title}</div>
              <div class="expense-meta">
                <span>${item.date || "無日期"}</span>
                <span>•</span>
                <span>${categoryLabels[item.category] || "支出"}</span>
                ${item.notes ? `<span>•</span><span>${item.notes}</span>` : ''}
              </div>
            </div>
          </div>
          <div class="expense-val-wrap">
            <div>
              <div class="expense-val">${displayAmount}</div>
              <div class="expense-val-usd">${approxAmount}</div>
            </div>
            <button class="btn-icon-danger" title="刪除" onclick="AppState.deleteExpense('${item.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  addExpense(title, amount, currency, category, date, notes) {
    if (!title || !amount) {
      alert("請輸入支出項目名稱與金額！");
      return;
    }
    const newExpense = {
      id: "exp_" + Date.now(),
      title: title.trim(),
      amount: parseFloat(amount),
      currency: currency || "USD",
      category: category || "other",
      date: date || new Date().toISOString().split("T")[0],
      notes: (notes || "").trim()
    };

    this.expenses.unshift(newExpense);
    Storage.set("palau_expenses_v1", this.expenses);
    this.renderBudget();
    this.showToast("已成功記錄一筆支出！");
  },

  deleteExpense(id) {
    if (confirm("確定要刪除這筆支出紀錄嗎？")) {
      this.expenses = this.expenses.filter(i => i.id !== id);
      Storage.set("palau_expenses_v1", this.expenses);
      this.renderBudget();
      this.showToast("已刪除該筆支出");
    }
  },

  // ---------------------------------------------------------------------------
  // 8. Feature 6: Travel Journal
  // ---------------------------------------------------------------------------
  renderJournals() {
    const container = document.getElementById("journalEntriesList");
    const countBadge = document.getElementById("journalCountBadge");
    if (!container) return;

    if (countBadge) {
      countBadge.innerText = `${this.journals.length} 篇`;
    }

    if (this.journals.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📖</div>
          <p>目前還沒有任何日誌，開始記錄你在帛琉的第一篇觀察吧！</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.journals.map(item => `
      <div class="journal-card" id="card-${item.id}">
        <div class="journal-header">
          <div>
            <h3 class="journal-title">${item.title}</h3>
            <div class="journal-meta">
              <span>📅 ${item.date}</span>
              <span>•</span>
              <span>${item.mood || "✨ 感想"}</span>
            </div>
          </div>
          <button class="btn-icon-danger" title="刪除日誌" onclick="AppState.deleteJournal('${item.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
        <div class="journal-body">${this.escapeHtml(item.content)}</div>
        ${item.tag ? `<span class="journal-tag-pill">${item.tag}</span>` : ''}
      </div>
    `).join("");
  },

  addJournal(title, date, mood, tag, content) {
    if (!title || !content) {
      alert("請填寫心得日誌的「標題」與「心得內容」！");
      return;
    }

    const newJournal = {
      id: "jrn_" + Date.now(),
      title: title.trim(),
      date: date || new Date().toISOString().split("T")[0],
      mood: mood || "✨ 感動",
      tag: (tag || "田野實踐").trim(),
      content: content.trim()
    };

    this.journals.unshift(newJournal);
    Storage.set("palau_journals_v1", this.journals);
    this.renderJournals();
    this.showToast("已成功儲存旅程日誌！");
  },

  deleteJournal(id) {
    if (confirm("確定要刪除這篇日誌嗎？此動作無法復原。")) {
      this.journals = this.journals.filter(j => j.id !== id);
      Storage.set("palau_journals_v1", this.journals);
      this.renderJournals();
      this.showToast("日誌已刪除");
    }
  },

  // ---------------------------------------------------------------------------
  // 9. Utilities & Helpers
  // ---------------------------------------------------------------------------
  showToast(message) {
    let toast = document.getElementById("appToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "appToast";
      toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: #1b4952;
        color: #ffffff;
        padding: 10px 20px;
        border-radius: 9999px;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 6px 18px rgba(0,0,0,0.25);
        z-index: 9999;
        opacity: 0;
        transition: all 0.3s ease;
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }

    toast.innerText = message;
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";
    }, 2500);
  },

  escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};

// -----------------------------------------------------------------------------
// 10. Bootstrap Application on DOM Ready
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  AppState.init();

  // Bind Custom Checklist Add Form
  const addCheckBtn = document.getElementById("btnAddCheckItem");
  const checkInput = document.getElementById("newCheckItemText");
  const checkCatSelect = document.getElementById("newCheckItemCat");

  if (addCheckBtn && checkInput) {
    addCheckBtn.addEventListener("click", () => {
      const val = checkInput.value.trim();
      if (val) {
        AppState.addCheckItem(val, checkCatSelect.value);
        checkInput.value = "";
      }
    });

    checkInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addCheckBtn.click();
      }
    });
  }

  // Bind Budget Form
  const budgetForm = document.getElementById("expenseForm");
  if (budgetForm) {
    budgetForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("expTitle").value;
      const amount = document.getElementById("expAmount").value;
      const currency = document.getElementById("expCurrency").value;
      const category = document.getElementById("expCategory").value;
      const date = document.getElementById("expDate").value;
      const notes = document.getElementById("expNotes").value;

      AppState.addExpense(title, amount, currency, category, date, notes);
      budgetForm.reset();
      // Reset default date to today
      const dateInput = document.getElementById("expDate");
      if (dateInput) dateInput.valueAsDate = new Date();
    });

    // Auto set date
    const dateInput = document.getElementById("expDate");
    if (dateInput) dateInput.valueAsDate = new Date();
  }

  // Bind Journal Form
  const journalForm = document.getElementById("journalForm");
  let selectedMood = "✨ 感動";

  document.querySelectorAll(".mood-selector .mood-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mood-selector .mood-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedMood = btn.getAttribute("data-mood");
    });
  });

  if (journalForm) {
    const journalDateInput = document.getElementById("jrnDate");
    if (journalDateInput) journalDateInput.valueAsDate = new Date();

    journalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("jrnTitle").value;
      const date = document.getElementById("jrnDate").value;
      const tag = document.getElementById("jrnTag").value;
      const content = document.getElementById("jrnContent").value;

      AppState.addJournal(title, date, selectedMood, tag, content);
      journalForm.reset();
      if (journalDateInput) journalDateInput.valueAsDate = new Date();
    });
  }
});
