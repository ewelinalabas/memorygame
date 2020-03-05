const initialState = {
  pastScores: [],
  numberOfCardsFilter: 'All'
}

const setPastScores = (state, data) => {
  return { ...state, pastScores: data }
}

export const scoreboard = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PAST_SCORES':
      return setPastScores(state, action.payload);
    case 'SET_NUMBER_OF_CARDS':
      return { ...state, numberOfCardsFilter: action.payload };
    default:
      return state;
  }
}
