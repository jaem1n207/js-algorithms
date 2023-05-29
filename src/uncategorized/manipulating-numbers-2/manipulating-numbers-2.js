// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181925'

/**
 * @param {number[]} numLog
 * @returns {string}
 */
const manipulatingNumbers2 = (numLog) => {
  const result = [];

  for (let i = 0; i < numLog.length - 1; i += 1) {
    const diff = numLog[i + 1] - numLog[i];

    if (diff === 1) {
      result.push('w');
    } else if (diff === -1) {
      result.push('s');
    } else if (diff === 10) {
      result.push('d');
    } else if (diff === -10) {
      result.push('a');
    }
  }

  return result.join('');
};

export default manipulatingNumbers2;

/**
 * 다른 풀이
 *
 * ```js
 * const manipulatingNumbers2 = (numLog) => {
  const convert = {
    1: 'w',
    '-1': 's',
    10: 'd',
    '-10': 'a',
  };

  return numLog
    .slice(1)
    .map((num, index) => convert[num - numLog[index]])
    .join('');
};
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181925/solution_groups?language=javascript
 */
