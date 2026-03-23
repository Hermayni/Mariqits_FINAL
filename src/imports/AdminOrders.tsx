import clsx from "clsx";
import svgPaths from "./svg-mw10pdu8sf";
import img03 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div className={clsx("h-[35.987px] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[36px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">{children}</div>
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
type ParagraphBackgroundImageAndText3Props = {
  text: string;
};

function ParagraphBackgroundImageAndText3({ text }: ParagraphBackgroundImageAndText3Props) {
  return (
    <div className="content-stretch flex h-[31.988px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#101828] text-[24px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText2Props = {
  text: string;
};

function ParagraphBackgroundImageAndText2({ text }: ParagraphBackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] tracking-[0.3px] uppercase">{text}</p>
    </div>
  );
}

function ButtonBackgroundImage() {
  return (
    <BackgroundImage4>
      <div className="h-[20px] overflow-clip relative shrink-0 w-full">
        <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3342 13.3323">
              <path d={svgPaths.pcb0000} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
              <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
    </BackgroundImage4>
  );
}
type TableCellBackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellBackgroundImageAndText3({ text, additionalClassNames = "" }: TableCellBackgroundImageAndText3Props) {
  return (
    <div className={clsx("absolute left-[736.15px] top-0 w-[136.325px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[24.4px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TableCellBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellBackgroundImageAndText2({ text, additionalClassNames = "" }: TableCellBackgroundImageAndText2Props) {
  return (
    <div className={clsx("absolute left-[610.61px] top-0 w-[125.537px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-[24px] text-[#101828] text-[14px] top-[24.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TableCellBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellBackgroundImageAndText1({ text, additionalClassNames = "" }: TableCellBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute top-0", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[24px] text-[#4a5565] text-[14px] top-[24.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
};

function ParagraphBackgroundImageAndText1({ text }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#101828] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TableCellBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellBackgroundImageAndText({ text, additionalClassNames = "" }: TableCellBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute left-0 top-0 w-[147.713px]", additionalClassNames)}>
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-[24px] text-[#101828] text-[14px] top-[24.2px] whitespace-nowrap">{text}</p>
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
type LabelBackgroundImageAndTextProps = {
  text: string;
};

function LabelBackgroundImageAndText({ text }: LabelBackgroundImageAndTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[-0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function AdminOrders() {
  return (
    <div className="bg-white relative size-full" data-name="Admin/Orders">
      <div className="absolute bg-[#fffbf0] content-stretch flex flex-col h-[730.4px] items-start left-0 top-0 w-[1528px]" data-name="Body">
        <div className="bg-[#f9fafb] h-[730.4px] relative shrink-0 w-full" data-name="AdminLayout">
          <div className="content-stretch flex items-start pl-[288px] pt-[116.8px] relative size-full">
            <div className="h-[569.563px] relative shrink-0 w-[1208px]" data-name="OrderManagement">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
                <div className="bg-white h-[119.2px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                  <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">
                    <div className="h-[69.6px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute content-stretch flex flex-col gap-[8px] h-[69.6px] items-start left-0 top-0 w-[571.2px]" data-name="Container">
                        <LabelBackgroundImageAndText text="Search Orders" />
                        <div className="h-[41.6px] relative shrink-0 w-full" data-name="Container">
                          <div className="absolute h-[41.6px] left-0 rounded-[12px] top-0 w-[571.2px]" data-name="Text Input">
                            <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[8px] relative rounded-[inherit] size-full">
                              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(45,45,45,0.5)] whitespace-nowrap">Search by Order ID or customer name...</p>
                            </div>
                            <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          </div>
                          <IconBackgroundImage additionalClassNames="absolute left-[12px] top-[10.8px]">
                            <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </IconBackgroundImage>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[8px] h-[69.6px] items-start left-[587.2px] top-0 w-[571.2px]" data-name="Container">
                        <LabelBackgroundImageAndText text="Filter by Status" />
                        <div className="h-[39.2px] relative rounded-[12px] shrink-0 w-full" data-name="Dropdown">
                          <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          <div className="absolute left-[-900px] size-0 top-[-169.6px]" data-name="Option" />
                          <div className="absolute left-[-900px] size-0 top-[-169.6px]" data-name="Option" />
                          <div className="absolute left-[-900px] size-0 top-[-169.6px]" data-name="Option" />
                          <div className="absolute left-[-900px] size-0 top-[-169.6px]" data-name="Option" />
                          <div className="absolute left-[-900px] size-0 top-[-169.6px]" data-name="Option" />
                          <div className="absolute left-[-900px] size-0 top-[-169.6px]" data-name="Option" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[316.788px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start p-[0.8px] relative size-full">
                      <div className="h-[315.188px] overflow-clip relative shrink-0 w-full" data-name="Table">
                        <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b-[0.8px] border-solid h-[40.388px] left-0 top-0 w-[1206.4px]" data-name="Table Header">
                          <div className="absolute h-[40.388px] left-0 top-0 w-[1206.4px]" data-name="Table Row">
                            <HeaderCellBackgroundImageAndText text="Order ID" additionalClassNames="left-0 w-[147.713px]" />
                            <HeaderCellBackgroundImageAndText text="Customer" additionalClassNames="left-[147.71px] w-[189.925px]" />
                            <HeaderCellBackgroundImageAndText text="Date" additionalClassNames="left-[337.64px] w-[151.5px]" />
                            <HeaderCellBackgroundImageAndText text="Items" additionalClassNames="left-[489.14px] w-[121.475px]" />
                            <HeaderCellBackgroundImageAndText text="Total" additionalClassNames="left-[610.61px] w-[125.537px]" />
                            <HeaderCellBackgroundImageAndText text="Payment" additionalClassNames="left-[736.15px] w-[136.325px]" />
                            <HeaderCellBackgroundImageAndText text="Status" additionalClassNames="left-[872.47px] w-[198.988px]" />
                            <div className="absolute content-stretch flex h-[40.388px] items-start left-[1071.46px] px-[24px] py-[12px] top-0 w-[134.938px]" data-name="Header Cell">
                              <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#4a5565] text-[12px] text-right tracking-[0.6px] uppercase">Actions</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute h-[274.8px] left-0 top-[40.39px] w-[1206.4px]" data-name="Table Body">
                          <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[68.8px] left-0 top-0 w-[1206.4px]" data-name="Table Row">
                            <TableCellBackgroundImageAndText text="ORD-001" additionalClassNames="h-[68.8px]" />
                            <div className="absolute h-[68.8px] left-[147.71px] top-0 w-[189.925px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex flex-col h-[35.987px] items-start left-[24px] top-[16.4px] w-[141.925px]" data-name="Container">
                                <ParagraphBackgroundImageAndText text="Maria Santos" />
                                <ParagraphBackgroundImageAndText1 text="+63 912 345 6789" />
                              </div>
                            </div>
                            <TableCellBackgroundImageAndText1 text="3/1/2026" additionalClassNames="h-[68.8px] left-[337.64px] w-[151.5px]" />
                            <TableCellBackgroundImageAndText1 text="3 items" additionalClassNames="h-[68.8px] left-[489.14px] w-[121.475px]" />
                            <TableCellBackgroundImageAndText2 text="₱3,347" additionalClassNames="h-[68.8px]" />
                            <TableCellBackgroundImageAndText3 text="E-Wallet" additionalClassNames="h-[68.8px]" />
                            <div className="absolute h-[68.8px] left-[872.47px] top-0 w-[198.988px]" data-name="Table Cell">
                              <div className="absolute bg-[#dcfce7] h-[24.8px] left-[24px] rounded-[26843500px] top-[22.4px] w-[108.8px]" data-name="Dropdown">
                                <div className="absolute left-[-1185.28px] size-0 top-[-323.59px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-323.59px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-323.59px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-323.59px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-323.59px]" data-name="Option" />
                              </div>
                            </div>
                            <div className="absolute h-[68.8px] left-[1071.46px] top-0 w-[134.938px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex h-[36px] items-center justify-end left-[24px] top-[16.4px] w-[86.938px]" data-name="Container">
                                <ButtonBackgroundImage />
                              </div>
                            </div>
                          </div>
                          <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[68.8px] w-[1206.4px]" data-name="Table Row">
                            <TableCellBackgroundImageAndText text="ORD-002" additionalClassNames="h-[68.8px]" />
                            <div className="absolute h-[68.8px] left-[147.71px] top-0 w-[189.925px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex flex-col h-[35.987px] items-start left-[24px] top-[16.4px] w-[141.925px]" data-name="Container">
                                <ParagraphBackgroundImageAndText text="Jessica Reyes" />
                                <ParagraphBackgroundImageAndText1 text="+63 923 456 7890" />
                              </div>
                            </div>
                            <TableCellBackgroundImageAndText1 text="3/10/2026" additionalClassNames="h-[68.8px] left-[337.64px] w-[151.5px]" />
                            <TableCellBackgroundImageAndText1 text="1 items" additionalClassNames="h-[68.8px] left-[489.14px] w-[121.475px]" />
                            <TableCellBackgroundImageAndText2 text="₱2,049" additionalClassNames="h-[68.8px]" />
                            <TableCellBackgroundImageAndText3 text="COD" additionalClassNames="h-[68.8px]" />
                            <div className="absolute h-[68.8px] left-[872.47px] top-0 w-[198.988px]" data-name="Table Cell">
                              <div className="absolute bg-[#dbeafe] h-[24.8px] left-[24px] rounded-[26843500px] top-[22.4px] w-[108.8px]" data-name="Dropdown">
                                <div className="absolute left-[-1185.28px] size-0 top-[-392.39px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-392.39px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-392.39px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-392.39px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-392.39px]" data-name="Option" />
                              </div>
                            </div>
                            <div className="absolute h-[68.8px] left-[1071.46px] top-0 w-[134.938px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex h-[36px] items-center justify-end left-[24px] top-[16.4px] w-[86.938px]" data-name="Container">
                                <ButtonBackgroundImage />
                              </div>
                            </div>
                          </div>
                          <div className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid h-[68.8px] left-0 top-[137.6px] w-[1206.4px]" data-name="Table Row">
                            <TableCellBackgroundImageAndText text="ORD-003" additionalClassNames="h-[68.8px]" />
                            <div className="absolute h-[68.8px] left-[147.71px] top-0 w-[189.925px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex flex-col h-[35.987px] items-start left-[24px] top-[16.4px] w-[141.925px]" data-name="Container">
                                <ParagraphBackgroundImageAndText text="Anna Cruz" />
                                <ParagraphBackgroundImageAndText1 text="+63 934 567 8901" />
                              </div>
                            </div>
                            <TableCellBackgroundImageAndText1 text="3/14/2026" additionalClassNames="h-[68.8px] left-[337.64px] w-[151.5px]" />
                            <TableCellBackgroundImageAndText1 text="2 items" additionalClassNames="h-[68.8px] left-[489.14px] w-[121.475px]" />
                            <TableCellBackgroundImageAndText2 text="₱4,148" additionalClassNames="h-[68.8px]" />
                            <TableCellBackgroundImageAndText3 text="E-Wallet" additionalClassNames="h-[68.8px]" />
                            <div className="absolute h-[68.8px] left-[872.47px] top-0 w-[198.988px]" data-name="Table Cell">
                              <div className="absolute bg-[#fef9c2] h-[24.8px] left-[24px] rounded-[26843500px] top-[22.4px] w-[108.8px]" data-name="Dropdown">
                                <div className="absolute left-[-1185.28px] size-0 top-[-461.19px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-461.19px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-461.19px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-461.19px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-461.19px]" data-name="Option" />
                              </div>
                            </div>
                            <div className="absolute h-[68.8px] left-[1071.46px] top-0 w-[134.938px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex h-[36px] items-center justify-end left-[24px] top-[16.4px] w-[86.938px]" data-name="Container">
                                <ButtonBackgroundImage />
                              </div>
                            </div>
                          </div>
                          <div className="absolute h-[68.4px] left-0 top-[206.4px] w-[1206.4px]" data-name="Table Row">
                            <TableCellBackgroundImageAndText text="ORD-004" additionalClassNames="h-[68.4px]" />
                            <div className="absolute h-[68.4px] left-[147.71px] top-0 w-[189.925px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex flex-col h-[35.987px] items-start left-[24px] top-[16.4px] w-[141.925px]" data-name="Container">
                                <ParagraphBackgroundImageAndText text="Sarah Garcia" />
                                <ParagraphBackgroundImageAndText1 text="+63 945 678 9012" />
                              </div>
                            </div>
                            <TableCellBackgroundImageAndText1 text="3/15/2026" additionalClassNames="h-[68.4px] left-[337.64px] w-[151.5px]" />
                            <TableCellBackgroundImageAndText1 text="1 items" additionalClassNames="h-[68.4px] left-[489.14px] w-[121.475px]" />
                            <TableCellBackgroundImageAndText2 text="₱1,949" additionalClassNames="h-[68.4px]" />
                            <TableCellBackgroundImageAndText3 text="COD" additionalClassNames="h-[68.4px]" />
                            <div className="absolute h-[68.4px] left-[872.47px] top-0 w-[198.988px]" data-name="Table Cell">
                              <div className="absolute bg-[#f3f4f6] h-[24.8px] left-[24px] rounded-[26843500px] top-[22.4px] w-[108.8px]" data-name="Dropdown">
                                <div className="absolute left-[-1185.28px] size-0 top-[-529.99px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-529.99px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-529.99px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-529.99px]" data-name="Option" />
                                <div className="absolute left-[-1185.28px] size-0 top-[-529.99px]" data-name="Option" />
                              </div>
                            </div>
                            <div className="absolute h-[68.4px] left-[1071.46px] top-0 w-[134.938px]" data-name="Table Cell">
                              <div className="absolute content-stretch flex h-[36px] items-center justify-end left-[24px] top-[16.4px] w-[86.938px]" data-name="Container">
                                <ButtonBackgroundImage />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
                </div>
                <div className="h-[85.575px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[85.575px] items-start left-0 pb-[0.8px] pt-[16.8px] px-[16.8px] rounded-[12px] top-0 w-[228.8px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <ParagraphBackgroundImageAndText2 text="Pending Orders" />
                    <ParagraphBackgroundImageAndText3 text="1" />
                  </div>
                  <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[85.575px] items-start left-[244.8px] pb-[0.8px] pt-[16.8px] px-[16.8px] rounded-[12px] top-0 w-[228.8px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <ParagraphBackgroundImageAndText2 text="Processing Orders" />
                    <ParagraphBackgroundImageAndText3 text="1" />
                  </div>
                  <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[85.575px] items-start left-[489.6px] pb-[0.8px] pt-[16.8px] px-[16.8px] rounded-[12px] top-0 w-[228.8px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <ParagraphBackgroundImageAndText2 text="Shipped Orders" />
                    <ParagraphBackgroundImageAndText3 text="1" />
                  </div>
                  <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[85.575px] items-start left-[734.4px] pb-[0.8px] pt-[16.8px] px-[16.8px] rounded-[12px] top-0 w-[228.8px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <ParagraphBackgroundImageAndText2 text="Delivered Orders" />
                    <ParagraphBackgroundImageAndText3 text="1" />
                  </div>
                  <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[85.575px] items-start left-[979.2px] pb-[0.8px] pt-[16.8px] px-[16.8px] rounded-[12px] top-0 w-[228.8px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                    <ParagraphBackgroundImageAndText2 text="Cancelled Orders" />
                    <ParagraphBackgroundImageAndText3 text="0" />
                  </div>
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
              <button className="bg-gradient-to-r cursor-pointer from-[#fc549c] h-[48px] relative rounded-[12px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#fed571] via-[#ff5f1a] via-[52.404%] w-full" data-name="Link">
                <BackgroundImage1>
                  <IconBackgroundImage additionalClassNames="relative shrink-0">
                    <path d={svgPaths.p39961300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M2.5 5H17.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2f53ac80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </IconBackgroundImage>
                  <BackgroundImage2 additionalClassNames="h-[24px] w-[53.963px]">
                    <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[16px] text-left text-white top-[-0.4px] whitespace-nowrap">Orders</p>
                  </BackgroundImage2>
                </BackgroundImage1>
              </button>
              <BackgroundImage additionalClassNames="h-[48px]">
                <IconBackgroundImage additionalClassNames="relative shrink-0">
                  <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.pae3c380} id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </IconBackgroundImage>
                <AdminLayoutBackgroundImageAndText text="Users" additionalClassNames="w-[43.075px]" />
              </BackgroundImage>
              <BackgroundImage additionalClassNames="h-[48px]">
                <IconBackgroundImage additionalClassNames="relative shrink-0">
                  <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </IconBackgroundImage>
                <AdminLayoutBackgroundImageAndText text="Inventory" additionalClassNames="w-[71.825px]" />
              </BackgroundImage>
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
                  <ContainerBackgroundImage additionalClassNames="flex-[148_0_0]">
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
        <div className="h-[52px] relative shrink-0 w-[232.3px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
            <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
              <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#2d2d2d] text-[20px] top-[0.8px] whitespace-nowrap">Orders</p>
            </div>
            <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.2px] whitespace-nowrap">Track and manage customer orders</p>
            </div>
          </div>
        </div>
        <div className="h-[35.987px] relative shrink-0 w-[76.763px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
            <ContainerBackgroundImage additionalClassNames="flex-[1_0_0]">
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
      <div className="absolute content-stretch flex h-[51.975px] items-center justify-between left-[24px] top-[24px] w-[208px]" data-name="Container">
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
        <BackgroundImage4>
          <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
            <Icon11VectorBackgroundImage additionalClassNames="bottom-1/2 top-1/2" />
            <Icon11VectorBackgroundImage additionalClassNames="bottom-3/4 top-1/4" />
            <Icon11VectorBackgroundImage additionalClassNames="bottom-1/4 top-3/4" />
          </div>
        </BackgroundImage4>
      </div>
    </div>
  );
}