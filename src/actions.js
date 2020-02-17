const BUILD_BOARD = 'BUILD_BOARD'
const MAKE_MOVE ='MAKE_MOVE'

export const buildBoard = (value) => ({
  type: BUILD_BOARD,
  value
});

export const makeMove = (id) => ({
  type: MAKE_MOVE,
  id
})

