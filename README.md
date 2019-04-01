# The Movie DB Search React App
An app created with React which uses an open movie database. (https://www.themoviedb.org/documentation/api)

<p align="center">
  <img src="demo.gif">
</p>

Checkout the [demo](https://fpaz.github.io/movie-db/).

## Features
- Loading of popular movies in a responsive design.
- Search movies dynamically by title with auto-suggest movie title with poster thumbnails.
- Movie details with backdrop poster, thumbnail and overview information.
- Browser history is preserved, movie details page can be bookmarked.

## Tools and Dependencies
- `React`, `redux`, `thunk` for managing store and logging actions and dispatchers.
- `eslint` for enforcing code formatting and improve quality of code.
- `react-router` for creating routes, decoupling components and preserving browser history.
- `Immutable.js` for making the data structure (store) immutable.
- `Downshift` - type-ahead feature integrated with TMDB API.
- `react-bootstrap` for minor layout of components i.e. grid.
- `Jest` for writing and testing helpers, utilities - can be extended for TDD/BDD testing of components.
- `VSCode` editor for the code.

## Running the App
Download or clone the project and run ```npm install && npm start```.
