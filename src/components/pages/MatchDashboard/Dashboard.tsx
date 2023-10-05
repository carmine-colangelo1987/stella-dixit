/** @format */

import { memo } from 'react';
import Container from '../../common/Container';
import PageTitle from '../../common/PageTitle';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useStore';
import { AppRoutes } from '../../../router/routes';

type Props = {};

const Dashboard = memo((props: Props) => {
  const data = useAppSelector(s => s.matchDataReducer.matchData);
  return (
    <Container>
      <PageTitle>{data ? data.matchTitle : 'Partita'}</PageTitle>
      <ul>
        <li>
          <Link to={AppRoutes.CREATE_PLAYERS}>Crea Cercatori</Link>
        </li>
        <li>
          <Link to={AppRoutes.SELECT_PLAYER}>Seleziona Cercatori</Link>
        </li>
      </ul>
    </Container>
  );
});

Dashboard.displayName = 'Dashboard';
export default Dashboard;
