/** @format */

import { memo, PropsWithChildren } from 'react';
import classes from './miniMap.module.scss';
import classNames from 'classnames';

type MiniMapProps = {
  color: string;
};

const MiniMap = memo(({ children, color }: PropsWithChildren<MiniMapProps>) => {
  return (
    <div className={classNames(classes.map, `text-${color}-500`)}>
      <div className="absolute inset-0 z-10">
        <svg
          className={classes.figure}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 150"
        >
          <path
            style={{ fill: 'currentcolor' }}
            d="M143.4,44.4c1.8-13.4,2.7-26.8,2.7-40.2c0-1.2-1.1-2.1-2.3-1.9c-28.8,4.9-34.1,3.8-39.5,6.8C86,5,68.7,2.2,52.7,1.4l0,0h0
			h0l0,0L8.9,5.7c-2.3,0.2-3.9,2.4-3.6,4.6L11,45.7l5.5,52.4l-6.8,38.1c-0.2,1.4,0.6,2.7,2,3l44.6,9.4l41.4-9.4
			c13.2,2.6,26.4,4.7,39.6,5.6c1,0.1,2.4-0.3,2.6-1.3l8.3-46.6C145.5,71.5,144.9,52,143.4,44.4z"
          />
          <path
            style={{ fill: 'white', opacity: 0.1 }}
            d="M143.4,44.4c1.8-13.4,2.7-26.8,2.7-40.2c0-1.2-1.1-2.1-2.3-1.9c-28.8,4.9-34.1,3.8-39.5,6.8v35.2l2.6,48.8
			l41.1,3.7C145.5,71.5,144.9,52,143.4,44.4z"
          />
          <path
            style={{ fill: 'white', opacity: 0.2 }}
            d="M148.1,96.9l-8.3,46.6c-0.2,1-1.6,1.4-2.6,1.3c-13.2-0.9-26.4-2.9-39.6-5.6l9.3-46L148.1,96.9z"
          />
          <path
            style={{ fill: 'black', opacity: 0.1 }}
            d="M104.3,44.4V9.2C86,5,68.7,2.2,52.7,1.4l9.2,39.8v56.3l-5.7,51.1l41.4-9.4l9.3-46L104.3,44.4z"
          />
        </svg>
      </div>
      <div className={classes.container}>
        <aside className={classes.moonPosition} />
        <div className={classes.grid}>{children}</div>
      </div>
    </div>
  );
});

MiniMap.displayName = 'MiniMap';
export default MiniMap;
