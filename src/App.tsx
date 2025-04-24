import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardClient from './pages/DashboardClient';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardUser from './pages/DashboardUser';
import AppRouter from './router';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/client" element={<DashboardClient />} />
        <Route path="/dashboard/admin" element={<DashboardAdmin />} />
        <Route path="/dashboard/user" element={<DashboardUser />} />
      </Routes>
    </Router>
  );
}

export default App;