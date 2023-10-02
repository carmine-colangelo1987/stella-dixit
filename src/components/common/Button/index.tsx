/** @format */

import { memo } from 'react';
import { ButtonHTMLAttributes } from 'react/index';
import classNames from 'classnames';
import classes from './button.module.scss';

type Props = {
  variant?: 'primary' | 'secondary';
  size?: 'lg';
} & ButtonHTMLAttributes<any>;

const Button = memo(({ variant = 'primary', size, children, className, ...rest }: Props) => {
  return (
    <button className={classNames(classes.btn, variant, size, className)} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
