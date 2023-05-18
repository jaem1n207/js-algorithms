import printSpecialCharacters from '../print-special-characters';

describe('printSpecialCharacters', () => {
  it('console.log로 !@#$%^&*(\'"<>?:;를 출력한다.', () => {
    expect(printSpecialCharacters()).toEqual('!@#$%^&*(\\\'"<>?:;');
  });
});
