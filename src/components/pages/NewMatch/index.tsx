/** @format */
import { useState } from 'react';
import { useLazyCreateNewMatchQuery } from '../../../store/api/match';
import PageTitle from '../../common/PageTitle';
import Container from '../../common/Container';
import FormInput from '../../common/FormInput';
import Button from '../../common/Button';
import { useNavigate } from 'react-router-dom';
import { setMatchRoute } from '../../../router/routes';

const NewMatch = () => {
  const matchDay = new Intl.DateTimeFormat('it-IT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());

  const navigate = useNavigate();
  const [title, setTitle] = useState(`Partita del ${matchDay}`);
  const [players, setPlayers] = useState<number>(2);
  const [rounds, setRounds] = useState<number>(4);

  const [createNewMatchHandle] = useLazyCreateNewMatchQuery();

  const onCreateNewMatch = () => {
    if (title && players >= 2 && rounds >= 4) {
      createNewMatchHandle({ title, expected_users: players, total_rounds: rounds }).then(r => {
        const matchId = r.data?.data;
        if (matchId) {
          navigate(setMatchRoute(matchId));
        }
      });
    }
  };

  return (
    <Container className="space-y-4">
      <PageTitle>Nuova Partita</PageTitle>
      <section>
        <FormInput
          id="title"
          type="text"
          label={'Inserisci il titolo della nuova partita'}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </section>

      <section>
        <FormInput
          label={'Inserisci il numero di partecipanti'}
          id="expected_users"
          type="number"
          min={2}
          max={20}
          value={players}
          onChange={e => setPlayers(+e.target.value)}
        />
      </section>

      <section>
        <FormInput
          label={'Inserisci il numero di round'}
          id="total_rounds"
          type="number"
          min={4}
          step={2}
          max={16}
          value={rounds}
          onChange={e => setRounds(+e.target.value)}
        />
      </section>

      <Button onClick={onCreateNewMatch}>Procedi</Button>
    </Container>
  );
};

export default NewMatch;
