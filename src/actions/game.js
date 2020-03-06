import { saveScore } from '../APIcalls';
import { validateMatch, validateGameEnd } from '../validators';

const BUILD_BOARD = 'BUILD_BOARD'
const FACE_CARD_UP = 'FACE_CARD_UP'
const FACE_CARDS_DOWN = 'FACE_CARDS_DOWN'
const MARK_MATCHING_CARDS = 'MARK_MATCHING_CARDS'
const END_GAME = 'END_GAME'
const RESET_GAME = 'RESET_GAME'
const UPDATE_DURATION = 'UPDATE_DURATION'

export const buildBoard = (value) => ({
  type: BUILD_BOARD,
  payload: value
});

export const makeMove = (id) => {
  return(dispatch, getState) => {
    dispatch(faceCardUp(id))
    
    const { gameBoard } = getState().game
    const cardsFacedUp = gameBoard.filter(card => card.visible)

    if(cardsFacedUp.length === 2) {
      const matchValue = validateMatch(cardsFacedUp)
      matchValue ? 
      setTimeout(() => {
        dispatch(markCardsAndCheckGameEnd(matchValue))
        dispatch(faceCardsDown())
      }, 1000) : 
      setTimeout(() => dispatch(faceCardsDown()), 1000)
    }
  }
};

const markCardsAndCheckGameEnd = (value) => {
  return(dispatch, getState) => {
    dispatch(markMatchingCards(value))

    const { gameBoard, duration } = getState().game
    if(validateGameEnd(gameBoard)) {
      saveScore(duration, gameBoard.length)
      dispatch(endGame())
    }
  }
};

export const faceCardUp = (id) => ({
  type: FACE_CARD_UP,
  payload: id
});

export const faceCardsDown = () => ({
  type: FACE_CARDS_DOWN
});

export const markMatchingCards = (value) => ({
  type: MARK_MATCHING_CARDS,
  payload: value
});

export const endGame = () => ({
  type: END_GAME
});

export const resetGame = () => ({
  type: RESET_GAME
})

export const updateDuration = () => ({
  type: UPDATE_DURATION
});
