import { useNotification, NotificationType } from '../context/NotificationContext';

const ICONS: Record<NotificationType, JSX.Element> = {
  cart: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  ),
  wishlist: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  ),
  order: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
};

const TYPE_STYLES: Record<NotificationType, string> = {
  cart: 'bg-pink-50 border-pink-300 text-pink-800',
  wishlist: 'bg-rose-50 border-rose-300 text-rose-800',
  order: 'bg-green-50 border-green-300 text-green-800',
};

const ICON_BG: Record<NotificationType, string> = {
  cart: 'bg-pink-200 text-pink-700',
  wishlist: 'bg-rose-200 text-rose-700',
  order: 'bg-green-200 text-green-700',
};

export default function NotificationToast() {
  const { notifications, dismissNotification } = useNotification();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-3 pointer-events-none">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg
            ${TYPE_STYLES[n.type]}
            animate-[slideIn_0.3s_ease-out]`}
          style={{ minWidth: 280, maxWidth: 380 }}
        >
          <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${ICON_BG[n.type]}`}>
            {ICONS[n.type]}
          </span>
          <span className="flex-1 text-sm font-medium">{n.message}</span>
          <button
            onClick={() => dismissNotification(n.id)}
            className="flex-shrink-0 ml-2 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Dismiss"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
