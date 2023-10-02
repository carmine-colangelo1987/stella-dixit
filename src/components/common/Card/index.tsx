/** @format */

import { memo, PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const Card = memo(({ className, children }: PropsWithChildren<Props>) => {
  return (
    <div
      className={classNames(
        'transition-base rounded-3xl overflow-hidden shadow hover:shadow-lg bg-white',
        className,
      )}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';
export default Card;
