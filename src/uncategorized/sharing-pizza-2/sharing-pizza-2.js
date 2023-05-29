// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120815'

const sharingPizza2 = (n) => {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const lcm = (a, b) => (a * b) / gcd(a, b);

  const BASE = 6;

  return Math.ceil(lcm(n, BASE) / BASE);
};

export default sharingPizza2;

/**
 * 다른 풀이
 *
 * ```js
 * const sharingPizza22 = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }

    piece += 6;
  }

  return piece / 6;
};

 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120815/solution_groups?language=javascript
 */
