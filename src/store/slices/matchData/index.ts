/** @format */

// eslint-disable-next-line import/named
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

/**
 * Reducer that exclusively handles UI shared data.
 */
export const matchData = createSlice({
  name: 'matchData',
  initialState,
  reducers: {
    resetMatchData: () => initialState,
  },
});

export const { resetMatchData } = matchData.actions;

export default matchData.reducer;
