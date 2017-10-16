/**
*
* MainTitle
*
*/

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 2.75em;
  font-family: 'Old Standard TT', Verdana, serif;
  text-transform: uppercase;
  margin-top: 1em;
`;

class MainTitle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledH1>
        {this.props.title}
      </StyledH1>
    );
  }
}

MainTitle.propTypes = {
  title: propTypes.string.isRequired,
};

export default MainTitle;
