const btnPressed = "hsl(172, 67%, 45%)";
const btnNumber = "hsl(183, 100%, 15%)";
const RESET_BTN = document.querySelector(".reset");
const BTNS = document.querySelectorAll(".tip-selector button");
const amountInput = document.getElementsByClassName("amount-input")[0];
const peopleInput = document.getElementsByClassName("people-input")[0];
const tip = document.getElementById("tip");
const total = document.getElementById("total");

let selectedButton = null;
let tipPerPerson = 0.00;
let totalPerPerson = 0.00;
let btnValue = 0.00; 

tip.innerHTML = "$" + parseFloat(tipPerPerson).toFixed(2);
total.innerHTML = "$" + parseFloat(totalPerPerson).toFixed(2);

if (amountInput.value !== ""  && peopleInput.value !== "") {
  calculate();
}

for (let i = 0; i < BTNS.length; i++) {
  const button = BTNS[i];

  button.addEventListener("click", () => {
    if (selectedButton) {
      selectedButton.style.backgroundColor = "";
      selectedButton.style.color = "";
    }

    selectedButton = button;
    selectedButton.style.backgroundColor = btnPressed;
    selectedButton.style.color = btnNumber;

    btnValue = parseFloat(button.value);
    calculate();
  });
}

function calculate() {
  tipPerPerson = (amountInput.value * btnValue) / peopleInput.value;
  totalPerPerson = (amountInput.value * (1 + btnValue)) / peopleInput.value;
  tip.innerHTML = "$" + parseFloat(tipPerPerson).toFixed(2);
  total.innerHTML = "$" + parseFloat(totalPerPerson).toFixed(2);
}

RESET_BTN.addEventListener("click", () => {55
  if (selectedButton) {
    selectedButton.style.backgroundColor = "";
    selectedButton.style.color = "";
    selectedButton = null;
  }

  tipPerPerson = 0.00;
  totalPerPerson = 0.00;
  tip.innerHTML = "$" + parseFloat(tipPerPerson).toFixed(2);
  total.innerHTML = "$" + parseFloat(totalPerPerson).toFixed(2);
  
  peopleInput.value = "";
  amountInput.value = "";

});
