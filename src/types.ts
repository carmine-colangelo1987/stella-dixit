/** @format */

export type RoundPhase = 'READY' | 'SELECTING' | 'SELECTED' | 'MATCHING' | 'COMPLETED';

export type MatchPhase = 'CREATION' | RoundPhase;

export type Player = {
  id: string;
  name: string;
  color: string;
  paired?: boolean;
  points: number;
};

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
