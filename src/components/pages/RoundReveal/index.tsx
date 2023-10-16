/** @format */

import Container from '../../common/Container';
import StarMap from '../../common/StarMap';
import { useAppSelector } from '../../../hooks/useStore';
import { useEffect, useMemo, useState } from 'react';
import { plancia } from '../../../constants/plancia';

const RoundReveal = () => {
  const selectedCards = useAppSelector(s => s.roundDataReducer.selectedCards);
  const [revealedCards, setRevealedCards] = useState<string[]>([]);
  const [fallenAt, setFallenAt] = useState<string>();

  const onClickCardHandler = (id: string) => {
    console.log('aprire modale con id', id);
    setRevealedCards(r => r.concat(id));
  };
  useEffect(() => {
    if (revealedCards.length > 1) {
      setTimeout(() => {
        setFallenAt([...revealedCards].pop());
      }, 2000);
    }
  }, [revealedCards.length]);

  const cardsList = useMemo(() => {
    return plancia.map(id => {
      const selected = selectedCards.includes(id);
      const revealed = revealedCards.includes(id);
      return {
        id,
        selected,
        disabled: !selected,
        revealed,
        matched: !!fallenAt && revealed && fallenAt !== id,
        unmatched: !!fallenAt && revealed && fallenAt === id,
      };
    });
  }, [selectedCards, revealedCards, fallenAt]);

  return (
    <div className="overflow-hidden">
      <Container>
        <StarMap variant="REVEAL" cardsList={cardsList} onClickCardHandler={onClickCardHandler} />
      </Container>
    </div>
  );
};

export default RoundReveal;
