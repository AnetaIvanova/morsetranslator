import { translateEnglishToMorse } from "./translator.js";

const button = document
  .querySelector("button")
  .addEventListener("click", () => {
    let text = document.getElementById("english-text").value;
    const result = translateEnglishToMorse(text);
    alert(result);
  });
