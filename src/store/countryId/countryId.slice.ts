import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Countries } from '@types';

const initialState = Countries.US;

export const countryIdSlice = createSlice({
  name: 'countryIdSlice',
  initialState,
  reducers: {
    setCountryId: (_, { payload }: PayloadAction<Countries>) => payload,
  },
});

export const { setCountryId } = countryIdSlice.actions;
