import diceGame2 from '../dice-game-2';

describe('diceGame2', () => {
  it('세 주사위 숫자가 모두 다르므로 2 + 6 + 1 = 9를 반환한다.', () => {
    expect(diceGame2(2, 6, 1)).toEqual(9);
  });

  it('두 주사위 숫자만 같으므로 (5 + 3 + 3) × (52 + 32 + 32 ) = 11 × 43 = 473을 반환한다.', () => {
    expect(diceGame2(5, 3, 3)).toEqual(473);
  });

  it('세 주사위 숫자가 모두 같으므로 (4 + 4 + 4) × (42 + 42 + 42 ) × (43 + 43 + 43 ) = 12 × 48 × 192 = 110,592를 반환한다.', () => {
    expect(diceGame2(4, 4, 4)).toEqual(110_592);
  });
});
