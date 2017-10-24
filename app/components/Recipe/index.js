/**
*
* Recipe
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import ContentDescription from 'components/ContentDescription';
import Background from 'components/Background';
import Logo from 'components/Logo';
import MainTitle from 'components/MainTitle';
import ExecutionTime from './ExecutionTime';
import Portions from './Portions';
import FullRecipeButton from './FullRecipeButton';

class Recipe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContentDescription>
        <Background src={this.props.recipe.imageUrl} />
        <Logo url={this.props.recipe.link} src={`https:${this.props.recipe.logoUrl}`} />
        <MainTitle title={this.props.recipe.name} />
        <ExecutionTime preparationTime={this.props.recipe.execution} />
        <Portions portions={this.props.recipe.portions} />
        <FullRecipeButton url={this.props.recipe.link} />
      </ContentDescription>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.any.isRequired,
};

export default Recipe;
