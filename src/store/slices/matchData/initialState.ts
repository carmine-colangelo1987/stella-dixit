/** @format */

import { CreationMatchData, MatchData } from '../../../types';

/** @format */

export type TMatchData = {
  matchId?: string;
  matchData?: MatchData;
  newMatchData?: Partial<CreationMatchData>;
};

export const initialState: TMatchData = {};
