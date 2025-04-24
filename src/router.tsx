import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/home';
const AppRouter = () => {
  return (
    <Router>
    
        <Route path="/" element={<Home />} />

    </Router>
  );
};

export default AppRouter;
