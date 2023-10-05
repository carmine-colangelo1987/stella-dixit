/** @format */

import PlayersList from '../CreatePlayers/partials/PlayersList';
import Container from '../../common/Container';
import PageTitle from '../../common/PageTitle';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { setPlayer } from '../../../store/slices/playerData';
import { useLazyGetPlayersListQuery, useLazyPairUserQuery } from '../../../store/api/match';
import { useEffect } from 'react';

const SelectPlayer = () => {
  const dispatch = useAppDispatch();
  const clientId = useAppSelector(s => s.clientId);
  const [getPlayersListData, { data }] = useLazyGetPlayersListQuery();
  const [pairUser] = useLazyPairUserQuery();
  const players = data?.data || [];

  useEffect(() => {
    getPlayersListData();
  }, []);

  const onPlayerSelected = (i: number) => {
    const player = players[i];
    if (!player.paired) {
      const confirmed = window.confirm(`Confermi di voler iniziare la partita con l'utente ${player.name}?`);
      if (confirmed) {
        pairUser({ clientId, userId: player.id }).then(response => {
          console.log('pairUser', { response });
          getPlayersListData();
          dispatch(setPlayer(players[i]));
        });
      } else {
        console.log('Utente non confermato', player, clientId);
      }
    }
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
