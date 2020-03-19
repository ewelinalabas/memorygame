import { combineReducers } from 'redux';
import { game } from './game';
import { scoreboard} from './scoreboard';

export const rootReducer = combineReducers({
  game,
  scoreboard
});
