/** @format */

import { Fragment, memo, useMemo } from 'react';
import ResultsBoardAside from './ResultsBoardAside';
import ResultsBoardCell from './ResultsBoardCell';
import { PlayerResults } from '../../../types';

type Props = {
  rounds: number;
  playersList: Array<PlayerResults>;
};

const ResultBoardBody = memo(({ rounds, playersList }: Props) => {
  const roundList = useMemo(() => {
    return Array.from({ length: rounds }, (_, i) => i + 1);
  }, [rounds]);

  return (
    <>
      {roundList.map(round => {
        const isLast = round === roundList.length;
        return (
          <Fragment key={'round_' + round}>
            <ResultsBoardAside isLast={isLast} round={round} />
            {playersList.map(p => (
              <ResultsBoardCell
                key={'round_' + round + '_section_' + p.id}
                isLast={isLast}
                player={p}
                roundIndex={round - 1}
              />
            ))}
          </Fragment>
        );
      })}
    </>
  );
});

ResultBoardBody.displayName = 'ResultBoardBody';
export default ResultBoardBody;
