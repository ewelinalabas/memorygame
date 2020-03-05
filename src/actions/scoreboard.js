import { getScores } from '../APIcalls';

const SET_PAST_SCORES = 'SET_PAST_SCORES'

export const fetchPastScores = () => {
  return(dispatch) => {
    getScores().then(response => dispatch(setPastScores(response.data)))
  }
};

export const setPastScores = (data) => ({
  type: SET_PAST_SCORES,
  payload: data
});
