import { expect } from "@jest/globals";
import { translateInput } from "./translator.js";

it("Should translate a to .-", () => {
  const result = translateInput("a");
  expect(result).toBe(".-");
});

it("Should translate b to -...", () => {
  const result = translateInput("b");
  expect(result).toBe("-...");
});

it("Should translate aneta to .- -. . - .-", () => {
  const result = translateInput("aneta");
  expect(result).toBe(".- -. . - .-");
});

it("Should translate computer to -.-. --- -- .--. ..- - . .-.", () => {
  const result = translateInput("computer");
  expect(result).toBe("-.-. --- -- .--. ..- - . .-.");
});

it("Should translate ship to ... .... .. .--.", () => {
  const result = translateInput("ship");
  expect(result).toBe("... .... .. .--.");
});

it("Should translate sea to ... . .-", () => {
  const result = translateInput("sea");
  expect(result).toBe("... . .-");
});

it("Should translate integers to morse", () => {
  const result = translateInput("123");
  expect(result).toBe(".---- ..--- ...--");
});

it("Should translate special characters to morse", () => {
  const result = translateInput("?=/");
  expect(result).toBe("..--.. -...- -..-.");
});
