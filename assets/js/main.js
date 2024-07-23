document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces del sidebar
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Selecciona todas las secciones
    const sections = document.querySelectorAll('section');
  
    // Agrega un event listener a cada enlace del sidebar
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
    // Obtén el id de la sección a la que hace referencia el enlace
    const targetId = this.getAttribute('href').substring(1);

    // Remueve la clase 'active' de todas las secciones
    sections.forEach(section => {
        section.classList.remove('active');
        });
  

  
    // Añade la clase 'active' a la sección objetivo
    document.getElementById(targetId).classList.add('active');
    });
    });
  
    // Muestra la primera sección por defecto
    if (sections.length > 0) {
      sections[0].classList.add('active');
    }
});

//Carrusel del Inicio
$('.owl-carousel').owlCarousel({
  loop: true,
  margin:10,
  nav: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
});

//Carrusel Skilss
const cloneEl = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('.logos').appendChild(cloneEl);

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Seleccionamos el formulario
  const form = document.getElementById('contact-form');

  // Escuchamos el evento submit del formulario
  form.addEventListener('submit', function(event) {
      // Cancelamos el envío por defecto del formulario
      event.preventDefault();

      // Validamos los campos antes de enviar el formulario
      if (validateForm()) {
          // Validando formulario
          alert('Formulario válido, enviando...');
          form.reset(); //reseteamos el formulario después de enviarlo
      } else {
          alert('Por favor, rellene todos los campos.');
      }
  });

  // Función para validar los campos del formulario
  function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Verificamos que todos los campos estén completos
      if (name === '' || email === '' || message === '') {
          return false; // Formulario no válido
      }

      return true; // Formulario válido
  }
});