"use strict "

"use strict";

const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent.trim();
    console.log(buttonValue);

    if (buttonValue === "C") {
      clearResult(); 
    } else if (buttonValue === "=") {
      calculateResult(); 
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = ""; 
}

function calculateResult() {
  try {
  
    inputFieldEl.value = Function('"use strict"; return (' + inputFieldEl.value + ')')();
  } catch (error) {
    inputFieldEl.value = "Error"; 
  }
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
