/**
*
* Background
*
*/

import React from 'react';
import PropTypes from 'prop-types';

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
  const quality = 70;
  document.getElementById('bg').style.background = `linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 42%,rgba(0,0,0,1) 81%,rgba(0,0,0,1) 99%), url(https:${url}?fm=jpg&w=2048&h=1440&q=${quality}) no-repeat fixed`;
  document.getElementById('bg').style.backgroundSize = 'cover';
}

export default Background;
