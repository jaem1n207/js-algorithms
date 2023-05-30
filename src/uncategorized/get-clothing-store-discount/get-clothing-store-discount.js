// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120818'

/**
 * @param {number} price
 * @returns {number}
 */
const getClothingStoreDiscount = (price) => {
  let rate = 0;

  if (price >= 500_000 && price > 300_000) {
    rate = 20;
  } else if (price >= 300_000 && price > 100_000) {
    rate = 10;
  } else if (price >= 100_000) {
    rate = 5;
  }

  let savedPrice = price * (rate / 100);

  return Math.floor(price - savedPrice);
};

export default getClothingStoreDiscount;

/**
 * 다른 풀이
 *
 * ```js
 * const discounts = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
];

const getClothingStoreDiscount = (price) => {
  for (const discount of discounts) if (price >= discount[0]) return Math.floor(price - (price * discount[1]) / 100);
  return price;
};
 * ```
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/120818/solution_groups?language=javascript
 */
