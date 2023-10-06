/** @format */

import classes from './rotationToolbar.module.scss';
import Icon from '../Icon';
import classNames from 'classnames';
import { PropsWithChildren, useState } from 'react';

const LS_LAST_ROTATION = 'app:last_rotation';

const RotationToolbar = ({ children }: PropsWithChildren) => {
  const [rotation, setRotation] = useState(Number(localStorage.getItem(LS_LAST_ROTATION) ?? '0'));

  const rotate = (add: number) => () => {
    setRotation(p => {
      const result = p + add;
      localStorage.setItem(LS_LAST_ROTATION, result.toString());
      return result;
    });
  };

  return (
    <div className="py-4">
      <div className="py-10 lg:py-12">
        <div className={classNames(classes.rotatingWrapper)} style={{ transform: `rotate(${rotation}deg)` }}>
          {children}
        </div>
      </div>
      <nav className={classes.toolbar}>
        <button className={classes.btn} onClick={rotate(-90)}>
          <Icon icon={'arrow-rotate-backward'} />
        </button>
        <span>Ruota la cartella</span>
        <button className={classes.btn} onClick={rotate(90)}>
          <Icon icon={'arrow-rotate-forward'} />
        </button>
      </nav>
    </div>
  );
};

export default RotationToolbar;
