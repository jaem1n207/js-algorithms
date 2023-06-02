// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181921'

const createArray2 = (l, r) => {
  const result = [];

  for (let i = l; i <= r; i++) {
    if (i.toString().match(/^[05]+$/)) {
      result.push(i);
    }
  }

  return result.length ? result : [-1];
};

export default createArray2;

/**
 * 다른 풀이
 *
 * ```js
 * const createArray2 = (l, r) => {
  const arr = Array.from({ length: r - l + 1 }, (_, i) => i + l);
  const answer = [];

  arr.forEach(v => {
    if (
      v ===
      Number(
        String(v)
          .split('')
          .filter(v => v === '0' || v === '5')
          .join('')
      )
    ) {
      answer.push(v);
    }
  });

  return answer.length ? answer : [-1];
};
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181921/solution_groups?language=javascript
 */
