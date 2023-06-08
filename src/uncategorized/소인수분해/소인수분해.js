// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120852'

const 소인수분해 = (n) => {
  let result = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      result.push(i);
      n /= i;
    }
  }

  return [...new Set(result)];
};

export default 소인수분해;

/**
 * 다른 풀이
 *
 * ```js
 * function 소인수분해(n) {
  let answer = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      answer.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return [...new Set(answer)];
}
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120852/solution_groups?language=javascript&type=my
 */
