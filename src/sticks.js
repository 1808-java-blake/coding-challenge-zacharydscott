/* You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, 
discarding the shortest pieces until there are none left. At each iteration you will determine the length of the 
shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that 
shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.
Given the lengths of some number of sticks, return an array containg the numbers of sticks remaing before each cut was made.

If any input is provided other than an array you should return an empty array because no sticks were ever there.

For example, 
provided an array such as: [5,4,4,2,2,8]
we would expect: [6,4,2,1]
explination:
stick lengths     length of cut     sticks before cut
5 4 4 2 2 8         2                 6
3 2 2 - - 6         2                 4
1 - - - - 4         1                 2
- - - - - 3         3                 1
- - - - - -         done              done
*/
function solution(arr) {
  if (typeof arr !== "object") {
    return [];
  } else {
    try {
      if (!arr[0]) {
        return [];
      }
    } catch (err) {
      return [];
    }
  }
  let isEmpty = false;
  let numSticks = 0;
  let min;
  let returnArr = [arr.length];
  let newArr = [];
  while (isEmpty === false) {
    min = Math.max(...arr);
    arr.forEach(element => {
      if (element < min && element !== null) {
        min = element;
      }
    });

    console.log(min);
    arr.forEach(element => {
      if (element !== null && element > min) {
        numSticks++;
        newArr.push(element - min);
      } else {
        newArr.push((element = null));
      }
    });
    if (numSticks === 0) {
      isEmpty = true;
    } else {
      returnArr.push(numSticks);
      numSticks = 0;
    }
    console.log(newArr);
    arr = newArr;
    newArr = [];
  }

  return returnArr;
}
console.log(solution([5, 10, 15, 20, 30, 100]));
module.exports = solution;
