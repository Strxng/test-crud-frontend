import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes } from './Routes';
import { UserProvider } from './contexts/userContext';

const queryClient = new QueryClient();

function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
