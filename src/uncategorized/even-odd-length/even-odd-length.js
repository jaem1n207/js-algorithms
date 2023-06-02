// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120824'

const evenOddLength = (num_list) => {
  return [num_list.filter((num) => num % 2 === 0).length, num_list.filter((num) => num % 2 === 1).length];
};

export default evenOddLength;

/**
 * 다른 풀이
 *
 * ```js
 * const evenOddLength = (num_list) => {
  let answer = [0, 0];

  for (let element of num_list) {
    answer[element % 2]++;
  }

  return answer;
};
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120824/solution_groups?language=javascript
 */
