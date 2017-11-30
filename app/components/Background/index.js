/**
*
* Background
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { animate } from 'utils/animations';

class Background extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    setBackgroundHack(this.props.src);
    return (
      <div></div>
    );
  }
}

Background.propTypes = {
  src: PropTypes.string.isRequired,
};

function setBackgroundHack(url) {
  // Meh. ¯\_(ツ)_/¯
  animate(url);
}

export default Background;
