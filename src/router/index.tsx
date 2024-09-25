import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoverPage, ERPage, GPPage, PVPage } from '../components';
import { MENU_PREFIXES } from '../constants';

export const AppRouter = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path={MENU_PREFIXES.ER} element={<ERPage />} />
        <Route path={MENU_PREFIXES.PV} element={<PVPage />} />
        <Route path={MENU_PREFIXES.GP} element={<GPPage />} />
      </Routes>
    </Router>
  );
}