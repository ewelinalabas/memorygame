import { shuffle } from './utils';

export const GAME_SETUP = 'gameSetup'
export const PLAY = 'play'
export const GAME_END = 'gameEnd'

const initialState = {
  phase: GAME_SETUP
}

const buildBoard = (state, numberOfElements) => {
  const availableValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  const board = []
  for(let i = 0; i < numberOfElements / 2; i++) {
    const card = {
      value: availableValues[i], 
      visible: false, 
      matched: false
    }
    const matchingCard = { ...card }
    board.push(card, matchingCard)
  }
  shuffle(board)

  return { ...state, phase: PLAY, gameBoard: board }
}

const markMatchedCards = (state, matchValue) => {
  const newGameBoard = state.gameBoard.map(card => {
    if(card.value === matchValue) {
      card.matched = true
      return card
    } else {
      return card
    }
  })
  if(validateGameEnd(newGameBoard)) {
    return { ...state, phase: GAME_END, gameBoard: newGameBoard }
  } else {
    return { ...state, gameBoard: newGameBoard }
  }
}

const validateGameEnd = (board) => {
  return board.filter(card => !card.matched).length === 0 ? true : false
}

const faceCardsDown = (state) => {
  const newGameBoard = state.gameBoard.map(card => {
    card.visible = false
    return card
  })
    return { ...state, gameBoard: newGameBoard }
}

const faceCardUp = (state, cardId) => {
  const newGameBoard = [ ...state.gameBoard ]
  const chosenCard = newGameBoard[cardId]
  if(chosenCard.matched === false) {chosenCard.visible = true}
  return { ...state, gameBoard: newGameBoard }
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BUILD_BOARD':
      return buildBoard(state, action.payload);
    case 'FACE_CARD_UP':
      return faceCardUp(state, action.payload);
    case 'FACE_CARDS_DOWN':
      return faceCardsDown(state);
    case 'MARK_MATCHING_CARDS':
      return markMatchedCards(state, action.payload);
    case 'END_GAME':
      return { ...state, phase: GAME_END };
    case 'RESET_GAME':
      return initialState
    default:
      return state
  } 
}
