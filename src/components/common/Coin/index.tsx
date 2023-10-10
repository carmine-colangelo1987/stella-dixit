/** @format */

import { memo } from 'react';
import classes from './coin.module.scss';
import classNames from 'classnames';

type Props = {
  color: string;
  perspective?: boolean;
};

const Coin = memo(({ color, perspective }: Props) => {
  return (
    <div className={classNames(classes.wrapper, { perspective })}>
      <div className={classNames(classes.coinContainer)}>
        <div className={classNames(classes.coinShadow, `bg-${color}-700`)} />
        <div className={classNames(classes.coin, `bg-${color}-500`)}>
          <div className="bg-white bg-opacity-20 w-full h-full rounded-full shadow" />
        </div>
      </div>
    </div>
  );
});

Coin.displayName = 'Coin';
export default Coin;
