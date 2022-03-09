'use strict';
const input = document.querySelector("input");
const button = document.querySelector("button");
const title = document.querySelector(".title");

button.addEventListener("click", () => {
    title.textContent = input.value;
    input.value = "";
}
)