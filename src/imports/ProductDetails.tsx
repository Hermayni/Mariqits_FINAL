import clsx from "clsx";
import svgPaths from "./svg-gtkd467we";
import imgEllipse262 from "figma:asset/936f67f98741534eb79ea8a98727bd23a62787ab.png";
import imgEllipse263 from "figma:asset/468f0ae5f4897c32988817a7d29f08415fac44d9.png";
import imgAt from "figma:asset/9800b58b1f5d96c90331ee7a12d00941ef99681c.png";
import imgButton from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgAt1 from "figma:asset/b6a1aa3b3af4e1c2dfd1c8cdb2d1207432fbd9a8.png";
import imgAt2 from "figma:asset/f81bd415825a0dddb793521eaf8dd8eb58ac326f.png";
import imgAt3 from "figma:asset/41bf1761635dcda3e7790881c13637c316e4edf9.png";
import imgAt4 from "figma:asset/a5654c17652c940dc779e6129017edfd384890c9.png";
import imgEllipse261 from "figma:asset/8c6df8181bc3056efe2b6a0ae06f0995d03c6188.png";
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col items-start p-[1.6px] relative size-full">{children}</div>
    </div>
  );
}
type ButtonBackgroundImageProps = {
  additionalClassNames?: string;
};

function ButtonBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonBackgroundImageProps>) {
  return (
    <div className={clsx("bg-[#fff0f8] justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0", additionalClassNames)}>
      <BackgroundImage2>{children}</BackgroundImage2>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}
type IconBackgroundImage2Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage2Props>) {
  return (
    <div className={clsx("absolute size-[24px] top-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <BackgroundImage3 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage3>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage>
      <path d={svgPaths.p17f48400} fill="var(--fill-0, #E6FF00)" id="Vector" stroke="var(--stroke-0, #E6FF00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </BackgroundImage>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
};

function TextBackgroundImageAndText({ text }: TextBackgroundImageAndTextProps) {
  return (
    <BackgroundImage4 additionalClassNames="h-[20px] w-[48px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#2d2d2d] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </BackgroundImage4>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[15.988px] left-[16px] top-[48px] w-[178.663px]">
      <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[89.5px] text-[#2d2d2d] text-[12px] text-center top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage1 additionalClassNames="relative shrink-0">
      <path d={svgPaths.pa6d0980} fill="var(--fill-0, #E6FF00)" id="Vector" stroke="var(--stroke-0, #E6FF00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </BackgroundImage1>
  );
}

export default function ProductDetails() {
  return (
    <div className="bg-white relative size-full" data-name="Product Details">
      <div className="absolute bg-[#fffbf0] content-stretch flex flex-col h-[730.4px] items-start left-0 pt-[118.4px] top-0 w-[1512.8px]" data-name="$c">
        <div className="bg-white h-[1500.4px] relative shrink-0 w-[1512.8px]" data-name="Sd">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[80px] items-start pt-[48px] px-[68.4px] relative size-full">
            <div className="h-[842px] relative shrink-0 w-full" data-name="Container">
              <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] pl-[712px] relative size-full">
                <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                  <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
                    <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] left-0 text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">
                      <span className="leading-[20px]">{`Home / Makeup / `}</span>
                      <span className="leading-[20px] text-[#2d2d2d]">Liquid Foundation</span>
                    </p>
                  </div>
                  <div className="h-[100px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute h-[20px] left-0 top-0 w-[664px]" data-name="Paragraph">
                      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#ff1a75] text-[14px] top-[-0.2px] whitespace-nowrap">Makeup</p>
                    </div>
                    <div className="absolute h-[40px] left-0 top-[28px] w-[664px]" data-name="Heading 1">
                      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[40px] left-0 text-[#2d2d2d] text-[36px] top-0 whitespace-nowrap">Strokes Sakura Mosaic Blush</p>
                    </div>
                    <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center left-0 top-[80px] w-[664px]" data-name="Container">
                      <div className="h-[20px] relative shrink-0 w-[100px]" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                          <IconBackgroundImage />
                          <IconBackgroundImage />
                          <IconBackgroundImage />
                          <IconBackgroundImage />
                          <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Icon">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                              <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
                                <div className="absolute inset-[-5.24%_-5%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3348 17.5601">
                                    <path d={svgPaths.p31c92d00} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <BackgroundImageAndText text="4.7 (234 reviews)" additionalClassNames="w-[109.75px]" />
                    </div>
                  </div>
                  <div className="content-stretch flex h-[81.6px] items-start pb-[0.8px] pt-[16.8px] relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[rgba(255,102,178,0.2)] border-b-[0.8px] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
                    <BackgroundImage4 additionalClassNames="h-[48px] w-[159.038px]">
                      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[48px] left-0 text-[#ff1a75] text-[48px] top-[-0.4px] whitespace-nowrap">₱548</p>
                    </BackgroundImage4>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] h-[91px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
                      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">Description</p>
                    </div>
                    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#364153] text-[16px] top-[-0.6px] w-[654px]">{`A perfect pinch of weightless, buildable matte pinks and peaches, all in one pan. `}</p>
                    </div>
                  </div>
                  <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Plus_Jakarta_Sans:Medium','Noto_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#00a63e] text-[16px] top-[-0.4px] whitespace-nowrap">✓ In Stock - 47 available</p>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#2d2d2d] text-[16px] whitespace-nowrap">Shades</p>
                  <div className="h-[104.787px] relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[rgba(255,102,178,0.2)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
                    <div className="absolute bg-[#fff0f8] h-[79.988px] left-[-0.4px] rounded-[16px] top-[298px] w-[210.663px]" data-name="Container">
                      <IconBackgroundImage2 additionalClassNames="left-[93.33px]">
                        <path d={svgPaths.p67fd620} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M15 18H9" id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p2beec100} id="Vector_3" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p13934880} id="Vector_4" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p1ff3c700} id="Vector_5" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </IconBackgroundImage2>
                      <ParagraphBackgroundImageAndText text="Free Shipping" />
                    </div>
                    <div className="absolute bg-[#fff0f8] h-[79.988px] left-[226.26px] rounded-[16px] top-[298px] w-[210.663px]" data-name="Container">
                      <IconBackgroundImage2 additionalClassNames="left-[93.33px]">
                        <path d={svgPaths.p26001600} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M3 3V8H8" id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </IconBackgroundImage2>
                      <ParagraphBackgroundImageAndText text="Easy Returns" />
                    </div>
                    <div className="absolute bg-[#fff0f8] h-[79.988px] left-[452.92px] rounded-[16px] top-[298px] w-[210.675px]" data-name="Container">
                      <IconBackgroundImage2 additionalClassNames="left-[93.34px]">
                        <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </IconBackgroundImage2>
                      <div className="absolute h-[15.988px] left-[16px] top-[48px] w-[178.675px]" data-name="Paragraph">
                        <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] left-[89px] text-[#2d2d2d] text-[12px] text-center top-0 whitespace-nowrap">Authentic</p>
                      </div>
                    </div>
                    <button className="absolute block cursor-pointer h-[78px] left-[-0.4px] top-[-3px] w-[81px]">
                      <img alt="" className="absolute block max-w-none size-full" height="78" src={imgEllipse262} width="81" />
                    </button>
                    <div className="absolute h-[78px] left-[93.6px] top-[-3px] w-[81px]">
                      <img alt="" className="absolute block max-w-none size-full" height="78" src={imgEllipse263} width="81" />
                    </div>
                  </div>
                  <div className="h-[87.2px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute h-[24px] left-0 top-[-31px] w-[308px]" data-name="Label">
                      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#2d2d2d] text-[16px] top-[-0.4px] whitespace-nowrap">Quantity</p>
                    </div>
                    <div className="absolute h-[51.2px] left-0 top-[4px] w-[308px]" data-name="Container">
                      <div className="absolute border-[1.6px] border-[rgba(255,102,178,0.3)] border-solid h-[51.2px] left-0 overflow-clip rounded-[26843500px] top-0 w-[167.2px]" data-name="Container">
                        <div className="absolute h-[44px] left-0 top-[2px] w-[52px]" data-name="Button">
                          <BackgroundImage1 additionalClassNames="absolute left-[16px] top-[12px]">
                            <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </BackgroundImage1>
                        </div>
                        <div className="absolute h-[48px] left-[52px] top-0 w-[60px]" data-name="Text">
                          <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[30.36px] text-[#2d2d2d] text-[16px] text-center top-[11.6px] whitespace-nowrap">1</p>
                        </div>
                        <div className="absolute h-[44px] left-[112px] top-[2px] w-[52px]" data-name="Button">
                          <BackgroundImage1 additionalClassNames="absolute left-[16px] top-[12px]">
                            <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </BackgroundImage1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
                    <div className="absolute bg-[#ff1a75] h-[56px] left-[-0.4px] rounded-[26843500px] top-[-19.99px] w-[220.8px]" data-name="Button">
                      <div className="absolute left-[228.14px] size-[20px] top-[18px]" data-name="Icon" />
                      <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[110.1px] text-[16px] text-center text-white top-[15.8px] whitespace-nowrap">Add to Cart</p>
                    </div>
                    <div className="absolute border-[#ff1a75] border-[1.6px] border-solid h-[56px] left-[236.4px] rounded-[26843500px] top-[-35.99px] w-[71.2px]" data-name="Button">
                      <BackgroundImage1 additionalClassNames="absolute left-[24px] top-[16.4px]">
                        <path d={svgPaths.p2f84f400} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </BackgroundImage1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[32px] h-[482.4px] items-start pt-[48.8px] relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[rgba(255,102,178,0.2)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
              <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
                <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#2d2d2d] text-[30px] top-[-0.4px] whitespace-nowrap">Customer Reviews</p>
              </div>
              <div className="bg-[#fff0f8] h-[204px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col items-start pt-[32px] px-[32px] relative size-full">
                  <div className="content-stretch flex gap-[32px] h-[140px] items-center relative shrink-0 w-full" data-name="Container">
                    <div className="h-[116px] relative shrink-0 w-[100px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                        <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
                          <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[60px] left-[50.26px] text-[#ff1a75] text-[60px] text-center top-0 whitespace-nowrap">4.7</p>
                        </div>
                        <div className="content-stretch flex h-[20px] items-start justify-center relative shrink-0 w-full" data-name="Container">
                          <IconBackgroundImage />
                          <IconBackgroundImage />
                          <IconBackgroundImage />
                          <IconBackgroundImage />
                          <BackgroundImage1 additionalClassNames="relative shrink-0">
                            <path d={svgPaths.pa6d0980} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </BackgroundImage1>
                        </div>
                        <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                          <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[50.16px] text-[#4a5565] text-[14px] text-center top-[-0.2px] whitespace-nowrap">234 reviews</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1180_0_0] h-[140px] min-h-px min-w-px relative" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                        <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                          <TextBackgroundImageAndText text="5 stars" />
                          <div className="bg-[#ff1a75] h-[8px] rounded-[26843500px] shrink-0 w-[1060px]" data-name="Container" />
                          <BackgroundImage4 additionalClassNames="h-[20px] w-[48px]">
                            <p className="-translate-x-full absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[48.25px] text-[#4a5565] text-[14px] text-right top-[-0.2px] whitespace-nowrap">234</p>
                          </BackgroundImage4>
                        </div>
                        <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                          <TextBackgroundImageAndText text="4 stars" />
                          <div className="bg-white flex-[1060_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[212px] relative size-full">
                                <div className="bg-[#ff1a75] h-[8px] shrink-0 w-full" data-name="Container" />
                              </div>
                            </div>
                          </div>
                          <BackgroundImage4 additionalClassNames="h-[20px] w-[48px]">
                            <p className="-translate-x-full absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[48.4px] text-[#4a5565] text-[14px] text-right top-[-0.2px] whitespace-nowrap">187</p>
                          </BackgroundImage4>
                        </div>
                        <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                          <TextBackgroundImageAndText text="3 stars" />
                          <div className="bg-white flex-[1060_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[424px] relative size-full">
                                <div className="bg-[#ff1a75] h-[8px] shrink-0 w-full" data-name="Container" />
                              </div>
                            </div>
                          </div>
                          <BackgroundImage4 additionalClassNames="h-[20px] w-[48px]">
                            <p className="-translate-x-full absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[48.74px] text-[#4a5565] text-[14px] text-right top-[-0.2px] whitespace-nowrap">140</p>
                          </BackgroundImage4>
                        </div>
                        <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                          <TextBackgroundImageAndText text="2 stars" />
                          <div className="bg-white flex-[1060_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[636px] relative size-full">
                                <div className="bg-[#ff1a75] h-[8px] shrink-0 w-full" data-name="Container" />
                              </div>
                            </div>
                          </div>
                          <BackgroundImage4 additionalClassNames="h-[20px] w-[48px]">
                            <p className="-translate-x-full absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[48.11px] text-[#4a5565] text-[14px] text-right top-[-0.2px] whitespace-nowrap">93</p>
                          </BackgroundImage4>
                        </div>
                        <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                          <TextBackgroundImageAndText text="1 stars" />
                          <div className="bg-white flex-[1060_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[848px] relative size-full">
                                <div className="bg-[#ff1a75] h-[8px] shrink-0 w-full" data-name="Container" />
                              </div>
                            </div>
                          </div>
                          <BackgroundImage4 additionalClassNames="h-[20px] w-[48px]">
                            <p className="-translate-x-full absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[48.81px] text-[#4a5565] text-[14px] text-right top-[-0.2px] whitespace-nowrap">46</p>
                          </BackgroundImage4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white h-[129.6px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,102,178,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="content-stretch flex flex-col gap-[12px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">
                  <div className="content-stretch flex h-[44px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="h-[44px] relative shrink-0 w-[98.775px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                        <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                          <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#2d2d2d] text-[16px] top-[-0.4px] whitespace-nowrap">Maria Santos</p>
                        </div>
                        <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
                          <IconBackgroundImage1 />
                          <IconBackgroundImage1 />
                          <IconBackgroundImage1 />
                          <IconBackgroundImage1 />
                          <BackgroundImage>
                            <path d={svgPaths.p17f48400} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </BackgroundImage>
                        </div>
                      </div>
                    </div>
                    <BackgroundImageAndText text="March 1, 2026" additionalClassNames="w-[90.013px]" />
                  </div>
                  <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] top-[-0.4px] whitespace-nowrap">Good coverage and matches my skin tone perfectly. Lasts all day!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 size-0 top-[730.4px]" data-name="Grammarly-desktop-integration" />
      <div className="absolute content-stretch flex flex-col gap-[24px] h-[842px] items-start left-[68.4px] top-[166.4px] w-[664px]" data-name="Sd">
        <div className="bg-[#fff0f8] content-stretch flex flex-col h-[664px] items-start overflow-clip relative rounded-[24px] shrink-0 w-full" data-name="Container">
          <div className="h-[664px] relative shrink-0 w-full" data-name="At">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAt} />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="size-full" />
            </div>
          </div>
        </div>
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[154px] relative shrink-0 w-full" data-name="Container">
          <div className="col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Button">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgButton} />
            <BackgroundImage2>
              <div className="h-[150.8px] relative shrink-0 w-full" data-name="At">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAt1} />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="size-full" />
                </div>
              </div>
            </BackgroundImage2>
            <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
          <ButtonBackgroundImage additionalClassNames="col-2">
            <div className="h-[150.8px] relative shrink-0 w-full" data-name="At">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAt2} />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="size-full" />
              </div>
            </div>
          </ButtonBackgroundImage>
          <ButtonBackgroundImage additionalClassNames="col-3">
            <div className="h-[150.8px] relative shrink-0 w-full" data-name="At">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAt3} />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="size-full" />
              </div>
            </div>
          </ButtonBackgroundImage>
          <ButtonBackgroundImage additionalClassNames="col-4">
            <div className="h-[150.8px] relative shrink-0 w-full" data-name="At">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAt4} />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="size-full" />
              </div>
            </div>
          </ButtonBackgroundImage>
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
                  <BackgroundImage1 additionalClassNames="relative shrink-0">
                    <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </BackgroundImage1>
                  <BackgroundImage4 additionalClassNames="h-[20px] w-[36.3px]">
                    <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#2d2d2d] text-[14px] top-[-0.2px] whitespace-nowrap">Maria</p>
                  </BackgroundImage4>
                </div>
              </div>
              <div className="relative rounded-[26843500px] shrink-0 size-[36px]" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
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
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[156.3px] pt-[8px] px-[8px] rounded-[26843500px] size-[40px] top-0" data-name="Link">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-5.56%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                      <path d={svgPaths.p1b764040} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#ff1a75] content-stretch flex gap-[8px] h-[40px] items-center left-[212.3px] px-[16px] rounded-[26843500px] top-0 w-[93.525px]" data-name="Link">
              <BackgroundImage3 additionalClassNames="relative shrink-0">
                <g clipPath="url(#clip0_1_3084)" id="Icon">
                  <path d={svgPaths.p32514c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p2734ea00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p24a52d80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </g>
                <defs>
                  <clipPath id="clip0_1_3084">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </BackgroundImage3>
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