/** @format */

import { Outlet } from 'react-router-dom';
import { useLazyGetMatchDataQuery } from '../../../store/api/match';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/useStore';
import { setMatchData } from '../../../store/slices/matchData';
import { useMatchId } from '../../../hooks/useMatchId';
import Loader from '../../common/Loader';

const MatchDashboard = () => {
  const matchId = useMatchId();
  const dispatch = useAppDispatch();
  const [getMatchData, { isLoading }] = useLazyGetMatchDataQuery();

  useEffect(() => {
    if (matchId) {
      getMatchData({ matchId }).then(r => r.data?.data && dispatch(setMatchData(r.data.data)));
    }
  }, [matchId]);

  return (
    <>
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
};

export default MatchDashboard;
