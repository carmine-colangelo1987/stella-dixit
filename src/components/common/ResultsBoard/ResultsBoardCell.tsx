/** @format */

import { memo } from 'react';
import classNames from 'classnames';
import classes from './resultsBoard.module.scss';
import { Player } from '../../../types';

type Props = {
  isLast?: boolean;
  player: Player;
};

const ResultsBoardCell = memo(({ isLast, player }: Props) => {
  return (
    <section className={classNames({ 'border-b': !isLast })}>
      <div className={classNames(classes.playerRoundPoints, `text-${player.color}-400`)}>
        <span className="text-black">{player.points}</span>
      </div>
    </section>
  );
});

ResultsBoardCell.displayName = 'ResultsBoardCell';
export default ResultsBoardCell;
