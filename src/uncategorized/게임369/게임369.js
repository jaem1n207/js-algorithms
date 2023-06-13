// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120891'

const 게임369 = order => {
  let count = 0;
  let number = order;

  while (number > 0) {
    const digit = number % 10;

    if (digit === 3 || digit === 6 || digit === 9) {
      count += 1;
    }

    number = Math.floor(number / 10);
  }

  return count;
};

export default 게임369;

/**
 * 다른 풀이
 *
 * ```js
 * function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120891/solution_groups?language=javascript
 */
