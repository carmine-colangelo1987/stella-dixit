/** @format */

import PlayersList from '../CreatePlayers/partials/PlayersList';
import Container from '../../common/Container';
import { useMemo } from 'react';
import { Player } from '../../../types';
import PageTitle from '../../common/PageTitle';

type Props = {};

const SelectPlayer = (props: Props) => {
  const players = useMemo<Player[]>(
    () => [
      {
        id: 'aaa',
        name: 'mino',
        color: 'teal',
        points: 0,
      },
      {
        id: 'bbb',
        name: 'elisa',
        color: 'neutral',
        points: 0,
      },
    ],
    [],
  );

  const onPlayerSelected = (i: number) => {
    console.log('hai selezionato ', players[i]);
  };

  return (
    <Container>
      <PageTitle
        subtitle={'Selezione del giocatore'}
        description={'Clicca sul tuo nome o il tuo nickname per iniziare la partita!'}
      >
        Cercatori di Stelle
      </PageTitle>
      <PlayersList players={players} onPlayerSelected={onPlayerSelected} />
    </Container>
  );
};

export default SelectPlayer;
