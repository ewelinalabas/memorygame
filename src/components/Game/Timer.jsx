import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formatDuration } from '../../utils';
import { updateDuration } from '../../actions/game';
import { Container } from 'react-bootstrap';
import { IMAGES } from '../../constants';

const TimerPure = ({ duration, paused, updateDuration}) => {
  useEffect(() => {
    !paused && setTimeout(() => {
      updateDuration();
    }, 1000);
  }, [paused, duration, updateDuration]);

  return (
    <Container className="timer">
      {/* <p className="timer-text">Timer:</p> */}
      <img src={IMAGES["clock"]}></img>
      <p className="timer-text">{formatDuration(duration)}</p>
    </Container>
  )
}

export const Timer = connect(
  state => ({
    duration: state.game.duration,
    paused: state.game.paused
  }),
  {
   updateDuration
  }
)(TimerPure)
