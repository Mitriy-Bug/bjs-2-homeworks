"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant == 0) {
    let rootFirst = -b / (2 * a);
    arr = [rootFirst];
  }

  if (discriminant > 0) {
    let rootFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr = [rootFirst, rootSecond];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100/12;
  let debt = amount - contribution; // Тело кредита
  let paymentMonthly = debt * (percent + (percent / (((1 + percent)**countMonths) - 1))); // Ежемесячная оплата
  let totalMortgage = (paymentMonthly * countMonths) + contribution;
  totalMortgage = totalMortgage.toFixed(2) - contribution;

  return Number(totalMortgage);
}