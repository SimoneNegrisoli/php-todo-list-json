/*
3- Bonus Super (superfacoltativo ): usare id invece di indici nei metodi
*/

const {createApp} = Vue;
createApp({
    data(){
        return {
            tasks:[
                {
                    id: 1,
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    id: 2,
                    text: 'Cucinare ',
                    done: false
                },
                {
                    id: 3,
                    text: 'Sistemare casa',
                    done: true
                },
                {
                    id: 4,
                    text: 'Lavare i piatti',
                    done: false
                }
            ],
            lastId: 3,
            addTextTask: '',

        }
    },
    methods: {
        removeTask(index){
            this.tasks.splice(index,1)
        },
        addTask(){
            this.lastId++
            const upperCaseText = this.addTextTask.charAt(0).toUpperCase() + this.addTextTask.slice(1).toLowerCase()
            const newTask = {
                id: this.lastId,
                text: upperCaseText,
                done: false
            }
            this.tasks.unshift(newTask)
            this.addTextTask = ''
        }
        
    }
}).mount('#app');

/*
potrei fare un altro documento in cui realizzo una lista della spesa, aggiungo un pulsante per le quantita e un input per mettere i grammi delle cose che si vogliono acquistare
*/