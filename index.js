document.getElementById("no").addEventListener("click", function() {
    const button = this;
    const maxWidth = window.innerWidth - button.offsetWidth;
    const maxHeight = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    const currentSize = parseFloat(window.getComputedStyle(yes).fontSize);
    yes.style.fontSize = `${currentSize + 50}px`;
    yes.style.padding = `${currentSize / 2 + 50}px ${currentSize + 100}px`; 
});
            
document.getElementById("yes").addEventListener("click", function () {
    window.location.href = "yes.html";
});

const texte = ["Nu...", "Ce??", "Te rog...", "Pe bune?", "Nu mă lăsa...", "Nu te plac, te iubesc!"];
let index = 0;
let i = 0;

no.addEventListener("click", () => {
    index = (index + 1) % texte.length;
    no.textContent = texte[index];
});

no.addEventListener("click", () => {
    // dacă suntem la ultimul
    if (i === texte.length - 1) {
        window.location.href = "yes.html"; 
        return;
    }

    i++;
    no.textContent = texte[i];
});