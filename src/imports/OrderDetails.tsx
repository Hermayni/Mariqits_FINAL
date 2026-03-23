import clsx from "clsx";
import svgPaths from "./svg-t2f3uc5fax";
import imgScreenshot202603180112383 from "figma:asset/5ddf44f50451b9bf927c871e307b11bf328c188a.png";
import imgEllipse261 from "figma:asset/8c6df8181bc3056efe2b6a0ae06f0995d03c6188.png";
import img02 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage5Props>) {
  return (
    <div className={clsx("relative rounded-[26843500px] shrink-0 size-[36px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage4Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage4Props>) {
  return (
    <div className={clsx("bg-white relative rounded-[16px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,102,178,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage3Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage3Props>) {
  return (
    <div className={clsx("h-[44px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage2Props>) {
  return (
    <div className={clsx("bg-white relative rounded-[16px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,102,178,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[0.8px] pt-[32.8px] px-[32.8px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">{children}</p>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("relative rounded-[26843500px] shrink-0 size-[40px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <BackgroundImage1 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage1>
  );
}
type HeadingBackgroundImageAndText2Props = {
  text: string;
};

function HeadingBackgroundImageAndText2({ text }: HeadingBackgroundImageAndText2Props) {
  return (
    <div className="h-[27px] relative shrink-0 w-full">
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
};

function ParagraphBackgroundImageAndText1({ text }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#364153] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function HeadingBackgroundImageAndText1({ text, additionalClassNames = "" }: HeadingBackgroundImageAndText1Props) {
  return (
    <div className={clsx("h-[27px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type IconBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconBackgroundImage({ additionalClassNames = "" }: IconBackgroundImageProps) {
  return (
    <BackgroundImage additionalClassNames={additionalClassNames}>
      <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </BackgroundImage>
  );
}

function ContainerBackgroundImage1() {
  return (
    <BackgroundImage3 additionalClassNames="bg-[#dbeafe]">
      <BackgroundImage additionalClassNames="relative shrink-0">
        <path d={svgPaths.p20f4ecf0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M10 18.3333V10" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d={svgPaths.p2eca8c80} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M6.25 3.55833L13.75 7.85" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </BackgroundImage>
    </BackgroundImage3>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#2d2d2d] text-[16px] top-[-0.4px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function ContainerBackgroundImage() {
  return (
    <BackgroundImage3 additionalClassNames="bg-[#dcfce7]">
      <BackgroundImage additionalClassNames="relative shrink-0">
        <path d={svgPaths.p20f4ecf0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M10 18.3333V10" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d={svgPaths.p2eca8c80} id="Vector_3" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M6.25 3.55833L13.75 7.85" id="Vector_4" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </BackgroundImage>
    </BackgroundImage3>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText({ text, additionalClassNames = "" }: TextBackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] top-[-0.4px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText2({ text, additionalClassNames = "" }: BackgroundImageAndText2Props) {
  return (
    <div className={clsx("absolute h-[20px] left-0 w-[649.063px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
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
  return <BackgroundImage4>{text}</BackgroundImage4>;
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[31.988px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#2d2d2d] text-[24px]">{text}</p>
    </div>
  );
}

export default function OrderDetails() {
  return (
    <div className="bg-white relative size-full" data-name="Order Details">
      <div className="absolute bg-[#fff8c3] content-stretch flex flex-col h-[730.4px] items-start left-0 pt-[118.4px] top-0 w-[1512.8px]" data-name="$c">
        <div className="bg-[#fffbf0] h-[1135.175px] relative shrink-0 w-[1512.8px]" data-name="Rd">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[68.4px] relative size-full">
            <div className="h-[112px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[138.2px]" data-name="Button">
                <BackgroundImage additionalClassNames="relative shrink-0">
                  <path d={svgPaths.p33f6b680} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M15.8333 10H4.16667" id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </BackgroundImage>
                <BackgroundImage2 additionalClassNames="w-[110.2px]">
                  <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-[55.5px] text-[#ff1a75] text-[16px] text-center top-[-0.4px] whitespace-nowrap">Back to Profile</p>
                </BackgroundImage2>
              </div>
              <div className="absolute content-stretch flex h-[72px] items-center justify-between left-0 top-[40px] w-[1376px]" data-name="Container">
                <div className="h-[72px] relative shrink-0 w-[225.325px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 1">
                      <p className="absolute font-['IM_FELL_DW_Pica:Italic',sans-serif] italic leading-[40px] left-0 text-[#2d2d2d] text-[36px] top-0 whitespace-nowrap">Order Details</p>
                    </div>
                    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-0.4px] whitespace-nowrap">Order #ORD-001</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#dcfce7] h-[48px] relative rounded-[26843500px] shrink-0 w-[122.275px]" data-name="Text">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[24px] text-[#008236] text-[16px] top-[11.6px] whitespace-nowrap">Delivered</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[895.175px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex flex-col gap-[24px] h-[895.175px] items-start left-0 top-0 w-[906.663px]" data-name="Container">
                <ContainerBackgroundImage2 additionalClassNames="h-[525.588px]">
                  <HeadingBackgroundImageAndText text="Order Items" />
                  <div className="content-stretch flex flex-col h-[240.8px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex gap-[16px] h-[112.8px] items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[rgba(255,102,178,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
                      <div className="bg-[#fff0f8] relative rounded-[16px] shrink-0 size-[96px]" data-name="Link">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                          <div className="bg-[#f3f4f6] h-[96px] relative shrink-0 w-full" data-name="Lt">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center px-[4px] relative size-full">
                                <div className="h-[96px] relative shrink-0 w-[92px]" data-name="Screenshot 2026-03-18 011238 3">
                                  <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot202603180112383} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-[649.063_0_0] h-[96px] min-h-px min-w-px relative" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#2d2d2d] text-[16px] top-[4.6px] whitespace-nowrap">Active Foundation</p>
                          <BackgroundImageAndText2 text="Quantity: 1" additionalClassNames="top-[28px]" />
                          <BackgroundImageAndText2 text="Price: ₱699.00" additionalClassNames="top-[48px]" />
                        </div>
                      </div>
                      <div className="h-[28px] relative shrink-0 w-[64px]" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <p className="-translate-x-full absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-[64px] text-[#ff1a75] text-[18px] text-right top-[0.4px] whitespace-nowrap">₱699.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[139.2px] items-start pt-[24.8px] relative shrink-0 w-full" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[rgba(255,102,178,0.2)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
                    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
                      <div className="content-stretch flex items-start justify-between relative size-full">
                        <TextBackgroundImageAndText text="Subtotal" additionalClassNames="w-[65.1px]" />
                        <BackgroundImage2 additionalClassNames="w-[51.275px]">
                          <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[-17.99px] text-[#364153] text-[16px] top-[0.21px] whitespace-nowrap">₱699.00</p>
                        </BackgroundImage2>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                      <TextBackgroundImageAndText text="Shipping" additionalClassNames="w-[67.938px]" />
                      <BackgroundImage2 additionalClassNames="w-[39.55px]">
                        <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#364153] text-[16px] top-[-0.4px] whitespace-nowrap">₱150</p>
                      </BackgroundImage2>
                    </div>
                    <div className="h-[50.4px] relative shrink-0 w-full" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[rgba(255,102,178,0.2)] border-solid border-t-[1.6px] inset-0 pointer-events-none" />
                      <div className="absolute h-[28px] left-0 top-[22.4px] w-[46.563px]" data-name="Text">
                        <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#2d2d2d] text-[20px] top-[-0.2px] whitespace-nowrap">Total</p>
                      </div>
                      <div className="absolute h-[36px] left-[734.74px] top-[13.6px] w-[106.325px]" data-name="Text">
                        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[36px] left-[-25.94px] text-[#ff1a75] text-[30px] top-[-0.39px] whitespace-nowrap">₱849.00</p>
                      </div>
                    </div>
                  </div>
                </ContainerBackgroundImage2>
                <ContainerBackgroundImage2 additionalClassNames="h-[345.587px]">
                  <HeadingBackgroundImageAndText text="Order Timeline" />
                  <div className="content-stretch flex flex-col gap-[16px] h-[224px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex gap-[16px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                      <ContainerBackgroundImage />
                      <ContainerBackgroundImage3 additionalClassNames="w-[102.7px]">
                        <ParagraphBackgroundImageAndText text="Order Placed" />
                        <BackgroundImageAndText text="March 1, 2026" />
                      </ContainerBackgroundImage3>
                    </div>
                    <div className="content-stretch flex gap-[16px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                      <ContainerBackgroundImage1 />
                      <ContainerBackgroundImage3 additionalClassNames="w-[186.838px]">
                        <ParagraphBackgroundImageAndText text="Processing" />
                        <BackgroundImageAndText text="Your order is being prepared" />
                      </ContainerBackgroundImage3>
                    </div>
                    <div className="content-stretch flex gap-[16px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                      <ContainerBackgroundImage1 />
                      <ContainerBackgroundImage3 additionalClassNames="w-[153.713px]">
                        <ParagraphBackgroundImageAndText text="Shipped" />
                        <BackgroundImageAndText text="Your order is on the way" />
                      </ContainerBackgroundImage3>
                    </div>
                    <div className="content-stretch flex gap-[16px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
                      <ContainerBackgroundImage />
                      <ContainerBackgroundImage3 additionalClassNames="w-[167.338px]">
                        <ParagraphBackgroundImageAndText text="Delivered" />
                        <BackgroundImageAndText text="Order has been delivered" />
                      </ContainerBackgroundImage3>
                    </div>
                  </div>
                </ContainerBackgroundImage2>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[24px] h-[895.175px] items-start left-[938.66px] top-0 w-[437.337px]" data-name="Container">
                <ContainerBackgroundImage4 additionalClassNames="h-[208.6px]">
                  <div className="content-stretch flex gap-[12px] h-[27px] items-center relative shrink-0 w-full" data-name="Container">
                    <IconBackgroundImage additionalClassNames="relative shrink-0" />
                    <HeadingBackgroundImageAndText1 text="Shipping Address" additionalClassNames="w-[146.075px]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] h-[116px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#2d2d2d] text-[14px] top-[-0.2px] whitespace-nowrap">Maria Santos</p>
                    </div>
                    <ParagraphBackgroundImageAndText1 text="+63 912 345 6789" />
                    <ParagraphBackgroundImageAndText1 text="123 Rizal St., Brgy. San Antonio" />
                    <ParagraphBackgroundImageAndText1 text="Quezon City, Metro Manila" />
                    <ParagraphBackgroundImageAndText1 text="1105" />
                  </div>
                </ContainerBackgroundImage4>
                <ContainerBackgroundImage4 additionalClassNames="h-[112.6px]">
                  <div className="content-stretch flex gap-[12px] h-[27px] items-center relative shrink-0 w-full" data-name="Container">
                    <BackgroundImage additionalClassNames="relative shrink-0">
                      <path d={svgPaths.p16dd5f0} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M1.66667 8.33333H18.3333" id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </BackgroundImage>
                    <HeadingBackgroundImageAndText1 text="Payment Method" additionalClassNames="w-[140.175px]" />
                  </div>
                  <ParagraphBackgroundImageAndText1 text="E-Wallet" />
                </ContainerBackgroundImage4>
                <ContainerBackgroundImage4 additionalClassNames="h-[112.6px]">
                  <div className="content-stretch flex gap-[12px] h-[27px] items-center relative shrink-0 w-full" data-name="Container">
                    <BackgroundImage additionalClassNames="relative shrink-0">
                      <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </BackgroundImage>
                    <HeadingBackgroundImageAndText1 text="Estimated Delivery" additionalClassNames="w-[157.488px]" />
                  </div>
                  <ParagraphBackgroundImageAndText1 text="March 5, 2026" />
                </ContainerBackgroundImage4>
                <div className="bg-[#ff1a75] h-[48px] relative rounded-[26843500px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Link">
                  <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[219.15px] text-[16px] text-center text-white top-[11.6px] whitespace-nowrap">Write a Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 size-0 top-[730.4px]" data-name="Grammarly-desktop-integration" />
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
                  <BackgroundImage additionalClassNames="relative shrink-0">
                    <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </BackgroundImage>
                  <div className="h-[20px] relative shrink-0 w-[36.3px]" data-name="Ic">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#2d2d2d] text-[14px] top-[-0.2px] whitespace-nowrap">Maria</p>
                    </div>
                  </div>
                </div>
              </div>
              <BackgroundImage5>
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
              </BackgroundImage5>
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
              <BackgroundImage1 additionalClassNames="relative shrink-0">
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
              </BackgroundImage1>
              <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Ic">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-white top-[-0.4px] whitespace-nowrap">Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.4px] content-stretch flex flex-col h-[356.6px] items-center left-0 pt-[0.8px] px-[36.4px] w-[1512.8px]" data-name="Footer" style={{ backgroundImage: "linear-gradient(rgb(255, 240, 248) 0%, rgb(255, 242, 249) 10%, rgb(255, 243, 249) 20%, rgb(255, 245, 250) 30%, rgb(255, 246, 251) 40%, rgb(255, 248, 252) 50%, rgb(255, 249, 252) 60%, rgb(255, 251, 253) 70%, rgb(255, 252, 254) 80%, rgb(255, 254, 254) 90%, rgb(255, 255, 255) 100%)" }}>
        <div aria-hidden="true" className="absolute border-[rgba(255,102,178,0.2)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
        <div className="h-[355.8px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[32px] relative size-full">
            <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[175px] relative shrink-0 w-full" data-name="Container">
              <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
                  <div className="absolute bottom-[-28.54px] h-[127px] left-[-20.4px] w-[339px]" data-name="0 2">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[90.02%] left-[-3.29%] max-w-none top-[9.96%] w-[89.85%]" src={img02} />
                    </div>
                  </div>
                </div>
                <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] w-[308px]">Your destination for premium beauty products. Empowering confidence through quality skincare, makeup, and beauty essentials.</p>
                </div>
                <div className="content-stretch flex gap-[12px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
                  <BackgroundImage5 additionalClassNames="bg-[#ff1a75]">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute bottom-[8.33%] left-[29.17%] right-1/4 top-[8.33%]" data-name="Vector">
                        <div className="absolute inset-[-5%_-9.09%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 18.3333">
                            <path d={svgPaths.p1f29de80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </BackgroundImage5>
                  <BackgroundImage5 additionalClassNames="bg-[#ff1a75]">
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
                  </BackgroundImage5>
                  <BackgroundImage5 additionalClassNames="bg-[#ff1a75]">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[16.63%_8.33%_12.5%_8.33%]" data-name="Vector">
                        <div className="absolute inset-[-5.88%_-5%_-5.91%_-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3335 15.8435">
                            <path d={svgPaths.p3693ea00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </BackgroundImage5>
                </div>
              </div>
              <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                <HeadingBackgroundImageAndText2 text="Customer Service" />
                <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
                  <BackgroundImageAndText text="Contact Us" />
                  <BackgroundImageAndText text="FAQs" />
                  <BackgroundImage4>{`Shipping & Delivery`}</BackgroundImage4>
                  <BackgroundImage4>{`Returns & Exchanges`}</BackgroundImage4>
                  <BackgroundImageAndText text="Track Your Order" />
                </div>
              </div>
              <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                <HeadingBackgroundImageAndText2 text="Shop" />
                <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
                  <BackgroundImageAndText text="Skincare" />
                  <BackgroundImageAndText text="Makeup" />
                  <BackgroundImageAndText text="Hair Care" />
                  <BackgroundImageAndText text="Fragrance" />
                  <BackgroundImageAndText text="Body Care" />
                </div>
              </div>
              <div className="col-4 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                <HeadingBackgroundImageAndText2 text="Contact Info" />
                <div className="content-stretch flex flex-col gap-[12px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
                  <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
                    <IconBackgroundImage additionalClassNames="absolute left-0 top-[2px]" />
                    <div className="absolute h-[40px] left-[28px] top-0 w-[280px]" data-name="Text">
                      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] w-[232px]">FEU Institute of Technology, Manila, Philippines</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="List Item">
                    <BackgroundImage1 additionalClassNames="relative shrink-0">
                      <g clipPath="url(#clip0_1_3063)" id="Icon">
                        <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_3063">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </BackgroundImage1>
                    <div className="h-[20px] relative shrink-0 w-[116.888px]" data-name="Text">
                      <BackgroundImageAndText1 text="+63 900 123 4567" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="List Item">
                    <BackgroundImage additionalClassNames="relative shrink-0">
                      <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </BackgroundImage>
                    <div className="h-[20px] relative shrink-0 w-[154.213px]" data-name="Text">
                      <BackgroundImageAndText1 text="support@mariqits.com" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[52.8px] items-start pt-[32.8px] relative shrink-0 w-full" data-name="Container">
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
      </div>
    </div>
  );
}