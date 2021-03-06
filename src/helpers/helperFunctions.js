const shuffle = array => {
  // initial shuffle of quotes //
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
  console.log(filteredArr);
  const randArrNums = Math.floor(Math.random() * filteredArr.length);
  // if same color shuffle number again //
  if (filteredArr[randArrNums] === stateColor) {
    const randArrNums = Math.floor(Math.random() * filteredArr.length);
    return filteredArr[randArrNums + 1];
  }
  return filteredArr[randArrNums];
};

export { shuffle, shuffleBgColors };

// use this instead in next version for array notes[index % notes.length]
