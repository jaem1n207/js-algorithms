// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120851'

const 숨어있는_숫자의_덧셈1 = (my_string) => {
  return my_string.split('').reduce((acc, cur) => {
    if (cur.match(/[1-9]/g)) {
      acc += cur * 1;
    }

    return acc;
  }, 0);
};

export default 숨어있는_숫자의_덧셈1;

/**
 * 다른 풀이
 *
 * ```js
 * function 숨어있는_숫자의_덧셈1(my_string) {
  return my_string
    .replaceAll(/[^\d]/g, '')
    .split('')
    .map((v) => +v)
    .reduce((a, v) => a + v, 0);
}
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120851/solution_groups?language=javascript
 */
