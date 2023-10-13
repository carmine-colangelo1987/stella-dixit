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
  userId: 'c4a927d8-12ad-47a7-841e-0347f002e44d',
  createdPlayersList: [],
  playersList: [],
};
