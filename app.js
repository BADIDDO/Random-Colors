let colors = ["green" , "grey" , "rgba(133,122,200)" , "#f15025" , "aqua" , "orange" , "red"];
let btn = document.getElementById("btn");
let color = document.getElementById("color");


btn.addEventListener('click' , function () {
    let randomNumber = getRandomNumber();
    // let random = 1;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }


