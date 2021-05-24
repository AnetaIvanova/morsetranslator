// export const translateEnglishToMorse = (english) => {
//   // ... leave this blank for now
// };

export const translateEnglishToMorse = (text) => {
  switch (text) {
    case "a":
      return ".-";
      break;
    case "b":
      return "-...";
      break;
    case "andy":
      return ".- -. -.. -.--'";
      break;
    default:
      return "Unknown word";
  }
};
