// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181913'

const 문자열_여러_번_뒤집기 = (my_string, queries) => {
  const stringReplacement = (str, query) => {
    const [start, end] = query;

    const before = str.slice(0, start);
    const target = str.slice(start, end + 1);
    const reversed = target.split('').reverse().join('');
    const after = str.slice(end + 1);

    return before + reversed + after;
  };

  return queries.reduce((acc, query) => stringReplacement(acc, query), my_string);
};

export default 문자열_여러_번_뒤집기;

/**
 * 다른 풀이
 *
 * ```js
 * function 문자열_여러_번_뒤집기(my_string, queries) {
  let str = my_string.split('');
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });

  return str.join('');
}

 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181913/solution_groups?language=javascript
 */
