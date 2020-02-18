import { shuffle } from './utils';

const initialState = {
  phase: 'gameSetup'
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

  return { ...state, phase: 'play', gameBoard: board }
}

const validateIfNotMatched = (card) => {
  return card.matched ? false : true
}

const validateMatch = (cards) => {
  if(cards[0].value === cards[1].value) {
    return true
  } else {
    return false
  }
}

const markMatch = (board, id) => {
  const matchValue = board[id].value
  for(let i = 0; i < board.length; i++) {
    if(board[i].value === matchValue) {
      board[i].visible = false
      board[i].matched = true
    }
  }
  return board
}

const faceDownCards = (board) => {
  for(let i = 0; i < board.length; i++) {
    board[i].visible = false
  }
  return board
}

const makeMove = (state, cardId) => {
  const newGameBoard = [ ...state.gameBoard ]
  const chosenCard = newGameBoard[cardId]
  validateIfNotMatched(chosenCard) && (chosenCard.visible = true)
  const cardsFacedUp = newGameBoard.filter(el => el.visible === true)
  if(cardsFacedUp.length <= 1) {
    return { ...state, gameBoard: newGameBoard }
  } else {
    const isMatch = validateMatch(cardsFacedUp)
    const updatedGameBoard = isMatch ? 
      markMatch(newGameBoard, cardId) : 
      faceDownCards(newGameBoard)
    return { ...state, gameBoard: updatedGameBoard }
  }
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BUILD_BOARD':
      return buildBoard(state, action.value);
    case 'MAKE_MOVE':
      return makeMove(state, action.id)
    default:
      return state
  } 
}
