import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { GameForm } from './components/GameForm';

const AppPure = (props) => {
  if(props.phase === 'gameSetup') {
    return ( <GameForm /> );
  } else {
    return (
      <p>Hello</p>
    )
  }
}

export const App = connect(
  state => ({
    phase: state.phase
  }),
  dispatch => ({})
)(AppPure);
