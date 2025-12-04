<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$file = __DIR__ . '/subscribers.txt';

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

    // Validar plataforma
    if (!in_array($platform, ['android', 'ios'])) {
        $platform = 'android';
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Email inválido']);
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
        echo json_encode(['success' => false, 'exists' => true]);
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

    echo json_encode(['success' => true, 'count' => $count]);
    exit;
}
