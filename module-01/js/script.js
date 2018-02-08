/*Создать три const - строки, содержащие символы клавиатуры верхнего,
среднего и нижнего ряда английского языка.
Например для верхнего ряда русской раскладки строка будет выглядеть
'йцукенгшщзхъ'.*/
const topRow = 'qwertyuiop[]';
const middleRow = 'asdfghjkl;\'';
const bottomRow = 'zxcvbnm,./';

/*Создать три const переменные с числом,
содержащим длинну строк, полученных ранее.*/
const countTopRow = topRow.length;
const countMiddleRow = middleRow.length;
const countBottomRow = bottomRow.length;

/*Используя charAt, для каждой строки получить первый и последний
символ для каждой из трех строк, используйте имеющиеся константы.*/
const fstSmbTopRow = topRow.charAt(0);
const lastSmbTopRow = topRow.charAt(countTopRow-1);

const fstSmbMiddleRow = middleRow.charAt(0);
const lastSmbMiddleRow = middleRow.charAt(countMiddleRow-1);

const fstSmbBottomRow = bottomRow.charAt(0);
const lastSmbBottomRow = bottomRow.charAt(countBottomRow-1);

/*Сделайте поиск позиции для символов [ и ] с помощью indexOf
и сохраните результат в переменных.*/
const numberLeftBrace = topRow.indexOf('[');
const numberRightBrace = topRow.indexOf(']');

/*Используя многострочную шаблонную строку,
вывести названия всех переменных и полученные значения за один console.log.*/
console.log(`
  Верхняя строка: *${topRow}* содержит ${countTopRow} символов,
  первый символ: *${fstSmbTopRow}*,
  последний символ: *${lastSmbTopRow}*;
  символ *[* находится на ${numberLeftBrace} позиции,
  символ *]* находится на ${numberRightBrace} позиции.

  Средняя строка: *${middleRow}* содержит ${countMiddleRow} символов,
  первый символ: *${fstSmbMiddleRow}*,
  последний символ: *${lastSmbMiddleRow}*.

  Нижняя строка: *${bottomRow}* содержит ${countBottomRow} символов,
  первый символ: *${fstSmbBottomRow}*,
  последний символ: *${lastSmbBottomRow}*.
`);
