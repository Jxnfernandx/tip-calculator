// Button Colors 
const btnPressed = "hsl(172, 67%, 45%)";
const btnNumber = "hsl(183, 100%, 15%)";
const multiplier = .01;

const RESET_BTN = document.querySelector(".reset");
const BTNS = document.querySelectorAll(".tip-selector button");
const CONTAINER = document.getElementById("main-container");

// Input 
const amountInput = document.getElementsByClassName("amount-input")[0];
const peopleInput = document.getElementsByClassName("people-input")[0];
const customInput = document.getElementsByClassName("custom")[0];

const tip = document.getElementById("tip");
const total = document.getElementById("total");
const warning = document.querySelector(".warning");

let selectedButton = null;
let tipPerPerson = 0.0;
let totalPerPerson = 0.0;
let tipValue = 0.0;

display();

BTNS.forEach(button => {
  button.addEventListener("click", () => {
    if((Number(customInput.value) != 0)) {
      customInput.value = "";
      reset();
    }

    else {
      if(selectedButton) {
        resetBtn();
      }
  
      if(button === selectedButton) {
        selectedButton = null;
        reset();
      }
  
  
      else {
        button.style.backgroundColor = btnPressed;
        button.style.color = btnNumber;
        selectedButton = button;
        tipValue = button.value;
        
        if((peopleInput.value) != 0) {
          calculate();
          display();
        }
  
        else {
          warn();
        }
    }
    
    
    }
  });
});

function resetBtn () {
  selectedButton.style.backgroundColor = "";
  selectedButton.style.color = "";
}

const calculate = () => {
  if((amountInput.value) < 0) {
    amountInput.value *= -1;
  }

  else {
    tipPerPerson = (amountInput.value * tipValue) / peopleInput.value;
    totalPerPerson = (amountInput.value * (1 + tipValue)) / peopleInput.value;
  }
}

function display () {
  tip.innerHTML = "$" + parseFloat(tipPerPerson).toFixed(2);
  total.innerHTML = "$" + parseFloat(totalPerPerson).toFixed(2);
}

const warn = () => {
  warning.style.display = "block";
  peopleInput.style.borderColor = "red";
}

const clearWarning = () => {
  warning.style.display = "none";
  peopleInput.style.borderColor = "";
}

const reset = () => {
  tipPerPerson = 0.0;
  totalPerPerson = 0.0;
  display();
  clearWarning();
}

RESET_BTN.addEventListener("click", () => {
  
  if (selectedButton) {
    resetBtn();
    selectedButton = null;
  }

  tipPerPerson = 0.0;
  totalPerPerson = 0.0;
  display();

  peopleInput.value = "";
  amountInput.value = "";
  customInput.value = "";
  clearWarning();
});

customInput.addEventListener("input", () => {
  if((Number(customInput.value) != 0) && (Number(amountInput.value != 0)) && (Number(peopleInput.value) != 0)) {
    tipValue = customInput.value * multiplier;
    calculate();
    display();
  }

  if(Number(customInput.value) === 0) {
    reset();
    display();
  }
  
});

customInput.addEventListener("click", () => {

  if(selectedButton) {
    resetBtn();
  }

  if(Number(peopleInput.value) === 0) {
    warn();
  }
})

peopleInput.addEventListener("input", clearWarning);