import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'; 

const TimerPure = () => {
  const [duration, setDuration] = useState(0)
  useEffect(() => {
    const duration = setInterval(() => {
      setDuration(duration + 1);
    }, 1000);
    return () => clearInterval(duration);
  }, [duration]);

  return (
    <div>
      <p>You are playing:</p>
      <p>{duration}</p>
    </div>
  )
}

export const Timer = connect(
  state => ({
  }),
  dispatch => ({})
)(TimerPure)
