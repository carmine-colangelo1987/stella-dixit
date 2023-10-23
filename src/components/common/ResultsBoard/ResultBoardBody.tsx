/** @format */

import { Fragment, memo, useMemo } from 'react';
import ResultsBoardAside from './ResultsBoardAside';
import { useAppSelector } from '../../../hooks/useStore';
import ResultsBoardCell from './ResultsBoardCell';

type Props = {
  rounds: number;
};

const ResultBoardBody = memo(({ rounds }: Props) => {
  const playersList = useAppSelector(s => s.playerDataReducer.playersList);
  const roundList = useMemo(() => {
    return Array.from({ length: rounds }, (_, i) => i + 1);
  }, [rounds]);

  return (
    <>
      {roundList.map(round => {
        const isLast = round === roundList.length;
        console.log({ round });
        return (
          <Fragment key={'round_' + round}>
            <ResultsBoardAside isLast={isLast} round={round} />
            {playersList.map(p => (
              <ResultsBoardCell key={'round_section_' + p.id} isLast={isLast} player={p} />
            ))}
          </Fragment>
        );
      })}
    </>
  );
});

ResultBoardBody.displayName = 'ResultBoardBody';
export default ResultBoardBody;
