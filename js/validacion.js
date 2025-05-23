document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const errorDiv = document.getElementById('formError');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío por defecto

        // Limpiamos errores previos
        errorDiv.textContent = '';
        let errores = [];

        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();

        // Validaciones
        if (nombre.length < 2) {
            errores.push('El nombre debe tener al menos 2 caracteres.');
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errores.push('Por favor, ingresá un correo electrónico válido.');
        }

        if (mensaje.length < 10) {
            errores.push('El mensaje debe tener al menos 10 caracteres.');
        }

        // Mostrar errores o enviar
        if (errores.length > 0) {
            errorDiv.innerHTML = errores.join('<br>');
        } else {
            alert('¡Mensaje enviado correctamente!');
            form.reset();
        }
    });
});
