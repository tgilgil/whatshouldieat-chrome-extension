/**
*
* FullRecipeButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import RecipeButton from 'components/Buttons/RecipeButton';
import messages from './messages';

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
