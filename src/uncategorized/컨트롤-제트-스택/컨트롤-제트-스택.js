// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120853'

const 컨트롤_제트_스택 = (s) => {
  const arr = s.split(' ');

  return arr.reduce((acc, cur, idx) => {
    if (cur === 'Z') {
      acc -= Number(arr[idx - 1]);
    } else {
      acc += Number(cur);
    }

    return acc;
  }, 0);
};

export default 컨트롤_제트_스택;

/**
 * 다른 풀이
 *
 * ```js
 * const stack = [];

s.split(' ').forEach((target) => {
  if (target === 'Z') stack.pop();
  else stack.push(+target);
});

return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120853/solution_groups?language=javascript
 */
