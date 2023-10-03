/** @format */

import { Outlet, useParams } from 'react-router-dom';
import Container from '../../common/Container';
import PageTitle from '../../common/PageTitle';
import { useLazyGetMatchDataQuery } from '../../../store/api/match';
import { useEffect, useState } from 'react';
import { MatchData } from '../../../types';

const MatchDashboard = () => {
  const param = useParams<{ matchId: string }>();
  const [getMatchData, { isLoading }] = useLazyGetMatchDataQuery();
  const [data, setData] = useState<MatchData>();

  useEffect(() => {
    if (param.matchId) {
      getMatchData({ matchId: param.matchId }).then(r => r.data?.data && setData(r.data.data));
    }
  }, [param.matchId]);

  return (
    <Container>
      <PageTitle>{data ? data.matchTitle : 'Partita'}</PageTitle>
      {isLoading ? 'Attendi le informazioni...' : <Outlet />}
    </Container>
  );
};

export default MatchDashboard;
