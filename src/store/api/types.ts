/** @format */
import {
  CreationPlayer,
  MatchData,
  MatchedCard,
  Player,
  RoundAssociationData,
  RoundRevealData,
} from '../../types';

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

export type CreatePlayersVariables = { players: CreationPlayer[] };
export type CreatePlayersResponse = BaseResponse<Player[]>;

export type PairUserToClientVariables = { clientId: string; userId: string };
export type PairUserToClientResponse = BaseResponse<boolean>;

export type GetRoundAssociationsVariables = { matchId: string };
export type GetRoundAssociationsResponse = BaseResponse<Array<RoundAssociationData>>;

export type SetSelectedCardsVariables = {
  matchId: string;
  userId: string;
  selected: string[];
};
export type SetSelectedCardsResponse = BaseResponse<{
  id: string;
  selected_cards: string[];
  total_selected_cards: number;
  dark: boolean;
}>;

export type SetMatchCardVariables = {
  matchId: string;
  userId: string;
  match: MatchedCard;
};
export type SetMatchCardResponse = BaseResponse<RoundRevealData>;

export type SetFallenVariables = {
  matchId: string;
  userId: string;
};
export type SetFallenResponse = BaseResponse<RoundRevealData>;
