/**
*
* RefreshAction
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RefreshIndicator from 'material-ui/RefreshIndicator';

const RefreshIndicatorContainer = styled.div`
`;

const style = {
  container: {
    // position: 'relative',
  },
  refresh: {
    margin: '0 auto',
    marginLeft: '50%',
    verticalAlignment: 'initial',
    boxShadow: 'none',
  },
};

class RefreshAction extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const toRender = this.props.activate
      ? (
        <RefreshIndicatorContainer id="RefreshButton" onClick={() => this.props.start()} style={style.container}>
          <RefreshIndicator
            percentage={100}
            size={80}
            left={-40}
            top={-40}
            status={this.props.loading ? 'loading' : 'ready'}
            style={style.refresh}
            className={this.props.onHoverStyle}
            onMouseEnter={this.props.onHoverIn}
            onMouseLeave={this.props.onHoverOut}
          />
        </RefreshIndicatorContainer>
      )
      : null;

    return toRender;
  }
}

RefreshAction.propTypes = {
  activate: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  onHoverIn: PropTypes.func.isRequired,
  onHoverOut: PropTypes.func.isRequired,
  onHoverStyle: PropTypes.string.isRequired,
};

export default RefreshAction;
