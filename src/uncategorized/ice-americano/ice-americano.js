// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120819'

/**
 * @param {number} money
 * @returns {[number, number]}
 */
const iceAmericano = (money) => {
  const AMERICANO_PRICE = 5500;

  let count = 0;
  let change = money;

  while (true) {
    if (change >= AMERICANO_PRICE) {
      count++;
      change -= AMERICANO_PRICE;
    } else {
      break;
    }
  }

  return [count, change];
};

export default iceAmericano;

/**
 * 다른 풀이
 *
 * ```js
 * const iceAmericano = (money) => [Math.floor(money / 5500), money % 5500];
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120819/solution_groups?language=javascript
 */
