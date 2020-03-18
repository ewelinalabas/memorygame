import React, { useState} from 'react';
import { connect } from 'react-redux';
import { Timer } from './Timer';
import { Board } from './Board';
import { ResetButton } from './GameResetButton';
import { GameResetModal } from './GameResetModal';
import { resetGame } from '../../actions/game';

const GamePlayPure = ({ resetGame }) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal =() => setIsOpen(false)

  return (
    <div className="gameBody">
      <Timer /> 
      <Board />
      <ResetButton action={openModal} text='Reset'/>
      <GameResetModal 
        isOpen={modalIsOpen}
        resetGame={resetGame}
        closeModal={closeModal}
      />
    </div>
  )
}

export const GamePlay = connect(
  state => ({}),
  {
    resetGame
  }
)(GamePlayPure)
