/** @format */

// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, TPlayerData } from './initialState';
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
    resetCreatedUsersList: state => {
      state.createdPlayersList = [];
    },
    setPlayersList: (state, action: PayloadAction<Player[]>) => {
      state.playersList = action.payload;
    },
    setPlayersResults: (state, action: PayloadAction<TPlayerData['playersResults']>) => {
      state.playersResults = action.payload;
    },
    resetPlayerData: () => initialState,
  },
});

export const {
  setPlayer,
  addNewUser,
  deleteNewUser,
  setPlayersList,
  setPlayersResults,
  resetCreatedUsersList,
  resetPlayerData,
} = playerData.actions;

export default playerData.reducer;
