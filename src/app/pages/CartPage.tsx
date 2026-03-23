import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { useApp } from '../context/AppContext';
import svgPaths from '../../imports/svg-gpylipp5vg';

export default function CartPage() {
  const navigate = useNavigate();
  const { cart, updateCartQuantity, removeFromCart, cartTotal, cartCount } = useApp();
  
  const shippingFee = cartTotal >= 1500 ? 0 : 150;
  const total = cartTotal + shippingFee;
  
  if (cart.length === 0) {
    return (
      <Layout>
        <div className="bg-[#fffbf0] min-h-[600px] flex items-center justify-center">
          <div className="text-center max-w-[400px]">
            <div className="size-[96px] mx-auto mb-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 96 96">
                <g>
                  <path d={svgPaths.p3fe0a700} stroke="url(#paint0_linear)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                  <path d="M12 24H84" stroke="url(#paint1_linear)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                  <path d={svgPaths.p1ac1fb80} stroke="#F14749" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear" x1="48" x2="48" y1="8" y2="88">
                    <stop stopColor="#E4550C" />
                    <stop offset="1" stopColor="#FE3A86" />
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="12" x2="84" y1="24.5" y2="24.5">
                    <stop stopColor="#EA4E2B" />
                    <stop offset="1" stopColor="#EA4E2A" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[30px] text-[#2d2d2d] mb-[16px]">
              Your Cart is Empty
            </h2>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565] mb-[32px]">
              Add some beautiful products to get started!
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
  
  return (
    <Layout>
      <div className="bg-white min-h-[600px] py-[48px]">
        <div className="max-w-[1200px] mx-auto px-[32px]">
          <h1 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[36px] text-[#2d2d2d] mb-[8px]">
            Shopping Cart
          </h1>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565] mb-[32px]">
            {cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart
          </p>
          
          <div className="grid grid-cols-3 gap-[32px]">
            {/* Cart Items */}
            <div className="col-span-2 space-y-[16px]">
              {cart.map((item, cartIdx) => (
                <div key={`${item.id}-${item.selectedShade?.id ?? cartIdx}`} className="bg-white border-[0.8px] border-[rgba(255,102,178,0.2)] rounded-[16px] p-[24px] flex gap-[24px]">
                  <div className="size-[120px] bg-[#fffbf0] rounded-[12px] overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#ff1a75] uppercase mb-[4px]">
                      {item.brand}
                    </p>
                    <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-[#2d2d2d] mb-[4px]">
                      {item.name}
                    </h3>
                    {item.selectedShade && (
                      <div className="flex items-center gap-[6px] mb-[8px]">
                        <span
                          className="inline-block size-[14px] rounded-full border border-gray-300"
                          style={{ backgroundColor: item.selectedShade.color }}
                        />
                        <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#4a5565]">
                          {item.selectedShade.name}
                        </span>
                      </div>
                    )}
                    <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[20px] text-[#2d2d2d] mb-[16px]">
                      ₱{item.price.toFixed(2)}
                      <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565] ml-[8px]">
                        each
                      </span>
                    </p>
                    <div className="flex items-center gap-[16px]">
                      <div className="flex items-center border-[1px] border-[rgba(255,102,178,0.3)] rounded-[8px] overflow-hidden">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1, item.selectedShade?.id)}
                          className="px-[16px] py-[8px] hover:bg-gray-50 transition-colors"
                        >
                          −
                        </button>
                        <div className="px-[16px] py-[8px] border-x-[1px] border-[rgba(255,102,178,0.3)]">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1, item.selectedShade?.id)}
                          className="px-[16px] py-[8px] hover:bg-gray-50 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedShade?.id)}
                        className="text-[#ff1a75] hover:underline font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[24px] text-[#ff1a75]">
                      ₱{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order Summary */}
            <div className="col-span-1">
              <div className="bg-white border-[0.8px] border-[rgba(255,102,178,0.2)] rounded-[16px] p-[24px] sticky top-[24px]">
                <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[24px]">
                  Order Summary
                </h3>
                
                <div className="space-y-[16px] mb-[24px]">
                  <div className="flex justify-between">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
                      Subtotal ({cartCount} items)
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                      ₱{cartTotal.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
                      Shipping Fee
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                      {shippingFee === 0 ? 'FREE' : `₱${shippingFee.toFixed(2)}`}
                    </p>
                  </div>
                  {cartTotal < 1500 && (
                    <div className="bg-[#fff9e6] px-[16px] py-[12px] rounded-[8px]">
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#d97706]">
                        Add ₱{(1500 - cartTotal).toFixed(2)} more to get FREE shipping!
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="border-t-[1px] border-[rgba(255,102,178,0.2)] pt-[16px] mb-[24px]">
                  <div className="flex justify-between items-center">
                    <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d]">
                      Total
                    </p>
                    <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#ff1a75]">
                      ₱{total.toFixed(2)}
                    </p>
                  </div>
                </div>
                
                {/* Checkout Button */}
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-[#ff1a75] text-white h-[56px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[18px]"
                >
                  Proceed to Checkout
                </button>
                
                <button
                  onClick={() => navigate('/')}
                  className="w-full text-[#ff1a75] text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] hover:underline"
                >
                  Continue Shopping
                </button>
                
                <div className="mt-[24px] pt-[24px] border-t-[1px] border-[rgba(255,102,178,0.2)] text-center">
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565] flex items-center justify-center gap-[4px]">
                    🔒 Secure Checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}