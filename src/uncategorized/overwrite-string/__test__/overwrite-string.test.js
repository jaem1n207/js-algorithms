import overwriteString from '../overwrite-string';

describe('overwriteString', () => {
  it('my_string이 "He11oWor1d", overwrite_string이 "lloWorl", s가 2이면 "HelloWorld"를 반환한다.', () => {
    expect(overwriteString('He11oWor1d', 'lloWorl', 2)).toEqual('HelloWorld');
  });

  it('my_string이 "Program29b8UYP", overwrite_string이 "merS123", s가 7이면 "ProgrammerS123"를 반환한다.', () => {
    expect(overwriteString('Program29b8UYP', 'merS123', 7)).toEqual('ProgrammerS123');
  });
});
