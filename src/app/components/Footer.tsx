import { useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-6pk6qac8nv';
import img02 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";

export default function Footer() {
  const navigate = useNavigate();
  
  return (
    <div 
      className="content-stretch flex flex-col h-[356.6px] items-center pt-[0.8px] px-[36.4px] w-full" 
      style={{ backgroundImage: "linear-gradient(rgb(255, 240, 248) 0%, rgb(255, 242, 249) 10%, rgb(255, 243, 249) 20%, rgb(255, 245, 250) 30%, rgb(255, 246, 251) 40%, rgb(255, 248, 252) 50%, rgb(255, 249, 252) 60%, rgb(255, 251, 253) 70%, rgb(255, 252, 254) 80%, rgb(255, 254, 254) 90%, rgb(255, 255, 255) 100%)" }}
    >
      <div aria-hidden="true" className="absolute border-[rgba(255,102,178,0.2)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="h-[355.8px] relative shrink-0 w-full max-w-[1440px]">
        <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[175px] absolute left-[32px] top-[48px] right-[32px]">
          {/* About Section */}
          <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0">
            <div className="h-[36px] relative shrink-0 w-full">
              <div className="absolute bottom-[-27.2px] h-[127px] left-[-50.4px] w-[339px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="Mariqits Logo" className="absolute h-[90.02%] left-[3.6%] max-w-none top-[15.2%] w-[89.85%]" src={img02} />
                </div>
              </div>
            </div>
            <div className="h-[60px] relative shrink-0 w-full">
              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] w-[308px]">
                Your destination for premium beauty products. Empowering confidence through quality skincare, makeup, and beauty essentials.
              </p>
            </div>
            <div className="content-stretch flex gap-[12px] h-[36px] items-start relative shrink-0 w-full">
              {/* Social Icons */}
              <button className="bg-[#ff1a75] rounded-[26843500px] size-[36px] flex items-center justify-center hover:bg-[#e01666] transition-colors cursor-pointer">
                <div className="h-[20px] w-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p1f29de80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </button>
              <button className="bg-[#ff1a75] rounded-[26843500px] size-[36px] flex items-center justify-center hover:bg-[#e01666] transition-colors cursor-pointer">
                <div className="h-[20px] w-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p1aaf0300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p1a50b2f0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
              </button>
              <button className="bg-[#ff1a75] rounded-[26843500px] size-[36px] flex items-center justify-center hover:bg-[#e01666] transition-colors cursor-pointer">
                <div className="h-[20px] w-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p3693ea00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          
          {/* Customer Service */}
          <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0">
            <div className="h-[27px] relative shrink-0 w-full">
              <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">
                Customer Service
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full">
              <button className="h-[20px] text-left hover:text-[#ff1a75] transition-colors cursor-pointer">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Contact Us</p>
              </button>
              <button className="h-[20px] text-left hover:text-[#ff1a75] transition-colors cursor-pointer">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">FAQs</p>
              </button>
              <button className="h-[20px] text-left hover:text-[#ff1a75] transition-colors cursor-pointer">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Shipping & Delivery</p>
              </button>
              <button className="h-[20px] text-left hover:text-[#ff1a75] transition-colors cursor-pointer">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Returns & Exchanges</p>
              </button>
              <button className="h-[20px] text-left hover:text-[#ff1a75] transition-colors cursor-pointer">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Track Your Order</p>
              </button>
            </div>
          </div>
          
          {/* Shop */}
          <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0">
            <div className="h-[27px] relative shrink-0 w-full">
              <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">
                Shop
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full">
              <button onClick={() => navigate('/products')} className="h-[20px] text-left hover:text-[#ff1a75] transition-colors cursor-pointer">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Skincare</p>
              </button>
              <button onClick={() => navigate('/products')} className="h-[20px] text-left hover:text-[#ff1a75] transition-colors cursor-pointer">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Makeup</p>
              </button>
              <button onClick={() => navigate('/products')} className="h-[20px] text-left hover:text-[#ff1a75] transition-colors cursor-pointer">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Hair Care</p>
              </button>
              <button onClick={() => navigate('/products')} className="h-[20px] text-left hover:text-[#ff1a75] transition-colors cursor-pointer">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Fragrance</p>
              </button>
              <button onClick={() => navigate('/products')} className="h-[20px] text-left hover:text-[#ff1a75] transition-colors cursor-pointer">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Body Care</p>
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="col-4 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0">
            <div className="h-[27px] relative shrink-0 w-full">
              <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">
                Contact Info
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] h-[104px] items-start relative shrink-0 w-full">
              <div className="flex gap-[8px] items-start">
                <div className="size-[20px] mt-[2px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p26ddc800} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p35ba4680} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px] flex-1">
                  FEU Institute of Technology, Manila, Philippines
                </p>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_phone)">
                      <path d={svgPaths.p1a7ce800} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                    <defs>
                      <clipPath id="clip0_phone">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">
                  +63 900 123 4567
                </p>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.pd919a80} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p189c1170} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">
                  support@mariqits.com
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="absolute content-stretch flex flex-col h-[52.8px] items-start left-[32px] pt-[32.8px] top-[255px] right-[32px]">
          <div aria-hidden="true" className="absolute border-[rgba(255,102,178,0.2)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
          <div className="h-[20px] relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-between size-full">
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">
                © 2026 Mariqits Beauty E-Commerce. All rights reserved.
              </p>
              <div className="flex gap-[24px]">
                <button className="hover:text-[#ff1a75] transition-colors cursor-pointer">
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Privacy Policy</p>
                </button>
                <button className="hover:text-[#ff1a75] transition-colors cursor-pointer">
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Terms of Service</p>
                </button>
                <button className="hover:text-[#ff1a75] transition-colors cursor-pointer">
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Admin Portal</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
