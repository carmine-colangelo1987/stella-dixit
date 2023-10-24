/** @format */

import classes from './resultsBoard.module.scss';
import { CSSProperties } from 'react';
import ResultsBoardHeader from './ResultsBoardHeader';
import ResultsBoardFooter from './ResultsBoardFooter';
import ResultBoardBody from './ResultBoardBody';
import { PlayerResults } from '../../../types';

type ResultsBoardProps = {
  rounds: number;
  playersList: Array<PlayerResults>;
};
const ResultsBoard = ({ rounds, playersList }: ResultsBoardProps) => {
  const playersListLength = playersList.length;

  const style = {
    '--rounds': rounds,
    '--players': playersListLength - 1,
  } as CSSProperties;

  return (
    <div className="overflow-x-auto">
      <div className={classes.board} style={style}>
        <ResultsBoardHeader playersList={playersList} />
        <ResultBoardBody playersList={playersList} rounds={rounds} />
        <ResultsBoardFooter playersList={playersList} />
      </div>
    </div>
  );
};

export default ResultsBoard;
