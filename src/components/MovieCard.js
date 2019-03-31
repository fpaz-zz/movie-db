import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Card from 'react-bootstrap/Card';
import { withRouter } from 'react-router';

import { getMonthString } from '../helpers/utils';

class MovieCard extends Component {
  handleClick(id) {
    this.props.history.push(`/movie/${id}`);
  }
  render() {
    const { movie } = this.props;
    const releaseDate = new Date(movie.release_date);
    const dateString =
      getMonthString(releaseDate.getMonth()) + ' ' + releaseDate.getFullYear();
    const popularity = Math.round(parseFloat(movie.vote_average) * 10);

    const badgeClass = 'popular-badge';
    let badgeModifier = '';
    if (popularity <= 50) {
      badgeModifier = 'red';
    }

    if (popularity > 50 && popularity <= 80) {
      badgeModifier = 'purple';
    }

    return (
      <Card
        className="transition-item"
        onClick={this.handleClick.bind(this, movie.id)}
      >
        <Card.Body>
          <img
            className="thumbnail"
            alt="movie poster"
            src={movie.poster_path}
          />
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{dateString}</Card.Text>
          <div
            className={cx(badgeClass, {
              [`${badgeClass}--${badgeModifier}`]: badgeModifier !== ''
            })}
          >
            {popularity}%
          </div>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  history: PropTypes.shape().isRequired,
  movie: PropTypes.shape().isRequired,
};

export default withRouter(MovieCard);
