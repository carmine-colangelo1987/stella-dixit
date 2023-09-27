/** @format */

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../router/routes';
import Home from './pages/Home';
import NewMatch from './pages/NewMatch';

function App() {
  return (
    <main className="bg-teal-300 p-16 h-screen">
      <Routes>
        <Route path={AppRoutes.BASE} element={<Home />} />
        <Route path={AppRoutes.NEW_MATCH} element={<NewMatch />} />
        <Route path={AppRoutes.PAIR_PLAYER} element={<>TODO appaia</>} />
        <Route path={AppRoutes.CURRENT_MATCH} element={<>TODO Partita</>} />
      </Routes>
    </main>
  );
}

export default App;
