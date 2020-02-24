import React, { useState, useEffect } from 'react';
import { formatDuration } from '../utils';

export const Timer = () => {
  const [duration, setDuration] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setDuration(duration + 1);
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

