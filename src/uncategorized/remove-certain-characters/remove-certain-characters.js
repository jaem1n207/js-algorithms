// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120826'

const removeCertainCharacters = (my_string, letter) => {
  return my_string
    .split('')
    .filter((char) => char !== letter)
    .join('');
};

export default removeCertainCharacters;

/**
 * 다른 풀이
 *
 * ```js
 * const removeCertainCharacters = (my_string, letter) => {
  return my_string.split(letter).join('');
};

or

const removeCertainCharacters = (my_string, letter) => {
  return my_string.replaceAll(letter, '');
};
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120826/solution_groups?language=javascript
 */
