import svgPaths from "./svg-jnkl0hhghz";
import imgImage1 from "../assets/image.png";
import imgStar1 from "../assets/loupe.png";
import imgStar2 from "../assets/stars.png";

function Frame3() {
  return (
    <div className="absolute h-[84px] leading-[normal] left-[calc(50%-176px)] not-italic overflow-clip text-black top-[25px] translate-x-[-50%] w-[660px]">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal left-[7px] text-[24px] top-[2px]">
        PTE Academic . 1D517526683
      </p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium left-[7px] text-[32px] top-[36px]">
        Tuesday, October 14, 2025 - 12:30 PM IST
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

function Frame5() {
  return (
    <div className="absolute h-[203px] left-[20px] overflow-clip top-[113px] w-[194px]">
      <div
        className="absolute left-[-4px] size-[203px] top-0"
        data-name="image 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage1}
        />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#951b7d] h-[115px] left-[715px] overflow-clip rounded-bl-[100px] rounded-br-[100px] top-[153px] w-[152px]">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[35px] not-italic text-[64px] text-white top-[11px]">
        50
      </p>
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

function Group2() {
  return (
    <div className="absolute contents left-[715px] top-[114px]">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function ScoreOverviewSection() {
  return (
    <div
      className="absolute contents left-[18px] top-[13px]"
      data-name="score overview section"
    >
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[19px] not-italic text-[#777] text-[24px] top-[18px]">
        Scores Overview
      </p>
      <Group />
      <Frame5 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[234px] not-italic text-[36px] text-black top-[118px]">
        ANISHA SINGH
      </p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[234px] not-italic text-[0px] text-[20px] text-black top-[179px]">
        <span className="leading-[normal]">{`Test Taker: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          PTE004278643
        </span>
      </p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[234px] not-italic text-[0px] text-[20px] text-black top-[225px]">
        <span className="leading-[normal]">Registration ID</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          517526683
        </span>
      </p>
      <Group2 />
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[0] left-[85px] not-italic text-[0px] text-[20px] text-black top-[472px] w-[313px]">
        <span className="leading-[normal]">{`Test `}</span>
        <span className="leading-[normal]">Center Country</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          India
        </span>
      </p>
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[0] left-[558px] not-italic text-[0px] text-[20px] text-black top-[472px] w-[313px]">
        <span className="leading-[normal]">{`Test `}</span>
        <span className="leading-[normal]">Date</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          14 Oct 2025
        </span>
      </p>
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[0] left-[85px] not-italic text-[0px] text-[20px] text-black top-[518px] w-[311px]">
        <span className="leading-[normal]">{`Test `}</span>
        <span className="leading-[normal]">Center ID</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          50496
        </span>
      </p>
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[0] left-[558px] not-italic text-[0px] text-[20px] text-black top-[518px] w-[311px]">
        <span className="leading-[normal]">Valid Until</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          14 Oct 2027
        </span>
      </p>
      <p className="absolute css-4hzbpn font-['Inter:Medium',sans-serif] font-medium h-[47px] leading-[0] left-[85px] not-italic text-[0px] text-[20px] text-black top-[564px] w-[313px]">
        <span className="leading-[normal]">{`Test Taker: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          Pearson Professional Centers-Hyderabad
        </span>
      </p>
    </div>
  );
}

function Listening() {
  return (
    <div
      className="absolute contents left-[145px] top-[14px]"
      data-name="listening"
    >
      <div className="absolute left-[145px] size-[116px] top-[14px]">
        <div
          className="absolute inset-[-3.02%]"
          style={{ "--stroke-0": "rgba(4, 2, 96, 1)" } as React.CSSProperties}
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
              stroke="var(--stroke-0, #040260)"
              strokeWidth="7"
            />
          </svg>
        </div>
      </div>
      <p className="absolute css-4hzbpn font-['Inter:Bold',sans-serif] font-bold h-[43.333px] leading-[normal] left-[182px] not-italic text-[32px] text-black top-[56.22px] w-[43px]">
        46
      </p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[172px] not-italic text-[14px] text-black top-[135px]">
        Listening
      </p>
    </div>
  );
}

function Reading() {
  return (
    <div
      className="absolute contents left-[299px] top-[14px]"
      data-name="reading"
    >
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[330px] not-italic text-[14px] text-black top-[135px]">
        Reading
      </p>
      <div className="absolute left-[299px] size-[116px] top-[14px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 116 116"
        >
          <circle
            cx="58"
            cy="58"
            id="Ellipse 3"
            r="54.5"
            stroke="var(--stroke-0, #87BE07)"
            strokeWidth="7"
          />
        </svg>
      </div>
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[336px] not-italic text-[32px] text-black top-[52px]">
        46
      </p>
    </div>
  );
}

function Speaking() {
  return (
    <div
      className="absolute contents left-[453px] top-[14px]"
      data-name="speaking"
    >
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[480px] not-italic text-[14px] text-black top-[135px]">
        Speaking
      </p>
      <div className="absolute left-[453px] size-[116px] top-[14px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 116 116"
        >
          <circle
            cx="58"
            cy="58"
            id="Ellipse 3"
            r="54.5"
            stroke="var(--stroke-0, #4E4E4E)"
            strokeWidth="7"
          />
        </svg>
      </div>
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[490px] not-italic text-[32px] text-black top-[52px]">
        46
      </p>
    </div>
  );
}

function Writing() {
  return (
    <div
      className="absolute contents left-[607px] top-[14px]"
      data-name="writing"
    >
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[641px] not-italic text-[14px] text-black top-[135px]">
        Writing
      </p>
      <div className="absolute left-[607px] size-[116px] top-[14px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 116 116"
        >
          <circle
            cx="58"
            cy="58"
            id="Ellipse 3"
            r="54.5"
            stroke="var(--stroke-0, #D208D9)"
            strokeWidth="7"
          />
        </svg>
      </div>
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[644px] not-italic text-[32px] text-black top-[52px]">
        46
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[156px] left-1/2 overflow-clip top-[713px] translate-x-[-50%] w-[867px]">
      <Listening />
      <Reading />
      <Speaking />
      <Writing />
    </div>
  );
}

function MoreInfo() {
  return (
    <div
      className="absolute bg-white border border-[#d3d3d3] border-solid h-[906px] left-[100px] overflow-clip top-[208px] w-[961px]"
      data-name="more info"
    >
      <Group3 />
      <ScoreOverviewSection />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[18px] not-italic text-[#777] text-[24px] top-[659px]">
        Communicative Skills
      </p>
      <Frame8 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[100px] top-[208px]">
      <MoreInfo />
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

function ScoreOverviewSection1() {
  return (
    <div
      className="absolute contents font-['Inter:Medium',sans-serif] font-medium left-[18px] not-italic text-[24px] top-[17px]"
      data-name="score overview section"
    >
      <p className="absolute css-ew64yg leading-[normal] left-[19px] text-[#777] top-[18px]">
        Skills Breakdown
      </p>
      <p className="absolute css-ew64yg leading-[0] left-[85px] text-[0px] text-black top-[445px]">
        <span className="leading-[normal]">Date of Birth</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          27 Jan 1990
        </span>
      </p>
      <p className="absolute css-ew64yg leading-[0] left-[85px] text-[0px] text-black top-[494px]">
        <span className="leading-[normal]">Country of Citizenship</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          India
        </span>
      </p>
      <p className="absolute css-ew64yg leading-[0] left-[85px] text-[0px] text-black top-[543px]">
        <span className="leading-[normal]">Country of Residence</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          India
        </span>
      </p>
      <p className="absolute css-ew64yg leading-[0] left-[85px] text-[0px] text-black top-[592px]">
        <span className="leading-[normal]">Gender</span>
        <span className="leading-[normal]">{`: `}</span>
        <span className="font-['Inter:Light',sans-serif] font-light leading-[normal]">
          Female
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

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[14px] items-start leading-[normal] not-italic right-[514px] text-[20px] text-black text-right top-[134px] w-[27px]">
      <p className="css-ew64yg relative shrink-0">46</p>
      <p className="css-ew64yg relative shrink-0">46</p>
      <p className="css-ew64yg relative shrink-0">46</p>
      <p className="css-ew64yg relative shrink-0">46</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#040260] h-[27px] left-[470px] top-[135px] w-[184px]" />
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#87be07] h-[27px] left-[470px] top-[171px] w-[156px]" />
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#4e4e4e] h-[27px] left-[470px] top-[207px] w-[220px]" />
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#d208d9] h-[27px] left-[470px] top-[243px] w-[156px]" />
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[469px] top-[134px]">
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function MoreInfo1() {
  return (
    <div
      className="absolute bg-white border border-[#d3d3d3] border-solid h-[666px] left-[100px] overflow-clip top-[1164px] w-[961px]"
      data-name="more info"
    >
      <ScoreOverviewSection1 />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[18px] not-italic text-[#777] text-[24px] top-[359px]">
        Candidate Information
      </p>
      <Frame9 />
      <Frame10 />
      <Group4 />
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
          50
        </span>
      </p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[100px] top-[1164px]">
      <MoreInfo1 />
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

function Heading() {
  return (
    <div
      className="absolute bg-[#2bb68c] h-[144px] leading-[normal] left-[100px] not-italic overflow-clip text-black top-[32px] w-[961px]"
      data-name="heading"
    >
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium left-[31px] text-[48px] top-[19px]">
        PTE Academic | Score Report
      </p>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal left-[35px] text-[24px] top-[85px]">
        Score Report Code: 414973F141
      </p>
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

function Frame4() {
  return (
    <div className="absolute bg-[#f9f8f8] h-[1976px] left-[67px] overflow-clip rounded-bl-[9px] rounded-br-[9px] rounded-tl-[16px] rounded-tr-[16px] top-[271px] w-[1162px]">
      <Group1 />
      <Group5 />
      <Heading />
      <ShareButton1 />
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

function Frame2() {
  return (
    <div className="absolute bg-[#5b28c0] h-[72px] left-0 overflow-clip top-[72px] w-[1280px]">
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
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium left-[605px] text-[#d3d3d3] top-[11px]">
          Help
        </p>
      </div>
      <div className="absolute h-[1488px] left-0 top-[72px] w-[1280px]" />
    </div>
  );
}

function LogoFullWhite() {
  return (
    <div
      className="absolute h-[24px] left-[42px] top-[12px] w-[120px]"
      data-name="logo-full-white 1"
    >
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

function Frame1() {
  return (
    <div className="absolute h-[47px] left-[19px] overflow-clip top-[16px] w-[204px]">
      <LogoFullWhite />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#270075] h-[72px] left-0 overflow-clip top-0 w-[1280px]">
      <Frame1 />
    </div>
  );
}

export default function MacBookAir() {
  return (
    <div
      className="bg-[#e6e6e6] relative size-full"
      data-name="MacBook Air - 1"
    >
      <Frame />
      <Frame2 />
      <div className="absolute bg-[#e6e6e6] h-[2693px] left-0 rounded-[21px] top-[145px] w-[1280px]">
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
        <Frame3 />
        <ShareButton />
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[61px] not-italic text-[20px] text-black top-[207px]">
          Click the button above to search for an institution to share your
          score
        </p>
        <Frame4 />
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
