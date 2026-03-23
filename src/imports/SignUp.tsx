import clsx from "clsx";
import svgPaths from "./svg-jb2io044fs";
import imgCd from "figma:asset/ee9502f27a3c8a5686d370ae7c2af25d658eca1b.png";
import img02 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute size-[20px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <Wrapper additionalClassNames="left-[16px] top-[14.8px]">
      <path d={svgPaths.p2566d000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p1bf79e00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="absolute border-[0.8px] border-[rgba(255,102,178,0.3)] border-solid h-[49.6px] left-0 overflow-clip rounded-[16px] top-0 w-[382.4px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] left-[47.2px] text-[16px] text-[rgba(45,45,45,0.5)] top-[14px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[382.4px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#2d2d2d] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function SignUp() {
  return (
    <div className="bg-white relative size-full" data-name="Sign Up">
      <div className="absolute h-[1026px] left-0 top-0 w-[1513px]" data-name="Cd">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCd} />
        <div className="absolute bg-[rgba(26,26,26,0.15)] h-[1026px] left-0 top-[-3px] w-[1513px]" />
        <div className="absolute h-[929.588px] left-[532.5px] top-[48.21px] w-[448px]" data-name="Container">
          <div className="absolute h-[123.988px] left-0 top-0 w-[448px]" data-name="Container">
            <div className="absolute h-[48px] left-0 top-0 w-[448px]" data-name="Heading 1">
              <div className="absolute bottom-[-61.33px] h-[145.536px] left-[41px] w-[389.33px]" data-name="0 2">
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
          <div className="absolute bg-white border-[0.8px] border-[rgba(255,102,178,0.2)] border-solid h-[725.6px] left-0 rounded-[24px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-[155.99px] w-[448px]" data-name="Container">
            <div className="absolute h-[612px] left-[32px] top-[32px] w-[382.4px]" data-name="Form">
              <div className="absolute h-[77.6px] left-0 top-0 w-[382.4px]" data-name="Container">
                <LabelText text="Full Name" />
                <div className="absolute h-[49.6px] left-0 top-[28px] w-[382.4px]" data-name="Container">
                  <Text text="Maria Santos" />
                  <Wrapper additionalClassNames="left-[16px] top-[14.8px]">
                    <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Wrapper>
                </div>
              </div>
              <div className="absolute h-[77.6px] left-0 top-[97.6px] w-[382.4px]" data-name="Container">
                <LabelText text="Email Address" />
                <div className="absolute h-[49.6px] left-0 top-[28px] w-[382.4px]" data-name="Container">
                  <Text text="your@email.com" />
                  <Wrapper additionalClassNames="left-[16px] top-[14.8px]">
                    <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Wrapper>
                </div>
              </div>
              <div className="absolute h-[77.6px] left-0 top-[195.2px] w-[382.4px]" data-name="Container">
                <LabelText text="Phone Number" />
                <div className="absolute h-[49.6px] left-0 top-[28px] w-[382.4px]" data-name="Container">
                  <Text text="+63 912 345 6789" />
                  <div className="absolute left-[16px] size-[20px] top-[14.8px]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_1_3122)" id="Icon">
                        <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_3122">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute h-[77.6px] left-0 top-[292.8px] w-[382.4px]" data-name="Container">
                <LabelText text="Password" />
                <div className="absolute h-[49.6px] left-0 top-[28px] w-[382.4px]" data-name="Container">
                  <Text text="Create a strong password" />
                  <Icon />
                  <div className="absolute left-[346.4px] size-[20px] top-[14.8px]" data-name="Button">
                    <Wrapper additionalClassNames="left-0 top-0">
                      <path d={svgPaths.p338f2df0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </Wrapper>
                  </div>
                </div>
              </div>
              <div className="absolute h-[77.6px] left-0 top-[390.4px] w-[382.4px]" data-name="Container">
                <LabelText text="Confirm Password" />
                <div className="absolute h-[49.6px] left-0 top-[28px] w-[382.4px]" data-name="Container">
                  <Text text="Confirm your password" />
                  <Icon />
                </div>
              </div>
              <div className="absolute h-[48px] left-0 top-[488px] w-[382.4px]" data-name="Label">
                <div className="absolute left-0 size-[13px] top-[4px]" data-name="Checkbox" />
                <div className="absolute h-[48px] left-[21px] top-0 w-[361.4px]" data-name="Text">
                  <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] left-0 text-[#364153] text-[16px] top-[-0.4px] w-[341px]">
                    <span className="leading-[24px]">{`I agree to the `}</span>
                    <span className="leading-[24px] text-[#ff1a75]">{`Terms & Conditions`}</span>
                    <span className="leading-[24px]">{` and `}</span>
                    <span className="leading-[24px] text-[#ff1a75]">Privacy Policy</span>
                  </p>
                </div>
              </div>
              <div className="absolute bg-[#ff1a75] h-[56px] left-0 rounded-[26843500px] top-[556px] w-[382.4px]" data-name="Button">
                <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[191.3px] text-[16px] text-center text-white top-[15.6px] whitespace-nowrap">Create Account</p>
              </div>
            </div>
            <div className="absolute h-[24px] left-[32px] top-[668px] w-[382.4px]" data-name="Paragraph">
              <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] left-[191.24px] text-[#4a5565] text-[0px] text-[16px] text-center top-[-0.4px] whitespace-nowrap">
                <span className="leading-[24px]">{`Already have an account? `}</span>
                <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] text-[#ff1a75]">Sign In</span>
              </p>
            </div>
          </div>
          <div className="absolute h-[24px] left-0 top-[905.59px] w-[448px]" data-name="Container">
            <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[224.16px] text-[20px] text-center text-white top-[2px] whitespace-nowrap">← Back to Shopping</p>
          </div>
        </div>
      </div>
      <div className="absolute left-0 size-0 top-[730.4px]" data-name="Grammarly-desktop-integration" />
    </div>
  );
}