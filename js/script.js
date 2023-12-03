/*
3- Bonus Super (superfacoltativo ): usare id invece di indici nei metodi
*/

const { createApp } = Vue;
createApp({
    data() {
        return {
            apiUrl: 'server.php',
            todoList: [],
            newTask: '',

        }
    },
    methods: {
        readList() {

            axios.get(this.apiUrl)
                .then((response) => {

                    console.log(response.data);
                    this.todoList = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {

                });
        },
        addTask() {

            if (this.newTask == "") {
                return
            }
            console.log(this.newTask)
            const dataTask = new FormData();
            dataTask.append("text", this.newTask);

            axios.post(this.apiUrl, dataTask)
                .then((response) => {
                    console.log(response.data);
                    this.todoList = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }


    },
    mounted() {
        this.readList();

    }
}).mount('#app');