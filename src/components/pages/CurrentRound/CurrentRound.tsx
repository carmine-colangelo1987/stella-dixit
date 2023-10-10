/** @format */

import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../router/routes';
import Container from '../../common/Container';
import Button from '../../common/Button';
import { useAppSelector } from '../../../hooks/useStore';
import PageTitle from '../../common/PageTitle';

const CurrentRoundIndex = () => {
  const matchData = useAppSelector(s => s.matchDataReducer.matchData); // todo puntare a roundData
  const currentRound = matchData?.currentRound ?? 0;
  return (
    <Container>
      <PageTitle>Turno {currentRound}</PageTitle>

      <Link to={AppRoutes.ROUND_ASSOCIATION}>
        <Button>Associa le carte</Button>
      </Link>
      <Link to={AppRoutes.ROUND_ANNOUNCE}>
        <Button>Annuncia quante carte hai associato!</Button>
      </Link>
      <Link to={AppRoutes.ROUND_REVEAL}>
        <Button>Rivela</Button>
      </Link>
    </Container>
  );
};

export default CurrentRoundIndex;
