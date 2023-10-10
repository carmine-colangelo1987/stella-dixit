/** @format */

import { CSSProperties, memo, useEffect, useMemo, useRef, useState } from 'react';
import BoardStep from '../BoardStep';
import classes from './selectionBoard.module.scss';
import Coin from '../../../../common/Coin';

type Props = {
  stopAt?: number;
};

const SelectionBoard = memo(({ stopAt }: Props) => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const steps = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);
  const [fakeCoinStyle, setFakeCoinStyle] = useState<CSSProperties>({ top: '100%', left: '60%' });

  const moveCoin = (stopAt: number) => {
    const containerRef = boardRef.current?.getBoundingClientRect();
    const stepsRefs =
      stepRefs.current.length > 0 ? (stepRefs.current.filter(a => a) as HTMLDivElement[]) : [];
    if (containerRef && stepsRefs.length > 0) {
      let i = 0;
      let interval = setInterval(() => {
        const el = stepsRefs[i];
        const stepRef = el.getBoundingClientRect();
        setFakeCoinStyle({
          width: stepRef.width,
          top: ((stepRef.top - containerRef.top) / containerRef.height) * 100 + '%',
          left: ((stepRef.left - containerRef.left) / containerRef.width) * 100 + '%',
        });
        i++;
        if (i === stepsRefs.length || i === stopAt) {
          clearInterval(interval);
        }
      }, 500);
    }
  };

  useEffect(() => {
    if (stopAt != null) {
      moveCoin(stopAt);
    }
  }, [stopAt]);

  return (
    <div className={classes.board} ref={boardRef}>
      <div className={classes.moon} />
      {steps.map((step, i) => (
        <BoardStep key={`step_${step}`} ref={el => (stepRefs.current[i] = el)} id={step} />
      ))}
      <div className="absolute transition-base" style={fakeCoinStyle}>
        <Coin color={'teal'} />
      </div>
    </div>
  );
});

SelectionBoard.displayName = 'SelectionBoard';
export default SelectionBoard;
