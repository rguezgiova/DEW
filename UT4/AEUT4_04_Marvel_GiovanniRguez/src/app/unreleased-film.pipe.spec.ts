import { UnreleasedFilmPipe } from './pipes/unreleased-film.pipe';

describe('UnreleasedFilmPipe', () => {
  it('create an instance', () => {
    const pipe = new UnreleasedFilmPipe();
    expect(pipe).toBeTruthy();
  });
});
