import { expect } from "@jest/globals";
import { translateEnglishToMorse } from "./translator.js";

it("Should translate a to .-", () => {
  const result = translateEnglishToMorse("a");
  expect(result).toBe(".-");
});

it("Should translate b to -...", () => {
  const result = translateEnglishToMorse("b");
  expect(result).toBe("-...");
});

it("Should translate aneta to .- -. . - .-", () => {
  const result = translateEnglishToMorse("aneta");
  expect(result).toBe(".- -. . - .-");
});

it("Should translate computer to -.-. --- -- .--. ..- - . .-.", () => {
  const result = translateEnglishToMorse("computer");
  expect(result).toBe("-.-. --- -- .--. ..- - . .-.");
});

it("Should translate ship to ... .... .. .--.", () => {
  const result = translateEnglishToMorse("ship");
  expect(result).toBe("... .... .. .--.");
});

it("Should translate sea to ... . .-", () => {
  const result = translateEnglishToMorse("sea");
  expect(result).toBe("... . .-");
});
