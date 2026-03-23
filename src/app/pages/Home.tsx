import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { useApp } from '../context/AppContext';
import { Product } from '../context/AppContext';
import svgPaths from '../../imports/svg-6pk6qac8nv';
import imgSection from "figma:asset/b2f2c5f7b5c4143fbae594602a77feffc9464566.png";
import imgContainer1 from "figma:asset/bc4cd1008d7767e49c0046c5a505b64e499255f5.png";
import imgContainer from "figma:asset/01c25020528a412612f067a4968b1018cc4c4a2c.png";

export default function Home() {
  const navigate = useNavigate();
  const { products, searchQuery, searchProducts, addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [displayProducts, setDisplayProducts] = useState<Product[]>(products);
  
  // Update display products when search query or category changes
  useEffect(() => {
    let filtered = products;
    
    // Apply search filter
    if (searchQuery) {
      filtered = searchProducts(searchQuery);
    }
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    setDisplayProducts(filtered);
  }, [searchQuery, selectedCategory, products, searchProducts]);
  
  const categories = ['All', 'Makeup', 'Skincare', 'Hair Care', 'Fragrance', 'Body Care'];
  
  const featuredProducts = products.slice(0, 3);
  const thisMonthProducts = products.slice(0, 4);
  const allMakeupProducts = products.filter(p => p.category === 'Makeup');
  
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
  
  const ProductCard = ({ product, showBadge = false }: { product: Product; showBadge?: boolean }) => (
    <div 
      onClick={() => handleProductClick(product.id)}
      className="relative bg-white rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.2)] p-[16px] cursor-pointer hover:shadow-lg transition-shadow"
    >
      {showBadge && (
        <div className="absolute top-[24px] left-[24px] bg-[#ff1a75] px-[12px] py-[4px] rounded-[26843500px] z-10">
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[10px] text-white uppercase">BESTSELLER</p>
        </div>
      )}
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
              onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
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
      
      {/* All Makeup Products Section */}
      <div className="bg-white py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[68.4px]">
          <div className="text-center mb-[48px]">
            <h2 className="font-['IM_FELL_DW_Pica:Italic',sans-serif] italic text-[48px] text-[#2d2d2d] mb-[12px]">
              All Makeup Products
            </h2>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565] mb-[32px]">
              Discover our complete makeup collection
            </p>
            
            {/* Category Filter */}
            <div className="flex justify-center gap-[16px] mb-[48px]">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-[24px] py-[12px] rounded-[26843500px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#ff1a75] text-white'
                      : 'bg-white text-[#4a5565] border-[1px] border-[rgba(255,102,178,0.3)] hover:border-[#ff1a75]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-[24px]">
            {displayProducts.slice(0, 20).map(product => (
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