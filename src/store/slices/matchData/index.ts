/** @format */

// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { MatchData } from '../../../types';

/**
 * Reducer that exclusively handles UI shared data.
 */
export const matchData = createSlice({
  name: 'matchData',
  initialState,
  reducers: {
    setMatchData: (state, action: PayloadAction<MatchData | undefined>) => {
      state.matchData = action.payload;
      if (action.payload) {
        state.matchId = action.payload.currentMatch;
      } else {
        delete state.matchId;
      }
    },
    resetMatchData: () => initialState,
  },
});

export const { setMatchData, resetMatchData } = matchData.actions;

export default matchData.reducer;
