import React from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { useApp } from '../context/AppContext';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../components/ui/carousel';
import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';
import imgHeroProduct from "figma:asset/bc4cd1008d7767e49c0046c5a505b64e499255f5.png";

export default function Home() {
  const navigate = useNavigate();
  const { products } = useApp();
  
  const carouselProducts = products.slice(0, 8);
  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[824px] overflow-hidden w-full">
        <img src="/hero-bg.png" className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
        <div className="relative max-w-[1440px] mx-auto px-[68px] h-full flex items-center">
          <div className="max-w-[560px]">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[16px] text-[#ff1a75] uppercase tracking-[2px] mb-[16px]">
              Welcome to Mariqits
            </p>
            <h1 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[72px] text-[#2d2d2d] leading-[1.1] mb-[24px]">
              Your Beauty,
              <br />
              Your Rules
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[18px] text-[#4a5565] mb-[40px] max-w-[480px] leading-[1.6]">
              Explore our curated collection of premium Filipino beauty products designed to enhance your natural glow.
            </p>
            <div className="flex gap-[16px]">
              <button
                onClick={() => navigate('/products')}
                className="bg-[#ff1a75] text-white px-[32px] py-[16px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] shadow-lg"
              >
                Shop Now
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('featured-products');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-[2px] border-[#ff1a75] text-[#ff1a75] px-[32px] py-[14px] rounded-[26843500px] hover:bg-[#ff1a75] hover:text-white transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
              >
                View Featured
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <img src={imgHeroProduct} alt="Featured product" className="max-w-[500px] w-full h-auto rounded-[24px] shadow-2xl" />
          </div>
        </div>
      </div>

      {/* You Might Like Carousel */}
      <div className="bg-white py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[68px]">
          <div className="text-center mb-[48px]">
            <h2 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[48px] text-[#2d2d2d] mb-[12px]">
              You Might Like
            </h2>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
              Handpicked favorites just for you
            </p>
          </div>

          <div className="px-[48px]">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {carouselProducts.map(product => (
                  <CarouselItem key={product.id} className="basis-1/3 lg:basis-1/4">
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div
        id="featured-products"
        className="py-[80px]"
        style={{ backgroundImage: "linear-gradient(126.87deg, rgb(255, 240, 248) 0%, rgb(255, 237, 247) 7.1429%, rgb(255, 235, 247) 14.286%, rgb(255, 232, 246) 21.429%, rgb(255, 230, 245) 28.571%, rgb(255, 227, 244) 35.714%, rgb(255, 225, 244) 42.857%, rgb(255, 222, 243) 50%, rgb(255, 220, 242) 57.143%, rgb(255, 217, 242) 64.286%, rgb(255, 214, 241) 71.429%, rgb(255, 212, 240) 78.571%, rgb(255, 209, 239) 85.714%, rgb(255, 207, 239) 92.857%, rgb(255, 204, 238) 100%)" }}
      >
        <div className="max-w-[1440px] mx-auto px-[68px]">
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

      {/* All Makeup Products */}
      <div className="bg-white py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[68px]">
          <div className="text-center mb-[48px]">
            <h2 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[48px] text-[#2d2d2d] mb-[12px]">
              All Makeup Products
            </h2>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
              Browse our complete collection
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[24px]">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Service Features */}
      <div
        className="py-[64px]"
        style={{ backgroundImage: "linear-gradient(126.87deg, rgb(255, 240, 248) 0%, rgb(255, 237, 247) 7.1429%, rgb(255, 235, 247) 14.286%, rgb(255, 232, 246) 21.429%, rgb(255, 230, 245) 28.571%, rgb(255, 227, 244) 35.714%, rgb(255, 225, 244) 42.857%, rgb(255, 222, 243) 50%, rgb(255, 220, 242) 57.143%, rgb(255, 217, 242) 64.286%, rgb(255, 214, 241) 71.429%, rgb(255, 212, 240) 78.571%, rgb(255, 209, 239) 85.714%, rgb(255, 207, 239) 92.857%, rgb(255, 204, 238) 100%)" }}
      >
        <div className="max-w-[1440px] mx-auto px-[68px]">
          <div className="grid grid-cols-4 gap-[32px]">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over ₱1,500' },
              { icon: RotateCcw, title: 'Easy Returns', desc: '30-day return policy' },
              { icon: ShieldCheck, title: 'Secure Payment', desc: 'Safe & encrypted checkout' },
              { icon: Headphones, title: 'Expert Support', desc: '24/7 customer service' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-[64px] h-[64px] rounded-full bg-[#ff1a75] flex items-center justify-center mx-auto mb-[16px]">
                  <feature.icon className="w-[28px] h-[28px] text-white" />
                </div>
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
