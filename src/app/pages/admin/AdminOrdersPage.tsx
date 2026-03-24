import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import AdminLayout from '../../components/admin/AdminLayout';
import { useAdmin } from '../../context/AdminContext';
import { getPaymentMethodLabel } from '../../utils/paymongo';

export default function AdminOrdersPage() {
  const navigate = useNavigate();
  const { adminOrders, updateOrderStatus } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredOrders = adminOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const ordersByStatus = {
    pending: adminOrders.filter(o => o.status === 'Pending').length,
    processing: adminOrders.filter(o => o.status === 'Processing').length,
    shipped: adminOrders.filter(o => o.status === 'Shipped').length,
    delivered: adminOrders.filter(o => o.status === 'Delivered').length,
    cancelled: adminOrders.filter(o => o.status === 'Cancelled').length
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'refunded': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    updateOrderStatus(orderId, newStatus as 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled');
  };

  return (
    <AdminLayout>
      <div className="p-[32px]">
        <div className="mb-[32px]">
          <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-[#2d2d2d] mb-[4px]">
            Orders
          </h1>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
            Track and manage customer orders
          </p>
        </div>

        <div className="bg-white rounded-[16px] border-[1px] border-[rgba(0,0,0,0.05)]">
          <div className="p-[24px] border-b border-gray-100">
            <div className="grid grid-cols-2 gap-[16px] mb-[24px]">
              <div>
                <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] block mb-[8px]">
                  Search Orders
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by Order ID or customer name..."
                  className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                />
              </div>
              <div>
                <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] block mb-[8px]">
                  Filter by Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                >
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>

          {filteredOrders.length === 0 ? (
            <div className="p-[48px] text-center">
              <div className="text-[48px] mb-[16px]">📦</div>
              <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[18px] text-[#2d2d2d] mb-[8px]">No orders yet</h3>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">Orders placed by customers will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-left py-[12px] px-[24px] uppercase">Order ID</th>
                    <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-left py-[12px] px-[16px] uppercase">Customer</th>
                    <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-left py-[12px] px-[16px] uppercase">Date</th>
                    <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[16px] uppercase">Items</th>
                    <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-right py-[12px] px-[16px] uppercase">Total</th>
                    <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[16px] uppercase">Payment Status</th>
                    <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[16px] uppercase">Payment Method</th>
                    <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[16px] uppercase">Transaction ID</th>
                    <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[16px] uppercase">Status</th>
                    <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[16px] uppercase">Update Status</th>
                    <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[24px] uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map(order => (
                    <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-[16px] px-[24px]">
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">{order.id}</p>
                      </td>
                      <td className="py-[16px] px-[16px]">
                        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] mb-[2px]">{order.customer}</p>
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565]">{order.customerEmail}</p>
                      </td>
                      <td className="py-[16px] px-[16px]">
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">{order.date}</p>
                      </td>
                      <td className="py-[16px] px-[16px] text-center">
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">{order.items} items</p>
                      </td>
                      <td className="py-[16px] px-[16px] text-right">
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">₱{order.total.toLocaleString()}</p>
                      </td>
                      <td className="py-[16px] px-[16px]">
                        <div className="flex justify-center">
                          <span className={`inline-block px-[10px] py-[4px] rounded-[26843500px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[11px] capitalize ${getPaymentStatusBadge(order.paymentStatus)}`}>
                            {order.paymentStatus === 'paid' ? 'Paid' :
                             order.paymentStatus === 'pending' ? 'Pending' :
                             order.paymentStatus === 'failed' ? 'Failed' :
                             order.paymentStatus === 'refunded' ? 'Refunded' : order.paymentStatus}
                          </span>
                        </div>
                      </td>
                      <td className="py-[16px] px-[16px] text-center">
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#4a5565]">
                          {order.paymongoPaymentMethod ? getPaymentMethodLabel(order.paymongoPaymentMethod) : '—'}
                        </p>
                      </td>
                      <td className="py-[16px] px-[16px] text-center">
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565] max-w-[120px] truncate mx-auto" title={order.transactionReferenceId || ''}>
                          {order.transactionReferenceId || '—'}
                        </p>
                      </td>
                      <td className="py-[16px] px-[16px]">
                        <div className="flex justify-center">
                          <span className={`inline-block px-[12px] py-[6px] rounded-[26843500px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                      </td>
                      <td className="py-[16px] px-[16px]">
                        <div className="flex justify-center">
                          <select
                            value={order.status}
                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                            className="h-[32px] rounded-[8px] border-[1px] border-[rgba(0,0,0,0.1)] px-[8px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>
                      </td>
                      <td className="py-[16px] px-[24px]">
                        <div className="flex justify-center">
                          <button
                            onClick={() => navigate(`/admin/orders/${order.id}`)}
                            className="text-[#ff1a75] hover:underline font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px]"
                          >
                            View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="grid grid-cols-5 gap-[16px] p-[24px] border-t border-gray-100">
            <div className="text-center">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[4px] uppercase">Pending Orders</p>
              <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[24px] text-[#2d2d2d]">{ordersByStatus.pending}</p>
            </div>
            <div className="text-center">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[4px] uppercase">Processing Orders</p>
              <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[24px] text-[#2d2d2d]">{ordersByStatus.processing}</p>
            </div>
            <div className="text-center">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[4px] uppercase">Shipped Orders</p>
              <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[24px] text-[#2d2d2d]">{ordersByStatus.shipped}</p>
            </div>
            <div className="text-center">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[4px] uppercase">Delivered Orders</p>
              <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[24px] text-[#2d2d2d]">{ordersByStatus.delivered}</p>
            </div>
            <div className="text-center">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[4px] uppercase">Cancelled Orders</p>
              <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[24px] text-[#2d2d2d]">{ordersByStatus.cancelled}</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
