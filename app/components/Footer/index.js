/**
*
* Footer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Survey from 'components/Survey';
import messages from './messages';

const selected = {
  fontWeight: 'bold',
  pointerEvents: 'none',
  cursor: 'default',
  color: 'black',
};

const unselected = {
  color: 'gray',
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
          <VerticalAlignMiddleA style={(locale === 'fr' ? selected : unselected)} onClick={() => this.props.changeLanguage('fr')} href="#lang">FR</VerticalAlignMiddleA>
          <VerticalAlignMiddleA style={(locale === 'en' ? selected : unselected)} onClick={() => this.props.changeLanguage('en')} href="#lang">EN</VerticalAlignMiddleA>
        </div>
        <div className="right">
          {
            this.props.showSurvey
            ? <Survey locale={locale} step={this.props.surveyStep} goToStep={this.props.goToStep} cancelSurvey={this.props.cancelSurvey} />
            : <span>
              <VerticalAlignMiddleSpan><FormattedMessage {...messages.lightspeedturtle} /></VerticalAlignMiddleSpan>&nbsp;
              <VerticalAlignMiddleA className="underline" target="_blank" href="https://www.facebook.com/lightspeedturtle">Lightspeed Turtle</VerticalAlignMiddleA>
            </span>
          }
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  currentLocale: PropTypes.string.isRequired,
  showSurvey: PropTypes.bool,
  surveyStep: PropTypes.number,
  goToStep: PropTypes.func,
  cancelSurvey: PropTypes.func,
};

export default Footer;
