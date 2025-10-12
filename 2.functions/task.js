function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element > max) {
      max = element;
    }

    if (element < min) {
      min = element;
    }

    sum += element;
  }

  const average = sum / arr.length;
  const avg = +average.toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let differenceMaxMin = max - min;

  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  const differenceEvenOdd = sumEvenElement - sumOddElement;

  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  const averageEvenElements = sumEvenElement / countEvenElement;

  return averageEvenElements;

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);

    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}
