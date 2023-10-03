/** @format */

export enum AppRoutes {
  BASE = '/',
  NEW_MATCH = '/nuova-partita',
  CURRENT_MATCH = '/partita/:matchId',
  CREATE_PLAYERS = 'crea-cercatori',
  SELECT_PLAYER = 'seleziona-cercatore',
}

export const setMatchRoute = (id: string) => AppRoutes.CURRENT_MATCH.replace(':matchId', id);
