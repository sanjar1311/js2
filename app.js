const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F", "E"];

const btn = document.querySelector(".btn");
const output = document.querySelector(".hex-color");

btn.addEventListener("click", ()=> {

  let hex = "#";

  for(let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * HEX.length); 
    hex += HEX[index]
  }

  output.textContent = hex
  document.body.style.backgroundColor = hex
})