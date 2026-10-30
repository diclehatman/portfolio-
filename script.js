// ============================================================
// EMAILJS YAPILANDIRMASI / EMAILJS CONFIGURATION
// ============================================================
// EmailJS panelinden (https://www.emailjs.com) aldığınız
// değerleri aşağıdaki üç alana yapıştırın:
//   serviceId  → Email Services > servisinizin Service ID'si
//   templateId → Email Templates > şablonunuzun Template ID'si
//   publicKey  → Account > API Keys > Public Key
// Bu değerler doldurulmadan form e-posta GÖNDERMEYECEKTİR.
// ============================================================
const EMAILJS_CONFIG = {
    serviceId: "service_sa8yfp6",
    templateId: "template_cj3yjaf",
    publicKey: "P1OMEAJI8PNbL1LQG"
};

// ============================================================
// YENİ REFERANSI BURAYA EKLEYİN / ADD NEW REFERENCE HERE
// ============================================================
// Yeni bir referans eklemek için aşağıdaki diziye yeni bir nesne eklemeniz yeterlidir.
// Boş bırakılan alanlar (comment veya link) otomatik olarak gizlenir.
// Alanlar:
// - id: Referans numarası ("01", "02" vb.)
// - category: Üst kategori başlığı ({ tr: "...", en: "..." })
// - client: Marka / müşteri adı
// - title: Referans başlığı ({ tr: "...", en: "..." })
// - service: Hizmet türü ({ tr: "...", en: "..." })
// - year: Yıl
// - comment: (İsteğe bağlı) Kısa değerlendirme / yorum ({ tr: "...", en: "..." } veya "")
// - image: Görsel dosya yolu
// - imageAlt: Görsel alt metni
// - link: (İsteğe bağlı) Yönlendirilecek bağlantı (boş bırakılırsa buton görünmez)
// - testimonial: (İsteğe bağlı) İlgili projeye ait müşteri yorumu:
//     {
//         quote: { tr: "...", en: "..." },
//         name: { tr: "...", en: "..." },
//         title: { tr: "...", en: "..." },
//         company: { tr: "...", en: "..." },
//         stat: "+%120", // İsteğe bağlı sonuç rakamı, boş bırakılabilir
//         rating: 5
//     }

const referencesData = [
    {
        id: "01",
        category: { tr: "01 FIGMA", en: "01 FIGMA" },
        client: "Elvira Restaurant",
        title: {
            tr: "Restoran Mobil Uygulaması",
            en: "Restaurant Mobile App"
        },
        service: {
            tr: "UX/UI Tasarım",
            en: "UX/UI Design"
        },
        year: "2026",
        comment: {
            tr: "Restoran deneyimini dijitale taşıyan kullanıcı dostu mobil sipariş ve rezervasyon arayüzü.",
            en: "A user-friendly mobile ordering and reservation interface bringing the dining experience to the digital space."
        },
        image: "images/ Phone Mockup.png",
        imageAlt: "Restaurant Mobile App",
        link: "",
        reverse: false,
        isPoster: false,
        testimonial: {
            quote: {
                tr: "Kullanıcı deneyimi ve modern mobil arayüz tasarımı ile müşteri memnuniyetimiz ve online sipariş oranlarımız hızla ivme kazandı.",
                en: "The intuitive user experience and modern interface design rapidly accelerated our customer satisfaction and digital order conversion rates."
            },
            name: { tr: "S**** Y*****", en: "S**** Y*****" },
            title: { tr: "Pazarlama Direktörü", en: "Marketing Director" },
            company: { tr: "Elvira Restaurant", en: "Elvira Restaurant" },
            stat: "+%95",
            rating: 5
        }
    },
    {
        id: "02",
        category: { tr: "02 AFİŞ", en: "02 POSTER" },
        client: "Cash Flow Live Event",
        title: {
            tr: "Konser & Etkinlik Afişi",
            en: "Cash Flow Live Event Poster"
        },
        service: {
            tr: "Afiş Tasarımı & Tipografi",
            en: "Poster Design & Typography"
        },
        year: "2025",
        comment: {
            tr: "Canlı rap/hip-hop performansı için karanlık atmosfer ve çarpıcı merkezi tipografiyle tasarlanan dinamik etkinlik afişi.",
            en: "A dynamic event poster designed for live rap/hip-hop performance, featuring bold central typography and moody tones."
        },
        image: "images/CASHST.jpg",
        imageAlt: "Cash Flow Live Event Poster",
        link: "",
        reverse: true,
        isPoster: true,
        testimonial: {
            quote: {
                tr: "Gerçekten çok başarılı ve profesyonel bir çalışma olmuş. Tasarımdaki detaylar, estetik anlayışı ve yaratıcılık kendini hemen belli ediyor. Emeğinin karşılığını fazlasıyla hak ediyor...",
                en: "Truly a very successful and professional work. The attention to detail, aesthetic sense, and creativity are immediately apparent. It more than deserves the reward for the effort..."
            },
            name: { tr: "E*** K***", en: "E*** K***" },
            title: { tr: "Kreatif Direktör", en: "Creative Director" },
            company: { tr: "Etkinlik & Prodüksiyon", en: "Event & Production" },
            stat: "+%120",
            rating: 5
        }
    },
    {
        id: "03",
        category: { tr: "02 AFİŞ", en: "02 POSTER" },
        client: "MCA Cars",
        title: {
            tr: "Lüks Otomotiv Tanıtım Afişi",
            en: "MCA Cars Automotive Flyer"
        },
        service: {
            tr: "Tanıtım Afişi & Sosyal Medya",
            en: "Social Media & Showcase Flyer"
        },
        year: "2025",
        comment: {
            tr: "Lüks araç galerisi için hız, güven ve prestij hissini yansıtan çok açılı fotoğraf kurgusuyla tasarlanan tanıtım afişi.",
            en: "A modern digital flyer designed for a luxury automotive gallery, conveying prestige, speed, and premium quality."
        },
        image: "images/mca kopyası.png",
        imageAlt: "MCA Cars Automotive Flyer",
        link: "",
        reverse: false,
        isPoster: true,
        testimonial: {
            quote: {
                tr: "Lüks galerimizin lansman ve tanıtım afişlerinde yakalanan prestijli görsel dil, müşteri geri dönüşlerini ve marka algımızı zirveye taşıdı.",
                en: "The prestigious visual direction and composition of the showcase flyers elevated our brand perception and client inquiry rates."
            },
            name: { tr: "M**** C*** A***", en: "M**** C*** A***" },
            title: { tr: "Marka Yöneticisi", en: "Brand Manager" },
            company: { tr: "MCA Cars", en: "MCA Cars" },
            stat: "+%85",
            rating: 5
        }
    },
    {
        id: "04",
        category: { tr: "03 KOD & WEB", en: "03 CODE & WEB" },
        client: "MCA Cars",
        title: {
            tr: "Kurumsal Web Sitesi",
            en: "Corporate Website"
        },
        service: {
            tr: "Web Tasarım & Geliştirme",
            en: "HTML / CSS / JavaScript"
        },
        year: "2026",
        comment: {
            tr: "Lüks araç galerisi için modern, hızlı ve duyarlı web sitesi tasarımı ve kodlaması.",
            en: "A modern, high-performance responsive website designed and developed for a luxury automotive gallery."
        },
        image: "images/Website Mockup.png",
        imageAlt: "Corporate Website",
        link: "",
        reverse: true,
        isPoster: false,
        testimonial: {
            quote: {
                tr: "Yeni web sitemizin hızı, kusursuz duyarlı yapısı ve şık tasarımı dijitaldeki dönüşümümüzü doğrudan katladı.",
                en: "The speed, responsiveness, and refined aesthetics of our new website directly multiplied our digital conversions."
            },
            name: { tr: "C**** A*****", en: "C**** A*****" },
            title: { tr: "Genel Müdür", en: "Managing Director" },
            company: { tr: "MCA Cars", en: "MCA Cars" },
            stat: "+%110",
            rating: 5
        }
    }
];

// ============================================================
// YENİ YORUMU BURAYA EKLEYİN / ADD NEW TESTIMONIAL HERE
// ============================================================
// Yeni bir müşteri yorumu eklemek için aşağıdaki diziye yeni bir nesne eklemeniz yeterlidir.
// Boş bırakılan alanlar (stat, service, comment) otomatik olarak gizlenir.
// Alanlar:
// - id: Yorum kimliği ("feat-01", "01" vb.)
// - featured: true ise üstteki öne çıkan büyük yorum kutusunda gösterilir (tek bir tane olmalı)
// - quote: Yorum metni ({ tr: "[YORUM METNİ]", en: "[TESTIMONIAL TEXT]" })
// - name: Müşteri adı ({ tr: "[Müşteri Adı]", en: "[Client Name]" })
// - title: Müşteri unvanı ({ tr: "[Unvan]", en: "[Title / Role]" })
// - company: Marka / Şirket ({ tr: "[Marka]", en: "[Company / Brand]" })
// - service: (İsteğe bağlı) Hizmet etiketi ({ tr: "[Hizmet Türü]", en: "[Service Tag]" })
// - stat: (İsteğe bağlı) Sonuç rakamı (örn. "+%140", "+%120") - boş bırakılırsa görünmez
// - rating: 5 (yıldız sayısı)

const testimonialsData = [
    {
        id: "feat-01",
        featured: true,
        quote: {
            tr: "[YORUM METNİ: Strateji ile estetiğin buluştuğu, markamızın dijital algısını ve performansını üst seviyeye taşıyan kusursuz bir iş birliği oldu.]",
            en: "[TESTIMONIAL TEXT: A remarkable collaboration where strategy met aesthetics, elevating our brand perception and digital performance to the highest level.]"
        },
        name: { tr: "M**** A***", en: "M**** A***" },
        title: { tr: "[Kurucu & CEO]", en: "[Founder & CEO]" },
        company: { tr: "[Lüks Marka / Şirket Adı]", en: "[Luxury Brand / Company]" },
        stat: "+%140",
        rating: 5
    },
    {
        id: "01",
        featured: false,
        quote: {
            tr: "[YORUM METNİ: Kullanıcı deneyimi ve modern arayüz tasarımı ile müşteri memnuniyetimiz ve sipariş oranlarımız hızla arttı.]",
            en: "[TESTIMONIAL TEXT: The intuitive user experience and refined interface design rapidly accelerated our customer satisfaction and ordering rates.]"
        },
        name: { tr: "S**** Y*****", en: "S**** Y*****" },
        title: { tr: "[Pazarlama Direktörü]", en: "[Marketing Director]" },
        company: { tr: "[Restoran Markası]", en: "[Restaurant Brand]" },
        service: { tr: "UX/UI Tasarım", en: "UX/UI Design" },
        stat: "+%95",
        rating: 5
    },
    {
        id: "02",
        featured: false,
        quote: {
            tr: "Gerçekten çok başarılı ve profesyonel bir çalışma olmuş. Tasarımdaki detaylar, estetik anlayışı ve yaratıcılık kendini hemen belli ediyor. Emeğinin karşılığını fazlasıyla hak ediyor...",
            en: "Truly a very successful and professional work. The attention to detail, aesthetic sense, and creativity are immediately apparent. It more than deserves the reward for the effort..."
        },
        name: { tr: "E*** K***", en: "E*** K***" },
        title: { tr: "[Kreatif Direktör]", en: "[Creative Director]" },
        company: { tr: "[Etkinlik & Prodüksiyon]", en: "[Event & Production]" },
        service: { tr: "Görsel Kimlik", en: "Visual Identity" },
        stat: "+%120",
        rating: 5
    },
    {
        id: "03",
        featured: false,
        quote: {
            tr: "[YORUM METNİ: Yeni web sitemizin hızı, duyarlı yapısı ve şık tasarımı dijitaldeki dönüşümümüzü doğrudan katladı.]",
            en: "[TESTIMONIAL TEXT: The speed, responsiveness, and refined aesthetics of our new website directly multiplied our digital conversions.]"
        },
        name: { tr: "M**** C*** A***", en: "M**** C*** A***" },
        title: { tr: "[Genel Müdür]", en: "[Managing Director]" },
        company: { tr: "[Otomotiv Galerisi]", en: "[Automotive Gallery]" },
        service: { tr: "Web Tasarım", en: "Web Design" },
        stat: "", // Boş bırakıldı: Boş alanlar hiç görünmesin kuralı!
        rating: 5
    }
];

// ============================================================
// ÇEVİRİLER / TRANSLATIONS (TR & EN)
// ============================================================
const translations = {
    tr: {
        pageTitle: "GIGI DESIGN | Dijital Pazarlamacı & Tasarımcı",
        metaDesc: "Gigi Design - Strateji ile estetiği buluşturan dijital pazarlamacı ve tasarımcı. Şık ve sonuç getiren dijital deneyimler.",
        ogTitle: "GIGI DESIGN | Dijital Pazarlamacı & Tasarımcı",
        ogDesc: "Gigi Design - Strateji ile estetiği buluşturan dijital pazarlamacı ve tasarımcı. Şık ve sonuç getiren dijital deneyimler.",

        // Nav
        navHome: "ANA SAYFA",
        navAbout: "HAKKIMDA",
        navSkills: "YETENEKLER",
        navReferences: "REFERANSLAR",
        navContact: "İLETİŞİM",

        // Hero
        heroStatement: "Strateji ve estetiğin buluştuğu yer.",
        scrollText: "KAYDIR",

        // About
        aboutTitle: '<span class="block">HAKKIMDA</span>',
        aboutSubtitle: "Strateji ve estetik, tek çatı altında.",
        aboutP1: "Ben Gigi; dijital pazarlamacı ve tasarımcıyım. Strateji ile estetiği buluşturarak markaların hem şık görünmesini hem de dijitalde sonuç getirmesini sağlıyorum.",
        aboutP2: "UX/UI tasarımından görsel kimliğe, dijital kampanyalardan içerik stratejisine kadar hem güzel hem ölçülebilir deneyimler kurguluyorum.",
        // Yetkinlik sütunları
        compTitle1: "TASARIM",
        comp1Item1: "UX/UI Tasarım",
        comp1Item2: "Görsel Kimlik",
        comp1Item3: "Web Tasarım",
        comp1Item4: "Sosyal Medya Görselleri",
        compTitle2: "DİJİTAL PAZARLAMA",
        comp2Item1: "İçerik Stratejisi",
        comp2Item2: "Sosyal Medya Yönetimi",
        comp2Item3: "Dijital Reklam Kampanyaları",
        comp2Item4: "Performans Analizi",
        // Rakam şeridi — [00]/[0] yer tutucuları gerçek değerlerle değiştirilene kadar şerit gizlidir.
        statProjects: "[00]+",
        statProjectsLabel: "Tamamlanan Proje",
        statClients: "[00]+",
        statClientsLabel: "Mutlu Müşteri",
        statYears: "[0]",
        statYearsLabel: "Yıl Deneyim",

        // Skills
        skillsTitle: '<span class="block">YARATICI</span><span class="block italic">ARAÇLAR</span>',
        skillCat1: "UX / UI TASARIM",
        skillCat2: "GÖRSEL TASARIM",
        skillCat3: "GELİŞTİRME",
        skillUserResearch: "Kullanıcı Araştırması",
        skillUserExp: "Kullanıcı Deneyimi",
        skillDesignSystems: "Tasarım Sistemleri",
        skillResponsive: "Duyarlı Web Tasarımı",

        // References & Testimonials
        referencesTitle: '<span class="block">SEÇİLMİŞ</span><span class="block italic">REFERANSLAR</span>',
        viewBtn: "İNCELE",
        testimonialsSubtitle: "MÜŞTERİ YORUMLARI",

        // Contact
        contactTitle: '<span class="block">BİRLİKTE</span><span class="block italic">GÜZEL</span><span class="block">BİR ŞEY YARATALIM.</span>',
        formName: "Ad Soyad",
        formEmail: "E-posta",
        formMessage: "Mesaj",
        sendBtn: "MESAJ GÖNDER",
        sendingBtn: "Gönderiliyor…",

        // Form doğrulama hataları
        errName: "Ad Soyad alanı boş bırakılamaz.",
        errEmail: "Geçerli bir e-posta adresi girin.",
        errMessage: "Mesaj alanı boş bırakılamaz.",
        errKvkk: "Devam etmek için aydınlatma metnini onaylamanız gerekiyor.",

        // Form durum mesajları
        successMsg: "Mesajınız iletildi, en kısa sürede dönüş yapacağım.",
        errorMsg: "Bir hata oluştu. Lütfen tekrar deneyin ya da doğrudan ulaşın:",
        cooldownMsg: "Lütfen tekrar göndermeden önce birkaç saniye bekleyin.",

        // KVKK
        kvkkText: '<a href="#" class="kvkk-link" target="_blank" rel="noopener noreferrer">Aydınlatma Metnini</a> okudum ve kabul ediyorum.',
        kvkkLink: "Aydınlatma Metni",

        // Footer
        footerRole: "DİJİTAL PAZARLAMACI & TASARIMCI",
        footerCopy: "&copy; 2026 GIGI DESIGN. TÜM HAKLARI SAKLIDIR."
    },
    en: {
        pageTitle: "GIGI DESIGN | Digital Marketer & Designer Portfolio",
        metaDesc: "Gigi Design - Digital Marketer & Designer creating elegant, intuitive, and measurable digital experiences. View my portfolio for luxury brand designs, web interfaces, and creative art direction.",
        ogTitle: "GIGI DESIGN | Digital Marketer & Designer Portfolio",
        ogDesc: "Gigi Design - Digital Marketer & Designer creating elegant, intuitive, and measurable digital experiences.",

        // Nav
        navHome: "HOME",
        navAbout: "ABOUT",
        navSkills: "SKILLS",
        navReferences: "REFERENCES",
        navContact: "CONTACT",

        // Hero
        heroStatement: "Where strategy meets aesthetics.",
        scrollText: "SCROLL",

        // About
        aboutTitle: '<span class="block">ABOUT</span>',
        aboutSubtitle: "Strategy and aesthetics, under one roof.",
        aboutP1: "I'm Gigi, a digital marketer and designer. I bring strategy and aesthetics together so brands look refined and perform in the digital world.",
        aboutP2: "From UX/UI and visual identity to digital campaigns and content strategy, I craft experiences that are both beautiful and measurable.",
        // Competency columns
        compTitle1: "DESIGN",
        comp1Item1: "UX/UI Design",
        comp1Item2: "Visual Identity",
        comp1Item3: "Web Design",
        comp1Item4: "Social Media Visuals",
        compTitle2: "DIGITAL MARKETING",
        comp2Item1: "Content Strategy",
        comp2Item2: "Social Media Management",
        comp2Item3: "Digital Ad Campaigns",
        comp2Item4: "Performance Analytics",
        // Stats strip — strip is hidden while [00]/[0] placeholders remain.
        statProjects: "[00]+",
        statProjectsLabel: "Projects Completed",
        statClients: "[00]+",
        statClientsLabel: "Happy Clients",
        statYears: "[0]",
        statYearsLabel: "Years of Experience",

        // Skills
        skillsTitle: '<span class="block">CREATIVE</span><span class="block italic">TOOLKIT</span>',
        skillCat1: "UX / UI DESIGN",
        skillCat2: "VISUAL DESIGN",
        skillCat3: "DEVELOPMENT",
        skillUserResearch: "User Research",
        skillUserExp: "User Experience",
        skillDesignSystems: "Design Systems",
        skillResponsive: "Responsive Web Design",

        // References & Testimonials
        referencesTitle: '<span class="block">SELECTED</span><span class="block italic">REFERENCES</span>',
        viewBtn: "VIEW",
        testimonialsSubtitle: "TESTIMONIALS",

        // Contact
        contactTitle: '<span class="block">LET\'S CREATE</span><span class="block italic">SOMETHING</span><span class="block">BEAUTIFUL.</span>',
        formName: "Name",
        formEmail: "Email",
        formMessage: "Message",
        sendBtn: "SEND MESSAGE",
        sendingBtn: "Sending…",

        // Form validation errors
        errName: "Name field cannot be empty.",
        errEmail: "Please enter a valid email address.",
        errMessage: "Message field cannot be empty.",
        errKvkk: "Please accept the privacy notice to continue.",

        // Form status messages
        successMsg: "Your message has been sent. I'll get back to you shortly.",
        errorMsg: "Something went wrong. Please try again or reach me directly:",
        cooldownMsg: "Please wait a few seconds before sending again.",

        // KVKK / Privacy
        kvkkText: 'I have read and accepted the <a href="#" class="kvkk-link" target="_blank" rel="noopener noreferrer">Privacy Notice</a>.',
        kvkkLink: "Privacy Notice",

        // Footer
        footerRole: "DIGITAL MARKETER & DESIGNER",
        footerCopy: "&copy; 2026 GIGI DESIGN. ALL RIGHTS RESERVED."
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    let hoverElements = document.querySelectorAll('a, button, input, textarea, .project-image-wrapper, .hamburger, .lang-btn, .testimonial-card, .project-testimonial-box');

    if (window.innerWidth > 768 && cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const bindHover = (elements) => {
            elements.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
            });
        };
        bindHover(hoverElements);

        // Dinamik eklenen öğeler için imleç bağlayıcı
        window.attachCursorHover = () => {
            const dynamicHover = document.querySelectorAll('a, button, input, textarea, .project-image-wrapper, .hamburger, .lang-btn, .testimonial-card, .project-testimonial-box');
            bindHover(dynamicHover);
        };
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const observeAnimated = () => {
        const animatedElements = document.querySelectorAll('.fade-up, .reveal-text, .zoom-in');
        animatedElements.forEach(el => animObserver.observe(el));
    };
    observeAnimated();

    // Dinamik öğeler için dinleyicileri güncelle
    window.attachDynamicListeners = () => {
        observeAnimated();
        if (window.attachCursorHover) {
            window.attachCursorHover();
        }
    };

    // Parallax effect to image placeholders
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    window.addEventListener('scroll', () => {
        imagePlaceholders.forEach(img => {
            const speed = 0.15;
            const yPos = -(window.scrollY * speed);
            img.style.transform = `translateY(${yPos * 0.1}px)`;
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const mobileNavbar = document.querySelector('.navbar');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            if (mobileNavbar) mobileNavbar.classList.toggle('menu-open');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                if (mobileNavbar) mobileNavbar.classList.remove('menu-open');
            });
        });
    }

    // Active Navigation Link on Scroll (Scroll Spy)
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    if (sections.length && navItems.length) {
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPosition = window.scrollY + 200;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            if (current) {
                navItems.forEach(item => {
                    const href = item.getAttribute('href');
                    if (href === `#${current}` || href === `index.html#${current}`) {
                        item.classList.add('active');
                    } else if (href && (href.startsWith('#') || href.startsWith('index.html#'))) {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }

    // ============================================================
    // DİL YÖNETİMİ & SEÇİCİ / LANGUAGE SWITCHER
    // ============================================================
    window.setLanguage = function (lang) {
        if (!translations[lang]) lang = 'en';
        currentLang = lang;

        // <html lang="..."> güncelle
        document.documentElement.setAttribute('lang', lang);

        // Metinleri güncelle (textContent)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key] !== undefined) {
                el.textContent = translations[lang][key];
            }
        });

        // HTML içeren başlıkları güncelle (innerHTML - span.block span.italic yapısını korur)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (translations[lang][key] !== undefined) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Placeholder'ları güncelle
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key] !== undefined) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Sayfa başlığı ve Meta etiketleri
        if (translations[lang].pageTitle) {
            document.title = translations[lang].pageTitle;
        }
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && translations[lang].metaDesc) {
            metaDesc.setAttribute('content', translations[lang].metaDesc);
        }
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && translations[lang].ogTitle) {
            ogTitle.setAttribute('content', translations[lang].ogTitle);
        }
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && translations[lang].ogDesc) {
            ogDesc.setAttribute('content', translations[lang].ogDesc);
        }
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle && translations[lang].ogTitle) {
            twTitle.setAttribute('content', translations[lang].ogTitle);
        }
        const twDesc = document.querySelector('meta[name="twitter:description"]');
        if (twDesc && translations[lang].ogDesc) {
            twDesc.setAttribute('content', translations[lang].ogDesc);
        }

        // Referans kartlarını ve Müşteri Yorumlarını güncelle
        renderReferences(lang);
        renderTestimonials(lang);

        // Dil butonlarının aktif durumunu güncelle
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Seçimi localStorage'a kaydet
        try {
            localStorage.setItem('gigi_lang', lang);
        } catch (e) {
            // LocalStorage erişim engeli varsa sessizce devam et
        }

        // Rakam şeridi: yer tutucu değerler ([00], [0]) varsa gizle, gerçek değerler varsa göster
        const statsStrip = document.getElementById('about-stats-strip');
        if (statsStrip) {
            const statValues = [
                translations[lang].statProjects,
                translations[lang].statClients,
                translations[lang].statYears
            ];
            const hasPlaceholder = statValues.some(v => v && /\[\d+\]/.test(v));
            statsStrip.style.display = hasPlaceholder ? 'none' : 'flex';
        }
    };

    // Dil butonları tıklama dinleyicileri
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetLang = btn.getAttribute('data-lang');
            if (targetLang && targetLang !== currentLang) {
                window.setLanguage(targetLang);
            }
        });
    });

    // Başlangıç dilini belirle
    let initialLang = 'en';
    try {
        const savedLang = localStorage.getItem('gigi_lang');
        if (savedLang === 'tr' || savedLang === 'en') {
            initialLang = savedLang;
        } else if (navigator.language && navigator.language.toLowerCase().startsWith('tr')) {
            initialLang = 'tr';
        }
    } catch (e) {
        if (navigator.language && navigator.language.toLowerCase().startsWith('tr')) {
            initialLang = 'tr';
        }
    }

    // İlk dil ve dinamik içerik yüklemesi
    window.setLanguage(initialLang);

    // ============================================================
    // İLETİŞİM FORMU / CONTACT FORM — EmailJS REST API
    // ============================================================
    initContactForm();
});

// ============================================================
// FORM BAŞLATMA FONKSİYONU / INIT CONTACT FORM
// ============================================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn = document.getElementById('submit-btn');
    const CONTACT_EMAIL = 'studio.gigidesign@gmail.com';

    // Spam koruması: son gönderim zamanı (ms)
    let lastSubmitTime = 0;
    const COOLDOWN_MS = 30000; // 30 saniye

    // --- Yardımcı: alan hatası göster / temizle ---
    function showFieldError(id, msg) {
        const el = document.getElementById('error-' + id);
        if (!el) return;
        el.textContent = msg;
        el.classList.add('visible');
        const input = document.getElementById(id) || form.querySelector('[name="' + id + '"]');
        if (input) input.classList.add('field-invalid');
    }

    function clearFieldError(id) {
        const el = document.getElementById('error-' + id);
        if (!el) return;
        el.textContent = '';
        el.classList.remove('visible');
        const input = document.getElementById(id) || form.querySelector('[name="' + id + '"]');
        if (input) input.classList.remove('field-invalid');
    }

    function clearAllErrors() {
        ['name', 'email', 'message', 'kvkk'].forEach(id => clearFieldError(id));
    }

    // --- Yardımcı: form durum mesajı ---
    function setStatus(type, html) {
        let statusEl = document.getElementById('form-status');
        if (!statusEl) {
            statusEl = document.createElement('div');
            statusEl.id = 'form-status';
            statusEl.setAttribute('role', 'status');
            statusEl.setAttribute('aria-live', 'polite');
            statusEl.setAttribute('aria-atomic', 'true');
            form.parentNode.insertBefore(statusEl, form);
        }
        statusEl.className = 'form-status-msg form-status-' + type;
        statusEl.innerHTML = html;
        statusEl.style.display = 'block';
    }

    function clearStatus() {
        const statusEl = document.getElementById('form-status');
        if (statusEl) {
            statusEl.className = 'form-status-msg';
            statusEl.innerHTML = '';
            statusEl.style.display = 'none';
        }
    }

    // --- Yardımcı: e-posta format kontrolü ---
    function isValidEmail(val) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
    }

    // --- Yardımcı: buton durumu ---
    function setButtonSending(isSending) {
        if (!submitBtn) return;
        const t = translations[currentLang] || translations['en'];
        submitBtn.disabled = isSending;
        submitBtn.textContent = isSending ? (t.sendingBtn || 'Sending…') : (t.sendBtn || 'SEND MESSAGE');
    }

    // --- Form gönderim handler ---
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearAllErrors();
        clearStatus();

        const t = translations[currentLang] || translations['en'];

        // Cooldown kontrolü
        const now = Date.now();
        if (now - lastSubmitTime < COOLDOWN_MS) {
            setStatus('error', t.cooldownMsg || 'Please wait before sending again.');
            return;
        }

        // Alan değerleri
        const nameVal = form.querySelector('#name').value.trim();
        const emailVal = form.querySelector('#email').value.trim();
        const messageVal = form.querySelector('#message').value.trim();
        const kvkkChecked = form.querySelector('#kvkk-consent') ? form.querySelector('#kvkk-consent').checked : true;

        // Doğrulama
        let hasError = false;

        if (!nameVal) {
            showFieldError('name', t.errName || 'Name is required.');
            hasError = true;
        }
        if (!emailVal || !isValidEmail(emailVal)) {
            showFieldError('email', t.errEmail || 'Enter a valid email.');
            hasError = true;
        }
        if (!messageVal) {
            showFieldError('message', t.errMessage || 'Message is required.');
            hasError = true;
        }
        if (!kvkkChecked) {
            showFieldError('kvkk', t.errKvkk || 'Please accept the privacy notice.');
            hasError = true;
        }

        if (hasError) return;

        // Buton devre dışı
        setButtonSending(true);

        // EmailJS REST API çağrısı
        const payload = {
            service_id: EMAILJS_CONFIG.serviceId,
            template_id: EMAILJS_CONFIG.templateId,
            user_id: EMAILJS_CONFIG.publicKey,
            template_params: {
                from_name: nameVal,
                from_email: emailVal,
                message: messageVal,
                page_lang: currentLang
            }
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                // Başarı
                lastSubmitTime = Date.now();
                setStatus('success', t.successMsg || 'Your message has been sent.');
                form.querySelector('#name').value = '';
                form.querySelector('#email').value = '';
                form.querySelector('#message').value = '';
                const kvkk = form.querySelector('#kvkk-consent');
                if (kvkk) kvkk.checked = false;
            } else {
                // Servis hatası — mesajı silme
                const errText = `${t.errorMsg || 'Something went wrong.'} <a href="mailto:${CONTACT_EMAIL}" class="status-email-link">${CONTACT_EMAIL}</a>`;
                setStatus('error', errText);
            }
        } catch (err) {
            // Ağ hatası — mesajı silme
            const errText = `${t.errorMsg || 'Something went wrong.'} <a href="mailto:${CONTACT_EMAIL}" class="status-email-link">${CONTACT_EMAIL}</a>`;
            setStatus('error', errText);
        } finally {
            setButtonSending(false);
        }
    });

    // Anlık doğrulama: alan odaktan çıkınca hatayı temizle
    ['name', 'email', 'message'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', () => clearFieldError(id));
        }
    });
    const kvkkEl = form.querySelector('#kvkk-consent');
    if (kvkkEl) {
        kvkkEl.addEventListener('change', () => clearFieldError('kvkk'));
    }
}

// ============================================================
// REFERANS KARTLARINI ÜRETME FONKSİYONU / RENDER REFERENCES
// ============================================================
function renderReferences(lang) {
    const container = document.getElementById('references-container');
    if (!container) return;

    const btnText = (translations[lang] && translations[lang].viewBtn)
        ? translations[lang].viewBtn
        : (lang === 'tr' ? 'İNCELE' : 'VIEW');

    // Kategorilere göre ardışık grupla
    const groups = [];
    referencesData.forEach(item => {
        const catText = (item.category && item.category[lang]) ? item.category[lang] : '';
        const lastGroup = groups[groups.length - 1];
        if (lastGroup && lastGroup.category === catText && catText !== '') {
            lastGroup.items.push(item);
        } else {
            groups.push({
                category: catText,
                items: [item]
            });
        }
    });

    container.innerHTML = groups.map(group => {
        const categoryHtml = group.category
            ? `<h3 class="category-title">${group.category}</h3>`
            : '';

        const itemsHtml = group.items.map(item => {
            const titleText = (item.title && item.title[lang]) ? item.title[lang] : (item.title ? (item.title.tr || item.title.en) : '');
            const serviceText = (item.service && item.service[lang]) ? item.service[lang] : (item.service ? (item.service.tr || item.service.en) : '');
            const commentText = (item.comment && item.comment[lang]) ? item.comment[lang] : '';

            const commentHtml = commentText
                ? `<p class="project-comment">${commentText}</p>`
                : '';

            const tagsParts = [];
            if (serviceText) tagsParts.push(serviceText);
            if (item.year) tagsParts.push(item.year);
            const tagsHtml = tagsParts.length
                ? `<p class="project-tags">${tagsParts.join(' &bull; ')}</p>`
                : '';

            const clientHtml = item.client
                ? `<h4>${item.client}</h4>`
                : '';

            let testimonialHtml = '';
            if (item.testimonial && item.testimonial.quote) {
                const t = item.testimonial;
                const tQuote = (t.quote && t.quote[lang]) ? t.quote[lang] : (t.quote ? (t.quote.tr || t.quote.en) : '');
                const tName = (t.name && t.name[lang]) ? t.name[lang] : (t.name ? (t.name.tr || t.name.en) : '');
                const tTitle = (t.title && t.title[lang]) ? t.title[lang] : (t.title ? (t.title.tr || t.title.en) : '');
                const tCompany = (t.company && t.company[lang]) ? t.company[lang] : (t.company ? (t.company.tr || t.company.en) : '');
                const tStat = t.stat || '';
                const ratingCount = t.rating || 5;
                const starsHtml = '★'.repeat(ratingCount);

                const authorParts = [];
                if (tTitle) authorParts.push(tTitle);
                if (tCompany) authorParts.push(tCompany);
                const authorMetaHtml = authorParts.length ? `<span class="author-meta">${authorParts.join(' &bull; ')}</span>` : '';

                if (tQuote) {
                    testimonialHtml = `
                        <div class="project-testimonial-box">
                            <div class="testimonial-box-header">
                                <div class="testimonial-stars-rating">${starsHtml}</div>
                                ${tStat ? `<span class="testimonial-stat-highlight">${tStat}</span>` : ''}
                            </div>
                            <blockquote class="testimonial-quote-text">\u201c${tQuote}\u201d</blockquote>
                            <div class="testimonial-author-block">
                                ${tName ? `<span class="author-name">${tName}</span>` : ''}
                                ${authorMetaHtml}
                            </div>
                        </div>
                    `;
                }
            }

            const wrapperClass = item.isPoster
                ? 'project-image-wrapper poster-item-wrapper'
                : 'project-image-wrapper';

            const imgStyle = item.isPoster
                ? 'width: 100%; height: auto; display: block;'
                : 'width: 100%; height: 100%; object-fit: cover; object-position: center;';

            let imageHtml = '';
            if (item.link) {
                const isExternal = item.link.startsWith('http');
                imageHtml = `
                    <a href="${item.link}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} class="${wrapperClass}" style="display: block; text-decoration: none;">
                        <img src="${item.image}" alt="${item.imageAlt || titleText}" class="project-image" style="${imgStyle}">
                        <div class="project-overlay">
                            <span class="view-text">${btnText}</span>
                        </div>
                    </a>
                `;
            } else {
                imageHtml = `
                    <div class="${wrapperClass}">
                        <img src="${item.image}" alt="${item.imageAlt || titleText}" class="project-image" style="${imgStyle}">
                    </div>
                `;
            }

            return `
                <div class="project-item ${item.reverse ? 'reverse' : ''} fade-up">
                    <div class="project-info">
                        ${clientHtml}
                        <h3>${titleText}</h3>
                        ${tagsHtml}
                        ${commentHtml}
                        ${testimonialHtml}
                    </div>
                    ${imageHtml}
                </div>
            `;
        }).join('');

        return `
            <div class="project-category fade-up">
                ${categoryHtml}
                ${itemsHtml}
            </div>
        `;
    }).join('');

    if (typeof window.attachDynamicListeners === 'function') {
        window.attachDynamicListeners();
    }
}

// ============================================================
// MÜŞTERİ YORUMLARINI ÜRETME FONKSİYONU / RENDER TESTIMONIALS
// ============================================================
function renderTestimonials(lang) {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    const featured = testimonialsData.find(item => item.featured) || testimonialsData[0];
    const cards = testimonialsData.filter(item => !item.featured);

    // 1. Öne Çıkan Tek Büyük Yorum
    let featuredHtml = '';
    if (featured) {
        const quoteText = (featured.quote && featured.quote[lang]) ? featured.quote[lang] : '';
        const nameText = (featured.name && featured.name[lang]) ? featured.name[lang] : '';
        const titleText = (featured.title && featured.title[lang]) ? featured.title[lang] : '';
        const companyText = (featured.company && featured.company[lang]) ? featured.company[lang] : '';

        const metaParts = [];
        if (titleText) metaParts.push(titleText);
        if (companyText) metaParts.push(companyText);
        const metaHtml = metaParts.length ? `<div class="featured-meta">${metaParts.join(' &bull; ')}</div>` : '';

        const statHtml = (featured.stat && featured.stat.trim())
            ? `<div class="featured-stat-box"><span class="featured-stat-number">${featured.stat}</span></div>`
            : '';

        featuredHtml = `
            <div class="featured-testimonial fade-up">
                <div class="featured-content">
                    <div class="quote-mark">&ldquo;</div>
                    <blockquote class="featured-quote">${quoteText}</blockquote>
                    ${nameText ? `<div class="featured-author">${nameText}</div>` : ''}
                    ${metaHtml}
                </div>
                ${statHtml}
            </div>
        `;
    }

    // 2. Altındaki Küçük Yorum Kartları
    const cardsHtml = cards.map(item => {
        const quoteText = (item.quote && item.quote[lang]) ? item.quote[lang] : '';
        const nameText = (item.name && item.name[lang]) ? item.name[lang] : '';
        const titleText = (item.title && item.title[lang]) ? item.title[lang] : '';
        const companyText = (item.company && item.company[lang]) ? item.company[lang] : '';
        const serviceText = (item.service && item.service[lang]) ? item.service[lang] : '';

        const starsHtml = `<div class="card-stars">★★★★★</div>`;

        const statHtml = (item.stat && item.stat.trim())
            ? `<span class="card-stat">${item.stat}</span>`
            : '';

        const metaParts = [];
        if (titleText) metaParts.push(titleText);
        if (companyText) metaParts.push(companyText);
        const metaHtml = metaParts.length ? `<div class="card-meta">${metaParts.join(' &bull; ')}</div>` : '';

        const serviceHtml = serviceText ? `<span class="card-service-tag">${serviceText}</span>` : '';

        return `
            <div class="testimonial-card fade-up">
                <div class="card-top">
                    ${starsHtml}
                    ${statHtml}
                </div>
                ${quoteText ? `<p class="card-quote">&ldquo;${quoteText}&rdquo;</p>` : ''}
                <div class="card-author-info">
                    ${nameText ? `<div class="card-author">${nameText}</div>` : ''}
                    ${metaHtml}
                    ${serviceHtml}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        ${featuredHtml}
        <div class="testimonials-grid">
            ${cardsHtml}
        </div>
    `;

    if (typeof window.attachDynamicListeners === 'function') {
        window.attachDynamicListeners();
    }
}
