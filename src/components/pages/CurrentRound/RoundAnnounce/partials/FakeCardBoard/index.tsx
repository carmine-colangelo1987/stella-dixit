/** @format */

import { memo, PropsWithChildren } from 'react';
import classes from './fakeCardBoard.module.scss';

const FakeCardBoard = memo(({ children }: PropsWithChildren) => {
  return (
    <div className="p-4">
      <div className={classes.grid}>
        <aside>{children}</aside>
      </div>
    </div>
  );
});

FakeCardBoard.displayName = 'FakeCardBoard';
export default FakeCardBoard;
