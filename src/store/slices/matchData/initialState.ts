/** @format */

import { uuid } from '../../../utils/uuid';
import { Player } from '../../../types';

/** @format */

export type TMatchData = {
  matchId?: string;
  userId?: string;
  clientId: string;
  player?: Player;
};

export const initialState: TMatchData = {
  clientId: uuid(),
};
