<?php
$hostname = "localhost";
$username = "id22215965_hotelmineiro";
$password = "17210922Pe!";
$database = "id22215965_hotel";

$conn = new mysqli($hostname, $username, $password, $database);

if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    function sanitizeInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $name = sanitizeInput($_POST["name"]);
    $cpf = sanitizeInput($_POST["cpf"]);
    $date = sanitizeInput($_POST["data-chegada"]);
    $days = sanitizeInput($_POST["days"]);
    $total = sanitizeInput($_POST["total"]);

    $stmt = $conn->prepare("INSERT INTO Forms (name, cpf, data_chegada, dias, total) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssdi", $name, $cpf, $date, $days, $total);

    if ($stmt->execute()) {
        echo "Reserva efetuada com sucesso!";
    } else {
        echo "Erro ao efetuar reserva: " . $stmt->error;
    }

    $stmt->close();
}