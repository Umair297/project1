const btn = document.querySelector(".btn");
const hexCode = document.querySelector(".hexCode")

const randomColor = [
    "#FF0000",
    "#00008B",
    "#ADD8E6",
    "#800080",
    "#FFFF00",
    "#00FF00",
];
btn.addEventListener("click", function(){
    const random = randomColor[Math.floor(Math.random() * randomColor.length)];
    document.body.style.background = random;

    hexCode.textContent = random;
})