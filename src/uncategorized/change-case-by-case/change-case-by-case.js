// Link: https://school.programmers.co.kr/learn/courses/30/lessons/181949

/**
 * @param {string} str
 */
const changeCaseByCase = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isUpperCase = char.toUpperCase() === char;

    result += isUpperCase ? char.toLowerCase() : char.toUpperCase();
  }

  return result;
};

export default changeCaseByCase;

// 다른 풀이
// const changeCaseByCase = (str) => {
//   let result = '';

//   str.forEach((value, index) => {
//     if (value === value.toUpperCase()) {
//       str[index] = value.toLowerCase();
//     } else {
//       str[index] = value.toUpperCase();
//     }
//   });

//   return str.join('');
// };
