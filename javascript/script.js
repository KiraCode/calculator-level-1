let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");
let input = document.getElementById("input");
console.log(btn);

for (let item of btn) {
  item.addEventListener("click", function (event) {
    let btnText = event.target.innerText;

    // clear the screen before entering new expression
    if (input.value) {
      input.value = "";
      screen.value = "";
    }

    if (btnText == "AC") {
      // condition to clear the screen
      screen.value = "";
      btnText = "";
    }
    if (btnText == "x") {
      btnText = "*";
    }
    if (btnText === "÷") {
      btnText = "/";
    }
    screen.value = screen.value + btnText;
  });
}

const returnEval = (arg) => {
  return eval(`"use strict";(${arg})`);
};

const getResult = () => {
  input.value = screen.value;
  screen.value = returnEval(screen.value);
};

function backSpace() {
  screen.value = screen.value.slice(0, screen.value.length - 1);
}
