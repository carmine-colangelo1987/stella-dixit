/** @format */

import { Outlet, useParams } from 'react-router-dom';
import { useLazyGetMatchDataQuery } from '../../../store/api/match';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/useStore';
import { setMatchData } from '../../../store/slices/matchData';

const MatchDashboard = () => {
  const param = useParams<{ matchId: string }>();
  const dispatch = useAppDispatch();
  const [getMatchData, { isLoading }] = useLazyGetMatchDataQuery();

  useEffect(() => {
    if (param.matchId) {
      getMatchData({ matchId: param.matchId }).then(r => r.data?.data && dispatch(setMatchData(r.data.data)));
    }
  }, [param.matchId]);

  return (
    <>
      {isLoading && <div>Attendi le informazioni...</div>}
      <Outlet />
    </>
  );
};

export default MatchDashboard;
