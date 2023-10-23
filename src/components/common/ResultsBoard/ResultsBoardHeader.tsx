/** @format */

import { memo } from 'react';
import classNames from 'classnames';
import classes from './resultsBoard.module.scss';
import { useAppSelector } from '../../../hooks/useStore';

const ResultsBoardHeader = memo(() => {
  const playersList = useAppSelector(s => s.playerDataReducer.playersList);
  return (
    <>
      <header className="invisible" />
      {playersList.map(p => (
        <header key={'head_' + p.id}>
          <div className={classNames(classes.playerBox, `bg-${p.color}-200 text-${p.color}-500`)}>
            {p.name}
          </div>
        </header>
      ))}
    </>
  );
});

ResultsBoardHeader.displayName = 'ResultsBoardHeader';
export default ResultsBoardHeader;
