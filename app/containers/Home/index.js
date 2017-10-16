/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid, Row, Col } from 'react-bootstrap';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import Shareable from 'components/Shareable';
import Recipe from 'components/Recipe';
import Footer from 'components/Footer';
import LoadingBar, { hideLoading } from 'react-redux-loading-bar';
import { loadEntries } from './actions';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { home, loadContent } = this.props;

    if (home.entries === null) {
      loadContent();
    }
  }

  render() {
    const { home, locale, changeLanguage, hideLoadingBar } = this.props;

    let randomEntry = null;

    if (home.entries != null && home.entries.length > 0) {
      const localizedEntries = home.entries.filter((entry) => entry.fields.language === locale.charAt(0).toUpperCase() + locale.slice(1));
      randomEntry = localizedEntries[Math.floor(Math.random() * localizedEntries.length)];

      // hideLoadingBar();
    }

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <LoadingBar />
        <Grid className="App">
          <div className="page-wrap">
            <Row className="content-row">
              <Col lg={6} lgOffset={6}>
                { defineType(randomEntry) }
              </Col>
            </Row>
            <Footer changeLanguage={changeLanguage} />
          </div>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  home: PropTypes.any,
  locale: PropTypes.any,
  loadContent: PropTypes.func.isRequired,
};

const defineType = (randomEntry) => {
  if (randomEntry) {
    switch (randomEntry.sys.contentType.sys.id) {
      case 'recipe':
        return <Recipe recipe={randomEntry} />;
      case 'shareable':
        return <Shareable shareable={randomEntry} />;
      default:
        throw new Error('Unrecognized content type.');
    }
  }

  return null;
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  locale: makeSelectLocale(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: (locale) => dispatch(changeLocale(locale)),
    loadContent: () => dispatch(loadEntries()),
    hideLoadingBar: () => dispatch(hideLoading()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
