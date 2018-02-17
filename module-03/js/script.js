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

const hello =
keyboard[1][5] +
keyboard[0][2] +
keyboard[1][8] +
keyboard[1][8] +
keyboard[0][8];

const javascript =
keyboard[1][6] +
keyboard[1][0] +
keyboard[2][3] +
keyboard[1][0] +
keyboard[1][1] +
keyboard[2][2] +
keyboard[0][3] +
keyboard[0][7] +
keyboard[0][9] +
keyboard[0][4];

const trainer =
keyboard[0][4] +
keyboard[0][3] +
keyboard[1][0] +
keyboard[0][7] +
keyboard[2][5] +
keyboard[0][2] +
keyboard[0][3];

console.log(`${hello} ${javascript} ${trainer}!`);
