/** @format */

import { useMemo, useState } from 'react';
import { Player } from '../../../types';
import PageTitle from '../../common/PageTitle';
import { tailwindColorList } from '../../../utils/tailwindColors';
import InsertNewPlayer from './partials/InsertNewPlayer';
import Container from '../../common/Container';
import PlayersList from './partials/PlayersList';
import Button from '../../common/Button';

type Props = {};

export type CreationPlayer = Pick<Player, 'name' | 'color' | 'paired'>;

const CreatePlayers = (props: Props) => {
  const [players, setPlayers] = useState<Array<CreationPlayer>>([]);

  const availableColors = useMemo(() => {
    if (players.length > 0) {
      return tailwindColorList.filter(baseColor => !players.find(({ color }) => color === baseColor));
    }
    return tailwindColorList;
  }, [players]);

  const addPlayer = (p: CreationPlayer) => {
    setPlayers(prevP => prevP.concat(p));
  };

  const removePlayer = (i: number) => {
    setPlayers(prevP => prevP.filter((p, j) => j !== i));
  };

  const onProceed = () => {};

  const text =
    players.length === 0
      ? 'Nessun giocatore creato...'
      : players.length === 1
      ? `Hai creato un giocatore`
      : `Hai creato ${players.length} giocatori!`;

  return (
    <>
      <Container>
        <PageTitle
          subtitle={'Creazione degli avatar'}
          description={'In questa pagina puoi creare gli avatar dei giocatori di questa partita.'}
        >
          Cercatori di Stelle
        </PageTitle>
      </Container>

      <InsertNewPlayer availableColors={availableColors} addPlayer={addPlayer} />
      <Container className="py-4">
        <p className="text-center text-main-text-lighten">{text}</p>
        {players.length > 0 && <PlayersList players={players} onRemovePlayer={removePlayer} />}
        {players.length > 1 && (
          <Button variant="secondary" onClick={onProceed} className="w-full mb-4">
            Inizia la caccia con {players.length} cercatori!
          </Button>
        )}
      </Container>
    </>
  );
};

export default CreatePlayers;
