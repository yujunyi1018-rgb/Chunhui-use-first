/**
 * CHUNHUI_WEB · i18n.js
 * 语言切换管理。需在 data.js + data-en.js 之后、页面渲染 JS 之前加载。
 * 本文件同步替换 window.SITE_DATA，确保所有渲染函数使用正确语言数据。
 */

// ── 1. 同步替换数据（脚本执行时立即生效，DOMContentLoaded 之前） ──
// 用属性覆盖替代变量重绑定，兼容 const/var/let 声明方式
(function () {
  if (localStorage.getItem('ch_lang') === 'en' && typeof SITE_DATA_EN !== 'undefined') {
    var keys = Object.keys(SITE_DATA);
    for (var i = 0; i < keys.length; i++) delete SITE_DATA[keys[i]];
    Object.assign(SITE_DATA, SITE_DATA_EN);
  }
})();

// ── 2. DOM 加载完成后注入按钮 + 翻译静态 HTML ──────────────────
document.addEventListener('DOMContentLoaded', function () {
  var lang = localStorage.getItem('ch_lang') || 'zh';
  injectLangToggle(lang);
  if (lang === 'en') {
    applyStaticTranslations();
    document.documentElement.lang = 'en';
  }
});

window.toggleLang = function () {
  var lang = localStorage.getItem('ch_lang') || 'zh';
  localStorage.setItem('ch_lang', lang === 'en' ? 'zh' : 'en');
  window.location.reload();
};

// ── 语言切换按钮注入 ─────────────────────────────────────────
// 首页由 main.js buildNav() 直接渲染按钮，此处只处理子页面和产品中心
function injectLangToggle(lang) {
  var label = (lang === 'en') ? '中文' : 'EN';
  var btn = document.createElement('button');
  btn.className = 'lang-toggle';
  btn.setAttribute('onclick', 'toggleLang()');
  btn.setAttribute('aria-label', 'Switch language');
  btn.textContent = label;

  // 子页面：插入到 .nav-links 里 .nav-cta 前面
  var subCta = document.querySelector('.subpage-home-nav .nav-links .nav-cta');
  if (subCta) { subCta.parentNode.insertBefore(btn, subCta); return; }

  // 产品中心：插入到 .site-nav 里 .nav-cta 前面
  var siteCta = document.querySelector('.site-header .site-nav .nav-cta');
  if (siteCta) { siteCta.parentNode.insertBefore(btn, siteCta); return; }
}

// ── 更新子页面导航文字 ────────────────────────────────────────
function updateSubpageNavLabels() {
  var navData = (typeof SITE_DATA !== 'undefined') ? SITE_DATA.nav : null;
  if (!navData) return;

  // 公司名称
  document.querySelectorAll('.nav-logo-company, .brand-company').forEach(function (el) {
    el.textContent = SITE_DATA.company.displayName || SITE_DATA.company.name;
  });

  // 导航链接 - 通过 href 末尾匹配
  var allNavLinks = document.querySelectorAll(
    '.subpage-home-nav .nav-links a, .site-header .site-nav a'
  );
  allNavLinks.forEach(function (link) {
    var href = link.getAttribute('href') || '';
    var match = navData.find(function (item) {
      return href === item.href ||
             href === '../' + item.href ||
             (item.href.indexOf('/') !== -1 && href.endsWith('/' + item.href));
    });
    if (match) {
      // 保留 aria-current，只改文字
      link.textContent = match.label;
    }
  });
}

// ── 静态 HTML 翻译（data-i18n 属性） ──────────────────────────
var TRANSLATIONS = {
  // ── 关于我们页 ──────────────────────────────────────────
  'about.hero.h1':          'About Chunhui Doors',
  'about.hero.p':           'Based in Zhongshan manufacturing — providing stable, clear interior door solutions in carbon crystal, paint-free, eco, engineering, and custom doors for home, engineering, hotel/apartment, and channel clients.',
  'about.hero.btn1':        'Submit Cooperation Request',
  'about.hero.btn2':        'View Products',
  'about.story.eyebrow':    'COMPANY PROFILE',
  'about.story.h2':         'Founded 2012, Dedicated to Stable Door Delivery',
  'about.story.lead':       'Chunhui Doors is rooted in Zhongshan, Guangdong, focused on interior door manufacturing and long-term partnerships, continuously providing stable products and delivery for home, engineering, and channel clients.',
  'about.story.p':          'We mainly produce carbon crystal, paint-free, eco, engineering, solid wood lacquered, aluminum-wood doors, and custom interior doors — offering product recommendations, process configuration, delivery schedules, and after-sales based on different spaces, quantities, and cooperation needs.',
  'about.story.img.span':   'ZHONGSHAN FACTORY',
  'about.story.img.strong': 'Clear products, processes, and delivery rhythm make for more stable partnerships.',
  'about.scope.eyebrow':    'PRODUCT SCOPE',
  'about.scope.h2':         'Product System Covering Home, Engineering & Distribution',
  'about.scope.p':          'From everyday home décor to hotel/apartment, premium engineering, and channel partnerships — providing interior door products covering various styles, budgets, and delivery needs.',
  'about.mfg.eyebrow':      'WHY CHUNHUI',
  'about.mfg.h2':           'Manufacturing Capability & Delivery Advantages',
  'about.mfg.p':            'Established clear processes for product selection, production QC, project scheduling, bulk supply, and after-sales response — making every cooperation more stable.',
  'about.clients.eyebrow':  'CLIENTS',
  'about.clients.h2':       'Target Clients',
  'about.clients.p':        'Whether home renovation, engineering supply, or channel partnership — we provide corresponding product and service support based on actual needs.',
  'about.timeline.eyebrow': 'MILESTONES',
  'about.timeline.h2':      'Brand Development Milestones',
  'about.timeline.p':       'From manufacturing accumulation to product system refinement, continuously serving home, engineering, hotel/apartment, and channel clients.',
  'about.answers.eyebrow':  'COMMON QUESTIONS',
  'about.answers.h2':       'FAQ Before Cooperation',
  'about.cta.kicker':       'NEXT STEP',
  'about.cta.h2':           'Tell us your product type, quantity, and delivery city — get initial selection advice.',
  'about.cta.btn':          'Contact Chunhui Doors',

  // ── 联系我们页 ──────────────────────────────────────────
  'contact.hero.kicker':        'CONTACT & INQUIRY',
  'contact.hero.h1':            'Clear requirements lead to accurate quotations and solutions',
  'contact.hero.p':             'Whether selecting doors for home, hotel/apartment engineering supply, or long-term distribution partnership — submit your requirements here.',
  'contact.hero.btn1':          'Fill Inquiry Form',
  'contact.hero.btn2':          'Call Us',
  'contact.intent.eyebrow':     'START HERE',
  'contact.intent.h2':          'Choose your inquiry type',
  'contact.form.eyebrow':       'INQUIRY FORM',
  'contact.form.h2':            'Submit Product or Engineering Requirements',
  'contact.form.note':          'Please leave your product type, project quantity, city, and delivery time. We will respond with a solution promptly.',
  'contact.form.nameLabel':     'Name',
  'contact.form.namePH':        'Enter your name',
  'contact.form.phoneLabel':    'Phone',
  'contact.form.phonePH':       'Enter mobile number',
  'contact.form.cityLabel':     'City',
  'contact.form.cityPH':        'e.g. Zhongshan, Guangdong',
  'contact.form.typeLabel':     'Customer Type',
  'contact.form.typeOpt1':      'Home Client',
  'contact.form.typeOpt2':      'Engineering Client',
  'contact.form.typeOpt3':      'Hotel / Apartment',
  'contact.form.typeOpt4':      'Distributor',
  'contact.form.typeOpt5':      'Design Company',
  'contact.form.productLabel':  'Product Type',
  'contact.form.productOpt1':   'Solid Wood Lacquered Doors',
  'contact.form.productOpt2':   'Aluminum-Wood Doors',
  'contact.form.productOpt3':   'Engineering Doors',
  'contact.form.productOpt4':   'Custom Interior Doors',
  'contact.form.productOpt5':   'Undecided, need recommendation',
  'contact.form.qtyLabel':      'Estimated Quantity',
  'contact.form.qtyPH':         'e.g. 5 doors for home / 200 doors for project',
  'contact.form.msgLabel':      'Requirements',
  'contact.form.msgPH':         'Add project type, style, budget, delivery time, and whether you need samples or catalogs',
  'contact.form.submit':        'Submit · Await Contact',
  'contact.map.eyebrow':        'LOCATION',
  'contact.map.h2':             'Zhongshan Manufacturing Base',
  'contact.map.link':           'Search Chunhui on Map',
  'contact.visit.span':         'VISIT CHUNHUI',
  'contact.visit.strong':       'Visit Chunhui Doors',
  'contact.visit.p':            'We recommend calling ahead to arrange a visit for product, engineering, or partnership discussions.',
  'contact.visit.label1':       'Phone',
  'contact.visit.label2':       'Mobile',
  'contact.visit.label3':       'Service Hours',
  'contact.visit.label4':       'Navigation',
  'contact.visit.navSearch':    'Chunhui Doors Zhongshan',
  'contact.visit.mapBtn':       'Open Amap Navigation',
  'contact.response.eyebrow':   'RESPONSE',
  'contact.response.h2':        'How We Follow Up After Submission',
  'contact.wechat.strong':      'WeChat Consultation',
  'contact.wechat.span':        'Scan to add, send product or engineering requirements',
  'contact.wechat2.strong':     'WeChat Consultation 2',
  'contact.wechat2.span':       'Backup WeChat for quick consultation',

  // ── 新闻案例页 ──────────────────────────────────────────
  'news.hero.h1':           'News Center',
  'news.hero.p':            'Brand news, product knowledge, buying guides, and engineering cases — practical references for home door selection and project supply.',
  'news.hero.tag1':         'Brand News',
  'news.hero.tag2':         'Product Knowledge',
  'news.hero.tag3':         'Buying Guide',
  'news.hero.tag4':         'Engineering Cases',
  'news.overview.art1.h2':  'Brand News',
  'news.overview.art1.p':   'Corporate news, channel activities, new product series, and manufacturing capability.',
  'news.overview.art2.h2':  'Product Knowledge',
  'news.overview.art2.p':   'Features and applications of carbon crystal, paint-free, eco, engineering doors, and custom interior doors.',
  'news.overview.art3.h2':  'Engineering Cases',
  'news.overview.art3.p':   'Hotel, apartment, premium project, and dealer display cooperation scenarios and supply experience.',
  'news.featured.eyebrow':  'FEATURED',
  'news.featured.h2':       'Featured Content',
  'news.featured.p':        'Selected practical content on door type differences, process features, daily maintenance, and engineering preparation.',
  'news.news.eyebrow':      'NEWS',
  'news.news.h2':           'Brand News & Product Knowledge',
  'news.cases.eyebrow':     'CASES',
  'news.cases.h2':          'Engineering & Cooperation Cases',
  'news.cases.p':           'Covering hotel, apartment, home, showroom, and engineering supply scenarios — showcasing bulk supply and custom delivery experience.',
  'news.topics.eyebrow':    'BUYING GUIDE',
  'news.topics.h2':         'Door Selection & Customization Guide',
  'news.topics.p':          'From product features and space compatibility to engineering procurement preparation — clearer selection references for different needs.',
  'news.faq.eyebrow':       'FAQ',
  'news.faq.h2':            'Common Questions from Clients',
  'news.faq.p':             'Summary of common questions about products, customization, and engineering supply.',
  'news.cta.p':             'If you already have a product series, project quantity, or delivery city in mind, submit your requirements directly and we\'ll provide initial selection advice.',
  'news.cta.btn':           'Submit Product or Engineering Inquiry',

  // ── 产品中心页 ──────────────────────────────────────────
  'pc.hero.eyebrow':        'PRODUCT CATALOG',
  'pc.hero.h1':             'Find the right door for your space and project',
  'pc.hero.p':              'Chunhui Doors provides eco, solid wood lacquered, aluminum-wood, and other interior door products for home décor, hotels, engineering, and distribution. Start with category, then compare styles for clearer selection.',
  'pc.hero.btn1':           'Browse by Category',
  'pc.hero.btn2':           'View All Products',
  'pc.hero.tag1':           'Home Selection',
  'pc.hero.tag2':           'Engineering Supply',
  'pc.hero.tag3':           'Hotels & Apartments',
  'pc.hero.tag4':           'Distribution Partnership',
  'pc.nav.strong':          'Quick Navigation',
  'pc.nav.span':            'Navigate to any section directly.',
  'pc.nav.link1':           'Browse by Category',
  'pc.nav.link2':           'View Brochures',
  'pc.nav.link3':           'Filter All Products',
  'pc.nav.link4':           'Submit Inquiry',
  'pc.cat.eyebrow':         'CATEGORY FIRST',
  'pc.cat.h2':              'Choose category first, then compare styles',
  'pc.cat.p':               'Home clients: focus on style and texture. Engineering: focus on stable delivery. Distributors: check series completeness. Selecting category first makes style comparison clearer.',
  'pc.brochure.eyebrow':    'DIGITAL BROCHURE',
  'pc.brochure.h2':         'Product Digital Catalogs',
  'pc.brochure.p':          'Some catalogs are available as online albums for quick browsing of series styles, colors, and overall aesthetics. For full quotes or engineering advice, send intended model screenshots.',
  'pc.brochure.kicker':     'ONLINE CATALOG',
  'pc.brochure.title':      'Product Digital Catalog',
  'pc.brochure.link':       'Open in New Window',
  'pc.brochure.contactNote':'For more details, contact us',
  'pc.brochure.contactLink':'Submit Request',
  'pc.filter.eyebrow':      'FILTER',
  'pc.filter.h2':           'Quick Locate',
  'pc.filter.note':         'Filter by product category, series, or model keywords. If unsure which category, start from the category cards above.',
  'pc.filter.searchLabel':  'Search Products',
  'pc.filter.searchPH':     'Enter model name, series, or category',
  'pc.filter.catH3':        'Category',
  'pc.filter.seriesH3':     'Series',
  'pc.list.eyebrow':        'PRODUCT LIST',
  'pc.list.h2':             'All Products',
  'pc.list.p':              'Click a product to view full image and selection info. For engineering quotes, distributor catalogs, or full door packages, submit your requirements directly.',
  'pc.empty.h3':            'No matching products found',
  'pc.empty.p':             'Try fewer keywords, or switch to "All" category to browse again.',
  'pc.inquiry.eyebrow':     'INQUIRY',
  'pc.inquiry.h2':          'Need brochures, engineering quote, or distribution partnership?',
  'pc.inquiry.p':           'Tell us your usage scenario, intended category, quantity, project city, and delivery time. Chunhui will give initial selection advice based on product series and project needs.',
  'pc.inquiry.btn':         'Submit Request',
};

function applyStaticTranslations() {
  // data-i18n → TRANSLATIONS dict
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var text = TRANSLATIONS[key];
    if (text !== undefined) el.textContent = text;
  });

  // data-i18n-ph → TRANSLATIONS dict, sets placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-ph');
    var text = TRANSLATIONS[key];
    if (text !== undefined) el.placeholder = text;
  });

  // data-i18n-ui → SITE_DATA.ui[key]
  if (typeof SITE_DATA !== 'undefined' && SITE_DATA.ui) {
    document.querySelectorAll('[data-i18n-ui]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ui');
      var text = SITE_DATA.ui[key];
      if (text !== undefined) el.textContent = text;
    });
  }

  // Update subpage nav labels using SITE_DATA (already swapped to EN)
  updateSubpageNavLabels();
}
