/** @format */

import { memo } from 'react';
import classes from './coin.module.scss';
import classNames from 'classnames';

type Props = {
  color?: string;
  dark?: boolean;
  perspective?: boolean;
};

const Coin = memo(({ color, dark, perspective }: Props) => {
  const bgColor = color ? `bg-${color}-500` : `bg-neutral-700`;
  const bgShadowColor = color ? `bg-${color}-700` : `bg-neutral-900`;
  return (
    <div className={classNames(classes.wrapper, { perspective })}>
      <div className={classNames(classes.coinContainer)}>
        <div className={classNames(classes.coinShadow, bgShadowColor)} />
        <div className={classNames(classes.coin, bgColor)}>
          <div
            className={classNames('bg-opacity-20 w-full h-full rounded-full shadow transition-base', {
              'bg-white': !dark,
              'bg-black': dark,
            })}
          />
        </div>
      </div>
    </div>
  );
});

Coin.displayName = 'Coin';
export default Coin;
