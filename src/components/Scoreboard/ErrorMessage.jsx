import React from 'react';
import { Container } from 'react-bootstrap';
import { IMAGES } from '../../constants';

export const ErrorMessage = () => {
  return(
    <Container className="errorBoard">
      <img src={IMAGES["error"]}></img>
      <p className="error">Something went wrong.</p>
      <p className="error">Try again later.</p>
    </Container>
  )
}
