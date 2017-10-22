/**
*
* Footer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const selected = {
  opacity: 0.3,
  pointerEvents: 'none',
  cursor: 'default',
};

const VerticalAlignMiddleA = styled.a`
  vertical-align: middle;
`;

const VerticalAlignMiddleSpan = styled.span`
  vertical-align: middle;
`;

class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const locale = this.props.currentLocale;

    return (
      <footer className="footer">
        <div className="left" style={{ verticalAlign: 'middle' }}>
          <VerticalAlignMiddleA style={(locale === 'fr' ? selected : {})} onClick={() => this.props.changeLanguage('fr')} href="#lang">FR</VerticalAlignMiddleA>
          <VerticalAlignMiddleA style={(locale === 'en' ? selected : {})} onClick={() => this.props.changeLanguage('en')} href="#lang">EN</VerticalAlignMiddleA>
        </div>
        <div className="right">
          <VerticalAlignMiddleSpan><FormattedMessage {...messages.lightspeedturtle} /></VerticalAlignMiddleSpan>&nbsp;
          <VerticalAlignMiddleA className="underline" target="_blank" href="https://www.facebook.com/lightspeedturtle">Lightspeed Turtle</VerticalAlignMiddleA>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  currentLocale: PropTypes.string.isRequired,
};

export default Footer;
