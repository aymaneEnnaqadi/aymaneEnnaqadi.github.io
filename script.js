const projects={chef:{type:'01 / SAAS PRODUCT',title:'AutoBlogChef',intro:'A content automation SaaS that brings publishing workflows into a full stack product.',work:'Built a full stack MVP using Wasp, React, and Prisma, combining a product interface with content workflow automation.',tags:['Wasp','React','Prisma','Workflow automation'],link:'https://autoblogchef.com',label:'Visit AutoBlogChef'},pipeline:{type:'02 / CONTENT AUTOMATION',title:'AI Publishing Pipeline',intro:'A workflow connecting AI content generation with structured publishing and marketing assets.',work:'Connected n8n, OpenAI, Google Sheets, and WordPress for structured content publishing, with SEO and Pinterest assets as part of the pipeline.',tags:['n8n','OpenAI','Google Sheets','WordPress'],link:'mailto:aymaneennaqadi@outlook.com?subject=AI%20Publishing%20Pipeline',label:'Discuss a similar workflow'},drivebot:{type:'03 / FILE AUTOMATION',title:'DriveBot',intro:'A practical automation for processing incoming images and invoices, then organizing files.',work:'Connected Telegram, OCR, and Google Drive through n8n to handle image processing, invoice information, and automatic file classification.',tags:['n8n','Telegram','OCR','Google Drive'],link:'mailto:aymaneennaqadi@outlook.com?subject=DriveBot%20automation',label:'Discuss a similar workflow'}};

Object.assign(projects, additionalProjects);
const dialog = document.getElementById('project-dialog');
const languageSelect = document.getElementById('language-select');
const translationTargets = translations.map(row => {
  const element = document.querySelector(row.selector);
  if (!element) throw new Error('Missing translation region: ' + row.selector);
  return { element, row, english: element.innerHTML };
});
let currentLanguage = 'en';
let activeProject = null;
function renderProject(key) {
  const base = projects[key];
  const localized = translatedProjects[currentLanguage]?.[key] || {};
  const project = { ...base, ...localized };
  document.getElementById('dialog-type').textContent = project.type;
  document.getElementById('dialog-title').textContent = project.title;
  document.getElementById('dialog-intro').textContent = project.intro;
  document.getElementById('dialog-work').textContent = project.work;
  const study = caseStudies[currentLanguage][key];
  document.getElementById('dialog-goal').textContent = study.goal;
  document.getElementById('dialog-outcome').textContent = study.outcome;
  document.getElementById('dialog-preview').hidden = key !== 'resume';
  const tags = base.tags.map(tag => tag === 'Workflow automation' ? (localized.extraTag || tag) : tag);
  document.getElementById('dialog-tags').replaceChildren(...tags.map(tag => {
    const span = document.createElement('span'); span.textContent = tag; return span;
  }));
  const link = document.getElementById('dialog-link');
  link.href = base.link;
  link.textContent = project.label;
  if (base.link.startsWith('https')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  else { link.removeAttribute('target'); link.removeAttribute('rel'); }
}
function updateClock() {
  document.getElementById('clock').textContent = new Intl.DateTimeFormat(currentLanguage, {
    timeZone: 'Africa/Casablanca', hour: '2-digit', minute: '2-digit'
  }).format(new Date());
}
function applyLanguage(language) {
  currentLanguage = Object.hasOwn(uiTranslations, language) ? language : 'en';
  const ui = uiTranslations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  languageSelect.value = currentLanguage;
  translationTargets.forEach(({ element, row, english }) => {
    element.innerHTML = currentLanguage === 'en' ? english : row[currentLanguage];
  });
  document.title = ui.title;
  document.querySelector('meta[name="description"]').content = ui.description;
  document.querySelector('nav').setAttribute('aria-label', ui.nav);
  document.querySelector('header .brand').setAttribute('aria-label', ui.home);
  document.querySelector('.portrait').alt = ui.portrait;
  document.querySelector('.close-dialog').setAttribute('aria-label', ui.close);
  languageSelect.setAttribute('aria-label', ui.language);
  document.querySelector('label[for="language-select"]').textContent = ui.language;
  if (activeProject && dialog.open) renderProject(activeProject);
  updateClock();
}
languageSelect.addEventListener('change', () => {
  applyLanguage(languageSelect.value);
  try { localStorage.setItem('portfolio-language', currentLanguage); } catch {}
});
let savedLanguage;
try { savedLanguage = localStorage.getItem('portfolio-language'); } catch {}
applyLanguage(savedLanguage || 'en');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  activeProject = button.dataset.project;
  renderProject(activeProject);
  dialog.showModal();
  dialog.scrollTop = 0;
}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { activeProject = null; });
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
setInterval(updateClock, 60000);
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  document.querySelectorAll('.project,.service-row,.about-content,.work-note').forEach(element => {
    element.classList.add('reveal'); observer.observe(element);
  });
}
