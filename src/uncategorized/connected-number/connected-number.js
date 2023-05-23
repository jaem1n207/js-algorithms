// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181928'

const connectedNumber = (num_list) => {
  const oddStr = num_list.filter((num) => num % 2 === 1).join('');
  const evenStr = num_list.filter((num) => num % 2 === 0).join('');

  return Number(oddStr) + Number(evenStr);
};

export default connectedNumber;

/**
 * 다른 풀이
 *
 * ```js
 * const connectedNumber = (num_list) => {
  const { odds, evens } = num_list.reduce(
    ({ odds, evens }, cur) => {
      if (cur % 2 === 0) {
        evens.push(cur);
      } else {
        odds.push(cur);
      }
      return { odds, evens };
    },
    { odds: [], evens: [] }
  );

  return Number(odds.join('')) + Number(evens.join(''));
}
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181928/solution_groups?language=javascript
 */
