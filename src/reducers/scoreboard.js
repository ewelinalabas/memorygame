const initialState = {
  pastScores: []
}

const setPastScores = (state, data) => {
  return { ...state, pastScores: data }
}

export const scoreboard = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PAST_SCORES':
      return setPastScores(state, action.payload);
    default:
      return state;
  }
}
