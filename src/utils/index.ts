// Generate 9 unique integers between 0 and n, then returns them in an array

export const generateLocation = (n: number): number[] => {
  const arr = [];
  while (arr.length < 9) {
    const r = Math.floor(Math.random() * n);
    if (arr.indexOf(r) === -1) {
      arr.push(r);
    }
  }
  return arr;
};

// A function written to take advantage of random flex values that I will use in unocss to make the cubes look a bit more messy.
export const generatePosition = (): string => {
  const first = Math.floor(Math.random() * 3 + 1);
  const second = Math.floor(Math.random() * 3 + 1);
  let positionFirst;
  let positionSecond;

  switch (first) {
    case 1:
      positionFirst = 'items-center';
      break;
    case 2:
      positionFirst = 'items-start';
      break;
    case 3:
      positionFirst = 'items-end';
      break;
    default:
      positionFirst = 'items-center';
  }
  switch (second) {
    case 1:
      positionSecond = 'justify-center';
      break;
    case 2:
      positionSecond = 'justify-start';
      break;
    case 3:
      positionSecond = 'justify-end';
      break;
    default:
      positionSecond = 'justify-end';
  }

  return `~ row ${positionFirst} ${positionSecond}`;
};

export const checkAnswer = (arr1: number[], arr2: number[], type: "forward" |"backward") => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[type==="forward" ?i : arr2.length-i-1]) {
        return false;
      }
    }
  }

  return true
};


