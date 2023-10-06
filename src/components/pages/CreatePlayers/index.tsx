/** @format */

import { useMemo } from 'react';
import { CreationPlayer } from '../../../types';
import PageTitle from '../../common/PageTitle';
import { tailwindColorList } from '../../../utils/tailwindColors';
import InsertNewPlayer from './partials/InsertNewPlayer';
import Container from '../../common/Container';
import PlayersList from './partials/PlayersList';
import Button from '../../common/Button';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../router/routes';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { addNewUser, deleteNewUser } from '../../../store/slices/playerData';

const CreatePlayers = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const players = useAppSelector(s => s.playerDataReducer.createdPlayersList);
  const expectedPlayers = useAppSelector(s => s.matchDataReducer.matchData?.expected_users);

  const availableColors = useMemo(() => {
    if (players.length > 0) {
      return tailwindColorList.filter(baseColor => !players.find(({ color }) => color === baseColor));
    }
    return tailwindColorList;
  }, [players]);

  const addPlayer = (p: CreationPlayer) => {
    dispatch(addNewUser(p));
  };

  const removePlayer = (i: number) => {
    dispatch(deleteNewUser(i));
  };

  const onProceed = () => {
    // todo fare la mutation per inserire i players
    navigate(AppRoutes.CURRENT_MATCH);
  };

  const ready = players.length === expectedPlayers;

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

      <Container className="py-4">
        <p className="text-center text-main-text-lighten">
          Giocatori creati {players.length}/{expectedPlayers}
        </p>
        {players.length > 0 && <PlayersList players={players} onRemovePlayer={removePlayer} />}
      </Container>

      {!ready && <InsertNewPlayer availableColors={availableColors} addPlayer={addPlayer} />}

      <Container className="py-4">
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
