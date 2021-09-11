new Vue({
    el: "#app",
    data: {
        name: "Luffy",
    },
    methods: {
        update() {
            setTimeout(() => {
                this.name = 'Ruhul'
            }, 2000)    
        }
    },
});