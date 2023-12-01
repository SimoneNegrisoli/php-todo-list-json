<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>PHP ToDo List JSON</title>
</head>

<body>

    <div id="app">
        <div class="container">
            <header class="text-center">
                <h1>To do list </h1>
                <div class="form-inline">
                    <input type="text" class="border rounded-2 mx-4">
                    <button class="btn btn-primary mb-2" @click="">Aggiungi</button>
                </div>
            </header>
            <main>
                <ul class="list-group" v-if="todoList.length > 0">
                    <li class="list-group-item d-flex justify-content-between bg-body-secondary m-1 rounded-2"
                        v-for="(task,index) in todoList" :key="index" @click="task.done =!task.done">
                        <span :class="{'done' : task.done}">{{task}}</span>
                        <i class="fa-solid fa-trash-can" @click="removeTask(index)"></i>
                    </li>
                </ul>
                <div v-else class="text-center mt-4">
                    <span class="border rounded-2 p-2 text-bg-success">Bravo non hai piu task da completare!</span>
                </div>
            </main>
        </div>


    </div>
    <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="js/script.js" type="module"></script>
</body>

</html>