import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { useApp, Shade } from '../context/AppContext';
import { useNotification } from '../context/NotificationContext';
import svgPaths from '../../imports/svg-gtkd467we';

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist, getProductById } = useApp();
  const { showNotification } = useNotification();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedShade, setSelectedShade] = useState<Shade | null>(null);
  
  const product = id ? getProductById(id) : null;
  
  if (!product) {
    return (
      <Layout>
        <div className="min-h-[600px] flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-[#2d2d2d] mb-[16px]">
              Product Not Found
            </h2>
            <button
              onClick={() => navigate('/')}
              className="bg-[#ff1a75] text-white px-[32px] py-[16px] rounded-[26843500px] hover:bg-[#e01666] transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    if (hasShades && !selectedShade) return;
    addToCart(product, quantity, selectedShade ?? undefined);
    showNotification('cart', `${product.name} added to cart!`);
  };
  
  const handleToggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      showNotification('wishlist', `${product.name} added to wishlist!`);
    }
  };
  
  const productImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const hasShades = product.shades && product.shades.length > 0;
  const needsShadeSelection = hasShades && !selectedShade;
  
  return (
    <Layout>
      <div className="bg-white min-h-[600px] py-[48px]">
        <div className="max-w-[1200px] mx-auto px-[32px]">
          {/* Breadcrumb */}
          <div className="mb-[32px]">
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
              <button onClick={() => navigate('/')} className="hover:text-[#ff1a75]">Home</button>
              {' / '}
              <button onClick={() => navigate('/')} className="hover:text-[#ff1a75]">{product.category}</button>
              {' / '}
              <span className="text-[#2d2d2d]">{product.name}</span>
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-[48px]">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-[#fffbf0] rounded-[16px] mb-[16px] overflow-hidden">
                <img src={productImages[selectedImage] || product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              {productImages.length > 1 && (
                <div className={`grid gap-[12px] ${productImages.length >= 4 ? 'grid-cols-4' : `grid-cols-${productImages.length}`}`}>
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square bg-[#fffbf0] rounded-[12px] overflow-hidden border-[2px] ${
                        selectedImage === idx ? 'border-[#ff1a75]' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#ff1a75] uppercase mb-[8px]">
                {product.brand}
              </p>
              <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[36px] text-[#2d2d2d] mb-[16px]">
                {product.name}
              </h1>
              
              {product.rating && (
                <div className="flex items-center gap-[12px] mb-[24px]">
                  <div className="flex gap-[4px]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="size-[16px]" fill={i < Math.floor(product.rating!) ? "#FFD700" : "none"} viewBox="0 0 16 16">
                        <path d="M8 1L9.545 5.13L14 5.635L11 8.07L11.59 12.5L8 10.385L4.41 12.5L5 8.07L2 5.635L6.455 5.13L8 1Z" stroke="#FFD700" strokeWidth="1" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                    {product.rating} ({product.reviews} reviews)
                  </p>
                </div>
              )}
              
              <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[40px] text-[#ff1a75] mb-[24px]">
                ₱{product.price.toFixed(2)}
              </p>
              
              <div className="mb-[32px]">
                <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-[#2d2d2d] mb-[12px]">
                  Description
                </h3>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565] leading-[1.6]">
                  {product.description}
                </p>
              </div>
              
              {product.inStock !== false && (
                <div className="flex items-center gap-[8px] mb-[24px]">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667"/>
                  </svg>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-green-600">
                    ✓ In Stock - {selectedShade ? `${selectedShade.stock} available` : product.stock ? `${product.stock} available` : '47 available'}
                  </p>
                </div>
              )}
              
              {product.shades && product.shades.length > 0 && (
                <div className="mb-[32px]">
                  <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[12px]">
                    Shades <span className="text-[#ff1a75] text-[13px] font-normal">*required</span>
                  </h3>
                  <div className="flex flex-wrap gap-[12px]">
                    {product.shades.map(shade => (
                      <div key={shade.id} className="flex flex-col items-center gap-[4px]">
                        <button
                          onClick={() => setSelectedShade(shade)}
                          style={{ backgroundColor: shade.color }}
                          className={`size-[40px] rounded-full border-[2px] transition-colors ${
                            selectedShade?.id === shade.id ? 'border-[#ff1a75] ring-2 ring-[#ff1a75] ring-offset-2' : 'border-transparent hover:border-[#ff1a75]'
                          }`}
                          title={shade.name}
                        />
                        <span className={`font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] max-w-[56px] text-center truncate ${
                          selectedShade?.id === shade.id ? 'text-[#ff1a75] font-semibold' : 'text-[#4a5565]'
                        }`}>
                          {shade.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  {needsShadeSelection && (
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#ff1a75] mt-[8px]">
                      Please select a shade to continue
                    </p>
                  )}
                </div>
              )}
              
              <div className="mb-[32px]">
                <h3 className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[12px]">
                  Quantity
                </h3>
                <div className="flex items-center border-[1px] border-[rgba(255,102,178,0.3)] rounded-[12px] overflow-hidden w-[150px]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-[20px] py-[12px] hover:bg-gray-50 transition-colors"
                  >
                    −
                  </button>
                  <div className="px-[20px] py-[12px] border-x-[1px] border-[rgba(255,102,178,0.3)] text-center flex-1">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-[20px] py-[12px] hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex gap-[16px] mb-[32px]">
                <button
                  onClick={handleAddToCart}
                  disabled={!!needsShadeSelection}
                  className={`flex-1 h-[56px] rounded-[26843500px] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] ${
                    needsShadeSelection
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#ff1a75] text-white hover:bg-[#e01666]'
                  }`}
                >
                  {needsShadeSelection ? 'Select a Shade' : 'Add to Cart'}
                </button>
                <button
                  onClick={handleToggleWishlist}
                  className="bg-white border-[2px] border-[#ff1a75] rounded-full size-[56px] flex items-center justify-center hover:bg-pink-50 transition-colors"
                >
                  <svg className="size-[24px]" fill={isInWishlist(product.id) ? "#ff1a75" : "none"} viewBox="0 0 22 20">
                    <path d={svgPaths.p1b764040} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-[16px] pt-[32px] border-t-[1px] border-[rgba(255,102,178,0.2)]">
                <div className="text-center">
                  <div className="text-[24px] mb-[8px]">🚚</div>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#2d2d2d] mb-[4px]">Free Shipping</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] text-[#4a5565]">On orders over ₱1,500</p>
                </div>
                <div className="text-center">
                  <div className="text-[24px] mb-[8px]">↩️</div>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#2d2d2d] mb-[4px]">Easy Returns</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] text-[#4a5565]">30-day return policy</p>
                </div>
                <div className="text-center">
                  <div className="text-[24px] mb-[8px]">💯</div>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#2d2d2d] mb-[4px]">Authentic</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] text-[#4a5565]">100% genuine products</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Customer Reviews Section */}
          <div className="mt-[80px]">
            <h2 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-[#2d2d2d] mb-[32px]">
              Customer Reviews
            </h2>
            
            <div className="grid grid-cols-3 gap-[32px]">
              <div className="col-span-1">
                <div className="bg-[#fff0f8] rounded-[16px] p-[32px] text-center">
                  <div className="text-[64px] font-['Playfair_Display:Bold',sans-serif] font-bold text-[#ff1a75] mb-[8px]">
                    {product.rating}
                  </div>
                  <div className="flex justify-center gap-[4px] mb-[8px]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="size-[20px]" fill={i < Math.floor(product.rating!) ? "#FFD700" : "none"} viewBox="0 0 20 20">
                        <path d="M10 1L12.09 6.58L18 7.27L14 11.14L15.18 17L10 14.27L4.82 17L6 11.14L2 7.27L7.91 6.58L10 1Z" stroke="#FFD700" strokeWidth="1.5" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                    {product.reviews} reviews
                  </p>
                </div>
              </div>
              
              <div className="col-span-2">
                <div className="bg-white border-[0.8px] border-[rgba(255,102,178,0.2)] rounded-[16px] p-[24px]">
                  <div className="flex items-start gap-[16px] mb-[16px]">
                    <div className="flex gap-[4px]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="size-[16px]" fill="#FFD700" viewBox="0 0 16 16">
                          <path d="M8 1L9.545 5.13L14 5.635L11 8.07L11.59 12.5L8 10.385L4.41 12.5L5 8.07L2 5.635L6.455 5.13L8 1Z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex-1">
                      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d] mb-[4px]">
                        Maria Santos
                      </p>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565] mb-[8px]">
                        March 1, 2026
                      </p>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d]">
                        Good coverage and matches my skin tone perfectly. Lasts all day!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
