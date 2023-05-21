// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181942'

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
const mixingString = (str1, str2) => {
  let answer = '';

  for (let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i];
  }

  return answer;
};

export default mixingString;

/**
 * 다른 풀이
 *
 * ```js
 * const mixingString = (str1, str2) => [...str1].map((char, index) => char + str2[index]).join('');
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181942/solution_groups?language=javascript
 */
