/** @format */

// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { CreationPlayer, Player } from '../../../types';

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
    addNewUser: (state, action: PayloadAction<CreationPlayer>) => {
      state.createdPlayersList = state.createdPlayersList.concat(action.payload);
    },
    deleteNewUser: (state, action: PayloadAction<number>) => {
      state.createdPlayersList = state.createdPlayersList.filter((_, i) => i !== action.payload);
    },
    setPlayersList: (state, action: PayloadAction<Player[]>) => {
      state.playersList = action.payload;
    },
    resetPlayerData: () => initialState,
  },
});

export const { setPlayer, addNewUser, deleteNewUser, setPlayersList, resetPlayerData } = playerData.actions;

export default playerData.reducer;
