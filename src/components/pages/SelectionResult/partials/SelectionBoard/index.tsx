/** @format */

import { CSSProperties, memo, useEffect, useMemo, useRef, useState } from 'react';
import BoardStep from '../BoardStep';
import classes from './selectionBoard.module.scss';
import Coin from '../../../../common/Coin';

type Props = {
  stopAt?: number;
};

const STEPS = 10;
const steps = Array.from({ length: STEPS }, (_, i) => i + 1);
const coins = [
  {
    selected: 6,
    color: 'teal',
  },
  {
    selected: 5,
    color: 'red',
  },
  {
    selected: 4,
    color: 'purple',
  },
  {
    selected: 5,
    color: 'slate',
  },
  {
    selected: 2,
    color: 'cyan',
  },
  {
    selected: 7,
    color: 'yellow',
  },
  {
    selected: 5,
    color: 'orange',
  },
];

const SelectionBoard = memo(({ stopAt }: Props) => {
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const [coinPosition, setCoinPosition] = useState<CSSProperties>({ top: '100%', left: '60%' });

  const getCoordinates = (step: number) => {
    const parent = boardRef.current as HTMLDivElement;
    const child = stepRefs.current[step];
    return {
      width: child.clientWidth,
      y: (child.offsetTop / parent.clientHeight) * 100 + '%',
      x: (child.offsetLeft / parent.clientWidth) * 100 + '%',
    };
  };

  const _coins = useMemo(() => {
    if (!stopAt) {
      return [];
    }
    const c = [...coins];
    return c
      .filter((_, i) => i > 0)
      .sort((a, b) => a.selected - b.selected)
      .map(coin => {
        const coord = getCoordinates(coin.selected);
        return {
          ...coin,
          width: coord.width,
          top: coord.y,
          left: coord.x,
        };
      });
  }, [stopAt]);

  const moveCoin = (stopAt: number) => {
    if (stepRefs.current.length > 0) {
      let i = 0;
      let interval = setInterval(() => {
        const a = getCoordinates(i);
        if (a) {
          setCoinPosition({
            width: a.width,
            top: a.y,
            left: a.x,
          });
        }
        i++;
        if (i === stepRefs.current.length || i === stopAt) {
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
        <BoardStep key={`step_${step}`} ref={el => (stepRefs.current[i] = el as HTMLDivElement)} id={step} />
      ))}
      <div className="absolute transition-base" style={coinPosition}>
        <Coin color={'teal'} />
      </div>
      {_coins.map(({ color, selected, ...style }) => {
        return (
          <div key={color + selected} className="absolute transition-base" style={style}>
            <Coin color={color} />
          </div>
        );
      })}
    </div>
  );
});

SelectionBoard.displayName = 'SelectionBoard';
export default SelectionBoard;
