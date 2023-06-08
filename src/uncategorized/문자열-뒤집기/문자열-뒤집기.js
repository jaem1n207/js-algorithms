// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181905'

const 문자열_뒤집기 = (my_string, s, e) => {
  return my_string.slice(0, s) + [...my_string.slice(s, e + 1)].reverse().join('') + my_string.slice(e + 1);
};

export default 문자열_뒤집기;

/**
 * 다른 풀이
 *
 * ```js
 * function 문자열_뒤집기(my_string, s, e) {
  var answer = '';
  var str = my_string.substring(s, e + 1);
  var newStr = str.split('').reverse().join('');

  answer = my_string.replace(str, newStr);
  return answer;
}

 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181905/solution_groups?language=javascript
 */
