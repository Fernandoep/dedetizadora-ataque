// MENU HAMBURGER
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
// FECHAR MENU AO CLICAR

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// CARROSSEL
const track = document.querySelector('.carousel-track');
let index = 0;

setInterval(() => {
    index = (index + 1) % 3;
    track.style.transform = `translateX(-${index * 100}%)`;
}, 5000);
// CARROSSEL CLIENTES

const clientsTrack = document.querySelector('.clients-track');
const clients = document.querySelectorAll('.client-logo');

let clientIndex = 0;

function moveClients() {

    let visible = window.innerWidth <= 768 ? 1 : 3;

    clientIndex++;

    if (clientIndex > clients.length - visible) {
        clientIndex = 0;
    }

    const percent = clientIndex * (100 / visible);

    clientsTrack.style.transform = `translateX(-${percent}%)`;
}

setInterval(moveClients, 4000);

window.addEventListener('resize', () => {
    clientIndex = 0;
    clientsTrack.style.transform = 'translateX(0)';
});
