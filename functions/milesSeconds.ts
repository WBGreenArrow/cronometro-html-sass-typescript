import { startChronometry } from "../functions/initChronometry";

import { isStarted } from "../functions/initChronometry";
import { stopCounter } from "../functions/initChronometry";
import { cleanCounter } from "../functions/initChronometry";

const btnElement = document.getElementById("btn") as HTMLButtonElement;
const btnCleanElement = document.getElementById("btn-clean") as HTMLButtonElement;

// change text btn start || stop
function changeBtnText(): void {
    !isStarted ? (btnElement.innerText = "Start") : (btnElement.innerText = "Stop");
}

//btn start || stop
btnElement.addEventListener("click", () => {
    !isStarted ? startChronometry() : stopCounter();
    changeBtnText();
});

//btn clean
btnCleanElement.addEventListener("click", () => {
    cleanCounter();
});
