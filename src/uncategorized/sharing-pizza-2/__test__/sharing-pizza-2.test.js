import sharingPizza2 from '../sharing-pizza-2';

describe('sharingPizza2', () => {
  it('6명이 모두 같은 양을 먹기 위해 한 판을 시켜야 피자가 6조각으로 모두 한 조각씩 먹을 수 있습니다.', () => {
    expect(sharingPizza2(6)).toEqual(1);
  });

  it('10명이 모두 같은 양을 먹기 위해 최소 5판을 시켜야 피자가 30조각으로 모두 세 조각씩 먹을 수 있습니다.', () => {
    expect(sharingPizza2(10)).toEqual(5);
  });

  it('4명이 모두 같은 양을 먹기 위해 최소 2판을 시키면 피자가 12조각으로 모두 세 조각씩 먹을 수 있습니다.', () => {
    expect(sharingPizza2(4)).toEqual(2);
  });
});
