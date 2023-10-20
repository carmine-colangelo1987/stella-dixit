/** @format */

import Container from '../../../common/Container';
import StarMap from '../../../common/StarMap';
import { useRoundSelectedCard } from '../../../../hooks/useRoundSelectedCard';
import { useEffect, useMemo } from 'react';
import { plancia } from '../../../../constants/plancia';
import PageTitle from '../../../common/PageTitle';
import { useSetSelectedCardsMutation } from '../../../../store/api/match';
import { useMatchId } from '../../../../hooks/useMatchId';
import { useAppSelector } from '../../../../hooks/useStore';
import Button from '../../../common/Button';

const RoundAssociation = () => {
  const matchId = useMatchId();
  const userId = useAppSelector(s => s.playerDataReducer.userId);
  const [selectedCards, onToggleCard] = useRoundSelectedCard();
  const [setSelectedCards, { isLoading, data }] = useSetSelectedCardsMutation();

  const totalSelected = selectedCards.length;
  const counter = totalSelected === 1 ? 'carta' : 'carte';

  const cardsList = useMemo(() => {
    return plancia.map(id => {
      const selected = selectedCards.includes(id);
      return {
        id,
        selected,
        disabled: !selected && selectedCards.length >= 10,
      };
    });
  }, [selectedCards]);

  const onConfirmSelectedCards = () => {
    if (!userId) {
      throw new Error('Attenzione manca lo userId');
    }
    const confirmed = window.confirm(`Hai selezionato ${totalSelected} ${counter}. Confermi?`);
    if (confirmed) {
      setSelectedCards({ matchId, userId, selected: selectedCards });
    }
  };

  useEffect(() => {
    if (data?.data) {
      console.log(data.data);
    }
  }, [data?.data]);

  return (
    <Container className="relative pt-8">
      <PageTitle>Associare</PageTitle>
      <p className="text-center">
        Hai selezionato {totalSelected} {counter}
        <small className="text-sm block text-slate-400">non puoi selezionare più di 10 carte!</small>
      </p>
      <StarMap cardsList={cardsList} onClickCardHandler={onToggleCard} />
      {totalSelected > 0 && (
        <Button onClick={onConfirmSelectedCards} loading={isLoading}>
          Conferma le carte
        </Button>
      )}
    </Container>
  );
};

export default RoundAssociation;
