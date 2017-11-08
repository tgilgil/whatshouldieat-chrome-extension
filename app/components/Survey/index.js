/**
*
* Survey
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SurveyButton from 'components/Buttons/SurveyButton';

import { injectIntl, FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import messages from './messages';

const VerticalAlignMiddleSpan = styled.span`
vertical-align: middle;
`;

const FrenchSurveyUrl = 'https://travis139.typeform.com/to/YnUnZ9';
const EnglishSurveyUrl = 'https://travis139.typeform.com/to/YnUnZ9';

class Survey extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const localizedSurveyUrl = this.props.locale === 'fr' ? FrenchSurveyUrl : EnglishSurveyUrl;

    switch (this.props.step) {
      case 1: {
        // Ask general question
        return (<div>
          <VerticalAlignMiddleSpan><FormattedMessage {...messages.EnjoyingYourExperience} /></VerticalAlignMiddleSpan>
          <SurveyButton onClick={() => this.props.goToStep(3)}><FormattedMessage {...messages.NegativeResponse1} /></SurveyButton>
          <SurveyButton onClick={() => this.props.goToStep(2)}><FormattedMessage {...messages.PositiveResponse1} /></SurveyButton>
        </div>);
      }

      case 2: {
        // Positive response
        return (<div>
          <VerticalAlignMiddleSpan><FormattedHTMLMessage {...messages.CallToActionPositive} /></VerticalAlignMiddleSpan>
          <SurveyButton onClick={() => this.props.cancelSurvey()}><FormattedMessage {...messages.NegativeResponse2} /></SurveyButton>
          <SurveyButton onClick={() => triggerTypeform(true, this.props.cancelSurvey)} href={localizedSurveyUrl} data-mode="popup" target="_blank"><FormattedMessage {...messages.PositiveResponse2} /></SurveyButton>
        </div>);
      }

      case 3: {
        // Negative response
        return (<div>
          <VerticalAlignMiddleSpan><FormattedMessage {...messages.CallToActionNegative} /></VerticalAlignMiddleSpan>
          <SurveyButton onClick={() => this.props.cancelSurvey()}><FormattedMessage {...messages.NegativeResponse2} /></SurveyButton>
          <SurveyButton onClick={() => triggerTypeform(false, this.props.cancelSurvey)} href={localizedSurveyUrl} data-mode="popup" target="_blank"><FormattedMessage {...messages.PositiveResponse2} /></SurveyButton>
        </div>);
      }

      default:
        return null;
    }
  }
}

function triggerTypeform(respondedPositively, cancelSurvey) {
  cancelSurvey();

  // TODO : Trigger embeded survey from Typeform;

  console.log(`Typeform triggered - respondedPositively: ${respondedPositively}`);
}

Survey.propTypes = {
  step: PropTypes.number.isRequired,
  goToStep: PropTypes.func.isRequired,
  cancelSurvey: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

export default Survey;
