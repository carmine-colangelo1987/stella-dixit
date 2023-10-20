/** @format */

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import { useMatchId } from '../../../../hooks/useMatchId';
import { deleteNewUser, resetCreatedUsersList, setPlayersList } from '../../../../store/slices/playerData';
import { AppRoutes, setMatchRoute } from '../../../../router/routes';
import Container from '../../../common/Container';
import PageTitle from '../../../common/PageTitle';
import PlayersList from '../../../common/PlayersList';
import Button from '../../../common/Button';
import { useCreatePlayersMutation } from '../../../../store/api/match';
import { useEffect } from 'react';

const CreatePlayers = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const matchId = useMatchId();
  const players = useAppSelector(s => s.playerDataReducer.createdPlayersList);
  const expectedPlayers = useAppSelector(s => s.matchDataReducer.matchData?.expected_users ?? 0);
  const [createPlayers, { data, isLoading }] = useCreatePlayersMutation();

  const removePlayer = (i: number) => {
    dispatch(deleteNewUser(i));
  };

  const onCreateNewPlayer = () => {
    navigate(AppRoutes.CREATE_NEW_PLAYER);
  };

  const onProceed = () => {
    createPlayers({ players });
  };

  useEffect(() => {
    if (data?.data && data.data.length > 0) {
      dispatch(setPlayersList(data.data));
      dispatch(resetCreatedUsersList());
      navigate(setMatchRoute(matchId), { replace: true });
    }
  }, [data?.data]);

  return (
    <>
      <Container>
        <PageTitle
          subtitle={'Creazione degli avatar'}
          description={'In questa pagina puoi creare gli avatar dei giocatori di questa partita.'}
        >
          Cercatori di Stelle
        </PageTitle>
        <div className={'space-y-6'}>
          <p className="text-center text-main-text-lighten">
            Giocatori creati {players.length}/{expectedPlayers}
          </p>
          <PlayersList players={players} onRemovePlayer={removePlayer} />
          {players.length < expectedPlayers && (
            <Button variant="secondary" className="w-full" onClick={onCreateNewPlayer}>
              Aggiungi giocatore
            </Button>
          )}
          {players.length > 1 && (
            <Button variant="secondary" onClick={onProceed} className="w-full mb-4" loading={isLoading}>
              Inizia la caccia con {players.length} cercatori!
            </Button>
          )}
        </div>
      </Container>
    </>
  );
};

export default CreatePlayers;
