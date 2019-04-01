import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { ImmutableLoadingBar as LoadingBar } from 'react-redux-loading-bar';
import { getTopMovies } from '../actions/movies';
import { updateMoviesImagePath } from '../helpers/utils';

import MovieList from './MovieList';
import SearchMovie from './SearchInput';

import Logo from '../resources/images/tmdb-logo.png';

class MovieBrowser extends Component {
  componentDidMount() {
    this.props.getTopMovies({ page: 1 });
  }

  render() {
    const {
      movies: { topRated }
    } = this.props;
    const movieList = topRated.results ? updateMoviesImagePath(topRated) : null;
    return (
      <div className='movie-browser'>
        <LoadingBar />
        <Container>
          <Row className='back-drop'>
            <div className='stripes'>
              <img className='logo' alt='logo' src={Logo} />
            </div>
          </Row>
          <Row>
            <SearchMovie />
          </Row>
          <Row>
            <MovieList movies={movieList} />
          </Row>
        </Container>
      </div>
    );
  }
}

MovieBrowser.propTypes = {
  movies: PropTypes.shape().isRequired,
  getTopMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.get('movies').toJS(),
  currentPage: state.getIn(['movies', 'topRated', 'currentPage'])
});

const mapDispatchToProps = {
  getTopMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieBrowser);
