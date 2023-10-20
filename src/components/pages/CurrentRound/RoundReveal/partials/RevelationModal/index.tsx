/** @format */

import { memo, useEffect, useState } from 'react';
import {
  removeCurrentRevealedCard,
  setFallen,
  setMatchedCard,
} from '../../../../../../store/slices/roundData';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/useStore';
import Button from '../../../../../common/Button';
import classNames from 'classnames';
import classes from './revelationModal.module.scss';
import { useSetFallenMutation, useSetMatchCardMutation } from '../../../../../../store/api/match';
import { useMatchId } from '../../../../../../hooks/useMatchId';
import { toast } from 'react-toastify';

type Props = {
  revealedCard: string;
};
const frasiOk = [
  'Ok!',
  'Bene!',
  'Molto bene!',
  'Wow!',
  'Continua così!',
  'Ottimo!',
  'Incredibile!!',
  'Ehi ma come fai??!',
  'Sei un veggente!!',
  'Perfetto!',
];

const RevelationModal = memo(({ revealedCard }: Props) => {
  const dispatch = useAppDispatch();
  const matchId = useMatchId();
  const userId = useAppSelector(s => s.playerDataReducer.userId);
  const allSelected = useAppSelector(s => s.roundDataReducer.selectedCards.length);
  const allMatched = useAppSelector(s => s.roundDataReducer.matchedCards.length);
  const completed = allSelected === allMatched;
  const [visible, setVisible] = useState(false);
  const [setMatchMutation, { isSuccess: isSparkSuccess }] = useSetMatchCardMutation();
  const [setFallenMutation, { isSuccess: isFallen }] = useSetFallenMutation();

  useEffect(() => {
    if (isSparkSuccess) {
      const exclamationIndex = completed ? 9 : allMatched - 1;
      toast.success(frasiOk[exclamationIndex]);
      animateClosure();
    }
  }, [isSparkSuccess, completed, allMatched]);

  useEffect(() => {
    if (isFallen) {
      toast.warn('Accidenti! Il tuo cercatore è caduto!');
      animateClosure();
    }
  }, [isFallen]);

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
    if (confirmed && userId) {
      await setMatchMutation({ matchId, userId, match: { id: revealedCard, isSuperSpark } });
      dispatch(setMatchedCard({ id: revealedCard, isSuperSpark }));
    }
  };

  const onFall = async () => {
    const confirmed = window.confirm('Confermi di essere caduto?');
    if (confirmed && userId) {
      await setFallenMutation({ matchId, userId });
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
