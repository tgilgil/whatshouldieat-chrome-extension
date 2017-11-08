/**
*
* Survey
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dialog from 'material-ui/Dialog';

import SurveyButton from 'components/Buttons/SurveyButton';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import messages from './messages';

const VerticalAlignMiddleSpan = styled.span`
  vertical-align: middle;
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  min-height: 400px;
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
          <SurveyButton onClick={() => this.props.goToStep(4)}><FormattedMessage {...messages.PositiveResponse2} /></SurveyButton>
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

      // Trigger modal with embeded Typeform survey
      case 4: {
        return (<div>
          <Dialog
            actions={<SurveyButton onClick={() => this.props.goToStep(5)}><FormattedMessage {...messages.Close} /></SurveyButton>}
            modal
            open
            bodyStyle={{ minHeight: '400px' }}
            contentStyle={{ minHeight: '400px' }}
          >
            <StyledIframe title="survey" src={localizedSurveyUrl}></StyledIframe>
          </Dialog>
        </div>);
      }

      // Thank the user :)
      case 5: {
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
