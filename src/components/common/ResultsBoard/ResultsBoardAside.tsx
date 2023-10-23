/** @format */

import { memo, useMemo } from 'react';
import classNames from 'classnames';
import classes from './resultsBoard.module.scss';

type Props = {
  round: number;
  isLast?: boolean;
};

const ResultsBoardAside = memo(({ isLast, round }: Props) => {
  const romanRound = useMemo(() => {
    let num = round;
    const romanNumerals = [
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' },
    ];

    let result = '';

    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].symbol;
        num -= romanNumerals[i].value;
      }
    }

    return result;
  }, [round]);

  return (
    <aside
      className={classNames({
        'rounded-tl-xl': round === 1,
        'rounded-bl-xl': isLast,
        'border-b': !isLast,
      })}
    >
      <div
        className={classNames(classes.roundBox, {
          'rounded-tl-xl': round === 1,
          'rounded-bl-xl': isLast,
        })}
      >
        {romanRound}
      </div>
    </aside>
  );
});

ResultsBoardAside.displayName = 'ResultsBoardAside';
export default ResultsBoardAside;
