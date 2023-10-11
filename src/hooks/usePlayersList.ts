/** @format */

import { useAppDispatch, useAppSelector } from './useStore';
import { useEffect } from 'react';
import { useGetPlayersListQuery } from '../store/api/match';
import { setPlayersList } from '../store/slices/playerData';

export const usePlayersList = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetPlayersListQuery();

  useEffect(() => {
    if (data?.data && data.data.length > 0) {
      dispatch(setPlayersList(data.data));
    }
  }, [data?.data]);

  return useAppSelector(s => s.playerDataReducer.playersList);
};
