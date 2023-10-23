/** @format */

import { useAppSelector } from '../../../hooks/useStore';
import classes from './resultsBoard.module.scss';
import { CSSProperties } from 'react';
import ResultsBoardHeader from './ResultsBoardHeader';
import ResultsBoardFooter from './ResultsBoardFooter';
import ResultBoardBody from './ResultBoardBody';

const ResultsBoard = () => {
  const rounds = useAppSelector(s => s.matchDataReducer.matchData?.total_rounds ?? 0);
  const playersListLength = useAppSelector(s => s.playerDataReducer.playersList.length);

  const style = {
    '--rounds': rounds,
    '--players': playersListLength - 1,
  } as CSSProperties;

  return (
    <div className="overflow-x-auto">
      <div className={classes.board} style={style}>
        <ResultsBoardHeader />
        <ResultBoardBody rounds={rounds} />
        <ResultsBoardFooter />
      </div>
    </div>
  );
};

export default ResultsBoard;
