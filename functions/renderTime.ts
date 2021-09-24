import { data } from "../functions/data";
const hoursElement = document.getElementById("hours") as HTMLSpanElement;
const minutsElement = document.getElementById("minuts") as HTMLSpanElement;
const secondsElement = document.getElementById("seconds") as HTMLSpanElement;
const mileSecondsElement = document.getElementById("mileseconds") as HTMLSpanElement;

//render data chronometry
export const renderTime = (): void => {
    if (data.hours < 10) {
        hoursElement.innerText = "0" + String(data.hours);
    } else {
        hoursElement.innerText = String(data.hours);
    }

    if (data.minuts < 10) {
        minutsElement.innerText = "0" + String(data.minuts);
    } else {
        minutsElement.innerText = String(data.minuts);
    }

    if (data.seconds < 10) {
        secondsElement.innerText = "0" + String(data.seconds);
    } else {
        secondsElement.innerText = String(data.seconds);
    }

    if (data.mileseconds < 10) {
        mileSecondsElement.innerText = "0" + String(data.mileseconds);
    } else {
        mileSecondsElement.innerText = String(data.mileseconds);
    }
};
