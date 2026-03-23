import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { useApp } from '../context/AppContext';
import imgSection from "figma:asset/b2f2c5f7b5c4143fbae594602a77feffc9464566.png";
import imgContainer1 from "figma:asset/bc4cd1008d7767e49c0046c5a505b64e499255f5.png";
import imgContainer from "figma:asset/01c25020528a412612f067a4968b1018cc4c4a2c.png";

export default function Home() {
  const navigate = useNavigate();
  const { products } = useApp();
  
  const featuredProducts = products.slice(0, 3);
  const thisMonthProducts = products.slice(0, 4);
  
  return (
    <Layout>
      {/* Hero Section */}
      <div 
        className="relative h-[512px] overflow-clip w-full"
        style={{ backgroundImage: "linear-gradient(126.87deg, rgb(255, 240, 248) 0%, rgb(255, 237, 247) 7.1429%, rgb(255, 235, 247) 14.286%, rgb(255, 232, 246) 21.429%, rgb(255, 230, 245) 28.571%, rgb(255, 227, 244) 35.714%, rgb(255, 225, 244) 42.857%, rgb(255, 222, 243) 50%, rgb(255, 220, 242) 57.143%, rgb(255, 217, 242) 64.286%, rgb(255, 214, 241) 71.429%, rgb(255, 212, 240) 78.571%, rgb(255, 209, 239) 85.714%, rgb(255, 207, 239) 92.857%, rgb(255, 204, 238) 100%)" }}
      >
        <div className="max-w-[1440px] mx-auto px-[68.4px] h-full flex items-center">
          <div className="flex-1 max-w-[600px]">
            <h1 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[64px] text-[#2d2d2d] leading-[1.2] mb-[16px]">
              Discover Your
              <br />
              Beauty Essence
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[18px] text-[#4a5565] mb-[32px] max-w-[480px]">
              Explore our curated collection of premium beauty products designed to enhance your natural glow
            </p>
            <button 
              onClick={() => navigate('/products')}
              className="bg-[#ff1a75] text-white px-[32px] py-[16px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] shadow-lg"
            >
              Shop Now
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src={imgSection} alt="Hero" className="max-w-[500px] w-full h-auto" />
          </div>
        </div>
      </div>
      
      {/* This Might Like Section */}
      <div className="bg-white py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[68.4px]">
          <div className="text-center mb-[48px]">
            <h2 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[48px] text-[#2d2d2d] mb-[12px]">
              This Might Like
            </h2>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
              Handpicked favorites just for you
            </p>
          </div>
          
          <div className="grid grid-cols-4 gap-[24px]">
            {thisMonthProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div 
        className="py-[80px]"
        style={{ backgroundImage: "linear-gradient(126.87deg, rgb(255, 240, 248) 0%, rgb(255, 237, 247) 7.1429%, rgb(255, 235, 247) 14.286%, rgb(255, 232, 246) 21.429%, rgb(255, 230, 245) 28.571%, rgb(255, 227, 244) 35.714%, rgb(255, 225, 244) 42.857%, rgb(255, 222, 243) 50%, rgb(255, 220, 242) 57.143%, rgb(255, 217, 242) 64.286%, rgb(255, 214, 241) 71.429%, rgb(255, 212, 240) 78.571%, rgb(255, 209, 239) 85.714%, rgb(255, 207, 239) 92.857%, rgb(255, 204, 238) 100%)" }}
      >
        <div className="max-w-[1440px] mx-auto px-[68.4px]">
          <div className="text-center mb-[48px]">
            <h2 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[48px] text-[#2d2d2d] mb-[12px]">
              Featured Products
            </h2>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
              Our best-selling beauty essentials
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-[32px]">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} showBadge />
            ))}
          </div>
        </div>
      </div>
      
      {/* Service Features */}
      <div 
        className="py-[64px]"
        style={{ backgroundImage: "linear-gradient(126.87deg, rgb(255, 240, 248) 0%, rgb(255, 237, 247) 7.1429%, rgb(255, 235, 247) 14.286%, rgb(255, 232, 246) 21.429%, rgb(255, 230, 245) 28.571%, rgb(255, 227, 244) 35.714%, rgb(255, 225, 244) 42.857%, rgb(255, 222, 243) 50%, rgb(255, 220, 242) 57.143%, rgb(255, 217, 242) 64.286%, rgb(255, 214, 241) 71.429%, rgb(255, 212, 240) 78.571%, rgb(255, 209, 239) 85.714%, rgb(255, 207, 239) 92.857%, rgb(255, 204, 238) 100%)" }}
      >
        <div className="max-w-[1440px] mx-auto px-[68.4px]">
          <div className="grid grid-cols-4 gap-[32px]">
            {[
              { icon: '🚚', title: 'Premium Delivery', desc: 'Fast and secure shipping' },
              { icon: '💝', title: 'Free Shipping', desc: 'On orders over ₱1,500' },
              { icon: '🔒', title: 'Secure Checkout', desc: 'Safe payment methods' },
              { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-[48px] mb-[16px]">{feature.icon}</div>
                <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[18px] text-[#2d2d2d] mb-[8px]">
                  {feature.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}