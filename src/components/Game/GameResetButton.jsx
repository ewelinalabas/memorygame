import React from 'react';
import { Container } from 'react-bootstrap';
import { IMAGES } from '../../constants';

export const ResetButton = ({ action, text }) => {
  return (
    <Container className="resetButton">
      <button type="submit" onClick={action}>
        <img src={IMAGES["reset"]}></img>
        {text}
      </button>
    </Container>
  )
}
