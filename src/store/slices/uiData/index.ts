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
		setAsideOpen: (state, action: PayloadAction<boolean>) => {
			state.asideOpen = action.payload;
		},

		resetUiData: () => initialState,
	},
});

export const { setAsideOpen, resetUiData } = uiData.actions;

export default uiData.reducer;
