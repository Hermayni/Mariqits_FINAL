import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { useApp, ShippingMethod } from '../context/AppContext';
import { useNotification } from '../context/NotificationContext';
import { formatAmountToCentavos } from '../utils/paymongo';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { user, cart, cartTotal, shippingMethods, createOrder, updateOrder, isAuthenticated } = useApp();
  const { showNotification } = useNotification();

  const [selectedShipping, setSelectedShipping] = useState<ShippingMethod>(shippingMethods[0]);
  const [shippingAddress, setShippingAddress] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
    postalCode: user?.postalCode || ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  if (!isAuthenticated) {
    navigate('/signin');
    return null;
  }

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="bg-[#fffbf0] min-h-[600px] py-[48px]">
          <div className="max-w-[800px] mx-auto px-[32px] text-center">
            <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-[#2d2d2d] mb-[16px]">
              Your Cart is Empty
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565] mb-[32px]">
              Add some products to your cart before checking out
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-[#ff1a75] text-white px-[32px] py-[16px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const subtotal = cartTotal;
  const shippingCost = selectedShipping.cost;
  const total = subtotal + shippingCost;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!shippingAddress.name.trim()) newErrors.name = 'Name is required';
    if (!shippingAddress.phone.trim()) newErrors.phone = 'Phone is required';
    if (!shippingAddress.address.trim()) newErrors.address = 'Address is required';
    if (!shippingAddress.city.trim()) newErrors.city = 'City is required';
    if (!shippingAddress.postalCode.trim()) newErrors.postalCode = 'Postal code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayNow = async () => {
    if (!validateForm()) return;

    setIsProcessingPayment(true);
    setPaymentError('');

    try {
      const dummyPaymentMethod = { id: 'paymongo', name: 'PayMongo', description: 'Online Payment' };

      const order = createOrder({
        items: cart,
        total,
        subtotal,
        shippingCost,
        shippingMethod: selectedShipping,
        paymentMethod: dummyPaymentMethod,
        shippingAddress,
      });

      if (window.location.port === '5173') {
        console.warn('WARNING: Running on Vite dev server (port 5173). /api routes will not work. Run "vercel dev" instead.');
      }

      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          billing: {
            name: shippingAddress.name,
            email: user?.email || '',
            phone: shippingAddress.phone,
          },
          line_items: cart.map(item => ({
            name: item.name,
            amount: formatAmountToCentavos(item.price),
            currency: 'PHP',
            quantity: item.quantity,
          })),
          orderId: order.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Payment could not be initiated');
      }

      updateOrder(order.id, { checkoutSessionId: data.session_id });

      window.location.href = data.checkout_url;
    } catch (error) {
      console.error('Payment error:', error);
      const message = error instanceof Error ? error.message : 'Payment could not be initiated. Please try again.';
      setPaymentError(message);
      showNotification('order', message);
      setIsProcessingPayment(false);
    }
  };

  return (
    <Layout>
      <div className="bg-[#fffbf0] min-h-screen py-[48px]">
        <div className="max-w-[1200px] mx-auto px-[32px]">
          <h1 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[36px] text-[#2d2d2d] mb-[32px]">
            Checkout
          </h1>

          <div className="grid grid-cols-3 gap-[32px]">
            {/* Left Column - Forms */}
            <div className="col-span-2 space-y-[32px]">
              {/* Shipping Address */}
              <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[32px]">
                <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[24px] text-[#2d2d2d] mb-[24px]">
                  Shipping Address
                </h2>

                <div className="space-y-[20px]">
                  <div>
                    <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={shippingAddress.name}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
                      className={`w-full h-[48px] rounded-[12px] border-[1px] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors ${errors.name ? 'border-red-500' : 'border-[rgba(0,0,0,0.1)]'}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-[12px] mt-[4px]">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={shippingAddress.phone}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                      className={`w-full h-[48px] rounded-[12px] border-[1px] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors ${errors.phone ? 'border-red-500' : 'border-[rgba(0,0,0,0.1)]'}`}
                      placeholder="+63 900 000 0000"
                    />
                    {errors.phone && <p className="text-red-500 text-[12px] mt-[4px]">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      value={shippingAddress.address}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                      className={`w-full h-[48px] rounded-[12px] border-[1px] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors ${errors.address ? 'border-red-500' : 'border-[rgba(0,0,0,0.1)]'}`}
                      placeholder="House no., Street name, Barangay"
                    />
                    {errors.address && <p className="text-red-500 text-[12px] mt-[4px]">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-[16px]">
                    <div>
                      <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                        City *
                      </label>
                      <input
                        type="text"
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                        className={`w-full h-[48px] rounded-[12px] border-[1px] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors ${errors.city ? 'border-red-500' : 'border-[rgba(0,0,0,0.1)]'}`}
                        placeholder="City, Province"
                      />
                      {errors.city && <p className="text-red-500 text-[12px] mt-[4px]">{errors.city}</p>}
                    </div>

                    <div>
                      <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        value={shippingAddress.postalCode}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                        className={`w-full h-[48px] rounded-[12px] border-[1px] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors ${errors.postalCode ? 'border-red-500' : 'border-[rgba(0,0,0,0.1)]'}`}
                        placeholder="1234"
                      />
                      {errors.postalCode && <p className="text-red-500 text-[12px] mt-[4px]">{errors.postalCode}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[32px]">
                <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[24px] text-[#2d2d2d] mb-[24px]">
                  Shipping Method
                </h2>

                <div className="space-y-[16px]">
                  {shippingMethods.map(method => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedShipping(method)}
                      className={`w-full p-[20px] rounded-[12px] border-[2px] text-left transition-all ${
                        selectedShipping.id === method.id
                          ? 'border-[#ff1a75] bg-pink-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[16px]">
                          <div className={`size-[20px] rounded-full border-[2px] flex items-center justify-center ${
                            selectedShipping.id === method.id ? 'border-[#ff1a75]' : 'border-gray-300'
                          }`}>
                            {selectedShipping.id === method.id && (
                              <div className="size-[10px] rounded-full bg-[#ff1a75]" />
                            )}
                          </div>
                          <div>
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                              {method.name}
                            </p>
                            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[18px] text-[#ff1a75]">
                          {method.cost === 0 ? 'FREE' : `₱${method.cost}`}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[32px]">
                <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[24px] text-[#2d2d2d] mb-[16px]">
                  Payment
                </h2>
                <div className="flex items-center gap-[12px] p-[16px] bg-green-50 rounded-[12px] border border-green-200">
                  <svg className="size-[24px] text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-green-800">
                      Secure Payment via PayMongo
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-green-700">
                      GCash, Credit/Debit Card, PayMaya, Online Banking
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="col-span-1">
              <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[32px] sticky top-[32px]">
                <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[24px] text-[#2d2d2d] mb-[24px]">
                  Order Summary
                </h2>

                {/* Cart Items */}
                <div className="space-y-[16px] mb-[24px] max-h-[300px] overflow-y-auto">
                  {cart.map((item, idx) => (
                    <div key={`${item.id}-${item.selectedShade?.id ?? idx}`} className="flex items-center gap-[12px]">
                      <div className="size-[60px] bg-[#fffbf0] rounded-[8px] overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d] truncate">
                          {item.name}
                        </p>
                        {item.selectedShade && (
                          <div className="flex items-center gap-[4px]">
                            <span
                              className="inline-block size-[10px] rounded-full border border-gray-300"
                              style={{ backgroundColor: item.selectedShade.color }}
                            />
                            <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[11px] text-[#4a5565]">
                              {item.selectedShade.name}
                            </span>
                          </div>
                        )}
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

                {/* Price Breakdown */}
                <div className="space-y-[12px] pt-[24px] border-t border-gray-200">
                  <div className="flex justify-between">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
                      Subtotal
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                      ₱{subtotal.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
                      Shipping
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                      {shippingCost === 0 ? 'FREE' : `₱${shippingCost.toFixed(2)}`}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-[12px] border-t border-gray-200">
                    <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d]">
                      Total
                    </p>
                    <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#ff1a75]">
                      ₱{total.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Delivery Estimate */}
                <div className="mt-[24px] p-[16px] bg-blue-50 rounded-[12px]">
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d] mb-[4px]">
                    📦 Estimated Delivery
                  </p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                    {selectedShipping.estimatedDays}
                  </p>
                </div>

                {/* Payment Error */}
                {paymentError && (
                  <div className="mt-[16px] p-[12px] bg-red-50 rounded-[12px] border border-red-200">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-red-600">
                      {paymentError}
                    </p>
                  </div>
                )}

                {/* Pay Now Button */}
                <button
                  onClick={handlePayNow}
                  disabled={isProcessingPayment}
                  className={`w-full mt-[24px] h-[56px] rounded-[26843500px] transition-colors font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[18px] flex items-center justify-center gap-[8px] ${
                    isProcessingPayment
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#16a34a] text-white hover:bg-[#15803d]'
                  }`}
                >
                  {isProcessingPayment ? (
                    <>
                      <svg className="animate-spin size-[20px] text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Redirecting to payment...
                    </>
                  ) : (
                    'Pay Now'
                  )}
                </button>

                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565] text-center mt-[16px]">
                  By placing your order, you agree to our Terms & Conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
