<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$file = __DIR__ . '/visitas.txt';

// Inicializar archivo si no existe
if (!file_exists($file)) {
    file_put_contents($file, json_encode(['count' => 282, 'visitors' => []]));
}

$data = json_decode(file_get_contents($file), true);

// GET - Obtener conteo actual
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(['count' => $data['count']]);
    exit;
}

// POST - Registrar nueva visita
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $visitorId = isset($input['visitorId']) ? trim($input['visitorId']) : '';

    if (empty($visitorId)) {
        echo json_encode(['count' => $data['count'], 'isNew' => false]);
        exit;
    }

    // Verificar si este visitante ya fue contado
    if (!isset($data['visitors'])) {
        $data['visitors'] = [];
    }

    $isNew = !in_array($visitorId, $data['visitors']);

    if ($isNew) {
        $data['visitors'][] = $visitorId;
        $data['count']++;
        file_put_contents($file, json_encode($data), LOCK_EX);
    }

    echo json_encode(['count' => $data['count'], 'isNew' => $isNew]);
    exit;
}
