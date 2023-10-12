/** @format */
import { MatchData, Player, RoundAssociationData } from '../../types';

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

export type GetCurrentMatchResponse = BaseResponse<Omit<MatchData, 'currentRoundName' | 'expected_users'>>;

export type GetMatchDataResponse = BaseResponse<MatchData>;

export type GetPlayersListResponse = BaseResponse<Player[]>;

export type PairUserToClientVariables = { clientId: string; userId: string };
export type PairUserToClientResponse = BaseResponse<boolean>;

export type GetRoundAssociationsVariables = { matchId: string };
export type GetRoundAssociationsResponse = BaseResponse<Array<RoundAssociationData>>;
