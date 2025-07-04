import { Route, Routes } from 'react-router-dom';
import PosDashboard from '@pages/PosDashboard';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PosDashboard />} />
    </Routes>
  );
}
