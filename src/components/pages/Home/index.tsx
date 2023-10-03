/** @format */
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../router/routes';
import Container from '../../common/Container';

type Props = {};

const Home = (props: Props) => {
  return (
    <Container>
      <div className="flex flex-col">
        <Link to={AppRoutes.NEW_MATCH} className="text-2xl">
          inizia una nuova partita
        </Link>
      </div>
    </Container>
  );
};

export default Home;
