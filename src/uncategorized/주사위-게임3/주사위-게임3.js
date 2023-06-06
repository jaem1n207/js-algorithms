// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181916'

const 주사위_게임3 = (a, b, c, d) => {
  let dice = [a, b, c, d];
  let uniqueValues = [...new Set(dice)];
  let counts = {};

  for (let i = 0; i < dice.length; i++) {
    if (counts[dice[i]]) {
      counts[dice[i]] += 1;
    } else {
      counts[dice[i]] = 1;
    }
  }

  if (uniqueValues.length === 1) {
    // Rule 1: 모든 주사위는 같은 숫자를 가질 때
    return 1111 * a;
  } else if (uniqueValues.length === 2) {
    if (Object.values(counts).includes(3)) {
      // Rule 2: 3개의 주사위가 동일한 숫자이고 하나가 다를 때
      let p = parseInt(Object.keys(counts).find((key) => counts[key] === 3));
      let q = parseInt(Object.keys(counts).find((key) => counts[key] === 1));

      return Math.pow(10 * p + q, 2);
    } else {
      // Rule 3: 서로 다른 두 쌍의 숫자를 가질 때
      return (a + b) * Math.abs(a - b);
    }
  } else if (uniqueValues.length === 3) {
    // Rule 4: 두 개의 주사위가 동일한 숫자이고, 다른 두 개는 다른 숫자일 때
    let p = parseInt(Object.keys(counts).find((key) => counts[key] === 2));
    let otherValues = uniqueValues.filter((value) => value !== p);
    let q = otherValues[0];
    let r = otherValues[1];

    return q * r;
  } else {
    // Rule 5: 모든 주사위가 다른 숫자를 가질 때
    return Math.min(...dice);
  }
};

export default 주사위_게임3;

/**
 * 다른 풀이
 *
 * ```js
 * function 주사위_게임3(a, b, c, d) {
  if (a === b && a === c && a === d) return 1111 * a;

  if (a === b && a === c) return (10 * a + d) ** 2;
  if (a === b && a === d) return (10 * a + c) ** 2;
  if (a === c && a === d) return (10 * a + b) ** 2;
  if (b === c && b === d) return (10 * b + a) ** 2;

  if (a === b && c === d) return (a + c) * Math.abs(a - c);
  if (a === c && b === d) return (a + b) * Math.abs(a - b);
  if (a === d && b === c) return (a + b) * Math.abs(a - b);

  if (a === b) return c * d;
  if (a === c) return b * d;
  if (a === d) return b * c;
  if (b === c) return a * d;
  if (b === d) return a * c;
  if (c === d) return a * b;

  return Math.min(a, b, c, d);
}
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181916/solution_groups?language=javascript
 */
// function count(arr) {
//   const counter = new Map();
//   for (const num of arr) {
//     counter.set(num, (counter.get(num) || 0) + 1);
//   }
//   const sortedByCnt = [...counter.keys()].sort((a, b) => counter.get(b) - counter.get(a));
//   const maxCnt = Math.max(...counter.values());
//   return [sortedByCnt, maxCnt];
// }

// function solution(a, b, c, d) {
//   const [arr, maxCnt] = count([a, b, c, d]);
//   const [p, q, r, s] = arr;
//   if (arr.length === 1) {
//     return p * 1111;
//   }
//   if (arr.length === 2) {
//     return maxCnt === 2 ? (p + q) * Math.abs(p - q) : (10 * p + q) ** 2;
//   }
//   if (arr.length === 3) {
//     return q * r;
//   }
//   return Math.min(p, q, r, s);
// }
