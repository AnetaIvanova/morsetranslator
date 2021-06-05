import { translateInput } from "./translator.js";

const inputEnglish = document.querySelector("#english-text");
const translateButton = document.querySelector("#translation");
const result = document.querySelector("#morse-text");
const clearResult = document.querySelector("#clear-output");

translateButton.addEventListener("click", () => {
  const output = inputEnglish.value.trim();

  if (result !== undefined || result !== null) {
    result.value = translateInput(output);
  } else {
    alert("Try again");
  }
});

clearResult.addEventListener("click", () => {
  inputEnglish.value = null;
  result.value = null;
});
