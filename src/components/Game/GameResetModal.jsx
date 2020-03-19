import React from 'react';
import { Modal, Button} from 'react-bootstrap';

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
        <Button variant="light" onClick={resetGame}>Yes</Button>
        <Button variant="dark" onClick={closeModal}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
}
