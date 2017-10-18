/**
*
* Footer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const selected = {
  textDecoration: 'underline',
  opacity: 0.3,
  pointerEvents: 'none',
  cursor: 'default',
};

class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const locale = this.props.currentLocale;

    return (
      <footer className="footer">
        <div className="left">
          <a style={(locale === 'fr' ? selected : {})} onClick={() => this.props.changeLanguage('fr')} href="#lang">FR</a>
          <a style={(locale === 'en' ? selected : {})} onClick={() => this.props.changeLanguage('en')} href="#lang">EN</a>
        </div>
        <div className="right"><FormattedMessage {...messages.lightspeedturtle} /><a className="underline" target="_blank" href="https://www.facebook.com/lightspeedturtle"> Lightspeed Turtle</a></div>
      </footer>
    );
  }
}

Footer.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  currentLocale: PropTypes.string.isRequired,
};

export default Footer;
