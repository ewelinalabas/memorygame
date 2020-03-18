import React from 'react';
import { Modal } from 'react-bootstrap';

export const GameResetModal = ({ isOpen, resetGame, closeModal }) => {
  return (
    <Modal
      show={isOpen}
      onHide={closeModal}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Reset game</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Do you want to start a new game?</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={resetGame}>Yes</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal.Footer>
    </Modal>
  )
}
