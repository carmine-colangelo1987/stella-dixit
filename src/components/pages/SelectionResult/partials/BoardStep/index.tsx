/** @format */

import { forwardRef } from 'react';
import classes from './boardStep.module.scss';
import classNames from 'classnames';
import Cloud from '../Cloud';

type Props = {
  id: number;
};

const BoardStep = forwardRef<HTMLDivElement, Props>(({ id }, ref) => {
  return (
    <div ref={ref} className={classNames(classes.step, `step_${id}`)}>
      <div className="cloud absolute">
        <Cloud>{id}</Cloud>
      </div>
    </div>
  );
});

BoardStep.displayName = 'BoardStep';
export default BoardStep;
