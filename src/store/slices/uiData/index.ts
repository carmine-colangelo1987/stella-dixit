/** @format */

// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

/**
 * Reducer that exclusively handles UI shared data.
 */
export const uiData = createSlice({
  name: 'uiData',
  initialState,
  reducers: {
    addStarMapRotation: (state, action: PayloadAction<number>) => {
      state.starMapLastRotation = state.starMapLastRotation + action.payload;
    },

    resetUiData: () => initialState,
  },
});

export const { addStarMapRotation, resetUiData } = uiData.actions;

export default uiData.reducer;
