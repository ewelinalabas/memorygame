import { getScores } from '../APIcalls';

const SET_PAST_SCORES = 'SET_PAST_SCORES'
const SET_NUMBER_OF_CARDS = 'SET_NUMBER_OF_CARDS'
const CHANGE_SCORES_ORDER = 'CHANGE_SCORES_ORDER'
const CHANGE_DISPLAYED_SCORES = 'CHANGE_DISPLAYED_SCORES'

export const fetchPastScores = () => {
  return(dispatch) => {
    getScores().then(response => dispatch(setPastScores(response.data)))
  }
};

export const setPastScores = (data) => ({
  type: SET_PAST_SCORES,
  payload: data
});

export const setNumberOfCardsFilter = (value) => ({
  type: SET_NUMBER_OF_CARDS,
  payload: value
})

export const changeScoresOrder = (value) => ({
  type: CHANGE_SCORES_ORDER,
  payload: value
})

export const changeChunkOfScores = (value) => ({
  type: CHANGE_DISPLAYED_SCORES,
  payload: value
})
