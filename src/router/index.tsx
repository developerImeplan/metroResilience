import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoverPage, ERPage, PVPage } from '../components';
import { MENU_PREFIXES } from '../constants';

export const AppRouter = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path={MENU_PREFIXES.ER} element={<ERPage />} />
        <Route path={MENU_PREFIXES.PV} element={<PVPage />} />
      </Routes>
    </Router>
  );
}