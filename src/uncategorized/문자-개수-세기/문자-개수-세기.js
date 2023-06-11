// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/181902'

const 문자_개수_세기 = (my_string) => {
  const alphabetsLength = 26;
  const asciiCode = {
    A: 65,
    a: 97,
  };

  const arr = Array(52).fill(0);

  return [...my_string].reduce((acc, cur) => {
    let curIdx = 0;
    const curCharCode = cur.charCodeAt();

    if (curCharCode >= asciiCode.a) {
      curIdx = curCharCode - (asciiCode.a - alphabetsLength);
    } else {
      curIdx = curCharCode - asciiCode.A;
    }

    acc[curIdx] = acc[curIdx] ?? 0;
    acc[curIdx]++;

    return acc;
  }, arr);
};

export default 문자_개수_세기;

/**
 * 다른 풀이
 *
 * ```js
 * function 문자_개수_세기(m) {
  var answer = [];
  let al = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let a = [];
  a.length = 52;
  a.fill(0);

  m.split('').map((n) => {
    a[al.indexOf(n)] += 1;
  });

  return a;
}
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181902/solution_groups?language=javascript
 */
