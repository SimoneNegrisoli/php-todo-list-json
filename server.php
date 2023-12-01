<?php
//1 leggo il file json, aggiungo variabile
$filecontent = file_get_contents("todo.json");

var_dump($filecontent);

//2 decodifico 

$list = json_decode($filecontent, true);

// 3

header('Content-Type: application/json');

// 4
echo json_encode($list);


?>