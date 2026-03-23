import { useParams, useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { useAdmin } from '../context/AdminContext';
import svgPaths from '../../imports/svg-t2f3uc5fax';

export default function OrderDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getOrderById } = useAdmin();
  
  const order = id ? getOrderById(id) : null;
  
  if (!order) {
    return (
      <Layout>
        <div className="min-h-[600px] flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-[#2d2d2d] mb-[16px]">
              Order Not Found
            </h2>
            <button
              onClick={() => navigate('/profile')}
              className="bg-[#ff1a75] text-white px-[32px] py-[16px] rounded-[26843500px] hover:bg-[#e01666] transition-colors"
            >
              Back to Profile
            </button>
          </div>
        </div>
      </Layout>
    );
  }
  
  const subtotal = order.products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
  const shipping = order.total - subtotal;
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Layout>
      <div className="bg-[#fffbf0] min-h-[600px] py-[48px]">
        <div className="max-w-[1200px] mx-auto px-[32px]">
          {/* Back Button */}
          <button
            onClick={() => navigate('/profile')}
            className="flex items-center gap-[8px] mb-[32px] text-[#ff1a75] hover:underline font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px]"
          >
            ← Back to Profile
          </button>
          
          {/* Header */}
          <div className="flex items-start justify-between mb-[32px]">
            <div>
              <h1 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[36px] text-[#2d2d2d] mb-[4px]">
                Order Details
              </h1>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
                Order #{order.id}
              </p>
            </div>
            <div className={`px-[16px] py-[8px] rounded-[26843500px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] ${getStatusColor(order.status)}`}>
              {order.status}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-[32px]">
            {/* Order Items */}
            <div className="col-span-2 space-y-[24px]">
              <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[24px]">
                <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[24px]">
                  Order Items
                </h2>
                
                {order.products.map(product => (
                  <div key={product.id} className="flex items-start gap-[16px] pb-[16px] mb-[16px] border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                    <div className="size-[80px] bg-[#fffbf0] rounded-[12px] overflow-hidden flex-shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[4px]">
                        {product.name}
                      </p>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565] mb-[8px]">
                        Quantity: {product.quantity}
                      </p>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                        Price: ₱{product.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[20px] text-[#ff1a75]">
                      ₱{(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                
                <div className="mt-[24px] pt-[24px] border-t border-gray-200 space-y-[12px]">
                  <div className="flex justify-between">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">Subtotal</p>
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">₱{subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">Shipping</p>
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">₱{shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between items-center pt-[12px] border-t border-gray-200">
                    <p className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d]">Total</p>
                    <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#ff1a75]">₱{order.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              
              {/* Order Timeline */}
              <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[24px]">
                <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[24px]">
                  Order Timeline
                </h2>
                
                <div className="space-y-[24px]">
                  {order.timeline?.map((step, index) => (
                    <div key={index} className="flex items-start gap-[16px]">
                      <div className={`size-[40px] rounded-full flex items-center justify-center flex-shrink-0 ${step.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                        {step.completed ? (
                          <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                            <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                          </svg>
                        ) : (
                          <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="8.33333" stroke="#9CA3AF" strokeWidth="1.66667"/>
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[4px]">
                          {step.status}
                        </p>
                        {step.description && (
                          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565] mb-[4px]">
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
            </div>
            
            {/* Sidebar */}
            <div className="col-span-1 space-y-[24px]">
              {/* Shipping Address */}
              <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[24px]">
                <div className="flex items-center gap-[8px] mb-[16px]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p26ddc800} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p35ba4680} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                  <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                    Shipping Address
                  </h3>
                </div>
                {order.shippingAddress && (
                  <div className="space-y-[4px]">
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                      {order.shippingAddress.name}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                      {order.shippingAddress.phone}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                      {order.shippingAddress.address}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                      {order.shippingAddress.city}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                      {order.shippingAddress.postalCode}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Payment Method */}
              <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[24px]">
                <div className="flex items-center gap-[8px] mb-[16px]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <rect x="2.5" y="4.16667" width="15" height="11.6667" rx="1.66667" stroke="#FF1A75" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 8.33333H17.5" stroke="#FF1A75" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                    Payment Method
                  </h3>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                  {order.payment}
                </p>
              </div>
              
              {/* Estimated Delivery */}
              <div className="bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[24px]">
                <div className="flex items-center gap-[8px] mb-[16px]">
                  <span className="text-[20px]">📅</span>
                  <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d]">
                    Estimated Delivery
                  </h3>
                </div>
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">
                  March 5, 2026
                </p>
              </div>
              
              {/* Write Review Button */}
              {order.status === 'Delivered' && (
                <button
                  onClick={() => alert('Write a review feature (Demo)')}
                  className="w-full bg-[#ff1a75] text-white h-[48px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
                >
                  Write a Review
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
