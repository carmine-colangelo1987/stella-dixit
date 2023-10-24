/** @format */

import { memo } from 'react';
import classNames from 'classnames';
import classes from './resultsBoard.module.scss';
import { PlayerResults } from '../../../types';

type Props = {
  isLast?: boolean;
  player: PlayerResults;
  roundIndex: number;
};

const ResultsBoardCell = memo(({ isLast, player, roundIndex }: Props) => {
  return (
    <section className={classNames({ 'border-b': !isLast })}>
      <div className={classNames(classes.playerRoundPoints, `text-${player.color}-400`)}>
        <span className="text-black">{player.rounds[roundIndex]?.points || ''}</span>
      </div>
    </section>
  );
});

ResultsBoardCell.displayName = 'ResultsBoardCell';
export default ResultsBoardCell;
