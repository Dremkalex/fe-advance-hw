const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout(alphabet) {
  const keyboard = [alphabet.split("").slice(0, 12), alphabet.split("").slice(12, 23), alphabet.split("").slice(23)];
  return keyboard;
}

keyboard = addKeyboardLayout(alphabet);
console.log(keyboard);

let row = +prompt('Введите номер строки, где 0 - верхняя, 1 - средняя, 2 - нижняя');

function getRandCharInRow(row) {
  // let letters = keyboard[row][Math.floor(Math.random() * keyboard[row].length)];
  let letters;
  switch (row) {
    case 0:
    case 1:
    case 2: letters = keyboard[row][Math.floor(Math.random() * (keyboard[row].length))]; break;
    default: console.log('Некорректный номер строки');
  }
  return letters;
}

let letter = getRandCharInRow(row);
if (letter) {
  console.log(`Случайная буква строки ${row}: ${letter} `);
} else {
  console.log('Функция не может быть выполнена из-за некорректных данных');
}

function getRandCharInAlph() {
  let rows = Math.floor(Math.random() * keyboard.length);
  let letters = keyboard[rows][Math.floor(Math.random() * (keyboard[rows].length))];
  return letters;
}

console.log(`Случайная буква алфавита: `, getRandCharInAlph());
