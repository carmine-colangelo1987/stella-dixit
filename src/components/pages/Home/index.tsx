/** @format */
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../router/routes';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col">
      <Link to={AppRoutes.NEW_MATCH} className="text-2xl">
        inizia una nuova partita
      </Link>
    </div>
  );
};

export default Home;
