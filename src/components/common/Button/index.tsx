/** @format */

import { memo } from 'react';
import { ButtonHTMLAttributes } from 'react/index';
import classNames from 'classnames';
import classes from './button.module.scss';

type Props = {
  variant?: 'primary' | 'secondary' | 'neutral';
  size?: 'lg';
  loading?: boolean;
} & ButtonHTMLAttributes<any>;

const Button = memo(
  ({ variant = 'primary', size, children, loading, disabled, className, ...rest }: Props) => {
    return (
      <button
        disabled={loading || disabled}
        className={classNames(classes.btn, variant, size, className)}
        {...rest}
      >
        {loading ? 'Attendi...' : children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
