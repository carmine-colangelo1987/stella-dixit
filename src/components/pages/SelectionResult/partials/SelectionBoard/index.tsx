/** @format */

import { Fragment, memo, useEffect, useMemo, useRef, useState } from 'react';
import BoardStep from '../BoardStep';
import classes from './selectionBoard.module.scss';
import Coin from '../../../../common/Coin';
import { usePlayerSelectedCardList } from '../../../../../hooks/usePlayerSelectedCardList';
import { useMatchId } from '../../../../../hooks/useMatchId';
import { useAppSelector } from '../../../../../hooks/useStore';
import classNames from 'classnames';

type Props = {
  start?: boolean;
};

const STEPS = 10;
const steps = Array.from({ length: STEPS }, (_, i) => i + 1);

const SelectionBoard = memo(({ start }: Props) => {
  const matchId = useMatchId();
  const userId = useAppSelector(s => s.playerDataReducer.userId);
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const { pawns, userSteps } = usePlayerSelectedCardList(matchId);
  const [userCoinStep, setUserCoinStep] = useState<number>();
  const [animationComplete, setAnimationComplete] = useState(false);

  const getCoordinates = (step: number) => {
    const parent = boardRef.current as HTMLDivElement;
    const child = stepRefs.current[step];
    return {
      y: (child.offsetTop / parent.clientHeight) * 100 + '%',
      x: (child.offsetLeft / parent.clientWidth) * 100 + '%',
    };
  };

  const playersCoins = useMemo(() => {
    return pawns.map(user => {
      if (user.userId === userId && userCoinStep == null) {
        return {
          ...user,
          top: '100%',
          left: '60%',
        };
      }
      const step = user.total_selected_cards - 1;
      const coord = getCoordinates(user.userId === userId ? (userCoinStep as number) : step);
      return {
        ...user,
        top: coord.y,
        left: coord.x,
      };
    });
  }, [pawns, userCoinStep, userId]);

  const onCompleteAnimationDelay = () => {
    setTimeout(() => {
      setAnimationComplete(true);
    }, 500);
  };

  const moveCoin = (stopAt: number) => {
    if (stepRefs.current.length > 0) {
      let interval = setInterval(() => {
        setUserCoinStep(prevStep => {
          const nextStep = (prevStep == null ? -1 : prevStep) + 1;
          if (nextStep === stepRefs.current.length || nextStep === stopAt) {
            clearInterval(interval);
            onCompleteAnimationDelay();
            return prevStep;
          }
          return nextStep;
        });
      }, 500);
    }
  };

  useEffect(() => {
    if (start && userSteps) {
      moveCoin(userSteps);
    }
  }, [start, userSteps]);

  const stepNodes = useMemo(
    () =>
      steps.map((step, i) => (
        <div key={`step_${step}`} className={classNames(classes.step, `step_${step}`)}>
          <BoardStep ref={el => (stepRefs.current[i] = el as HTMLDivElement)} id={step} />
        </div>
      )),
    [],
  );

  return (
    <>
      <div className={classNames(classes.board, { ready: animationComplete })} ref={boardRef}>
        {stepNodes}
        <aside>
          <div className={classes.moon} />
          {playersCoins.map(
            ({ userId: playerId, name, color, total_selected_cards, dark, ...style }, i, list) => {
              const separate = i > 0 ? list[i - 1].total_selected_cards !== total_selected_cards : false;
              const playerCoin = playerId === userId;
              return (
                <Fragment key={playerId}>
                  {separate && <hr className="hidden" />}
                  <div className={classNames(classes.coin, { playerCoin })} title={name} style={style}>
                    <Coin color={color as string} dark={animationComplete && dark} />
                  </div>
                </Fragment>
              );
            },
          )}
        </aside>
      </div>
    </>
  );
});

SelectionBoard.displayName = 'SelectionBoard';
export default SelectionBoard;