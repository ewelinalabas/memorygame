import logo from './icons/icons8-ace-of-hearts-50.png';
import anonymousMask from './icons/icons8-anonymous-mask-100.png';
import futuramaBender from './icons/icons8-futurama-bender-100.png';
import futuramaMom from './icons/icons8-futurama-mom-100.png';
import homerSimpson from './icons/icons8-homer-simpson-100.png';
import ironMan from './icons/icons8-iron-man-100.png';
import jake from './icons/icons8-jake-100.png';
import scream from './icons/icons8-scream-100.png';
import stormtrooper from './icons/icons8-stormtrooper-100.png';
import superMario from './icons/icons8-super-mario-100.png';
import walterWhite from './icons/icons8-walter-white-100.png';
import questionMark from './icons/icons8-question-mark-100.png';
import tickBox from './icons/icons8-tick-box-100.png';
import clock from './icons/icons8-clock-100.png';
import transparent from './icons/transparent.png';
import reset from './icons/icons8-reset-100.png';
import error from './icons/icons8-error-100.png';

export const PHASES = {
  GAME_SETUP: 'gameSetup',
  PLAY: 'play',
  GAME_END: 'gameEnd'
};

export const MIN_NUMBER_OF_CARDS = 4;
export const MAX_NUMBER_OF_CARDS = 20;

export const SCORES_ORDER_OPTIONS = {
  OLDEST_TO_NEWEST: 'oldestToNewest',
  NEWEST_TO_OLDEST: 'newestToOldest',
  DURATION_ASCENDING: 'durationAsc', 
  DURATION_DESCENDING: 'durationDesc'
};

export const NUMBER_OF_ELEMENTS_PER_PAGE = 15;

export const IMAGES = {
  anonymousMask, 
  futuramaBender, 
  futuramaMom, 
  homerSimpson, 
  ironMan, 
  jake, 
  scream, 
  stormtrooper, 
  superMario, 
  walterWhite,
  questionMark,
  tickBox,
  clock,
  transparent,
  reset,
  error,
  logo
};

export const ICONS = Object.keys(IMAGES);
