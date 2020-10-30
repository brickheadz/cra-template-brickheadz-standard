import React from 'react';
import { connect } from 'react-redux';

import Styles from './LayoutBase.module.scss';

const LayoutBase = (props) => {
  const { children } = props;
  return <main className={Styles.Content}>{children}</main>;
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  };
};

export default connect(mapStateToProps)(LayoutBase);
