// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120843'

const 공_던지기 = (numbers, k) => {
  // You can throw the ball from number 1 and skip one person to the right and only throw it to the next person. Given an integer array of numbers containing friends' numbers and an integer K, complete the solution function to return what is the number of the person who throws the ball the kth.
  return numbers[((k - 1) * 2) % numbers.length];
};

export default 공_던지기;

/**
 * 다른 풀이
 *
 * ```js
 * function 공_던지기(numbers, k) {
  let idx = 0;
  for (let i = 1; i < k; i++) {
    idx += 2;
    if (idx > numbers.length) {
      idx %= numbers.length;
    }
  }

  return numbers[idx];
}
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120843/solution_groups?language=javascript
 */
