import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoverPage, ERPage } from '../components';

export const AppRouter = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/estrategia-de-resiliencia" element={<ERPage />} />
      </Routes>
    </Router>
  );
}