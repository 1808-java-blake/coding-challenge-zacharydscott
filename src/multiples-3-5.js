// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.
function solution(number) {
  if (typeof number !== "number") {
    return -1;
  }
  if (number < 3) {
    return 0;
  }
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0) {
      sum = sum + i;
    }
    if (i % 5 === 0) {
      sum += i;
    }
    if (i % 15 === 0) {
      sum -= i;
    }
  }
  return sum;
}

module.exports = solution;
