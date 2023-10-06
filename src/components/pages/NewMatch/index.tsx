/** @format */
import { useState } from 'react';
import { useLazyCreateNewMatchQuery } from '../../../store/api/match';
import PageTitle from '../../common/PageTitle';
import Container from '../../common/Container';
import FormInput from '../../common/FormInput';
import Button from '../../common/Button';
import { useNavigate } from 'react-router-dom';
import { setMatchRoute } from '../../../router/routes';
import RadioSelect from '../../common/RadioSelect';

const userOptions = Array.from({ length: 17 }, (_, i) => ({ id: 'users' + i, value: 2 + i }));
const roundOptions = Array.from({ length: 5 }, (_, i) => ({ id: 'rounds_' + i, value: 4 + i * 2 }));

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
        <div className="mb-2">Numero di cacciatori di stelle</div>
        <RadioSelect
          name={'expected_users'}
          options={userOptions}
          onChange={o => setPlayers(o.value as number)}
        />
      </section>

      <section>
        <div className="mb-2">Numero di turni</div>
        <RadioSelect
          name={'total_rounds'}
          options={roundOptions}
          onChange={o => setRounds(o.value as number)}
        />
      </section>

      <Button onClick={onCreateNewMatch}>Procedi</Button>
    </Container>
  );
};

export default NewMatch;
