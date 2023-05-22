// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120812'

/**
 * @param {number[]} array
 * @returns {number}
 */
const findMode = (array) => {
  const map = new Map();

  array.forEach((element) => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  });

  const maxCount = Math.max(...map.values());
  const maxCountElements = [...map.entries()].filter(([_, count]) => count === maxCount).map(([element, _]) => element);

  return maxCountElements.length === 1 ? maxCountElements[0] : -1;
};

export default findMode;

/**
 * 다른 풀이
 * 
 * ```js
 * const findMode = (array) => {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);

  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
};
 * ```
 * 
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120812/solution_groups?language=javascript&type=all
 */
