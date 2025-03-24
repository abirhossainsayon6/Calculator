"use strict "

"use strict";

const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent.trim(); // অতিরিক্ত স্পেস কাটানোর জন্য trim() ব্যবহার
    console.log(buttonValue); // ডিবাগিং করার জন্য: কোন বাটনটি ক্লিক হয়েছে দেখার জন্য

    if (buttonValue === "C") {
      clearResult(); // "C" ক্লিক হলে রেজাল্ট ক্লিয়ার করবে
    } else if (buttonValue === "=") {
      calculateResult(); // "=" ক্লিক হলে রেজাল্ট ক্যালকুলেট করবে
    } else {
      appendValue(buttonValue); // অন্য কোনো বাটন ক্লিক হলে তা ইনপুটে যোগ করবে
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
