document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PRELOADER
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // 2. NAVBAR STICKY & ACTIVE LINK
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const toTopBtn = document.querySelector('.to-top');

    window.addEventListener('scroll', () => {
        let current = '';
        
        // Sticky logic
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            toTopBtn.classList.add('active');
        } else {
            navbar.classList.remove('scrolled');
            toTopBtn.classList.remove('active');
        }

        // Active Link logic
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(li => {
            li.classList.remove('active-link');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active-link');
            }
        });
    });

    // 3. MENU HAMBURGUESA
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open'); // Opcional para animación del icono
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 4. SISTEMA DE TABS (ESTRATEGIA)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Activar el actual
            btn.classList.add('active');
            const target = btn.getAttribute('data-target');
            document.querySelector(target).classList.add('active');
        });
    });

    // 5. ANIMACIÓN AL SCROLL (INTERSECTION OBSERVER)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });
});
