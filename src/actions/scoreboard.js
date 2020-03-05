import { getScores } from '../APIcalls';

const SET_PAST_SCORES = 'SET_PAST_SCORES'
const SET_NUMBER_OF_CARDS = 'SET_NUMER_OF_CARDS'

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
