/** @format */

// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

/**
 * Reducer that exclusively handles UI shared data.
 */
export const roundData = createSlice({
  name: 'roundData',
  initialState,
  reducers: {
    toggleSelected: (state, action: PayloadAction<string>) => {
      if (state.selectedCards.includes(action.payload)) {
        state.selectedCards = state.selectedCards.filter(id => id !== action.payload);
      } else {
        state.selectedCards = state.selectedCards.concat(action.payload);
      }
    },
  },
});

export const { toggleSelected } = roundData.actions;

export default roundData.reducer;
