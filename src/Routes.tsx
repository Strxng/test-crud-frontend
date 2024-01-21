import { Routes as ReactRoutes, Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/login';

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<LoginPage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export const Routes = () => {
  return <AuthRoutes />;
};
