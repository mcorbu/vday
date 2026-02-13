const start = new Date("2024-11-10");
const final = new Date();
const afisare = document.getElementById("afisare");

let curent = new Date(start);

function formatData(d) {
    return d.toLocaleDateString("ro-RO");
}

function diferentaDetaliata(start) {
    const azi = new Date();
    let ani = azi.getFullYear() - start.getFullYear();
    let luni = azi.getMonth() - start.getMonth();
    let zile = azi.getDate() - start.getDate();

    if (zile < 0) {
        luni--;
        const zileLunaTrecuta =
            new Date(azi.getFullYear(), azi.getMonth(), 0).getDate();
        zile += zileLunaTrecuta;
    }

    if (luni < 0) {
        ani--;
        luni += 12;
    }

    return { ani, luni, zile };
}

// animația
const interval = setInterval(() => {
    curent.setDate(curent.getDate() + 1);
    afisare.textContent = formatData(curent);

    if (curent >= final) {
        clearInterval(interval);
        const d = diferentaDetaliata(start);
        afisare.textContent =
            `${d.ani} ani, ${d.luni} luni și ${d.zile} zile`;
        afisare.textContent += " (și încă numărăm...)";
        const img = document.createElement("img");
        img.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdocjUyeHBta3hyMWM5dWY4NXQwMWxrZGNqNWZmZmdxaGJpMTQwYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qFmdpUKAFZ6rMobzzu/giphy.gif";
        img.style.marginTop = "20px";
        img.style.margin = "20px auto";
        img.style.display = "block";
        afisare.appendChild(img);
    }
}, 30); // viteză (ms)
