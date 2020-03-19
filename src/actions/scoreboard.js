import { getScores } from '../APIcalls';

const SET_PAST_SCORES = 'SET_PAST_SCORES';
const SET_NUMBER_OF_CARDS = 'SET_NUMBER_OF_CARDS';
const CHANGE_SCORES_ORDER = 'CHANGE_SCORES_ORDER';
const CHANGE_DISPLAYED_SCORES = 'CHANGE_DISPLAYED_SCORES';
const FETCH_PAST_SCORES_BEGIN = 'FETCH_PAST_SCORES_BEGIN';
const FETCH_PAST_SCORES_SUCCESS = 'FETCH_PAST_SCORES_SUCCESS';
const FETCH_PAST_SCORES_FAILURE = 'FETCH_PAST_SCORES_FAILURE';

export const fetchPastScores = () => {
  return(dispatch) => {
    dispatch(fetchPastScoresBegin())
    getScores().then(
      response => dispatch(fetchPastScoresSuccess(response.data)),
      error => dispatch(fetchPastScoresFailure(error))
    );
  };
};

const fetchPastScoresBegin = () => ({
  type: FETCH_PAST_SCORES_BEGIN
});

const fetchPastScoresSuccess = (scores) => ({
  type: FETCH_PAST_SCORES_SUCCESS,
  payload: scores
});

const fetchPastScoresFailure = (error) => ({
  type: FETCH_PAST_SCORES_FAILURE,
  payload: error
});

export const setPastScores = (data) => ({
  type: SET_PAST_SCORES,
  payload: data
});

export const setNumberOfCardsFilter = (value) => ({
  type: SET_NUMBER_OF_CARDS,
  payload: value
});

export const changeScoresOrder = (value) => ({
  type: CHANGE_SCORES_ORDER,
  payload: value
});

export const changeChunkOfScores = (value) => ({
  type: CHANGE_DISPLAYED_SCORES,
  payload: value
});
