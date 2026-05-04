  // Bootstrap 5 JS imports must be placed in the HTML file, not in this JS file.

    /* ══════════════════════════════════════════
       1) MENÚ HAMBURGUESA — classList.toggle
       toggle agrega la clase si no existe,
       y la quita si ya existe (alternancia)
    ══════════════════════════════════════════ */
    function toggleMenu() {
      const nav = document.getElementById('menu-nav');
      nav.classList.toggle('activo');

      // Cambia el ícono: ☰ cuando cerrado, ✕ cuando abierto
      const btn = document.getElementById('btn-hamburguesa');
      btn.textContent = nav.classList.contains('activo') ? '✕' : '☰';
    }

    /* ══════════════════════════════════════════
       2) GALERÍA AUTOMÁTICA — setInterval
       Ejecuta una función cada 3000ms (3 segundos)
       El operador % hace que el índice vuelva a 0
       cuando llega al último slide
    ══════════════════════════════════════════ */
    let slideActual = 0;
    const slides = document.querySelectorAll('.slide');
    const dots   = document.querySelectorAll('.dot');

    setInterval(function() {
      // Quitar .activo al slide y dot actual
      slides[slideActual].classList.remove('activo');
      dots[slideActual].classList.remove('activo');

      // Avanzar índice (vuelve a 0 al llegar al final)
      slideActual = (slideActual + 1) % slides.length;

      // Agregar .activo al nuevo slide y dot
      slides[slideActual].classList.add('activo');
      dots[slideActual].classList.add('activo');
    }, 3000);

    /* ══════════════════════════════════════════
       3) REDES SOCIALES — mouseenter / mouseleave
       mouseenter: cuando el cursor ENTRA al ícono
       mouseleave: cuando el cursor SALE del ícono
       Se aplica a cada ícono con forEach
    ══════════════════════════════════════════ */
    const coloresRedes = {
      'icon-ig': '#E1306C',  // rosa Instagram
      'icon-fb': '#1877F2',  // azul Facebook
      'icon-tk': '#69C9D0',  // celeste TikTok
    };

    Object.keys(coloresRedes).forEach(function(id) {
      const icono = document.getElementById(id);

      icono.addEventListener('mouseenter', function() {
        icono.style.color = coloresRedes[id];
        icono.style.transform = 'translateY(-5px)';
        icono.querySelector('.nombre-red').style.color = coloresRedes[id];
      });

      icono.addEventListener('mouseleave', function() {
        icono.style.color = '#666';
        icono.style.transform = 'translateY(0)';
        icono.querySelector('.nombre-red').style.color = '#555';
      });
    });

    /* ══════════════════════════════════════════
       4) FORMULARIO — event.preventDefault() + SweetAlert2
       preventDefault() evita que la página se recargue
       Swal.fire() muestra la alerta personalizada
       Template literal `${}` inserta el nombre del usuario
    ══════════════════════════════════════════ */
    document.getElementById('form-contacto').addEventListener('submit', function(event) {

      // Interceptar el submit antes de que recargue la página
      event.preventDefault();

      // Capturar el valor del campo nombre
      const nombre = document.getElementById('nombre').value;

      // Mostrar alerta de éxito con SweetAlert2
      Swal.fire({
        title: '¡Mensaje enviado! 🌸',
        text: `Gracias ${nombre}, te contactaremos a la brevedad.`,
        icon: 'success',
        confirmButtonText: 'Perfecto',
        confirmButtonColor: '#9b2335',  // color --beni
        background: '#f5f0e8',          // color --washi
        color: '#2b2420',               // color --sumi
      });

      // Limpiar todos los campos del formulario
      event.target.reset();
    });
