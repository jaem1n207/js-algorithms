// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181898'

const 가까운1찾기 = (arr, idx) => {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) return i;
  }

  return -1;
};

export default 가까운1찾기;

/**
 * 다른 풀이
 *
 * ```js
 * const solution = (a, i) => a.indexOf(1, i);
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181898/solution_groups?language=javascript
 */
