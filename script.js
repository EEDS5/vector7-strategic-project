document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menú Hamburguesa (Móvil) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Cerrar menú al hacer clic en un enlace ---
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- Animación al hacer Scroll (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, observerOptions);

    // Seleccionar elementos a animar
    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach(el => observer.observe(el));

});