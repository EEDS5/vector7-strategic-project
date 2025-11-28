/* --- 1. CONFIGURACIÓN BASE Y VARIABLES --- */
:root {
    /* Paleta Corporativa Premium */
    --primary: #FF6000; /* Naranja Neón */
    --primary-dark: #cc4d00;
    --secondary: #2F4F4F; /* Gris Pizarra */
    --secondary-dark: #1e3333;
    --dark-bg: #121212;
    --light-bg: #f8f9fa;
    --white: #ffffff;
    --text-main: #333;
    --text-light: #a0a0a0;
    
    /* Gradientes */
    --gradient-primary: linear-gradient(135deg, #FF6000 0%, #FF8C00 100%);
    --gradient-dark: linear-gradient(135deg, #2F4F4F 0%, #1a2f2f 100%);
    
    /* Efectos */
    --shadow-sm: 0 5px 15px rgba(0,0,0,0.05);
    --shadow-md: 0 10px 30px rgba(0,0,0,0.1);
    --shadow-neon: 0 0 15px rgba(255, 96, 0, 0.4);
    
    /* Tipografía */
    --font-heading: 'Roboto Slab', serif;
    --font-body: 'Montserrat', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
    font-family: var(--font-body);
    color: var(--text-main);
    background-color: var(--light-bg);
    overflow-x: hidden; /* Evita scroll horizontal */
}

h1, h2, h3, h4 { font-family: var(--font-heading); color: var(--secondary); margin-bottom: 1rem; }
a { text-decoration: none; transition: all 0.3s ease; }
ul { list-style: none; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

/* --- 2. PRELOADER --- */
#preloader {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: var(--dark-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    color: var(--primary);
    transition: opacity 0.5s ease;
}
.loader-content { text-align: center; }
.loader-content i { font-size: 3rem; margin-bottom: 1rem; }
.loader-content h2 { color: var(--white); letter-spacing: 3px; }

/* --- 3. NAVBAR AVANZADO --- */
.navbar {
    position: fixed; top: 0; left: 0; width: 100%;
    padding: 15px 0;
    z-index: 1000;
    transition: 0.4s;
    background: rgba(47, 79, 79, 0.95); /* Semi transparente */
    backdrop-filter: blur(10px);
}
.navbar.scrolled {
    padding: 10px 0;
    background: var(--secondary-dark);
    box-shadow: 0 2px 20px rgba(0,0,0,0.2);
}
.nav-container { display: flex; justify-content: space-between; align-items: center; }

.logo {
    font-size: 1.5rem; font-weight: 800; color: var(--white);
    display: flex; align-items: center; gap: 10px;
}
.logo-icon { color: var(--primary); font-size: 1.8rem; }
.highlight { color: var(--primary); }

.nav-links { display: flex; gap: 30px; }
.nav-links a {
    color: rgba(255,255,255,0.8);
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: uppercase;
    position: relative;
}
.nav-links a:hover, .nav-links a.active-link { color: var(--primary); }
.nav-links a::after {
    content: ''; position: absolute; bottom: -5px; left: 0; width: 0; height: 2px;
    background: var(--primary); transition: 0.3s;
}
.nav-links a:hover::after { width: 100%; }

.btn-nav {
    background: var(--primary);
    color: var(--white) !important;
    padding: 8px 20px;
    border-radius: 50px;
}
.btn-nav:hover { background: var(--white); color: var(--primary) !important; }
.btn-nav::after { display: none; }

/* --- 4. HERO SECTION --- */
.hero {
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1558494949-ef526b01201b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center/cover;
    position: relative;
    display: flex; align-items: center;
    color: var(--white);
    margin-top: 0; /* Override */
}
.hero-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(90deg, rgba(26,47,47,0.95) 0%, rgba(26,47,47,0.7) 100%);
}
.hero-content {
    position: relative; z-index: 2;
    display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 50px; align-items: center;
}
.badge {
    background: rgba(255, 96, 0, 0.2); color: var(--primary);
    padding: 5px 15px; border-radius: 5px; font-size: 0.8rem; font-weight: 700;
    border: 1px solid var(--primary);
    display: inline-block; margin-bottom: 15px;
}
.hero-text h1 { color: var(--white); font-size: 3.5rem; line-height: 1.1; margin-bottom: 10px; }
.hero-text h2 { color: #ccc; font-size: 1.8rem; font-weight: 300; margin-bottom: 20px; }
.text-gradient {
    background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.hero-btns { display: flex; gap: 15px; margin-top: 30px; }

.btn { padding: 12px 30px; border-radius: 5px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; }
.btn-primary { background: var(--gradient-primary); color: var(--white); border: none; box-shadow: var(--shadow-neon); }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 5px 20px rgba(255,96,0,0.6); }
.btn-outline { border: 2px solid var(--white); color: var(--white); }
.btn-outline:hover { background: var(--white); color: var(--secondary); }

.floating-icon {
    font-size: 15rem; color: rgba(255,255,255,0.05);
    animation: float 6s ease-in-out infinite;
}
@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }

/* --- 5. SECCIONES GENERALES --- */
.section-padding { padding: 100px 0; }
.bg-light { background: #f4f6f8; }
.bg-pattern { 
    background-color: #ffffff;
    background-image: radial-gradient(#2F4F4F 0.5px, transparent 0.5px), radial-gradient(#2F4F4F 0.5px, #ffffff 0.5px);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
}
.section-dark { background: var(--secondary-dark); }
.section-header { margin-bottom: 60px; }
.sub-heading { color: var(--primary); text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px; margin-bottom: 5px; }
.heading { font-size: 2.5rem; font-weight: 800; }
.line { width: 80px; height: 4px; background: var(--secondary); margin: 15px auto; border-radius: 2px; }
.line-orange { background: var(--primary); }

/* --- 6. CARDS (IDENTIDAD) --- */
.about-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.glass-card {
    background: rgba(255,255,255,0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.5);
    padding: 40px 30px;
    border-radius: 15px;
    box-shadow: var(--shadow-sm);
    transition: 0.4s;
    text-align: center;
}
.glass-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-md); border-color: var(--primary); }
.card-icon { font-size: 2.5rem; color: var(--secondary); margin-bottom: 20px; background: #eee; width: 80px; height: 80px; line-height: 80px; border-radius: 50%; margin: 0 auto 20px; transition: 0.4s; }
.glass-card:hover .card-icon { background: var(--primary); color: var(--white); }

/* --- 7. SERVICIOS --- */
.services-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
.service-box {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    overflow: hidden;
    transition: 0.4s;
}
.service-box:hover { background: rgba(255,255,255,0.1); transform: translateY(-5px); }
.service-img-wrapper {
    height: 180px;
    background: var(--gradient-dark);
    position: relative;
    display: flex; justify-content: center; align-items: center;
    overflow: hidden;
}
.bg-icon { position: absolute; font-size: 8rem; color: rgba(255,255,255,0.03); right: -20px; bottom: -20px; transform: rotate(-15deg); }
.service-icon {
    font-size: 3rem; color: var(--primary);
    background: rgba(0,0,0,0.3); padding: 20px; border-radius: 50%;
    border: 1px solid var(--primary);
}
.service-desc { padding: 30px; color: #ccc; }
.service-desc h3 { color: var(--white); font-size: 1.4rem; }
.highlight-text { color: var(--primary); font-size: 0.85rem; font-weight: 600; text-transform: uppercase; margin-bottom: 10px; display: block; }

/* --- 8. ESTRATEGIA (TABS Y MATRICES) --- */
.strategy-tabs { display: flex; justify-content: center; gap: 15px; margin-bottom: 40px; flex-wrap: wrap; }
.tab-btn {
    padding: 12px 30px; border: none; background: #e0e0e0; cursor: pointer;
    font-family: var(--font-heading); font-weight: 700; color: #555; border-radius: 5px;
    transition: 0.3s;
}
.tab-btn.active, .tab-btn:hover { background: var(--secondary); color: var(--white); }

.tab-content { display: none; animation: fadeIn 0.5s; }
.tab-content.active { display: block; }

/* FODA GRID */
.foda-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.foda-item { padding: 30px; border-radius: 10px; color: var(--white); position: relative; overflow: hidden; }
.foda-item h4 { color: var(--white); display: flex; align-items: center; gap: 10px; font-size: 1.5rem; }
.strength { background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); } /* Verde */
.weakness { background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%); } /* Rojo */
.opportunity { background: linear-gradient(135deg, #2980b9 0%, #3498db 100%); } /* Azul */
.threat { background: linear-gradient(135deg, #d35400 0%, #e67e22 100%); } /* Naranja */

/* PORTER */
.porter-layout { background: var(--white); padding: 30px; border-radius: 15px; box-shadow: var(--shadow-sm); text-align: center; }
.porter-center { border: 3px solid var(--secondary); padding: 20px; display: inline-block; border-radius: 10px; margin-bottom: 20px; background: #f0f0f0; }
.porter-satellites { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 10px; }
.satellite { background: var(--secondary); color: var(--white); padding: 10px 20px; border-radius: 50px; font-size: 0.9rem; }

/* BCG */
.bcg-matrix {
    display: grid; grid-template-columns: 1fr 1fr;
    background: var(--white); border-radius: 15px; overflow: hidden;
    box-shadow: var(--shadow-sm);
}
.bcg-quadrant { padding: 40px; border: 1px solid #eee; text-align: center; }
.bcg-quadrant i { font-size: 2.5rem; margin-bottom: 15px; display: block; }
.star { background: #fffbe6; } .star i { color: #f1c40f; }
.question { background: #e6f7ff; } .question i { color: #3498db; }
.cow { background: #f6ffed; } .cow i { color: #27ae60; }
.dog { background: #fff1f0; } .dog i { color: #e74c3c; }

/* --- 9. FOOTER --- */
footer { background: #111; color: #888; border-top: 3px solid var(--primary); }
.footer-top { padding: 70px 0; }
.footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; }
.footer-widget h3 { color: var(--white); margin-bottom: 20px; font-size: 1.2rem; }
.social-icons { margin-top: 20px; display: flex; gap: 15px; }
.social-icons a { width: 40px; height: 40px; background: #222; display: flex; justify-content: center; align-items: center; border-radius: 50%; color: var(--white); transition: 0.3s; }
.social-icons a:hover { background: var(--primary); transform: rotate(360deg); }
.contact-info li { margin-bottom: 15px; display: flex; gap: 10px; align-items: center; }
.contact-info i { color: var(--primary); }
.footer-bottom { background: #000; padding: 20px 0; text-align: center; font-size: 0.85rem; }

/* --- 10. UTILIDADES Y ANIMACIONES --- */
.content-placeholder {
    border: 1px dashed rgba(0,0,0,0.2);
    padding: 10px; margin-top: 10px;
    background: rgba(255,255,255,0.3); font-style: italic; font-size: 0.8rem;
}
.to-top {
    position: fixed; bottom: 30px; right: 30px; width: 50px; height: 50px;
    background: var(--primary); color: var(--white);
    border-radius: 50%; display: flex; justify-content: center; align-items: center;
    box-shadow: var(--shadow-neon); cursor: pointer; opacity: 0; pointer-events: none; transition: 0.4s; z-index: 99;
}
.to-top.active { opacity: 1; pointer-events: all; transform: translateY(0); }
.to-top:hover { background: var(--secondary); }

/* Animations Keyframes */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

.fade-up { opacity: 0; animation: fadeInUp 0.8s forwards; animation-play-state: paused; }
.visible { animation-play-state: running; }
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        position: fixed; top: 0; right: -100%; height: 100vh; width: 70%;
        background: var(--secondary); flex-direction: column;
        justify-content: center; align-items: center; transition: 0.4s;
    }
    .nav-links.active { right: 0; }
    .menu-toggle { display: block; cursor: pointer; z-index: 1001; }
    .bar { width: 25px; height: 3px; background: var(--white); margin: 5px 0; transition: 0.4s; }
    .hero-content { grid-template-columns: 1fr; text-align: center; }
    .hero-visual { display: none; }
    .hero-btns { justify-content: center; }
    .hero-text h1 { font-size: 2.5rem; }
    .foda-grid { grid-template-columns: 1fr; }
               }
