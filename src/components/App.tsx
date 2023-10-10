/** @format */

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../router/routes';
import Home from './pages/Home';
import NewMatch from './pages/NewMatch';
import CreatePlayers from './pages/CreatePlayers';
import SelectPlayer from './pages/SelectPlayer';
import MatchDashboard from './pages/MatchDashboard';
import CurrentRound from './pages/CurrentRound';
import Dashboard from './pages/MatchDashboard/Dashboard';
import RoundSelection from './pages/RoundSelection';
import CurrentRoundIndex from './pages/CurrentRound/CurrentRound';
import MatchResult from './pages/MatchResult';
import SelectionResult from './pages/SelectionResult';

function App() {
  return (
    <>
      <header className="h-20 lg:h-40 bg-purple-600" />
      <main>
        <Routes>
          <Route path={AppRoutes.BASE} element={<Home />} />
          <Route path={AppRoutes.NEW_MATCH} element={<NewMatch />} />
          <Route path={AppRoutes.CURRENT_MATCH} element={<MatchDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path={AppRoutes.CREATE_PLAYERS} element={<CreatePlayers />} />
            <Route path={AppRoutes.SELECT_PLAYER} element={<SelectPlayer />} />
            <Route path={AppRoutes.CURRENT_ROUND} element={<CurrentRound />}>
              <Route index element={<CurrentRoundIndex />} />
              <Route path={AppRoutes.ROUND_ASSOCIATION} element={<RoundSelection />} />
              <Route path={AppRoutes.ROUND_ANNOUNCE} element={<SelectionResult />} />
              <Route path={AppRoutes.ROUND_REVEAL} element={<>Fase Matching</>} />
            </Route>
            <Route path={AppRoutes.MATCH_RESULT} element={<MatchResult />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
