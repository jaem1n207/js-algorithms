// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120842'

const 이차원으로_만들기 = (num_list, n) => {
  const result = [];
  let temp = [];
  for (let i = 0; i < num_list.length; i++) {
    temp.push(num_list[i]);
    if (temp.length === n) {
      result.push(temp);
      temp = [];
    }
  }

  return result;
};

export default 이차원으로_만들기;

/**
 * 다른 풀이
 *
 * ```js
 * function 이차원으로_만들기(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120842/solution_groups?language=javascript
 */
