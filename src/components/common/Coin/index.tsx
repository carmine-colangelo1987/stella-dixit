/** @format */

import { memo, useEffect, useState } from 'react';
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (dark != null && isDark !== dark) {
      setTimeout(() => {
        return setIsDark(dark);
      }, 500);
    }
  }, [dark]);

  return (
    <div className={classNames(classes.coinWrapper, { 'opacity-50': !color })}>
      <div className={classNames(classes.coin, { dark: isDark, perspective })}>
        <footer className={classNames(classes.back, bgColor)}>
          <div className={classes.coinBody} />
        </footer>
        <aside className={classNames(classes.lateral, bgShadowColor)} />
        <section className={classNames(classes.middle, bgShadowColor)} />
        <section className={classNames(classes.middle, bgShadowColor)} />
        <section className={classNames(classes.middle, bgShadowColor)} />
        <header className={classNames(classes.front, bgColor)}>
          <div className={classes.coinBody} />
        </header>
      </div>
    </div>
  );
});

Coin.displayName = 'Coin';
export default Coin;
