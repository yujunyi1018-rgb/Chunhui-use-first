document.addEventListener('DOMContentLoaded', () => {
  buildContactIntent();
  buildContactDetails();
  buildContactResponse();
  buildContactFooter();
  initContactForm();
});

function buildContactIntent() {
  const items = SITE_DATA.contact.intent || [];

  document.getElementById('contact-intent-grid').innerHTML = items.map((item, index) => `
    <a href="#inquiry" class="contact-intent-card">
      <span>0${index + 1}</span>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <small>${item.meta}</small>
    </a>
  `).join('');
}

function buildContactDetails() {
  const { company, contact } = SITE_DATA;
  const labels = contact.detailLabels || ["产品与工程咨询","移动电话","邮箱 1","邮箱 2","微信","联系人","服务时间"];
  const details = [
    [labels[0], contact.salesPhone],
    [labels[1], contact.mobilePhone],
    [labels[2], company.email],
    [labels[3], company.secondaryEmail],
    [labels[4], company.wechat],
    [labels[5], contact.contactPerson],
    [labels[6], contact.workHours],
  ];

  document.getElementById('contact-detail-list').innerHTML = details.map(([label, value]) => `
    <div class="contact-detail-item">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join('');

  document.getElementById('contact-address-text').textContent = company.address;
}

function buildContactResponse() {
  const steps = SITE_DATA.contact.response || [];

  document.getElementById('contact-response-grid').innerHTML = steps.map(({ num, title, desc }) => `
    <div class="contact-response-item">
      <span>${num}</span>
      <h3>${title}</h3>
      <p>${desc}</p>
    </div>
  `).join('');
}

function buildContactFooter() {
  const { company, ui } = SITE_DATA;
  document.getElementById('contact-footer').innerHTML = `
    <div>
      <strong>${ui.footerBrand}</strong>
      <span>${company.name} · ${company.icp}</span>
    </div>
    <a href="../index.html">${ui.backHome}</a>
  `;
}

// 端点定义在 JS 而非 HTML，防止 HTML 爬虫直接抓取邮箱
const _fp = ['https://formsubmit', '.co/ajax/', 'Dengsan568@gmail.com'].join('');

function initContactForm() {
  const form = document.getElementById('contact-inquiry-form');
  const button = document.getElementById('contact-submit');
  const status = document.getElementById('contact-form-status');
  const ui = SITE_DATA.ui;

  // 用 SITE_DATA.ui 覆盖按钮文字（支持语言切换）
  if (button && ui.formSubmitText) button.textContent = ui.formSubmitText;
  const defaultText = button ? button.textContent : '';

  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const honey = form.querySelector('[name="_honey"]');
    const gotcha = form.querySelector('[name="_gotcha"]');
    if ((honey && honey.value) || (gotcha && gotcha.value)) return;

    button.disabled = true;
    button.textContent = ui.formSubmitting || '正在提交，请稍候...';
    status.textContent = '';
    status.className = 'form-status';

    try {
      const response = await fetch(_fp, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'failed');
      }

      form.reset();
      button.classList.add('is-submitted');
      status.textContent = ui.formSuccess || '询盘已发送，销售将尽快与您联系。';
      status.classList.add('is-success');
    } catch (error) {
      status.textContent = ui.formError || '提交未成功，请稍后重试，或直接拨打 0760-8820 3678。';
      status.classList.add('is-error');
    } finally {
      button.textContent = defaultText;
      button.disabled = false;
    }
  });
}
