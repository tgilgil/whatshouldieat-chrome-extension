/**
*
* Logo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  height: 100px;
`;

class Logo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <a href={this.props.url || '#'}><Image className="logo" src={this.props.src} alt="What Should I Eat?" /></a>
      </div>
    );
  }
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Logo;
