(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cfg = window.STUDIO_CONFIG || {};

  /* ---------- Translations ---------- */
  var translations = {
    uk: {
      navAria:'Головна навігація', mobileNavAria:'Мобільна навігація', langAria:'Мова сайту',
      navAbout:'Про нас', navServices:'Послуги', navProcess:'Процес', navContact:'Контакти', writeUs:'Написати нам',
      heroLine1:'Створюємо', heroLine2:'сучасні', heroLine3:'веб-рішення.', heroSub:'Односторінкові сайти, лендінги, презентаційні сторінки та інші цифрові продукти.',
      discussProject:'Обговорити проєкт', aboutTitle1:'Про', aboutTitle2:'нас',
      aboutLead:'Ми — невелика, але амбітна вебстудія, яка створює стильні, швидкі та ефективні вебпродукти.',
      aboutP1:'Працюємо з ідеями, перетворюючи їх на сучасні сайти, які допомагають бізнесу розвиватися.',
      aboutP2:'Прагнемо створювати якісні цифрові рішення, вдосконалюватися та поступово розвивати власну команду.',
      quality:'Якість.', design:'Дизайн.', result:'Результат.',
      servicesTitle1:'Що ми', servicesTitle2:'робимо', servicesSub:'Розробляємо вебрішення, які працюють на ваш бізнес.',
      landingTitle:'Лендінги', landingText:'Стильні односторінкові сайти для презентації послуг, продуктів і залучення клієнтів.',
      businessTitle:'Сайти-візитки', businessText:'Сучасні сайти для особистого бренду, спеціаліста чи бізнесу.',
      corporateTitle:'Корпоративні сайти', corporateText:'Повноцінне представлення компанії, її послуг та можливостей.',
      responsiveTitle:'Адаптивний дизайн', responsiveText:'Зручний і сучасний вигляд сайту на будь-якому пристрої.',
      processTitle1:'Як ми', processTitle2:'працюємо', processSub:'Проста схема для максимального результату.',
      step1Title:'Обговорюємо ідею', step1Text:'Знайомимося із завданням та визначаємо цілі майбутнього сайту.',
      step2Title:'Створюємо дизайн', step2Text:'Продумуємо структуру, стиль та зовнішній вигляд сторінок.',
      step3Title:'Розробляємо сайт', step3Text:'Перетворюємо дизайн на повноцінний адаптивний вебсайт.',
      step4Title:'Тестуємо та запускаємо', step4Text:'Перевіряємо роботу сайту, виправляємо помилки та готуємо його до запуску.',
      transparent:'Прозорий процес.', deadlines:'Чіткі терміни.', support:'Підтримка після запуску.',
      contactTitle1:'Давайте створимо', contactTitle2:'щось круте', contactTitle3:'разом.',
      contactText:'Напишіть нам — і ми обговоримо вашу ідею та знайдемо найкраще рішення для вашого проєкту.',
      footerTag:'Створюємо майбутнє разом.', openMenu:'Відкрити меню', closeMenu:'Закрити меню', scrollAbout:'Прокрутити до розділу «Про нас»',
      toastSocial:'Посилання ще не додано — впишіть його у файлі config.js', toastContact:'Контакти ще не налаштовано — додайте їх у файлі config.js',
      pageTitle:'Web Studio — сучасні веб-рішення: лендінги, сайти-візитки, корпоративні сайти',
      metaDescription:'Web Studio — невелика, але амбітна вебстудія. Створюємо стильні, швидкі та адаптивні лендінги, сайти-візитки та корпоративні сайти.'
    },
    en: {
      navAria:'Main navigation', mobileNavAria:'Mobile navigation', langAria:'Website language',
      navAbout:'About us', navServices:'Services', navProcess:'Process', navContact:'Contact', writeUs:'Write to us',
      heroLine1:'We create', heroLine2:'modern', heroLine3:'web solutions.', heroSub:'One-page websites, landing pages, presentation pages and other digital products.',
      discussProject:'Discuss a project', aboutTitle1:'About', aboutTitle2:'us',
      aboutLead:'We are a small but ambitious web studio creating stylish, fast and effective web products.',
      aboutP1:'We work with ideas and turn them into modern websites that help businesses grow.',
      aboutP2:'We aim to create quality digital solutions, improve continuously and gradually grow our team.',
      quality:'Quality.', design:'Design.', result:'Results.',
      servicesTitle1:'What we', servicesTitle2:'do', servicesSub:'We develop web solutions that work for your business.',
      landingTitle:'Landing pages', landingText:'Stylish one-page websites to present services and products and attract customers.',
      businessTitle:'Business cards', businessText:'Modern websites for a personal brand, specialist or business.',
      corporateTitle:'Corporate websites', corporateText:'A complete presentation of your company, services and capabilities.',
      responsiveTitle:'Responsive design', responsiveText:'A convenient, modern website on every device.',
      processTitle1:'How we', processTitle2:'work', processSub:'A simple process for maximum results.',
      step1Title:'Discuss the idea', step1Text:'We learn about the task and define the goals of the future website.',
      step2Title:'Create the design', step2Text:'We plan the structure, style and visual appearance of the pages.',
      step3Title:'Develop the website', step3Text:'We turn the design into a complete responsive website.',
      step4Title:'Test and launch', step4Text:'We check the website, fix issues and prepare it for launch.',
      transparent:'Transparent process.', deadlines:'Clear deadlines.', support:'Post-launch support.',
      contactTitle1:'Let’s create', contactTitle2:'something great', contactTitle3:'together.',
      contactText:'Write to us and we will discuss your idea and find the best solution for your project.',
      footerTag:'Building the future together.', openMenu:'Open menu', closeMenu:'Close menu', scrollAbout:'Scroll to About us',
      toastSocial:'Link has not been added yet — add it in config.js', toastContact:'Contacts are not configured yet — add them in config.js',
      pageTitle:'Web Studio — modern web solutions: landing pages, business websites, corporate websites',
      metaDescription:'Web Studio is a small but ambitious web studio. We create stylish, fast and responsive landing pages, business websites and corporate websites.'
    },
    de: {
      navAria:'Hauptnavigation', mobileNavAria:'Mobile Navigation', langAria:'Website-Sprache',
      navAbout:'Über uns', navServices:'Leistungen', navProcess:'Prozess', navContact:'Kontakt', writeUs:'Nachricht senden',
      heroLine1:'Wir entwickeln', heroLine2:'moderne', heroLine3:'Weblösungen.', heroSub:'Einseitige Websites, Landingpages, Präsentationsseiten und weitere digitale Produkte.',
      discussProject:'Projekt besprechen', aboutTitle1:'Über', aboutTitle2:'uns',
      aboutLead:'Wir sind ein kleines, aber ambitioniertes Webstudio, das stilvolle, schnelle und effektive Webprodukte entwickelt.',
      aboutP1:'Wir arbeiten mit Ideen und verwandeln sie in moderne Websites, die das Wachstum von Unternehmen unterstützen.',
      aboutP2:'Unser Ziel sind hochwertige digitale Lösungen, kontinuierliche Weiterentwicklung und der Aufbau eines eigenen Teams.',
      quality:'Qualität.', design:'Design.', result:'Ergebnis.',
      servicesTitle1:'Was wir', servicesTitle2:'machen', servicesSub:'Wir entwickeln Weblösungen, die für Ihr Unternehmen arbeiten.',
      landingTitle:'Landingpages', landingText:'Stilvolle Einseiten-Websites zur Präsentation von Leistungen und Produkten sowie zur Kundengewinnung.',
      businessTitle:'Visitenkarten-Websites', businessText:'Moderne Websites für eine persönliche Marke, Fachkräfte oder Unternehmen.',
      corporateTitle:'Firmenwebsites', corporateText:'Eine vollständige Präsentation des Unternehmens, seiner Leistungen und Möglichkeiten.',
      responsiveTitle:'Responsives Design', responsiveText:'Eine praktische und moderne Darstellung auf jedem Gerät.',
      processTitle1:'Wie wir', processTitle2:'arbeiten', processSub:'Ein einfacher Ablauf für maximale Ergebnisse.',
      step1Title:'Idee besprechen', step1Text:'Wir lernen die Aufgabe kennen und definieren die Ziele der zukünftigen Website.',
      step2Title:'Design erstellen', step2Text:'Wir planen Struktur, Stil und visuelle Gestaltung der Seiten.',
      step3Title:'Website entwickeln', step3Text:'Wir verwandeln das Design in eine vollständige responsive Website.',
      step4Title:'Testen und starten', step4Text:'Wir prüfen die Website, beheben Fehler und bereiten den Start vor.',
      transparent:'Transparentes Vorgehen.', deadlines:'Klare Termine.', support:'Support nach dem Launch.',
      contactTitle1:'Lassen Sie uns', contactTitle2:'etwas Großes', contactTitle3:'gemeinsam erstellen.',
      contactText:'Schreiben Sie uns – wir besprechen Ihre Idee und finden die beste Lösung für Ihr Projekt.',
      footerTag:'Gemeinsam die Zukunft gestalten.', openMenu:'Menü öffnen', closeMenu:'Menü schließen', scrollAbout:'Zum Abschnitt „Über uns“ scrollen',
      toastSocial:'Der Link wurde noch nicht hinzugefügt — tragen Sie ihn in config.js ein', toastContact:'Kontakte sind noch nicht eingerichtet — tragen Sie sie in config.js ein',
      pageTitle:'Web Studio — moderne Weblösungen: Landingpages, Visitenkarten-Websites, Firmenwebsites',
      metaDescription:'Web Studio ist ein kleines, aber ambitioniertes Webstudio. Wir erstellen stilvolle, schnelle und responsive Landingpages, Visitenkarten- und Firmenwebsites.'
    },
    ru: {
      navAria:'Главная навигация', mobileNavAria:'Мобильная навигация', langAria:'Язык сайта',
      navAbout:'О нас', navServices:'Услуги', navProcess:'Процесс', navContact:'Контакты', writeUs:'Написать нам',
      heroLine1:'Создаем', heroLine2:'современные', heroLine3:'веб-решения.', heroSub:'Одностраничные сайты, лендинги, презентационные страницы и другие цифровые продукты.',
      discussProject:'Обсудить проект', aboutTitle1:'О', aboutTitle2:'нас',
      aboutLead:'Мы — небольшая, но амбициозная веб-студия, создающая стильные, быстрые и эффективные веб-продукты.',
      aboutP1:'Мы работаем с идеями, превращая их в современные сайты, которые помогают бизнесу развиваться.',
      aboutP2:'Стремимся создавать качественные цифровые решения, совершенствоваться и постепенно развивать свою команду.',
      quality:'Качество.', design:'Дизайн.', result:'Результат.',
      servicesTitle1:'Что мы', servicesTitle2:'делаем', servicesSub:'Разрабатываем веб-решения, которые работают на ваш бизнес.',
      landingTitle:'Лендинги', landingText:'Стильные одностраничные сайты для презентации услуг, продуктов и привлечения клиентов.',
      businessTitle:'Сайты-визитки', businessText:'Современные сайты для личного бренда, специалиста или бизнеса.',
      corporateTitle:'Корпоративные сайты', corporateText:'Полное представление компании, ее услуг и возможностей.',
      responsiveTitle:'Адаптивный дизайн', responsiveText:'Удобный и современный вид сайта на любом устройстве.',
      processTitle1:'Как мы', processTitle2:'работаем', processSub:'Простая схема для максимального результата.',
      step1Title:'Обсуждаем идею', step1Text:'Знакомимся с задачей и определяем цели будущего сайта.',
      step2Title:'Создаем дизайн', step2Text:'Продумываем структуру, стиль и внешний вид страниц.',
      step3Title:'Разрабатываем сайт', step3Text:'Превращаем дизайн в полноценный адаптивный сайт.',
      step4Title:'Тестируем и запускаем', step4Text:'Проверяем работу сайта, исправляем ошибки и готовим его к запуску.',
      transparent:'Прозрачный процесс.', deadlines:'Четкие сроки.', support:'Поддержка после запуска.',
      contactTitle1:'Давайте создадим', contactTitle2:'что-то крутое', contactTitle3:'вместе.',
      contactText:'Напишите нам — и мы обсудим вашу идею и найдем лучшее решение для вашего проекта.',
      footerTag:'Создаем будущее вместе.', openMenu:'Открыть меню', closeMenu:'Закрыть меню', scrollAbout:'Перейти к разделу «О нас»',
      toastSocial:'Ссылка еще не добавлена — впишите ее в файл config.js', toastContact:'Контакты еще не настроены — добавьте их в config.js',
      pageTitle:'Web Studio — современные веб-решения: лендинги, сайты-визитки, корпоративные сайты',
      metaDescription:'Web Studio — небольшая, но амбициозная веб-студия. Создаем стильные, быстрые и адаптивные лендинги, сайты-визитки и корпоративные сайты.'
    }
  };

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.uk;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.dataset.i18nAria;
      if (dict[key]) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-lang]').forEach(function (button) {
      button.classList.toggle('active', button.dataset.lang === lang);
      button.setAttribute('aria-pressed', button.dataset.lang === lang ? 'true' : 'false');
    });
    document.title = dict.pageTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict.metaDescription);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', dict.pageTitle);
    var burger = document.getElementById('burger');
    if (burger) {
      var menuOpen = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-label', menuOpen ? dict.closeMenu : dict.openMenu);
    }
    localStorage.setItem('studioLanguage', lang);
  }

  document.querySelectorAll('[data-lang]').forEach(function (button) {
    button.addEventListener('click', function () {
      applyLanguage(button.dataset.lang);
    });
  });

  /* ---------- Header scrolled state ---------- */
  var header = document.getElementById('header');
  function onScrollHeader() { header.classList.toggle('scrolled', window.scrollY > 20); }
  onScrollHeader();

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById('burger');
  var mnav = document.getElementById('mobileNav');
  function setMenu(open) {
    var lang = localStorage.getItem('studioLanguage') || 'uk';
    var dict = translations[lang] || translations.uk;
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? dict.closeMenu : dict.openMenu);
    mnav.classList.toggle('open', open);
    mnav.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.classList.toggle('menu-open', open);
  }
  burger.addEventListener('click', function () { setMenu(!mnav.classList.contains('open')); });
  mnav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 900) setMenu(false); });

  /* ---------- Toast ---------- */
  var toast = document.getElementById('toast');
  var toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 3400);
  }

  /* ---------- Contact links ---------- */
  function cleanValue(u) { return (u || '').trim(); }
  function telegramUrl(u) {
    u = cleanValue(u);
    if (!u) return '';
    if (/^https?:\/\//i.test(u) || u.indexOf('t.me/') !== -1) return u.indexOf('http') === 0 ? u : 'https://' + u;
    return 'https://t.me/' + u.replace(/^@/, '').replace(/^telegram\.me\//i, '');
  }
  function instagramUrl(u) {
    u = cleanValue(u);
    if (!u) return '';
    if (/^https?:\/\//i.test(u) || u.indexOf('instagram.com/') !== -1) return u.indexOf('http') === 0 ? u : 'https://' + u;
    return 'https://instagram.com/' + u.replace(/^@/, '').replace(/^instagram\.com\//i, '').replace(/^\/+|\/+$/g, '');
  }
  var tg = telegramUrl(cfg.telegram), ig = instagramUrl(cfg.instagram), em = cleanValue(cfg.email);
  var emailHref = em ? (em.indexOf('mailto:') === 0 ? em : 'mailto:' + em) : '';
  var links = { telegram: tg, instagram: ig, email: emailHref };

  document.querySelectorAll('.soc').forEach(function (a) {
    var href = links[a.dataset.soc];
    if (href) {
      a.href = href;
      if (href.indexOf('mailto:') !== 0) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    } else {
      a.classList.add('is-empty');
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var lang = localStorage.getItem('studioLanguage') || 'uk';
        showToast((translations[lang] || translations.uk).toastSocial);
      });
    }
  });

  // Головна кнопка зв'язку: Telegram → Email → Instagram
  var primary = tg || emailHref || ig;
  var mainBtn = document.getElementById('mainContactBtn');
  if (primary) {
    mainBtn.href = primary;
    if (primary.indexOf('mailto:') !== 0) { mainBtn.target = '_blank'; mainBtn.rel = 'noopener noreferrer'; }
  } else {
    mainBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var lang = localStorage.getItem('studioLanguage') || 'uk';
      showToast((translations[lang] || translations.uk).toastContact);
    });
  }

  // Усі інші кнопки «Написати нам / Обговорити проєкт» ведуть до секції контактів (плавний скрол за замовчуванням)
  /* ---------- Smooth anchor scroll (offset-aware fallback) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      var y = id === '#top' ? 0 : t.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
      history.replaceState(null, '', id);
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  // stagger siblings
  var groups = new Map();
  revealEls.forEach(function (el) {
    var p = el.parentElement;
    if (!groups.has(p)) groups.set(p, []);
    groups.get(p).push(el);
  });
  groups.forEach(function (arr) {
    arr.forEach(function (el, i) { el.style.setProperty('--d', (Math.min(i, 5) * 0.09) + 's'); });
  });
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Hero intro ---------- */
  var hero = document.querySelector('.hero');
  requestAnimationFrame(function () { requestAnimationFrame(function () { hero.classList.add('go'); }); });

  /* ---------- Parallax waves ---------- */
  var par = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var ticking = false;
  function parallax() {
    var y = window.scrollY;
    par.forEach(function (el) {
      var k = parseFloat(el.dataset.parallax) || 0.1;
      var r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
      el.style.transform = 'translate3d(0,' + (y * k * -1).toFixed(1) + 'px,0)';
    });
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    onScrollHeader();
    if (reduce || ticking) return;
    ticking = true;
    requestAnimationFrame(parallax);
  }, { passive: true });
  if (!reduce) parallax();

  /* ---------- Card glow follows pointer ---------- */
  document.querySelectorAll('.card').forEach(function (c) {
    c.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      c.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

  /* ---------- MacBook subtle pointer tilt (desktop only) ---------- */
  var mac = document.querySelector('.mac');
  var fine = window.matchMedia('(hover:hover) and (pointer:fine) and (min-width:901px)').matches;
  if (mac && fine && !reduce) {
    var scene = document.querySelector('.mac-scene');
    scene.addEventListener('pointermove', function (e) {
      var r = scene.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      mac.style.animation = 'none';
      mac.style.transform = 'rotateX(' + (10 - y * 8) + 'deg) rotateY(' + (-24 + x * 10) + 'deg) rotateZ(2deg)';
    });
    scene.addEventListener('pointerleave', function () {
      mac.style.transform = '';
      mac.style.animation = '';
    });
  }

  var savedLanguage = localStorage.getItem('studioLanguage');
  applyLanguage(savedLanguage === 'en' || savedLanguage === 'de' || savedLanguage === 'ru' ? savedLanguage : 'uk');
})();
