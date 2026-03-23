import clsx from "clsx";
import svgPaths from "./svg-3n42949z3g";
import imgScreenshot202603180103331 from "figma:asset/d5cb9b34b4966e5bd1c12ed1e319aa78d83daf90.png";
import imgScreenshot202603180107521 from "figma:asset/9d0ad65f81cf73278f845b577d2c889b866e8f54.png";
import imgScreenshot202603180112381 from "figma:asset/5ddf44f50451b9bf927c871e307b11bf328c188a.png";
import imgScreenshot202603180148441 from "figma:asset/ed5e2759e02bb8290c04272710cf46cae6f23d88.png";
import imgEllipse261 from "figma:asset/8c6df8181bc3056efe2b6a0ae06f0995d03c6188.png";
import img02 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("relative rounded-[26843500px] shrink-0 size-[36px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}
type AtBackgroundImageProps = {
  additionalClassNames?: string;
};

function AtBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<AtBackgroundImageProps>) {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-0 px-[118.2px] size-[324.4px] top-0">
      <ScreenshotBackgroundImage additionalClassNames="size-[325px]">{children}</ScreenshotBackgroundImage>
    </div>
  );
}
type ScreenshotBackgroundImageProps = {
  additionalClassNames?: string;
};

function ScreenshotBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ScreenshotBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">{children}</div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">{children}</p>
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
type IconBackgroundImage1Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage1Props>) {
  return (
    <BackgroundImage1 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage1>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div className={clsx("bg-white h-[517.987px] justify-self-stretch relative rounded-[16px] row-1 shrink-0", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.8px] relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,102,178,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("overflow-clip relative shrink-0 w-full", additionalClassNames)}>
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">{children}</div>
      </div>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return <BackgroundImage2>{text}</BackgroundImage2>;
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="h-[27px] relative shrink-0 w-full">
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function ButtonBackgroundImage() {
  return (
    <div className="h-[40px] relative rounded-[26843500px] shrink-0 w-[39.2px]">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(255,102,178,0.3)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.6px] pt-[10px] px-[9.6px] relative size-full">
        <div className="h-[20px] overflow-clip relative shrink-0 w-full">
          <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-0.83px_-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
                <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-6.25%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
                <path d={svgPaths.p35bdd700} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-25%_-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 5">
                <path d={svgPaths.p18bd6f80} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <VectorBackgroundImage additionalClassNames="inset-[45.83%_58.33%_29.17%_41.67%]" />
          <VectorBackgroundImage additionalClassNames="inset-[45.83%_41.67%_29.17%_58.33%]" />
        </div>
      </div>
    </div>
  );
}
type VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function VectorBackgroundImage({ additionalClassNames = "" }: VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-16.67%_-0.83px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
          <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({ text }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className="bg-[#ff1a75] flex-[245.2_0_0] h-[40px] min-h-px min-w-px relative rounded-[26843500px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute left-[66.86px] size-[16px] top-[12px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g clipPath="url(#clip0_1_3217)" id="Icon">
              <path d={svgPaths.p22b32180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.pceec000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p3ec07880} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
            <defs>
              <clipPath id="clip0_1_3217">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-[134.86px] text-[16px] text-center text-white top-[7.6px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type TextBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText1({ text, additionalClassNames = "" }: TextBackgroundImageAndText1Props) {
  return (
    <div className={clsx("h-[28px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#ff1a75] text-[20px] top-[-0.2px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type EdBackgroundImageAndText1Props = {
  text: string;
};

function EdBackgroundImageAndText1({ text }: EdBackgroundImageAndText1Props) {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip top-[19.99px] w-[292.4px]">
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[27px] left-[-0.2px] text-[#2d2d2d] text-[18px] top-[-1.59px] w-[293px]">{text}</p>
    </div>
  );
}
type EdBackgroundImageAndTextProps = {
  text: string;
};

function EdBackgroundImageAndText({ text }: EdBackgroundImageAndTextProps) {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-0 top-0 w-[292.4px]">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px relative text-[#ff1a75] text-[12px]">{text}</p>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage additionalClassNames="h-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 16.6667">
        <path d={svgPaths.p28b04880} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </svg>
    </BackgroundImage>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
};

function TextBackgroundImageAndText({ text }: TextBackgroundImageAndTextProps) {
  return (
    <div className="bg-[#fff186] flex-[1_0_0] min-h-px min-w-px relative rounded-[26843500px] w-[96.638px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#2d2d2d] text-[12px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function Wishlist() {
  return (
    <div className="bg-white relative size-full" data-name="Wishlist">
      <div className="absolute bg-[#fffbf0] content-stretch flex flex-col h-[730.4px] items-start left-0 pt-[118.4px] top-0 w-[1512.8px]" data-name="$c">
        <div className="bg-[#fffbf0] h-[730.4px] relative shrink-0 w-[1512.8px]" data-name="Ed">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[68.4px] relative size-full">
            <div className="content-stretch flex flex-col gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 1">
                <p className="absolute font-['IM_FELL_DW_Pica:Italic',sans-serif] italic leading-[40px] left-0 text-[#2d2d2d] text-[36px] top-0 whitespace-nowrap">My Wishlist</p>
              </div>
              <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-0.4px] whitespace-nowrap">4 items saved</p>
              </div>
            </div>
            <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[517.987px] relative shrink-0 w-full" data-name="Container">
              <ContainerBackgroundImage additionalClassNames="col-1">
                <div className="bg-[#fff0f8] h-[324.4px] overflow-clip relative shrink-0 w-full" data-name="Link">
                  <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-0 px-[118.2px] size-[324.4px] top-0" data-name="At">
                    <ScreenshotBackgroundImage additionalClassNames="h-[447px] w-[514px]">
                      <img alt="" className="absolute left-[-0.14%] max-w-none size-full top-[7.02%]" src={imgScreenshot202603180103331} />
                    </ScreenshotBackgroundImage>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[23.988px] items-start left-[12px] top-[12px] w-[96.638px]" data-name="Container">
                    <TextBackgroundImageAndText text="BESTSELLER" />
                  </div>
                  <div className="absolute bg-[#ff1a75] content-stretch flex flex-col items-start left-[276.4px] pt-[8px] px-[8px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[36px] top-[12px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                </div>
                <div className="h-[191.988px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute h-[67.988px] left-[16px] top-[16px] w-[292.4px]" data-name="Link">
                    <EdBackgroundImageAndText text="Sunnies Face" />
                    <EdBackgroundImageAndText1 text="Staygloss" />
                  </div>
                  <div className="absolute content-stretch flex h-[28px] items-start left-[16px] top-[91.99px] w-[292.4px]" data-name="Container">
                    <TextBackgroundImageAndText1 text="₱595.00" additionalClassNames="w-[51.438px]" />
                  </div>
                  <div className="absolute content-stretch flex gap-[8px] h-[40px] items-start left-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[135.99px] w-[292.4px]" data-name="Container">
                    <ButtonBackgroundImageAndText text="Add to Cart" />
                    <ButtonBackgroundImage />
                  </div>
                </div>
              </ContainerBackgroundImage>
              <ContainerBackgroundImage additionalClassNames="col-2">
                <div className="bg-[#fff0f8] h-[324.4px] overflow-clip relative shrink-0 w-full" data-name="Link">
                  <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-0 px-[118.2px] size-[324.4px] top-0" data-name="At">
                    <ScreenshotBackgroundImage additionalClassNames="h-[325px] w-[333px]">
                      <img alt="" className="absolute h-[118.49%] left-[-15.81%] max-w-none top-[0.06%] w-[136%]" src={imgScreenshot202603180107521} />
                    </ScreenshotBackgroundImage>
                  </div>
                  <div className="absolute left-[12px] size-0 top-[12px]" data-name="Container" />
                  <div className="absolute bg-[#ff1a75] content-stretch flex flex-col items-start left-[276.4px] pt-[8px] px-[8px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[36px] top-[12px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                </div>
                <div className="h-[191.988px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute h-[67.988px] left-[16px] top-[16px] w-[292.4px]" data-name="Link">
                    <EdBackgroundImageAndText text="Issy" />
                    <EdBackgroundImageAndText1 text="Crème Flush Stick" />
                  </div>
                  <div className="absolute content-stretch flex h-[28px] items-start left-[16px] top-[91.99px] w-[292.4px]" data-name="Container">
                    <TextBackgroundImageAndText1 text="₱449.00" additionalClassNames="w-[66.275px]" />
                  </div>
                  <div className="absolute content-stretch flex gap-[8px] h-[40px] items-start left-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[135.99px] w-[292.4px]" data-name="Container">
                    <ButtonBackgroundImageAndText text="Add to Cart" />
                    <ButtonBackgroundImage />
                  </div>
                </div>
              </ContainerBackgroundImage>
              <ContainerBackgroundImage additionalClassNames="col-3">
                <div className="bg-[#fff0f8] h-[324.4px] overflow-clip relative shrink-0 w-full" data-name="Link">
                  <AtBackgroundImage>
                    <img alt="" className="absolute h-[118%] left-[-6%] max-w-none top-[-9.15%] w-[111.9%]" src={imgScreenshot202603180112381} />
                  </AtBackgroundImage>
                  <div className="absolute content-stretch flex flex-col h-[23.988px] items-start left-[12px] top-[12px] w-[96.638px]" data-name="Container">
                    <TextBackgroundImageAndText text="BESTSELLER" />
                  </div>
                  <div className="absolute bg-[#ff1a75] content-stretch flex flex-col items-start left-[276.4px] pt-[8px] px-[8px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[36px] top-[12px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                </div>
                <div className="bg-white h-[191.988px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute h-[67.988px] left-[16px] top-[16px] w-[292.4px]" data-name="Link">
                    <EdBackgroundImageAndText text="Issy" />
                    <EdBackgroundImageAndText1 text="Active Foundation" />
                  </div>
                  <div className="absolute content-stretch flex h-[28px] items-start left-[16px] top-[91.99px] w-[292.4px]" data-name="Container">
                    <TextBackgroundImageAndText1 text="₱699.00" additionalClassNames="w-[61.7px]" />
                  </div>
                  <div className="absolute content-stretch flex gap-[8px] h-[40px] items-start left-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[135.99px] w-[292.4px]" data-name="Container">
                    <ButtonBackgroundImageAndText text="Add to Cart" />
                    <ButtonBackgroundImage />
                  </div>
                </div>
              </ContainerBackgroundImage>
              <ContainerBackgroundImage additionalClassNames="col-4">
                <div className="bg-[#fff0f8] h-[324.4px] overflow-clip relative shrink-0 w-full" data-name="Link">
                  <AtBackgroundImage>
                    <img alt="" className="absolute h-[105.29%] left-[-8.22%] max-w-none top-[-2.85%] w-[116%]" src={imgScreenshot202603180148441} />
                  </AtBackgroundImage>
                  <div className="absolute left-[12px] size-0 top-[12px]" data-name="Container" />
                  <div className="absolute bg-[#ff1a75] content-stretch flex flex-col items-start left-[276.4px] pt-[8px] px-[8px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[36px] top-[12px]" data-name="Button">
                    <IconBackgroundImage />
                  </div>
                </div>
                <div className="h-[191.988px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute h-[67.988px] left-[16px] top-[16px] w-[292.4px]" data-name="Link">
                    <EdBackgroundImageAndText text="Sunnies Face" />
                    <div className="absolute h-[48px] left-0 overflow-clip top-[19.99px] w-[292.4px]" data-name="Ed">
                      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#2d2d2d] text-[18px] top-[-1.2px] whitespace-nowrap">Healthy Touch Eyeshadow Palette</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex h-[28px] items-start left-[16px] top-[91.99px] w-[292.4px]" data-name="Container">
                    <TextBackgroundImageAndText1 text="₱995.00" additionalClassNames="w-[50.15px]" />
                  </div>
                  <div className="absolute content-stretch flex gap-[8px] h-[40px] items-start left-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[135.99px] w-[292.4px]" data-name="Container">
                    <ButtonBackgroundImageAndText text="Add to Cart" />
                    <ButtonBackgroundImage />
                  </div>
                </div>
              </ContainerBackgroundImage>
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
                  <IconBackgroundImage1 additionalClassNames="relative shrink-0">
                    <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconBackgroundImage1>
                  <div className="h-[20px] relative shrink-0 w-[36.3px]" data-name="Ic">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#2d2d2d] text-[14px] top-[-0.2px] whitespace-nowrap">Maria</p>
                    </div>
                  </div>
                </div>
              </div>
              <BackgroundImage3>
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
              </BackgroundImage3>
            </div>
            <button className="absolute content-stretch cursor-pointer flex flex-col items-start left-[156.3px] pt-[8px] px-[8px] rounded-[26843500px] size-[40px] top-0" data-name="Link">
              <BackgroundImage additionalClassNames="h-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                  <path d={svgPaths.p1b764040} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </BackgroundImage>
            </button>
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
                  <BackgroundImage3 additionalClassNames="bg-[#ff1a75]">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute bottom-[8.33%] left-[29.17%] right-1/4 top-[8.33%]" data-name="Vector">
                        <div className="absolute inset-[-5%_-9.09%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 18.3333">
                            <path d={svgPaths.p1f29de80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </BackgroundImage3>
                  <BackgroundImage3 additionalClassNames="bg-[#ff1a75]">
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
                  </BackgroundImage3>
                  <BackgroundImage3 additionalClassNames="bg-[#ff1a75]">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[16.63%_8.33%_12.5%_8.33%]" data-name="Vector">
                        <div className="absolute inset-[-5.88%_-5%_-5.91%_-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3335 15.8435">
                            <path d={svgPaths.p3693ea00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </BackgroundImage3>
                </div>
              </div>
              <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                <BackgroundImageAndText text="Customer Service" />
                <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
                  <BackgroundImageAndText1 text="Contact Us" />
                  <BackgroundImageAndText1 text="FAQs" />
                  <BackgroundImage2>{`Shipping & Delivery`}</BackgroundImage2>
                  <BackgroundImage2>{`Returns & Exchanges`}</BackgroundImage2>
                  <BackgroundImageAndText1 text="Track Your Order" />
                </div>
              </div>
              <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                <BackgroundImageAndText text="Shop" />
                <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
                  <BackgroundImageAndText1 text="Skincare" />
                  <BackgroundImageAndText1 text="Makeup" />
                  <BackgroundImageAndText1 text="Hair Care" />
                  <BackgroundImageAndText1 text="Fragrance" />
                  <BackgroundImageAndText1 text="Body Care" />
                </div>
              </div>
              <div className="col-4 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                <BackgroundImageAndText text="Contact Info" />
                <div className="content-stretch flex flex-col gap-[12px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
                  <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
                    <IconBackgroundImage1 additionalClassNames="absolute left-0 top-[2px]">
                      <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage1>
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
                      <BackgroundImageAndText2 text="+63 900 123 4567" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="List Item">
                    <IconBackgroundImage1 additionalClassNames="relative shrink-0">
                      <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, #FF1A75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage1>
                    <div className="h-[20px] relative shrink-0 w-[154.213px]" data-name="Text">
                      <BackgroundImageAndText2 text="support@mariqits.com" />
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
                      <BackgroundImageAndText2 text="© 2026 Mariqits Beauty E-Commerce. All rights reserved." />
                    </div>
                    <div className="h-[20px] relative shrink-0 w-[330.4px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
                        <div className="h-[20px] relative shrink-0 w-[90.4px]" data-name="Link">
                          <BackgroundImageAndText2 text="Privacy Policy" />
                        </div>
                        <div className="h-[20px] relative shrink-0 w-[108.363px]" data-name="Link">
                          <BackgroundImageAndText2 text="Terms of Service" />
                        </div>
                        <div className="h-[20px] relative shrink-0 w-[83.638px]" data-name="Link">
                          <BackgroundImageAndText2 text="Admin Portal" />
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