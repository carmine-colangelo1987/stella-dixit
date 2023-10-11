/** @format */

import { CreationPlayer, Player } from '../../../types';

/** @format */

export type TPlayerData = {
  userId?: string;
  player?: Player;
  createdPlayersList: CreationPlayer[];
  playersList: Player[];
};

export const initialState: TPlayerData = {
  userId: 'e09a5abe-a9ea-45f8-84c2-f2f398c90e6f',
  createdPlayersList: [],
  playersList: [],
};
