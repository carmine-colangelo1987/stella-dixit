/** @format */

import { memo, useEffect, useState } from 'react';
import {
  removeCurrentRevealedCard,
  setFallen,
  setMatchedCard,
} from '../../../../../../store/slices/roundData';
import { useAppDispatch } from '../../../../../../hooks/useStore';
import Button from '../../../../../common/Button';
import classNames from 'classnames';
import classes from './revelationModal.module.scss';

type Props = {
  revealedCard: string;
};

const RevelationModal = memo(({ revealedCard }: Props) => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);

  const animateClosure = () =>
    new Promise(resolve => {
      setVisible(false);

      setTimeout(() => {
        resolve(true);
      }, 500);
    });

  const onSpark = async (isSuperSpark: boolean = false) => {
    const confirmed = window.confirm(
      `Confermi di aver trovato una ${isSuperSpark ? 'Super' : ''} Scintilla?`,
    );
    if (confirmed) {
      await animateClosure();
      dispatch(setMatchedCard({ id: revealedCard, isSuperSpark }));
    }
  };

  const onFall = async () => {
    const confirmed = window.confirm('Confermi di essere caduto?');
    if (confirmed) {
      await animateClosure();
      dispatch(setFallen(true));
    }
  };

  const onReset = async () => {
    await animateClosure();
    dispatch(removeCurrentRevealedCard());
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 500);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <>
      <div className="absolute z-[1000] inset-0" />
      <div
        className={classNames(
          classes.modal,
          { 'translate-y-[100%]': !visible },
          { 'translate-y-[0]': visible },
        )}
      >
        <section className="flex flex-col gap-4 w-full">
          <Button variant="primary" className="flex-1" onClick={() => onSpark()}>
            Scintilla!
          </Button>
          <Button variant="primary" className="flex-1" onClick={() => onSpark(true)}>
            Super Scintilla!
          </Button>
          <Button variant="secondary" className="flex-1" onClick={() => onFall()}>
            Sono caduto!
          </Button>
          <Button variant="neutral" className="flex-1" onClick={() => onReset()}>
            Annulla
          </Button>
        </section>
      </div>
    </>
  );
});

RevelationModal.displayName = 'RevelationModal';
export default RevelationModal;
