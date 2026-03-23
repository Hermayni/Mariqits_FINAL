import clsx from "clsx";
import svgPaths from "./svg-f1js8vrhwo";
import img02 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";
import imgEllipse261 from "figma:asset/8c6df8181bc3056efe2b6a0ae06f0995d03c6188.png";
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative rounded-[26843500px] shrink-0 size-[36px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">{children}</p>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type IconBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImageProps>) {
  return (
    <BackgroundImage additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return <BackgroundImage1>{text}</BackgroundImage1>;
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="h-[27px] relative shrink-0 w-full">
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function WishlistEmpty() {
  return (
    <div className="bg-white relative size-full" data-name="Wishlist - Empty">
      <div className="absolute bg-[#fffbf0] content-stretch flex flex-col h-[730.4px] items-start left-0 pt-[118.4px] top-0 w-[1512.8px]" data-name="$c">
        <div className="bg-[#fffbf0] h-[730.4px] relative shrink-0 w-[1512.8px]" data-name="Ed">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[68.4px] relative size-full">
            <div className="content-stretch flex flex-col gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 1">
                <p className="absolute font-['IM_FELL_DW_Pica:Italic',sans-serif] italic leading-[40px] left-0 text-[#2d2d2d] text-[36px] top-0 whitespace-nowrap">My Wishlist</p>
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-0.4px] whitespace-nowrap">0 items saved</p>
              </div>
            </div>
            <div className="bg-white h-[353.587px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,102,178,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
              <div className="absolute bg-[#fff0f8] content-stretch flex items-center justify-center left-[640.6px] px-[24px] rounded-[26843500px] size-[96px] top-[48.6px]" data-name="Container">
                <div className="relative shrink-0 size-[48px]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                    <g id="Icon">
                      <path d={svgPaths.p4e0cf00} id="Vector" stroke="url(#paint0_linear_1_3058)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3058" x1="24" x2="24" y1="6" y2="42">
                        <stop stopColor="#E4550C" />
                        <stop offset="1" stopColor="#FE3A86" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="absolute content-stretch flex h-[31.988px] items-start left-[48.8px] top-[168.8px] w-[1278.4px]" data-name="Heading 2">
                <p className="flex-[1_0_0] font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#2d2d2d] text-[24px] text-center">Your wishlist is empty</p>
              </div>
              <div className="absolute h-[24px] left-[48.8px] top-[208.79px] w-[1278.4px]" data-name="Paragraph">
                <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[639.38px] text-[#4a5565] text-[16px] text-center top-[-0.4px] whitespace-nowrap">Save your favorite items to your wishlist and shop them later!</p>
              </div>
              <div className="absolute bg-[#ff1a75] h-[48px] left-[581.38px] rounded-[26843500px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[256.79px] w-[213.25px]" data-name="Link">
                <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[107px] text-[16px] text-center text-white top-[11.6px] whitespace-nowrap">Continue Shopping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 size-0 top-[730.4px]" data-name="Grammarly-desktop-integration" />
      <div className="absolute content-stretch flex flex-col h-[356.6px] items-center left-0 pt-[0.8px] px-[36.4px] top-[930px] w-[1512.8px]" data-name="Footer" style={{ backgroundImage: "linear-gradient(rgb(255, 240, 248) 0%, rgb(255, 242, 249) 10%, rgb(255, 243, 249) 20%, rgb(255, 245, 250) 30%, rgb(255, 246, 251) 40%, rgb(255, 248, 252) 50%, rgb(255, 249, 252) 60%, rgb(255, 251, 253) 70%, rgb(255, 252, 254) 80%, rgb(255, 254, 254) 90%, rgb(255, 255, 255) 100%)" }}>
        <div aria-hidden="true" className="absolute border-[rgba(255,102,178,0.2)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
        <div className="h-[355.8px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[175px] left-[32px] top-[48px] w-[1376px]" data-name="Container">
            <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
              <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
                <div className="absolute bottom-[-27.2px] h-[127px] left-[-50.4px] w-[339px]" data-name="0 2">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[90.02%] left-[3.6%] max-w-none top-[15.2%] w-[89.85%]" src={img02} />
                  </div>
                </div>
              </div>
              <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] w-[308px]">Your destination for premium beauty products. Empowering confidence through quality skincare, makeup, and beauty essentials.</p>
              </div>
              <div className="content-stretch flex gap-[12px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
                <BackgroundImage2 additionalClassNames="bg-[#ff1a75]">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute bottom-[8.33%] left-[29.17%] right-1/4 top-[8.33%]" data-name="Vector">
                      <div className="absolute inset-[-5%_-9.09%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 18.3333">
                          <path d={svgPaths.p1f29de80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </BackgroundImage2>
                <BackgroundImage2 additionalClassNames="bg-[#ff1a75]">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[8.33%]" data-name="Vector">
                      <div className="absolute inset-[-5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                          <path d={svgPaths.p1aaf0300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[33.15%_33.15%_33.51%_33.51%]" data-name="Vector">
                      <div className="absolute inset-[-12.5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33334 8.33334">
                          <path d={svgPaths.p1a50b2f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[27.08%_27.04%_72.92%_72.92%]" data-name="Vector">
                      <div className="absolute inset-[-0.83px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
                          <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </BackgroundImage2>
                <BackgroundImage2 additionalClassNames="bg-[#ff1a75]">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[16.63%_8.33%_12.5%_8.33%]" data-name="Vector">
                      <div className="absolute inset-[-5.88%_-5%_-5.91%_-5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3335 15.8435">
                          <path d={svgPaths.p3693ea00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </BackgroundImage2>
              </div>
            </div>
            <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
              <HeadingBackgroundImageAndText text="Customer Service" />
              <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
                <BackgroundImageAndText text="Contact Us" />
                <BackgroundImageAndText text="FAQs" />
                <BackgroundImage1>{`Shipping & Delivery`}</BackgroundImage1>
                <BackgroundImage1>{`Returns & Exchanges`}</BackgroundImage1>
                <BackgroundImageAndText text="Track Your Order" />
              </div>
            </div>
            <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
              <HeadingBackgroundImageAndText text="Shop" />
              <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
                <BackgroundImageAndText text="Skincare" />
                <BackgroundImageAndText text="Makeup" />
                <BackgroundImageAndText text="Hair Care" />
                <BackgroundImageAndText text="Fragrance" />
                <BackgroundImageAndText text="Body Care" />
              </div>
            </div>
            <div className="col-4 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
              <HeadingBackgroundImageAndText text="Contact Info" />
              <div className="content-stretch flex flex-col gap-[12px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
                <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
                  <IconBackgroundImage additionalClassNames="absolute left-0 top-[2px]">
                    <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconBackgroundImage>
                  <div className="absolute h-[40px] left-[28px] top-0 w-[280px]" data-name="Text">
                    <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] w-[232px]">FEU Institute of Technology, Manila, Philippines</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="List Item">
                  <BackgroundImage additionalClassNames="relative shrink-0">
                    <g clipPath="url(#clip0_1_3041)" id="Icon">
                      <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3041">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </BackgroundImage>
                  <div className="h-[20px] relative shrink-0 w-[116.888px]" data-name="Text">
                    <BackgroundImageAndText1 text="+63 900 123 4567" />
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="List Item">
                  <IconBackgroundImage additionalClassNames="relative shrink-0">
                    <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconBackgroundImage>
                  <div className="h-[20px] relative shrink-0 w-[154.213px]" data-name="Text">
                    <BackgroundImageAndText1 text="support@mariqits.com" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col h-[52.8px] items-start left-[32px] pt-[32.8px] top-[255px] w-[1376px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[rgba(255,102,178,0.2)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
            <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between relative size-full">
                  <div className="h-[20px] relative shrink-0 w-[375.962px]" data-name="Paragraph">
                    <BackgroundImageAndText1 text="© 2026 Mariqits Beauty E-Commerce. All rights reserved." />
                  </div>
                  <div className="h-[20px] relative shrink-0 w-[330.4px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
                      <div className="h-[20px] relative shrink-0 w-[90.4px]" data-name="Link">
                        <BackgroundImageAndText1 text="Privacy Policy" />
                      </div>
                      <div className="h-[20px] relative shrink-0 w-[108.363px]" data-name="Link">
                        <BackgroundImageAndText1 text="Terms of Service" />
                      </div>
                      <div className="h-[20px] relative shrink-0 w-[83.638px]" data-name="Link">
                        <BackgroundImageAndText1 text="Admin Portal" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white border-[rgba(255,102,178,0.2)] border-b-[0.8px] border-solid h-[118.4px] left-0 top-0 w-[1512.8px]" data-name="Ic">
        <div className="absolute content-stretch flex flex-col h-[36px] items-start left-0 pt-[8px] px-[68.4px] top-0 w-[1512.8px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 26, 117) 0%, rgb(255, 36, 121) 7.1429%, rgb(255, 45, 126) 14.286%, rgb(255, 52, 130) 21.429%, rgb(255, 58, 135) 28.571%, rgb(255, 63, 139) 35.714%, rgb(255, 69, 143) 42.857%, rgb(255, 74, 148) 50%, rgb(255, 78, 152) 57.143%, rgb(255, 82, 156) 64.286%, rgb(255, 87, 161) 71.429%, rgb(255, 91, 165) 78.571%, rgb(255, 95, 169) 85.714%, rgb(255, 98, 174) 92.857%, rgb(255, 102, 178) 100%)" }}>
          <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[687.53px] text-[14px] text-center text-white top-[-0.2px] whitespace-nowrap">✨ Free shipping on orders over ₱1,500 | Shop now and get 20% off your first purchase!</p>
          </div>
        </div>
        <div className="absolute h-[49.6px] left-[68.4px] top-[52px] w-[1376px]" data-name="Container">
          <div className="absolute h-[66px] left-[35.6px] top-[-10.8px] w-[70px]">
            <div className="absolute inset-[0_-5.71%_-12.12%_-5.71%]">
              <img alt="" className="block max-w-none size-full" height="74" src={imgEllipse261} width="78" />
            </div>
          </div>
          <div className="absolute h-[49.6px] left-[269.93px] top-0 w-[672px]" data-name="Form">
            <div className="absolute bg-white h-[49.6px] left-0 rounded-[26843500px] top-0 w-[672px]" data-name="Text Input">
              <div className="content-stretch flex items-center overflow-clip pl-[24px] pr-[48px] py-[12px] relative rounded-[inherit] size-full">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(45,45,45,0.5)] whitespace-nowrap">Search for products, brands, or categories...</p>
              </div>
              <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,102,178,0.3)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
            </div>
            <div className="absolute bg-[#ff1a75] content-stretch flex flex-col items-start left-[628px] pt-[8px] px-[8px] rounded-[26843500px] size-[36px] top-[6.8px]" data-name="Button">
              <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path d={svgPaths.p32110270} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
                  <div className="absolute inset-[-23.26%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.25 5.25">
                      <path d={svgPaths.p2b5f6e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[40px] left-[1070.18px] top-[4.8px] w-[305.825px]" data-name="Container">
            <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center left-0 top-[2px] w-[140.3px]" data-name="Container">
              <div className="h-[36px] relative rounded-[26843500px] shrink-0 w-[96.3px]" data-name="Link">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[16px] relative size-full">
                  <IconBackgroundImage additionalClassNames="relative shrink-0">
                    <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconBackgroundImage>
                  <div className="h-[20px] relative shrink-0 w-[36.3px]" data-name="Ic">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#2d2d2d] text-[14px] top-[-0.2px] whitespace-nowrap">Maria</p>
                    </div>
                  </div>
                </div>
              </div>
              <BackgroundImage2>
                <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-[12.5%_62.5%_12.5%_12.5%]" data-name="Vector">
                    <div className="absolute inset-[-5.56%_-16.67%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 16.6667">
                        <path d={svgPaths.p297e5680} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[29.17%_12.5%_29.17%_66.67%]" data-name="Vector">
                    <div className="absolute inset-[-10%_-20%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83333 10">
                        <path d={svgPaths.p6680d80} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1/2 left-[37.5%] right-[12.5%] top-1/2" data-name="Vector">
                    <div className="absolute inset-[-0.83px_-8.33%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 1.66667">
                        <path d="M10.8333 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                </div>
              </BackgroundImage2>
            </div>
            <button className="absolute content-stretch cursor-pointer flex flex-col items-start left-[156.3px] pt-[8px] px-[8px] rounded-[26843500px] size-[40px] top-0" data-name="Link">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-5.56%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                      <path d={svgPaths.p1b764040} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
            <div className="absolute bg-[#ff1a75] content-stretch flex gap-[8px] h-[40px] items-center left-[212.3px] px-[16px] rounded-[26843500px] top-0 w-[93.525px]" data-name="Link">
              <BackgroundImage additionalClassNames="relative shrink-0">
                <g clipPath="url(#clip0_1_3024)" id="Icon">
                  <path d={svgPaths.p32514c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p2734ea00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p24a52d80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </g>
                <defs>
                  <clipPath id="clip0_1_3024">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </BackgroundImage>
              <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Ic">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-white top-[-0.4px] whitespace-nowrap">Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}