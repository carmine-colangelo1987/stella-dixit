/** @format */
import { MatchData, Player } from '../../types';

export type BaseResponse<T = string> = {
  status: 'success' | 'error' | 'received';
  data: T;
  message?: string;
};

export type CreateMatchVariables = {
  title: string;
  expected_users: number;
  total_rounds: number;
};

export type CreateMatchResponse = BaseResponse<string>;

export type GetMatchDataVariables = {
  matchId: string;
};

export type GetMatchDataResponse = BaseResponse<MatchData>;

export type GetPlayersListResponse = BaseResponse<Player[]>;

export type PairUserToClientVariables = { clientId: string; userId: string };
export type PairUserToClientResponse = BaseResponse<boolean>;
