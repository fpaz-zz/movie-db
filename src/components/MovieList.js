import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const renderMovieColumns = movies
    ? movies.map(movie => (
      <Col className="movie" key={movie.id} xs={6} sm={4} md={3} lg={3}>
        <MovieCard movie={movie} />
      </Col>
    ))
    : null;

  return (
    <>
      <Card.Title className="category">Popular Movies</Card.Title>
      <Row className="movie-list">{renderMovieColumns}</Row>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()),
};

export default MovieList;
