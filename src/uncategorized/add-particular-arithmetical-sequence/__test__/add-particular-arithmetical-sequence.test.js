import addParticularArithmeticalSequence from '../add-particular-arithmetical-sequence';

describe('addParticularArithmeticalSequence', () => {
  it('true에 해당하는 1항, 4항, 5항을 더한 37을 반환한다.', () => {
    expect(addParticularArithmeticalSequence(3, 4, [true, false, false, true, true])).toEqual(37);
  });

  it('true에 해당하는 4항만 더한 10을 반환한다.', () => {
    expect(addParticularArithmeticalSequence(7, 1, [false, false, false, true, false, false, false])).toEqual(10);
  });
});
