const BUILD_BOARD = 'BUILD_BOARD'
const FACE_CARD_UP = 'FACE_CARD_UP'
const FACE_CARDS_DOWN = 'FACE_CARDS_DOWN'
const MARK_MATCHING_CARDS = 'MARK_MATCHING_CARDS'

export const buildBoard = (value) => ({
  type: BUILD_BOARD,
  value
});

export const faceCardUp = (id) => ({
  type: FACE_CARD_UP,
  id
});

export const faceCardsDown = () => ({
  type: FACE_CARDS_DOWN
});

export const markMatchingCards = (value) => ({
  type: MARK_MATCHING_CARDS,
  value
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
    const cardsFacedUp = gameBoard.filter(el => el.visible === true)
    if(cardsFacedUp.length === 2) {
      const matchValue = validateMatch(cardsFacedUp)
      matchValue ? 
      setTimeout(() => dispatch(markMatchingCards(matchValue)), 3000) : 
      setTimeout(() => dispatch(faceCardsDown()), 3000)
    }
  }
}
