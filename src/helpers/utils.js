import Immutable from 'immutable';

const TMDB_IMAGE_BASE_URL = (width = 300) =>
  `https://image.tmdb.org/t/p/w${width}`;

export const updateImagePathWithBaseURL = (movieResult, width = 300) => ({
  ...movieResult,
  backdrop_path: movieResult.backdrop_path
    ? `${TMDB_IMAGE_BASE_URL(1280)}${movieResult.backdrop_path}`
    : null,
  poster_path: movieResult.poster_path
    ? `${TMDB_IMAGE_BASE_URL(width)}${movieResult.poster_path}`
    : null
});

export const updateMoviesImagePath = ({ results }, width) =>
  results
    ? results.map(movieResult => updateImagePathWithBaseURL(movieResult, width))
    : null;

export const stateTransformer = state => {
  if (Immutable.Iterable.isIterable(state)) {
    return state.toJS();
  }
  return state;
};

export const getMonthString = index => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return monthNames[index];
};

export const getScrollDownPercentage = window => {
  const pageHeight = window.document.documentElement.scrollHeight;
  const clientHeight = window.document.documentElement.clientHeight;
  const scrollPos = window.pageYOffset;
  const currentPosition = scrollPos + clientHeight;
  const percentageScrolled = currentPosition / pageHeight;
  return percentageScrolled;
};

export const timeConvert = n => {
  const minutes = n % 60;
  const hours = (n - minutes) / 60;
  return `${hours}h ${minutes} min`;
};
