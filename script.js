const galerie = document.getElementById("galerie");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const navLeft = document.querySelector(".nav.left");
const navRight = document.querySelector(".nav.right");

let indexCurent = 0;

// creare galerie
imagini.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";

    img.addEventListener("click", () => {
        indexCurent = index;
        deschideLightbox();
    });

    galerie.appendChild(img);
});

// funcții navigare
function deschideLightbox() {
    lightbox.style.display = "flex";
    lightboxImg.src = imagini[indexCurent];
}

function urmatoarea() {
    indexCurent = (indexCurent + 1) % imagini.length;
    deschideLightbox();
}

function precedenta() {
    indexCurent = (indexCurent - 1 + imagini.length) % imagini.length;
    deschideLightbox();
}

// click pe săgeți
navRight.addEventListener("click", urmatoarea);
navLeft.addEventListener("click", precedenta);

// închidere
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// click fundal = închide
lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// tastatură
document.addEventListener("keydown", e => {
    if (lightbox.style.display !== "flex") return;

    if (e.key === "ArrowRight") urmatoarea();
    if (e.key === "ArrowLeft") precedenta();
    if (e.key === "Escape") lightbox.style.display = "none";
});

// swipe mobil
let startX = 0;

lightbox.addEventListener("touchstart", e => startX = e.touches[0].clientX);

lightbox.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const diferenta = startX - endX;

    if (Math.abs(diferenta) > 50) {
        diferenta > 0 ? urmatoarea() : precedenta();
    }
});
