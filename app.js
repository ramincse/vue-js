new Vue({
    el: "#app",
    data: {
        name: "Luffy",
        x: 0,
        y: 0,
    },
    methods: {
        updateName() {
            this.name = 'Ruhul';
        },
        getCoord(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    },
});