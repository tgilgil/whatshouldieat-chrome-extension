/*
 * Survey Messages
 *
 * This contains all the text for the Survey component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  EnjoyingYourExperience: {
    id: 'app.components.Survey.EnjoyingYourExperience',
    defaultMessage: 'Enjoying your experience?',
  },
  CallToActionPositive: {
    id: 'app.components.Survey.CallToActionPositive',
    defaultMessage: 'How about completing a <strong>2 minutes</strong> survey?',
  },
  CallToActionNegative: {
    id: 'app.components.Survey.CallToActionNegative',
    defaultMessage: 'Would you mind giving us some feedback?',
  },
  PositiveResponse1: {
    id: 'app.components.Survey.PositiveResponse1',
    defaultMessage: 'Yes!',
  },
  PositiveResponse2: {
    id: 'app.components.Survey.PositiveResponse2',
    defaultMessage: 'Sure!',
  },
  NegativeResponse1: {
    id: 'app.components.Survey.NegativeResponse1',
    defaultMessage: 'Not Really',
  },
  NegativeResponse2: {
    id: 'app.components.Survey.NegativeResponse2',
    defaultMessage: 'No Thanks',
  },
});
