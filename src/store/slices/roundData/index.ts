/** @format */

// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { MatchedCard } from '../../../types';

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
    setDark: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
    setCurrentRevealedCard: (state, action: PayloadAction<string>) => {
      state.currentRevealedCard = action.payload;
      state.revealedCards.push(action.payload);
    },
    removeCurrentRevealedCard: (state, action: PayloadAction<void>) => {
      state.revealedCards = state.revealedCards.filter(c => c !== state.currentRevealedCard);
      state.currentRevealedCard = undefined;
    },
    setMatchedCard: (state, action: PayloadAction<MatchedCard>) => {
      state.matchedCards.push(action.payload);
      state.currentRevealedCard = undefined;
    },
    setFallen: (state, action: PayloadAction<boolean>) => {
      state.fallen = action.payload;
      state.fallenCard = state.currentRevealedCard;
      state.currentRevealedCard = undefined;
    },
  },
});

export const {
  toggleSelected,
  setCurrentRevealedCard,
  setMatchedCard,
  setDark,
  removeCurrentRevealedCard,
  setFallen,
} = roundData.actions;

export default roundData.reducer;
