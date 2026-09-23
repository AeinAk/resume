
(function () {
  "use strict";

  const THEME_KEY = "resume-theme";
  const LANG_KEY = "resume-lang";

  const els = {
    navToggle: document.getElementById("navToggle"),
    sideNav: document.getElementById("sideNav"),
    langToggle: document.getElementById("langToggle"),
    langToggleLabel: document.getElementById("langToggleLabel"),
    themeToggle: document.getElementById("themeToggle"),
    avatar: document.getElementById("avatar"),
    educationList: document.getElementById("educationList"),
    skillsList: document.getElementById("skillsList"),
    experienceList: document.getElementById("experienceList"),
    certificatesList: document.getElementById("certificatesList"),
    contactGrid: document.getElementById("contactGrid"),
    socials: document.getElementById("socials")
  };

  /*icons svg*/

  const ICONS = {
    link: '<svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 12l4-4M8.5 6.5h5v5"/><path d="M11.5 13.5h-5v-5"/></svg>',
    email: '<svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="4.5" width="15" height="11" rx="2"/><path d="M3 6l7 5 7-5"/></svg>',
    phone: '<svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 3.5h2.4L9 7l-1.8 1.4a9 9 0 0 0 4.4 4.4L13 11l3.5 1.6V15a1.5 1.5 0 0 1-1.6 1.5A12.5 12.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5Z"/></svg>',
    location: '<svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 18s6-5.1 6-9.8A6 6 0 0 0 4 8.2C4 12.9 10 18 10 18Z"/><circle cx="10" cy="8" r="2.1"/></svg>',
    github: '<svg width="17" height="17" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1a9 9 0 0 0-2.85 17.54c.45.08.61-.2.61-.43v-1.6c-2.5.55-3.03-1.1-3.03-1.1-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.1.98 2.6.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.44 0-.98.35-1.79.92-2.42-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.52 0c1.72-1.16 2.48-.92 2.48-.92.49 1.25.18 2.17.09 2.4.57.63.92 1.44.92 2.42 0 3.45-2.1 4.2-4.11 4.43.32.28.61.83.61 1.67v2.47c0 .24.16.52.62.43A9 9 0 0 0 10 1Z"/></svg>',
    linkedin: '<svg width="17" height="17" viewBox="0 0 20 20" fill="currentColor"><path d="M3.5 6.2h2.8V16H3.5V6.2ZM4.9 2.5a1.65 1.65 0 1 1 0 3.3 1.65 1.65 0 0 1 0-3.3ZM8.4 6.2h2.7v1.34h.04c.38-.7 1.3-1.44 2.68-1.44 2.87 0 3.4 1.84 3.4 4.24V16h-2.8v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V16H8.4V6.2Z"/></svg>',
    telegram: '<svg width="17" height="17" viewBox="0 0 20 20" fill="currentColor"><path d="M17.5 3 2.6 8.9c-.9.36-.89 1.44.02 1.76l3.6 1.26 1.4 4.5c.2.62 1 .77 1.42.27l2-2.4 3.6 2.7c.63.47 1.53.13 1.68-.63L18 3.9c.16-.8-.62-1.44-1.5-1.05Z"/></svg>'
  };

  function getSocialIcon(type) {
    return ICONS[type] || ICONS.link;
  }
  function getContactIcon(type) {
    if (type === "email") return ICONS.email;
    if (type === "phone") return ICONS.phone;
    if (type === "location") return ICONS.location;
    return ICONS.link;
  }

  function getByPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  /*static elements translate*/
  function applyStaticTranslations(lang) {
    const dict = CONTENT[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = getByPath(dict, el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const value = getByPath(dict, el.getAttribute("data-i18n-aria"));
      if (typeof value === "string") el.setAttribute("aria-label", value);
    });

    document.title = dict.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict.meta.description);

    els.avatar.textContent = dict.profile.avatarInitials;
    els.langToggleLabel.textContent = lang === "fa" ? "EN" : "FA";
  }

  /*dynamic lists*/
  function renderEducation(lang) {
    const { items } = CONTENT[lang].education;
    els.educationList.innerHTML = items
      .map(
        (item) => `
      <div class="timeline-item">
        <div class="item-period">${item.period}</div>
        <h3>${item.degree}</h3>
        <div class="item-org">${item.institution} · ${item.score}</div>
        ${item.note ? `<p class="item-note">${item.note}</p>` : ""}
      </div>`
      )
      .join("");
  }

  function renderExperience(lang) {
    const { items } = CONTENT[lang].experience;
    els.experienceList.innerHTML = items
      .map(
        (item) => `
      <div class="timeline-item">
        <div class="item-period">${item.period}</div>
        <h3>${item.role}</h3>
        <div class="item-org">${item.company}</div>
        <p class="item-desc">${item.description}</p>
        <div class="tag-row">${item.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>`
      )
      .join("");
  }

  function renderSkills(lang) {
    const { groups } = CONTENT[lang].skills;
    els.skillsList.innerHTML = groups
      .map(
        (group) => `
      <div>
        <div class="skill-group-title">${group.title}</div>
        <div class="skill-pills">${group.items.map((s) => `<span class="skill-pill">${s}</span>`).join("")}</div>
      </div>`
      )
      .join("");
  }

  function renderCertificates(lang) {
    const { items } = CONTENT[lang].certificates;
    els.certificatesList.innerHTML = items
      .map(
        (item) => `
      <div class="cert-item">
        <div class="cert-info">
          <h3>${item.title}</h3>
          <div class="cert-meta">${item.issuer} · ${item.date}</div>
        </div>
        <a class="cert-link" href="${item.link}" target="_blank" rel="noopener">${ICONS.link}</a>
      </div>`
      )
      .join("");
  }

  function renderContact(lang) {
    const { items, socials } = CONTENT[lang].contact;

    els.contactGrid.innerHTML = items
      .map((item) => {
        const tag = item.href ? "a" : "div";
        const hrefAttr = item.href ? `href="${item.href}"` : "";
        return `
        <${tag} class="contact-item" ${hrefAttr}>
          <span class="contact-icon">${getContactIcon(item.type)}</span>
          <span>
            <span class="contact-label">${item.label}</span>
            <div class="contact-value">${item.value}</div>
          </span>
        </${tag}>`;
      })
      .join("");

    els.socials.innerHTML = socials
      .map(
        (s) => `
      <a class="icon-btn" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}">
        ${getSocialIcon(s.type)}
      </a>`
      )
      .join("");
  }

  function renderDynamicContent(lang) {
    renderEducation(lang);
    renderExperience(lang);
    renderSkills(lang);
    renderCertificates(lang);
    renderContact(lang);
  }

  /*language*/
  function setLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
    applyStaticTranslations(lang);
    renderDynamicContent(lang);
  }

  function currentLanguage() {
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "fa";
  }

  els.langToggle.addEventListener("click", () => {
    setLanguage(currentLanguage() === "fa" ? "en" : "fa");
  });

  /*theme*/
  function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  els.themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });

  /*mobile menu*/
  els.navToggle.addEventListener("click", () => {
    const isOpen = els.sideNav.classList.toggle("open");
    els.navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  els.sideNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      els.sideNav.classList.remove("open");
      els.navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /*highlight link*/
  function initScrollSpy() {
    const sections = document.querySelectorAll(".section[id]");
    const links = document.querySelectorAll(".side-nav a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /*start*/
  function init() {
    const lang = currentLanguage();
    applyStaticTranslations(lang);
    renderDynamicContent(lang);
    initScrollSpy();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
