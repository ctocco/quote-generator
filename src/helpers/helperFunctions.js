const shuffle = array => {
  // initial shuffle of quotes //
  console.log(array);
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

const shuffleBgColors = (colorArray, stateColor) => {
  // array of keys only return array items with bg //
  const arrayColors = Object.keys(colorArray);
  const filteredArr = arrayColors.filter(el => (el.includes('bg') ? el : null));
  const randArrNums = Math.floor(Math.random() * filteredArr.length);
  // if same color shuffle number again //
  if (filteredArr[randArrNums] === stateColor) {
    const randArrNums = Math.floor(Math.random() * filteredArr.length);
    return filteredArr[randArrNums];
  }
  return filteredArr[randArrNums];
};

export { shuffle, shuffleBgColors };
