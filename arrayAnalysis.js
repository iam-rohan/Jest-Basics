function analyzeArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;

  let minValue = Math.min(...arr);

  let maxValue = Math.max(...arr);

  let len = arr.length;

  return { average: avg, min: minValue, max: maxValue, length: len };
}

export { analyzeArray };
