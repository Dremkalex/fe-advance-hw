/*
  Создать компонент счетчика времени.

  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.

  На входе есть строка символов для упражнения.

  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавиш в секунду которое было нажато за
  время выполнения упражнения.

  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.

  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до последнего
// правильного набранного знака считать время

const lang = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const string = "qryte";
let charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");

const timer = {
  id: "",
  switcher: true,
  startTimeTask: null,
  finishTimeTask: null,
  taskTime: null,
  bestKps: localStorage.getItem('timer') || 0,
  countKPS() {
    const userKps = (string.length/(this.taskTime/1000)).toFixed(3);
    setTimeout(() => {
      alert(`Ваш результат: ${userKps} верных клавиш в секунду!`);
      activeBtn.node.classList.remove("keyboard__btn--active");
    }, 1000);

    if (userKps > this.bestKps) {
      localStorage.setItem('timer', timer.bestKps = userKps);
      updateView();
    }
  }
};

//localStorage.removeItem('timer');

//****************Построение документа с помощбю JS****************//

/****Лучший результат****/
const bestTypingSpeed = document.createElement('p');
bestTypingSpeed.classList.add('result');
/****Таймер****/
timerOutput.before(bestTypingSpeed);
updateView();
/****Строка-задание****/
const exercise = document.querySelector(".exercise");
exercise.textContent = string;
/****Конструктор обьекта клавиатуры****/
function Rows(str) {
  const langArr = lang.split("");
  this.top = langArr.slice(0, 12);
  this.middle = langArr.slice(12, 23);
  this.bottom = langArr.slice(23);
  this.space = ["space"];
}
/****Создание объекта клавиатуры****/
const rows = new Rows(lang);
/****Массив свойств-строк****/
const rowsKeys = Object.keys(rows);
/****Добавляем строки в клавиатуру****/
const keyboard  = document.querySelector(".keyboard");
rowsKeys.forEach(key => {
  const keyboardRow = document.createElement('div');
  keyboardRow.classList.add('keyboard__row');
  keyboard.appendChild(keyboardRow);
  rows[key].forEach(item => {
    const button = document.createElement('button');
    button.classList.add('keyboard__btn');
    keyboardRow.appendChild(button);
    button.textContent = item;
  })
  keyboard.appendChild(keyboardRow);
})
keyboard.lastElementChild.firstElementChild.classList.add('keyboard__btn--space');
// langArr.forEach(item => {
//   const button = document.createElement('button');
//   keyboard.appendChild(button);
//   button.textContent = item;
// })

const reset = document.createElement('button');
reset.textContent = 'Reset';
reset.classList.add('reset-btn');
keyboard.after(reset);

const buttons = Array.from(document.querySelectorAll("button"));
const activeBtn = {
  node: null
};

//Callback-функция для клика
const onClick = (event) => {
  if (activeBtn.node !== null) {
    activeBtn.node.classList.remove("keyboard__btn--active");
  }

  if (event.target !== event.currentTarget && !event.target.classList.contains("keyboard__row")) {
    if (timer.switcher) {
      timerOn();
    }

    event.target.classList.add("keyboard__btn--active");
    activeBtn.node = event.target;

    for(let item of string){
      if (charsArr.includes(item)) {
        if (item === event.target.textContent) {
          charsArr.pop();
        } else break;
      }
    }
    if (charsArr.length === 0){
      timerOff();
      timer.countKPS();
    }
  }

  else {
      activeBtn.node.classList.remove("keyboard__btn--active");
      activeBtn.node = event.target;
    }

}
keyboard.addEventListener('click', onClick);

//Callback-функция для нажатия клавиши клавиатуры
const keyDown = (event) => {
  if (activeBtn.node !== null) {
      activeBtn.node.classList.remove("keyboard__btn--active");
    }
  if (event.key === " ") {
      const spaceBtn = document.querySelector(".keyboard__btn--space");
      spaceBtn.classList.add("keyboard__btn--active");
      activeBtn.node = spaceBtn;
  }
  else {
    for (let item in buttons) {
      if (event.key === buttons[item].textContent) {
        buttons[item].classList.add("keyboard__btn--active");
        activeBtn.node = buttons[item];
      }
    }
  }

  if (timer.switcher) {
    timerOn();
  }
  for(let item of string){
    if (charsArr.includes(item)) {
      if (item === event.key) {
        charsArr.pop();
      } else break;
    }
  }
  if (charsArr.length === 0){
    timerOff();
    timer.countKPS();
  }
}
window.addEventListener('keydown', keyDown);

//Callback-функция для сброса таймера
const resetTime = (event) => {
    clearInterval(timer.id);
    timer.switcher = true;
    timer.startTimeTask = null;
    timer.finishTimeTask = null;
    timer.taskTime = null;
    charsArr = string.split("").reverse();
    timerOutput.textContent = '00m:00s:000ms';
    if (activeBtn.node !== null) {
        activeBtn.node.classList.remove("keyboard__btn--active");
      }

}
reset.addEventListener('click', resetTime);

//Функция обновления данных лучшего результата
function updateView () {
  bestTypingSpeed.textContent = `Лучшая скорость набора: [${timer.bestKps}] клавиш в секунду!`;
}

//Функция запуска таймера
function timerOn() {
  timer.startTimeTask = Date.now();
  timer.id = setInterval(() => {
    updateClockface(Date.now() - timer.startTimeTask);
  }, 36);
  timer.switcher = false;
}

//Функция остановки таймера
function timerOff() {
    timer.finishTimeTask = Date.now();
    timer.taskTime = timer.finishTimeTask - timer.startTimeTask;
    clearInterval(timer.id);
}

//Функция бега таймера
function updateClockface(time) {
  timerOutput.textContent = getFormattedTime(time);
}

//Функция перевода миллисекунд формат: мин:с:мс
function getFormattedTime(time) {
  const date = new Date(time);
  const mt =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  const sc =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  const ms =
    date.getMilliseconds() < 10
      ? "00" + date.getMilliseconds()
      : date.getMilliseconds() < 100
        ? "0" + date.getMilliseconds()
        : date.getMilliseconds();

  return `${mt}m:${sc}s:${ms}ms`;
}
