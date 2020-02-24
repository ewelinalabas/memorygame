import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'; 

export const Timer = () => {
  const [duration, setDuration] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setDuration(duration + 1);
    }, 1000);
  }, [duration]);
  const durationToDisplay = moment.duration(duration, 'seconds').toString()

  return (
    <div>
      <p>You are playing:</p>
      <p>{durationToDisplay}</p>
    </div>
  )
}

