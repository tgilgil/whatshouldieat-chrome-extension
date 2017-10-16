/**
*
* Portions
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 1.25em;
  margin-top: 0.50em;
`;

class Portions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledH2>{this.props.portions}</StyledH2>
    );
  }
}

Portions.propTypes = {
  portions: PropTypes.string.isRequired,
};

export default Portions;
