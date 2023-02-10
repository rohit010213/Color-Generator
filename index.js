console.log("it was nice to meet you")
let container = document.querySelector(".container");
// console.log(container);

for (let i = 0; i < 30; i++) {
    let newEl = document.createElement('div');
    newEl.className = "colorContainer";
    newEl.innerHTML = randomColor();
    newEl.style.backgroundColor = randomColor()
    container.appendChild(newEl)
}



randomColor();
 function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLengths = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLengths; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumber, randomNumber + 1)
         console.log(colorCode, randomNumber)
    }
     return "#" + colorCode;
    
}