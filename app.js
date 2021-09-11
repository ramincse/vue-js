new Vue({
    el: "#app",
    data: {
        title: "Ruhul",
        isItTrue: true,
        cars: ['Ford', 'Toyota'],
        robot: {
            name: "Franky",
        }
    },
    methods: {
        greeting(){
            return this.title;
        }
    }
});