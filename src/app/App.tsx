import { RouterProvider } from 'react-router';
import { AppProvider } from './context/AppContext';
import { AdminProvider } from './context/AdminContext';
import { NotificationProvider } from './context/NotificationContext';
import { router } from './routes';

export default function App() {
  return (
    <AppProvider>
      <AdminProvider>
        <NotificationProvider>
          <RouterProvider router={router} />
        </NotificationProvider>
      </AdminProvider>
    </AppProvider>
  );
}