import React, { useState} from 'react';
import { connect } from 'react-redux';
import { Timer } from './Timer';
import { Board } from './Board';
import { ResetButton } from './GameResetButton';
import { GameResetModal } from './GameResetModal';
import { pauseGame, resetGame } from '../../actions/game';

const GamePlayPure = ({ pauseGame, resetGame }) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  // const openModal = () => setIsOpen(true)
  // const closeModal =() => setIsOpen(false)

  const pause = () => {
    console.log('pause')
    pauseGame(true)
    setIsOpen(true)
  }

  const unpause = () => {
    console.log('unpause')
    pauseGame(false)
    setIsOpen(false)
  }

  return (
    <div className="gameBody">
      <Timer /> 
      <Board />
      <ResetButton action={pause} text='Reset'/>
      <GameResetModal 
        isOpen={modalIsOpen}
        resetGame={resetGame}
        closeModal={unpause}
      />
    </div>
  )
}

export const GamePlay = connect(
  state => ({}),
  {
    pauseGame,
    resetGame
  }
)(GamePlayPure)
