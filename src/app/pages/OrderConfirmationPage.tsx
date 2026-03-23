import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { useApp } from '../context/AppContext';

export default function OrderConfirmationPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getOrderById } = useApp();
  
  const order = id ? getOrderById(id) : null;
  
  useEffect(() => {
    if (!order) {
      navigate('/');
    }
  }, [order, navigate]);
  
  if (!order) return null;
  
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
              Order Confirmed!
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[18px] text-[#4a5565] mb-[8px]">
              Thank you for your order
            </p>
            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-[#ff1a75]">
              Order #{order.id}
            </p>
          </div>
          
          {/* Order Details Card */}
          <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[32px] mb-[24px]">
            <div className="grid grid-cols-2 gap-[24px] mb-[32px]">
              <div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[8px]">
                  Shipping Address
                </p>
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                  {order.shippingAddress.name}
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                  {order.shippingAddress.address}
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                  {order.shippingAddress.city} {order.shippingAddress.postalCode}
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                  {order.shippingAddress.phone}
                </p>
              </div>
              
              <div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[8px]">
                  Order Summary
                </p>
                <div className="space-y-[8px]">
                  <div className="flex justify-between">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                      Subtotal
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                      ₱{order.subtotal.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                      Shipping ({order.shippingMethod.name})
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                      {order.shippingCost === 0 ? 'FREE' : `₱${order.shippingCost.toFixed(2)}`}
                    </p>
                  </div>
                  <div className="flex justify-between pt-[8px] border-t border-gray-200">
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                      Total
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[18px] text-[#ff1a75]">
                      ₱{order.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-[24px]">
              <div className="flex items-center gap-[16px] mb-[16px]">
                <div className="size-[40px] bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-[20px]">📦</span>
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                    Estimated Delivery
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                    {order.shippingMethod.estimatedDays}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-[16px]">
                <div className="size-[40px] bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-[20px]">💳</span>
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                    Payment Method
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                    {order.paymentMethod.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Items Ordered */}
          <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[32px] mb-[32px]">
            <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[24px]">
              Items Ordered
            </h3>
            
            <div className="space-y-[16px]">
              {order.items.map(item => (
                <div key={item.id} className="flex items-center gap-[16px] pb-[16px] border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="size-[80px] bg-[#fffbf0] rounded-[12px] overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[4px]">
                      {item.name}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565] mb-[4px]">
                      {item.brand}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[20px] text-[#2d2d2d]">
                    ₱{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Next Steps */}
          <div className="bg-blue-50 rounded-[16px] p-[24px] mb-[32px]">
            <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[12px]">
              What's Next?
            </h3>
            <ul className="space-y-[8px]">
              <li className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                ✓ You'll receive an order confirmation email shortly
              </li>
              <li className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                ✓ We'll send you shipping updates via email and SMS
              </li>
              <li className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                ✓ Track your order anytime in your account
              </li>
            </ul>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-[16px] justify-center">
            <button
              onClick={() => navigate(`/order-details/${order.id}`)}
              className="bg-[#ff1a75] text-white px-[32px] py-[16px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
            >
              Track Order
            </button>
            <button
              onClick={() => navigate('/')}
              className="border-[1px] border-[rgba(255,102,178,0.3)] text-[#ff1a75] px-[32px] py-[16px] rounded-[26843500px] hover:bg-pink-50 transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
