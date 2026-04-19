import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

type View = "index" | "works" | "info" | "project";
type Language = "zh" | "en";

interface Project {
  id: number;
  title: { zh: string; en: string };
  year: string;
  materials: { zh: string; en: string };
  dimensions: { zh: string; en: string };
  description: { zh: string; en: string };
  images: string[];
  imagesGroup2?: string[];
  fullWidthImage?: string;
  video?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: { zh: "拟饵与荧火", en: "Phantom Baits and Firefly" },
    year: "2025",
    materials: { 
      zh: "玻璃、生蚝壳、海蜇、海带、纸纤维、海蚀岩、云母片、海藻酸钠、树脂、夜光油、依兰花精油、捕鱼诱捕灯", 
      en: "Glass, oyster shells, jellyfish, kelp, paper fiber, sea-eroded rock, mica flakes, sodium alginate, resin, phosphorescent paint, ylang-ylang essential oil, Fishing trap lights" 
    },
    dimensions: { zh: "可变", en: "Variable" },
    description: {
      zh: "由多种海洋生物与材料构成的小型雕塑群在空间中汇聚成一个触觉与嗅觉交织的感知剧场。玻璃鱿鱼和拟态捕鱼诱饵和捕鱼光，爬行缠绕在岩石般的仿造物的载体上，有的出奇轻盈，有的出乎意料地沉重，犹如对海洋的感知——深不可测，无法仅凭外观判断。晶莹的玻璃小鱿鱼在暗处发出磷光，间或点缀着金属钩状诱饵的图像，令真实与虚构在同一表面共存。这些细微的诱饵散布其间，邀请观者穿行其中。作品在湿润与干燥、溶解与重组、静止与流动的循环中呈现，海洋生物与技术编织出一个张力十足的动态网络，流动与控制、人类与非人类在其中相互交织。",
      en: "A cluster of small sculptures composed of various marine organisms and materials converges in space to form a perceptual theater where touch and smell intertwine. Glass squids, mimetic fishing lures, and trap lights crawl and entwine upon rock-like synthetic carriers. Some are surprisingly light, while others are unexpectedly heavy, echoing the perception of the ocean—fathomless and impossible to judge by appearance alone. Translucent glass squids emit phosphorescence in the dark, interspersed with images of metallic hook-shaped lures, allowing reality and fiction to coexist on the same surface. These subtle lures are scattered throughout, inviting viewers to navigate through them. The work manifests in a cycle of wetness and dryness, dissolution and reorganization, stillness and flow, where marine life and technology weave a high-tension dynamic network, intertwining flow and control, the human and the non-human."
    },
    images: [
      "https://i.postimg.cc/pXjRhbPz/DSC08640-2(1).jpg",
      "https://i.postimg.cc/7PMwgCbq/DSC08533-2(1).jpg",
      "https://i.postimg.cc/V6NzdJN5/DSC08523-2(1).jpg",
      "https://i.postimg.cc/7h2820r3/DSC08628-2(1).jpg",
      "https://i.postimg.cc/kXPXyXYq/DSC08537-2(1).jpg",
      "https://i.postimg.cc/6qYjTQyn/DSC08603-2(1).jpg",
      "https://i.postimg.cc/DzLxL68D/DSC08525-2(1).jpg",
      "https://i.postimg.cc/BbQNWGM6/DSC08614-2(1).jpg",
      "https://i.postimg.cc/MKL5LNRM/DSC08550-2(1).jpg",
      "https://i.postimg.cc/C5zDHMcM/DSC08710-2(1).jpg",
      "https://i.postimg.cc/bw6fQ34w/DSC08718-2(1).jpg"
    ],
    imagesGroup2: [
      "https://i.postimg.cc/rwW1PmM3/DSC08543-2(1).jpg",
      "https://i.postimg.cc/RFPKHJLq/DSC08658-2(1).jpg",
      "https://i.postimg.cc/3Jzj1p5T/DSC08555-2(1).jpg",
      "https://i.postimg.cc/WpH0pr4S/DSC08554-2(1).jpg"
    ],
  },
  {
    id: 2,
    title: { zh: "吻上触腕", en: "Kiss Upon the Tentacle" },
    year: "2025",
    materials: { 
      zh: "不锈钢", 
      en: "Stainless steel" 
    },
    dimensions: { zh: "50 × 40 × 160 cm，40 × 10 × 200 cm", en: "50 × 40 × 160 cm; 40 × 10 × 200 cm" },
    description: {
      zh: "由不锈钢制成的巨型诱捕器高悬于空间之中，金属触腕般缠绕交织，既带有柔软的生命感，又散发着冰冷的质地。在勾出冷光的鱼钩之间，潜伏着技术协议中危险与美之间的张力。这些结构编织出一个感知陷阱，观者在靠近时仿佛进入鱿鱼的视野，坠入深海的感官漩涡。作品将巨大的体量转化为空间的震慑力量，在机械与情欲之间，折射出人类与欲望的相似性与纠缠。",
      en: "Giant traps made of stainless steel hang high in the space, with metallic tentacles entwining and interlacing, possessing both a sense of soft vitality and a cold texture. Between the fishhooks that catch the cold light lurks the tension between danger and beauty within technical protocols. These structures weave a perceptual trap; as viewers approach, they seem to enter the squid's perspective, falling into a sensory vortex of the deep sea. The work transforms massive volume into a daunting force within the space, reflecting the similarities and entanglements between humanity and desire, situated between the mechanical and the erotic."
    },
    images: [
      "https://i.postimg.cc/9F71GhQ2/DSC08564-2(1).jpg",
      "https://i.postimg.cc/nhx9R1z1/DSC08690-2(1).jpg",
      "https://i.postimg.cc/mrDDJpG3/DSC08685-2(1).jpg",
      "https://i.postimg.cc/7LfHmCg9/DSC08687-2(1).jpg",
      "https://i.postimg.cc/4x3sxKFg/DSC08566-2(1).jpg",
      "https://i.postimg.cc/j5MhKFW2/DSC08692-2(1).jpg"
    ],
  },
  {
    id: 3,
    title: { zh: "跳跃在神经末梢的极光", en: "Aurora Leaping on Nerve Endings" },
    year: "2025",
    materials: { 
      zh: "影像、南音音乐、透明树脂、弹性氨纶布、定制伸缩往复机", 
      en: "Video, Nanyin music, transparent resin, elastic spandex cloth, custom telescopic reciprocating machine" 
    },
    dimensions: { zh: "5×12m，可变", en: "5×12m, Variable" },
    description: {
      zh: "《跳跃在神经末梢的极光》是一件特定场域的光影互动装置。巨幅幕布与泉州海港的海面同步摇曳，微光悬浮、音频闪烁，气味与触觉联动，构筑出一个感知陷阱。\n\n作品通过光影装置与南音唱词，徐徐展开一个发生在中国东南沿海渔村的虚构故事：盛夏夜晚，渔业诱捕灯点亮沉静的海面，少女逐渐靠近绿光，最终沉入水下，与非生物产生通感。故事中的诱捕灯既是古老智慧与现代技术交织的产物，也揭示了人类与非人生命之间感官机制与媒介的深层关联。千百艘渔船的灯光在卫星图像中化为绿色星辰，被戏称为“人造极光”。这种景象不仅暗示了生态掠夺的现实，也形成了感知制度中的美学陷阱——鱿鱼因趋光本能被吸引，人类同样被技术与影像之光所俘获。\n\n装置将这一经验转译为空间体验：绿色的“人造极光”影像投射在拟态岩石与巨型透明“生物皮肤”之上；算法模拟的鱿鱼神经色素细胞异常放电，形成动态的闪烁。柔软的面料在电机驱动下缓慢呼吸，附着诱惑性的依兰香气，如同巨大生物般邀请观者靠近与触摸，呼应远方的海面与月光。",
      en: "'Aurora Leaping on Nerve Endings' is a site-specific light and shadow interactive installation. A giant curtain sways in synchronization with the sea surface of Quanzhou Harbor; faint lights hover, audio flickers, and scent and touch are linked to construct a perceptual trap.\n\nThrough light installations and Nanyin lyrics, the work slowly unfolds a fictional story set in a fishing village on the southeast coast of China: On a midsummer night, fishing trap lights illuminate the calm sea. A young girl gradually approaches the green light and eventually sinks underwater, developing synesthesia with non-biological entities. The trap lights in the story are products of both ancient wisdom and modern technology, revealing the deep connection between sensory mechanisms and media between humans and non-human life. The lights of thousands of fishing boats turn into green stars in satellite images, jokingly called 'man-made auroras.' This sight not only hints at the reality of ecological plunder but also forms an aesthetic trap within the perceptual system—squids are attracted by their phototactic instinct, and humans are similarly captured by the light of technology and images.\n\nThe installation translates this experience into a spatial one: green 'man-made aurora' images are projected onto mimetic rocks and giant transparent 'biological skins'; algorithmically simulated squid nerve pigment cells discharge abnormally, creating dynamic flickers. The soft fabric breathes slowly driven by motors, attached with the seductive scent of ylang-ylang, inviting viewers to approach and touch like a giant creature, echoing the distant sea surface and moonlight."
    },
    images: [
      "https://i.postimg.cc/Y0X4fFFS/DSC08785-2.jpg",
      "https://i.postimg.cc/m2mhjWvD/DSC08853-2(1).jpg",
      "https://i.postimg.cc/RZwszzk3/DSC08757-2(1).jpg",
      "https://i.postimg.cc/bNp2LTdt/DSC08766-2(1).jpg",
      "https://i.postimg.cc/xdwXmGWK/DSC08783-2(1).jpg"
    ],
    video: "/input_file_0.mp4",
  }
];

const ARTISTS_CV = [
  {
    name: { zh: "任若溪", en: "Ren Ruoxi" },
    image: "https://i.postimg.cc/8Cyq26jk/333333.png",
    contact: {
      email: "roxieren1997@gmail.com",
      instagram: "loverroxieren"
    },
    practice: {
      zh: "任若溪，艺术家，现⼯作⽣活于上海。她的创作包括交互装置、绘画、⼈⼯智能艺术、影像、⾏为等媒介。她以数字和物理媒介为语⾔，诗意地探寻⼈类世中那些被忽视的“超对象”与⽆形系统。她的⼯作通过溶解⼈类与⾮⼈类、感知与技术之间的边界，旨在召唤⼀种超越⽇常经验的感官觉醒。作品经常涉及赛博⼥性主义，万物有灵论等主题。",
      en: "Ren Ruoxi is an artist currently living and working in Shanghai. Her creative practice spans interactive installation, painting, AI art, video, and performance. Using digital and physical media as her language, she poetically explores the overlooked 'hyperobjects' and invisible systems within the Anthropocene. Her work aims to dissolve the boundaries between human and non-human, perception and technology, summoning a sensory awakening that transcends everyday experience. Her themes often involve cyberfeminism and animism."
    },
    education: [
      { year: "2024", detail: { zh: "中央美术学院雕塑系客座教师, 中央美术学院", en: "Visiting Lecturer, Central Academy of Fine Arts, Department of Sculpture" } },
      { year: "2021", detail: { zh: "研究生, 伦敦艺术大学, 交互设计艺术", en: "MA, University of the Arts London, Interaction Design Arts" } },
      { year: "2019", detail: { zh: "本科, 清华大学美术学院", en: "BFA, Tsinghua Academy of Fine Arts" } }
    ],
    exhibitions: [
      { year: "2025", detail: { zh: "鲸歌，在太阳的弧线上，圆与森林艺术空间，上海", en: "Whale Song, on the Arc of the Sun, O Garden & Forest Art Space, Shanghai" } },
      { year: "", detail: { zh: "出神之境，第二十四届上海国际艺术节 外滩·老市府，上海", en: "The Trance, The 24th China Shanghai International Arts Festival, The Bund · Old Municipal Hall, Shanghai" } },
      { year: "", detail: { zh: "拟饵之吻，浮石隐地 - 洄游展厅，泉州", en: "Lure's Kiss, Fushi Hidden Land - Migration Gallery, Quanzhou" } },
      { year: "", detail: { zh: "腔调，素画廊 Sukie gallery，上海", en: "Accent, Sukie Gallery, Shanghai" } },
      { year: "", detail: { zh: "第三站：流动桌，月台：香格纳西岸中环，上海", en: "Stop 3: Floating Table, Platform: ShanghART West Bund, Shanghai" } },
      { year: "2024", detail: { zh: "新世纪全体新论，汉雅轩画廊，香港", en: "New Century Whole New Theory, Hanart TZ Gallery, Hong Kong" } },
      { year: "", detail: { zh: "双个展：捕猎灵晕，Dose画廊，上海", en: "Dual Solo Exhibition: Aura Hunter, Dose Gallery, Shanghai" } },
      { year: "", detail: { zh: "灵性的存在 II 越过痕迹的光，鹦鹉空间 The Parrot，上海", en: "Spiritual Being II: Light Beyond the Traces, The Parrot Space, Shanghai" } },
      { year: "2023", detail: { zh: "摩登天使，沪申画廊，上海", en: "Modern Angels, SGA, Shanghai" } },
      { year: "", detail: { zh: "她山之石，嘉德艺术中心，北京", en: "Stones from Other Mountains, Guardian Art Center, Beijing" } },
      { year: "", detail: { zh: "南京国际艺术博览会 UNI-NAFI", en: "Uni-NAFI, Nanjing Art Fair International, Nanjing" } },
      { year: "", detail: { zh: "油罐玩家艺术节，油罐艺术中心，上海", en: "Tank Art Festival, TANK Shanghai, Shanghai" } },
      { year: "", detail: { zh: "物种之歌 Balled of species，theothersartfair, 意大利", en: "Ballad of species, The Others Art Fair, Italy" } },
      { year: "2022", detail: { zh: "亚洲加密艺术周 CRYPTO ART WEEK ASIA，新加坡", en: "CRYPTO ART WEEK ASIA, Singapore" } },
      { year: "", detail: { zh: "油罐玩家艺术节，油罐艺术中心，上海", en: "Oil Tank Player Art Festival, Oil Tank Art Center, Shanghai" } },
      { year: "", detail: { zh: "梅西耶当代艺术展，Messier 31", en: "Messier Contemporary Art Exhibition, Messier 31" } },
      { year: "", detail: { zh: "超临界态，石佛艺术公社，郑州", en: "Supercritical State, Stone Buddha Art Commune, Zhengzhou" } },
      { year: "", detail: { zh: "自己的房间 A Room of One’s Own，Safehouse Art，伦敦", en: "A Room of One's Own, Safehouse Art, London" } },
      { year: "2021", detail: { zh: "USB多端口连接展，没顶画廊，上海", en: "USB Multi-port Connection Exhibition, MadeIn Gallery, Shanghai" } },
      { year: "", detail: { zh: "双个展：明日桃核，野生艺术节，深圳", en: "Dual Exhibition: Tomorrow's Peach Core, Wild Art Festival, Shenzhen" } },
      { year: "", detail: { zh: "无刻无不可，外滩金融中心云美术馆，上海", en: "Infinite and Inevitable, Shanghai Bund Financial Center Cloud Art Museum, Shanghai" } },
      { year: "", detail: { zh: "赛博时代下的浪漫主义，Joli Art，深圳", en: "Romanticism in the Cyber Age, Joli Art, Shenzhen" } },
      { year: "", detail: { zh: "白T计划2021慈善拍卖，库兹艺术中心，上海", en: "White T Project 2021 Charity Auction, CouttsArt Center, Shanghai" } },
      { year: "", detail: { zh: "一个盒子ECO·BOX慈善展，YCJ艺术俱乐部，北京", en: "ECO-BOX Charity Exhibition, YCJ Art Club, Beijing" } },
      { year: "2020", detail: { zh: "跨越身份的镜子迷宫：身体、灵魂和时间，无空间，线上VR", en: "Mirror Maze Across Identities: Body, Soul, and Time, NO SPACE, Online VR" } },
      { year: "", detail: { zh: "ARS电子艺术节，德国", en: "ARS Electronica Festival, Germany" } },
      { year: "", detail: { zh: "THE EYE，V&A博物馆，伦敦", en: "THE EYE, V&A Museum, London" } },
      { year: "", detail: { zh: "金鱼 Golden Fish，The Cave洞穴美术馆，伦敦", en: "Gold Fish, The Cave Art Gallery, London" } }
    ],
    residency: [
      { year: "2025", detail: { zh: "拟饵之吻，福师隐地 / 反流画廊，泉州", en: "Lure's Kiss, Fushi Hidden Land / Reflux Gallery, Quanzhou" } },
      { year: "2023", detail: { zh: "NOVA 项目，佛山，广东", en: "NOVA Project, Foshan, Guangdong" } }
    ]
  },
  {
    name: { zh: "薛珺", en: "Xue Jun" },
    image: "https://i.postimg.cc/hjj2TZ4L/WPS-tu-pian-(1).png",
    contact: {
      email: "junxue0913@163.com",
      instagram: "xuejune0913",
      phone: "19890500562"
    },
    practice: {
      zh: "艺术家、教育工作者。出生于福建福州，现生活、工作于上海。薛珺的实践聚焦于嗅觉实验、感官民族志、装置、影像与行为，致力于探索气味作为一种潜在物质的感知维度与叙事可能。她通过对气味在不同材料形态中的转化、渗透与互动的持续研究，探测身体、记忆与环境之间隐秘而复杂的关联。\n\n在她的创作中，气味既是一种感官媒介，也是一种关于消逝与再生的表达方式。她试图借由嗅觉经验，捕捉那些游移于物质与精神之间、难以被直接看见却真实存在的叙事力量，并由此唤起对日常感知结构更细微的重新认识。其作品曾展出于上海西岸艺术中心、The Holy Art Gallery、Gallery NAT、苏州霓美术馆等机构，并获伦敦当代艺术评审展最佳交互金奖。",
      en: "Artist and educator. Born in Fuzhou, Fujian, Xue Jun currently lives and works in Shanghai. Her practice focuses on olfactory experiments, sensory ethnography, installation, video, and performance, aiming to explore the perceptual dimensions and narrative possibilities of scent as a latent material. Through continuous research on the transformation, infiltration, and interaction of scent across different material forms, she investigates the hidden and complex connections between the body, memory, and the environment.\n\nIn her creations, scent is both a sensory medium and an expression of disappearance and regeneration. She attempts to capture, through olfactory experience, the narrative forces that drift between the material and the spiritual—forces that are difficult to see directly but exist truly—and thereby evokes a more nuanced reimagining of daily perceptual structures. Her works have been exhibited at institutions such as the West Bund Art Center in Shanghai, The Holy Art Gallery, Gallery NAT, and the Suzhou Ni Art Museum, and she was awarded the Best Interaction Gold Award at the London Contemporary Art Review Exhibition."
    },
    education: [
      { year: "2013-2017", detail: { zh: "跨媒体专业 西安美术学院", en: "BA, Xi'an Academy of Fine Arts (Intermedia Art)" } },
      { year: "2019-2020", detail: { zh: "美术-绘画(Fine art-Drawing) 伦敦艺术大学坎伯韦尔艺术学院", en: "MA Fine Art: Drawing, Camberwell College of Arts, University of the Arts London" } }
    ],
    exhibitions: [
      { year: "2025.07", detail: { zh: "“遗失的视界”——2025伦敦当代艺术评审展，最佳交互金奖，Gallery NAT，伦敦，英国", en: "“Lost Horizons” - 2025 London Contemporary Art Review Exhibition, Best Interaction Gold Award, Gallery NAT, London, UK" } },
      { year: "2024.10", detail: { zh: "共感之境：五感与世界的共鸣，西岸艺术中心 N 馆，上海，中国", en: "Realm of Synesthesia: Resonance of Five Senses and the World, West Bund Art Center Hall N, Shanghai, China" } },
      { year: "2024.09", detail: { zh: "古石回响，福州，中国", en: "Echoes of Ancient Stones, Fuzhou, China" } },
      { year: "2023.07", detail: { zh: "第二届乡村艺术史，占东美术馆，西安，中国", en: "The 2nd Rural Art History, Zhandong Art Museum, Xi'an, China" } },
      { year: "2023.06", detail: { zh: "第五届关中忙罢艺术节，西安，中国", en: "The 5th Guanzhong Mangba Arts Festival, Xi'an, China" } },
      { year: "2023.04", detail: { zh: "消逝的边界，原自艺术空间，成都，中国", en: "Vanishing Boundaries, Yuanzi Art Space, Chengdu, China" } },
      { year: "2023.03", detail: { zh: "终端，半径画廊，西安，中国", en: "Terminal, Radius Gallery, Xi'an, China" } },
      { year: "2022.09", detail: { zh: "南京慢城山花大地艺术节，南京，中国", en: "Nanjing Slow City Mountain Flower Land Art Festival, Nanjing, China" } },
      { year: "2022.09", detail: { zh: "Plethora，The Holy Art Gallery，伦敦，英国", en: "Plethora, The Holy Art Gallery, London, UK" } },
      { year: "2020.10", detail: { zh: "POP Show，Camberwell Space，伦敦，英国", en: "POP Show, Camberwell Space, London, UK" } },
      { year: "2020.08", detail: { zh: "Reparaciones Circulares: The Long Game of Patience，La Pan Gallery，圣地亚哥，智利", en: "Reparaciones Circulares: The Long Game of Patience, La Pan Gallery, Santiago, Chile" } },
      { year: "2020.04", detail: { zh: "漫反射，101 艺术空间，郑州，中国", en: "Diffuse Reflection, 101 Art Space, Zhengzhou, China" } },
      { year: "2020.03", detail: { zh: "Goldfish，Cave Gallery，伦敦，英国", en: "Goldfish, Cave Gallery, London, UK" } }
    ],
    residency: [
      { year: "2026", detail: { zh: "苏州霓美术馆YOUNG计划，苏州，中国", en: "Suzhou Ni Art Museum YOUNG Project, Suzhou, China" } },
      { year: "2025", detail: { zh: "拟饵之吻，浮世文旅，徊流画廊，泉州", en: "Lure's Kiss, Fushi Cultural Tourism, Reflux Gallery, Quanzhou" } },
      { year: "2024", detail: { zh: "古石回响：海峡青年艺术驻地计划，福州，中国", en: "Echoes of Ancient Stones: Cross-Strait Youth Art Residency Program, Fuzhou, China" } },
      { year: "2023", detail: { zh: "第二届乡村艺术史，占东美术馆，西安，中国", en: "The 2nd Rural Art History, Zhandong Art Museum, Xi'an, China" } },
      { year: "2023", detail: { zh: "消逝的边界，原自艺术空间，成都，中国", en: "Vanishing Boundaries, Yuanzi Art Space, Chengdu, China" } },
      { year: "2022", detail: { zh: "南京慢城山花大地艺术节，南京，中国", en: "Nanjing Slow City Mountain Flower Land Art Festival, Nanjing, China" } }
    ]
  }
];

const ARTIST_DUO = {
  name: { zh: "任若溪 × 薛珺", en: "Ruoxi Ren × Jun Xue" },
  image: "https://i.postimg.cc/8Cz4vVr9/he-ying.jpg",
  practice: {
    zh: "任若溪 × 薛珺 是一个致力于探索数字系统与生物感官交织关系的艺术组合。组合由人工智能设计师、艺术家任若溪与嗅觉艺术家、教育者薛珺组成。\n\n两者的合作立足于技术逻辑与感官物质的深度共生：任若溪提供基于人工智能、交互系统与无形架构的逻辑支撑；薛珺则以感官民族志为路径，介入嗅觉实验、材料转化与身体经验。\n\n在共同实践中，她们通过影像、装置、气味与行为等多重媒介，解构技术范式对自然生态的重塑。在项目《The Lure》中，两人构建了一个关于“海洋湿性存在”的感知现场，通过算法逻辑对感官叙事的驱动，质询人类与非人世界之间不断生成的复杂关联。",
    en: "Ruoxi Ren × Jun Xue is a collaborative duo investigating the intersection of digital systems and biological senses. The duo comprises AI designer and artist Ruoxi Ren and olfactory artist and educator Jun Xue.\n\nTheir practice is defined by a methodological synthesis of technological logic and sensory materiality. Ren provides the structural framework based on AI, interactive systems, and invisible architectures, while Xue integrates olfactory experimentation, material transformation, and bodily experience through sensory ethnography.\n\nIn their joint projects, they utilize video, installation, scent, and performance to deconstruct the reshaping of ecology by technological paradigms. In their project The Lure, the duo constructs a perceptive site centered on \"marine wetness,\" utilizing algorithmic logic to drive sensory narratives and interrogating the evolving entanglements between human and non-human worlds."
  }
};

const INDEX_FLOATING_ITEMS = [
  { projectId: 1, src: "https://i.postimg.cc/QNJfJ33h/DSC08640-2(1).jpg", top: "20%", left: "15%", size: "w-40 md:w-[20rem]", speed: 0.03, delay: 0 },
  { projectId: 2, src: "https://i.postimg.cc/YSQ626r6/DSC08564-2(1).jpg", top: "25%", left: "65%", size: "w-36 md:w-[18rem]", speed: 0.02, delay: 0.4 },
  { projectId: 3, src: "https://i.postimg.cc/4NFbW421/DSC08785-2.jpg", top: "55%", left: "45%", size: "w-48 md:w-[24rem]", speed: 0.04, delay: 0.8 },
];

export default function App() {
  const [view, setView] = useState<View>("index");
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [lang, setLang] = useState<Language>("zh");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredIndexItem, setHoveredIndexItem] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [view, selectedProjectId]);

  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  const allProjectImages = selectedProject 
    ? [...selectedProject.images, ...(selectedProject.imagesGroup2 || [])]
    : [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allProjectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allProjectImages.length) % allProjectImages.length);
  };

  return (
    <div className="min-h-screen bg-bg text-fg font-sans selection:bg-fg selection:text-bg relative overflow-x-hidden">
      {/* Subtle Gradient Background Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      </div>

      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-start">
        <div className="flex flex-col">
          {view === "index" && (
            <button 
              onClick={() => setView("info")}
              className="hover:opacity-80 transition-opacity text-left"
            >
              <h1 className="text-[18px] font-medium text-white uppercase tracking-[0.1em]">
                Ren Ruoxi & Xue Jun
              </h1>
            </button>
          )}
          {(view === "works" || view === "project") && (
            <h2 className="text-[18px] font-bold uppercase tracking-[0.2em] text-fg">
              {t("拟饵之吻", "The Lure")}
            </h2>
          )}
        </div>
        
        <div className="flex items-center gap-8">
          <nav className="flex gap-6 text-[16px] font-medium uppercase tracking-[0.05em]">
            <button onClick={() => setView("index")} className={`transition-all duration-300 ${view === "index" ? "text-white" : "text-white/40 hover:text-white"}`}>{t("索引", "Index")}</button>
            <button onClick={() => setView("works")} className={`transition-all duration-300 ${view === "works" || view === "project" ? "text-white" : "text-white/40 hover:text-white"}`}>{t("作品", "Works")}</button>
            <button onClick={() => setView("info")} className={`transition-all duration-300 ${view === "info" ? "text-white" : "text-white/40 hover:text-white"}`}>{t("信息", "Info")}</button>
          </nav>
          <div className="flex items-center gap-3 text-[13px] font-normal ml-4">
            <button onClick={() => setLang("zh")} className={`transition-all ${lang === "zh" ? "text-white font-medium" : "text-white/30 hover:text-white"}`}>ZH</button>
            <span className="text-white/10 text-[10px]">/</span>
            <button onClick={() => setLang("en")} className={`transition-all ${lang === "en" ? "text-white font-medium" : "text-white/30 hover:text-white"}`}>EN</button>
          </div>
        </div>
      </header>

      <main className="pt-24 min-h-[calc(100vh-100px)] relative z-10">
        <AnimatePresence mode="wait">
          {view === "index" && (
            <motion.section
              key="index-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-[calc(100vh-112px)] flex flex-col justify-end p-12"
            >
              {/* Background Image for Index */}
              <div className="fixed inset-0 z-0 pointer-events-none">
                <img 
                  src="https://i.postimg.cc/tT0Lrmbg/1776225198635-1.jpg" 
                  alt="Background" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scattered Floating "Fishing Boat" Images (Hot Zones) */}
              <div className="fixed inset-0 z-10 pointer-events-auto overflow-hidden">
                {INDEX_FLOATING_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredIndexItem(idx)}
                    onMouseLeave={() => setHoveredIndexItem(null)}
                    onClick={() => {
                      setSelectedProjectId(item.projectId);
                      setView("project");
                    }}
                    className={`absolute ${item.size} aspect-[4/3] cursor-pointer z-20`}
                    style={{ 
                      top: item.top, 
                      left: item.left,
                      transform: `translate(${(mousePos.x - window.innerWidth / 2) * item.speed}px, ${(mousePos.y - window.innerHeight / 2) * item.speed}px)`
                    }}
                  >
                    <AnimatePresence>
                      {hoveredIndexItem === idx && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 10 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="w-full h-full shadow-2xl border border-white/10 overflow-hidden"
                        >
                          <motion.div
                            animate={{
                              y: [0, -10, 0],
                              rotate: [0, 0.5, 0, -0.5, 0]
                            }}
                            transition={{
                              duration: 8 + idx,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="w-full h-full"
                          >
                            <img 
                              src={item.src} 
                              alt={`Project ${item.projectId}`}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="relative z-10">
                {/* Artist name moved to top-left header */}
              </div>
            </motion.section>
          )}

          {view === "works" && (
            <motion.section
              key="works-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative min-h-[calc(100vh-112px)] flex flex-col"
            >
              {/* Background Image for Works */}
              <div className="fixed inset-0 z-0 pointer-events-none">
                <img 
                  src="https://i.postimg.cc/MHWK09tT/DSC08837-2(1).jpg" 
                  alt="Works Background" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="relative z-10 flex-grow flex flex-col justify-center items-start md:pl-24 gap-4 py-12">
                {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative cursor-crosshair w-full md:w-auto"
                >
                  <div 
                    onClick={() => {
                      setSelectedProjectId(project.id);
                      setView("project");
                    }}
                    className="px-4 py-4 md:py-6 flex justify-start"
                  >
                    <div className="flex items-center gap-4 group-hover:translate-x-4 transition-transform duration-500">
                      <h2 className="text-[24px] font-bold uppercase tracking-[-0.02em] transition-all duration-700 ease-in-out">
                        {t(project.title.zh, project.title.en)}
                      </h2>
                      <span className="text-[16px] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">→</span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          x: 0,
                        }}
                        exit={{ opacity: 0, x: 20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="fixed top-1/2 right-[12%] -translate-y-1/2 pointer-events-none z-40 w-[40vw] md:w-[18vw] aspect-[3/4] overflow-hidden shadow-2xl border border-white/10"
                      >
                        <img 
                          src={project.images[0]} 
                          alt={project.title.en}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              </div>
            </motion.section>
          )}

          {view === "project" && selectedProject && (
            <motion.section
              key={`project-${selectedProject.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-4 py-8 max-w-5xl mx-auto"
            >
              <div className="flex flex-col gap-8">
                {/* Main Media (Video or Image) - Hidden for all projects per user request */}
                {false && (
                  <div className="w-full flex justify-center">
                    <div className="w-full md:w-2/3 bg-fg/5 overflow-hidden shadow-xl">
                      {selectedProject.video ? (
                        <video 
                          src={selectedProject.video} 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          className="w-full h-auto"
                        />
                      ) : (
                        <img 
                          src={selectedProject.images[0]} 
                          alt={selectedProject.title.en}
                          className="w-full h-auto"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left: Metadata */}
                  <div className="md:col-span-4 flex flex-col gap-6">
                    <h1 className="text-[28px] font-serif italic tracking-tight leading-tight mb-2">
                      {t(selectedProject.title.zh, selectedProject.title.en)}
                    </h1>
                    
                    <div className="flex flex-col gap-4 text-[14px] font-serif tracking-[0.02em]">
                      <div className="flex flex-col gap-1">
                        <span className="text-[12px] font-serif font-bold uppercase tracking-[0.05em] opacity-40">{t("材料", "Medium")}</span>
                        <span className="opacity-90">{t(selectedProject.materials.zh, selectedProject.materials.en)}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[12px] font-serif font-bold uppercase tracking-[0.05em] opacity-40">{t("尺寸", "Dimensions")}</span>
                        <span className="opacity-90">{t(selectedProject.dimensions.zh, selectedProject.dimensions.en)}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[12px] font-serif font-bold uppercase tracking-[0.05em] opacity-40">{t("年份", "Year")}</span>
                        <span className="opacity-90">{selectedProject.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Description */}
                  <div className="md:col-span-8">
                    <div className="text-[14px] font-serif leading-[1.7] tracking-[0.02em] whitespace-pre-wrap opacity-90">
                      {t(selectedProject.description.zh, selectedProject.description.en)}
                    </div>
                  </div>
                </div>

                {/* Video Embed for Project 3 */}
                {selectedProject.id === 3 && (
                  <div className="w-full py-12 border-t border-fg/5">
                    <div className="relative w-full aspect-video shadow-2xl">
                      <iframe
                        src="https://www.youtube.com/embed/X1LnvMunCu0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                )}

                {/* Image Gallery */}
                {allProjectImages.length > 0 && (
                  <div className="w-full pt-8 border-t border-fg/5">
                    {/* Vertical Editorial Layout for All Projects */}
                    <div className="flex flex-col gap-24 py-12">
                      {allProjectImages.map((img, idx) => {
                        const isLast = idx === allProjectImages.length - 1;
                        // Create a staggered editorial layout
                        let containerClass = "w-full flex justify-center";
                        let imgClass = "w-full md:w-[55%] max-h-[80vh] h-auto object-contain shadow-lg";
                        
                        if (isLast) {
                          containerClass = "w-full flex justify-center";
                          imgClass = "w-full md:w-[40%] max-h-[70vh] h-auto object-contain shadow-lg";
                        } else if (idx % 3 === 1) {
                          containerClass = "w-full flex justify-start";
                          imgClass = "w-full md:w-[45%] max-h-[75vh] h-auto object-contain shadow-lg";
                        } else if (idx % 3 === 2) {
                          containerClass = "w-full flex justify-end";
                          imgClass = "w-full md:w-[45%] max-h-[75vh] h-auto object-contain shadow-lg";
                        }

                        return (
                          <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={containerClass}
                          >
                            <img 
                              src={img} 
                              alt={`${selectedProject.title.en} detail ${idx + 1}`}
                              className={imgClass}
                              referrerPolicy="no-referrer"
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Full Width Footer Image */}
                {selectedProject.fullWidthImage && (
                  <div className="w-full pt-12">
                    <img 
                      src={selectedProject.fullWidthImage} 
                      alt={`${selectedProject.title.en} full view`}
                      className="w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {view === "info" && (
            <motion.section
              key="info-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-4 py-0 max-w-5xl mx-auto relative"
            >
              <div className="flex flex-col gap-24">
                {/* Artist Duo Section */}
                <div className="pt-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                  {/* Left: Joint Photo (Grayscale) */}
                  <div className="md:col-span-7 md:mt-[122px]">
                    <img 
                      src={ARTIST_DUO.image} 
                      alt={ARTIST_DUO.name.en} 
                      className="w-full h-auto object-contain rounded-sm filter grayscale shadow-2xl contrast-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Right: Duo Title and Bio */}
                  <div className="md:col-span-5 flex flex-col gap-10 md:pt-4">
                    <div className="flex flex-col gap-4">
                      <h2 className="text-[13px] font-serif font-bold uppercase tracking-[0.1em]">
                        {t("艺术家组合", "Artist Duo")}
                      </h2>
                      <h1 className="text-[28px] font-serif tracking-tight leading-tight">
                        {t(ARTIST_DUO.name.zh, ARTIST_DUO.name.en)}
                      </h1>
                    </div>
                    <div className="flex flex-col gap-6">
                      <p className="text-[14px] font-serif italic leading-[1.8] opacity-80 text-white/90 whitespace-pre-wrap">
                        {t(ARTIST_DUO.practice.zh, ARTIST_DUO.practice.en)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Individual CVs */}
                <div className="flex flex-col gap-24 pt-12 border-t border-white/10">
                  {ARTISTS_CV.map((artist, artistIdx) => (
                    <div key={artistIdx} className="flex flex-col gap-12 pt-0 relative">
                      {artistIdx === 0 && (
                        <div className="mb-8">
                          <h2 className="text-[13px] font-serif font-bold uppercase tracking-[0.1em]">
                            {t("艺术家简介", "Artist Profile")}
                          </h2>
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                      {/* Left: Image and Name/Contact */}
                      <div className="md:col-span-4 flex flex-col gap-6">
                        <img 
                          src={artist.image} 
                          alt={artist.name.en} 
                          className="w-full transition-all duration-500 rounded-sm"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex flex-col gap-2">
                          <h2 className="text-[28px] font-serif tracking-tight">{t(artist.name.zh, artist.name.en)}</h2>
                          <div className="flex flex-col gap-1 text-[11px] font-sans font-medium uppercase opacity-60 tracking-[0.1em]">
                            <span>Email: {artist.contact.email}</span>
                            <span>Instagram: @{artist.contact.instagram}</span>
                            {artist.contact.phone && (
                              <span>Wechat/Phone: {artist.contact.phone}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right: CV Details */}
                      <div className="md:col-span-8 flex flex-col gap-12">
                        {artist.practice && (
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-12">
                              <p className="text-[14px] font-serif italic leading-[1.7] opacity-70 text-white whitespace-pre-wrap">
                                {t(artist.practice.zh, artist.practice.en)}
                              </p>
                            </div>
                          </div>
                        )}

                        {[
                          { title: t("教育", "Education"), data: artist.education, id: "edu" },
                          { title: t("展览", "Selected Exhibitions"), data: artist.exhibitions, id: "exh" },
                          { title: t("驻留", "Residency"), data: artist.residency, id: "res" }
                        ].map((section, idx) => (
                          <div key={idx} id={`artist-${artistIdx}-${section.id}`} className="flex flex-col gap-8 scroll-mt-48">
                            <div className="border-b border-white/10 pb-2">
                              <h3 className="text-[14px] font-serif font-bold uppercase tracking-[0.05em]">{section.title}</h3>
                            </div>
                            <div className="flex flex-col gap-6">
                              {section.data.map((item, i) => (
                                <div key={i} className="flex gap-4 items-start group">
                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                                  <div className="grid grid-cols-1 md:grid-cols-12 w-full">
                                    <div className="md:col-span-2 text-[11px] font-sans font-medium opacity-40 tracking-[0.1em]">{item.year}</div>
                                    <div className="md:col-span-10 text-[14px] font-serif leading-[1.5] text-white/80">{t(item.detail.zh, item.detail.en)}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="px-4 py-12 relative z-10">
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-mono uppercase opacity-0">.</span>
          <span className="text-[10px] font-mono uppercase opacity-0">.</span>
        </div>
      </footer>
    </div>
  );
}
