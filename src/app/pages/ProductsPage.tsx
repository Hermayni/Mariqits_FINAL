import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { useApp } from '../context/AppContext';

export default function ProductsPage() {
  const navigate = useNavigate();
  const { products } = useApp();

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

          <div className="text-center mb-[48px]">
            <h1 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[48px] text-[#2d2d2d] mb-[12px]">
              All Products
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
              Explore our complete collection of local makeup products
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[24px]">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
