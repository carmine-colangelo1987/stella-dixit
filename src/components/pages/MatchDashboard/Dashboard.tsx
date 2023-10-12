/** @format */

import { memo } from 'react';
import Container from '../../common/Container';
import PageTitle from '../../common/PageTitle';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useStore';
import { AppRoutes, setRoundRoute } from '../../../router/routes';
import Button from '../../common/Button';
import Icon from '../../common/Icon';
import { useMatchId } from '../../../hooks/useMatchId';

type Props = {};

const Dashboard = memo((props: Props) => {
  const matchId = useMatchId();
  const matchData = useAppSelector(s => s.matchDataReducer.matchData);
  const playerData = useAppSelector(s => s.playerDataReducer.player);
  const roundRoute = setRoundRoute(matchId);
  const matchTitle = matchData?.matchTitle || 'Partita';
  const currentRound = matchData?.currentRoundName;
  const showCreatePlayers = matchData?.total_users !== matchData?.expected_users;
  const showSelectPlayer = !showCreatePlayers && !playerData;
  return (
    <Container>
      <PageTitle>{matchTitle}</PageTitle>
      <div className="flex flex-col space-y-4 min-h-[60vh] justify-center">
        {currentRound && (
          <Link to={roundRoute}>
            <Button variant="primary" className="w-full">
              <Icon icon={'flag-checkered'} className={'mr-2'} /> {currentRound}
            </Button>
          </Link>
        )}
        {showCreatePlayers && (
          <Link to={AppRoutes.CREATE_PLAYERS}>
            <Button variant="primary" className="w-full">
              <Icon icon={'flag-checkered'} className={'mr-2'} /> Crea Cercatori
            </Button>
          </Link>
        )}
        {showSelectPlayer && (
          <Link to={AppRoutes.SELECT_PLAYER}>
            <Button variant="primary" className="w-full">
              <Icon icon={'flag-checkered'} className={'mr-2'} /> Seleziona Cercatori
            </Button>
          </Link>
        )}
      </div>
    </Container>
  );
});

Dashboard.displayName = 'Dashboard';
export default Dashboard;
