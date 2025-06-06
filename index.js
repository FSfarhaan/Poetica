// Import poems data
let poems = [];
fetch('poems_data.json')
  .then(response => response.json())
  .then(data => {
    poems = data;
    updateContent(currentLanguage); // Initial load after data is fetched
  });

// List of poets to be shown o
let poets = [];
fetch('poets_data.json')
  .then(response => response.json())
  .then(data => {
    poets = data;
    updateContent(currentLanguage); // Initial load after data is fetched
  });

// Translations and content
const translations = {
  en: {
    siteTitle: 'Poetica',
    tagline: 'Let your thoughts bloom like poetry.',
    hero: {
      quote: 'Poetry is when an emotion has found its thought and the thought has found words.',
      author: 'Robert Frost',
      cta1: 'Explore Poems',
      cta2: 'Subscribe',
    },
    navigation: {
      poetryOfDay: 'Poetry of the Day',
      featuredPoets: 'Featured Poets',
      collections: 'Collections',
      about: 'About'
    },
    poetryOfDay: 'Poetry of the Day',
    readFull: 'Read Full',
    categories: {
      love: 'Love',
      nature: 'Nature',
      life: 'Life',
      reflection: 'Reflection',
      spiritual: 'Spiritual'
    },
    footer: {
      about: {
        title: 'Poetica',
        description: 'A digital sanctuary for poetry lovers, celebrating the beauty of words across languages and cultures.'
      },
      quickLinks: {
        title: 'Quick Links',
        poetryOfDay: 'Poetry of the Day',
        featuredPoets: 'Featured Poets',
        collections: 'Collections'
      },
      connect: {
        title: 'Connect With Us'
      },
      copyright: '© 2025 Poetica. All rights reserved.',
      madeWith: 'Made with'
    }
  },
  hi: {
    siteTitle: 'पोएटिका',
    tagline: 'अपने विचारों को कविता की तरह खिलने दो।',
    hero: {
      quote: 'कविता वह है जब एक भावना ने विचार पाया और विचार ने शब्द।',
      author: 'रॉबर्ट फ्रॉस्ट',
      cta1: 'कविताएं देखें',
      cta2: 'सदस्यता लें',
    },
    navigation: {
      poetryOfDay: 'आज की कविता',
      featuredPoets: 'प्रमुख कवि',
      collections: 'संग्रह',
      about: 'हमारे बारे में'
    },
    poetryOfDay: 'आज की कविता',
    readFull: 'पूरा पढ़ें',
    categories: {
      love: 'प्रेम',
      nature: 'प्रकृति',
      life: 'जीवन',
      reflection: 'चिंतन',
      spiritual: 'आध्यात्मिकता'
    },
    footer: {
      about: {
        title: 'पोएटिका',
        description: 'कविता प्रेमियों के लिए एक डिजिटल आश्रय, भाषाओं और संस्कृतियों में शब्दों की सुंदरता का जश्न।'
      },
      quickLinks: {
        title: 'त्वरित लिंक',
        poetryOfDay: 'आज की कविता',
        featuredPoets: 'प्रमुख कवि',
        collections: 'संग्रह'
      },
      connect: {
        title: 'हमसे जुड़ें'
      },
      copyright: '© 2025 पोएटिका। सर्वाधिकार सुरक्षित।',
      madeWith: 'बनाया गया'
    }
  },
  ur: {
    siteTitle: 'پوئٹیکا',
    tagline: 'اپنے خیالات کو شاعری کی طرح کھلنے دو۔',
    hero: {
      quote: 'شاعری وہ ہے جب ایک جذبے کو خیال ملا اور خیال کو الفاظ۔',
      author: 'رابرٹ فراسٹ',
      cta1: 'نظمیں دیکھیں',
      cta2: 'سبسکرائب کریں',
    },
    navigation: {
      poetryOfDay: 'آج کی نظم',
      featuredPoets: 'نمایاں شاعر',
      collections: 'مجموعے',
      about: 'ہمارے بارے میں'
    },
    poetryOfDay: 'آج کی نظم',
    readFull: 'مکمل نظم پڑھیں',
    categories: {
      love: 'محبت',
      nature: 'قدرت',
      life: 'زندگی',
      reflection: 'غور و فکر',
      spiritual: 'روحانیت'
    },
    footer: {
      about: {
        title: 'پوئٹیکا',
        description: 'شاعری کے شائقین کے لیے ایک ڈیجیٹل پناہ گاہ، زبانوں اور ثقافتوں میں الفاظ کی خوبصورتی کا جشن۔'
      },
      quickLinks: {
        title: 'فوری لنکس',
        poetryOfDay: 'آج کی نظم',
        featuredPoets: 'نمایاں شاعر',
        collections: 'مجموعے'
      },
      connect: {
        title: 'ہم سے جڑیں'
      },
      copyright: '© 2025 پوئٹیکا۔ جملہ حقوق محفوظ ہیں۔',
      madeWith: 'بنایا گیا'
    }
  },
};

// Current language state
let currentLanguage = 'en';
let currentCategory = 'love'; // Default category

// Function to update content based on selected language
function updateContent(lang, category = currentCategory) {
  const t = translations[lang];
  currentLanguage = lang;
  currentCategory = category;

  // Update title and tagline
  const titleEl = document.getElementById("site-title");
  const taglineEl = document.getElementById("tagline");
  if (titleEl) titleEl.innerText = t.siteTitle;
  if (taglineEl) taglineEl.innerText = t.tagline;

  // Update hero section
  const quoteTextEl = document.getElementById("quote-text");
  const quoteAuthorEl = document.getElementById("quote-author");
  const cta1El = document.getElementById("cta1");
  const cta2El = document.getElementById("cta2");

  if (quoteTextEl) quoteTextEl.innerText = t.hero.quote;
  if (quoteAuthorEl) quoteAuthorEl.innerText = `— ${t.hero.author}`;
  if (cta1El) cta1El.innerText = t.hero.cta1;
  if (cta2El) cta2El.innerText = t.hero.cta2;

  // Update navigation
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length >= 4) {
    navLinks[0].innerText = t.navigation.poetryOfDay;
    navLinks[1].innerText = t.navigation.featuredPoets;
    navLinks[2].innerText = t.navigation.collections;
    navLinks[3].innerText = t.navigation.about;
  }

  // Update section headings
  const poetryOfDayHeading = document.querySelector('#poetry-of-day h2');
  const featuredPoetsHeading = document.querySelector('#featured-poets h2');
  const collectionsHeading = document.querySelector('#collections h2');

  if (poetryOfDayHeading) poetryOfDayHeading.innerText = t.poetryOfDay;
  if (featuredPoetsHeading) featuredPoetsHeading.innerText = t.navigation.featuredPoets;
  if (collectionsHeading) collectionsHeading.innerText = t.navigation.collections;

  // Update footer
  const footer = document.querySelector('#footer');
  if (footer) {
    const footerTitle = footer.querySelector('h3');
    const footerDesc = footer.querySelector('.text-white\\/80');
    const quickLinks = footer.querySelectorAll('.text-left h4');
    const footerLinks = footer.querySelectorAll('.space-y-2 a');
    const madeWithText = document.getElementById('made-with-text');
    const copyrightText = document.getElementById('copyright-text');

    if (footerTitle) footerTitle.innerText = t.footer.about.title;
    if (footerDesc) footerDesc.innerText = t.footer.about.description;

    if (quickLinks.length >= 2) {
      quickLinks[0].innerText = t.footer.quickLinks.title;
      if (quickLinks[1]) quickLinks[1].innerText = t.footer.connect.title;
    }

    if (footerLinks.length >= 3) {
      footerLinks[0].innerText = t.footer.quickLinks.poetryOfDay;
      footerLinks[1].innerText = t.footer.quickLinks.featuredPoets;
      footerLinks[2].innerText = t.footer.quickLinks.collections;
    }

    if (madeWithText) madeWithText.innerText = t.footer.madeWith;
    if (copyrightText) copyrightText.innerText = t.footer.copyright;
  }

  // Update Poetry of the Day
  const poemOfDay = poems.find(p => p.language === lang) || poems[0];
  if (poemOfDay) {
    const poemTitle = document.getElementById("poem-title");
    const poemExcerpt = document.getElementById("poem-excerpt");
    const poemAuthor = document.getElementById("poem-author");
    const poemCategory = document.getElementById("poem-category");
    const readFullBtn = document.querySelector('#poetry-of-day button');

    if (poemTitle) poemTitle.innerText = poemOfDay.title;
    if (poemExcerpt) poemExcerpt.innerText = poemOfDay.text.slice(0, 100) + "...";
    if (poemAuthor) poemAuthor.innerText = `— ${poemOfDay.poet}`;
    if (poemCategory) poemCategory.innerText = t.categories[poemOfDay.category];
    
    if (readFullBtn) {
      readFullBtn.innerText = t.readFull;
      readFullBtn.onclick = () => showPoemModal(poemOfDay, translations);
    }
  }

  // Update featured poets section
  const poetsGrid = document.getElementById("poets-grid");
  if (poetsGrid) {
    // Get poets for current language
    const languagePoets = poets.filter(poet => poet.language === lang);

    // Clear existing content
    poetsGrid.innerHTML = '';

    // Add poets for current language
    languagePoets.forEach(poet => {
      const poetCard = `
        <div class="bg-white rounded-2xl p-6 shadow-lg border border-poetry-beige/50 group hover:scale-105 transition-transform duration-500"
          style="animation-delay: 0.4s;">
          <div class="text-center">
            <div class="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
              <img src="${poet.image}"
                alt="${poet.name}"
                class="w-full h-full object-cover" />
            </div>

            <h3 class="text-xl font-bold text-poetry-brown mb-2 text-left">
              ${poet.name}
            </h3>

            <p class="text-poetry-text mb-4 text-left">
              ${poet.bio}
            </p>

          </div>
        </div>
      `;
      poetsGrid.innerHTML += poetCard;
    });
  }

  // Update poetry collections section
  const collectionsGrid = document.querySelector('#collections .grid');
  const noPoemsMessage = document.querySelector('#collections .text-center.py-12');

  if (collectionsGrid && noPoemsMessage) {
    // Update category buttons
    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(btn => {
      const btnCategory = btn.getAttribute('data-category');
      if (btnCategory === category) {
        btn.classList.remove('bg-[#FEF8F3]/50', 'text-[#5B3E31]');
        btn.classList.add('text-white', 'shadow-lg', 'scale-105', 'bg-yellow-800');
      } else {
        btn.classList.remove('text-white', 'shadow-lg', 'scale-105', 'bg-yellow-800');
        btn.classList.add('bg-[#FEF8F3]/50', 'text-[#5B3E31]');
      }
    });

    // Filter poems by language and category
    const filteredPoems = poems.filter(poem =>
      poem.language === lang && poem.category === category
    );

    // Clear existing poems
    collectionsGrid.innerHTML = '';

    if (filteredPoems.length > 0) {
      noPoemsMessage.classList.add('hidden');

      // Add filtered poems
      filteredPoems.forEach(poem => {
        const poemCard = `
          <div class="rounded-2xl p-6 bg-white shadow-lg border border-[#FEF8F3]/50 group hover:scale-105 transition-transform duration-500">
            <div class="text-left">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-lg font-bold text-[#5B3E31] line-clamp-2 flex-1">${poem.title}</h3>
                <button class="ml-2 p-1 text-[#F5C5B8] hover:text-red-500 transition-colors">
                  ❤️
                </button>
              </div>
              <div class="text-[#5B3E31] mb-4 text-sm leading-relaxed line-clamp-4 whitespace-pre-line">
                ${poem.text ? poem.text.slice(0, 100) : poem.excerpt.slice(0, 100)}...
              </div>
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-[#5B3E31] font-medium text-sm">— ${poem.poet}</p>
                  <span class="inline-block px-2 py-1 bg-[#F5C5B8]/20 text-[#5B3E31] text-xs rounded-full mt-1">
                    ${t.categories[poem.category]}
                  </span>
                </div>
                <button class="read-full-btn px-4 py-2 bg-yellow-800 text-white text-sm rounded-full hover:bg-[#5B3E31]/90 transition-all duration-500 hover:scale-105">
                  ${t.readFull}
                </button>
              </div>
            </div>
          </div>
        `;
        collectionsGrid.innerHTML += poemCard;
      });

      // Add click handlers for all read full buttons
      collectionsGrid.querySelectorAll('.read-full-btn').forEach((btn, index) => {
        btn.onclick = () => showPoemModal(filteredPoems[index], translations);
      });
    } else {
      noPoemsMessage.classList.remove('hidden');
    }
  }
}

// Modal functionality
function showPoemModal(poem, translations) {
  const modal = document.getElementById('poem-modal');
  const t = translations[currentLanguage];

  // Update modal content
  document.getElementById('modal-title').innerText = poem.title;
  document.getElementById('modal-poem').innerText = poem.text ? poem.text : poem.excerpt;
  document.getElementById('modal-author').innerText = `— ${poem.poet}`;
  document.getElementById('modal-category').innerText = t.categories[poem.category];

  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closePoemModal() {
  const modal = document.getElementById('poem-modal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

// GSAP Animations
function initAnimations() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Hero Section Animation
  const heroTimeline = gsap.timeline();
  heroTimeline
    .from("#site-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from("#tagline", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .from("#quote", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .from("#cta-buttons", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");


  gsap.from("#poetry-of-day > div", {
    scrollTrigger: {
      trigger: "#poetry-of-day > div",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 70,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3
  });

  gsap.from("#poetry-of-day-card div", {
    scrollTrigger: {
      trigger: "#poetry-of-day-card div",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 70,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3
  });

  gsap.from("#featured-poets > div div", {
    scrollTrigger: {
      trigger: "#featured-poets > div div",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3
  });

  gsap.from("#poets-grid div", {
    scrollTrigger: {
      trigger: "#poets-grid div",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.6
  });

  // Collections Section Animation
  // gsap.from("#collections .category-button", {
  //   scrollTrigger: {
  //     trigger: "#collections .category-button",
  //     start: "top 80%",
  //     toggleActions: "play none none reverse"
  //   },
  //   y: 50,
  //   opacity: 0,
  //   duration: 0.6,
  //   stagger: 0.2,
  //   ease: "power3.out"
  // });

  gsap.from("#collections > div div", {
    scrollTrigger: {
      trigger: "#collections > div div",
      start: "top 70%",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });

  // Footer Animation
  gsap.from("#footer > div", {
    scrollTrigger: {
      trigger: "#footer > div",
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Navbar Animation
  gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Scroll Cue Animation
  gsap.to(".animate-bounce", {
    y: 10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
}

// Initialize animations when DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  // Initial content load
  updateContent(currentLanguage);

  // Initialize GSAP animations
  initAnimations();

  // Language toggle
  const langToggle = document.getElementById("lang-toggle");
  const buttons = langToggle.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update button styles
      buttons.forEach(b => {
        b.classList.remove("bg-poetry-brown", "text-white", "selected");
        b.classList.add("text-poetry-text");
      });
      btn.classList.remove("text-poetry-text");
      btn.classList.add("bg-poetry-brown", "text-white", "selected");

      // Update language and content
      const newLang = btn.getAttribute('data-lang');
      if (newLang && translations[newLang]) {
        updateContent(newLang);
      }
    });
  });

  // Category buttons
  const categoryButtons = document.querySelectorAll('.category-button');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      if (category) {
        updateContent(currentLanguage, category);
      }
    });
  });

  // Modal close button
  document.getElementById('close-modal').addEventListener('click', closePoemModal);

  // Close modal when clicking outside
  document.getElementById('poem-modal').addEventListener('click', (e) => {
    if (e.target.id === 'poem-modal') {
      closePoemModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePoemModal();
    }
  });
});
