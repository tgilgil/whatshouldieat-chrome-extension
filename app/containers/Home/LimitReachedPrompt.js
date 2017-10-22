/**
*
* LimitReachedPrompt
*
*/

import React from 'react';
// import propTypes from 'prop-types';
// import styled from 'styled-components';
import ContentDescription from 'components/ContentDescription';
import RecipeButton from 'components/Buttons/RecipeButton';

class LimitReachedPrompt extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContentDescription>
        <h2>Install the extension to find more discoveries.</h2>
        <RecipeButton>Install</RecipeButton>
      </ContentDescription>
    );
  }
}

LimitReachedPrompt.propTypes = {
};

export default LimitReachedPrompt;
