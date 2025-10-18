const fs = require("fs");

const content = fs.readFileSync("concurrency.md", "utf8");

const words = content.split(" ");

const wordsCount = words.filter(
  (word) => word.toLowerCase().includes("concurrency") === "concurrency"
).length;

const concWordCount = content.match(/concurrency/gi ?? []).length;

console.log(wordsCount);
console.log(concWordCount);
