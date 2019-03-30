import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import { getMovieDetails } from '../actions/details';
import { updateImagePathWithBaseURL, timeConvert } from '../helpers/utils';

class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        }
    }
    componentDidMount() {
        const { match: { params: { id }}} = this.props;

        if (this.props.currentMovie.id !== id) {
            this.setState({ isLoading: true });
            this.props.getMovieDetails({ movieId: id }).then(() => this.setState({
                isLoading: false,
            }));
        }
    }
    
    handleBackClick() {
        this.props.history.goBack();
    }

    render() {
        const { title, backdrop_path, poster_path, runtime, release_date, overview, vote_average } = updateImagePathWithBaseURL(this.props.currentMovie);

        const styles = { backgroundImage: `url(${backdrop_path})` }

        const { isLoading } = this.state;
        const popularity = Math.round(parseFloat(vote_average) * 10);

        return isLoading ? <Spinner className="spinner" animation="border" variant="light" /> : (
            <Container className="movie-details">
                <div className="arrow-back" onClick={this.handleBackClick.bind(this)}></div>
                <Card className="transition-item">
                    <div className="card-banner" style={styles}></div>
                    <Card.Body>
                        <Row>
                            <Col xs={5} md={3} lg={2}><img className="thumbnail" alt="thumbnail" src={poster_path} /></Col>
                            <Col xs={7} md={9} lg={10}>
                                <div className="card-info">
                                    <h5>{title}</h5>
                                    <p>{new Date(release_date).getFullYear()} &#183; {popularity}% User Score <br/>{timeConvert(runtime)}</p>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <Card.Title>Overview</Card.Title>
                        <Card.Text>{overview}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
};

const mapStateToProps = (state) => ({
    currentMovie: state.getIn(['movies', 'currentMovie']).toJS(),
});
const mapDispatchToProps = {
    getMovieDetails,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));