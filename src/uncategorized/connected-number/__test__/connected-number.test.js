import connectedNumber from '../connected-number';

describe('connectedNumber', () => {
  it('홀수만 이어 붙인 수는 351이고 짝수만 이어 붙인 수는 42이므로 두 수의 합인 393을 반환한다.', () => {
    expect(connectedNumber([3, 4, 5, 2, 1])).toEqual(393);
  });

  it('홀수만 이어 붙인 수는 573이고 짝수만 이어 붙인 수는 8이므로 두 수의 합인 581을 반환한다.', () => {
    expect(connectedNumber([5, 7, 8, 3])).toEqual(581);
  });
});
