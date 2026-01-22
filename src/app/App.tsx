import { useState, useCallback, useMemo } from "react";
import svgPaths from "@/imports/svg-jnkl0hhghz";
import imgImage1 from "@/assets/image.png";
import imgStar1 from "@/assets/loupe.png";
import imgStar2 from "@/assets/stars.png";

// Function to get color based on score
function getScoreColor(score: number): string {
  if (score >= 85) return "#87BE07"; // Green
  if (score >= 76) return "#D208D9"; // Pink
  if (score >= 60) return "#040260"; // Dark Blue
  if (score >= 50) return "#951B7D"; // Purple
  if (score >= 30) return "#4E4E4E"; // Gray
  return "#D3D3D3"; // Light Gray
}

interface ScoreData {
  testId: string;
  testDate: string;
  testTime: string;
  name: string;
  testTakerId: string;
  registrationId: string;
  overallScore: number;
  listening: number;
  reading: number;
  speaking: number;
  writing: number;
  testCenterCountry: string;
  testDate2: string;
  testCenterId: string;
  validUntil: string;
  testTakerLocation: string;
  dateOfBirth: string;
  countryOfCitizenship: string;
  countryOfResidence: string;
  gender: string;
  scoreReportCode: string;
}

export default function App() {
  const [scoreData, setScoreData] = useState<ScoreData>({
    testId: "1D517526683",
    testDate: "Tuesday, October 14, 2025",
    testTime: "12:30 PM IST",
    name: "ANISHA SINGH",
    testTakerId: "PTE004278643",
    registrationId: "517526683",
    overallScore: 50,
    listening: 46,
    reading: 46,
    speaking: 46,
    writing: 46,
    testCenterCountry: "India",
    testDate2: "14 Oct 2025",
    testCenterId: "50496",
    validUntil: "14 Oct 2027",
    testTakerLocation: "Pearson Professional Centers-Hyderabad",
    dateOfBirth: "27 Jan 1990",
    countryOfCitizenship: "India",
    countryOfResidence: "India",
    gender: "Female",
    scoreReportCode: "414973F141",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(imgImage1);

  const handleInputChange = useCallback(
    (field: keyof ScoreData, value: string | number) => {
      setScoreData((prev) => {
        const newData = {
          ...prev,
          [field]: value,
        };

        // Auto-calculate overall score when any skill score changes
        if (
          field === "listening" ||
          field === "reading" ||
          field === "speaking" ||
          field === "writing"
        ) {
          const listening =
            field === "listening" ? Number(value) : prev.listening;
          const reading = field === "reading" ? Number(value) : prev.reading;
          const speaking = field === "speaking" ? Number(value) : prev.speaking;
          const writing = field === "writing" ? Number(value) : prev.writing;

          newData.overallScore = Math.round(
            (listening + reading + speaking + writing) / 4,
          );
        }

        return newData;
      });
    },
    [],
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const EditableText = useMemo(
    () =>
      ({
        value,
        field,
        className,
        type = "text",
      }: {
        value: string | number;
        field: keyof ScoreData;
        className: string;
        type?: "text" | "number";
      }) => {
        if (!isEditing) {
          return <span className={className}>{value}</span>;
        }

        if (type === "number") {
          return (
            <input
              type="number"
              value={value}
              onChange={(e) => handleInputChange(field, Number(e.target.value))}
              className={`${className} bg-white border border-blue-500 rounded px-1 w-16`}
              min="0"
              max="90"
            />
          );
        }

        return (
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className={`${className} bg-white border border-blue-500 rounded px-1`}
          />
        );
      },
    [isEditing, handleInputChange],
  );

  return (
    <div
      className="bg-[#e6e6e6] relative size-full overflow-auto"
      data-name="MacBook Air - 1"
    >
      <Frame />
      <Frame2 isEditing={isEditing} setIsEditing={setIsEditing} />
      <div className="absolute bg-[#e6e6e6] h-[2693px] left-1/2 translate-x-[-50%] rounded-[21px] top-[145px] w-[1280px]">
        <div className="absolute left-[61px] size-[55px] top-[35px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 55 55"
          >
            <circle
              cx="27.5"
              cy="27.5"
              id="Ellipse 1"
              r="26"
              stroke="var(--stroke-0, #270075)"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="absolute flex h-0 items-center justify-center left-[76.99px] top-[63.5px] w-[24.021px]">
          <div className="flex-none rotate-[180deg]">
            <div className="h-0 relative w-[24.021px]">
              <div className="absolute inset-[-7.36px_-4.16%_-7.36px_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 25.0208 14.7279"
                >
                  <path
                    d={svgPaths.p18cb1700}
                    fill="var(--stroke-0, black)"
                    id="Arrow 1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame3
          scoreData={scoreData}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
          EditableText={EditableText}
        />
        <ShareButton />
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[61px] not-italic text-[20px] text-black top-[207px]">
          Click the button above to search for an institution to share your
          score
        </p>
        <Frame4
          scoreData={scoreData}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
          EditableText={EditableText}
          profileImage={profileImage}
          handleImageChange={handleImageChange}
        />
        <Frame16 />
        <p className="absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] leading-[normal] left-[656px] not-italic text-[#5b28c0] text-[20px] text-center top-[2588px] translate-x-[-50%] w-[712px]">
          Privacy Policy | Cookies | Contact Us
        </p>
        <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[28px] leading-[normal] left-[656px] not-italic text-[#1e1e1e] text-[20px] text-center top-[2633px] translate-x-[-50%] w-[712px]">
          Copyright © 1996 - 2026 Pearson. All rights reserved.
        </p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#270075] h-[72px] left-0 overflow-clip top-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[47px] left-[19px] right-[19px] top-[16px] flex items-center justify-between">
      <LogoFullWhite />
      <div className="flex items-center gap-6">
        <div className="cursor-pointer text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center gap-3 bg-white/10 rounded-full py-1.5 px-3 cursor-pointer hover:bg-white/20 transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="size-8 rounded-full bg-[#1e1e1e] flex items-center justify-center text-white text-xs font-bold border border-white/20">
            AS
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoFullWhite() {
  return (
    <div className="h-[24px] w-[120px]" data-name="logo-full-white 1">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 120 24"
      >
        <g clipPath="url(#clip0_1_160)" id="logo-full-white 1">
          <path
            d={svgPaths.p2cf622c0}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p3fd32728}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p3352b800}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p21d6a7f0}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p3561c600}
            fill="var(--fill-0, white)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p248e8f00}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p2ab5ef00}
            fill="var(--fill-0, white)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p1b11b000}
            fill="var(--fill-0, white)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p922af00}
            fill="var(--fill-0, white)"
            id="Vector_9"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_160">
            <rect fill="white" height="24" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2({
  isEditing,
  setIsEditing,
}: {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}) {
  return (
    <div className="absolute bg-[#5b28c0] h-[72px] left-0 overflow-clip top-[72px] w-full">
      <div className="absolute h-[51px] leading-[normal] left-1/2 not-italic overflow-clip text-[24px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[762px]">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium left-[129px] text-[#d3d3d3] top-[11px]">
          myPTE
        </p>
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold left-[255px] text-white top-[11px]">
          My Activity
        </p>
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium left-[430px] text-[#d3d3d3] top-[11px]">
          Smart Prep
        </p>
        <p
          onClick={() => setIsEditing(!isEditing)}
          className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium left-[605px] text-[#d3d3d3] top-[11px] cursor-pointer hover:text-white transition-colors"
        >
          Help
        </p>
      </div>
      <div className="absolute h-[1488px] left-0 top-[72px] w-[1280px]" />
    </div>
  );
}

function Frame3({ scoreData, EditableText }: any) {
  return (
    <div className="absolute h-[84px] leading-[normal] left-[calc(50%-176px)] not-italic overflow-clip text-black top-[25px] translate-x-[-50%] w-[660px]">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal left-[7px] text-[24px] top-[2px]">
        PTE Academic .{" "}
        <EditableText value={scoreData.testId} field="testId" className="" />
      </p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium left-[7px] text-[32px] top-[36px]">
        <EditableText
          value={scoreData.testDate}
          field="testDate"
          className=""
        />{" "}
        -{" "}
        <EditableText
          value={scoreData.testTime}
          field="testTime"
          className=""
        />
      </p>
    </div>
  );
}

function ShareButton() {
  return (
    <div
      className="absolute bg-[#5b28c0] h-[62px] left-[61px] overflow-clip rounded-[56px] top-[127px] w-[713px]"
      data-name="share button"
    >
      <ShareIcon />
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[287px] not-italic text-[32px] text-white top-[11px]">
        Share results
      </p>
    </div>
  );
}

function ShareIcon() {
  return (
    <div
      className="absolute h-[40.549px] left-[220px] top-[11px] w-[41.36px]"
      data-name="share icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 41.36 40.549"
      >
        <g id="share icon">
          <g id="Frame 9">
            <rect
              height="37.549"
              rx="5.5"
              stroke="var(--stroke-0, white)"
              strokeWidth="3"
              width="38.36"
              x="1.5"
              y="1.5"
            />
          </g>
          <path
            d={svgPaths.p2dffb240}
            fill="var(--stroke-0, white)"
            id="Arrow 2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame4({
  scoreData,
  isEditing,
  handleInputChange,
  EditableText,
  profileImage,
  handleImageChange,
}: any) {
  return (
    <div className="absolute bg-[#f9f8f8] h-[1976px] left-[67px] overflow-clip rounded-bl-[9px] rounded-br-[9px] rounded-tl-[16px] rounded-tr-[16px] top-[271px] w-[1162px]">
      <Group1
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
        profileImage={profileImage}
        handleImageChange={handleImageChange}
      />
      <Group5
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
      <Heading
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
      <ShareButton1 />
    </div>
  );
}

function Heading({ scoreData, EditableText }: any) {
  return (
    <div
      className="absolute bg-[#2bb68c] h-[144px] leading-[normal] left-[100px] not-italic overflow-clip text-black top-[32px] w-[961px]"
      data-name="heading"
    >
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium left-[31px] text-[48px] top-[19px]">
        PTE Academic | Score Report
      </p>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal left-[35px] text-[24px] top-[85px]">
        Score Report Code:{" "}
        <EditableText
          value={scoreData.scoreReportCode}
          field="scoreReportCode"
          className=""
        />
      </p>
    </div>
  );
}

function Group1({
  scoreData,
  isEditing,
  handleInputChange,
  EditableText,
  profileImage,
  handleImageChange,
}: any) {
  return (
    <div className="absolute contents left-[100px] top-[208px]">
      <MoreInfo
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
        profileImage={profileImage}
        handleImageChange={handleImageChange}
      />
      <div
        className="absolute flex h-[2.153px] items-center justify-center left-[100px] top-[273.16px] w-[961px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.128deg] skew-x-[0.128deg]">
          <div className="h-0 relative w-[961.002px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 961.002 1"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, #D3D3D3)"
                  x2="961.002"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-[2.153px] items-center justify-center left-[100px] top-[613.01px] w-[961px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.128deg] skew-x-[0.128deg]">
          <div className="h-0 relative w-[961.002px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 961.002 1"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, #D3D3D3)"
                  x2="961.002"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-[2.153px] items-center justify-center left-[100px] top-[856.44px] w-[961px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.128deg] skew-x-[0.128deg]">
          <div className="h-0 relative w-[961.002px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 961.002 1"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, #D3D3D3)"
                  x2="961.002"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-[2.153px] items-center justify-center left-[100px] top-[910.22px] w-[961px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.128deg] skew-x-[0.128deg]">
          <div className="h-0 relative w-[961.002px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 961.002 1"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, #D3D3D3)"
                  x2="961.002"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-[241px] items-center justify-center left-[580px] top-[615px] w-0"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[241px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 241 1"
              >
                <line
                  id="Line 3"
                  stroke="var(--stroke-0, #D3D3D3)"
                  x2="241"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreInfo({
  scoreData,
  isEditing,
  handleInputChange,
  EditableText,
  profileImage,
  handleImageChange,
}: any) {
  return (
    <div
      className="absolute bg-white border border-[#d3d3d3] border-solid h-[906px] left-[100px] overflow-clip top-[208px] w-[961px]"
      data-name="more info"
    >
      <Group3 />
      <ScoreOverviewSection
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
        profileImage={profileImage}
        handleImageChange={handleImageChange}
      />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[18px] not-italic text-[#777] text-[24px] top-[659px]">
        Communicative Skills
      </p>
      <Frame8
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
    </div>
  );
}

function ScoreOverviewSection({
  scoreData,
  isEditing,
  handleInputChange,
  EditableText,
  profileImage,
  handleImageChange,
}: any) {
  return (
    <div
      className="absolute contents left-[18px] top-[13px]"
      data-name="score overview section"
    >
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[19px] not-italic text-[#777] text-[24px] top-[18px]">
        Scores Overview
      </p>
      <Group />
      <Frame5
        profileImage={profileImage}
        handleImageChange={handleImageChange}
      />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[234px] not-italic text-[36px] text-black top-[118px]">
        <EditableText value={scoreData.name} field="name" className="" />
      </p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[234px] not-italic text-[0px] text-[20px] text-black top-[179px]">
        <span className="leading-[normal]">{`Test Taker: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          <EditableText
            value={scoreData.testTakerId}
            field="testTakerId"
            className=""
          />
        </span>
      </p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[234px] not-italic text-[0px] text-[20px] text-black top-[225px]">
        <span className="leading-[normal]">Registration ID</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          <EditableText
            value={scoreData.registrationId}
            field="registrationId"
            className=""
          />
        </span>
      </p>
      <Group2
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[0] left-[85px] not-italic text-[0px] text-[20px] text-black top-[472px] w-[313px]">
        <span className="leading-[normal]">{`Test `}</span>
        <span className="leading-[normal]">Center Country</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          <EditableText
            value={scoreData.testCenterCountry}
            field="testCenterCountry"
            className=""
          />
        </span>
      </p>
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[0] left-[558px] not-italic text-[0px] text-[20px] text-black top-[472px] w-[313px]">
        <span className="leading-[normal]">{`Test `}</span>
        <span className="leading-[normal]">Date</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          <EditableText
            value={scoreData.testDate2}
            field="testDate2"
            className=""
          />
        </span>
      </p>
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[0] left-[85px] not-italic text-[0px] text-[20px] text-black top-[518px] w-[311px]">
        <span className="leading-[normal]">{`Test `}</span>
        <span className="leading-[normal]">Center ID</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          <EditableText
            value={scoreData.testCenterId}
            field="testCenterId"
            className=""
          />
        </span>
      </p>
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[0] left-[558px] not-italic text-[0px] text-[20px] text-black top-[518px] w-[311px]">
        <span className="leading-[normal]">Valid Until</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          <EditableText
            value={scoreData.validUntil}
            field="validUntil"
            className=""
          />
        </span>
      </p>
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[47px] leading-[0] left-[85px] not-italic text-[0px] text-[20px] text-black top-[564px] w-[313px]">
        <span className="leading-[normal]">{`Test Taker: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          <EditableText
            value={scoreData.testTakerLocation}
            field="testTakerLocation"
            className=""
          />
        </span>
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[912px] top-[14px]">
      <div className="absolute left-[912px] size-[33px] top-[14px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 33 33"
        >
          <circle
            cx="16.5"
            cy="16.5"
            id="Ellipse 2"
            r="15.5"
            stroke="var(--stroke-0, #D3D3D3)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[25.184px] leading-[normal] left-[927px] not-italic text-[#d3d3d3] text-[16px] top-[21px] w-[5.211px]">
        i
      </p>
    </div>
  );
}

function Frame5({ profileImage, handleImageChange }: any) {
  return (
    <div className="absolute h-[203px] left-[20px] overflow-clip top-[113px] w-[194px]">
      <div
        className="absolute left-[-4px] size-[203px] top-0 cursor-pointer group"
        data-name="image 1"
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
        />
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={profileImage}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <p className="text-white text-sm">Click to change</p>
        </div>
      </div>
    </div>
  );
}

function Group2({
  scoreData,
  isEditing,
  handleInputChange,
  EditableText,
}: any) {
  return (
    <div className="absolute contents left-[715px] top-[114px]">
      <Frame7
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
      <Frame6 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#0e5d45] h-[39px] left-[715px] overflow-clip rounded-tl-[8px] rounded-tr-[8px] top-[114px] w-[152px]">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[14px] not-italic text-[20px] text-white top-[8px]">
        Overall Score
      </p>
    </div>
  );
}

function Frame7({ scoreData, EditableText }: any) {
  const overallColor = getScoreColor(scoreData.overallScore);

  return (
    <div
      className="absolute h-[115px] left-[715px] overflow-clip rounded-bl-[100px] rounded-br-[100px] top-[153px] w-[152px] flex items-center justify-center pt-2"
      style={{ backgroundColor: overallColor }}
    >
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[64px] text-white">
        <EditableText
          value={scoreData.overallScore}
          field="overallScore"
          className=""
          type="number"
        />
      </p>
    </div>
  );
}

function Frame8({
  scoreData,
  isEditing,
  handleInputChange,
  EditableText,
}: any) {
  return (
    <div className="absolute h-[156px] left-1/2 overflow-clip top-[713px] translate-x-[-50%] w-[867px]">
      <Listening
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
      <Reading
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
      <Speaking
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
      <Writing
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
    </div>
  );
}

function Listening({ scoreData, EditableText }: any) {
  const color = getScoreColor(scoreData.listening);

  return (
    <div
      className="absolute flex flex-col items-center left-[145px] top-[14px]"
      data-name="listening"
    >
      <div className="relative size-[116px] flex items-center justify-center">
        <div
          className="absolute inset-[-3.02%]"
          style={{ "--stroke-0": color } as React.CSSProperties}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 123 123"
          >
            <circle
              cx="61.5"
              cy="61.5"
              id="Ellipse 3"
              r="58"
              stroke="var(--stroke-0)"
              strokeWidth="7"
            />
          </svg>
        </div>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[32px] text-black pt-2 z-10 relative">
          <EditableText
            value={scoreData.listening}
            field="listening"
            className=""
            type="number"
          />
        </p>
      </div>
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[14px] text-black mt-2">
        Listening
      </p>
    </div>
  );
}

function Reading({ scoreData, EditableText }: any) {
  const color = getScoreColor(scoreData.reading);

  return (
    <div
      className="absolute flex flex-col items-center left-[299px] top-[14px]"
      data-name="reading"
    >
      <div className="relative size-[116px] flex items-center justify-center">
        <svg
          className="block size-full absolute inset-0"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 116 116"
          style={{ "--stroke-0": color } as React.CSSProperties}
        >
          <circle
            cx="58"
            cy="58"
            id="Ellipse 3"
            r="54.5"
            stroke="var(--stroke-0)"
            strokeWidth="7"
          />
        </svg>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[32px] text-black pt-2 z-10 relative">
          <EditableText
            value={scoreData.reading}
            field="reading"
            className=""
            type="number"
          />
        </p>
      </div>
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[14px] text-black mt-2">
        Reading
      </p>
    </div>
  );
}

function Speaking({ scoreData, EditableText }: any) {
  const color = getScoreColor(scoreData.speaking);

  return (
    <div
      className="absolute flex flex-col items-center left-[453px] top-[14px]"
      data-name="speaking"
    >
      <div className="relative size-[116px] flex items-center justify-center">
        <svg
          className="block size-full absolute inset-0"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 116 116"
          style={{ "--stroke-0": color } as React.CSSProperties}
        >
          <circle
            cx="58"
            cy="58"
            id="Ellipse 3"
            r="54.5"
            stroke="var(--stroke-0)"
            strokeWidth="7"
          />
        </svg>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[32px] text-black pt-2 z-10 relative">
          <EditableText
            value={scoreData.speaking}
            field="speaking"
            className=""
            type="number"
          />
        </p>
      </div>
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[14px] text-black mt-2">
        Speaking
      </p>
    </div>
  );
}

function Writing({ scoreData, EditableText }: any) {
  const color = getScoreColor(scoreData.writing);

  return (
    <div
      className="absolute flex flex-col items-center left-[607px] top-[14px]"
      data-name="writing"
    >
      <div className="relative size-[116px] flex items-center justify-center">
        <svg
          className="block size-full absolute inset-0"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 116 116"
          style={{ "--stroke-0": color } as React.CSSProperties}
        >
          <circle
            cx="58"
            cy="58"
            id="Ellipse 3"
            r="54.5"
            stroke="var(--stroke-0)"
            strokeWidth="7"
          />
        </svg>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[32px] text-black pt-2 z-10 relative">
          <EditableText
            value={scoreData.writing}
            field="writing"
            className=""
            type="number"
          />
        </p>
      </div>
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[14px] text-black mt-2">
        Writing
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[911px] top-[656px]">
      <div className="absolute left-[912px] size-[33px] top-[657px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 33 33"
        >
          <circle
            cx="16.5"
            cy="16.5"
            id="Ellipse 2"
            r="15.5"
            stroke="var(--stroke-0, #D3D3D3)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[25.184px] leading-[normal] left-[927px] not-italic text-[#d3d3d3] text-[16px] top-[664px] w-[5.211px]">
        i
      </p>
    </div>
  );
}

function Group5({
  scoreData,
  isEditing,
  handleInputChange,
  EditableText,
}: any) {
  return (
    <div className="absolute contents left-[100px] top-[1164px]">
      <MoreInfo1
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
      <div
        className="absolute flex h-[2.153px] items-center justify-center left-[100px] top-[1229.16px] w-[961px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.128deg] skew-x-[0.128deg]">
          <div className="h-0 relative w-[961.002px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 961.002 1"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, #D3D3D3)"
                  x2="961.002"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-[2.153px] items-center justify-center left-[100px] top-[1512.44px] w-[961px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.128deg] skew-x-[0.128deg]">
          <div className="h-0 relative w-[961.002px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 961.002 1"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, #D3D3D3)"
                  x2="961.002"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-[2.153px] items-center justify-center left-[100px] top-[1566.22px] w-[961px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[0.128deg] skew-x-[0.128deg]">
          <div className="h-0 relative w-[961.002px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 961.002 1"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, #D3D3D3)"
                  x2="961.002"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreInfo1({
  scoreData,
  isEditing,
  handleInputChange,
  EditableText,
}: any) {
  return (
    <div
      className="absolute bg-white border border-[#d3d3d3] border-solid h-[666px] left-[100px] overflow-clip top-[1164px] w-[961px]"
      data-name="more info"
    >
      <ScoreOverviewSection1
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[18px] not-italic text-[#777] text-[24px] top-[359px]">
        Candidate Information
      </p>
      <Frame9 />
      <Frame10
        scoreData={scoreData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        EditableText={EditableText}
      />
      <Group4 scoreData={scoreData} />
      <div
        className="absolute flex h-[148px] items-center justify-center left-[634px] top-[119px] w-0"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[148px]">
            <div className="absolute inset-[-7px_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 148 7"
              >
                <line
                  id="Line 6"
                  opacity="0.55"
                  stroke="var(--stroke-0, #4A4A4A)"
                  strokeWidth="7"
                  x2="148"
                  y1="3.5"
                  y2="3.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[631px] not-italic text-[0px] text-[16px] text-black text-right top-[104px] translate-x-[-100%]">
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal]">
          Overall
        </span>
        <span className="leading-[normal]"> </span>
        <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal]">
          <EditableText
            value={scoreData.overallScore}
            field="overallScore"
            className=""
            type="number"
          />
        </span>
      </p>
    </div>
  );
}

function ScoreOverviewSection1({ scoreData, EditableText }: any) {
  return (
    <div
      className="absolute contents font-['Inter:Medium',sans-serif] font-medium left-[18px] not-italic text-[24px] top-[17px]"
      data-name="score overview section"
    >
      <p className="absolute css-ew64yg leading-[normal] left-[19px] text-[#777] top-[18px]">
        Skills Breakdown
      </p>
      <p className="absolute css-ew64yg leading-[normal] left-[85px] text-[20px] text-black top-[445px]">
        <span className="leading-[normal]">Date of Birth</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          <EditableText
            value={scoreData.dateOfBirth}
            field="dateOfBirth"
            className=""
          />
        </span>
      </p>
      <p className="absolute css-ew64yg leading-[normal] left-[85px] text-[20px] text-black top-[494px]">
        <span className="leading-[normal]">Country of Citizenship</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          <EditableText
            value={scoreData.countryOfCitizenship}
            field="countryOfCitizenship"
            className=""
          />
        </span>
      </p>
      <p className="absolute css-ew64yg leading-[normal] left-[85px] text-[20px] text-black top-[543px]">
        <span className="leading-[normal]">Country of Residence</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          <EditableText
            value={scoreData.countryOfResidence}
            field="countryOfResidence"
            className=""
          />
        </span>
      </p>
      <p className="absolute css-ew64yg leading-[normal] left-[85px] text-[20px] text-black top-[592px]">
        <span className="leading-[normal]">Gender</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          <EditableText value={scoreData.gender} field="gender" className="" />
        </span>
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Light',sans-serif] font-light gap-[14px] items-start leading-[normal] not-italic right-[565px] text-[20px] text-black text-right top-[134px] w-[87px]">
      <p className="css-4hzbpn h-[24px] relative shrink-0 w-[85px]">
        Listening
      </p>
      <p className="css-4hzbpn relative shrink-0 w-[85px]">Reading</p>
      <p className="css-4hzbpn min-w-full relative shrink-0 w-[min-content]">
        Speaking
      </p>
      <p className="css-4hzbpn relative shrink-0 w-[85px]">Writing</p>
    </div>
  );
}

function Frame10({ scoreData, EditableText }: any) {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[14px] items-start leading-[normal] not-italic right-[514px] text-[20px] text-black text-right top-[134px] w-[27px]">
      <p className="css-ew64yg relative shrink-0">
        <EditableText
          value={scoreData.listening}
          field="listening"
          className=""
          type="number"
        />
      </p>
      <p className="css-ew64yg relative shrink-0">
        <EditableText
          value={scoreData.reading}
          field="reading"
          className=""
          type="number"
        />
      </p>
      <p className="css-ew64yg relative shrink-0">
        <EditableText
          value={scoreData.speaking}
          field="speaking"
          className=""
          type="number"
        />
      </p>
      <p className="css-ew64yg relative shrink-0">
        <EditableText
          value={scoreData.writing}
          field="writing"
          className=""
          type="number"
        />
      </p>
    </div>
  );
}

function Group4({ scoreData }: any) {
  // Calculate bar widths based on scores (max width 220px for score of 90)
  const maxWidth = 220;
  const listeningWidth = (scoreData.listening / 90) * maxWidth;
  const readingWidth = (scoreData.reading / 90) * maxWidth;
  const speakingWidth = (scoreData.speaking / 90) * maxWidth;
  const writingWidth = (scoreData.writing / 90) * maxWidth;

  const listeningColor = getScoreColor(scoreData.listening);
  const readingColor = getScoreColor(scoreData.reading);
  const speakingColor = getScoreColor(scoreData.speaking);
  const writingColor = getScoreColor(scoreData.writing);

  return (
    <div className="absolute contents left-[469px] top-[134px]">
      <div
        className="absolute h-[27px] left-[470px] top-[135px] transition-all duration-300"
        style={{
          width: `${listeningWidth}px`,
          backgroundColor: listeningColor,
        }}
      />
      <div
        className="absolute h-[27px] left-[470px] top-[171px] transition-all duration-300"
        style={{
          width: `${readingWidth}px`,
          backgroundColor: readingColor,
        }}
      />
      <div
        className="absolute h-[27px] left-[470px] top-[207px] transition-all duration-300"
        style={{
          width: `${speakingWidth}px`,
          backgroundColor: speakingColor,
        }}
      />
      <div
        className="absolute h-[27px] left-[470px] top-[243px] transition-all duration-300"
        style={{
          width: `${writingWidth}px`,
          backgroundColor: writingColor,
        }}
      />
    </div>
  );
}

function ShareButton1() {
  return (
    <div
      className="absolute bg-[#5b28c0] h-[62px] left-[409px] overflow-clip rounded-[56px] top-[1882px] w-[323px]"
      data-name="share button"
    >
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[65px] not-italic text-[32px] text-white top-[11px]">
        View as PDF
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#f9f8f8] border border-[#d3d3d3] border-solid h-[234px] left-[67px] overflow-clip rounded-[16px] top-[2275px] w-[1162px]">
      <Frame15 />
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal h-[77px] leading-[normal] left-[141px] not-italic text-[#777] text-[32px] top-[52px] w-[998px]">
        Your Skills Profile provides more information about your performance in
        the test
      </p>
      <ShareButton2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[136px] left-[21px] overflow-clip top-[34px] w-[120px]">
      <div
        className="absolute left-[25px] size-[69px] top-[33px]"
        data-name="star 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgStar1}
        />
      </div>
      <div
        className="absolute left-[31px] size-[58px] top-[4px]"
        data-name="star 2"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgStar2}
        />
      </div>
    </div>
  );
}

function ShareButton2() {
  return (
    <div
      className="absolute bg-[#5b28c0] h-[62px] left-[375px] overflow-clip rounded-[56px] top-[150px] w-[409px]"
      data-name="share button"
    >
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[65px] not-italic text-[32px] text-white top-[11px]">
        View Skills Profile
      </p>
    </div>
  );
}
