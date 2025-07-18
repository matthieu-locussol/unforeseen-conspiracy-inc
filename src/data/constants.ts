import Decimal from 'decimal.js';

export const LOCALSTORAGE_I18N_KEY = 'game_locale';

export const LOCALSTORAGE_SAVE_KEY = 'game_state';

export const LOCALSTORAGE_SAVE_INTERVAL = 5 * 1_000;

export const TRANSITION_DURATION = 750;

export const RESET_COUNTDOWN = 5;

export const CLICK_SCALING_COEFFICIENT = new Decimal(0.001);
