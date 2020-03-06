import { scoresOrderOptions } from '../constants';

const initialState = {
  pastScores: [],
  numberOfCardsFilter: 'All',
  scoresOrder: scoresOrderOptions.OLDEST_TO_NEWEST
}

export const scoreboard = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PAST_SCORES':
      return { ...state, pastScores: action.payload };
    case 'SET_NUMBER_OF_CARDS':
      return { ...state, numberOfCardsFilter: action.payload };
    case 'CHANGE_SCORES_ORDER':
      return { ...state, scoresOrder: action.payload };
    default:
      return state;
  }
}
