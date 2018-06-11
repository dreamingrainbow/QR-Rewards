import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      if (!this.props.authentication.authenticated) {
        this.props.history.push('/Sign-In');
      }
    }

    render() {
      return (this.props.authentication.authenticated ? (
            <ComposedComponent {...this.props} />
          ) : null);
    }
  }

  const mapStateToProps = state => {
    return state;
  };

  return connect(mapStateToProps)(RequireAuthentication);
};