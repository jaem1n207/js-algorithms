import removeCertainCharacters from '../remove-certain-characters';

describe('removeCertainCharacters', () => {
  it('"abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.', () => {
    expect(removeCertainCharacters('abcdef', 'f')).toEqual('abcde');
  });

  it('"BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.', () => {
    expect(removeCertainCharacters('BCBdbe', 'B')).toEqual('Cdbe');
  });
});
