// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120811'

const findMedian = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
  }

  return sortedArray[middleIndex];
};

export default findMedian;
