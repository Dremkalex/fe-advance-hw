const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

//функция, получающая строку-алфавит и возвращающая массив-массивов клавиатурных строк
function addKeyboardLayout(alphabet) {
  const arr = [alphabet.split("").slice(0, 12), alphabet.split("").slice(12, 23), alphabet.split("").slice(23)];
  return arr;
}

const keyboard = addKeyboardLayout(alphabet);
console.log(keyboard);

//функция, принимающая номер строки клавиатуры и возвращающая случайную букву из этой строки
function getRandCharInRow(row) {
  return keyboard[row][Math.floor(Math.random() * keyboard[row].length)];
}

let row = prompt(`Введите номер, где: \'0\' - верхняя строка, \'1\' - средняя строка, \'2\' - нижняя строка!`);
let answer = -1;
while (row !== '0' && row !== '1' && row !== '2' || row === null || row === '') {
  if (row === null) {
    answer = confirm('Вы отменили ввод! Хотите продолжить?');
    if (answer === false) {break;}
  }
  else if (row === '') {
    alert('Вы не ввели данные!');
  }
  else {
    alert('Вы ввели некорректный номер строки!');
  }
row = prompt(`Введите номер, где: \'0\' - верхняя строка, \'1\' - средняя строка, \'2\' - нижняя строка!`);
}

if (answer === -1 || answer === true) {
  const letter = getRandCharInRow(row);
  console.log(`Случайная буква строки ${row}: ${letter}`);
}
else {
  alert('Вы отменили выполнение функции поиска буквы по строке!')
}

//функция, возвращающая случайную букву из всего алфавита.
function getRandCharInAlph() {
  const rows = Math.floor(Math.random() * keyboard.length);
  return keyboard[rows][Math.floor(Math.random() * (keyboard[rows].length))];
}
console.log('Случайная буква алфавита: ', getRandCharInAlph());
