import React from 'react';
import './styles/App.css';
import { GameBody } from './components/Game/GameBody';

export const App = () => {
  return ( 
    <div className="game-body">
      <GameBody /> 
    </div>
  );
};

