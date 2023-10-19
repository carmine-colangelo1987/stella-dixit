/** @format */

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../router/routes';
import Home from './pages/Home';
import NewMatch from './pages/NewMatch';
import CreatePlayers from './pages/MatchDashboard/CreatePlayers';
import SelectPlayer from './pages/MatchDashboard/SelectPlayer';
import MatchDashboard from './pages/MatchDashboard';
import CurrentRound from './pages/CurrentRound';
import Dashboard from './pages/MatchDashboard/Dashboard';
import CurrentRoundIndex from './pages/CurrentRound/CurrentRound';
import MatchResult from './pages/MatchResult';
import RoundAnnounce from './pages/CurrentRound/RoundAnnounce';
import Studio from './pages/Studio';
import RoundReveal from './pages/CurrentRound/RoundReveal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoundAssociation from './pages/CurrentRound/RoundAssociation';

function App() {
  return (
    <>
      <header className="h-20 lg:h-40 bg-purple-600" />
      <main>
        <Routes>
          <Route path={AppRoutes.BASE} element={<Home />} />
          <Route path={'/studio'} element={<Studio />} />
          <Route path={AppRoutes.NEW_MATCH} element={<NewMatch />} />
          <Route path={AppRoutes.CURRENT_MATCH} element={<MatchDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path={AppRoutes.CREATE_PLAYERS} element={<CreatePlayers />} />
            <Route path={AppRoutes.SELECT_PLAYER} element={<SelectPlayer />} />
            <Route path={AppRoutes.CURRENT_ROUND} element={<CurrentRound />}>
              <Route index element={<CurrentRoundIndex />} />
              <Route path={AppRoutes.ROUND_ASSOCIATION} element={<RoundAssociation />} />
              <Route path={AppRoutes.ROUND_ANNOUNCE} element={<RoundAnnounce />} />
              <Route path={AppRoutes.ROUND_REVEAL} element={<RoundReveal />} />
            </Route>
            <Route path={AppRoutes.MATCH_RESULT} element={<MatchResult />} />
          </Route>
        </Routes>
      </main>
      <ToastContainer autoClose={2000} position={'top-right'} />
    </>
  );
}

export default App;
