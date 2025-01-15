window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const heroHeight = document.querySelector(".hero").offsetHeight;

  if (window.scrollY > heroHeight) {
    navbar.classList.remove("default");
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("default");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Detectar elementos con la clase "scroll-fade-in"
  const elements = document.querySelectorAll('.scroll-fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Agregar clase visible
      }
    });
  }, {
    threshold: 0.1 // Activar cuando el 10% del elemento sea visible
  });

  // Observar cada elemento
  elements.forEach(element => observer.observe(element));
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
});

function enviarResena() {
  const input = document.getElementById("reseña");
  const mensajeCaja = document.getElementById("mensaje-caja");

  // Borra el texto del input
  input.value = "";

  // Muestra la caja del mensaje
  mensajeCaja.style.display = "block";

  // Oculta el mensaje después de 3 segundos (opcional)
  setTimeout(() => {
    mensajeCaja.style.display = "none";
  }, 3000);
}

function borrarInputs() {
  // Obtén todos los inputs dentro del contenedor del formulario
  const inputs = document.querySelectorAll('#contacto input');
  
  // Recorre cada input y limpia su valor
  inputs.forEach(input => {
    input.value = '';
  });
}