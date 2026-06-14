document.addEventListener('DOMContentLoaded', () => {
  buildAboutTrustStrip();
  buildAboutScope();
  buildAboutProofList();
  buildAboutClients();
  buildAboutTimeline();
  buildAboutAnswers();
  buildAboutFooter();
});

function buildAboutTrustStrip() {
  const { company, about } = SITE_DATA;
  const ts = about.trustStrip || {};
  const founded = ts.founded || { label: '成立时间', desc: '长期深耕室内门制造' };
  const location = ts.location || { value: '中山', label: '制造基地', desc: '服务华南及全国合作客户' };
  const facts = [
    { value: `${company.founded}${localStorage.getItem('ch_lang') === 'en' ? '' : '年'}`, label: founded.label, desc: founded.desc },
    ...(about.quickFacts || []).slice(1),
    { value: location.value, label: location.label, desc: location.desc },
  ];

  document.getElementById('about-trust-strip').innerHTML = facts.map((item) => `
    <article>
      <strong>${item.value}</strong>
      <span>${item.label}</span>
      <p>${item.desc}</p>
    </article>
  `).join('');
}

function buildAboutScope() {
  const items = (SITE_DATA.about.scope || []);

  document.getElementById('about-scope-grid').innerHTML = items.map(({ title, desc }, index) => `
    <article class="about-scope-card">
      <span>${String(index + 1).padStart(2, '0')}</span>
      <h3>${title}</h3>
      <p>${desc}</p>
    </article>
  `).join('');
}

function buildAboutProofList() {
  const items = SITE_DATA.about.highlights || [];
  document.getElementById('about-proof-list').innerHTML = items.map((item) => `
    <article>
      <span>${item.icon}</span>
      <div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join('');
}

function buildAboutClients() {
  const clients = (SITE_DATA.about.clients || []);

  document.getElementById('about-client-grid').innerHTML = clients.map(({ title, desc }) => `
    <article>
      <h3>${title}</h3>
      <p>${desc}</p>
    </article>
  `).join('');
}

function buildAboutTimeline() {
  const timeline = SITE_DATA.about.timeline || [];
  document.getElementById('about-timeline-list').innerHTML = timeline.map((item) => `
    <article>
      <span>${item.year}</span>
      <p>${item.event}</p>
    </article>
  `).join('');
}

function buildAboutAnswers() {
  const answers = (SITE_DATA.about.answers || []);

  document.getElementById('about-answer-list').innerHTML = answers.map(({ q, a }, index) => `
    <details ${index === 0 ? 'open' : ''}>
      <summary>
        <span>0${index + 1}</span>
        <strong>${q}</strong>
      </summary>
      <p>${a}</p>
    </details>
  `).join('');
}

function buildAboutFooter() {
  const { company, ui } = SITE_DATA;
  document.getElementById('about-page-footer').innerHTML = `
    <div>
      <strong>${ui.footerBrand}</strong>
      <span>${company.name} · ${company.icp}</span>
    </div>
    <a href="../index.html">${ui.backHome}</a>
  `;
}
