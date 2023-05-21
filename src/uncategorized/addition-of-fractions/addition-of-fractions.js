// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120808'

/**
 * @param {number} numer1
 * @param {number} denom1
 * @param {number} numer2
 * @param {number} denom
 * @returns {number[]}
 */
const additionOfFractions = (numer1, denom1, numer2, denom2) => {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a); // 최대공약수
  const lcm = (a, b) => (a * b) / gcd(a, b); // 최소공배수

  const lcmDenom = lcm(denom1, denom2);
  const numer = (lcmDenom / denom1) * numer1 + (lcmDenom / denom2) * numer2;
  const gcdNumerDenom = gcd(numer, lcmDenom);
  const answer = [numer / gcdNumerDenom, lcmDenom / gcdNumerDenom];

  return answer;
};

export default additionOfFractions;

/**
 * 다른 풀이
 *
 * ```js
 * function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num);

  return [denum / gcd, num / gcd];
}
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120808/solution_groups?language=javascript
 */
