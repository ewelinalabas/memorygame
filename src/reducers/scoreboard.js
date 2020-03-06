const initialState = {
  pastScores: [],
  numberOfCardsFilter: 'All'
}

export const scoreboard = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PAST_SCORES':
      return { ...state, pastScores: action.payload };
    case 'SET_NUMBER_OF_CARDS':
      return { ...state, numberOfCardsFilter: action.payload };
    default:
      return state;
  }
}
