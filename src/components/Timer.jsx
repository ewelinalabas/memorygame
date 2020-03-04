import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formatDuration } from '../utils';
import { updateDuration } from '../actions';

const TimerPure = ({ duration, updateDuration}) => {
  useEffect(() => {
    setTimeout(() => {
      updateDuration();
    }, 1000);
  }, [duration]);

  const formattedDuration = formatDuration(duration)

  return (
    <div>
      <p>You are playing:</p>
      <p>{formattedDuration}</p>
    </div>
  )
}

export const Timer = connect(
  state => ({
    duration: state.duration
  }),
  {
   updateDuration
  }
)(TimerPure)
