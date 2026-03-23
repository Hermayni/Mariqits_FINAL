import { RouterProvider } from 'react-router';
import { AppProvider } from './context/AppContext';
import { AdminProvider } from './context/AdminContext';
import { router } from './routes';

export default function App() {
  return (
    <AppProvider>
      <AdminProvider>
        <RouterProvider router={router} />
      </AdminProvider>
    </AppProvider>
  );
}