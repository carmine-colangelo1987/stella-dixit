/** @format */

import { MatchedCard } from '../../../types';

/** @format */

export type TRoundData = {
  currentRound?: number;
  selectedCards: string[];
  currentRevealedCard?: string;
  revealedCards: string[];
  matchedCards: MatchedCard[];
  dark?: boolean;
  fallen?: boolean;
  fallenCard?: string;
};

export const initialState: TRoundData = {
  selectedCards: [],
  revealedCards: [],
  matchedCards: [],
};
