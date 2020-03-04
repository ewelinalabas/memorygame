export const validateMatch = (cards) => {
  if(cards[0].value === cards[1].value) {
    return cards[0].value
  }
};

export const validateGameEnd = (board) => {
  return board.filter(card => !card.matched).length === 0
};
