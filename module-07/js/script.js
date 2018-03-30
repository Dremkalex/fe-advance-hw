const target = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
target.append(wrapper);

const keyboard = {
  topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
  middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
}

const createLayout = (obj) => {

  for (let key in obj) {
    const blockRow = document.createElement('div');
    blockRow.classList.add('row');
    for (let i = 0; i < obj[key].length; i++){
      const button = document.createElement('button');
      button.classList.add('btn');
      button.textContent = obj[key][i];
      blockRow.append(button);
    }
    wrapper.append(blockRow);
  }
  return wrapper;
}

createLayout(keyboard);
