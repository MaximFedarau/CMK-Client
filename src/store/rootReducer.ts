import { combineReducers } from '@reduxjs/toolkit';

import { countryCodeSlice } from './countryCode';

export const rootReducer = combineReducers({
  countryCode: countryCodeSlice.reducer,
});
