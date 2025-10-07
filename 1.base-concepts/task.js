"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let d = b ** 2 - 4 * a * c;

  if (d > 0) {
    x1 = (-b + Math.sqrt(d) ) / (2 * a);
    x2 = (-b - Math.sqrt(d) ) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  }

  return arr;
}

console.log(solveEquation);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRateMonth = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (interestRateMonth + (interestRateMonth / (((1 + interestRateMonth) ** countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  let result = Math.round(totalAmount * 100) / 100;

  return result;
}

console.log(calculateTotalMortgage);