/** @format */

import { useAppSelector } from './useStore';
import { useEffect, useMemo, useState } from 'react';
import { useGetRoundAssociacionsQuery } from '../store/api/match';
import { usePlayersList } from './usePlayersList';

export const usePlayerSelectedCardList = (matchId: string) => {
  const userId = useAppSelector(s => s.playerDataReducer.userId);
  const { playersList: players } = usePlayersList();
  const { data } = useGetRoundAssociacionsQuery({ matchId });

  const [userSteps, setUserSteps] = useState<number>();

  useEffect(() => {
    if (data?.data && data.data.length > 0) {
      const userInfo = data.data.find(p => p.userId === userId);
      setUserSteps(userInfo?.total_selected_cards);
    }
  }, [data?.data, userId]);

  const pawns = useMemo(
    () =>
      (data?.data || [])
        .map(player => {
          const user = players.find(p => p.id === player.userId);
          return {
            ...player,
            color: user?.color,
            name: user?.name,
          };
        })
        .sort((a, b) => {
          if (a.total_selected_cards === b.total_selected_cards) {
            if (a.userId === userId) return 1;
            if (b.userId === userId) return -1;
            return 0;
          }
          return a.total_selected_cards - b.total_selected_cards;
        }),
    [data, players, userId],
  );
  return {
    pawns,
    userSteps,
  };
};
