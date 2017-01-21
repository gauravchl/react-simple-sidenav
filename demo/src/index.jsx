import React from 'react';
import ReactDOM from 'react-dom';

import SimpleSidenav from '../../src/index.jsx';

let HelloWorld = React.createClass({
  propTypes: {

  },

  getInitialState() {
    return {

    };
  },


  render() {
    return (
      <div>
        React Image Story
        <SimpleSidenav/>
      </div>
    )
  },
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<HelloWorld/>, document.getElementById('main'));
});
