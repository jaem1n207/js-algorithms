// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120844'

const 배열_회전시키기 = (numbers, direction) => {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  return numbers;
};

export default 배열_회전시키기;

/**
 * 다른 풀이
 *
 * ```js
 * function 배열_회전시키기(numbers, direction) {
  return direction === 'right'
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
}
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120844/solution_groups?language=javascript
 */
