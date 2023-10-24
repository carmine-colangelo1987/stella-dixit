/** @format */

import { memo } from 'react';
import classNames from 'classnames';
import classes from './resultsBoard.module.scss';
import Icon from '../Icon';
import { PlayerResults } from '../../../types';

type Props = {
  playersList: Array<PlayerResults>;
};

const ResultsBoardFooter = memo(({ playersList }: Props) => {
  return (
    <>
      <footer className="invisible" />
      {playersList.map(p => (
        <footer key={'foot_' + p.id}>
          <div className={classNames(classes.playerMatchPoints, `bg-${p.color}-400 text-${p.color}-400`)}>
            <span>{p.points}</span>
            <Icon icon="star-solid" className={`text-${p.color}-500`} />
          </div>
        </footer>
      ))}
    </>
  );
});

ResultsBoardFooter.displayName = 'ResultsBoardFooter';
export default ResultsBoardFooter;
