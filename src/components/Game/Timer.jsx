import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formatDuration } from '../../utils';
import { updateDuration } from '../../actions/game';

const TimerPure = ({ duration, updateDuration}) => {
  useEffect(() => {
    setTimeout(() => {
      updateDuration();
    }, 1000);
  }, [duration, updateDuration]);

  return (
    <div>
      <p>You are playing:</p>
      <p>{formatDuration(duration)}</p>
    </div>
  )
}

export const Timer = connect(
  state => ({
    duration: state.game.duration
  }),
  {
   updateDuration
  }
)(TimerPure)
