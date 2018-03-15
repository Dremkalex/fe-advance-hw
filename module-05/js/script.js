const keyboard = {
    layouts: {
        en: {
            topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
            middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
            bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
        },
        ru: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
            middleRow: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
            bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
        },
        ua: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї"],
            middleRow: ["ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
            bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

let userChoice = prompt(`Выберите язык, где: \'0\' - en, \'1\' - ru, \'2\' - ua!`);
while (userChoice !== '0' && userChoice !== '1' && userChoice !== '2') {
  if (userChoice === null) {break;}
  alert('Вы выбрали недоступный язык!')
  userChoice = prompt(`Выберите язык, где: \'0\' - en, \'1\' - ru, \'2\' - ua!`);
}

keyboard.currentLang = keyboard.langs[userChoice];

function getRandCharInAlph () {
  const row = Math.floor(Math.random() * 3);
  switch (row) {
    case 0:
      return keyboard.layouts[keyboard.currentLang].topRow[Math.floor(Math.random() * keyboard.layouts[keyboard.currentLang].topRow.length)];
      break;
    case 1:
      return keyboard.layouts[keyboard.currentLang].middleRow[Math.floor(Math.random() * keyboard.layouts[keyboard.currentLang].middleRow.length)];
      break;
    case 2:
      return keyboard.layouts[keyboard.currentLang].bottomRow[Math.floor(Math.random() * keyboard.layouts[keyboard.currentLang].bottomRow.length)];
      break;
    default: return alert('Error');
  }
}

console.log(`Случайная буква алфавита ${keyboard.currentLang}: `, getRandCharInAlph());
