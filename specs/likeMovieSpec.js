import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteMoviedb from '../src/scripts/data/favorite-movie-idb';
import * as TestFactories from './helper/testFactories';

describe('Liking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the movie has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({id : 1});

    expect(document.querySelector('[aria-label="like this movie"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the movie has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({id : 1});

    expect(document.querySelector('[aria-label="unlike this movie"]'))
      .toBeFalsy();
  });

  it('should be able to like the movie', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({id : 1});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const movie = await FavoriteMoviedb.getMovie(1);
    expect(movie).toEqual({ id: 1 });

    FavoriteMoviedb.deleteMovie(1);
  });

  it('should not add a movie again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({id : 1});

    await FavoriteMoviedb.putMovie({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteMoviedb.getAllMovies()).toEqual([{ id: 1 }]);
    FavoriteMoviedb.deleteMovie(1);
  });

  it('should not add a movie when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteMoviedb.getAllMovies()).toEqual([]);
  });
});
