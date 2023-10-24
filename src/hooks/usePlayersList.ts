/** @format */

import { useEffect, useState } from 'react';
import { useGetPlayersListQuery, useLazyGetPlayersListQuery } from '../store/api/match';
import { Player } from '../types';

export const usePlayersList = () => {
  const [playersList, setPlayersList] = useState<Player[]>([]);
  const getPlayersListData = useGetPlayersListQuery();
  const [getPlayersList, { data }] = useLazyGetPlayersListQuery();

  useEffect(() => {
    if (data?.data && data.data.length > 0) {
      setPlayersList(data.data);
    }
  }, [data?.data]);

  useEffect(() => {
    if (getPlayersListData.data?.data && getPlayersListData.data.data.length > 0) {
      setPlayersList(getPlayersListData.data.data);
    }
  }, [getPlayersListData.data?.data]);

  return {
    playersList,
    getPlayersList,
  };
};
