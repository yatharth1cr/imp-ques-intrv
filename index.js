const fs = require("fs");
const path = require("path");

// replace the file path according to the check
const filePath = path.join(__dirname, "Input_02.txt");

// Read file
const fileContent = fs.readFileSync(filePath, "utf-8");

const words = fileContent.split("\n").map((word) => word.trim());

function isCompoundedWord(word, wordSet, memo) {
  if (memo.has(word)) return memo.get(word);

  for (let i = 1; i < word.length; i++) {
    //prefix and suffix
    const prefix = word.slice(0, i);
    const suffix = word.slice(i);

    if (
      wordSet.has(prefix) &&
      (wordSet.has(suffix) || isCompoundedWord(suffix, wordSet, memo))
    ) {
      memo.set(word, true);
      return true;
    }
  }

  memo.set(word, false);
  return false;
}

function findLongestCompoundedWords() {
  const wordSet = new Set(words);

  const memo = new Map();

  const compoundedWords = [];

  const startTime = Date.now();

  for (const word of words) {
    if (isCompoundedWord(word, wordSet, memo)) {
      compoundedWords.push(word);
    }
  }

  compoundedWords.sort((a, b) => b.length - a.length);

  const endTime = Date.now();

  console.log("Longest Compounded Word:", compoundedWords[0]);

  console.log("Second Longest Compounded Word:", compoundedWords[1]);

  console.log("Time Taken:", endTime - startTime, "ms");
}

findLongestCompoundedWords();
