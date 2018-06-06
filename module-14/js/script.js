/*
Создать две кнопки в HTML: start и stop.

Реализовать функционал таймера отсчета старта печати
через функцию-конструктор со свойсвами startTime, stopTime и interval.
Добавить в prototype методы start и stop.

При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.

При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime
и записывает разницу между startTime и stopTime в interval.

При нажатии на stop, значение interval выводится в консоль.
*/
const wrapper = document.querySelector('.wrapper');
const startBtn = document.querySelector('#start');
const stoptBtn = document.querySelector('#stop');
const timer = new Timer();

function Timer() {
  this.startTime = null;
  this.stopTime = null;
  this.interval = null;
}

Timer.prototype.start = function() {
  this.startTime = Date.now();
}

Timer.prototype.stop = function() {
  this.stopTime = Date.now();
  this.interval = this.stopTime - this.startTime;
}

function startTimer(evt) {
  timer.start();
}

function stopTimer(evt) {
  timer.stop();
  console.log(timer.interval);
  const result = document.createElement('div');
  result.classList.add('result');
  result.textContent = getFormattedTime(timer.interval);
  wrapper.appendChild(result);
}

startBtn.addEventListener('click', startTimer);
stoptBtn.addEventListener('click', stopTimer);

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

  return `${mt} m : ${sc} s : ${ms} ms`;
}
