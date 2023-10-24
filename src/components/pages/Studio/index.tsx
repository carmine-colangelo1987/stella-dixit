/** @format */

import ResultsBoard from '../../common/ResultsBoard';
import { tailwindColorList, tailwindColorTones } from '../../../utils/tailwindColors';
import { useMemo } from 'react';
import { useAppSelector } from '../../../hooks/useStore';
import { PlayerResults } from '../../../types';
import { usePlayersList } from '../../../hooks/usePlayersList';
import { usePlayersResults } from '../../../hooks/usePlayersResults';

type Props = {};

const Studio = (props: Props) => {
  const playerId = useAppSelector(s => s.playerDataReducer.player?.id);
  const { playersList: players } = usePlayersList();
  const { playersResults: results } = usePlayersResults();
  const rounds = useAppSelector(s => s.matchDataReducer.matchData?.total_rounds ?? 0);

  const playersList = useMemo<PlayerResults[]>(() => {
    return [...players]
      .sort((a, b) => {
        if (a.id === playerId) return -1;
        if (b.id === playerId) return 1;
        return 0;
      })
      .map(p => {
        const roundResults = results.find(({ id }) => p.id === id);
        return {
          ...p,
          points: roundResults?.points || p.points,
          rounds: roundResults?.rounds || [],
        };
      });
  }, [playerId, players, results]);

  return (
    <div>
      <ResultsBoard playersList={playersList} rounds={rounds} />
      <div className="flex flex-wrap gap-4">
        {tailwindColorList.map(color => {
          return (
            <div className="flex flex-wrap gap-2">
              {tailwindColorTones.map(tone => (
                <div className={`bg-${color}-${tone} p-2`}>
                  {color}-{tone}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Studio;
