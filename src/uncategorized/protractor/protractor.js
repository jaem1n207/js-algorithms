// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120829'

const protractor = (angle) => {
  if (0 < angle && angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (90 < angle && angle < 180) {
    return 3;
  } else {
    return 4;
  }
};

export default protractor;

/**
 * 다른 풀이
 *
 * ```js
 * const protractor = (angle) => {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
};

 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120829/solution_groups?language=javascript
 */
