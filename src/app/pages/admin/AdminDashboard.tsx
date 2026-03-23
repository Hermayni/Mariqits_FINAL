import { useNavigate } from 'react-router';
import AdminLayout from '../../components/admin/AdminLayout';
import { useAdmin } from '../../context/AdminContext';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { stats, adminOrders, adminProducts } = useAdmin();
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const recentOrders = adminOrders.slice(0, 4);
  const topProducts = adminProducts.slice(0, 3);
  const pendingOrdersCount = adminOrders.filter(o => o.status === 'Pending' || o.status === 'Processing').length;
  
  return (
    <AdminLayout>
      <div className="p-[32px]">
        {/* Header */}
        <div className="mb-[32px]">
          <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-[#2d2d2d] mb-[4px]">
            Dashboard
          </h1>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-[24px] mb-[32px]">
          {/* Total Revenue */}
          <div className="bg-white rounded-[16px] p-[24px] border-[1px] border-[rgba(0,0,0,0.05)]">
            <div className="flex items-start justify-between mb-[16px]">
              <div className="bg-green-100 rounded-[12px] size-[48px] flex items-center justify-center">
                <span className="text-[24px]">💰</span>
              </div>
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-green-600">
                {stats.revenueChange}
              </span>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[4px]">
              Total Revenue
            </p>
            <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d]">
              ₱{stats.totalRevenue.toLocaleString()}
            </p>
          </div>
          
          {/* Total Orders */}
          <div className="bg-white rounded-[16px] p-[24px] border-[1px] border-[rgba(0,0,0,0.05)]">
            <div className="flex items-start justify-between mb-[16px]">
              <div className="bg-blue-100 rounded-[12px] size-[48px] flex items-center justify-center">
                <span className="text-[24px]">📦</span>
              </div>
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-blue-600">
                {stats.ordersChange}
              </span>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[4px]">
              Total Orders
            </p>
            <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d]">
              {stats.totalOrders}
            </p>
          </div>
          
          {/* Products */}
          <div className="bg-white rounded-[16px] p-[24px] border-[1px] border-[rgba(0,0,0,0.05)]">
            <div className="flex items-start justify-between mb-[16px]">
              <div className="bg-purple-100 rounded-[12px] size-[48px] flex items-center justify-center">
                <span className="text-[24px]">🎁</span>
              </div>
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-purple-600">
                {stats.productsChange}
              </span>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[4px]">
              Products
            </p>
            <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d]">
              {stats.totalProducts}
            </p>
          </div>
          
          {/* Customers */}
          <div className="bg-white rounded-[16px] p-[24px] border-[1px] border-[rgba(0,0,0,0.05)]">
            <div className="flex items-start justify-between mb-[16px]">
              <div className="bg-pink-100 rounded-[12px] size-[48px] flex items-center justify-center">
                <span className="text-[24px]">👥</span>
              </div>
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-pink-600">
                {stats.customersChange}
              </span>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[4px]">
              Customers
            </p>
            <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d]">
              {stats.totalCustomers}
            </p>
          </div>
        </div>
        
        {/* Pending Orders Alert */}
        {pendingOrdersCount > 0 && (
          <div className="bg-blue-50 border-[1px] border-blue-200 rounded-[16px] p-[20px] mb-[32px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="bg-blue-500 rounded-full size-[40px] flex items-center justify-center">
                  <span className="text-[20px]">📋</span>
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                    Pending Orders
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                    {pendingOrdersCount} orders need your attention
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate('/admin/orders')}
                className="bg-blue-600 text-white px-[24px] py-[12px] rounded-[26843500px] hover:bg-blue-700 transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]"
              >
                Manage Orders →
              </button>
            </div>
          </div>
        )}
        
        {/* Recent Orders */}
        <div className="bg-white rounded-[16px] p-[24px] border-[1px] border-[rgba(0,0,0,0.05)] mb-[32px]">
          <div className="flex items-center justify-between mb-[24px]">
            <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d]">
              Recent Orders
            </h2>
            <button
              onClick={() => navigate('/admin/orders')}
              className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#ff1a75] hover:underline"
            >
              View All →
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-left py-[12px] uppercase">
                    Order ID
                  </th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-left py-[12px] uppercase">
                    Customer
                  </th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-left py-[12px] uppercase">
                    Date
                  </th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-right py-[12px] uppercase">
                    Total
                  </th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-[16px]">
                      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                        {order.id}
                      </p>
                    </td>
                    <td className="py-[16px]">
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d]">
                        {order.customer}
                      </p>
                    </td>
                    <td className="py-[16px]">
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                        {order.date}
                      </p>
                    </td>
                    <td className="py-[16px] text-right">
                      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                        ₱{order.total.toLocaleString()}
                      </p>
                    </td>
                    <td className="py-[16px]">
                      <div className="flex justify-center">
                        <span className={`inline-block px-[12px] py-[6px] rounded-[26843500px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Top Selling Products */}
        <div className="bg-white rounded-[16px] p-[24px] border-[1px] border-[rgba(0,0,0,0.05)]">
          <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[24px]">
            Top Selling Products
          </h2>
          
          <div className="grid grid-cols-3 gap-[24px]">
            {topProducts.map(product => (
              <div key={product.id} className="flex items-center gap-[16px] p-[16px] rounded-[12px] border-[1px] border-gray-100 hover:border-[#ff1a75] transition-colors cursor-pointer" onClick={() => navigate('/admin/products')}>
                <div className="size-[64px] bg-[#fffbf0] rounded-[12px] overflow-hidden flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d] mb-[4px] truncate">
                    {product.name}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565]">
                    Sales: {product.reviews || 256}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
