/** @format */

import { memo } from 'react';
import classNames from 'classnames';
import classes from './resultsBoard.module.scss';
import Icon from '../Icon';
import { useAppSelector } from '../../../hooks/useStore';

const ResultsBoardFooter = memo(() => {
  const playersList = useAppSelector(s => s.playerDataReducer.playersList);
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
