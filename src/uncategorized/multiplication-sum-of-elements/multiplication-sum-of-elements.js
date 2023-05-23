// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181929'

/**
 * @param {number[]} num_list
 * @returns {number}
 */
const multiplicationSumOfElements = (num_list) => {
  const sum = num_list.reduce((acc, cur) => acc + cur, 0);
  const multiply = num_list.reduce((acc, cur) => acc * cur, 1);

  return multiply < sum ** 2 ? 1 : 0;
};

export default multiplicationSumOfElements;
