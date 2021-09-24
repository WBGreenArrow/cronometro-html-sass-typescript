import { data } from "../functions/data";
import { renderTitle } from "../functions/renderTitle";
import { renderTime } from "../functions/renderTime";

var timer: number;
var isStarted: Boolean = false;
export { isStarted };

export const startChronometry = (): void => {
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

            renderTitle();

            renderTime();
        }, 10);
    }

    isStarted = !isStarted;
};

export const stopCounter = (): void => {
    clearInterval(timer);
    console.log(data);
    isStarted = !isStarted;
};

//clean chronometry
export const cleanCounter = (): void => {
    stopCounter();
    isStarted = false;
    data.hours = 0;
    data.minuts = 0;
    data.seconds = 0;
    data.mileseconds = 0;

    //clean title chronometry
    renderTitle();

    //clean data chronometry
    renderTime();
};
