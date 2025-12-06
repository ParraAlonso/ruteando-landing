<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$file = __DIR__ . '/subscribers.txt';

// Mensajes en español e inglés
$messages = [
    'es' => [
        'invalid_email' => 'Email inválido',
        'already_registered' => '😎 ¡Ya me habías dejado tu correo! Tranquilo, te aviso en cuanto esté lista.',
        'success' => '🎉 ¡Listo! Te aviso cuando esté disponible. ¡Gracias por el apoyo!'
    ],
    'en' => [
        'invalid_email' => 'Invalid email',
        'already_registered' => "😎 You already gave me your email! Don't worry, I'll let you know when it's ready.",
        'success' => "🎉 Done! I'll notify you when it's available. Thanks for the support!"
    ]
];

function getMessage($key, $lang = 'es') {
    global $messages;
    $lang = in_array($lang, ['es', 'en']) ? $lang : 'es';
    return $messages[$lang][$key] ?? $messages['es'][$key] ?? $key;
}

// Obtener conteo y verificar si ya existe
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $count = 0;
    $emails = [];

    if (file_exists($file)) {
        $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $data = json_decode($line, true);
            if ($data && isset($data['email'])) {
                $emails[] = strtolower(trim($data['email']));
                $count++;
            }
        }
    }

    echo json_encode(['count' => $count, 'emails' => $emails]);
    exit;
}

// Guardar nuevo suscriptor
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $email = isset($input['email']) ? strtolower(trim($input['email'])) : '';
    $platform = isset($input['platform']) ? trim($input['platform']) : 'android';
    $lang = isset($input['lang']) ? trim($input['lang']) : 'es';

    // Validar plataforma
    if (!in_array($platform, ['android', 'ios'])) {
        $platform = 'android';
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => getMessage('invalid_email', $lang)]);
        exit;
    }

    // Verificar si ya existe
    $exists = false;
    if (file_exists($file)) {
        $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $data = json_decode($line, true);
            if ($data && strtolower(trim($data['email'])) === $email) {
                $exists = true;
                break;
            }
        }
    }

    if ($exists) {
        echo json_encode(['success' => false, 'exists' => true, 'message' => getMessage('already_registered', $lang)]);
        exit;
    }

    // Guardar nuevo suscriptor
    $subscriber = json_encode([
        'email' => $email,
        'platform' => $platform,
        'fecha' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    ]);

    file_put_contents($file, $subscriber . PHP_EOL, FILE_APPEND | LOCK_EX);

    // Contar total
    $count = count(file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES));

    echo json_encode(['success' => true, 'count' => $count, 'message' => getMessage('success', $lang)]);
    exit;
}
