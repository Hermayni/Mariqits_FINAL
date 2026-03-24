import { RouterProvider } from 'react-router';
import { AppProvider } from './context/AppContext';
import { AdminProvider } from './context/AdminContext';
import { NotificationProvider } from './context/NotificationContext';
import { router } from './routes';
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <AppProvider>
      <Analytics />
      <AdminProvider>
        <NotificationProvider>
          <RouterProvider router={router} />
        </NotificationProvider>
      </AdminProvider>
    </AppProvider>
  );
}