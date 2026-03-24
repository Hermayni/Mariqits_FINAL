import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { useApp } from '../context/AppContext';
import { getPaymentMethodLabel, formatCentavosToPhp } from '../utils/paymongo';

export default function OrderConfirmationPage() {
  const navigate = useNavigate();
  const { orders, updateOrder, clearCart } = useApp();

  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [referenceId, setReferenceId] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState(false);

  const sessionId = new URLSearchParams(window.location.search).get('session_id');
  const order = orders.find(o => o.checkoutSessionId === sessionId);

  useEffect(() => {
    if (!sessionId) {
      navigate('/');
      return;
    }

    const fetchSession = async () => {
      try {
        const response = await fetch(`/api/get-session?session_id=${sessionId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to verify payment');
        }

        setPaymentStatus(data.paymentStatus);
        setPaymentMethod(data.paymentMethod);
        setReferenceId(data.referenceId);
        setAmount(data.amount);

        if (data.paymentStatus === 'paid' && order) {
          updateOrder(order.id, {
            paymentStatus: 'paid',
            paymongoPaymentMethod: data.paymentMethod,
            transactionReferenceId: data.referenceId,
            paidAt: new Date().toISOString(),
          });
          clearCart();
        } else if (data.paymentStatus !== 'paid' && order) {
          updateOrder(order.id, { paymentStatus: 'failed' });
        }
      } catch (err) {
        console.error('Payment verification error:', err);
        setError(true);
        if (order) {
          updateOrder(order.id, { paymentStatus: 'failed' });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  if (loading) {
    return (
      <Layout>
        <div className="bg-[#fffbf0] min-h-screen py-[64px]">
          <div className="max-w-[600px] mx-auto px-[32px] text-center">
            <div className="flex flex-col items-center gap-[24px]">
              <svg className="animate-spin size-[48px] text-[#ff1a75]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[24px] text-[#2d2d2d]">
                Verifying your payment...
              </h2>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
                Please wait while we confirm your transaction.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || paymentStatus !== 'paid') {
    return (
      <Layout>
        <div className="bg-[#fffbf0] min-h-screen py-[64px]">
          <div className="max-w-[600px] mx-auto px-[32px] text-center">
            <div className="inline-flex items-center justify-center size-[100px] bg-red-100 rounded-full mb-[24px]">
              <svg className="size-[50px] text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>

            <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[36px] text-[#2d2d2d] mb-[16px]">
              Payment Failed
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[18px] text-[#4a5565] mb-[32px]">
              Your payment could not be completed. Please try again.
            </p>

            <div className="flex gap-[16px] justify-center">
              <button
                onClick={() => navigate('/checkout')}
                className="bg-[#ff1a75] text-white px-[32px] py-[16px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
              >
                Try Again
              </button>
              <button
                onClick={() => navigate('/')}
                className="border-[1px] border-[rgba(255,102,178,0.3)] text-[#ff1a75] px-[32px] py-[16px] rounded-[26843500px] hover:bg-pink-50 transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-[#fffbf0] min-h-screen py-[64px]">
        <div className="max-w-[800px] mx-auto px-[32px]">
          {/* Success Icon */}
          <div className="text-center mb-[32px]">
            <div className="inline-flex items-center justify-center size-[100px] bg-green-100 rounded-full mb-[24px]">
              <svg className="size-[50px] text-green-600" fill="none" viewBox="0 0 24 24">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[36px] text-[#2d2d2d] mb-[16px]">
              Payment Successful!
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[18px] text-[#4a5565] mb-[8px]">
              Thank you for your purchase
            </p>
            {order && (
              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-[#ff1a75]">
                Order #{order.id}
              </p>
            )}
          </div>

          {/* Payment Details Card */}
          <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[32px] mb-[24px]">
            <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[24px]">
              Payment Details
            </h3>

            <div className="grid grid-cols-2 gap-[20px]">
              <div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[4px]">
                  Payment Method
                </p>
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                  {getPaymentMethodLabel(paymentMethod)}
                </p>
              </div>

              <div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[4px]">
                  Total Amount
                </p>
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#ff1a75]">
                  {amount > 0 ? formatCentavosToPhp(amount) : order ? `₱${order.total.toFixed(2)}` : '—'}
                </p>
              </div>

              <div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[4px]">
                  Transaction Reference ID
                </p>
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d] break-all">
                  {referenceId || '—'}
                </p>
              </div>

              <div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[4px]">
                  Date & Time
                </p>
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                  {new Date().toLocaleString('en-PH', {
                    year: 'numeric', month: 'long', day: 'numeric',
                    hour: '2-digit', minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Items Purchased */}
          {order && (
            <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[32px] mb-[32px]">
              <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[24px]">
                Items Purchased
              </h3>

              <div className="space-y-[16px]">
                {order.items.map(item => (
                  <div key={item.id} className="flex items-center gap-[16px] pb-[16px] border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="size-[60px] bg-[#fffbf0] rounded-[8px] overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                        {item.name}
                      </p>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565]">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                      ₱{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/')}
              className="bg-[#ff1a75] text-white px-[32px] py-[16px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
