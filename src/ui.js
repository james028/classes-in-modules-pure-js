import { data } from "./data.js";

export class Ui {
  showValues() {
    const bookList = document.querySelector("#book-list");
    const td = document.createElement("td");

    console.log(data);
    // data.forEach((item) => {
    //   td += ``;
    // });
  }
}
