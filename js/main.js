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

//===== validad formulario 1 =====
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formulario = document.querySelector("#formulario-uno");
const emailUno = document.querySelector("#email-uno");
const invalidoUno = document.querySelector(".invalido");
const botonUno = document.querySelector("#boton-uno");
const spinerUno = document.querySelector("#spinerUno");

//===== validar formulario 2 =====
const formularioDos = document.querySelector("#formulario-dos");
const emailDos = document.querySelector("#email-dos");
const invalidoDos = document.querySelector(".invalido-dos");
const botonDos = document.querySelector("#boton-dos");
const spinerDos = document.querySelector("#spinerDos");

formulario.addEventListener("submit", validarFormulario);
formularioDos.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    if (e.target.id == "formulario-uno") {
        validar(formulario, emailUno, botonUno, invalidoUno, spinerUno);
    }
    if (e.target.id == "formulario-dos") {
        validar(formularioDos, emailDos, botonDos, invalidoDos, spinerDos);
    }
}
function validar(formulario, email, boton, mensaje, spiner) {
    if (er.test(email.value)) {
        mensaje.style.top = "50%";
        enviarFormulario(formulario, email, boton, mensaje, spiner);
    } else {
        mensaje.style.top = "-50%";
        setTimeout(() => {
            mensaje.style.top = "50%";
        }, 2000);
    }
}
let url = location.href;
function enviarFormulario(formulario, email, boton, mensaje, spiner) {
    email.style.display = "none";
    boton.style.display = "none";
    mensaje.style.display = "none";
    spiner.style.display = "block";
    setTimeout(() => {
        spiner.style.display = "none";
        mensaje.classList.remove("invalido");
        mensaje.classList.add("valido");
        mensaje.style.display = "block";
        if (location.href == url & url.includes("index.html")) {
            mensaje.textContent = "Datos Enviados Correctamente"
        } else{
            mensaje.textContent = "Data Sent Successfully"
        }
        setTimeout(() => {
            email.style.display = "block";
            boton.style.display = "block";
            mensaje.style.display = "block";
            mensaje.classList.add("invalido");
            mensaje.classList.remove("valido");
            if (location.href == url & url.includes("index.html")) {
                mensaje.textContent = "Email Invalido";
            } else{
                mensaje.textContent = "Invalid Email";
            }
            formulario.reset();
        }, 2500);
    }, 2000);
}
