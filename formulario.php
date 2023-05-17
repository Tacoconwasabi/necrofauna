<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

// Obtener los datos enviados desde el formulario en formato JSON
$data = json_decode(file_get_contents('php://input'), true);

// Obtener el correo electrónico del JSON
$email = $data['formulario']['email'];

// Crear una conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay errores de conexión
if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Insertar el correo electrónico en la tabla de suscriptores
$sql = "INSERT INTO suscriptores (email) VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
    echo "Suscripción exitosa";
} else {
    echo "Error al suscribirse: " . $conn->error;
}

// Cerrar la conexión a la base de datos
$conn->close();
?>

