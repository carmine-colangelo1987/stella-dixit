/** @format */

import { memo } from 'react';
import classNames from 'classnames';
import classes from './star.module.scss';

type Props = {
  fill?: boolean;
  isSuperSpark?: boolean;
  color?: string;
  className?: string;
};

const Star = memo(({ color, fill, isSuperSpark, className }: Props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 135 135"
      className={classNames(classes.figure, { fill }, { [`text-${color}-500`]: !!color }, className)}
    >
      <path
        className="star"
        d="M94.6,110.8c-0.2,0-0.4,0-0.5-0.1L69.9,97.8c-0.7-0.4-1.5-0.6-2.4-0.6s-1.6,0.2-2.4,0.6l-24.2,12.9
		c-0.1,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.4,0-0.6-0.2c-0.3-0.2-0.5-0.6-0.4-1L44,82.1c0.3-1.6-0.3-3.2-1.4-4.4L23,58.3
		c-0.3-0.3-0.4-0.7-0.2-1.1c0.1-0.4,0.4-0.6,0.8-0.7l27.1-4c1.6-0.2,3-1.3,3.8-2.8l12-24.9c0.2-0.4,0.5-0.6,0.9-0.6s0.8,0.2,0.9,0.6
		l12.1,25c0.7,1.5,2.1,2.5,3.8,2.8l27.1,4c0.4,0.1,0.7,0.3,0.8,0.7c0.1,0.4,0,0.8-0.3,1L92.4,77.7c-1.2,1.1-1.7,2.8-1.4,4.4
		l4.7,27.5c0.1,0.4-0.1,0.8-0.4,1C94.9,110.8,94.7,110.8,94.6,110.8z"
      />
      {isSuperSpark && (
        <path
          className="circle"
          d="M67.5,9C99.7,9,126,35.3,126,67.5S99.7,126,67.5,126S9,99.7,9,67.5S35.3,9,67.5,9 M67.5,1C30.8,1,1,30.8,1,67.5
		S30.8,134,67.5,134S134,104.2,134,67.5S104.2,1,67.5,1L67.5,1z"
        />
      )}
    </svg>
  );
});

Star.displayName = 'Star';
export default Star;
