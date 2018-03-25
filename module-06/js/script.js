const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],

    charCount: null,

    setCharCount() {
      let charNumber = prompt(`Введите количество символов, но не более ${this.chars.length} или нажмите "Отмена"`);
      if (charNumber !== null) {
        const checkPositiveInteger = (num) => +num > 0 && parseInt(+num) === +num;
        while(!checkPositiveInteger(charNumber) || charNumber > this.chars.length) {
          charNumber = prompt(`Введите количество символов, но не более ${this.chars.length} или нажмите "Отмена"`);
          if (charNumber === null) {
            break;
          }
        }
      }
      if (charNumber === null) {
        alert('Вы отменили операцию!');
      }
      return this.charCount = charNumber;
    },

    task: [],

    createTask() {
      let taskChars = [];
      let rand;
      for (let i = 0; i < this.charCount; i++) {
        rand = Math.floor(Math.random() * this.chars.length);
        taskChars.push(this.chars[rand]);
      }
      return this.task = taskChars;
    },

    userInput: null,

    startTask() {
      let userChars = prompt(`Наберите ниже данную строку без пробелов и запятых: ${this.task}`);
      while (userChars === '') {
        userChars = prompt(`Вы ничего не ввели! Наберите ниже данную строку без пробелов и запятых: ${this.task} или нажмите "Отмена"!`);
      }
      if (userChars) {
        userChars = userChars.split("");
      } else {
        alert('Вы отменили операцию!');
      }
      return this.userInput = userChars;
    },

    userErrors: null,

    compareChars() {
      let counter = 0;
      if (this.task.length === this.userInput.length) {
        for (let i = 0; i < this.task.length; i++) {
          if (this.task[i] !== this.userInput[i]) {
            counter++;
          }
        }
        return this.userErrors = counter;
      }
      else {
        return this.userErrors = null;
      }
    },

    result() {
      console.log(this.userErrors);
      if (this.userErrors === 0) {
        alert("Поздравляем, Вы - Гений!!!");
      } else if(this.userErrors === null) {
          alert('Длина строки, которую Вы ввели не равна заданной!');
        } else {
        alert(`К сожалению, Вы проиграли. Количество несовпадений равно: '${this.userErrors}'. Желаем успехов в следующий раз!`)
      }
    },

    run() {
      this.setCharCount();
      if (this.charCount) {
        this.createTask();
        this.startTask();
        if (this.userInput) {
          this.compareChars();
          this.result();
        }
      }
      return this;
    }
  };

keyTrainer.run();
