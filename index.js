let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(n) {
  slides.forEach((img) => img.classList.remove("active"));
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");
}

prev.addEventListener("click", () => showSlide(slideIndex - 1));
next.addEventListener("click", () => showSlide(slideIndex + 1));

function autoRotate() {
  showSlide(slideIndex + 1);
  setTimeout(autoRotate, 5000);
}

window.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
  autoRotate();
});

const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const carrera = form.carrera.value.trim();
    const eventos = [...form.querySelectorAll('input[name="evento"]:checked')];

    if (!nombre) valid = false;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) valid = false;
    if (!carrera) valid = false;
    if (eventos.length === 0) valid = false;

    if (!valid) {
      mensaje.textContent =
        "Por favor, completa todos los campos correctamente.";
      mensaje.className = "";
    } else {
      mensaje.textContent =
        "¡Registro exitoso! Te esperamos en las conferencias.";
      mensaje.className = "";
      form.reset();
    }
  });
}
