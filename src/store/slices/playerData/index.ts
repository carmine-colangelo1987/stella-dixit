/** @format */

// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { Player } from '../../../types';

/**
 * Reducer that exclusively handles UI shared data.
 */
export const playerData = createSlice({
  name: 'playerData',
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
    resetPlayerData: () => initialState,
  },
});

export const { setPlayer, resetPlayerData } = playerData.actions;

export default playerData.reducer;
