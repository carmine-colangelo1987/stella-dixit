/** @format */

import { useParams } from 'react-router-dom';

export const useMatchId = () => {
  const param = useParams<{ matchId: string }>();
  return param.matchId || 'match_not_found';
};
