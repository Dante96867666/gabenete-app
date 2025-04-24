import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import DashboardClient from './pages/DashboardClient';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardUser from './pages/DashboardUser';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/client" element={<DashboardClient />} />
      <Route path="/dashboard/admin" element={<DashboardAdmin />} />
      <Route path="/dashboard/user" element={<DashboardUser />} />
    </Routes>
  );
};

export default AppRouter;
