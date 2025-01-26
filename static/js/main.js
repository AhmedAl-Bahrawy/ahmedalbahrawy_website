document.addEventListener('DOMContentLoaded', () => {
    // تهيئة ScrollReveal
    ScrollReveal().reveal('.section', {
        delay: 200,
        distance: '50px',
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 0,
        opacity: 0,
        origin: 'bottom',
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        scale: 1,
        cleanup: false,
        container: document.documentElement,
        desktop: true,
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.0,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        afterReveal: function (domEl) {
            domEl.classList.add('show');
        }
    });

    ScrollReveal().reveal('.section', { 
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 200
    });
    ScrollReveal().reveal('.section', {
        delay: 200,
        distance: '50px',
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        origin: 'bottom',
        interval: 200, // دمج الخصائص من التعريف الثاني
        opacity: 0,
        afterReveal: function (domEl) {
            domEl.classList.add('show');
        }
    });
    

    // تهيئة Particles.js
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // إضافة تأثير التمرير السلس للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    

    // إضافة تأثير العد التصاعدي لأرقام المهارات
    const skillNumbers = document.querySelectorAll('.skill-card .skill-number');
    const animateNumber = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        let current = 0;
        const increment = target / 100;
        const updateNumber = () => {
            if (current < target) {
                current += increment;
                el.textContent = Math.round(current);
                setTimeout(updateNumber, 10);
            } else {
                el.textContent = target;
            }
        };
        updateNumber();
    };

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillNumbers.forEach(number => {
        observer.observe(number);
    });

    // إضافة تأثير تحريك الصور عند التمرير
    const projectImages = document.querySelectorAll('.project-card img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scale(1)';
                entry.target.style.opacity = '1';
                imageObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    projectImages.forEach(img => {
        img.style.transform = 'scale(0.8)';
        img.style.opacity = '0';
        img.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        imageObserver.observe(img);
    });

    // إضافة تأثير تغيير لون الخلفية عند التمرير
    const sections = document.querySelectorAll('.section');
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
    let currentColorIndex = 0;

    const backgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.body.style.backgroundColor = colors[currentColorIndex];
                currentColorIndex = (currentColorIndex + 1) % colors.length;
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        backgroundObserver.observe(section);
    });

    // إضافة تأثير الظهور التدريجي لعناصر القائمة
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('#nav-links a');

    // التبديل بين فتح وإغلاق القائمة
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة بعد الضغط على أي رابط
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    
    const languageSelect = document.getElementById('language-select');
    const htmlTag = document.documentElement;
    const heroTitle = document.querySelector('.hero h1'); // العنصر heroTitle

    let timeoutId = null; // المتغير الذي سيخزن الـ timeoutId للأنميشن الحالية

    // دالة الأنميشن لكتابة النص حرفًا بحرف
    function updateTextWithAnimation(text) {
        if (!heroTitle) return; // التأكد من وجود العنصر
        if (timeoutId) clearTimeout(timeoutId); // إيقاف الأنميشن السابقة إذا كانت تعمل
        heroTitle.textContent = ''; // تصفير النص لبدء الأنميشن من البداية
        let i = 0; // المتغير للتحكم بحروف النص
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i); // إضافة حرف جديد
                i++;
                timeoutId = setTimeout(typeWriter, 100); // الانتظار قبل إضافة الحرف التالي (يمكن تعديل السرعة)
            }
        };
        typeWriter();
    }

    // دالة تغيير اللغة
    function changeLanguage(lang) {
        htmlTag.setAttribute('lang', lang); // تعيين خاصية اللغة على الـ HTML
        htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr'); // تعيين اتجاه الكتابة

        // البحث عن عناصر الـ navbar
        const nav = document.querySelector('.navbar');
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        const languageSelect = document.getElementById('language-select');

        // إعادة ترتيب العناصر بناءً على اللغة
        if (lang === 'ar') {
            // اللغة العربية: قائمة الروابط أولاً ثم القائمة المنسدلة
            if (nav && hamburger && navLinks && languageSelect) {
                nav.innerHTML = ''; // تفريغ محتوى الـ nav
                nav.appendChild(hamburger);
                nav.appendChild(navLinks);
                nav.appendChild(languageSelect);
            }
        } else {
            // اللغة الإنجليزية: القائمة المنسدلة أولاً ثم قائمة الروابط
            if (nav && hamburger && navLinks && languageSelect) {
                nav.innerHTML = ''; // تفريغ محتوى الـ nav
                nav.appendChild(languageSelect);
                nav.appendChild(navLinks);
                nav.appendChild(hamburger);
            }
        }

        // البحث عن العناصر التي تحتوي على بيانات النص المترجم
        document.querySelectorAll('[data-' + lang + ']').forEach(elem => {
            const newText = elem.getAttribute('data-' + lang); // الحصول على النص المناسب للغة المختارة
            
            // تحديث النصوص للعناصر التي ليست input أو textarea
            if (elem.tagName !== 'INPUT' && elem.tagName !== 'TEXTAREA') {
                if (elem === heroTitle) {
                    // تطبيق الأنميشن للـ heroTitle
                    updateTextWithAnimation(newText); 
                } else {
                    elem.textContent = newText; // تغيير النص لباقي العناصر
                }
            } else {
                // تحديث الـ placeholder للعناصر من نوع input و textarea
                elem.placeholder = newText; 
            }
        });
    }

    // مستمع للغة المختارة من المستخدم
    languageSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        changeLanguage(selectedLang);
        
        // تحديث عنوان URL مع اللغة الجديدة بدون إعادة تحميل الصفحة
        const url = new URL(window.location);
        url.searchParams.set('lang', selectedLang);
        window.history.pushState({}, '', url); // تحديث العنوان فقط بدون refresh
    });

    // تحميل اللغة عند بداية الصفحة
    window.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang') || 'ar'; // القيمة الافتراضية هي العربية
        languageSelect.value = lang; // تعيين القيمة في dropdown

        // تحديث النصوص وبنية الـ navbar بناءً على اللغة
        changeLanguage(lang);
    });
    
});
