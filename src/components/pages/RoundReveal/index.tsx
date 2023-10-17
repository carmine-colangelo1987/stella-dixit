/** @format */

import Container from '../../common/Container';
import StarMap from '../../common/StarMap';
import { useAppSelector } from '../../../hooks/useStore';
import { useMemo, useState } from 'react';
import { plancia } from '../../../constants/plancia';
import Button from '../../common/Button';

const RoundReveal = () => {
  const selectedCards = useAppSelector(s => s.roundDataReducer.selectedCards);
  const revealedCard = useAppSelector(s => s.roundDataReducer.currentRevealedCard);
  const revealedCards = useAppSelector(s => s.roundDataReducer.revealedCards);
  const matchedCards = useAppSelector(s => s.roundDataReducer.matchedCards);

  const [fallenAt] = useState<string>();

  const onClickCardHandler = (id: string) => {
    console.log('aprire modale con id', id);
  };

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

  return (
    <div className="overflow-hidden">
      <Container>
        <p className="text-center mb-4">Seleziona la carta da rivelare!</p>
        <StarMap variant="REVEAL" cardsList={cardsList} onClickCardHandler={onClickCardHandler} />
      </Container>
      {revealedCard && (
        <div className="rounded-t-md bg-white shadow-xl text-center border border-neutral p-4 mx-4">
          <p>Dichiari la carta?</p>
          <section className="flex gap-4 w-full">
            <Button variant="primary" className="flex-1">
              si
            </Button>
            <Button variant="primary" className="flex-1">
              no
            </Button>
          </section>
        </div>
      )}
    </div>
  );
};

export default RoundReveal;
