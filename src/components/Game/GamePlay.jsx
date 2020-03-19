import React, { useState} from 'react';
import { connect } from 'react-redux';
import { Timer } from './Timer';
import { Board } from './Board';
import { ResetButton } from './GameResetButton';
import { GameResetModal } from './GameResetModal';
import { pauseGame, resetGame } from '../../actions/game';

const GamePlayPure = ({ pauseGame, resetGame }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const pause = () => {
    pauseGame(true)
    setIsOpen(true)
  };

  const unpause = () => {
    pauseGame(false)
    setIsOpen(false)
  };

  return (
    <div className="game-body">
      <Timer /> 
      <Board />
      <ResetButton action={pause} text="Reset"/>
      <GameResetModal 
        isOpen={modalIsOpen}
        resetGame={resetGame}
        closeModal={unpause}
      />
    </div>
  );
};

export const GamePlay = connect(
  state => ({}),
  {
    pauseGame,
    resetGame
  }
)(GamePlayPure);
