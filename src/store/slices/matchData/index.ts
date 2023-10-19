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
    setNewMatchTitle: (state, action: PayloadAction<string | undefined>) => {
      if (!action.payload) {
        delete state.newMatchData?.matchTitle;
      } else {
        state.newMatchData = {
          ...state.newMatchData,
          matchTitle: action.payload,
        };
      }
    },
    setNewMatchExpectedUsers: (state, action: PayloadAction<number | undefined>) => {
      if (!action.payload) {
        delete state.newMatchData?.expected_users;
      } else {
        state.newMatchData = {
          ...state.newMatchData,
          expected_users: action.payload,
        };
      }
    },
    setNewMatchTotalRounds: (state, action: PayloadAction<number | undefined>) => {
      if (!action.payload) {
        delete state.newMatchData?.total_rounds;
      } else {
        state.newMatchData = {
          ...state.newMatchData,
          total_rounds: action.payload,
        };
      }
    },
    resetMatchData: () => initialState,
  },
});

export const {
  setMatchData,
  resetMatchData,
  setNewMatchTitle,
  setNewMatchExpectedUsers,
  setNewMatchTotalRounds,
} = matchData.actions;

export default matchData.reducer;
