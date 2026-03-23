import clsx from "clsx";
import svgPaths from "./svg-wfg79wv7jk";
import imgContainer from "figma:asset/6d942f134fa03c515c4e27b72eb7692068130f19.png";
import imgContainer1 from "figma:asset/fa581e128a6ce86d4cef2aed67d883cb7150356b.png";
import imgContainer2 from "figma:asset/c46acde492e0504e7240eda748d1e57c57379955.png";
import img03 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[12px] items-center pl-[16px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div className={clsx("min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="pointer-events-none relative rounded-[12px] shrink-0 size-[64px]">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[12px]">{children}</div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 rounded-[12px]" />
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#101828] text-[14px] top-[-0.2px] whitespace-nowrap">{children}</p>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
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
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#d1d5dc] text-[16px] top-[-0.4px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type Icon5VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Icon5VectorBackgroundImage({ additionalClassNames = "" }: Icon5VectorBackgroundImageProps) {
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
type ParagraphBackgroundImageAndText2Props = {
  text: string;
};

function ParagraphBackgroundImageAndText2({ text }: ParagraphBackgroundImageAndText2Props) {
  return <BackgroundImage1>{text}</BackgroundImage1>;
}
type TableCellBackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellBackgroundImageAndText3({ text, additionalClassNames = "" }: TableCellBackgroundImageAndText3Props) {
  return (
    <div className={clsx("absolute left-[730.89px] top-0 w-[193.25px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-[24px] text-[#101828] text-[14px] top-[18.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TableCellBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellBackgroundImageAndText2({ text, additionalClassNames = "" }: TableCellBackgroundImageAndText2Props) {
  return (
    <div className={clsx("absolute left-[497.66px] top-0 w-[233.225px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#6a7282] text-[14px] top-[18.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TableCellBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellBackgroundImageAndText1({ text, additionalClassNames = "" }: TableCellBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute left-[227.39px] top-0 w-[270.275px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[18.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TableCellBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellBackgroundImageAndText({ text, additionalClassNames = "" }: TableCellBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute left-0 top-0 w-[227.387px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[24px] text-[#101828] text-[14px] top-[18.2px] whitespace-nowrap">{text}</p>
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
    <div className="absolute content-stretch flex h-[31.988px] items-start left-[24px] top-[112px] w-[230.6px]">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#101828] text-[24px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[20px] left-[24px] top-[88px] w-[230.6px]">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText({ text, additionalClassNames = "" }: TextBackgroundImageAndTextProps) {
  return (
    <div className={clsx("bg-[#f0fdf4] h-[23.988px] relative rounded-[26843500px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[4px] relative size-full">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#00a63e] text-[12px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="bg-white relative size-full" data-name="Admin/Dashboard">
      <div className="absolute bg-[#fffbf0] content-stretch flex flex-col h-[730.4px] items-start left-0 top-0 w-[1512.8px]" data-name="Body">
        <div className="bg-[#f9fafb] h-[1059.775px] relative shrink-0 w-full" data-name="AdminLayout">
          <div className="content-stretch flex items-start pl-[288px] pt-[116.8px] relative size-full">
            <div className="h-[910.975px] relative shrink-0 w-[1192.8px]" data-name="AdminDashboard">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
                <div className="h-[169.588px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute bg-white border-[#e5e7eb] border-[0.8px] border-solid h-[169.588px] left-0 rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[280.2px]" data-name="Container">
                    <div className="absolute content-stretch flex h-[48px] items-start justify-between left-[24px] top-[24px] w-[230.6px]" data-name="Container">
                      <div className="relative rounded-[12px] shrink-0 size-[48px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 166, 62) 100%)" }}>
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
                          <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
                              <div className="absolute inset-[-5%_-1px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 22">
                                  <path d="M1 1V21" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="Vector">
                              <div className="absolute inset-[-7.14%_-8.33%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
                                  <path d={svgPaths.p30498f48} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <TextBackgroundImageAndText text="+12.5%" additionalClassNames="w-[59.4px]" />
                    </div>
                    <ParagraphBackgroundImageAndText text="Total Revenue" />
                    <ParagraphBackgroundImageAndText1 text="₱11,493" />
                  </div>
                  <div className="absolute bg-white border-[#e5e7eb] border-[0.8px] border-solid h-[169.588px] left-[304.2px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[280.2px]" data-name="Container">
                    <div className="absolute content-stretch flex h-[48px] items-start justify-between left-[24px] top-[24px] w-[230.6px]" data-name="Container">
                      <div className="relative rounded-[12px] shrink-0 size-[48px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)" }}>
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
                          <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
                              <div className="absolute inset-[-5%_-5.56%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
                                  <path d={svgPaths.p267e5400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
                              <div className="absolute inset-[-1px_-5.56%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
                                  <path d="M1 1H19" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[41.67%_33.33%]" data-name="Vector">
                              <div className="absolute inset-[-25%_-12.5%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
                                  <path d={svgPaths.p9b5a840} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <TextBackgroundImageAndText text="+8.2%" additionalClassNames="w-[54.888px]" />
                    </div>
                    <ParagraphBackgroundImageAndText text="Total Orders" />
                    <ParagraphBackgroundImageAndText1 text="4" />
                  </div>
                  <div className="absolute bg-white border-[#e5e7eb] border-[0.8px] border-solid h-[169.588px] left-[608.4px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[280.2px]" data-name="Container">
                    <div className="absolute content-stretch flex h-[48px] items-start justify-between left-[24px] top-[24px] w-[230.6px]" data-name="Container">
                      <div className="relative rounded-[12px] shrink-0 size-[48px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(152, 16, 250) 100%)" }}>
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
                          <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <div className="absolute inset-[8.34%_12.5%]" data-name="Vector">
                              <div className="absolute inset-[-5%_-5.56%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.9959">
                                  <path d={svgPaths.p1b524c20} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
                              <div className="absolute inset-[-10%_-1px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
                                  <path d="M1 11V1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute bottom-1/2 left-[13.71%] right-[13.71%] top-[29.17%]" data-name="Vector">
                              <div className="absolute inset-[-20%_-5.74%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4203 7.00017">
                                  <path d={svgPaths.p355b9480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[17.79%_31.25%_60.75%_31.25%]" data-name="Vector">
                              <div className="absolute inset-[-19.42%_-11.11%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0003 7.15034">
                                  <path d={svgPaths.p125b5900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <TextBackgroundImageAndText text="+3 new" additionalClassNames="w-[57.788px]" />
                    </div>
                    <ParagraphBackgroundImageAndText text="Products" />
                    <ParagraphBackgroundImageAndText1 text="20" />
                  </div>
                  <div className="absolute bg-white border-[#e5e7eb] border-[0.8px] border-solid h-[169.588px] left-[912.6px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[280.2px]" data-name="Container">
                    <div className="absolute content-stretch flex h-[48px] items-start justify-between left-[24px] top-[24px] w-[230.6px]" data-name="Container">
                      <div className="relative rounded-[12px] shrink-0 size-[48px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(246, 51, 154) 0%, rgb(230, 0, 118) 100%)" }}>
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
                          <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
                              <div className="absolute inset-[-16.67%_-7.14%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                                  <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
                              <div className="absolute inset-[-12.5%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                                  <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
                              <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00024 7.87024">
                                  <path d={svgPaths.p19976900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
                              <div className="absolute inset-[-12.91%_-33.25%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00808 9.75048">
                                  <path d={svgPaths.p29500900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <TextBackgroundImageAndText text="+5.1%" additionalClassNames="w-[51.862px]" />
                    </div>
                    <ParagraphBackgroundImageAndText text="Customers" />
                    <ParagraphBackgroundImageAndText1 text="2" />
                  </div>
                </div>
                <div className="h-[140.6px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute bg-[#eff6ff] content-stretch flex flex-col h-[140.6px] items-start left-0 pb-[0.8px] pt-[24.8px] px-[24.8px] rounded-[12px] top-0 w-[584.4px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="content-stretch flex gap-[16px] h-[91px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="relative shrink-0 size-[24px]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g id="Icon">
                            <path d={svgPaths.p311be280} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d="M3 6H21" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d={svgPaths.p8aac400} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex-[494.8_0_0] h-[91px] min-h-px min-w-px relative" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <div className="absolute h-[27px] left-0 top-0 w-[494.8px]" data-name="Heading 3">
                            <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#1c398e] text-[18px] top-[-1.2px] whitespace-nowrap">Pending Orders</p>
                          </div>
                          <div className="absolute h-[20px] left-0 top-[35px] w-[494.8px]" data-name="Paragraph">
                            <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1447e6] text-[14px] top-[-0.2px] whitespace-nowrap">2 orders need your attention</p>
                          </div>
                          <div className="absolute h-[20px] left-0 top-[70.2px] w-[120.075px]" data-name="Button">
                            <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[60.5px] text-[#155dfc] text-[14px] text-center top-[-0.2px] whitespace-nowrap">Manage Orders →</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[337.587px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                  <div className="content-stretch flex flex-col items-start p-[0.8px] relative size-full">
                    <div className="h-[68.8px] relative shrink-0 w-full" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center justify-between pb-[0.8px] px-[24px] relative size-full">
                          <BackgroundImage additionalClassNames="h-[28px] w-[118.662px]">
                            <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#101828] text-[18px] top-[-0.4px] whitespace-nowrap">Recent Orders</p>
                          </BackgroundImage>
                          <BackgroundImage additionalClassNames="h-[20px] w-[67.713px]">
                            <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[34.5px] text-[#155dfc] text-[14px] text-center top-[-0.2px] whitespace-nowrap">View All →</p>
                          </BackgroundImage>
                        </div>
                      </div>
                    </div>
                    <div className="h-[267.188px] overflow-clip relative shrink-0 w-full" data-name="Table">
                      <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.388px] left-0 top-0 w-[1191.2px]" data-name="Table Header">
                        <div className="absolute h-[40.388px] left-0 top-0 w-[1191.2px]" data-name="Table Row">
                          <HeaderCellBackgroundImageAndText text="Order ID" additionalClassNames="left-0 w-[227.387px]" />
                          <HeaderCellBackgroundImageAndText text="Customer" additionalClassNames="left-[227.39px] w-[270.275px]" />
                          <HeaderCellBackgroundImageAndText text="Date" additionalClassNames="left-[497.66px] w-[233.225px]" />
                          <HeaderCellBackgroundImageAndText text="Total" additionalClassNames="left-[730.89px] w-[193.25px]" />
                          <HeaderCellBackgroundImageAndText text="Status" additionalClassNames="left-[924.14px] w-[267.063px]" />
                        </div>
                      </div>
                      <div className="absolute h-[226.8px] left-0 top-[40.39px] w-[1191.2px]" data-name="Table Body">
                        <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[56.8px] left-0 top-0 w-[1191.2px]" data-name="Table Row">
                          <TableCellBackgroundImageAndText text="ORD-001" additionalClassNames="h-[56.8px]" />
                          <TableCellBackgroundImageAndText1 text="Maria Santos" additionalClassNames="h-[56.8px]" />
                          <TableCellBackgroundImageAndText2 text="3/1/2026" additionalClassNames="h-[56.8px]" />
                          <TableCellBackgroundImageAndText3 text="₱3,347" additionalClassNames="h-[56.8px]" />
                          <div className="absolute h-[56.8px] left-[924.14px] top-0 w-[267.063px]" data-name="Table Cell">
                            <div className="absolute bg-[#dcfce7] content-stretch flex h-[23.2px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] top-[18px] w-[79.713px]" data-name="Text">
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#008236] text-[12px] whitespace-nowrap">Delivered</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[56.8px] left-0 top-[56.8px] w-[1191.2px]" data-name="Table Row">
                          <TableCellBackgroundImageAndText text="ORD-002" additionalClassNames="h-[56.8px]" />
                          <TableCellBackgroundImageAndText1 text="Jessica Reyes" additionalClassNames="h-[56.8px]" />
                          <TableCellBackgroundImageAndText2 text="3/10/2026" additionalClassNames="h-[56.8px]" />
                          <TableCellBackgroundImageAndText3 text="₱2,049" additionalClassNames="h-[56.8px]" />
                          <div className="absolute h-[56.8px] left-[924.14px] top-0 w-[267.063px]" data-name="Table Cell">
                            <div className="absolute bg-[#dbeafe] content-stretch flex h-[23.2px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] top-[18px] w-[73.213px]" data-name="Text">
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#1447e6] text-[12px] whitespace-nowrap">Shipped</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[56.8px] left-0 top-[113.6px] w-[1191.2px]" data-name="Table Row">
                          <TableCellBackgroundImageAndText text="ORD-003" additionalClassNames="h-[56.8px]" />
                          <TableCellBackgroundImageAndText1 text="Anna Cruz" additionalClassNames="h-[56.8px]" />
                          <TableCellBackgroundImageAndText2 text="3/14/2026" additionalClassNames="h-[56.8px]" />
                          <TableCellBackgroundImageAndText3 text="₱4,148" additionalClassNames="h-[56.8px]" />
                          <div className="absolute h-[56.8px] left-[924.14px] top-0 w-[267.063px]" data-name="Table Cell">
                            <div className="absolute bg-[#fef9c2] content-stretch flex h-[23.2px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] top-[18px] w-[88.688px]" data-name="Text">
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#a65f00] text-[12px] whitespace-nowrap">Processing</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute h-[56.4px] left-0 top-[170.4px] w-[1191.2px]" data-name="Table Row">
                          <TableCellBackgroundImageAndText text="ORD-004" additionalClassNames="h-[56.4px]" />
                          <TableCellBackgroundImageAndText1 text="Sarah Garcia" additionalClassNames="h-[56.4px]" />
                          <TableCellBackgroundImageAndText2 text="3/15/2026" additionalClassNames="h-[56.4px]" />
                          <TableCellBackgroundImageAndText3 text="₱1,949" additionalClassNames="h-[56.4px]" />
                          <div className="absolute h-[56.4px] left-[924.14px] top-0 w-[267.063px]" data-name="Table Cell">
                            <div className="absolute bg-[#f3f4f6] content-stretch flex h-[23.2px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] top-[18px] w-[71.775px]" data-name="Text">
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Pending</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[191.2px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                  <div className="content-stretch flex flex-col gap-[16px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">
                    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
                      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#101828] text-[18px] top-[-0.4px] whitespace-nowrap">Top Selling Products</p>
                    </div>
                    <div className="h-[97.6px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute bg-[#f9fafb] content-stretch flex gap-[16px] h-[97.6px] items-center left-0 px-[16.8px] py-[0.8px] rounded-[12px] top-0 w-[370.4px]" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <ContainerBackgroundImage>
                          <img alt="" className="absolute left-[-64.71%] max-w-none size-[200.62%] top-[-34.06%]" src={imgContainer} />
                        </ContainerBackgroundImage>
                        <ContainerBackgroundImage1 additionalClassNames="flex-[256.8_0_0] h-[40px]">
                          <BackgroundImage1>{`Popique All-over Multiuse Cream `}</BackgroundImage1>
                          <BackgroundImageAndText text="Sales: 256" />
                        </ContainerBackgroundImage1>
                      </div>
                      <div className="absolute bg-[#f9fafb] content-stretch flex gap-[16px] h-[97.6px] items-center left-[386.4px] px-[16.8px] py-[0.8px] rounded-[12px] top-0 w-[370.4px]" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <ContainerBackgroundImage>
                          <img alt="" className="absolute h-[240.49%] left-[-46.38%] max-w-none top-[-103.34%] w-[192.58%]" src={imgContainer1} />
                        </ContainerBackgroundImage>
                        <ContainerBackgroundImage1 additionalClassNames="flex-[256.8_0_0] h-[40px]">
                          <ParagraphBackgroundImageAndText2 text="Issy Cowgirl fat Gloss" />
                          <BackgroundImageAndText text="Sales: 142" />
                        </ContainerBackgroundImage1>
                      </div>
                      <div className="absolute bg-[#f9fafb] content-stretch flex gap-[16px] h-[97.6px] items-center left-[772.8px] px-[16.8px] py-[0.8px] rounded-[12px] top-0 w-[370.4px]" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <ContainerBackgroundImage>
                          <img alt="" className="absolute h-[143.54%] left-[-6.64%] max-w-none top-[-12.96%] w-[114.8%]" src={imgContainer2} />
                        </ContainerBackgroundImage>
                        <ContainerBackgroundImage1 additionalClassNames="flex-[256.8_0_0] h-[40px]">
                          <ParagraphBackgroundImageAndText2 text="Lucky Beauty Mini Blush" />
                          <BackgroundImageAndText text="Sales: 205" />
                        </ContainerBackgroundImage1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 size-0 top-[730.4px]" data-name="Grammarly-desktop-integration" />
      <div className="absolute bg-[#2d2d2d] content-stretch flex flex-col h-[730.4px] items-start left-0 top-0" data-name="AdminLayout">
        <div className="h-[100.775px] relative shrink-0 w-[256px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#364153] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] pt-[24px] px-[24px] relative size-full">
            <div className="content-stretch flex h-[51.975px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <BackgroundImage additionalClassNames="h-[51.975px] w-[94.438px]">
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
              </BackgroundImage>
              <div className="relative rounded-[12px] shrink-0 size-[36px]" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
                  <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <Icon5VectorBackgroundImage additionalClassNames="bottom-1/2 top-1/2" />
                    <Icon5VectorBackgroundImage additionalClassNames="bottom-3/4 top-1/4" />
                    <Icon5VectorBackgroundImage additionalClassNames="bottom-1/4 top-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[472.825_0_0] min-h-px min-w-px relative w-[256px]" data-name="Navigation">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
              <div className="bg-gradient-to-r from-[#fc549c] h-[48px] relative rounded-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#fed571] via-[#ff5f1a] via-[52.406%] w-full" data-name="Link">
                <BackgroundImage2>
                  <IconBackgroundImage>
                    <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconBackgroundImage>
                  <BackgroundImage additionalClassNames="h-[24px] w-[85.075px]">
                    <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-white top-[-0.4px] whitespace-nowrap">Dashboard</p>
                  </BackgroundImage>
                </BackgroundImage2>
              </div>
              <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
                <BackgroundImage2>
                  <IconBackgroundImage>
                    <path d={svgPaths.p20f4ecf0} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M10 18.3333V10" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2eca8c80} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M6.25 3.55833L13.75 7.85" id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconBackgroundImage>
                  <AdminLayoutBackgroundImageAndText text="Products" additionalClassNames="w-[70.537px]" />
                </BackgroundImage2>
              </div>
              <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
                <BackgroundImage2>
                  <IconBackgroundImage>
                    <path d={svgPaths.p39961300} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M2.5 5H17.5" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2f53ac80} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconBackgroundImage>
                  <AdminLayoutBackgroundImageAndText text="Orders" additionalClassNames="w-[53.963px]" />
                </BackgroundImage2>
              </div>
              <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
                <BackgroundImage2>
                  <IconBackgroundImage>
                    <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pae3c380} id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconBackgroundImage>
                  <AdminLayoutBackgroundImageAndText text="Users" additionalClassNames="w-[43.075px]" />
                </BackgroundImage2>
              </div>
              <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Link">
                <BackgroundImage2>
                  <IconBackgroundImage>
                    <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconBackgroundImage>
                  <AdminLayoutBackgroundImageAndText text="Inventory" additionalClassNames="w-[71.825px]" />
                </BackgroundImage2>
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
                  <ContainerBackgroundImage1 additionalClassNames="flex-[148_0_0] h-[35.987px]">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[14px] text-white top-[-0.2px] whitespace-nowrap">Admin User</p>
                    </div>
                    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
                      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#99a1af] text-[12px]">Administrator</p>
                    </div>
                  </ContainerBackgroundImage1>
                </div>
              </div>
            </div>
            <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
              <BackgroundImage2>
                <IconBackgroundImage>
                  <path d={svgPaths.p38966ca0} id="Vector" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p14ca9100} id="Vector_2" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M17.5 10H7.5" id="Vector_3" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </IconBackgroundImage>
                <BackgroundImage additionalClassNames="h-[20px] w-[48.7px]">
                  <p className="-translate-x-1/2 absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[24.5px] text-[#ff6467] text-[14px] text-center top-[-0.2px] whitespace-nowrap">Logout</p>
                </BackgroundImage>
              </BackgroundImage2>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex h-[84px] items-center justify-between left-[256px] pb-[0.8px] px-[32px] top-[-2px] w-[1256.8px]" data-name="AdminLayout">
        <div aria-hidden="true" className="absolute border-b-[0.8px] border-black border-solid inset-0 pointer-events-none" />
        <div className="h-[52px] relative shrink-0 w-[313.5px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
              <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#2d2d2d] text-[20px] top-[0.8px] whitespace-nowrap">Dashboard</p>
            </div>
            <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">{`Welcome back! Here's what's happening today.`}</p>
            </div>
          </div>
        </div>
        <div className="h-[35.987px] relative shrink-0 w-[76.763px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
            <ContainerBackgroundImage1 additionalClassNames="flex-[1_0_0] h-[35.987px]">
              <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="-translate-x-full absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-[77.24px] text-[#2d2d2d] text-[14px] text-right top-[-0.2px] whitespace-nowrap">Admin User</p>
              </div>
              <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-right whitespace-nowrap">Administrator</p>
              </div>
            </ContainerBackgroundImage1>
          </div>
        </div>
      </div>
    </div>
  );
}