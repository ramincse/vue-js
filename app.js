new Vue({
    el: "#app",
    data: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "This is a dog",
        link: "https://www.google.com.bd/",
        myText: "Hello Luffy",
        myHtml: "<strong>Hello Ruhul</strong>",
        user: "Luffy",
        userAge: 16,
        allowedAge: 18,
    },
    methods: {
        changeUser() {
            return this.user === 'Luffy' ? true : false;
        }
    }
});