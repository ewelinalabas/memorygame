import { shuffle } from '../utils';
import { ICONS } from '../constants';

export const GAME_SETUP = 'gameSetup'
export const PLAY = 'play'
export const GAME_END = 'gameEnd'

const initialState = {
  phase: GAME_SETUP,
  pastScores: []
}

const buildBoard = (state, numberOfElements) => {
  const board = []
  for(let i = 0; i < numberOfElements / 2; i++) {
    const card = {
      value: ICONS[i], 
      visible: false, 
      matched: false
    }
    const matchingCard = { ...card }
    board.push(card, matchingCard)
  }
  shuffle(board)

  return { ...state, phase: PLAY, duration: 0, gameBoard: board }
}

const faceCardUp = (state, cardId) => {
  const newGameBoard = [ ...state.gameBoard ]
  const chosenCard = newGameBoard[cardId]
  if(!chosenCard.matched) {chosenCard.visible = true}
  return { ...state, gameBoard: newGameBoard }
}

const faceCardsDown = (state) => {
  const newGameBoard = state.gameBoard.map(card => ({
    ...card,
    visible: false
  }))
  return { ...state, gameBoard: newGameBoard }
}

const markMatchingCards = (state, matchValue) => {
  const newGameBoard = state.gameBoard.map(card => (
    card.value === matchValue ? 
    { ...card, matched: true } :
    card
  ))
  return { ...state, gameBoard: newGameBoard }
}

export const game = (state = initialState, action) => {
  switch(action.type) {
    case 'BUILD_BOARD':
      return buildBoard(state, action.payload);
    case 'FACE_CARD_UP':
      return faceCardUp(state, action.payload);
    case 'FACE_CARDS_DOWN':
      return faceCardsDown(state);
    case 'MARK_MATCHING_CARDS':
      return markMatchingCards(state, action.payload);
    case 'END_GAME':
      return { ...state, phase: GAME_END };
    case 'RESET_GAME':
      return initialState;
    case 'UPDATE_DURATION':
      return { ...state, duration: state.duration + 1 };
    default:
      return state;
  } 
}
