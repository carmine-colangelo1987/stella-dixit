/** @format */

// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { Player } from '../../../types';

/**
 * Reducer that exclusively handles UI shared data.
 */
export const matchData = createSlice({
  name: 'matchData',
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<Player | undefined>) => {
      state.player = action.payload;
      if (action.payload) {
        state.userId = action.payload.id;
      } else {
        delete state.userId;
      }
    },
    resetMatchData: () => initialState,
  },
});

export const { setPlayer, resetMatchData } = matchData.actions;

export default matchData.reducer;
