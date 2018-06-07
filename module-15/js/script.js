/*
Создать две кнопки в HTML: start и stop.

Создать класс Timer с полями startTime, stopTime и interval.
Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.

Для класса Timer создать методы start и stop, getTime.

Создать экземпляр класса Timer, пусть он называется stopwatch.

При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.

При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime
и записывает разницу между startTime и stopTime в interval.
А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.

Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года.
*/
const container = document.querySelector('.container');
const startBtn = document.querySelector('#startBtn');
const stoptBtn = document.querySelector('#stoptBtn');

startBtn.addEventListener('click', startTimer);
stoptBtn.addEventListener('click', stopTimer);

class Timer {
  constructor(startTime, stopTime, interval) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = interval;
  }

  static timeToNY() {
    const NYdate = new Date(2019, 0, 1, 0, 0, 0);
    const dayToNY = Math.floor((NYdate - Date.now())/1000/60/60/24);
    console.log(`До Нового 2019 года осталось ${dayToNY} дней!!!`);
    return dayToNY;
  }

  start() {
    this.startTime = Date.now();
  }

  stop() {
    this.stopTime = Date.now();
    this.interval = this.stopTime - this.startTime;
  }

  getTime() {
    console.log(this.interval);
    return this.interval;
  }
}

Timer.timeToNY();

const stopwatch = new Timer();

function startTimer(evt) {
  if(document.querySelector('.result')) {
    const result = document.querySelector('.result');
    result.remove();
  }
  stopwatch.start();
}

function stopTimer(evt) {
  stopwatch.stop();
  stopwatch.getTime();

  const result = document.createElement('div');
  result.classList.add('result');
  result.textContent = getFormattedTime(stopwatch.interval);
  container.appendChild(result);
  console.log(stopwatch);
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

  return `${mt} m : ${sc} s : ${ms} ms`;
}
