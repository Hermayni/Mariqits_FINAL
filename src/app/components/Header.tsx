import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import svgPaths from '../../imports/svg-6pk6qac8nv';
import imgEllipse261 from "figma:asset/8c6df8181bc3056efe2b6a0ae06f0995d03c6188.png";

export default function Header() {
  const navigate = useNavigate();
  const { user, isAuthenticated, searchQuery, setSearchQuery, cartCount, wishlist } = useApp();
  const [searchInput, setSearchInput] = useState(searchQuery);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    // If not on home page, navigate to home with search query
    if (window.location.pathname !== '/') {
      navigate('/');
    }
  };
  
  const handleCartClick = () => {
    navigate('/cart');
  };
  
  const handleWishlistClick = () => {
    navigate('/wishlist');
  };
  
  const handleLogoClick = () => {
    navigate('/');
  };
  
  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/signin');
    }
  };
  
  const handleAdminClick = () => {
    navigate('/admin');
  };
  
  // Check if user is admin
  const isAdmin = user?.email === 'admin@mariqits.com';
  
  return (
    <div className="bg-white border-[rgba(255,102,178,0.2)] border-b-[0.8px] border-solid w-full">
      {/* Top Banner */}
      <div 
        className="content-stretch flex flex-col h-[36px] items-start pt-[8px] px-[68.4px] w-full" 
        style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 26, 117) 0%, rgb(255, 36, 121) 7.1429%, rgb(255, 45, 126) 14.286%, rgb(255, 52, 130) 21.429%, rgb(255, 58, 135) 28.571%, rgb(255, 63, 139) 35.714%, rgb(255, 69, 143) 42.857%, rgb(255, 74, 148) 50%, rgb(255, 78, 152) 57.143%, rgb(255, 82, 156) 64.286%, rgb(255, 87, 161) 71.429%, rgb(255, 91, 165) 78.571%, rgb(255, 95, 169) 85.714%, rgb(255, 98, 174) 92.857%, rgb(255, 102, 178) 100%)" }}
      >
        <div className="h-[20px] relative shrink-0 w-full">
          <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-1/2 text-[14px] text-center text-white top-[-0.2px] whitespace-nowrap">
            ✨ Free shipping on orders over ₱1,500 | Shop now and get 20% off your first purchase!
          </p>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="h-[82px] px-[68.4px] py-[16px]">
        <div className="flex items-center justify-between h-full w-full">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="h-[66px] w-[70px] cursor-pointer"
          >
            <div className="relative size-full">
              <img alt="Mariqits Logo" className="block max-w-none size-full" src={imgEllipse261} />
            </div>
          </button>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="h-[49.6px] w-[672px] relative">
            <div className="absolute bg-white h-[49.6px] left-0 rounded-[26843500px] top-0 w-[672px]">
              <div className="content-stretch flex items-center overflow-clip pl-[24px] pr-[48px] py-[12px] relative rounded-[inherit] size-full">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search for products, brands, or categories..."
                  className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] w-full text-[16px] text-[#2d2d2d] placeholder:text-[rgba(45,45,45,0.5)] outline-none bg-transparent"
                />
              </div>
              <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,102,178,0.3)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
            </div>
            <button 
              type="submit"
              className="absolute bg-[#ff1a75] content-stretch flex flex-col items-start left-[628px] pt-[8px] px-[8px] rounded-[26843500px] size-[36px] top-[6.8px] cursor-pointer hover:bg-[#e01666] transition-colors"
            >
              <div className="h-[20px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]">
                  <div className="absolute inset-[-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path d={svgPaths.p32110270} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]">
                  <div className="absolute inset-[-23.26%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.25 5.25">
                      <path d={svgPaths.p2b5f6e80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </form>
          
          {/* Right Section - User, Wishlist, Cart */}
          <div className="flex items-center gap-[16px]">
            {/* User Profile */}
            <button 
              onClick={handleProfileClick}
              className="flex gap-[8px] items-center px-[16px] h-[36px] rounded-[26843500px] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g>
                    <path d={svgPaths.p2026e800} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p32ab0300} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
              {isAuthenticated && user && (
                <div className="h-[20px]">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] text-[#2d2d2d] text-[14px] whitespace-nowrap">
                    {user.name.split(' ')[0]}
                  </p>
                </div>
              )}
            </button>
            
            {/* Wishlist */}
            <button 
              onClick={handleWishlistClick}
              className="relative content-stretch flex flex-col items-start pt-[8px] px-[8px] rounded-[26843500px] size-[40px] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-[12.5%_8.33%]">
                  <div className="absolute inset-[-5.56%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                      <path d={svgPaths.p1b764040} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              {wishlist.length > 0 && (
                <div className="absolute -top-1 -right-1 bg-[#ff1a75] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                  {wishlist.length}
                </div>
              )}
            </button>
            
            {/* Cart */}
            <button 
              onClick={handleCartClick}
              className="relative bg-[#ff1a75] content-stretch flex gap-[8px] h-[40px] items-center px-[16px] rounded-[26843500px] cursor-pointer hover:bg-[#e01666] transition-colors"
            >
              <div className="size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_cart)">
                    <path d={svgPaths.p32514c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2734ea00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p24a52d80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                  <defs>
                    <clipPath id="clip0_cart">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="h-[24px]">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] text-[16px] text-white whitespace-nowrap">
                  Cart
                </p>
              </div>
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-white text-[#ff1a75] rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                  {cartCount}
                </div>
              )}
            </button>
            
            {/* Admin Panel */}
            {isAdmin && (
              <button 
                onClick={handleAdminClick}
                className="relative bg-[#ff1a75] content-stretch flex gap-[8px] h-[40px] items-center px-[16px] rounded-[26843500px] cursor-pointer hover:bg-[#e01666] transition-colors"
              >
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_admin)">
                      <path d={svgPaths.p32514c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p2734ea00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p24a52d80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                    <defs>
                      <clipPath id="clip0_admin">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="h-[24px]">
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] text-[16px] text-white whitespace-nowrap">
                    Admin
                  </p>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}