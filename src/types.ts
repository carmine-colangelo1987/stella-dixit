/** @format */

export type RoundPhase = 'ASSOCIATION' | 'ANNOUNCE' | 'REVEAL' | 'RESULTS';

export type MatchPhase = 'CREATION' | RoundPhase;

export type Player = {
  id: string;
  name: string;
  color: string;
  paired?: boolean;
  points: number;
};

export type CreationPlayer = Pick<Player, 'name' | 'color' | 'paired'>;

export type MatchData = {
  matchTitle: string;
  currentMatch: string;
  total_rounds: number;
  expected_users: number;
  total_users: number;
  currentRound: number;
  currentRoundName?: string;
  currentRoundPhase: MatchPhase;
};

export type CreationMatchData = Pick<MatchData, 'matchTitle' | 'expected_users' | 'total_rounds'>;

export type CardID = `${0 | 1 | 2}-${0 | 1 | 2 | 3 | 4}`;

export type RoundData = {
  id: string;
  name: string;
  phase: RoundPhase;
  selected_cards: CardID[];
  total_selected_cards: number;
  dark: boolean;
  match: CardID[];
  total_matches: number;
  super_match: CardID[];
  total_super_matches: number;
  fallen: boolean;
  temp_points: number;
  points: number;
};

// risposta durante la fase di Association
export type RoundAssociationData = {
  userId: RoundData['id'];
  total_selected_cards: RoundData['total_selected_cards'];
  dark: RoundData['dark'];
};

// risposta durante la fase di Reveal
export type RoundRevealData = {
  userId: RoundData['id'];
  match: RoundData['match'];
  total_matches: RoundData['total_matches'];
  super_match: RoundData['super_match'];
  total_super_matches: RoundData['total_super_matches'];
  fallen: RoundData['fallen'];
};

// risposta durante la fase di Reveal
export type RoundResultData = {
  userId: RoundData['id'];
  points: RoundData['points'];
};

export type MatchedCard = {
  id: string;
  isSuperSpark: boolean;
};

// utils

export type TOption<Value extends string | number> = { id: string; value: Value };
