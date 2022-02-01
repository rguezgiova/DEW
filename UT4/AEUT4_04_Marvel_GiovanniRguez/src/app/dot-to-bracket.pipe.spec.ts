import { DotToBracketPipe } from './pipes/dot-to-bracket.pipe';

describe('DotToBracketPipe', () => {
  it('create an instance', () => {
    const pipe = new DotToBracketPipe();
    expect(pipe).toBeTruthy();
  });
});
