import 문자열_여러_번_뒤집기 from '../문자열-여러-번-뒤집기';

describe('문자열_여러_번_뒤집기', () => {
  it('my_string은 "rermgorpsam"이고 주어진 queries를 순서대로 처리하면 "programmers"가 됩니다.', () => {
    expect(
      문자열_여러_번_뒤집기('rermgorpsam', [
        [2, 3],
        [0, 7],
        [5, 9],
        [6, 10],
      ])
    ).toEqual('programmers');
  });
});
