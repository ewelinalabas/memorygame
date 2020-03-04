import axios from 'axios';

export const getScores = () => {
  return axios.get('http://salty-headland-84520.herokuapp.com/scores')
}

export const saveScore = (duration, numberOfCards) => {
  axios.post('https://salty-headland-84520.herokuapp.com/scores', 
  { score: {
    time: duration,
    number_of_cards: numberOfCards
  } 
  })
}
