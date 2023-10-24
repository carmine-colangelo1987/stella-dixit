/** @format */

import { CreationPlayer, Player, PlayerResults } from '../../../types';

/** @format */

export type TPlayerData = {
  userId?: string;
  player?: Player;
  createdPlayersList: CreationPlayer[];
  playersList: Player[];
  playersResults: Pick<PlayerResults, 'id' | 'points' | 'rounds'>[];
};

export const initialState: TPlayerData = {
  createdPlayersList: [],
  playersList: [],
  playersResults: [],
};
