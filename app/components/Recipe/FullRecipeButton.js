/**
*
* FullRecipeButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const RecipeButton = styled(Button)`
  margin: 0.5em 0;
  font-size: 2em;

  margin-top: 3em;
  margin-bottom: 6em;
  border: none;
  border-radius: initial;
  text-transform: uppercase;
`;

class FullRecipeButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <RecipeButton href={this.props.url}><FormattedMessage {...messages.seeFullRecipe} /></RecipeButton>
    );
  }
}

FullRecipeButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default FullRecipeButton;
