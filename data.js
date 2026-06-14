/**
 * ============================================================
 *  CHUNHUI_WEB — 网站内容配置文件
 *  数据来源：原网站 www.chunhuidoors.com (2026年5月爬取)
 * ============================================================
 */

var SITE_DATA = {

  // ── 公司基本信息 ──────────────────────────────────────────
  company: {
    name: "中山春晖门业有限公司",
    displayName: "中山市春晖门业",
    nameEn: "CHUNHUI DOOR",
    slogan: "春晖门业",
    sloganSub: "实木烤漆门、铝木门、工程门与室内门定制制造商",
    founded: "2012",
    phone: "0760-8820 3678",
    mobile: "13809689692",
    email: "7477461@qq.com",
    secondaryEmail: "Dengsan568@gmail.com",
    address: "广东省中山市五桂山镇龙塘工业大道7号",
    branchAddress: "广东省中山市南区恒美园山仔工业区",
    contactPerson: "司徒春涛",
    wechat: "chunhui_door",
    icp: "粤ICP备2025498719号-1",
  },

  // ── 首页核心数据 ──────────────────────────────────────────
  stats: [
    { number: "2012年", label: "创立时间" },
    { number: "500+", label: "全国合作门店" },
    { number: "188款", label: "产品型号沉淀" },
    { number: "批量", label: "酒店公寓工程配套" },
  ],

  // ── 客户方案入口 ──────────────────────────────────────────
  solutions: [
    {
      audience: "家装客户",
      title: "按空间与预算选择适合的室内门",
      desc: "适合新房装修、旧房翻新、全屋门定制。重点关注颜值、环保、耐用和整体家装搭配。",
      points: ["实木烤漆门", "铝木门", "工程门", "室内门定制"],
      cta: "获取家装建议",
    },
    {
      audience: "工程客户",
      title: "为酒店、公寓、精装项目提供稳定配套",
      desc: "适合批量供货、统一款式、分批交付和项目节点管理。重点关注交期、质量稳定和售后响应。",
      points: ["工程门", "批量供货", "项目配套", "交付排期"],
      cta: "咨询工程配套",
    },
    {
      audience: "经销商 / 装修公司",
      title: "丰富产品系列，支持长期渠道合作",
      desc: "适合区域经销、设计师渠道、装修公司合作。重点关注产品系列、样品支持和长期供货稳定性。",
      points: ["产品图册", "样品支持", "渠道合作", "长期供货"],
      cta: "了解合作方式",
    },
  ],

  // ── 产品分类导航（顶部筛选）─────────────────────────────────
  productCategories: [
    "全部", "实木烤漆门", "铝木门"
  ],

  // ── 首页精选产品（6款）─────────────────────────────────────
  products: [
    {
      id: 1,
      name: "橡木深雕门系列·CHA-97",
      series: "实木烤漆门",
      desc: "进口橡木，深雕工艺，立体感强，彰显高端品味",
      tag: "匠心智造",
      price: "询价定制",
      image: "chanpinzhanshi/kaoqimen/shimukaoqimen/xiangmumen/橡木深雕门系列CHA-97_1.jpg",
      accent: "#5C4A2A",
    },
    {
      id: 2,
      name: "M9系列 同色铝木门",
      series: "铝木门",
      desc: "健康无漆木门，防潮抗变，M9绿色健康板，同色一体化设计",
      tag: "健康环保",
      price: "询价定制",
      image: "chanpinzhanshi/wuqimen/lvmumen/M9系列 同色铝木门·健康无漆木门（防潮抗变 - M9绿色健康板）_1.png",
      accent: "#2A5C3A",
    },
    {
      id: 3,
      name: "平雕门系列·CHA-24",
      series: "实木烤漆门",
      desc: "经典平雕设计，线条简洁流畅，百搭各种家装风格",
      tag: "经典款",
      price: "询价定制",
      image: "chanpinzhanshi/kaoqimen/shimukaoqimen/pingdiaomen/平雕门系列CHA-24_1.jpg",
      accent: "#7A3A1A",
    },
    {
      id: 4,
      name: "玻璃门系列·CHA-B01",
      series: "实木烤漆门",
      desc: "通透玻璃设计，兼顾采光与隔断，适合书房、厨卫等空间",
      tag: "通透采光",
      price: "询价定制",
      image: "chanpinzhanshi/kaoqimen/shimukaoqimen/bolimen/玻璃门系列CHA-B01_1.jpg",
      accent: "#3A5C8B",
    },
    {
      id: 5,
      name: "木皮工艺门系列·CHA-146",
      series: "实木烤漆门",
      desc: "天然木皮饰面，工艺精湛，纹理自然，提升空间质感",
      tag: "自然质感",
      price: "询价定制",
      image: "chanpinzhanshi/kaoqimen/shimukaoqimen/mupigongyimen/木皮工艺门系列CHA-146_1.jpg",
      accent: "#6B4226",
    },
    {
      id: 6,
      name: "时尚白门系列·CHA-176",
      series: "实木烤漆门",
      desc: "纯白简约设计，干净百搭，适合现代简约和北欧风家装",
      tag: "简约百搭",
      price: "询价定制",
      image: "chanpinzhanshi/kaoqimen/shimukaoqimen/shishangbaimen/时尚白门系列CHA-176_1.jpg",
      accent: "#8A8A8A",
    },
  ],

  // ── 全部产品数据（按分类组织）─────────────────────────────
  allProducts: {
    "实木烤漆门": {
      subCategories: {
        "玻璃门": {
          folder: "chanpinzhanshi/kaoqimen/shimukaoqimen/bolimen",
          items: [
            { name: "玻璃门系列CHA-B01" }, { name: "玻璃门系列CHA-B02" }, { name: "玻璃门系列CHA-B03" },
            { name: "玻璃门系列CHA-B04" }, { name: "玻璃门系列CHA-B05" }, { name: "玻璃门系列CHA-B06" },
            { name: "玻璃门系列CHA-B07" }, { name: "玻璃门系列CHA-B08" }, { name: "玻璃门系列CHA-B09" },
            { name: "玻璃门系列CHA-B10" }, { name: "玻璃门系列CHA-B11" }, { name: "玻璃门系列CHA-B12" },
            { name: "玻璃门系列CHA-B13" }, { name: "玻璃门系列CHA-B14" }, { name: "玻璃门系列CHA-B15" },
          ],
        },
        "木皮工艺门": {
          folder: "chanpinzhanshi/kaoqimen/shimukaoqimen/mupigongyimen",
          items: [
            { name: "木皮工艺门系列CHA-119" }, { name: "木皮工艺门系列CHA-120" }, { name: "木皮工艺门系列CHA-121" },
            { name: "木皮工艺门系列CHA-122" }, { name: "木皮工艺门系列CHA-123" }, { name: "木皮工艺门系列CHA-124" },
            { name: "木皮工艺门系列CHA-125" }, { name: "木皮工艺门系列CHA-126" }, { name: "木皮工艺门系列CHA-127" },
            { name: "木皮工艺门系列CHA-128" }, { name: "木皮工艺门系列CHA-129" }, { name: "木皮工艺门系列CHA-130" },
            { name: "木皮工艺门系列CHA-131" }, { name: "木皮工艺门系列CHA-132" }, { name: "木皮工艺门系列CHA-133" },
            { name: "木皮工艺门系列CHA-134" }, { name: "木皮工艺门系列CHA-136" }, { name: "木皮工艺门系列CHA-138" },
            { name: "木皮工艺门系列CHA-139" }, { name: "木皮工艺门系列CHA-140" }, { name: "木皮工艺门系列CHA-141" },
            { name: "木皮工艺门系列CHA-146" }, { name: "木皮工艺门系列CHA-147" }, { name: "木皮工艺门系列CHA-148" },
          ],
        },
        "平雕门": {
          folder: "chanpinzhanshi/kaoqimen/shimukaoqimen/pingdiaomen",
          items: [
            { name: "平雕门系列CHA-01" }, { name: "平雕门系列CHA-02" }, { name: "平雕门系列CHA-03" },
            { name: "平雕门系列CHA-04" }, { name: "平雕门系列CHA-05" }, { name: "平雕门系列CHA-06" },
            { name: "平雕门系列CHA-08" }, { name: "平雕门系列CHA-09" }, { name: "平雕门系列CHA-10" },
            { name: "平雕门系列CHA-11" }, { name: "平雕门系列CHA-12" }, { name: "平雕门系列CHA-13" },
            { name: "平雕门系列CHA-14" }, { name: "平雕门系列CHA-15" }, { name: "平雕门系列CHA-16" },
            { name: "平雕门系列CHA-17" }, { name: "平雕门系列CHA-18" }, { name: "平雕门系列CHA-19" },
            { name: "平雕门系列CHA-20" }, { name: "平雕门系列CHA-21" }, { name: "平雕门系列CHA-22" },
            { name: "平雕门系列CHA-23" }, { name: "平雕门系列CHA-24" }, { name: "平雕门系列CHA-25" },
            { name: "平雕门系列CHA-26" }, { name: "平雕门系列CHA-27" }, { name: "平雕门系列CHA-28" },
            { name: "平雕门系列CHA-29" }, { name: "平雕门系列CHA-30" }, { name: "平雕门系列CHA-31" },
            { name: "平雕门系列CHA-32" }, { name: "平雕门系列CHA-33" }, { name: "平雕门系列CHA-34" },
            { name: "平雕门系列CHA-35" }, { name: "平雕门系列CHA-36" }, { name: "平雕门系列CHA-37" },
            { name: "平雕门系列CHA-38" }, { name: "平雕门系列CHA-39" }, { name: "平雕门系列CHA-40" },
            { name: "平雕门系列CHA-41" }, { name: "平雕门系列CHA-42" }, { name: "平雕门系列CHA-43" },
            { name: "平雕门系列CHA-44" }, { name: "平雕门系列CHA-45" }, { name: "平雕门系列CHA-46" },
            { name: "平雕门系列CHA-47" }, { name: "平雕门系列CHA-48" }, { name: "平雕门系列CHA-49" },
            { name: "平雕门系列CHA-50" }, { name: "平雕门系列CHA-51" }, { name: "平雕门系列CHA-52" },
            { name: "平雕门系列CHA-53" }, { name: "平雕门系列CHA-54" }, { name: "平雕门系列CHA-55" },
            { name: "平雕门系列CHA-56" }, { name: "平雕门系列CHA-57" }, { name: "平雕门系列CHA-58" },
            { name: "平雕门系列CHA-59" }, { name: "平雕门系列CHA-60" }, { name: "平雕门系列CHA-61" },
            { name: "平雕门系列CHA-62" }, { name: "平雕门系列CHA-63" }, { name: "平雕门系列CHA-64" },
            { name: "平雕门系列CHA-65" }, { name: "平雕门系列CHA-66" }, { name: "平雕门系列CHA-67" },
            { name: "平雕门系列CHA-68" }, { name: "平雕门系列CHA-69" }, { name: "平雕门系列CHA-7" },
            { name: "平雕门系列CHA-70" }, { name: "平雕门系列CHA-71" }, { name: "平雕门系列CHA-72" },
            { name: "平雕门系列CHA-73" }, { name: "平雕门系列CHA-74" }, { name: "平雕门系列CHA-75" },
          ],
        },
        "时尚白门": {
          folder: "chanpinzhanshi/kaoqimen/shimukaoqimen/shishangbaimen",
          items: [
            { name: "时尚白门系列CHA-149" }, { name: "时尚白门系列CHA-150" }, { name: "时尚白门系列CHA-151" },
            { name: "时尚白门系列CHA-152" }, { name: "时尚白门系列CHA-153" }, { name: "时尚白门系列CHA-154" },
            { name: "时尚白门系列CHA-155" }, { name: "时尚白门系列CHA-156" }, { name: "时尚白门系列CHA-157" },
            { name: "时尚白门系列CHA-158" }, { name: "时尚白门系列CHA-159" }, { name: "时尚白门系列CHA-160" },
            { name: "时尚白门系列CHA-161" }, { name: "时尚白门系列CHA-162" }, { name: "时尚白门系列CHA-163" },
            { name: "时尚白门系列CHA-164" }, { name: "时尚白门系列CHA-165" }, { name: "时尚白门系列CHA-166" },
            { name: "时尚白门系列CHA-167" }, { name: "时尚白门系列CHA-168" }, { name: "时尚白门系列CHA-169" },
            { name: "时尚白门系列CHA-170" }, { name: "时尚白门系列CHA-171" }, { name: "时尚白门系列CHA-172" },
            { name: "时尚白门系列CHA-173" }, { name: "时尚白门系列CHA-174" }, { name: "时尚白门系列CHA-175" },
            { name: "时尚白门系列CHA-176" }, { name: "时尚白门系列CHA-177" }, { name: "时尚白门系列CHA-178" },
          ],
        },
        "橡木门": {
          folder: "chanpinzhanshi/kaoqimen/shimukaoqimen/xiangmumen",
          items: [
            { name: "橡木池板门系列CHA-100" }, { name: "橡木池板门系列CHA-101" }, { name: "橡木池板门系列CHA-102" },
            { name: "橡木池板门系列CHA-103" }, { name: "橡木池板门系列CHA-104" }, { name: "橡木池板门系列CHA-105" },
            { name: "橡木池板门系列CHA-106" }, { name: "橡木池板门系列CHA-107" }, { name: "橡木池板门系列CHA-108" },
            { name: "橡木池板门系列CHA-109" }, { name: "橡木池板门系列CHA-110" }, { name: "橡木池板门系列CHA-111" },
            { name: "橡木池板门系列CHA-112" }, { name: "橡木池板门系列CHA-113" }, { name: "橡木池板门系列CHA-114" },
            { name: "橡木池板门系列CHA-115" }, { name: "橡木池板门系列CHA-116" }, { name: "橡木池板门系列CHA-117" },
            { name: "橡木池板门系列CHA-118" },
            { name: "橡木深雕门系列CHA-76" }, { name: "橡木深雕门系列CHA-77" }, { name: "橡木深雕门系列CHA-78" },
            { name: "橡木深雕门系列CHA-79" }, { name: "橡木深雕门系列CHA-80" }, { name: "橡木深雕门系列CHA-81" },
            { name: "橡木深雕门系列CHA-82" }, { name: "橡木深雕门系列CHA-83" }, { name: "橡木深雕门系列CHA-84" },
            { name: "橡木深雕门系列CHA-85" }, { name: "橡木深雕门系列CHA-86" }, { name: "橡木深雕门系列CHA-87" },
            { name: "橡木深雕门系列CHA-88" }, { name: "橡木深雕门系列CHA-89" }, { name: "橡木深雕门系列CHA-90" },
            { name: "橡木深雕门系列CHA-91" }, { name: "橡木深雕门系列CHA-92" }, { name: "橡木深雕门系列CHA-93" },
            { name: "橡木深雕门系列CHA-94" }, { name: "橡木深雕门系列CHA-95" }, { name: "橡木深雕门系列CHA-96" },
            { name: "橡木深雕门系列CHA-97" }, { name: "橡木深雕门系列CHA-98" }, { name: "橡木深雕门系列CHA-99" },
          ],
        },
      },
    },
    "铝木门": {
      folder: "chanpinzhanshi/wuqimen/lvmumen",
      items: [
        { name: "M9系列 同色铝木门·健康无漆木门" },
      ],
    },
  },

  // ── 交付流程 ─────────────────────────────────────────────
  process: [
    { step: "01", title: "需求沟通", desc: "确认客户类型、产品系列、空间场景、数量、预算和交付城市。" },
    { step: "02", title: "产品建议", desc: "根据家装、工程、酒店、公寓或经销需求，推荐对应门类和表面工艺。" },
    { step: "03", title: "方案报价", desc: "围绕材质、尺寸、数量、五金配置和交付节奏，形成初步报价参考。" },
    { step: "04", title: "生产排期", desc: "确认订单信息后进入生产与质检流程，保障批量交付稳定。" },
    { step: "05", title: "发货售后", desc: "配合项目节点发货，并提供后续安装、补件、维护等沟通支持。" },
  ],

  // ── 关于我们（guanyuwomen/）──────────────────────────────
  about: {
    title: "2012年创立，专注室内门稳定交付",
    lead: "中山春晖门业有限公司位于广东中山，主营实木烤漆门、铝木门、工程门及室内门定制。",
    content: "我们服务家装业主、酒店公寓工程、经销商和装修公司，重点解决选型、定制、批量供货、交期配合与售后响应问题。",
    image: "ziyuan/images/banner_01.jpg",
    serviceScope: ["实木烤漆门", "铝木门", "工程门", "室内门定制"],
    targetClients: ["家装客户", "工程客户", "酒店公寓", "经销商", "装修公司"],
    quickFacts: [
      { value: "2012年", label: "成立时间", desc: "长期深耕室内门制造" },
      { value: "500+", label: "合作门店", desc: "支持区域渠道与经销合作" },
      { value: "188款", label: "产品型号", desc: "覆盖多风格、多场景选型" },
    ],
    highlights: [
      { icon: "01", title: "产品系列丰富", desc: "从家装室内门到工程门，覆盖不同预算、风格和使用场景" },
      { icon: "02", title: "工厂交付稳定", desc: "围绕材料、工艺、质检、排期和批量供货建立标准流程" },
      { icon: "03", title: "工程配套友好", desc: "适合酒店、公寓、精装项目等统一款式和分批交付需求" },
      { icon: "04", title: "渠道合作直接", desc: "支持经销商、装修公司沟通样品、图册、供货周期和售后" },
    ],
    proofTitle: "从选型到售后的服务支持",
    proofPoints: [
      "按空间、预算与项目需求推荐产品",
      "配合批量项目的生产与交付安排",
      "提供后续补货与售后沟通支持",
    ],
    ctaText: "提交需求，获取产品建议",
    ctaHref: "lianxiwomen/index.html",
    timeline: [
      { year: "2012", event: "春晖门业成立，首条生产线投产" },
      { year: "2014", event: "引进意大利、德国进口先进生产设备" },
      { year: "2018", event: "推出国潮墨影系列，市场反响热烈" },
      { year: "2024", event: "全国加盟门店突破500家，产品远销海外" },
    ],
    scope: [
      { title: "实木烤漆门", desc: "适合更重视质感、造型和高端家居氛围的空间，涵盖平雕门、橡木门、玻璃门、木皮工艺门、时尚白门五大系列。" },
      { title: "铝木门", desc: "兼顾结构稳定、健康无漆和现代空间表达。" },
      { title: "工程门", desc: "面向酒店、公寓、精装项目，重点关注规格统一与交付节奏。" },
      { title: "室内门定制", desc: "按空间、预算与项目需求定制尺寸、颜色与五金配置。" },
    ],
    clients: [
      { title: "家装客户", desc: "提供兼顾颜值、环保、预算、空间搭配与日常耐用的选门建议。" },
      { title: "工程客户", desc: "支持数量、规格、交期、质检与分批交付等项目需求。" },
      { title: "酒店公寓", desc: "支持统一风格、项目节点、后续补货与售后响应。" },
      { title: "经销商", desc: "提供样品、图册、产品系列与长期稳定供货支持。" },
      { title: "装修公司", desc: "配合方案沟通、项目选型与室内门产品配套。" },
    ],
    answers: [
      { q: "春晖门业主要做哪些门？", a: "春晖门业主营实木烤漆门、铝木门、工程门和室内门定制，可覆盖家装、工程、酒店公寓、经销和装修公司配套需求。" },
      { q: "工程项目可以批量配套吗？", a: "可以。工程客户可以提供项目类型、数量、交付城市、风格和预算区间，春晖门业会根据产品系列、工艺配置和交付节点给出初步建议。" },
      { q: "经销商或装修公司适合合作吗？", a: "适合。春晖门业可围绕产品体系、样品、图册、供货周期和售后方式沟通长期合作，帮助渠道客户形成更清晰的销售方案。" },
    ],
    trustStrip: {
      founded: { label: "成立时间", desc: "长期深耕室内门制造" },
      location: { value: "中山", label: "制造基地", desc: "服务华南及全国合作客户" },
    },
  },

  // ── 新闻动态（xinwendongtai/）─────────────────────────────
  news: [
    {
      id: 1,
      date: "2025-05-18",
      category: "保养知识",
      title: "春晖木门丨这些木门保养的细节，你知道吗？",
      summary: "春晖木门教你几招家里木门的保养方法：木门清洁四忌、木门清洁五推荐、木门日常使用维护。为了保持木门表面的光泽度和延长使用寿命，应该定期对木门进行维护保养。",
      image: "xinwendongtai/news_01.jpg",
    },
    {
      id: 2,
      date: "2025-04-22",
      category: "品牌动态",
      title: "春晖木门丨论选对好木门对家居空间的重要性",
      summary: "木门是每个家庭的必备品，木门属于耐用品，最考验选材的优质性，耐用性。春晖木门采用进口木材，通过国标层层检查，反复测试，为您打造高品质家居空间。",
      image: "xinwendongtai/news_02.jpg",
    },
    {
      id: 3,
      date: "2025-03-15",
      category: "品牌动态",
      title: "春晖木门 | 化繁为简，细品美好生活",
      summary: "越少越显高级感。简约而不简单，一个具有格调品质及艺术气息的理想之家。在这个光与生活融合为一的灵韵空间里，优越不言自彰。春晖木门，为美好生活而生。",
      image: "xinwendongtai/news_03.jpg",
    },
  ],

  // ── 新闻案例页：案例展示与内容专题 ─────────────────────────
  newsCategories: ["全部", "品牌动态", "产品知识", "选购指南", "工程案例"],

  caseStudies: [
    {
      id: 1,
      title: "酒店公寓工程门配套",
      type: "工程案例",
      scene: "酒店 / 公寓",
      desc: "面向批量项目，重点关注统一款式、交付节奏、耐用性和后续补件响应。",
      image: "ziyuan/images/banner_03.jpg",
      tags: ["工程门", "批量供货", "交付稳定"],
    },
    {
      id: 2,
      title: "家装全屋室内门定制",
      type: "家装案例",
      scene: "住宅 / 精装",
      desc: "根据空间风格、预算和家庭成员使用习惯，推荐实木烤漆门或铝木门系列。",
      image: "ziyuan/images/banner_01.jpg",
      tags: ["室内门定制", "实木烤漆门", "家装搭配"],
    },
    {
      id: 3,
      title: "经销门店产品展示体系",
      type: "渠道案例",
      scene: "经销 / 装企",
      desc: "提供产品图册、样品展示和主推系列支持，便于门店开展产品介绍与客户沟通。",
      image: "chanpinzhanshi/wuqimen/lvmumen/M9系列 同色铝木门·健康无漆木门（防潮抗变 - M9绿色健康板）_1.png",
      tags: ["经销合作", "样品支持", "产品体系"],
    },
  ],

  contentTopics: [
    { title: "碳晶门适合哪些场景？", desc: "了解碳晶门在耐磨、易打理、工程配套和家装空间中的应用。" },
    { title: "实木烤漆门和铝木门怎么选？", desc: "从材料、表面工艺、预算和风格适配等方面进行比较。" },
    { title: "工程门批量采购要注意什么？", desc: "了解数量、尺寸、交期、安装、补件和售后等采购要点。" },
    { title: "室内门定制需要提供哪些信息？", desc: "指导客户准备户型、尺寸、风格、预算、数量和交付城市。" },
  ],

  // ── 常见问题 ──────────────────────────────────────────────
  faqs: [
    {
      question: "春晖门业主要生产哪些门类？",
      answer: "春晖门业主要覆盖实木烤漆门、铝木门、工程门和室内门定制，可面向家装客户、工程客户、酒店公寓、经销商和装修公司提供产品方案。",
    },
    {
      question: "工程项目或酒店公寓可以批量定制吗？",
      answer: "可以。工程客户可提供项目类型、数量、交付城市、目标风格和预算区间，我们会根据产品系列、工艺配置和交付节点给出初步建议。",
    },
    {
      question: "经销商或装修公司合作需要准备什么？",
      answer: "建议先准备所在区域、经营渠道、目标客户类型和计划主推产品。后续可围绕产品图册、样品、供货周期和售后支持进行沟通。",
    },
  ],

  // ── 品牌优势板块 ─────────────────────────────────────────
  advantages: [
    { icon: "01", title: "产品系列清晰", desc: "实木烤漆门、铝木门、工程门与室内门定制，覆盖家装和工程需求" },
    { icon: "02", title: "工厂稳定交付", desc: "围绕生产、质检、排期和批量供货建立流程，适合酒店公寓等项目配套" },
    { icon: "03", title: "渠道合作友好", desc: "面向经销商、装修公司和设计师渠道，支持产品图册、样品与长期供货" },
    { icon: "04", title: "咨询沟通便捷", desc: "产品、工程与经销需求均可通过电话、微信或表单沟通" },
  ],

  // ── 联系信息 ─────────────────────────────────────────────
  contact: {
    salesPhone: "0760-8820 3678",
    mobilePhone: "13809689692",
    afterSalePhone: "0760-8820 3678",
    workHours: "周一至周日 8:00 - 18:00",
    contactPerson: "司徒春涛",
    wechatQR: "ziyuan/images/qrcode.png",
    secondaryWechatQR: "ziyuan/images/qrcode2.png",
    cta: "获取产品资料与工程报价",
    ctaSub: "留下需求后，我们将根据产品系列、空间场景和数量给出初步建议",
    intent: [
      { title: "家装选门", desc: "适合新房装修、旧房翻新、全屋门定制，重点沟通风格、预算、环保和交付时间。", meta: "实木烤漆门 / 铝木门 / 室内门定制" },
      { title: "工程配套", desc: "适合酒店、公寓、精装房、批量项目，重点沟通数量、交期、规格和稳定供货。", meta: "工程门 / 批量交付" },
      { title: "渠道合作", desc: "适合经销商、装修公司、设计师渠道，重点沟通产品体系、样品、图册和长期供货。", meta: "经销 / 装企 / 样品支持" },
    ],
    detailLabels: ["产品与工程咨询", "移动电话", "邮箱 1", "邮箱 2", "微信", "联系人", "服务时间"],
    response: [
      { num: "01", title: "确认需求", desc: "先确认产品类型、客户类型、数量、城市与交付时间。" },
      { num: "02", title: "初步建议", desc: "根据家装、工程或渠道需求，推荐对应产品系列与配置方向。" },
      { num: "03", title: "报价沟通", desc: "结合尺寸、工艺、数量、五金和物流信息，进一步沟通报价。" },
      { num: "04", title: "样品与资料", desc: "如需经销或工程合作，可进一步沟通图册、样品和项目资料。" },
    ],
  },

  // ── 导航菜单 ─────────────────────────────────────────────
  nav: [
    { label: "首页", href: "index.html" },
    { label: "产品中心", href: "product-center.html" },
    { label: "关于春晖", href: "guanyuwomen/index.html" },
    { label: "新闻案例", href: "xinwendongtai/index.html" },
    { label: "联系我们", href: "lianxiwomen/index.html" },
  ],

  // ── UI 字符串（供 JS 模板使用，支持多语言替换）──────────────
  ui: {
    langBtn: "EN",
    scrollHint: "产品 · 工厂 · 工程交付",
    heroTitle: "春晖门业",
    heroSub: "面向家装、工程、酒店公寓与经销渠道的实木烤漆门与铝木门制造商",
    heroProof: ["实木烤漆门 / 铝木门", "工程批量配套", "中山工厂交付", "室内门定制"],
    heroBtnPrimary: "获取产品方案",
    heroBtnSecondary: "查看产品系列",
    solutionsTitle: "为不同需求，提供合适的室内门方案",
    solutionsSub: "无论是家庭装修、工程配套还是渠道合作，我们都可根据空间、预算、数量与交付需求提供产品建议。",
    productsEyebrow: "PRODUCTS",
    productsTitle: "产品中心",
    productsMore: "查看完整产品中心",
    productEnquire: "立即咨询",
    advantagesEyebrow: "WHY CHUNHUI",
    advantagesTitle: "制造实力与交付优势",
    processEyebrow: "PROCESS",
    processTitle: "从需求沟通到稳定交付",
    faqTitle: "猜你想问",
    contactEyebrow: "CONTACT",
    contactTitle: "联系我们",
    contactFormTitle: "在线留言 · 获取产品方案",
    contactFormNote: "请前往联系页填写产品类型、项目数量、所在城市和交付时间，销售将根据需求尽快沟通方案。",
    contactFormLink: "前往联系页提交需求",
    aboutEyebrow: "ABOUT CHUNHUI",
    aboutClientsLabel: "服务对象",
    newsReadMore: "阅读全文",
    newsConsult: "咨询相关产品",
    caseConsult: "咨询类似项目",
    backHome: "返回首页",
    footerBrand: "春晖门业",
    footerLogoMark: "春晖",
    footerLogoRest: "门业",
    footerNewsBrand: "春晖门业新闻中心",
    copyright: "版权所有",
    formSubmitText: "提交需求 · 等待联系",
    formSubmitting: "正在提交，请稍候...",
    formSuccess: "询盘已发送，销售将尽快与您联系。",
    formError: "提交未成功，请稍后重试，或直接拨打 0760-8820 3678。",
  },
};
