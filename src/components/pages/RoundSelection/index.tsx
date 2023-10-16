/** @format */

import Container from '../../common/Container';
import StarMap from '../../common/StarMap';
import { useRoundSelectedCard } from '../../../hooks/useRoundSelectedCard';
import { useMemo } from 'react';
import { plancia } from '../../../constants/plancia';

const RoundSelection = () => {
  const [selectedCards, onToggleCard] = useRoundSelectedCard();
  const counter = selectedCards.length === 1 ? 'carta' : 'carte';
  const cardsList = useMemo(() => {
    return plancia.map(id => {
      const selected = selectedCards.includes(id);
      return {
        id,
        selected,
        disabled: !selected,
      };
    });
  }, [selectedCards]);
  return (
    <div className="overflow-hidden">
      <Container>
        <p className="text-center">
          Hai selezionato {selectedCards.length} {counter}
          <small className="text-sm block text-slate-400">non puoi selezionare più di 10 carte!</small>
        </p>
        <StarMap cardsList={cardsList} onClickCardHandler={onToggleCard} />
      </Container>
    </div>
  );
};

export default RoundSelection;
