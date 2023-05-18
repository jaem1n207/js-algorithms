// Link: https://school.programmers.co.kr/learn/courses/30/lessons/181950

/**
 * @param {string} str
 * @param {number} n
 */
const repeatString = (str, n) => (n > 0 ? Array(n).fill(str).join('') : '');

export default repeatString;

/**
 * 다른 풀이
 *
 * ```js
 * const repeatString = (str, n) => str.repeat(n);
 * ```
 *
 * @see https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 */
