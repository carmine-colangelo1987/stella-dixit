/** @format */

import classes from './rotationToolbar.module.scss';
import Icon from '../Icon';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { addStarMapRotation } from '../../../store/slices/uiData';

const RotationToolbar = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();
  const rotation = useAppSelector(s => s.uiDataReducer.starMapLastRotation);

  const rotate = (add: number) => () => {
    dispatch(addStarMapRotation(add));
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
