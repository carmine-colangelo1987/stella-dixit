/** @format */

import { useMemo, useState } from 'react';
import { Player } from '../../../types';
import PageTitle from '../../common/PageTitle';
import { tailwindColorList } from '../../../utils/tailwindColors';
import InsertNewPlayer from './partials/InsertNewPlayer';
import Container from '../../common/Container';
import PlayersList from './partials/PlayersList';

type Props = {};

export type CreationPlayer = Pick<Player, 'name' | 'color'>;

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
      <Container>
        <PlayersList players={players} onRemovePlayer={removePlayer} />
      </Container>
    </>
  );
};

export default CreatePlayers;
