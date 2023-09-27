/** @format */

import { uuid } from '../../../utils/uuid';

/** @format */

export type TMatchData = {
  matchId?: string;
  userId?: string;
  clientId: string;
};

export const initialState: TMatchData = {
  clientId: uuid(),
};
