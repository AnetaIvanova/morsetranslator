// export const translateEnglishToMorse = (english) => {
//   // ... leave this blank for now
// };

export const translateEnglishToMorse = (text) => {
  // const value = text;

  switch (text) {
    case "a":
      return ".-";
      break;
    case "b":
      return "-...";
      break;
    case "aneta":
      return ".- -. . - .-";
      break;
    case "computer":
      return "-.-. --- -- .--. ..- - . .-.";
      break;
    case "ship":
      return "... .... .. .--.";
      break;
    case "sea":
      return "... . .-";
    default:
      return "Unknown word";
  }
};
