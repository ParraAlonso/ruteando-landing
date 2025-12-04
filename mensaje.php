<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$file = __DIR__ . '/mensajes.txt';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    $nombre = isset($input['nombre']) ? trim($input['nombre']) : '';
    $telefono = isset($input['telefono']) ? trim($input['telefono']) : '';
    $mensaje = isset($input['mensaje']) ? trim($input['mensaje']) : '';

    // Validaciones
    if (empty($nombre)) {
        http_response_code(400);
        echo json_encode(['error' => 'El nombre es requerido']);
        exit;
    }

    if (empty($telefono)) {
        http_response_code(400);
        echo json_encode(['error' => 'El teléfono es requerido']);
        exit;
    }

    if (empty($mensaje)) {
        http_response_code(400);
        echo json_encode(['error' => 'El mensaje es requerido']);
        exit;
    }

    // Limitar mensaje a 300 caracteres
    if (mb_strlen($mensaje) > 300) {
        $mensaje = mb_substr($mensaje, 0, 300);
    }

    // Sanitizar datos
    $nombre = htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8');
    $telefono = htmlspecialchars($telefono, ENT_QUOTES, 'UTF-8');
    $mensaje = htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8');

    // Guardar mensaje
    $data = json_encode([
        'nombre' => $nombre,
        'telefono' => $telefono,
        'mensaje' => $mensaje,
        'fecha' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    ], JSON_UNESCAPED_UNICODE);

    $result = file_put_contents($file, $data . PHP_EOL, FILE_APPEND | LOCK_EX);

    if ($result !== false) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error al guardar el mensaje']);
    }
    exit;
}

// Si no es POST
http_response_code(405);
echo json_encode(['error' => 'Método no permitido']);
