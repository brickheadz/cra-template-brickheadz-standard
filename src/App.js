import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { refreshToken } from './store/actions/authenticaton';
import { LayoutBase } from './containers';

const App = (props) => {
  // Handle refresh token (if any)
  const { refreshLogin, isLogged } = props;
  refreshLogin();

  let routes = (
    <Switch>
      <Route path="/auth">
        <div>
          <h2>/auth</h2>
        </div>
      </Route>
      <Route path="/">
        <div>
          <h2>/</h2>
        </div>
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  if (isLogged) {
    routes = (
      <Switch>
        <Route path="/my-orders">
          <div>
            <h2>/my-orders</h2>
          </div>
        </Route>
        <Route path="/checkout">
          <div>
            <h2>/checkout</h2>
          </div>
        </Route>
        <Route path="/logout">
          <div>
            <h2>/logout</h2>
          </div>
        </Route>
        <Route path="/">
          <div>
            <h2>/</h2>
          </div>
        </Route>
      </Switch>
    );
  }

  return (
    <div>
      <LayoutBase>{routes}</LayoutBase>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isLogged: state.auth.isLogged };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refreshLogin: () => dispatch(refreshToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
