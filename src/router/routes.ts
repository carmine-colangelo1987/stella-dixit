/** @format */

export enum AppRoutes {
  BASE = '/',
  NEW_MATCH = '/nuova-partita',
  CURRENT_MATCH = '/partita/:matchId',
  CREATE_PLAYERS = 'crea-cercatori',
  CREATE_NEW_PLAYER = 'creazione',
  SELECT_PLAYER = 'seleziona-cercatore',
  CURRENT_ROUND = 'round',
  ROUND_ASSOCIATION = 'associare',
  ROUND_ANNOUNCE = 'annunciare',
  ROUND_REVEAL = 'rivelare',
  MATCH_RESULT = 'punteggio',
}

export const setMatchRoute = (id: string) => AppRoutes.CURRENT_MATCH.replace(':matchId', id);

export const setMatchConfigRoute = (matchId: string, ...subPages: string[]) =>
  `${setMatchRoute(matchId)}/${subPages.join('/')}`;

export const setRoundRoute = (matchId: string, phase?: string) =>
  `${setMatchConfigRoute(matchId, AppRoutes.CURRENT_ROUND, phase || '')}`;
