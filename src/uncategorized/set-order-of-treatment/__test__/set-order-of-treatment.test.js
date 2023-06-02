import setOrderOfTreatment from '../set-order-of-treatment';

describe('setOrderOfTreatment', () => {
  it('emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 반환한다.', () => {
    expect(setOrderOfTreatment([3, 76, 24])).toEqual([3, 1, 2]);
  });

  it('emergency가 [1, 2, 3, 4, 5]이므로 응급도의 크기 순서대로 번호를 매긴 [5, 4, 3, 2, 1]를 반환한다.', () => {
    expect(setOrderOfTreatment([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it('emergency가 [1, 1, 1, 1, 1]이므로 응급도의 크기 순서대로 번호를 매긴 [1, 1, 1, 1, 1]를 반환한다.', () => {
    expect(setOrderOfTreatment([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });
});
