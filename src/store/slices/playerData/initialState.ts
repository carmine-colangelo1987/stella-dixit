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
  createdPlayersList: [],
  playersList: [],
};
