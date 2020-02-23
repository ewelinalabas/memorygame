const BUILD_BOARD = 'BUILD_BOARD'
const FACE_CARD_UP = 'FACE_CARD_UP'
const FACE_CARDS_DOWN = 'FACE_CARDS_DOWN'
const MARK_MATCHING_CARDS = 'MARK_MATCHING_CARDS'
const RESET_GAME = 'RESET_GAME'

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
