import protractor from '../protractor';

describe('protractor', () => {
  it('angle이 70이므로 예각입니다. 따라서 1을 return합니다.', () => {
    expect(protractor(70)).toEqual(1);
  });

  it('angle이 90이므로 직각입니다. 따라서 2를 return합니다.', () => {
    expect(protractor(90)).toEqual(2);
  });

  it('angle이 91이므로 둔각입니다. 따라서 3을 return합니다.', () => {
    expect(protractor(91)).toEqual(3);
  });

  it('angle이 180이므로 평각입니다. 따라서 4을 return합니다.', () => {
    expect(protractor(180)).toEqual(4);
  });
});
