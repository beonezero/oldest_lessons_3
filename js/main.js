let myButton = document.querySelector(".my-button");
let myInput = document.querySelector(".my-input");
let myHeader = document.querySelector(".header");

myHeader.innerText = "Привет " + myInput.value;

myButton.addEventListener("click", function () {
  let inputValue = myInput.value;
  myHeader.innerText = `Привет ${inputValue}, пойдём со мной.`;
});
