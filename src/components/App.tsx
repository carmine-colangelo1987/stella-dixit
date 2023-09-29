/** @format */

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../router/routes';
import Home from './pages/Home';
import NewMatch from './pages/NewMatch';
import CreatePlayers from './pages/CreatePlayers';

function App() {
  return (
    <main className="p-4 h-screen">
      <Routes>
        <Route path={AppRoutes.BASE} element={<Home />} />
        <Route path={AppRoutes.NEW_MATCH} element={<NewMatch />} />
        <Route path={AppRoutes.CREATE_PLAYER} element={<CreatePlayers />} />
        <Route path={AppRoutes.CURRENT_MATCH} element={<>TODO Partita</>} />
      </Routes>
    </main>
  );
}

export default App;
