import pt from "prop-types";

import {APPROVED_GENRES, Tab} from "./utils/const.js";

export const promo = pt.shape({
  filmTitle: pt.string.isRequired,
  genre: pt.oneOf(APPROVED_GENRES).isRequired,
  release: pt.number.isRequired,
}).isRequired;

export const image = pt.shape({
  preview: pt.string.isRequired,
  background: pt.string.isRequired,
  poster: pt.string.isRequired,
}).isRequired;

export const movie = pt.shape({
  preview: pt.string.isRequired,
  full: pt.string.isRequired,
}).isRequired;

export const rating = pt.shape({
  value: pt.number.isRequired,
  votesCount: pt.number.isRequired,
}).isRequired;

export const film = pt.shape({
  id: pt.oneOfType([
    pt.string,
    pt.number
  ]).isRequired,

  filmTitle: pt.string.isRequired,
  release: pt.number.isRequired,
  runtime: pt.number.isRequired,
  genre: pt.oneOf(APPROVED_GENRES).isRequired,
  description: pt.arrayOf(pt.string).isRequired,
  director: pt.string.isRequired,
  starring: pt.arrayOf(pt.string).isRequired,
  isFavorite: pt.bool.isRequired,

  image,
  movie,
  rating,
}).isRequired;

export const films = pt.arrayOf(film).isRequired;

export const comment = pt.shape({
  id: pt.oneOfType([
    pt.string,
    pt.number
  ]).isRequired,

  userName: pt.string.isRequired,
  rating: pt.number.isRequired,
  comment: pt.string.isRequired,
});

export const comments = pt.arrayOf(comment).isRequired;

export const currentTab = pt.oneOf(Object.values(Tab)).isRequired;

export const string = pt.string.isRequired;
export const number = pt.number.isRequired;
export const bool = pt.bool.isRequired;
export const func = pt.func.isRequired;

export default {
  promo,
  image,
  movie,
  rating,
  film,
  films,
  comment,
  comments,
  currentTab,

  string,
  number,
  bool,
  func,
};
