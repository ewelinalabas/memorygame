import axios from 'axios';

const BUILD_BOARD = 'BUILD_BOARD'
const FACE_CARD_UP = 'FACE_CARD_UP'
const FACE_CARDS_DOWN = 'FACE_CARDS_DOWN'
const MARK_MATCHING_CARDS = 'MARK_MATCHING_CARDS'
const RESET_GAME = 'RESET_GAME'
const UPDATE_DURATION = 'UPDATE_DURATION'
const SET_PAST_SCORES = 'SET_PAST_SCORES'

export const buildBoard = (value) => ({
  type: BUILD_BOARD,
  payload: value
});

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

const validateMatch = (cards) => {
  if(cards[0].value === cards[1].value) {
    return cards[0].value
  }
}

export const makeMove = (id) => {
  return(dispatch, getState) => {
    dispatch(faceCardUp(id))

    const { gameBoard } = getState()
    const cardsFacedUp = gameBoard.filter(card => card.visible)

    if(cardsFacedUp.length === 2) {
      const matchValue = validateMatch(cardsFacedUp)
      matchValue ? 
      setTimeout(() => {
        dispatch(markMatchingCards(matchValue))
        dispatch(faceCardsDown())
      }, 2000) : 
      setTimeout(() => dispatch(faceCardsDown()), 2000)
    }
  }
}

export const resetGame = () => ({
  type: RESET_GAME
})

export const updateDuration = () => ({
  type: UPDATE_DURATION
})

export const fetchPastScores = () => {
  return(dispatch) => {
  axios.get('http://salty-headland-84520.herokuapp.com/scores')
  .then(response => dispatch(setPastScores(response.data)))
  }
}

export const setPastScores = (data) => ({
  type: SET_PAST_SCORES,
  payload: data
})
