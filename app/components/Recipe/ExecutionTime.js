/**
*
* ExecutionTime
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const StyledH2 = styled.h2`
  margin-bottom: 0;
  font-size: 2em;
`;

class ExecutionTime extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledH2><FormattedMessage {...messages.preparationTime} /> : {this.props.preparationTime}</StyledH2>
    );
  }
}

ExecutionTime.propTypes = {
  preparationTime: PropTypes.string.isRequired,
};

export default ExecutionTime;
