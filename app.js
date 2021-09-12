new Vue({
    el: "#app",
    data: {
        name: "Luffy",
        x: 0,
        y: 0,
    },
    methods: {
        updateName(newname, event) {
            this.name = newname;
            console.log(event);
        },
        getCoord(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        handleForm(event) {
            console.log(event);
        }
    },
});