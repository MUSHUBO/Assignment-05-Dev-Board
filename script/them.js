const colors = ["#FFCDD2", "#C8E6C9", "#BBDEFB", "#FFECB3", "#D1C4E9"];

const button = document.getElementById("btn-color-change");
let index = 0;

button.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
});