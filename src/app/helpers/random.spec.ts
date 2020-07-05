import { randomString } from './random';

describe('randomString', () => {
  it('should return a random string', () => {
    expect(randomString(5).length).toBeTruthy();
  });
});
