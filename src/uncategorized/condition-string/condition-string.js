// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181934'

const conditionString = (ineq, eq, n, m) => {
  let result = 0;

  if (ineq === '<') {
    if (eq === '=') {
      result = n <= m ? 1 : 0;
    } else {
      result = n < m ? 1 : 0;
    }
  } else if (ineq === '>') {
    if (eq === '=') {
      result = n >= m ? 1 : 0;
    } else {
      result = n > m ? 1 : 0;
    }
  }

  return result;
};

export default conditionString;

/**
 * 다른 풀이
 * 
 * ```js
 * const operations = {
  '>=': (a, b) => a >= b,
  '>!': (a, b) => a > b,
  '<=': (a, b) => a <= b,
  '<!': (a, b) => a < b,
};

const conditionString = (ineq, eq, n, m) => {
  return operations[ineq + eq](n, m) ? 1 : 0;
};
 * ```
 * 
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181934/solution_groups?language=javascript
 */
