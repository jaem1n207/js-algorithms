// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120846'

const 합성수_찾기 = (n) => {
  const getDivisors = (num) => {
    const divisors = [];

    for (let i = 0; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);

        if (i !== num / i) {
          divisors.push(num / i);
        }
      }
    }

    return divisors;
  };

  let count = 0;

  for (let i = 4; i <= n; i++) {
    if (getDivisors(i).length >= 3) {
      count++;
    }
  }

  return count;
};

export default 합성수_찾기;

/**
 * 다른 풀이
 *
 * ```js
 * function 합성수_찾기(n) {
  let dp = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    if (dp[i]) {
      for (let j = 2; i * j <= n; j++) {
        dp[i * j] = 0;
      }
    }
  }

  return dp.filter((el) => el === 0).length;
}
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120846/solution_groups?language=javascript
 */
