// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181926'

/**
 * @param {number} n
 * @param {string} control
 * @return {number}
 */
const manipulatingNumbers1 = (n, control) => {
  const operations = {
    w: n => n + 1,
    s: n => n - 1,
    d: n => n + 10,
    a: n => n - 10,
  };

  return [...control].reduce((acc, cur) => operations[cur](acc), n);
};

export default manipulatingNumbers1;
