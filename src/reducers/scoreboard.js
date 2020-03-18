import { SCORES_ORDER_OPTIONS } from '../constants';

const initialState = {
  loading: false,
  pastScores: [],
  error: null,
  numberOfCardsFilter: 'All',
  scoresOrder: SCORES_ORDER_OPTIONS.NEWEST_TO_OLDEST,
  selectedChunkOfScores: 0
}

export const scoreboard = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PAST_SCORES':
      return { ...state, pastScores: action.payload };
    case 'FETCH_PAST_SCORES_BEGIN':
      return { ...state, loading: true };
    case 'FETCH_PAST_SCORES_SUCCESS':
      return { ...state, loading: false, pastScores: action.payload };
    case 'FETCH_PAST_SCORES_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'SET_NUMBER_OF_CARDS':
      return { ...state, numberOfCardsFilter: action.payload };
    case 'CHANGE_SCORES_ORDER':
      return { ...state, scoresOrder: action.payload };
    case 'CHANGE_DISPLAYED_SCORES':
      return { ...state, selectedChunkOfScores: action.payload };
    default:
      return state;
  }
}
