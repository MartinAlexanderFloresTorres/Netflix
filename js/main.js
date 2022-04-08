/////////////////// main-toogle ///////////////////
const main_toogle = document.querySelectorAll(".main-toogle");

main_toogle.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        elemento.classList.toggle("active");
    });
});

const fondo = document.querySelector(".header");

let aumento = 1;
const cambiarFondo = (e) => {
    if (aumento == 1) {
        fondo.style.backgroundImage = "url(img/banner.jpg)";
    }

    if (aumento == 2) {
        fondo.style.backgroundImage = "url(img/6.jpg)";
    }

    if (aumento == 3) {
        fondo.style.backgroundImage = "url(img/3.jpeg)";
    }

    if (aumento == 4) {
        fondo.style.backgroundImage = "url(img/4.jpg)";
    }
    if (aumento == 5) {
        fondo.style.backgroundImage = "url(img/5.jpeg)";
    }
    if (aumento == 6) {
        fondo.style.backgroundImage = "url(img/2.jpg)";
    }
    if (aumento >= 7) {
        aumento = 0;
    }
};
setInterval(() => {
    cambiarFondo();
    aumento++;
}, 3000);

//===== evento de idioma =====
const body = document.querySelector("body");
const html = document.querySelector("html");
const lenguaje = document.querySelectorAll(".lenguaje");

function ejecutarCambio() {
    getIdioma = localStorage.getItem("idioma");
    if (getIdioma === "en") {
        html.lang = getIdioma;
        location.href = "netflix__Ingles.html";
        return;
    } else {
        html.lang = "es";
        location.href = "index.html";
        return;
    }
}

body.addEventListener("click", (e) => {
    if (e.target.classList.contains("selector")) {
        body.classList.add("bottom");
        e.target.parentElement.classList.toggle("active");
    }
    if (e.target.classList.contains("es")) {
        const cambio = e.target.parentElement.parentElement.parentElement;
        html.lang = e.target.className;
        localStorage.setItem("idioma", e.target.className);
        cambio.classList.remove("active");
        lenguaje.forEach((item) => {
            item.textContent = e.target.textContent;
        });

        ejecutarCambio();
    }
    if (e.target.classList.contains("en")) {
        const cambio = e.target.parentElement.parentElement.parentElement;
        html.lang = e.target.className;
        localStorage.setItem("idioma", e.target.className);
        cambio.classList.remove("active");
        lenguaje.forEach((item) => {
            item.textContent = e.target.textContent;
        });
        ejecutarCambio();
    }
});
