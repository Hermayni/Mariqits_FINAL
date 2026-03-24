import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import AdminLayout from '../../components/admin/AdminLayout';
import { useAdmin } from '../../context/AdminContext';
import { getPaymentMethodLabel } from '../../utils/paymongo';

export default function AdminOrderDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getOrderById, updateOrder } = useAdmin();

  const [showRefundModal, setShowRefundModal] = useState(false);
  const [isRefunding, setIsRefunding] = useState(false);
  const [refundMessage, setRefundMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const order = id ? getOrderById(id) : null;

  if (!order) {
    return (
      <AdminLayout>
        <div className="p-[32px]">
          <div className="text-center py-[64px]">
            <h2 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-[#2d2d2d] mb-[16px]">
              Order Not Found
            </h2>
            <button
              onClick={() => navigate('/admin/orders')}
              className="bg-[#ff1a75] text-white px-[32px] py-[12px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]"
            >
              Back to Orders
            </button>
          </div>
        </div>
      </AdminLayout>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
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

  const subtotal = order.products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
  const shipping = order.total - subtotal;

  const handleRefund = async () => {
    setIsRefunding(true);
    setRefundMessage(null);

    try {
      const response = await fetch('/api/refund', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payment_id: order.transactionReferenceId,
          amount: Math.round(order.total * 100),
          reason: 'requested_by_customer',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Refund failed');
      }

      updateOrder(order.id, { paymentStatus: 'refunded' });
      setRefundMessage({ type: 'success', text: 'Refund processed successfully.' });
      setShowRefundModal(false);
    } catch (err) {
      console.error('Refund error:', err);
      setRefundMessage({ type: 'error', text: err instanceof Error ? err.message : 'Failed to process refund. Please try again.' });
      setShowRefundModal(false);
    } finally {
      setIsRefunding(false);
    }
  };

  return (
    <AdminLayout>
      <div className="p-[32px]">
        {/* Back Button */}
        <button
          onClick={() => navigate('/admin/orders')}
          className="flex items-center gap-[8px] mb-[24px] text-[#ff1a75] hover:underline font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px]"
        >
          ← Back to Orders
        </button>

        {/* Header */}
        <div className="flex items-start justify-between mb-[32px]">
          <div>
            <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-[#2d2d2d] mb-[4px]">
              Order Details
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
              Order #{order.id}
            </p>
          </div>
          <span className={`px-[16px] py-[8px] rounded-[26843500px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-[24px]">
          {/* Left Column */}
          <div className="col-span-2 space-y-[24px]">
            {/* Order Items */}
            <div className="bg-white rounded-[16px] border-[1px] border-[rgba(0,0,0,0.05)] p-[24px]">
              <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[24px]">
                Order Items
              </h2>

              {order.products.map(product => (
                <div key={product.id} className="flex items-start gap-[16px] pb-[16px] mb-[16px] border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                  <div className="size-[64px] bg-[#fffbf0] rounded-[12px] overflow-hidden flex-shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d] mb-[4px]">
                      {product.name}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#4a5565]">
                      Qty: {product.quantity} × ₱{product.price.toFixed(2)}
                    </p>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] text-[#ff1a75]">
                    ₱{(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              <div className="mt-[24px] pt-[24px] border-t border-gray-200 space-y-[12px]">
                <div className="flex justify-between">
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">Subtotal</p>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">₱{subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">Shipping</p>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">₱{shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center pt-[12px] border-t border-gray-200">
                  <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[18px] text-[#2d2d2d]">Total</p>
                  <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[24px] text-[#ff1a75]">₱{order.total.toFixed(2)}</p>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-[16px] border-[1px] border-[rgba(0,0,0,0.05)] p-[24px]">
              <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[24px]">
                Payment Information
              </h2>

              <div className="grid grid-cols-2 gap-[20px]">
                <div>
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[6px] uppercase">Payment Status</p>
                  <span className={`inline-block px-[12px] py-[6px] rounded-[26843500px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] capitalize ${getPaymentStatusBadge(order.paymentStatus)}`}>
                    {order.paymentStatus}
                  </span>
                </div>

                <div>
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[6px] uppercase">Payment Method</p>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                    {order.paymongoPaymentMethod ? getPaymentMethodLabel(order.paymongoPaymentMethod) : '—'}
                  </p>
                </div>

                <div>
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[6px] uppercase">Transaction Reference ID</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] break-all">
                    {order.transactionReferenceId || '—'}
                  </p>
                </div>

                <div>
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[6px] uppercase">Amount Paid</p>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                    ₱{order.total.toFixed(2)}
                  </p>
                </div>

                <div>
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[6px] uppercase">Date & Time of Payment</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d]">
                    {order.paidAt
                      ? new Date(order.paidAt).toLocaleString('en-PH', {
                          year: 'numeric', month: 'long', day: 'numeric',
                          hour: '2-digit', minute: '2-digit',
                        })
                      : '—'}
                  </p>
                </div>
              </div>

              {/* Refund Messages */}
              {refundMessage && (
                <div className={`mt-[20px] p-[12px] rounded-[12px] border ${
                  refundMessage.type === 'success'
                    ? 'bg-green-50 border-green-200 text-green-700'
                    : 'bg-red-50 border-red-200 text-red-700'
                }`}>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px]">{refundMessage.text}</p>
                </div>
              )}

              {/* Refund Button */}
              {order.paymentStatus === 'paid' && (
                <div className="mt-[24px] pt-[24px] border-t border-gray-200">
                  <button
                    onClick={() => setShowRefundModal(true)}
                    className="bg-red-600 text-white px-[24px] py-[12px] rounded-[12px] hover:bg-red-700 transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]"
                  >
                    Refund Order
                  </button>
                </div>
              )}
            </div>

            {/* Order Timeline */}
            {order.timeline && (
              <div className="bg-white rounded-[16px] border-[1px] border-[rgba(0,0,0,0.05)] p-[24px]">
                <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[24px]">
                  Order Timeline
                </h2>
                <div className="space-y-[20px]">
                  {order.timeline.map((step, index) => (
                    <div key={index} className="flex items-start gap-[16px]">
                      <div className={`size-[32px] rounded-full flex items-center justify-center flex-shrink-0 ${step.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                        {step.completed ? (
                          <svg className="size-[16px] text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <div className="size-[8px] rounded-full bg-gray-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                          {step.status}
                        </p>
                        {step.description && (
                          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#4a5565]">
                            {step.description}
                          </p>
                        )}
                        {step.date && (
                          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#99a1af]">
                            {step.date}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="col-span-1 space-y-[24px]">
            {/* Customer Info */}
            <div className="bg-white rounded-[16px] border-[1px] border-[rgba(0,0,0,0.05)] p-[24px]">
              <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[16px]">
                Customer
              </h3>
              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">{order.customer}</p>
              {order.customerEmail && (
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#4a5565]">{order.customerEmail}</p>
              )}
              {order.customerPhone && (
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#4a5565]">{order.customerPhone}</p>
              )}
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-[16px] border-[1px] border-[rgba(0,0,0,0.05)] p-[24px]">
              <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[16px]">
                Shipping Address
              </h3>
              {order.shippingAddress && (
                <div className="space-y-[2px]">
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                    {order.shippingAddress.name}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#4a5565]">
                    {order.shippingAddress.phone}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#4a5565]">
                    {order.shippingAddress.address}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#4a5565]">
                    {order.shippingAddress.city} {order.shippingAddress.postalCode}
                  </p>
                </div>
              )}
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-[16px] border-[1px] border-[rgba(0,0,0,0.05)] p-[24px]">
              <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[16px]">
                Shipping Method
              </h3>
              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                {order.shippingMethod.name}
              </p>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#4a5565]">
                {order.shippingMethod.estimatedDays}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Refund Confirmation Modal */}
      {showRefundModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-[32px] max-w-[440px] w-full mx-[16px]">
            <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[16px]">
              Confirm Refund
            </h3>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565] mb-[24px]">
              Are you sure you want to refund this order? This cannot be undone.
            </p>
            <div className="flex gap-[12px] justify-end">
              <button
                onClick={() => setShowRefundModal(false)}
                disabled={isRefunding}
                className="px-[20px] py-[10px] rounded-[12px] border border-gray-300 text-[#2d2d2d] hover:bg-gray-50 transition-colors font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px]"
              >
                Cancel
              </button>
              <button
                onClick={handleRefund}
                disabled={isRefunding}
                className={`px-[20px] py-[10px] rounded-[12px] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] flex items-center gap-[8px] ${
                  isRefunding
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {isRefunding && (
                  <svg className="animate-spin size-[16px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
                {isRefunding ? 'Processing...' : 'Confirm Refund'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
