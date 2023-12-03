<?php
//1 leggo il file json, aggiungo variabile
$filecontent = file_get_contents("todo.json");

// var_dump($filecontent);

//2 decodifico 

$list = json_decode($filecontent, true);


//2.1 prima di rinviare al server mi prendo i dati in post

if (isset($_POST['text'])) {
    $newTasks = [
        'text' => $_POST['text'],
        'done' => false,
    ];

    array_push($list, $newTasks);

    file_put_contents('todo.json', json_encode($list));
}

if (isset($_POST['removeTask'])) {
    $index = $_POST['removeTask'];
    array_splice($list, $index, 1);
    file_put_contents('todo.json', json_encode($list));
}

// 3

header('Content-Type: application/json');

// 4
echo json_encode($list);


?>