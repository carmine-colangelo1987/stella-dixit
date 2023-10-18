/** @format */

import Container from '../../common/Container';
import StarMap from '../../common/StarMap';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { useEffect, useMemo, useState } from 'react';
import { plancia } from '../../../constants/plancia';
import { setCurrentRevealedCard } from '../../../store/slices/roundData';
import RevelationModal from './partials/RevelationModal';

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

const RoundReveal = () => {
  const dispatch = useAppDispatch();
  const selectedCards = useAppSelector(s => s.roundDataReducer.selectedCards);
  const revealedCard = useAppSelector(s => s.roundDataReducer.currentRevealedCard);
  const revealedCards = useAppSelector(s => s.roundDataReducer.revealedCards);
  const matchedCards = useAppSelector(s => s.roundDataReducer.matchedCards);
  const fallenAt = useAppSelector(s => s.roundDataReducer.fallenCard);
  const dark = useAppSelector(s => s.roundDataReducer.dark);
  const [alertToShow, setAlertToShow] = useState<string | undefined>();

  const onClickCardHandler = (id: string) => {
    dispatch(setCurrentRevealedCard(id));
  };

  useEffect(() => {
    if (matchedCards.length > 0) {
      const exclamationIndex = selectedCards.length === matchedCards.length ? 9 : matchedCards.length - 1;
      setAlertToShow(frasiOk[exclamationIndex]);
      setTimeout(() => {
        setAlertToShow('');
      }, 2000);
    }
  }, [matchedCards]);

  useEffect(() => {
    if (fallenAt) {
      setAlertToShow('Accidenti! Il tuo cercatore è caduto!');
      setTimeout(() => {
        setAlertToShow('');
      }, 3000);
    }
  }, [fallenAt]);

  const cardsList = useMemo(() => {
    return plancia.map(id => {
      const selected = selectedCards.includes(id);
      const revealed = revealedCards.includes(id);
      const matched = matchedCards.find(match => id === match.id) || undefined;
      return {
        id,
        selected,
        disabled: !selected,
        revealed,
        matched: matched,
      };
    });
  }, [selectedCards, revealedCards, matchedCards, fallenAt]);

  const hint = fallenAt
    ? 'Peccato! Il tuo cercatore è caduto!'
    : dark
    ? 'Fa attenzione, che il tuo cercatore è nel "buio"!'
    : undefined;

  return (
    <Container className="relative pt-8">
      <p className="text-center mb-4">
        Clicca sulla carta che vuoi rivelare agli altri cercatori!
        <small className="text-sm block text-slate-400">
          Rivela prima le carte che credi abbiano scelto anche gli altri cercatori!
        </small>
        {hint && <small className="text-sm block text-slate-400">{hint}</small>}
      </p>
      <p className="text-center mb-4">
        {matchedCards.length}/{selectedCards.length}
      </p>
      {alertToShow && <div className="text-3xl font-bold">{alertToShow}</div>}
      <div className="overflow-hidden">
        <StarMap variant="REVEAL" cardsList={cardsList} onClickCardHandler={onClickCardHandler} />
      </div>
      {revealedCard && <RevelationModal revealedCard={revealedCard} />}
    </Container>
  );
};

export default RoundReveal;
