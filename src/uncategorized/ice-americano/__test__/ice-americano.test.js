import iceAmericano from '../ice-americano';

describe('iceAmericano', () => {
  it('5,500원은 아이스 아메리카노 한 잔을 살 수 있고 잔돈은 0원이다.', () => {
    expect(iceAmericano(5_500)).toEqual([1, 0]);
  });

  it('11,000원은 아이스 아메리카노 두 잔을 살 수 있고 잔돈은 0원이다.', () => {
    expect(iceAmericano(11_000)).toEqual([2, 0]);
  });

  it('15,400원은 아이스 아메리카노 두 잔을 살 수 있고 잔돈은 4,400원이다.', () => {
    expect(iceAmericano(15_400)).toEqual([2, 4_400]);
  });
});
