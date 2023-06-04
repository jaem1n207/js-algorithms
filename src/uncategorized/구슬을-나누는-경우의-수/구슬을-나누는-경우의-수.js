// Link: 'https://school.programmers.co.kr/learn/courses/30/lessons/120840'

const 구슬을_나누는_경우의_수 = (balls, share) => {
  const factorial = (n) => {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
      result *= i;
    }

    return result;
  };

  return factorial(balls) / (factorial(balls - share) * factorial(share));
};

export default 구슬을_나누는_경우의_수;
