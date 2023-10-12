/** @format */
import { Link } from 'react-router-dom';
import { AppRoutes, setMatchRoute } from '../../../router/routes';
import Button from '../../common/Button';
import Container from '../../common/Container';
import Icon from '../../common/Icon';
import { useGetCurrentMatchQuery } from '../../../store/api/match';
import Loader from '../../common/Loader';

type Props = {};

const Home = (props: Props) => {
  const { data, isLoading } = useGetCurrentMatchQuery();
  const matchId = data?.data?.currentMatch;
  const matchTitle = data?.data?.matchTitle;
  const matchRoute = setMatchRoute(matchId ?? '');

  return (
    <Container>
      <div className="flex flex-col space-y-4 min-h-[60vh] justify-center">
        {isLoading && <Loader />}
        {matchId && (
          <Link to={matchRoute}>
            <Button variant="primary" className="w-full">
              <Icon icon={'flag-checkered'} className={'mr-2'} /> {matchTitle}
            </Button>
          </Link>
        )}

        <Link to={AppRoutes.NEW_MATCH}>
          <Button variant="secondary" className="w-full">
            <Icon icon={'coffee'} className={'mr-2'} /> inizia una nuova partita
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
