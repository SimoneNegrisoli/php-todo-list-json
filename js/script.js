/*
3- Bonus Super (superfacoltativo ): usare id invece di indici nei metodi
*/

const { createApp } = Vue;
createApp({
    data() {
        return {
            apiUrl: 'server.php',
            todoList: [],
            addTask: '',

        }
    },
    methods: {
        readList() {
            axios.get(this.apiUrl)
                .then((response) => {

                    console.log(response);
                    //this.todoList = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {

                });
        },
        // removeTask(index) {
        //     this.tasks.splice(index, 1)
        // },
        // addNewTask(index) {
        //     const data = new FormData()
        //     data.append('task', this.addTask)

        //     axios.post(this.apiUrl, data)
        //         .then((response) => {
        //             console.log(response.data);
        //             this.todoList = response.data;
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // }

    },
    mounted() {
        this.readList();
    }
}).mount('#app');

// addTask() {
//     this.lastId++
//     const upperCaseText = this.addTextTask.charAt(0).toUpperCase() + this.addTextTask.slice(1).toLowerCase()
//     const newTask = {
//         text: upperCaseText,
//         done: false
//     }
//     this.tasks.unshift(newTask)
//     this.addTextTask = ''
// }