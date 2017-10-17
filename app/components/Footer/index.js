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

class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <footer className="footer">
        <div className="left">
          <a onClick={() => this.props.changeLanguage('fr')} href="#lang">FR</a>
          <a onClick={() => this.props.changeLanguage('en')} href="#lang">EN</a>
        </div>
        <div className="right"><FormattedMessage {...messages.lightspeedturtle} /><a className="underline" target="_blank" href="https://www.facebook.com/lightspeedturtle"> Lightspeed Turtle</a></div>
      </footer>
    );
  }
}

Footer.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};

export default Footer;
