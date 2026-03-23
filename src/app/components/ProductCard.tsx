import { useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Product } from '../context/AppContext';
import svgPaths from '../../imports/svg-6pk6qac8nv';

export default function ProductCard({ product, showBadge = false }: { product: Product; showBadge?: boolean }) {
  const navigate = useNavigate();
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useApp();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div
      onClick={handleProductClick}
      className="relative bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[16px] cursor-pointer hover:shadow-lg transition-shadow"
    >
      {showBadge && (
        <div className="absolute top-[24px] left-[24px] bg-[#ff1a75] px-[12px] py-[4px] rounded-[26843500px] z-10">
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[10px] text-white uppercase">BESTSELLER</p>
        </div>
      )}
      <button
        onClick={handleToggleWishlist}
        className="absolute top-[24px] right-[24px] bg-white rounded-full p-[8px] shadow-md z-10 hover:bg-pink-50 transition-colors"
      >
        <svg className="size-[20px]" fill={isInWishlist(product.id) ? "#ff1a75" : "none"} viewBox="0 0 24 24">
          <path d={svgPaths.p1dff4600} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      <div className="aspect-square mb-[16px] flex items-center justify-center bg-[#fffbf0] rounded-[12px] overflow-hidden">
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
          onClick={handleAddToCart}
          className="bg-[#ff1a75] text-white px-[16px] py-[8px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
