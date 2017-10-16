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
        <Background src={this.props.recipe.fields.image.fields.file.url} />
        <Logo url={this.props.recipe.fields.blog} src={`https:${this.props.recipe.fields.logo.fields.file.url}`} />
        <MainTitle title={this.props.recipe.fields.name} />
        <ExecutionTime preparationTime={this.props.recipe.fields.preparationTime} />
        <Portions portions={this.props.recipe.fields.portions} />
        <FullRecipeButton url={this.props.recipe.fields.blog} />
      </ContentDescription>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.any.isRequired,
};

export default Recipe;
