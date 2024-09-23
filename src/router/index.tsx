import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoverPage, ERPage, PVPage } from '../components';

export const AppRouter = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/estrategia-de-resiliencia" element={<ERPage />} />
        <Route path="/puntos-verdes" element={<PVPage />} />
      </Routes>
    </Router>
  );
}