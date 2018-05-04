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

const lang = "qwerty";
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
    alert(`Ваш результат: ${userKps} верных клавиш в секунду!`);

    if (userKps > this.bestKps) {
      localStorage.setItem('timer', timer.bestKps = userKps);
      updateView();
    }
  }
};

//localStorage.removeItem('timer');

//Построение документа с помощбю JS
const bestTypingSpeed = document.createElement('p');
bestTypingSpeed.classList.add('result');
timerOutput.before(bestTypingSpeed);
updateView();

const exercise = document.querySelector(".exercise");
exercise.textContent = string;

const keyboard  = document.querySelector(".keyboard");
const langArr = lang.split("");

langArr.forEach(item => {
  const button = document.createElement('button');
  keyboard.appendChild(button);
  button.textContent = item;
})

const reset = document.createElement('button');
reset.textContent = 'Reset';
reset.classList.add('reset-btn');
keyboard.after(reset);

//Callback-функция для клика
const onClick = (event) => {
  if (event.target !== event.currentTarget) {
    if (timer.switcher) {
      timerOn();
    }
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
}
keyboard.addEventListener('click', onClick);

//Callback-функция для нажатия клавиши клавиатуры
const keyDown = (event) => {
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
