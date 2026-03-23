import { useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { useApp } from '../context/AppContext';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { searchProducts } = useApp();

  const query = searchParams.get('q') || '';
  const results = useMemo(() => searchProducts(query), [query, searchProducts]);

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
                onClick={() => navigate('/products')}
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
