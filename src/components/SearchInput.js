import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Downshift from 'downshift';

import { updateMoviesImagePath } from '../helpers/utils';
import { searchMovie } from '../actions/search';

class SearchMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        }

        this.inputOnChange = this.inputOnChange.bind(this);
        this.downshiftOnChange = this.downshiftOnChange.bind(this);
    }

    inputOnChange(event) {
        if (!event.target.value) {
            return;
        }
        this.props.searchMovie({ query: event.target.value }).then(
            response => {
                const movies = updateMoviesImagePath(response.data, 92);
                this.setState({ movies });
            }
        );
    }

    downshiftOnChange(movie) {
        this.props.history.push(`/movie/${movie.id}`);
    }

    render() {
        return (
            <Downshift
                    onChange={this.downshiftOnChange}
                    itemToString={item => (item ? item.title : "")}
                >
                    {({
                    selectedItem,
                    getInputProps,
                    getItemProps,
                    highlightedIndex,
                    isOpen,
                    inputValue,
                    getLabelProps
                    }) => (
                    <div className="search-input-container">
                        <input
                        {...getInputProps({
                            className: "form-control search-input",
                            placeholder: "Search",
                            onChange: this.inputOnChange
                        })}
                        />
                        {isOpen ? (
                        <div className="downshift-dropdown">
                            {this.state.movies
                            .filter(
                                item =>
                                !inputValue ||
                                item.title
                                    .toLowerCase()
                                    .includes(inputValue.toLowerCase())
                            )
                            .slice(0, 10)
                            .map((item, index) => (
                                <div
                                className="dropdown-item"
                                {...getItemProps({ key: index, index, item })}
                                style={{
                                    backgroundColor:
                                    highlightedIndex === index ? "lightgray" : "white",
                                    fontWeight: selectedItem === item ? "bold" : "normal"
                                }}
                                >
                                <img alt="thumbnail" className="search-thumbnail" src={item.poster_path} />
                                {item.title}
                                </div>
                            ))}
                        </div>
                        ) : null}
                    </div>
                    )}
                </Downshift>            
        )
    }
}

const mapDispatchToProps = {
    searchMovie,
};

export default withRouter(connect(null, mapDispatchToProps)(SearchMovie));