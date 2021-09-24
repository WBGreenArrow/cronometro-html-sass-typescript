import { data } from "../functions/data";
const titleElement = document.getElementById("title") as HTMLTitleElement;

export const renderTitle = (): void => {
    const title: string = `${data.hours < 10 ? "0" + data.hours : data.hours}:${
        data.minuts < 10 ? "0" + data.minuts : data.minuts
    }:${data.seconds < 10 ? "0" + data.seconds : data.seconds}`;

    titleElement.innerText = title;
};
