/** @format */

export type TRoundData = {
  currentRound?: number;
  selectedCards: string[];
};

export const initialState: TRoundData = {
  selectedCards: [],
};
