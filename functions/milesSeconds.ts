type Chronometer = {
    hours: number;
    minuts: number;
    seconds: number;
    mileseconds: number;
};

const data: Chronometer = {
    hours: 0,
    minuts: 0,
    seconds: 0,
    mileseconds: 0,
};
const hoursElement = document.getElementById("hours") as HTMLSpanElement;
const minutsElement = document.getElementById("minuts") as HTMLSpanElement;
const secondsElement = document.getElementById("seconds") as HTMLSpanElement;
const mileSecondsElement = document.getElementById("mileseconds") as HTMLSpanElement;
const btnElement = document.getElementById("btn") as HTMLButtonElement;
const btnCleanElement = document.getElementById("btn-clean") as HTMLButtonElement;

var isStarted: Boolean = false;
var timer;

function startChronometre(): void {
    var isCleanSeconds: Boolean = false;
    var isCleanMinuts: Boolean = false;

    if (!isStarted) {
        timer = setInterval(() => {
            if (data.mileseconds == 99) {
                if (data.seconds == 59) {
                    if (data.minuts == 59) {
                        data.minuts = 0;

                        data.hours++;

                        isCleanMinuts = true;
                    }
                    //set minuts
                    if (!isCleanMinuts) {
                        data.minuts++;
                    }

                    isCleanMinuts = false;

                    // cleaning seconds
                    data.seconds = 0;

                    isCleanSeconds = true;
                }
                // cleaning mileseconds
                data.mileseconds = 0;

                if (!isCleanSeconds) {
                    //set seconds
                    data.seconds++;
                }

                isCleanSeconds = false;
            }
            //set mileseconds
            data.mileseconds++;

            renderTime();
        }, 10);
    }

    isStarted = !isStarted;
}

function stopCounter(): void {
    clearTimeout(timer);
    isStarted = !isStarted;
}

function changeBtnText(): void {
    !isStarted ? (btnElement.innerText = "Start") : (btnElement.innerText = "Stop");
}

function cleanCounter(): void {
    stopCounter();
    isStarted = false;
    data.hours = 0;
    data.minuts = 0;
    data.seconds = 0;
    data.mileseconds = 0;

    renderTime();
}

function renderTime(): void {
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
}

btnElement.addEventListener("click", () => {
    !isStarted ? startChronometre() : stopCounter();
    changeBtnText();
});

btnCleanElement.addEventListener("click", () => {
    cleanCounter();
});
