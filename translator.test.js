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

it("Should translate andy to .- -. -.. -.--", () => {
  const result = translateEnglishToMorse("andy");
  expect(result).toBe(".- -. -.. -.--'");
});
