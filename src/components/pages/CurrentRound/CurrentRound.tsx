/** @format */

import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../router/routes';
import Container from '../../common/Container';
import Button from '../../common/Button';
import { useAppSelector } from '../../../hooks/useStore';
import PageTitle from '../../common/PageTitle';

type Props = {};

const CurrentRoundIndex = (props: Props) => {
  const matchData = useAppSelector(s => s.matchDataReducer.matchData); // todo puntare a roundData
  const currentRound = matchData?.currentRound ?? 0;
  return (
    <Container>
      <PageTitle>Turno {currentRound}</PageTitle>

      <Link to={AppRoutes.ROUND_SELECTION_PHASE}>
        <Button>Scegli le carte</Button>
      </Link>
      <Link to={AppRoutes.ROUND_MATCHING_PHASE}>
        <Button>Fase match!</Button>
      </Link>
    </Container>
  );
};

export default CurrentRoundIndex;
