// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181943'

/**
 * @param {string} my_string
 * @param {string} overwrite_string
 * @param {number} s
 * @returns {string}
 */
const overwriteString = (my_string, overwrite_string, s) => {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    if (i === s) {
      answer += overwrite_string;
      i += overwrite_string.length - 1;
    } else {
      answer += my_string[i];
    }
  }

  return answer;
};

export default overwriteString;

/**
 * 다른 풀이
 *
 * ```js
 * const overwriteString = (my_string, overwrite_string, s) =>
 *  my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181943/solution_groups?language=javascript
 */
