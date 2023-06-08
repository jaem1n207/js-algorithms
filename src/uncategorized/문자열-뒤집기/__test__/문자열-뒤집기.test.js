import 문자열_뒤집기 from '../문자열-뒤집기';

describe('문자열_뒤집기', () => {
  it('Progra21Sremm3를 인덱스 6부터 인덱스 12까지를 뒤집은 문자열은 "ProgrammerS123"이므로 "ProgrammerS123"을 반환합니다.', () => {
    expect(문자열_뒤집기('Progra21Sremm3', 6, 12)).toEqual('ProgrammerS123');
  });

  it('Stanley1yelnatS를 인덱스 4부터 인덱스 10까지를 뒤집으면 원래 문자열과 같은 "Stanley1yelnatS"이므로 "Stanley1yelnatS"을 반환합니다.', () => {
    expect(문자열_뒤집기('Stanley1yelnatS', 4, 10)).toEqual('Stanley1yelnatS');
  });
});
