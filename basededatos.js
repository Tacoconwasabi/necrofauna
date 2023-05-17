// Crear una variable para almacenar el JSON
let data = {
  "formulario": {
    "email": "tucorreo@gmail.com"
  }
};

// Obtener el campo de entrada de correo electrónico
const emailInput = document.getElementById('email-input');

// Escuchar el evento de cambio en el campo de entrada
emailInput.addEventListener('input', function() {
  // Actualizar el valor del campo "email" en el JSON con el valor del campo de entrada
  data.formulario.email = emailInput.value;
});

// Función para enviar los datos del formulario a la base de datos
function enviarFormulario() {
  // Realizar la llamada al archivo PHP con los datos del JSON
  fetch('formulario.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    // Manejar la respuesta del servidor
    if (response.ok) {
      console.log('Suscripción exitosa');
      // Aquí puedes mostrar un mensaje de éxito al usuario o redirigirlo a una página de confirmación
    } else {
      console.log('Error al suscribirse');
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  })
  .catch(error => {
    console.log('Error de conexión:', error);
    // Aquí puedes manejar el error de conexión
  });
}
