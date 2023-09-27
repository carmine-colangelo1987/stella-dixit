/** @format */
import { useState } from 'react';
import { useLazyCreateNewMatchQuery } from '../../../store/api/match';
import { tailwindColorList, tailwindColorTones } from '../../../utils/tailwindColors';

console.log(tailwindColorList, tailwindColorTones);
const NewMatch = () => {
  const matchDay = new Intl.DateTimeFormat('it-IT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
  const [title, setTitle] = useState(`Partita del ${matchDay}`);
  const [players, setPlayers] = useState<number>(2);
  const [rounds, setRounds] = useState<number>(4);

  const [createNewMatchHandle] = useLazyCreateNewMatchQuery();

  const onCreateNewMatch = () => {
    if (title && players >= 2 && rounds >= 4) {
      createNewMatchHandle({ title, expected_users: players, total_rounds: rounds }).then(r =>
        console.log(r),
      );
    }
  };

  return (
    <div className="space-y-4">
      <h1>Nuova Partita</h1>
      <section>
        <label className="block mb-2" htmlFor="title">
          Inserisci il titolo della nuova partita
        </label>
        <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </section>

      <div>
        <label className="block mb-2" htmlFor="expected_users">
          Inserisci il numero di partecipanti
        </label>
        <input
          id="expected_users"
          type="number"
          min={2}
          max={20}
          value={players}
          onChange={e => setPlayers(+e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-2" htmlFor="total_rounds">
          Inserisci il numero di round
        </label>
        <input
          id="total_rounds"
          type="number"
          min={4}
          step={2}
          max={16}
          value={rounds}
          onChange={e => setRounds(+e.target.value)}
        />
      </div>

      <button onClick={onCreateNewMatch}>Procedi</button>
    </div>
  );
};

export default NewMatch;
