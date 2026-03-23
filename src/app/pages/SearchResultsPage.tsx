import { useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { useApp } from '../context/AppContext';
import { Product } from '../context/AppContext';
import svgPaths from '../../imports/svg-6pk6qac8nv';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { searchProducts, addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useApp();

  const query = searchParams.get('q') || '';
  const results = useMemo(() => searchProducts(query), [query, searchProducts]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleToggleWishlist = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div
      onClick={() => handleProductClick(product.id)}
      className="relative bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[16px] cursor-pointer hover:shadow-lg transition-shadow"
    >
      <button
        onClick={(e) => handleToggleWishlist(product, e)}
        className="absolute top-[24px] right-[24px] bg-white rounded-full p-[8px] shadow-md z-10 hover:bg-pink-50 transition-colors"
      >
        <svg className="size-[20px]" fill={isInWishlist(product.id) ? "#ff1a75" : "none"} viewBox="0 0 22 20">
          <path d={svgPaths.p1b764040} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
          onClick={(e) => handleAddToCart(product, e)}
          className="bg-[#ff1a75] text-white px-[16px] py-[8px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="bg-white min-h-[60vh] py-[60px]">
        <div className="max-w-[1440px] mx-auto px-[68.4px]">
          <button
            onClick={() => navigate('/')}
            className="mb-[32px] flex items-center gap-[8px] text-[#ff1a75] hover:text-[#e01666] transition-colors font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[16px] cursor-pointer"
          >
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M15.833 10H4.167M4.167 10L10 15.833M4.167 10L10 4.167" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
            Back to Home
          </button>

          <div className="mb-[48px]">
            <h1 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[40px] text-[#2d2d2d] mb-[8px]">
              Search Results for &ldquo;{query}&rdquo;
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
              {results.length} {results.length === 1 ? 'product' : 'products'} found
            </p>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-4 gap-[24px]">
              {results.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-[80px]">
              <div className="text-[64px] mb-[24px]">🔍</div>
              <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[28px] text-[#2d2d2d] mb-[12px]">
                No Results Found
              </h2>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565] text-center max-w-[400px] mb-[32px]">
                We couldn&apos;t find any products matching &ldquo;{query}&rdquo;. Try using different keywords or browse our collection.
              </p>
              <button
                onClick={() => navigate('/')}
                className="bg-[#ff1a75] text-white px-[32px] py-[14px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] cursor-pointer"
              >
                Browse All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
