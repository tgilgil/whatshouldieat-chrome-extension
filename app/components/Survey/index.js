/**
*
* Survey
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dialog from 'material-ui/Dialog';

import { GoogleAnalytics } from 'utils/tracking';

import SurveyButton from 'components/Buttons/SurveyButton';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import messages from './messages';

const VerticalAlignMiddleSpan = styled.span`
  vertical-align: middle;
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  min-height: 500px;
  padding-top: -8em;
`;

const PositiveFrenchSurveyUrl = 'https://aligilgil1gmailcom.typeform.com/to/n4JF4C';
const PositiveEnglishSurveyUrl = 'https://aligilgil1gmailcom.typeform.com/to/OXfBfA';

const NegativeFrenchSurveyUrl = 'https://aligilgil1gmailcom.typeform.com/to/j2vyIL';
const NegativeEnglishSurveyUrl = 'https://aligilgil1gmailcom.typeform.com/to/oGmTlb';

class Survey extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const ga = new GoogleAnalytics();

    const localizedNegativeSurveyUrl = this.props.locale === 'fr' ? NegativeFrenchSurveyUrl : NegativeEnglishSurveyUrl;
    const localizedPositiveSurveyUrl = this.props.locale === 'fr' ? PositiveFrenchSurveyUrl : PositiveEnglishSurveyUrl;

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
          <SurveyButton onClick={() => this.props.goToStep(5)}><FormattedMessage {...messages.PositiveResponse2} /></SurveyButton>
        </div>);
      }

      case 3: {
        // Negative response
        return (<div>
          <VerticalAlignMiddleSpan><FormattedMessage {...messages.CallToActionNegative} /></VerticalAlignMiddleSpan>
          <SurveyButton onClick={() => this.props.cancelSurvey()}><FormattedMessage {...messages.NegativeResponse2} /></SurveyButton>
          <SurveyButton onClick={() => this.props.goToStep(4)}><FormattedMessage {...messages.PositiveResponse2} /></SurveyButton>
        </div>);
      }

      // Trigger modal with embeded NEGATIVE Typeform survey
      case 4: {
        return (<div>
          <Dialog
            actions={<SurveyButton onClick={() => this.props.goToStep(6)}><FormattedMessage {...messages.Close} /></SurveyButton>}
            modal
            open
            bodyStyle={{ minHeight: '500px' }}
            contentStyle={{ minHeight: '500px' }}
          >
            <StyledIframe title="survey" src={localizedNegativeSurveyUrl}></StyledIframe>
          </Dialog>
        </div>);
      }

      // Trigger modal with embeded POSITIVE Typeform survey
      case 5: {
        return (<div>
          <Dialog
            actions={<SurveyButton onClick={() => this.props.goToStep(6)}><FormattedMessage {...messages.Close} /></SurveyButton>}
            modal
            open
            bodyStyle={{ minHeight: '500px' }}
            contentStyle={{ minHeight: '500px' }}
          >
            <StyledIframe title="survey" src={localizedPositiveSurveyUrl}></StyledIframe>
          </Dialog>
        </div>);
      }

      // Thank the user :)
      case 6: {
        ga.track('/surveycompleted');
        localStorage.setItem('surveyShown_1', true);
        return (<div>
          <VerticalAlignMiddleSpan><FormattedMessage {...messages.ThankYou} /></VerticalAlignMiddleSpan>
        </div>);
      }

      default:
        return null;
    }
  }
}

Survey.propTypes = {
  step: PropTypes.number.isRequired,
  goToStep: PropTypes.func.isRequired,
  cancelSurvey: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

export default Survey;
