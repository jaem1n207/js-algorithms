import createArray2 from '../create-array-2';

describe('createArray2', () => {
  it('5 이상 555 이하의 0과 5로만 이루어진 정수는 작은 수부터 5, 50, 55, 500, 505, 550, 555가 있습니다. 따라서 [5, 50, 55, 500, 505, 550, 555]를 반환합니다.', () => {
    expect(createArray2(5, 555)).toEqual([5, 50, 55, 500, 505, 550, 555]);
  });

  it('10 이상 20 이하의 0과 5로만 이루어진 정수는 없습니다. 따라서 [-1]을 반환합니다.', () => {
    expect(createArray2(10, 20)).toEqual([-1]);
  });
});
