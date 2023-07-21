"use strict";

// Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const special = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

// Modal and Backdrop
const backdropEl = document.querySelector(".backdrop");
const modalEl = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal h2");
const modalMessage = document.querySelector(".modal p");
const modalBtn = document.querySelector(".modal button");
// Password
const passwordEl = document.querySelector(".password");
// Input Elements
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

// Counter
const counterBtns = document.querySelectorAll(
  ".generator__length-counter button"
);
const counterEl = document.querySelector(".generator__length-counter span");
const [decreaseBtn, increaseBtn] = counterBtns;

// Generate and Copy
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");

// num =6 max 20

let counter = 6;
let myPassword = "";

decreaseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  counter > 6 && counter--;

  counterEl.innerHTML = counter;
});
increaseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  counter < 20 && counter++;
  counterEl.innerHTML = counter;
});

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalEl.classList.add("active");
  backdropEl.classList.add("active");
  if (myPassword) {
    modalTitle.innerText = "Success";
    modalMessage.innerText = `Your password (${myPassword}) has been copied to your clipboard`;
  } else {
    modalTitle.innerText = "Error";
    modalMessage.innerText = "Generate the password first";
  }
});

backdropEl.addEventListener("click", (e) => {
  modalEl.classList.remove("active");
  backdropEl.classList.remove("active");
});

modalBtn.addEventListener("click", (e) => {
  modalEl.classList.remove("active");
  backdropEl.classList.remove("active");
});

const getRandomChar = () => {
  let randomChar = "";
  if (upperInput.checked) {
    randomChar +=
      upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
  }
  if (lowerInput.checked) {
    randomChar +=
      lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
  }
  if (numbersInput.checked) {
    randomChar += numbers[Math.floor(Math.random() * numbers.length)];
  }
  if (symbolsInput.checked) {
    randomChar += special[Math.floor(Math.random() * special.length)];
  }
  return randomChar[Math.floor(Math.random() * randomChar.length)];
};

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myPassword = "";
  for (let i = 0; i < counter; i++) {
    if (getRandomChar()) myPassword += getRandomChar();
  }

  myPassword
    ? (passwordEl.innerHTML = myPassword)
    : (passwordEl.innerHTML = "Please tick some inputs");
});
