import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { GameBody } from './components/GameBody';

export const App = () => {
  return (
    <div>
      <Navigation />
      <GameBody />
    </div>
  )
}

