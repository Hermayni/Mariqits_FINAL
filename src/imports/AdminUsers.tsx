import clsx from "clsx";
import svgPaths from "./svg-5nzooq0jj2";
import img03 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div className={clsx("h-[35.987px] relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return <BackgroundImage3 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage3>;
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("relative rounded-[12px] shrink-0 w-full", additionalClassNames)}>
      <BackgroundImage1>{children}</BackgroundImage1>
    </div>
  );
}
type IconBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImageProps>) {
  return (
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type AdminLayoutBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function AdminLayoutBackgroundImageAndText({ text, additionalClassNames = "" }: AdminLayoutBackgroundImageAndTextProps) {
  return (
    <BackgroundImage3 additionalClassNames={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-0.4px] whitespace-nowrap">{text}</p>
    </BackgroundImage3>
  );
}
type Icon11VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Icon11VectorBackgroundImage({ additionalClassNames = "" }: Icon11VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute left-[16.67%] right-[16.67%]", additionalClassNames)}>
      <div className="absolute inset-[-0.83px_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.66667">
          <path d="M0.833333 0.833333H14.1667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  );
}
type ButtonBackgroundImageProps = {
  additionalClassNames?: string;
};

function ButtonBackgroundImage({ additionalClassNames = "" }: ButtonBackgroundImageProps) {
  return (
    <div className={clsx("relative rounded-[12px] shrink-0 size-[36px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <div className="h-[20px] overflow-clip relative shrink-0 w-full">
          <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-0.83px_-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
                <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-6.25%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
                <path d={svgPaths.p35bdd700} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-25%_-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 5">
                <path d={svgPaths.p18bd6f80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
          <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
    <BackgroundImage2 additionalClassNames="h-[36px] rounded-[12px] w-[138.538px]">
      <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[69.5px] text-[#155dfc] text-[14px] text-center top-[7.8px] whitespace-nowrap">{text}</p>
    </BackgroundImage2>
  );
}
type TableCellBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellBackgroundImageAndText({ text, additionalClassNames = "" }: TableCellBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute left-[755.1px] top-0 w-[169.338px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#364153] text-[16px] top-[26px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
};

function TextBackgroundImageAndText({ text }: TextBackgroundImageAndTextProps) {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[23.988px] items-center left-[24px] px-[12px] py-[4px] rounded-[26843500px] top-[27.2px] w-[81.813px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#1447e6] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndText2Props = {
  text: string;
};

function ContainerBackgroundImageAndText2({ text }: ContainerBackgroundImageAndText2Props) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <BackgroundImage4>
        <g clipPath="url(#clip0_1_7377)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_7377">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </BackgroundImage4>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#364153] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndText1Props = {
  text: string;
};

function ContainerBackgroundImageAndText1({ text }: ContainerBackgroundImageAndText1Props) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <BackgroundImage4>
        <g id="Icon">
          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </BackgroundImage4>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#364153] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText3Props = {
  text: string;
};

function ParagraphBackgroundImageAndText3({ text }: ParagraphBackgroundImageAndText3Props) {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText2Props = {
  text: string;
};

function ParagraphBackgroundImageAndText2({ text }: ParagraphBackgroundImageAndText2Props) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#101828] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(152, 16, 250) 100%)" }} className="relative rounded-[26843500px] shrink-0 size-[40px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type HeaderCellBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeaderCellBackgroundImageAndText({ text, additionalClassNames = "" }: HeaderCellBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[40.388px] items-start px-[24px] py-[12px] top-0", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#4a5565] text-[12px] tracking-[0.6px] uppercase">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
};

function ParagraphBackgroundImageAndText1({ text }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className="h-[36px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#101828] text-[30px] top-[0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function AdminUsers() {
  return (
    <div className="bg-white relative size-full" data-name="Admin/Users">
      <div className="absolute bg-[#fffbf0] content-stretch flex flex-col h-[730.4px] items-start left-0 top-0 w-[1528px]" data-name="Body">
        <div className="bg-[#f9fafb] h-[730.4px] relative shrink-0 w-full" data-name="AdminLayout">
          <div className="content-stretch flex items-start pl-[288px] pt-[116.8px] relative size-full">
            <div className="h-[552.788px] relative shrink-0 w-[1208px]" data-name="UserManagement">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
                <div className="bg-white h-[119.2px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                  <div className="content-stretch flex flex-col gap-[8px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">
                    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
                      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[-0.2px] whitespace-nowrap">Search Users</p>
                    </div>
                    <div className="h-[41.6px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute h-[41.6px] left-0 rounded-[12px] top-0 w-[1158.4px]" data-name="Text Input">
                        <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[8px] relative rounded-[inherit] size-full">
                          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(45,45,45,0.5)] whitespace-nowrap">Search by name or email...</p>
                        </div>
                        <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      </div>
                      <IconBackgroundImage additionalClassNames="absolute left-[12px] top-[10.8px]">
                        <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </IconBackgroundImage>
                    </div>
                  </div>
                </div>
                <div className="h-[113.6px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[113.6px] items-start left-0 pb-[0.8px] pt-[24.8px] px-[24.8px] rounded-[12px] top-0 w-[386.663px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <ParagraphBackgroundImageAndText text="Total Users" />
                    <ParagraphBackgroundImageAndText1 text="3" />
                  </div>
                  <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[113.6px] items-start left-[410.66px] pb-[0.8px] pt-[24.8px] px-[24.8px] rounded-[12px] top-0 w-[386.663px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <ParagraphBackgroundImageAndText text="Customers" />
                    <ParagraphBackgroundImageAndText1 text="2" />
                  </div>
                  <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[113.6px] items-start left-[821.33px] pb-[0.8px] pt-[24.8px] px-[24.8px] rounded-[12px] top-0 w-[386.675px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <ParagraphBackgroundImageAndText text="Administrators" />
                    <ParagraphBackgroundImageAndText1 text="1" />
                  </div>
                </div>
                <div className="bg-white h-[271.988px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start p-[0.8px] relative size-full">
                      <div className="h-[270.388px] overflow-clip relative shrink-0 w-full" data-name="Table">
                        <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.388px] left-0 top-0 w-[1206.4px]" data-name="Table Header">
                          <div className="absolute h-[40.388px] left-0 top-0 w-[1206.4px]" data-name="Table Row">
                            <HeaderCellBackgroundImageAndText text="User" additionalClassNames="left-0 w-[279.375px]" />
                            <HeaderCellBackgroundImageAndText text="Contact" additionalClassNames="left-[279.37px] w-[271.325px]" />
                            <HeaderCellBackgroundImageAndText text="Role" additionalClassNames="left-[550.7px] w-[204.4px]" />
                            <HeaderCellBackgroundImageAndText text="Joined" additionalClassNames="left-[755.1px] w-[169.338px]" />
                            <div className="absolute content-stretch flex h-[40.388px] items-start left-[924.44px] px-[24px] py-[12px] top-0 w-[281.962px]" data-name="Header Cell">
                              <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#4a5565] text-[12px] text-right tracking-[0.6px] uppercase">Actions</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute h-[230px] left-0 top-[40.39px] w-[1206.4px]" data-name="Table Body">
                          <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[76.8px] left-0 top-0 w-[1206.4px]" data-name="Table Row">
                            <div className="absolute h-[76.8px] left-0 top-0 w-[279.375px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[18.4px] w-[231.375px]" data-name="Container">
                                <ContainerBackgroundImageAndText text="M" />
                                <ContainerBackgroundImage additionalClassNames="shrink-0 w-[120.85px]">
                                  <ParagraphBackgroundImageAndText2 text="Maria Santos" />
                                  <ParagraphBackgroundImageAndText3 text="maria@example.com" />
                                </ContainerBackgroundImage>
                              </div>
                            </div>
                            <div className="absolute h-[76.8px] left-[279.37px] top-0 w-[271.325px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[16.4px] w-[223.325px]" data-name="Container">
                                <ContainerBackgroundImageAndText1 text="maria@example.com" />
                                <ContainerBackgroundImageAndText2 text="+63 912 345 6789" />
                              </div>
                            </div>
                            <div className="absolute h-[76.8px] left-[550.7px] top-0 w-[204.4px]" data-name="Table Cell">
                              <TextBackgroundImageAndText text="Customer" />
                            </div>
                            <TableCellBackgroundImageAndText text="Jan 15, 2026" additionalClassNames="h-[76.8px]" />
                            <div className="absolute h-[76.8px] left-[924.44px] top-0 w-[281.962px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[24px] top-[20.4px] w-[233.963px]" data-name="Container">
                                <ButtonBackgroundImageAndText text="Reset Password" />
                                <ButtonBackgroundImage />
                              </div>
                            </div>
                          </div>
                          <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[76.8px] left-0 top-[76.8px] w-[1206.4px]" data-name="Table Row">
                            <div className="absolute h-[76.8px] left-0 top-0 w-[279.375px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[18.4px] w-[231.375px]" data-name="Container">
                                <ContainerBackgroundImageAndText text="J" />
                                <ContainerBackgroundImage additionalClassNames="shrink-0 w-[128.45px]">
                                  <ParagraphBackgroundImageAndText2 text="Jessica Reyes" />
                                  <ParagraphBackgroundImageAndText3 text="jessica@example.com" />
                                </ContainerBackgroundImage>
                              </div>
                            </div>
                            <div className="absolute h-[76.8px] left-[279.37px] top-0 w-[271.325px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[16.4px] w-[223.325px]" data-name="Container">
                                <ContainerBackgroundImageAndText1 text="jessica@example.com" />
                                <ContainerBackgroundImageAndText2 text="+63 923 456 7890" />
                              </div>
                            </div>
                            <div className="absolute h-[76.8px] left-[550.7px] top-0 w-[204.4px]" data-name="Table Cell">
                              <TextBackgroundImageAndText text="Customer" />
                            </div>
                            <TableCellBackgroundImageAndText text="Feb 1, 2026" additionalClassNames="h-[76.8px]" />
                            <div className="absolute h-[76.8px] left-[924.44px] top-0 w-[281.962px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[24px] top-[20.4px] w-[233.963px]" data-name="Container">
                                <ButtonBackgroundImageAndText text="Reset Password" />
                                <ButtonBackgroundImage />
                              </div>
                            </div>
                          </div>
                          <div className="absolute h-[76.4px] left-0 top-[153.6px] w-[1206.4px]" data-name="Table Row">
                            <div className="absolute h-[76.4px] left-0 top-0 w-[279.375px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[18.4px] w-[231.375px]" data-name="Container">
                                <ContainerBackgroundImageAndText text="A" />
                                <ContainerBackgroundImage additionalClassNames="shrink-0 w-[122.013px]">
                                  <ParagraphBackgroundImageAndText2 text="Admin User" />
                                  <ParagraphBackgroundImageAndText3 text="admin@mariqits.com" />
                                </ContainerBackgroundImage>
                              </div>
                            </div>
                            <div className="absolute h-[76.4px] left-[279.37px] top-0 w-[271.325px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[16.4px] w-[223.325px]" data-name="Container">
                                <ContainerBackgroundImageAndText1 text="admin@mariqits.com" />
                                <ContainerBackgroundImageAndText2 text="+63 900 000 0000" />
                              </div>
                            </div>
                            <div className="absolute h-[76.4px] left-[550.7px] top-0 w-[204.4px]" data-name="Table Cell">
                              <div className="absolute bg-[#f3e8ff] h-[23.988px] left-[24px] rounded-[26843500px] top-[26.61px] w-[119.138px]" data-name="Text">
                                <div className="absolute left-[12px] size-[12px] top-[5.99px]" data-name="Icon">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                    <g id="Icon">
                                      <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                  </svg>
                                </div>
                                <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] left-[28px] text-[#8200db] text-[12px] top-[3px] whitespace-nowrap">Administrator</p>
                              </div>
                            </div>
                            <TableCellBackgroundImageAndText text="Dec 1, 2025" additionalClassNames="h-[76.4px]" />
                            <div className="absolute h-[76.4px] left-[924.44px] top-0 w-[281.962px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center justify-end left-[24px] top-[20.4px] w-[233.963px]" data-name="Container">
                                <ButtonBackgroundImageAndText text="Reset Password" />
                                <ButtonBackgroundImage additionalClassNames="opacity-50" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 size-0 top-[730.4px]" data-name="Grammarly-desktop-integration" />
      <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col h-[730.4px] items-start left-0 top-0 w-[256px]" data-name="AdminLayout">
        <div className="h-[100.775px] relative shrink-0 w-[256px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#364153] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] pt-[24px] px-[24px] relative size-full">
            <div className="content-stretch flex h-[51.975px] items-center justify-between relative shrink-0 w-[208px]" data-name="Container">
              <BackgroundImage2 additionalClassNames="h-[51.975px] w-[94.438px]">
                <div className="absolute h-[32px] left-0 top-0 w-[151px]" data-name="Heading 1">
                  <div className="absolute h-[70px] left-[-12px] top-[-14px] w-[187px]" data-name="0 3">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[-4.53%] max-w-none top-[-9.51%] w-[100.16%]" src={img03} />
                    </div>
                  </div>
                </div>
                <div className="absolute h-[15.988px] left-0 top-[35.99px] w-[94.438px]" data-name="Paragraph">
                  <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#99a1af] text-[12px] top-0 w-[94.438px]">Admin Panel</p>
                </div>
              </BackgroundImage2>
              <div className="relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <Icon11VectorBackgroundImage additionalClassNames="bottom-1/2 top-1/2" />
                    <Icon11VectorBackgroundImage additionalClassNames="bottom-3/4 top-1/4" />
                    <Icon11VectorBackgroundImage additionalClassNames="bottom-1/4 top-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[472.825_0_0] min-h-px min-w-px relative w-[256px]" data-name="Navigation">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
              <BackgroundImage additionalClassNames="h-[48px]">
                <IconBackgroundImage additionalClassNames="relative shrink-0">
                  <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </IconBackgroundImage>
                <AdminLayoutBackgroundImageAndText text="Dashboard" additionalClassNames="w-[85.075px]" />
              </BackgroundImage>
              <BackgroundImage additionalClassNames="h-[48px]">
                <IconBackgroundImage additionalClassNames="relative shrink-0">
                  <path d={svgPaths.p20f4ecf0} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M10 18.3333V10" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p2eca8c80} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M6.25 3.55833L13.75 7.85" id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </IconBackgroundImage>
                <AdminLayoutBackgroundImageAndText text="Products" additionalClassNames="w-[70.537px]" />
              </BackgroundImage>
              <BackgroundImage additionalClassNames="h-[48px]">
                <IconBackgroundImage additionalClassNames="relative shrink-0">
                  <path d={svgPaths.p39961300} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M2.5 5H17.5" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p2f53ac80} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </IconBackgroundImage>
                <AdminLayoutBackgroundImageAndText text="Orders" additionalClassNames="w-[53.963px]" />
              </BackgroundImage>
              <button className="bg-gradient-to-r cursor-pointer from-[#fc549c] h-[48px] relative rounded-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#fed571] via-[#ff5f1a] via-[51.923%] w-full" data-name="Link">
                <BackgroundImage1>
                  <IconBackgroundImage additionalClassNames="relative shrink-0">
                    <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pae3c380} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconBackgroundImage>
                  <BackgroundImage2 additionalClassNames="h-[24px] w-[43.075px]">
                    <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-left text-white top-[-0.4px] whitespace-nowrap">Users</p>
                  </BackgroundImage2>
                </BackgroundImage1>
              </button>
              <div className="relative rounded-[12px] shrink-0 w-full" data-name="Link">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative w-full">
                    <IconBackgroundImage additionalClassNames="relative shrink-0">
                      <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </IconBackgroundImage>
                    <AdminLayoutBackgroundImageAndText text="Inventory" additionalClassNames="w-[71.825px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[156.8px] relative shrink-0 w-[256px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#364153] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[16.8px] px-[16px] relative size-full">
            <div className="bg-[#364153] h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
                  <div className="relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 26, 117) 0%, rgb(255, 36, 121) 7.1429%, rgb(255, 45, 126) 14.286%, rgb(255, 52, 130) 21.429%, rgb(255, 58, 135) 28.571%, rgb(255, 63, 139) 35.714%, rgb(255, 69, 143) 42.857%, rgb(255, 74, 148) 50%, rgb(255, 78, 152) 57.143%, rgb(255, 82, 156) 64.286%, rgb(255, 87, 161) 71.429%, rgb(255, 91, 165) 78.571%, rgb(255, 95, 169) 85.714%, rgb(255, 98, 174) 92.857%, rgb(255, 102, 178) 100%)" }}>
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">A</p>
                    </div>
                  </div>
                  <ContainerBackgroundImage additionalClassNames="flex-[148_0_0] min-h-px min-w-px">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[14px] text-white top-[-0.2px] whitespace-nowrap">Admin User</p>
                    </div>
                    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
                      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#99a1af] text-[12px]">Administrator</p>
                    </div>
                  </ContainerBackgroundImage>
                </div>
              </div>
            </div>
            <BackgroundImage additionalClassNames="h-[44px]">
              <IconBackgroundImage additionalClassNames="relative shrink-0">
                <path d={svgPaths.p38966ca0} id="Vector" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p14ca9100} id="Vector_2" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M17.5 10H7.5" id="Vector_3" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </IconBackgroundImage>
              <BackgroundImage2 additionalClassNames="h-[20px] w-[48.7px]">
                <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[24.5px] text-[#ff6467] text-[14px] text-center top-[-0.2px] whitespace-nowrap">Logout</p>
              </BackgroundImage2>
            </BackgroundImage>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex h-[84px] items-center justify-between left-[256px] pb-[0.8px] px-[32px] top-0 w-[1272px]" data-name="AdminLayout">
        <div aria-hidden="true" className="absolute border-b-[0.8px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[52px] relative shrink-0 w-[259.962px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
              <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#2d2d2d] text-[20px] top-[0.8px] whitespace-nowrap">Users</p>
            </div>
            <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">Manage user accounts and permissions</p>
            </div>
          </div>
        </div>
        <div className="h-[35.987px] relative shrink-0 w-[76.763px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
            <ContainerBackgroundImage additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
              <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="-translate-x-full absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-[77.24px] text-[#2d2d2d] text-[14px] text-right top-[-0.2px] whitespace-nowrap">Admin User</p>
              </div>
              <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-right whitespace-nowrap">Administrator</p>
              </div>
            </ContainerBackgroundImage>
          </div>
        </div>
      </div>
    </div>
  );
}