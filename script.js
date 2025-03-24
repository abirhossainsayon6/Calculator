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
  inputFieldEl.value = ""; // রেজাল্ট ক্লিয়ার করবে
}

function calculateResult() {
  try {
    // eval() এর বদলে Function ব্যবহার করে সেফলি ক্যালকুলেট করা
    inputFieldEl.value = Function('"use strict"; return (' + inputFieldEl.value + ')')();
  } catch (error) {
    inputFieldEl.value = "Error"; // যদি কোনো ভুল থাকে, তাহলে "Error" দেখাবে
  }
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue; // বাটনের মান ইনপুট ফিল্ডে যোগ করবে
}
