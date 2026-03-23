import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { useApp } from '../context/AppContext';
import { useAdmin } from '../context/AdminContext';
import { products } from '../data/products';

export default function OrdersPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useApp();
  const { adminOrders } = useAdmin();
  
  if (!isAuthenticated || !user) {
    navigate('/signin');
    return null;
  }
  
  // Get user's orders
  const orders = adminOrders.filter(order => 
    order.customer === user.name || order.customerEmail === user.email
  );
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Layout>
      <div className="bg-white min-h-[600px]">
        {/* Hero Header */}
        <div 
          className="h-[200px] flex items-center justify-center"
          style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 161, 204) 0%, rgb(255, 173, 211) 10%, rgb(255, 185, 217) 20%, rgb(255, 196, 224) 30%, rgb(255, 207, 231) 40%, rgb(255, 217, 238) 50%, rgb(255, 226, 244) 60%, rgb(255, 235, 250) 70%, rgb(255, 242, 253) 80%, rgb(255, 249, 255) 90%, rgb(255, 255, 255) 100%)" }}
        >
          <div className="max-w-[1200px] w-full mx-auto px-[32px] flex items-center gap-[24px]">
            <div className="bg-white rounded-full size-[80px] flex items-center justify-center shadow-lg">
              <span className="text-[32px]">📦</span>
            </div>
            <div>
              <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-white mb-[4px]">
                Welcome back, {user.name}!
              </h1>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-white opacity-90">
                {user.email}
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-[32px] py-[48px]">
          <div className="grid grid-cols-4 gap-[32px]">
            {/* Sidebar */}
            <div className="col-span-1 space-y-[8px]">
              <button
                onClick={() => navigate('/profile')}
                className="w-full flex items-center gap-[12px] px-[20px] py-[16px] rounded-[12px] bg-white text-[#2d2d2d] border-[1px] border-[rgba(255,102,178,0.2)] hover:bg-pink-50 transition-colors"
              >
                <span className="text-[20px]">👤</span>
                <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[16px]">Profile</span>
              </button>
              
              <button
                onClick={() => navigate('/orders')}
                className="w-full flex items-center gap-[12px] px-[20px] py-[16px] rounded-[12px] bg-[#ff1a75] text-white transition-colors"
              >
                <span className="text-[20px]">📦</span>
                <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[16px]">My Orders</span>
              </button>
              
              <button
                onClick={() => navigate('/profile')}
                className="w-full flex items-center gap-[12px] px-[20px] py-[16px] rounded-[12px] bg-white text-[#2d2d2d] border-[1px] border-[rgba(255,102,178,0.2)] hover:bg-pink-50 transition-colors"
              >
                <span className="text-[20px]">🔒</span>
                <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[16px]">Security & Privacy</span>
              </button>
            </div>
            
            {/* Main Content */}
            <div className="col-span-3">
              <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[24px] text-[#2d2d2d] mb-[32px]">
                Order History
              </h2>
              
              <div className="space-y-[24px]">
                {orders.map(order => (
                  <div key={order.id} className="bg-white border-[0.8px] border-[rgba(255,102,178,0.2)] rounded-[16px] p-[32px]">
                    <div className="flex items-center justify-between mb-[24px] pb-[24px] border-b-[1px] border-[rgba(255,102,178,0.2)]">
                      <div>
                        <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-[#2d2d2d] mb-[4px]">
                          Order #{order.id}
                        </h3>
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                          Placed on {order.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block px-[16px] py-[8px] rounded-[26843500px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] ${getStatusColor(order.status)} mb-[8px]`}>
                          {order.status}
                        </div>
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                          Total: <span className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[18px] text-[#ff1a75]">₱{order.total.toFixed(2)}</span>
                        </p>
                      </div>
                    </div>
                    
                    {order.products.map(item => (
                      <div key={item.id} className="flex items-center gap-[24px]">
                        <div className="size-[80px] bg-[#fffbf0] rounded-[12px] overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#ff1a75] uppercase mb-[4px]">
                            {item.brand}
                          </p>
                          <h4 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[4px]">
                            {item.name}
                          </h4>
                          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[20px] text-[#2d2d2d]">
                          ₱{item.price.toFixed(2)}
                        </p>
                      </div>
                    ))}
                    
                    <div className="mt-[24px] pt-[24px] border-t-[1px] border-[rgba(255,102,178,0.2)] flex gap-[16px]">
                      <button
                        onClick={() => navigate(`/order-details/${order.id}`)}
                        className="bg-[#ff1a75] text-white px-[24px] py-[12px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => navigate(`/product/${order.products[0].id}`)}
                        className="border-[1px] border-[rgba(255,102,178,0.3)] text-[#ff1a75] px-[24px] py-[12px] rounded-[26843500px] hover:bg-pink-50 transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]"
                      >
                        Buy Again
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}