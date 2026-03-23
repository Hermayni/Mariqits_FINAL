import { useNavigate, useLocation } from 'react-router';
import { useApp } from '../../context/AppContext';
import img02 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useApp();
  
  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/products', label: 'Products', icon: '📦' },
    { path: '/admin/orders', label: 'Orders', icon: '🛒' },
    { path: '/admin/users', label: 'Users', icon: '👥' },
    { path: '/admin/inventory', label: 'Inventory', icon: '📋' }
  ];
  
  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <div className="bg-[#2d2d2d] w-[168px] min-h-screen flex flex-col">
      {/* Logo */}
      <div className="h-[64px] flex items-center justify-center px-[16px] border-b border-[rgba(255,255,255,0.1)]">
        <button onClick={() => navigate('/admin')} className="relative">
          <div className="relative w-[100px]">
            <img src={img02} alt="Mariqits" className="w-full h-auto" />
          </div>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] text-[rgba(255,255,255,0.6)] text-center mt-[4px]">
            Admin Panel
          </p>
        </button>
      </div>
      
      {/* Menu */}
      <div className="flex-1 py-[24px] px-[16px]">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-[12px] px-[16px] py-[12px] rounded-[8px] mb-[8px] transition-colors ${
              isActive(item.path)
                ? 'bg-gradient-to-r from-[#ff1a75] to-[#ff6b9d] text-white'
                : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.05)]'
            }`}
          >
            <span className="text-[16px]">{item.icon}</span>
            <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px]">
              {item.label}
            </span>
          </button>
        ))}
      </div>
      
      {/* User Info */}
      <div className="p-[16px] border-t border-[rgba(255,255,255,0.1)]">
        <div className="flex items-center gap-[12px] mb-[16px]">
          <div className="size-[36px] rounded-full bg-gradient-to-br from-[#ff1a75] to-[#ff6b9d] flex items-center justify-center">
            <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[14px] text-white">
              {user?.name?.charAt(0) || 'A'}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-white truncate">
              {user?.name || 'Admin User'}
            </p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] text-[rgba(255,255,255,0.6)]">
              Administrator
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-[8px] px-[12px] py-[8px] rounded-[8px] text-[#ff6b6b] hover:bg-[rgba(255,107,107,0.1)] transition-colors"
        >
          <span className="text-[14px]">🚪</span>
          <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px]">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
