import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '+1';

export const countryCodeSlice = createSlice({
  name: 'countryCodeSlice',
  initialState,
  reducers: {
    setCountryCode: (_, { payload }: PayloadAction<string>) => payload,
  },
});

export const { setCountryCode } = countryCodeSlice.actions;
