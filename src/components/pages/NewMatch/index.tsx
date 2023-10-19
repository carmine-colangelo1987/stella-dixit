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
import { TOption } from '../../../types';

const userOptions: Array<TOption<number>> = Array.from({ length: 15 }, (_, i) => ({
  id: 'users' + i,
  value: 2 + i,
}));
const roundOptions: Array<TOption<number>> = Array.from({ length: 5 }, (_, i) => ({
  id: 'rounds_' + i,
  value: 4 + i * 2,
}));

const NewMatch = () => {
  const matchDay = new Intl.DateTimeFormat('it-IT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());

  const navigate = useNavigate();
  const [title, setTitle] = useState('');
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
    <Container className="space-y-8">
      <PageTitle>Nuova Partita</PageTitle>
      <article className="space-y-6 text-center">
        <section>
          <FormInput
            id="title"
            type="text"
            label={'Inserisci il titolo della nuova partita'}
            value={title}
            placeholder={`Partita del ${matchDay}`}
            onChange={e => setTitle(e.target.value)}
          />
        </section>

        <section>
          <div className="max-w-[320px] mx-auto">
            <RadioSelect<number>
              label="Numero di cacciatori di stelle"
              name={'expected_users'}
              options={userOptions}
              onChange={o => setPlayers(o.value)}
            />
          </div>
        </section>

        <section>
          <div className="max-w-[320px] mx-auto">
            <RadioSelect<number>
              label="Numero di turni"
              name={'total_rounds'}
              options={roundOptions}
              onChange={o => setRounds(o.value)}
            />
          </div>
        </section>
      </article>
      <Button className="w-full" onClick={onCreateNewMatch}>
        Procedi
      </Button>
    </Container>
  );
};

export default NewMatch;
