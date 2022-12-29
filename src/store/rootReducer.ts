import { combineReducers } from '@reduxjs/toolkit';

import { countryIdSlice } from './countryId';

export const rootReducer = combineReducers({
  countryId: countryIdSlice.reducer,
});
