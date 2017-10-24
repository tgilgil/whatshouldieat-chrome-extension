/**
*
* Shareable
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Background from 'components/Background';
import ContentDescription from 'components/ContentDescription';
import Logo from 'components/Logo';
import MainTitle from 'components/MainTitle';
import BrandLogo from 'images/logo.png';
import Markdown from './Markdown';

class Shareable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContentDescription>
        <Background src={this.props.shareable.imageUrl} />
        <Logo src={BrandLogo} />
        <MainTitle title={this.props.shareable.name} />
        <Markdown source={this.props.shareable.description} />
      </ContentDescription>
    );
  }
}

Shareable.propTypes = {
  shareable: PropTypes.any.isRequired,
};

export default Shareable;
