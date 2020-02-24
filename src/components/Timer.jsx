import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { formatDuration } from '../utils';
import { updateDuration } from '../actions';

const TimerPure = ({ duration, updateDuration}) => {
  // const [duration, setDuration] = useState(0)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDuration(duration + 1);
  //   }, 1000);
  // }, [duration]);

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
  dispatch => ({
    updateDuration: () => dispatch(updateDuration())
  })
)(TimerPure)
