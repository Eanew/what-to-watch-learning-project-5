import {Screen, MovieTab} from "../../utils/const.js";

import {reducer, ActionType, ActionCreator} from "./screen.js";

import {films} from "../../test-mock.js";

describe(`Screen reducer`, () => {
  it(`Should returns initial state by default`, () => {
    expect(reducer(void 0, {})).toEqual({
      screen: Screen.MAIN,
      lastScreen: Screen.MAIN,
      currentFilm: null,
      movieTab: MovieTab.OVERVIEW,
    });
  });

  it(`Should set current film to a given value`, () => {
    expect(reducer({
      screen: Screen.MAIN,
      lastScreen: Screen.MAIN,
      currentFilm: films[0],
    }, {
      type: ActionType.SET_MOVIE_PAGE_SCREEN,
      payload: films[1],
    })).toEqual({
      screen: Screen.MOVIE_PAGE,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[1],
      movieTab: MovieTab.OVERVIEW,
    });
  });

  it(`Should switch current film`, () => {
    expect(reducer({
      screen: Screen.MOVIE_PAGE,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
      movieTab: MovieTab.REVIEWS,
    }, {
      type: ActionType.SET_MOVIE_PAGE_SCREEN,
      payload: films[1],
    })).toEqual({
      screen: Screen.MOVIE_PAGE,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[1],
      movieTab: MovieTab.OVERVIEW,
    });
  });

  it(`Should set player screen`, () => {
    expect(reducer({
      screen: Screen.MOVIE_PAGE,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
    }, {
      type: ActionType.SET_PLAYER_SCREEN,
    })).toEqual({
      screen: Screen.PLAYER,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
    });
  });

  it(`Should switch player screen to movie page`, () => {
    expect(reducer({
      screen: Screen.PLAYER,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
      movieTab: MovieTab.REVIEWS,
    }, {
      type: ActionType.SET_MOVIE_PAGE_SCREEN,
    })).toEqual({
      screen: Screen.MOVIE_PAGE,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
      movieTab: MovieTab.REVIEWS,
    });
  });

  it(`Should switch movie page screen to sign in screen`, () => {
    expect(reducer({
      screen: Screen.MOVIE_PAGE,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
    }, {
      type: ActionType.SET_SIGN_IN_SCREEN,
    })).toEqual({
      screen: Screen.SIGN_IN,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
    });
  });

  it(`Should set main screen`, () => {
    expect(reducer({
      screen: Screen.MOVIE_PAGE,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
    }, {
      type: ActionType.SET_MAIN_PAGE_SCREEN,
    })).toEqual({
      screen: Screen.MAIN,
      lastScreen: Screen.MAIN,
      currentFilm: films[0],
    });
  });

  it(`Should switch movie tab`, () => {
    expect(reducer({
      screen: Screen.MOVIE_PAGE,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
      movieTab: MovieTab.REVIEWS,
    }, {
      type: ActionType.SWITCH_MOVIE_TAB,
      payload: MovieTab.DETAILS,
    })).toEqual({
      screen: Screen.MOVIE_PAGE,
      lastScreen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
      movieTab: MovieTab.DETAILS,
    });
  });
});

describe(`Screen action creators`, () => {
  it(`Should setSignInScreen method returns correct action`, () => {
    expect(ActionCreator.setSignInScreen()).toEqual({
      type: ActionType.SET_SIGN_IN_SCREEN,
    });
  });

  it(`Should setMainPageScreen method returns correct action`, () => {
    expect(ActionCreator.setMainPageScreen()).toEqual({
      type: ActionType.SET_MAIN_PAGE_SCREEN,
    });
  });

  it(`Should setMoviePageScreen method returns correct action`, () => {
    expect(ActionCreator.setMoviePageScreen(films[0])).toEqual({
      type: ActionType.SET_MOVIE_PAGE_SCREEN,
      payload: films[0],
    });
  });

  it(`Should setPlayerScreen method returns correct action`, () => {
    expect(ActionCreator.setPlayerScreen()).toEqual({
      type: ActionType.SET_PLAYER_SCREEN,
    });
  });

  it(`Should switchMovieTab method returns correct action`, () => {
    expect(ActionCreator.switchMovieTab()).toEqual({
      type: ActionType.SWITCH_MOVIE_TAB,
    });
  });
});
