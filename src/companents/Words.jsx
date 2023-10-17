import wordlist from "./wordlist.txt";

export const emptyLayout = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let whatIsTheTodaysWord;
  await fetch(wordlist)
    .then((response) => response.text())
    .then((result) => {
      const wordArray = result.split("\n");
      whatIsTheTodaysWord =
        wordArray[Math.floor(Math.random() * wordArray.length)];
      wordSet = new Set(wordArray);
    });
  return { wordSet, whatIsTheTodaysWord };
};
