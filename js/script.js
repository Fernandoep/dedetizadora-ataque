/* ==========================================================================
   1. MENU HAMBURGER (CORRIGIDO)
   ========================================================================== */
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

/* ==========================================================================
   2. CARROSSEL DE BANNERS (TOP DA PÁGINA)
   ========================================================================== */
function carrosselInit(carouselSelector) {
    const carousel = document.querySelector(carouselSelector);
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    const items = carousel.querySelectorAll('.carousel-item');
    let index = 0;

    if (items.length > 0) {
        setInterval(() => {
            index = (index + 1) % items.length;
            track.style.transform = `translateX(-${index * 100}%)`;
        }, 5000);
    }
}

// Inicia os banners desktop e mobile
carrosselInit('.desktop-banner');
carrosselInit('.mobile-banner');

/* ==========================================================================
   3. CARROSSEL DE CLIENTES (LOGOS)
   ========================================================================== */
const clientsTrack = document.querySelector('.clients-track');
const clients = document.querySelectorAll('.client-logo');

if (clientsTrack && clients.length > 0) {
    let clientIndex = 0;

    function moveClients() {
        // 1 por vez no mobile, 3 no desktop
        let visible = window.innerWidth <= 768 ? 1 : 3;
        
        clientIndex++;

        // Se chegar no final do trilho, volta pro início
        if (clientIndex > clients.length - visible) {
            clientIndex = 0;
        }

        const itemWidth = clients[0].offsetWidth;
        clientsTrack.style.transform = `translateX(-${clientIndex * itemWidth}px)`;
    }

    let clientInterval = setInterval(moveClients, 3000);

    // Ajusta se o usuário girar o celular ou redimensionar o PC
    window.addEventListener('resize', () => {
        clearInterval(clientInterval);
        clientIndex = 0;
        clientsTrack.style.transform = 'translateX(0)';
        clientInterval = setInterval(moveClients, 3000);
    });
}
