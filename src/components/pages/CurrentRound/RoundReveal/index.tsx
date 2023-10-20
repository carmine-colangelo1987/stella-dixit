/** @format */

import Container from '../../../common/Container';
import StarMap from '../../../common/StarMap';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import { useMemo } from 'react';
import { plancia } from '../../../../constants/plancia';
import { setCurrentRevealedCard } from '../../../../store/slices/roundData';
import RevelationModal from './partials/RevelationModal';
import PageTitle from '../../../common/PageTitle';

const RoundReveal = () => {
  const dispatch = useAppDispatch();
  const selectedCards = useAppSelector(s => s.roundDataReducer.selectedCards);
  const revealedCard = useAppSelector(s => s.roundDataReducer.currentRevealedCard);
  const matchedCards = useAppSelector(s => s.roundDataReducer.matchedCards);
  const fallenAt = useAppSelector(s => s.roundDataReducer.fallenCard);
  const dark = useAppSelector(s => s.roundDataReducer.dark);

  const onClickCardHandler = (id: string) => {
    dispatch(setCurrentRevealedCard(id));
  };

  const cardsList = useMemo(() => {
    return plancia.map(id => {
      const selected = selectedCards.includes(id);
      const matched = matchedCards.find(match => id === match.id) || undefined;
      return {
        id,
        selected,
        disabled: !selected,
        matched,
        revealed: !!matched || fallenAt === id,
      };
    });
  }, [selectedCards, matchedCards, fallenAt]);

  const hint = fallenAt
    ? 'Peccato! Il tuo cercatore è caduto!'
    : dark
    ? 'Fa attenzione, che il tuo cercatore è nel "buio"!'
    : undefined;

  return (
    <Container className="relative pt-8">
      <PageTitle>Rivelare</PageTitle>
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
      <div className="overflow-hidden">
        <StarMap variant="REVEAL" cardsList={cardsList} onClickCardHandler={onClickCardHandler} />
      </div>
      {revealedCard && <RevelationModal revealedCard={revealedCard} />}
    </Container>
  );
};

export default RoundReveal;
