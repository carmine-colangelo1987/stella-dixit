/** @format */

import { memo, PropsWithChildren } from 'react';
import classes from './container.module.scss';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const Container = memo(({ className, children }: PropsWithChildren<Props>) => {
  return <div className={classNames(classes.container, className)}>{children}</div>;
});

Container.displayName = 'Container';
export default Container;
