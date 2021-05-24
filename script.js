import { translateEnglishToMorse } from "./translator.js";

//const button = document.querySelector("button");
const button = document.addEventListener("click", () => {
  let text = document.getElementById("english-test").nodeValue;
  const result = translate(text);
  alert(result);
});
