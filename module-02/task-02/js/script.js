//Переменные для названия курорта
const resortTaba = 'Taba';
const resortSharm = 'Sharm';
const resortHurgada = 'Hurgada';

//Переменная для булевых значений согласия/несогласия на курорт
let accept;

//Переменные количества свободных мест на курорте
let countFreePlaceTaba = 6;
let countFreePlaceSharm = 15;
let countFreePlaceHurgada = 25;
let countFreePlace;

//Функция проверки наличия своодных мест на курорте
function checkFreePlace (countFreePlace, countMember){
  if (countMember <= countFreePlace) {
    return true;
  } else {
    return false;
  }
}

//Функция бронирования свободных мест
function cutFreePlace (countFreePlace, countMember) {
  countFreePlace = countFreePlace - countMember;
  return countFreePlace;
}

//Переменная желаемого количества мест от пользователя
let countMember = +prompt ('Введите количество участников:', '');

//if (!Number.isInteger(countMember) || countMember < 0) --- условие Вариант №1
if ((countMember % 1) !== 0 || countMember < 0) { /* --- условие Вариант №2*/
  alert('Вы ввели некорректное число!');
}
else {
  //Проверка наличия мест хотя-бы на одном курорте
  if (checkFreePlace(countFreePlaceTaba, countMember)
  || checkFreePlace(countFreePlaceSharm, countMember)
  || checkFreePlace(countFreePlaceHurgada, countMember)) {

      //Проверка мест в курорте Таба
      if (checkFreePlace(countFreePlaceTaba, countMember)) {
        accept = confirm(`Вы желаете посетить ${resortTaba}?`);
        if (accept) {
          countFreePlaceTaba = cutFreePlace(countFreePlaceTaba, countMember);
          countMember = 0;
        }
      }

      //Проверка мест в курорте Шарм
      if (checkFreePlace(countFreePlaceSharm, countMember) && countMember !==0) {
        accept = confirm(`Вы желаете посетить ${resortSharm}?`);
        if (accept) {
          countFreePlaceSharm = cutFreePlace(countFreePlaceSharm, countMember);
          countMember = 0;
        }
      }

      //Проверка мест в курорте Хургада
      if (checkFreePlace(countFreePlaceHurgada, countMember) && countMember !==0){
        accept = confirm(`Вы желаете посетить ${resortHurgada}?`);
        if (accept) {
          countFreePlaceHurgada = cutFreePlace(countFreePlaceHurgada, countMember);
          countMember = 0;
        }
      }
  }

  else {
    alert('Мест нет');
  }

  console.log(`
  На курорте ${resortTaba} осталось ${countFreePlaceTaba} мест
  На курорте ${resortSharm} осталось ${countFreePlaceSharm} мест
  На курорте ${resortHurgada} осталось ${countFreePlaceHurgada} мест`);
}
