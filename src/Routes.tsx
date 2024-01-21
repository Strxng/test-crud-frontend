import { Routes as ReactRoutes, Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { useUserContext } from './contexts/userContext';
import { HomePage } from './pages/home';

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<LoginPage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<HomePage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export const Routes = () => {
  const { user } = useUserContext();

  if (!user) {
    return <AuthRoutes />;
  }

  return <AppRoutes />;
};
