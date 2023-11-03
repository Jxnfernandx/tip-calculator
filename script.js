let selectedButton = null;

const btnPressed = "hsl(172, 67%, 45%)";
const btnNumber = "hsl(183, 100%, 15%)";
const resetBtn = document.querySelector(".reset");
const btns = document.querySelectorAll("button");


for (let i = 0; i < btns.length; i++) {
    const button = btns[i];

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

resetBtn.addEventListener("click", () => {
    if (selectedButton) {
        selectedButton.style.backgroundColor = "";
        selectedButton.style.color = "";
        selectedButton = null;
    }
});