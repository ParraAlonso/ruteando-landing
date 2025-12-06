<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$file = __DIR__ . '/mensajes.txt';

// Mensajes en español e inglés
$messages = [
    'es' => [
        'name_required' => 'El nombre es requerido',
        'phone_required' => 'El teléfono es requerido',
        'message_required' => 'El mensaje es requerido',
        'save_error' => 'Error al guardar el mensaje',
        'success' => '🎉 ¡Gracias! Me pondré en contacto contigo pronto.',
        'method_not_allowed' => 'Método no permitido'
    ],
    'en' => [
        'name_required' => 'Name is required',
        'phone_required' => 'Phone is required',
        'message_required' => 'Message is required',
        'save_error' => 'Error saving the message',
        'success' => "🎉 Thanks! I'll get in touch with you soon.",
        'method_not_allowed' => 'Method not allowed'
    ]
];

function getMessage($key, $lang = 'es') {
    global $messages;
    $lang = in_array($lang, ['es', 'en']) ? $lang : 'es';
    return $messages[$lang][$key] ?? $messages['es'][$key] ?? $key;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    $nombre = isset($input['nombre']) ? trim($input['nombre']) : '';
    $telefono = isset($input['telefono']) ? trim($input['telefono']) : '';
    $mensaje = isset($input['mensaje']) ? trim($input['mensaje']) : '';
    $lang = isset($input['lang']) ? trim($input['lang']) : 'es';

    // Validaciones
    if (empty($nombre)) {
        http_response_code(400);
        echo json_encode(['error' => getMessage('name_required', $lang)]);
        exit;
    }

    if (empty($telefono)) {
        http_response_code(400);
        echo json_encode(['error' => getMessage('phone_required', $lang)]);
        exit;
    }

    if (empty($mensaje)) {
        http_response_code(400);
        echo json_encode(['error' => getMessage('message_required', $lang)]);
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
        echo json_encode(['success' => true, 'message' => getMessage('success', $lang)]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => getMessage('save_error', $lang)]);
    }
    exit;
}

// Si no es POST
http_response_code(405);
echo json_encode(['error' => getMessage('method_not_allowed', 'es')]);
