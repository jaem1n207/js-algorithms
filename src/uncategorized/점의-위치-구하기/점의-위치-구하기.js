// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120841'

const 점의_위치_구하기 = (dot) => {
  const [x, y] = dot;
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else {
    return 4;
  }
};

export default 점의_위치_구하기;

/**
 * 다른 풀이
 *
 * ```js
 * const 점의_위치_구하기 = (dot) => {
  const [x, y] = dot;
  const check = x * y > 0;

  return x > 0 ? (check ? 1 : 4) : check ? 3 : 2;
};
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120841/solution_groups?language=javascript
 */
