const btnPressed = "hsl(172, 67%, 45%)";
const btnNumber = "hsl(183, 100%, 15%)";
const RESET_BTN = document.querySelector(".reset");
const BTNS = document.querySelectorAll("button");

let selectedButton = null;
let billAmount = 0;
let numOfPeople = 0;
let tipPerPerson = 0.00;
let totalPerPerson = 0.00;

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
        
    });
}

RESET_BTN.addEventListener("click", () => {
    if (selectedButton) {
        selectedButton.style.backgroundColor = "";
        selectedButton.style.color = "";
        selectedButton = null;
    }
});