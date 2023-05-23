// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181931'

/**
 * @param {number} a
 * @param {number} d
 * @param {boolean[]} included
 */
const addParticularArithmeticalSequence = (a, d, included) => {
  let answer = 0;
  let num = a;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += num;
    }

    num += d;
  }

  return answer;
};

export default addParticularArithmeticalSequence;

/**
 * 다른 풀이
 *
 * @example
 * ```js
 * const addParticularArithmeticalSequence = (a, d, included) =>
 * included.reduce((acc, cur, index) => acc + (cur ? a + d * index : 0), 0);
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181931/solution_groups?language=javascript
 */
