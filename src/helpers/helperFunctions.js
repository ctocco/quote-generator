const shuffle = array => {
  let i = array.length;
  let j = 0;
  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

// this function selects background colors @ random //

const shuffleBgColors = colorArray => {
  const arrayColors = Object.keys(colorArray);
  const filteredArr = arrayColors.filter(el => {
    const bg = 'bg';
    if (el.includes(bg)) {
      return el;
    }
    return 'no array found';
  });
  const randArrNums = Math.floor(Math.random() * filteredArr.length);
  return filteredArr[randArrNums];
};

export { shuffle, shuffleBgColors };
