const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const newAlphabet = alphabet.split("");
console.log(newAlphabet);

const firstLine = newAlphabet.slice(0, 12);
console.log(firstLine);

const secondLine = newAlphabet.slice(12, 23);
console.log(secondLine);

const thirdLine = newAlphabet.slice(23);
console.log(thirdLine);

const keyboard = [firstLine, secondLine, thirdLine];
console.log(keyboard);

function searchLetter (arr, letters) {
  let letter;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(letters)) {
      const letterIndex = arr[i].indexOf(letters);
      letter = arr[i][letterIndex];
    }
  }
  return letter;
};

let hello = '', javascript = '', trainer = '';
const firstWord = "hello";
const secondWord = "javascript";
const thirdWord = "trainer";

const arrFirstWord = firstWord.split("");
const arrSecondWord = secondWord.split("");
const arrThirdWord = thirdWord.split("");

for (let i = 0; i < arrFirstWord.length; i++) {
  hello += searchLetter(arrFirstWord, arrFirstWord[i]);
};

for (let i = 0; i < arrSecondWord.length; i++) {
  javascript += searchLetter(arrSecondWord, arrSecondWord[i]);
};

for (let i = 0; i < arrThirdWord.length; i++) {
  trainer += searchLetter(arrThirdWord, arrThirdWord[i]);
};

console.log(`${hello} ${javascript} ${trainer}!!!`);
