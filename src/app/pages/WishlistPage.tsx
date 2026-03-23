import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { useApp } from '../context/AppContext';
import svgPaths from '../../imports/svg-3n42949z3g';

export default function WishlistPage() {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist, addToCart } = useApp();
  
  if (wishlist.length === 0) {
    return (
      <Layout>
        <div className="bg-[#fffbf0] min-h-[600px] flex items-center justify-center py-[48px]">
          <div className="max-w-[1200px] w-full mx-auto px-[32px]">
            <h1 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[36px] text-[#2d2d2d] mb-[8px]">
              My Wishlist
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565] mb-[32px]">
              0 items saved
            </p>
            
            <div className="bg-white border-[0.8px] border-[rgba(255,102,178,0.2)] rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[48px] text-center">
              <div className="bg-[#fff0f8] rounded-full size-[96px] mx-auto mb-[24px] flex items-center justify-center">
                <svg className="size-[48px]" fill="none" viewBox="0 0 48 48">
                  <path d={svgPaths.p4e0cf00} stroke="url(#paint0_linear)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="24" x2="24" y1="6" y2="42">
                      <stop stopColor="#E4550C" />
                      <stop offset="1" stopColor="#FE3A86" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[24px] text-[#2d2d2d] mb-[16px]">
                Your wishlist is empty
              </h2>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565] mb-[32px]">
                Save your favorite items to your wishlist and shop them later!
              </p>
              <button
                onClick={() => navigate('/')}
                className="bg-[#ff1a75] text-white px-[32px] py-[16px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              >
                Continue Shopping
              </button>
            </div>
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
            My Wishlist
          </h1>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565] mb-[32px]">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p>
          
          <div className="grid grid-cols-4 gap-[24px]">
            {wishlist.map(product => (
              <div 
                key={product.id}
                className="relative bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[16px] cursor-pointer hover:shadow-lg transition-shadow"
              >
                {product.category === 'Makeup' && (
                  <div className="absolute top-[24px] left-[24px] bg-[#ff1a75] px-[12px] py-[4px] rounded-[26843500px] z-10">
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[10px] text-white uppercase">BESTSELLER</p>
                  </div>
                )}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-[24px] right-[24px] bg-white rounded-full p-[8px] shadow-md z-10 hover:bg-pink-50 transition-colors"
                >
                  <svg className="size-[20px]" fill="#ff1a75" viewBox="0 0 22 20">
                    <path d={svgPaths.p1b764040} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
                
                <div 
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="aspect-square mb-[16px] flex items-center justify-center bg-[#fffbf0] rounded-[12px] overflow-hidden"
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="mb-[8px]">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#ff1a75] uppercase mb-[4px]">{product.brand}</p>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[8px] line-clamp-2">{product.name}</p>
                  {product.rating && (
                    <div className="flex items-center gap-[4px] mb-[8px]">
                      <div className="flex gap-[2px]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="size-[12px]" fill={i < Math.floor(product.rating!) ? "#FFD700" : "none"} viewBox="0 0 12 12">
                            <path d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.5L6 8.885L2.91 10.5L3.5 7.07L1 4.635L4.455 4.13L6 1Z" stroke="#FFD700" strokeWidth="1" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565]">({product.reviews})</p>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[20px] text-[#ff1a75]">₱{product.price.toFixed(2)}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product, 1);
                      removeFromWishlist(product.id);
                    }}
                    className="bg-[#ff1a75] text-white px-[16px] py-[8px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
