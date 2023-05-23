// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181930'

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */
const diceGame2 = (a, b, c) => {
  let answer = 0;

  const sum = a + b + c;
  const squareSum = a ** 2 + b ** 2 + c ** 2;
  const cubeSum = a ** 3 + b ** 3 + c ** 3;

  if (a === b && b === c) {
    answer = sum * squareSum * cubeSum;
  } else if (a === b || b === c || a === c) {
    answer = sum * squareSum;
  } else {
    answer = sum;
  }

  return answer;
};

export default diceGame2;

/**
 * 다른 풀이
 *
 * @example
 * ```js
 * const diceGame2 = (a, b, c) => {
  const set = new Set([a, b, c]);

  switch (set.size) {
    case 1:
      return calculate([a, b, c], 3);
    case 2:
      return calculate([a, b, c], 2);
    case 3:
      return calculate([a, b, c]);
  }
};

const calculate = (inc, count = 1) => {
  const [a, b, c] = inc;
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i);
  }

  return result;
};
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181930/solution_groups?language=javascript
 */
