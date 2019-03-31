import { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return this.props.children;
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
