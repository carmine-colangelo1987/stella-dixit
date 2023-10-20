/** @format */

import PlayersList from '../../../common/PlayersList';
import Container from '../../../common/Container';
import PageTitle from '../../../common/PageTitle';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import { setPlayer } from '../../../../store/slices/playerData';
import { useLazyGetPlayersListQuery, usePairUserMutation } from '../../../../store/api/match';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setRoundRoute } from '../../../../router/routes';
import { useMatchId } from '../../../../hooks/useMatchId';
import Loader from '../../../common/Loader';

const SelectPlayer = () => {
  const navigate = useNavigate();
  const matchId = useMatchId();
  const dispatch = useAppDispatch();
  const clientId = useAppSelector(s => s.clientId);
  const [getPlayersListData, { data, isLoading: isUpdatingPlayersList }] = useLazyGetPlayersListQuery();
  const [pairUser, { isLoading: isPairing }] = usePairUserMutation();
  const players = data?.data || [];
  const loading = isUpdatingPlayersList || isPairing;

  useEffect(() => {
    getPlayersListData();
  }, []);

  const onPlayerSelected = (i: number) => {
    const player = players[i];
    if (!player.paired) {
      const confirmed = window.confirm(`Confermi di voler iniziare la partita con l'utente ${player.name}?`);
      if (confirmed) {
        pairUser({ clientId, userId: player.id }).then(() => {
          dispatch(setPlayer(player));
          getPlayersListData();
          navigate(setRoundRoute(matchId), { replace: true });
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
      {loading && <Loader />}
      <PlayersList players={players} onPlayerSelected={onPlayerSelected} />
    </Container>
  );
};

export default SelectPlayer;
