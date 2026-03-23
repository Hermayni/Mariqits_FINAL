import clsx from "clsx";
import svgPaths from "./svg-zuiu5uo26t";
import imgCd from "figma:asset/ee9502f27a3c8a5686d370ae7c2af25d658eca1b.png";
import img02 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-[16px] size-[20px] top-[14.8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("content-stretch flex items-center overflow-clip py-[12px] relative rounded-[inherit] size-full", additionalClassNames)}>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(45,45,45,0.5)] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText({ text, additionalClassNames = "" }: ParagraphTextProps) {
  return (
    <div className={clsx("absolute h-[20px] left-[16px] w-[350.4px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#364153] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#2d2d2d] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function SignIn() {
  return (
    <div className="bg-white relative size-full" data-name="Sign In">
      <div className="absolute h-[1026px] left-0 top-0 w-[1513px]" data-name="Cd">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCd} />
        <div className="absolute bg-[rgba(26,26,26,0.15)] h-[1026px] left-0 top-[-3px] w-[1513px]" />
        <div className="absolute h-[929.588px] left-[532.5px] top-[48.21px] w-[448px]" data-name="Container">
          <div className="absolute h-[123.988px] left-0 top-[80px] w-[448px]" data-name="Container">
            <div className="absolute h-[48px] left-0 top-0 w-[448px]" data-name="Heading 1">
              <div className="absolute h-[145.536px] left-[41px] top-[-36.21px] w-[389.33px]" data-name="0 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img02} />
              </div>
            </div>
            <div className="absolute h-[31.988px] left-0 top-[60px] w-[448px]" data-name="Heading 2">
              <p className="-translate-x-1/2 absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] left-[224px] text-[#e6ebbd] text-[24px] text-center top-[16px] whitespace-nowrap">Create Your Account</p>
            </div>
            <div className="absolute h-[24px] left-0 top-[99.99px] w-[448px]" data-name="Paragraph">
              <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[224.24px] text-[#fefffa] text-[16px] text-center top-[11px] whitespace-nowrap">Join our beauty community today</p>
            </div>
          </div>
          <div className="absolute h-[24px] left-0 top-[905.59px] w-[448px]" data-name="Container">
            <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[224.16px] text-[20px] text-center text-white top-[2px] whitespace-nowrap">← Back to Shopping</p>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[528.8px] items-start left-[544px] pb-[0.8px] pt-[32.8px] px-[32.8px] rounded-[24px] top-[292px] w-[448px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,102,178,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
          <div className="content-stretch flex flex-col gap-[20px] h-[415.2px] items-start relative shrink-0 w-full" data-name="Form">
            <div className="bg-[#fff0f8] h-[100px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
              <div className="absolute h-[20px] left-[16px] top-[16px] w-[350.4px]" data-name="Paragraph">
                <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#2d2d2d] text-[14px] top-[-0.2px] whitespace-nowrap">Demo Credentials:</p>
              </div>
              <ParagraphText text="User: maria@example.com / password123" additionalClassNames="top-[44px]" />
              <ParagraphText text="Admin: admin@mariqits.com / admin123" additionalClassNames="top-[64px]" />
            </div>
            <div className="content-stretch flex flex-col gap-[8px] h-[77.6px] items-start relative shrink-0 w-full" data-name="Container">
              <Text text="Email Address" />
              <div className="h-[49.6px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute h-[49.6px] left-0 rounded-[16px] top-0 w-[382.4px]" data-name="Email Input">
                  <Text1 text="your@email.com" additionalClassNames="pl-[48px] pr-[16px]" />
                  <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,102,178,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                </div>
                <Icon>
                  <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </Icon>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] h-[77.6px] items-start relative shrink-0 w-full" data-name="Container">
              <Text text="Password" />
              <div className="h-[49.6px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute h-[49.6px] left-0 rounded-[16px] top-0 w-[382.4px]" data-name="Password Input">
                  <Text1 text="Enter your password" additionalClassNames="px-[48px]" />
                  <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(255,102,178,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                </div>
                <Icon>
                  <path d={svgPaths.p2566d000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p1bf79e00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </Icon>
                <div className="absolute content-stretch flex flex-col items-start left-[346.4px] size-[20px] top-[14.8px]" data-name="Button">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
                      <div className="absolute inset-[-7.14%_-5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3342 13.3323">
                          <path d={svgPaths.pcb0000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[37.5%]" data-name="Vector">
                      <div className="absolute inset-[-16.67%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
                          <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <div className="h-[24px] relative shrink-0 w-[133.088px]" data-name="Label">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                  <div className="shrink-0 size-[13px]" data-name="Checkbox" />
                  <Wrapper additionalClassNames="h-[24px] w-[112.088px]">
                    <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#364153] text-[16px] top-[-0.4px] whitespace-nowrap">Remember me</p>
                  </Wrapper>
                </div>
              </div>
              <Wrapper additionalClassNames="h-[20px] w-[121.138px]">
                <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#ff1a75] text-[14px] top-[-0.2px] whitespace-nowrap">Forgot Password?</p>
              </Wrapper>
            </div>
            <div className="bg-[#ff1a75] h-[56px] relative rounded-[26843500px] shrink-0 w-full" data-name="Button">
              <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[191.36px] text-[16px] text-center text-white top-[15.6px] whitespace-nowrap">Sign In</p>
            </div>
          </div>
          <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] left-[191.64px] text-[#4a5565] text-[0px] text-[16px] text-center top-[-0.4px] whitespace-nowrap">
              <span className="leading-[24px]">{`Don't have an account? `}</span>
              <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] text-[#ff1a75]">Create Account</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-0 size-0 top-[730.4px]" data-name="Grammarly-desktop-integration" />
    </div>
  );
}