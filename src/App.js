import React from 'react';
import { connect } from 'react-redux'
import './App.css';

const AppPure = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default connect(
  () => {}
)(AppPure);
