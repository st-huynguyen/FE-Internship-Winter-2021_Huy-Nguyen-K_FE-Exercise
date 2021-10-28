// 1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// ```
// Input: a = 5, b = 10
// Output: 15

// Input: a = 5, b = 5
// Output: 30
// ```
const sum = function (a, b) {
  return a === b ? (a + b) * 3 : a + b;
};
console.log(sum(5, 10));
console.log(sum(5, 5));

// -------------------------------
// 2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
// ```
// Input: a = 12
// Output: 7

// Input: a = 19
// Output: 0

// Input: a = 22
// Output: 9
// ```
const absoluteDifference = function (num) {
  return num > 19 ? (num - 19) * 3 : 19 - num;
};
console.log(absoluteDifference(19));
console.log(absoluteDifference(12));
console.log(absoluteDifference(22));

// --------------------------------------------------

// 3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
// ```
// Input: a = '1*9'
// Output: ['129', '159', '189']
// ```

// ```
// Input: a = '1234567890*'
// Output: ['12345678900',
//  '12345678903',
//  '12345678906',
//  '12345678909']
// ```

const divisibleBy3 = function (str, isEven = false) {
  // Calculate the sum of all numbers in the input string
  const nums = str.split('');
  const sum = nums.reduce(
    (acc, cur) => (cur !== '*' ? Number(cur) + acc : acc),
    0
  );

  // Calculate the surplus
  // If surplus is 0 -> return number is [0, 3, 6, 9]
  // If surplus is 1 -> return number is [2, 5, 8]
  // If surplus is 0 -> return number is [1, 4, 7]
  const surplus = sum % 3;
  let number = surplus !== 0 ? 3 - surplus : surplus;
  const numsArr = [];
  while (number < 10) {
    numsArr.push(number);
    number += 3;
  }

  // If isEven is true -> return number will divisible by 2
  const filterArr = isEven ? numsArr.filter((item) => item % 2 === 0) : numsArr;

  // Replace * and return array of results
  const index = nums.indexOf('*');
  return filterArr.map(function (item) {
    nums[index] = item;
    return nums.join('');
  });
};

console.log(divisibleBy3('1*9'));
console.log(divisibleBy3('125*'));
console.log(divisibleBy3('1234567890*'));

// --------------------------------------------------

// 4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.
// ```
// Input: a = '1*9'
// Output: []
// ```

// ```
// Input: a = '1234567890*'
// Output: ['12345678900',
//  '12345678906']
// ```

const divisibleBy6 = function (str) {
  const nums = str.split('');
  const index = nums.indexOf('*');
  // If * is not the last index
  if (index !== nums.length - 1) {
    if (nums[nums.length - 1] % 2) {
      return [];
    } else {
      return divisibleBy3(str);
    }
  }
  // If * is the last index -> return all the even number divisible by 3
  else {
    return divisibleBy3(str, true);
  }
};

console.log(divisibleBy6('1*9'));
console.log(divisibleBy6('12*'));
console.log(divisibleBy6('125*'));
console.log(divisibleBy6('1234567890*'));
