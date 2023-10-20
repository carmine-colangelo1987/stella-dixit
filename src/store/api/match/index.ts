/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { genUrl } from '../../../constants/api';
import {
  CreateMatchResponse,
  CreateMatchVariables,
  CreatePlayersResponse,
  CreatePlayersVariables,
  GetCurrentMatchResponse,
  GetMatchDataResponse,
  GetMatchDataVariables,
  GetPlayersListResponse,
  GetRoundAssociationsResponse,
  GetRoundAssociationsVariables,
  PairUserToClientResponse,
  PairUserToClientVariables,
} from '../types';

export const apiMatch = createApi({
  reducerPath: 'match',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_ID}`,
    redirect: 'follow',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  }),
  endpoints: builder => ({
    createNewMatch: builder.mutation<CreateMatchResponse, CreateMatchVariables>({
      query: variables => ({
        url: genUrl('newMatch'),
        method: 'POST',
        body: JSON.stringify(variables),
      }),
    }),
    getCurrentMatch: builder.query<GetCurrentMatchResponse, void>({
      query: () => ({
        url: genUrl('getCurrentMatch'),
        method: 'GET',
      }),
    }),
    getMatchData: builder.query<GetMatchDataResponse, GetMatchDataVariables>({
      query: variables => ({
        url: genUrl('getMatchData'),
        method: 'POST',
        body: JSON.stringify(variables),
      }),
    }),
    createPlayers: builder.mutation<CreatePlayersResponse, CreatePlayersVariables>({
      query: variables => ({
        url: genUrl('createPlayers'),
        method: 'POST',
        body: JSON.stringify(variables),
      }),
    }),
    getPlayersList: builder.query<GetPlayersListResponse, void>({
      query: () => ({
        url: genUrl('getPlayersList'),
        method: 'GET',
      }),
    }),
    pairUser: builder.mutation<PairUserToClientResponse, PairUserToClientVariables>({
      query: variables => ({
        url: genUrl('pairUser'),
        method: 'POST',
        body: JSON.stringify(variables),
        redirect: 'follow',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      }),
    }),
    getRoundAssociacions: builder.query<GetRoundAssociationsResponse, GetRoundAssociationsVariables>({
      query: variables => ({
        url: genUrl('getRoundAssociacions'),
        method: 'POST',
        body: JSON.stringify(variables),
      }),
    }),
  }),
});

export const {
  useCreateNewMatchMutation,
  useGetCurrentMatchQuery,
  useLazyGetMatchDataQuery,
  useCreatePlayersMutation,
  usePairUserMutation,
  useLazyGetPlayersListQuery,
  useGetPlayersListQuery,
  useGetRoundAssociacionsQuery,
} = apiMatch;
