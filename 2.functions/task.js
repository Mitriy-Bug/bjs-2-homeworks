function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  const initialValue = 0;
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return {
    min: min,
    max: max,
    avg: avg
  };
}

function summElementsWorker(...arr) {
  const initialValue = 0;
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  if (arr.length) {
    return max - min;
  }
  return 0;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; //четные
  let sumOddElement = 0; //нечетные
  if (arr.length) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) { // Если четный
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
  return 0;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) { // Если четный
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    return sumEvenElement / countEvenElement;
  }
  return 0;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (var i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}