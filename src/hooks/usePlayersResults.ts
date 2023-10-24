/** @format */

import { useEffect, useState } from 'react';
import { useGetRoundResultsQuery, useLazyGetRoundResultsQuery } from '../store/api/match';
import { PlayerResults } from '../types';

export const usePlayersResults = () => {
  const [playersResults, setPlayersResults] = useState<Pick<PlayerResults, 'id' | 'rounds' | 'points'>[]>([]);
  const getPlayersResultsData = useGetRoundResultsQuery();
  const [getPlayersResults, { data }] = useLazyGetRoundResultsQuery();

  useEffect(() => {
    if (data?.data && data.data.length > 0) {
      setPlayersResults(data.data);
    }
  }, [data?.data]);

  useEffect(() => {
    if (getPlayersResultsData.data?.data && getPlayersResultsData.data.data.length > 0) {
      setPlayersResults(getPlayersResultsData.data.data);
    }
  }, [getPlayersResultsData.data?.data]);

  return {
    playersResults,
    getPlayersResults,
  };
};
