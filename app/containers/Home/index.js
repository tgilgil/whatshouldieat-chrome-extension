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
import queryString from 'query-string';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import Shareable from 'components/Shareable';
import Recipe from 'components/Recipe';
import Footer from 'components/Footer';
import { loadEntry } from './actions';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import './index.css';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { loadContent } = this.props;

    isItContentPreview(this.props.location.search, loadContent);
    loadContent();
  }

  render() {
    const { home, changeLanguage } = this.props;

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Grid className="App">
          <div className="page-wrap">
            <Row className="content-row">
              <Col lg={6} lgOffset={6}>
                { defineType(home.entry) }
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
  loadContent: PropTypes.func.isRequired,
  location: PropTypes.any,
};

const isItContentPreview = (locationSearch, action) => {
  const qs = queryString.parse(locationSearch);
  if (Object.keys(qs).length !== 0 && qs.constructor !== Object) {
    action(qs.entry);
  }
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
    loadContent: () => dispatch(loadEntry()),
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
