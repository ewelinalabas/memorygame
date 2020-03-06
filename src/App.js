import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { GameBody } from './components/Game/GameBody';

export const App = () => {
  return (
    <div>
      <Navigation />
      <GameBody />
    </div>
  )
}

