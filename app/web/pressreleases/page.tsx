"use client";

import Image from "next/image";
import PressRelease from "../../../public/textures/web-home/Press Releases.png";
import A_1 from "../../../public/textures/pressReleases/1-1.png";
import A_2 from "../../../public/textures/pressReleases/1-2.png";
import B_1 from "../../../public/textures/pressReleases/2-1.png";
import B_2 from "../../../public/textures/pressReleases/2-2.png";
import C_1 from "../../../public/textures/pressReleases/3-1.png";
import C_2 from "../../../public/textures/pressReleases/3-2.png";
import D_1 from "../../../public/textures/pressReleases/4-1.png";
import D_2 from "../../../public/textures/pressReleases/4-2.png";
import E_1 from "../../../public/textures/pressReleases/5-1.png";
import E_2 from "../../../public/textures/pressReleases/5-2.png";
import WebLayout from "../src/webLayout";
import { useState } from "react";
import { useRecoilState } from "recoil";
import langState from "../src/atom";
export default function Home() {
  const [url, setUrl] = useState("");
  const [lang, setLang] = useRecoilState(langState);

  const [isPressView, setPressView] = useState(false);
  const [pressContents, setPressContents] = useState(0);

  return (
    <main className="w-screen h-screen  flex items-center flex-col">
      {lang ? (
        <WebLayout isHome={false} url={url}>
          {isPressView ? (
            <div
              onClick={() => {
                setPressView((prev) => !prev);
              }}
              className="absolute w-screen lg:py-[600px] zero:py-[200px] justify-center bg-black bg-opacity-60 z-30 flex cursor-pointer"
            >
              <PressView pressContents={pressContents} />
            </div>
          ) : null}

          <div className="flex flex-col items-center lg:mt-36 lg:w-6/12 zero:mt-20 zero:w-screen">
            <Image
              src={PressRelease}
              className="lg:w-[12%] zero:w-[25%]"
              alt="PressRelease"
            />
            <span className="lg:text-[40px] zero:text-[30px] ">
              Press Release
            </span>
            <div className="lg:mt-20 zero:mt-5 grid grid-cols-1 gap-5">
              <button
                className="flex hover:bg-gray-300 p-3"
                onClick={() => {
                  setPressView(true);
                  setPressContents(0);
                }}
              >
                <Image src={A_1} alt="A_1" className="w-[30%]" />
                <div className="w-[5%]" />
                <div className="flex flex-col text-left w-[65%] py-2">
                  <div className="font-bold lg:text-[25px] zero:text-[13px] ">
                    MSC 대표, &quot;부작용에 대한 걱정보다는 개개인의 행복에 더
                    초점을 맞추어주셨으면&quot;
                  </div>
                  <div className="text-gray-400 font-thin lg:text-[20px] zero:text-[13px] ">
                    2042년 02월 11일
                  </div>
                </div>
              </button>
              <button
                className="flex hover:bg-gray-300 p-3"
                onClick={() => {
                  setPressView(true);
                  setPressContents(1);
                }}
              >
                <Image src={B_1} alt="B_1" className="w-[30%]" />
                <div className="w-[5%]" />
                <div className="flex flex-col text-left w-[65%] py-2">
                  <div className="font-bold lg:text-[25px] zero:text-[13px] ">
                    {`MSC, 기억규제부 (MMR)로부터 세계 최초 기억 조작 기관
으로 승인`}
                  </div>
                  <div className="text-gray-400 font-thin lg:text-[20px] zero:text-[13px] ">
                    2042년 07월 03일
                  </div>
                </div>
              </button>
              <button
                className="flex hover:bg-gray-300 p-3"
                onClick={() => {
                  setPressView(true);
                  setPressContents(2);
                }}
              >
                <Image src={C_1} alt="C_1" className="w-[30%]" />
                <div className="w-[5%]" />
                <div className="flex flex-col text-left w-[65%] py-2">
                  <div className="font-bold lg:text-[25px] zero:text-[13px] ">
                    국제뇌협회 이사장 토머스 레이, &quot;기억 조작과 관련된
                    범죄, 규제 방안 최선을 다해 지속적으로 연구할 것&quot;
                  </div>
                  <div className="text-gray-400 font-thin lg:text-[20px] zero:text-[13px] ">
                    2043년 01월 31일
                  </div>
                </div>
              </button>
              <button
                className="flex hover:bg-gray-300 p-3"
                onClick={() => {
                  setPressView(true);
                  setPressContents(3);
                }}
              >
                <Image src={D_1} alt="D_1" className="w-[30%]" />

                <div className="w-[5%]" />
                <div className="flex flex-col text-left w-[65%] py-2">
                  <div className="font-bold lg:text-[25px] zero:text-[13px] ">
                    MSC, Hippo&campus Co., Ltd와 3000억 규모 인공해마 칩 대규모
                    계약 체결
                  </div>
                  <div className="text-gray-400 font-thin lg:text-[20px] zero:text-[13px] ">
                    2043년 04월 03일
                  </div>
                </div>
              </button>
              <button
                className="flex hover:bg-gray-300 p-3"
                onClick={() => {
                  setPressView(true);
                  setPressContents(4);
                }}
              >
                <Image src={E_1} alt="E_1" className="w-[30%]" />

                <div className="w-[5%]" />
                <div className="flex flex-col text-left w-[65%] py-2">
                  <div className="font-bold lg:text-[25px] zero:text-[13px] ">
                    {`미국 팝스타 위나 맥카시, “기억 조작은 21세기식 영혼의 디톡스”`}
                  </div>
                  <div className="text-gray-400 font-thin lg:text-[20px] zero:text-[13px] ">
                    2043년 08월 16일
                  </div>
                </div>
              </button>
            </div>
            <div className="text-[20px] lg:mt-20 lg:pb-52 zero:mt-10 zero:pb-[50px]">
              © dasomsong 2023
            </div>
          </div>
        </WebLayout>
      ) : (
        <WebLayout isHome={false} url={url}>
          {isPressView ? (
            <div
              onClick={() => {
                setPressView((prev) => !prev);
              }}
              className="absolute w-screen lg:py-[600px] zero:py-[200px] justify-center bg-black bg-opacity-60 z-30 flex cursor-pointer"
            >
              <PressView pressContents={pressContents} />
            </div>
          ) : null}

          <div className="flex flex-col items-center lg:mt-36 lg:w-6/12 zero:mt-20 zero:w-screen">
            <Image
              src={PressRelease}
              className="lg:w-[12%] zero:w-[25%]"
              alt="witch"
            />
            <span className="lg:text-[40px] zero:text-[30px]">
              Press Release
            </span>
            <div className="lg:mt-20 zero:mt-5 grid grid-cols-1 gap-5">
              <button
                className="flex hover:bg-gray-300 p-3"
                onClick={() => {
                  setPressView(true);
                  setPressContents(0);
                }}
              >
                <Image src={A_1} alt="A_1" className="w-[30%]" />
                <div className="w-[5%]" />
                <div className="flex flex-col text-left w-[65%] py-2">
                  <div className="font-bold lg:text-[25px] zero:text-[13px] ">
                    MSC CEO Highlights Focus on Individual Happiness Over
                    Concerns of Side Effects
                  </div>
                  <div className="text-gray-400 font-thin lg:text-[20px] zero:text-[13px] ">
                    FEBRUARY 11, 2042
                  </div>
                </div>
              </button>
              <button
                className="flex hover:bg-gray-300 p-3"
                onClick={() => {
                  setPressView(true);
                  setPressContents(1);
                }}
              >
                <Image src={B_1} alt="B_1" className="w-[30%]" />
                <div className="w-[5%]" />
                <div className="flex flex-col text-left w-[65%] py-2">
                  <div className="font-bold lg:text-[25px] zero:text-[13px] ">
                    {`MSC Approved as the World's First Memory Modification
                  Institution by Memory Regulation Bureau (MMR)`}
                  </div>
                  <div className="text-gray-400 font-thin lg:text-[20px] zero:text-[13px] ">
                    JULY 03, 2042
                  </div>
                </div>
              </button>
              <button
                className="flex hover:bg-gray-300 p-3"
                onClick={() => {
                  setPressView(true);
                  setPressContents(2);
                }}
              >
                <Image src={C_1} alt="C_1" className="w-[30%]" />
                <div className="w-[5%]" />
                <div className="flex flex-col text-left w-[65%] py-2">
                  <div className="font-bold lg:text-[25px] zero:text-[13px] ">
                    Thomas Ray, Chairman of the International Brain Association,
                    Commits to Ongoing Research on Regulations Related to Memory
                    Modification and Crime
                  </div>
                  <div className="text-gray-400 font-thin lg:text-[20px] zero:text-[13px] ">
                    JANUARY 31, 2043
                  </div>
                </div>
              </button>
              <button
                className="flex hover:bg-gray-300 p-3"
                onClick={() => {
                  setPressView(true);
                  setPressContents(3);
                }}
              >
                <Image src={D_1} alt="D_1" className="w-[30%]" />

                <div className="w-[5%]" />
                <div className="flex flex-col text-left w-[65%] py-2">
                  <div className="font-bold lg:text-[25px] zero:text-[13px] ">
                    MSC Signs a Massive 300 Billion KRW Contract with
                    Hippo&campus Co., Ltd for Artificial Hippocampus Chips
                  </div>
                  <div className="text-gray-400 font-thin lg:text-[20px] zero:text-[13px] ">
                    APRIL 03, 2043
                  </div>
                </div>
              </button>
              <button
                className="flex hover:bg-gray-300 p-3"
                onClick={() => {
                  setPressView(true);
                  setPressContents(4);
                }}
              >
                <Image src={E_1} alt="E_1" className="w-[30%]" />

                <div className="w-[5%]" />
                <div className="flex flex-col text-left w-[65%] py-2">
                  <div className="font-bold lg:text-[25px] zero:text-[13px] ">
                    {`American Pop Star Wina McCarthy said, “Memory Modification is
                  a 21st Century’s Soul Detox”`}
                  </div>
                  <div className="text-gray-400 font-thin lg:text-[20px] zero:text-[13px] ">
                    AUGUST 16, 2043
                  </div>
                </div>
              </button>
            </div>
            <div className="text-[20px] lg:mt-20 lg:pb-52 zero:mt-10 zero:pb-[50px]">
              © dasomsong 2023
            </div>
          </div>
        </WebLayout>
      )}
      \
    </main>
  );
}

function PressView({ pressContents }: { pressContents: number }) {
  const [lang, setLang] = useRecoilState(langState);
  return (
    <>
      <div className="lg:w-[55%] zero:w-[85%] bg-white flex lg:p-20 zero:p-6 flex-col">
        <span className="lg:text-[28px] zero:text-[20px] font-extrabold">
          {lang
            ? pressContentsObjKor[pressContents].title
            : pressContentsObjEng[pressContents].title}
        </span>
        <span className="block lg:text-xl zero:text-md text-gray-400 font-extralight">
          {lang
            ? pressContentsObjKor[pressContents].author
            : pressContentsObjEng[pressContents].author}
        </span>
        <span className="block lg:text-xl zero:text-md text-gray-400 font-extralight">
          {lang
            ? pressContentsObjKor[pressContents].date
            : pressContentsObjEng[pressContents].date}
        </span>
        <div>
          <div className="flex justify-center my-10 items-center flex-col ml-3">
            <Image
              src={
                lang
                  ? pressContentsObjKor[pressContents].pictureUrl
                  : pressContentsObjEng[pressContents].pictureUrl
              }
              width={350}
              height={350}
              alt="pressPhoto"
            />
            <span className="text-center lg:text-lg zero:text-sm mt-1 text-gray-400">
              {lang
                ? pressContentsObjKor[pressContents].pictureCaption
                : pressContentsObjEng[pressContents].pictureCaption}
            </span>
          </div>
          <span className="lg:text-xl zero:text-md mr-6 whitespace-pre-line">
            {lang
              ? pressContentsObjKor[pressContents].contents
              : pressContentsObjEng[pressContents].contents}
          </span>
        </div>
      </div>
    </>
  );
}

const pressContentsObjKor = [
  {
    title: `MSC 대표, “부작용에 대한 걱정보다는 개개인의 행복에 더 초점을 맞추어 주셨으면"`,
    author: "브렌다 헤르만 기자, WNN",
    date: "입력 2042-02-11 오전 11:58",
    contents: `메모리 서비스 센터(이하 MSC) 대표가 3월 로스엔젤레스에서 열린 국제 기억규제 협회(이하 WMO)가 주최하는‘VISION 2050’에 참여해 메모리 기술의 상용화 과정에서 윤리적인 문제와 부작용에 대한 여론에 대응하며 "부작용에 대한 걱정보다는 개개인의 행복에 더 초점을 맞추어주셨으면"이라고 강조했다.\n\n 메모리 서비스 센터는 최근 기억을 조작할 수 있는 혁신적인 기술을 개발하고 이를 상용화하려는 과정에서 다양한 논란과 윤리적인 고민에 직면하고 있다. 이러한 기술은 기억의 일부를 삭제하거나 수정하는 것을 허용하며,이로써 개인의 과거 경험을 조작할 수 있는 가능성을 제기하고 있다.\n\n이에 대해 MSC 대표는 "우리의 기술은 개인의 행복을 증진하기 위한 것"이라며 "부작용이나 윤리적인 문제에 대한 우려는 있지만, 우리의 목표는 개개인이 더 풍요로운 삶을 살 수 있도록 도와주는 것"이라고 밝혔다.\n\n이어서 그는 "모든 기술이 제대로 사용될 수 있도록 엄격한 윤리적 가이드라인과 감독을 마련하고자 노력하고 있다. 또한, 사용자들에게는 기술을 적절하게 활용하고 그 효과를 신중하게 고려할것을 당부드린다."라고 강조했다.\n\nMSC는 이러한 메모리 기술을 통해 정신적인 문제, 외상 후 스트레스 장애, 중독, 불안, 우울증 등의 치료와 개인 발전을 지원하고자 하고 있으며, 그 과정에서 고객 개개인의 행복과 웰빙에 초점을 맞추고자 하고 있는 것으로 나타났다.\n\n그러나 이러한 기술의 도입과 사용에는 여전히 많은 윤리적, 법적, 그리고 사회적 고민이 존재하며, 이에 대한 논의와 감독은 계속될 것으로 보인다. MSC와 같은 혁신 기업은 이러한 고민을 염두에 두며 새로운 기술의 상용화를 진행할 것으로 예상된다.`,
    pictureUrl: "/textures/pressReleases/1-2.png",
    pictureCaption: `▲ ‘VISION 2050’ 개회 전 포즈를 취하고 있는 MSC 대표`,
  },
  {
    title: "MSC, 기억규제부 (MMR)로부터 세계 최초 기억 조작 기관으로 승인",
    author: "마크 리브스 기자, WNN USA",
    date: "입력 2042-07-03 오후 4:32",
    contents: `메모리 서비스 센터 (이하 MSC)가 세계 최초로 기억 조작 기관으로 승인받았으며, 이로써 개인의 기억을 서비스 및 치료 형태로써 조작할 수 있는 기술을 단계적으로
      상용화할 것으로 밝혀졌다.\n\nMSC는 기억규제부 (이하 MMR)의 엄격한 검토를 통과하고, FDA로부터 정식으로 승인된 8가지 서비스를 제공하기 위한 권한을 얻었다. 이 중에는 인공 해마 이식, 트라우마 기억 삭제, 기억 복구 등 다양한 치료법이 포함되어 있으며, 이러한 서비스들은 정신 건강 문제와 관련된 다양한 상황에서 개인의 기억을 개선하고 관리하는 데 도움을 줄 것으로 예상된다.\n\n이르면 2042년 11월부터 이러한 서비스를 제공할 예정으로, 이 기술의 도입으로 개인의 기억은 더 효과적으로 관리되고 조작될 수 있게 될 것으로 전망된다. 이를 통해 정신 건강 분야에서의 혁신적인 변화가 예상되며, 또한 윤리적 및 법적 문제에 대한 논의도 계속될 것으로 보인다.\n\n MSC 대표는 "우리의 목표는 개인의 행복과 웰빙을 증진시키는 데 있으며, 이를 위해 기술과 윤리적 가이드라인을 결합하여 안전하고 효과적인 서비스를 제공할 것"이라고 밝혔으며, 이러한 기술이 사회적으로 적절한 방식으로 활용되도록 주의 깊게 관리할 것임을 강조했다.\n\nMSC의 이러한 발전은 기억과 정신 건강 분야에서의 혁신적인 전환을 암시하며, 미래에는 이와관련 된 연구와 개발이 더욱 확대될 것으로 예상된다.
      `,
    pictureUrl: "/textures/pressReleases/2-2.png",
    pictureCaption: "▲ NET-X8을 통해 기억 서비스를 받고 있는 환자",
  },
  {
    title: `국제뇌협회 이사장 토머스 레이, “기억 조작과 관련된 범죄, 규제 방안 최선을 다해 지속적으로 연구할 것”`,
    author: "알렉산드라 보이보딕 기자, WNN",
    date: "입력 2043-01-31 오후 2:10",
    contents:
      '국제뇌협회의 이사장인 토머스 레이가 기억 조작과 관련된 범죄에 대한 규제 방안을 지속적으로 연구하겠다고 발표했다. 이러한 연구는 기억 조작 기술의 발전으로 인해 발생할 수 있는 다양한 범죄에 대처하기 위한 중요한 노력으로 강조되고 있다.\n\n레이 이사장은 "기억 조작 기술은 혁신적이지만, 그와함께 범죄와 윤리적 문제도 증가하고 있습니다. 우리는 이러한 문제를 해결하기 위해 최선을 다하고, 법령과 규제를 강화하는 방안을 연구하고자 합니다"라고 밝혔다.\n\n이러한 노력은 기억 조작에 대한 규제와 관련된 법령의 필요성을 강조하는 것으로, 현재의 법령을 보다 효과적으로 개선하고자 하는 것을 목표로 하고 있다.\n\n레이 이사장은 "우리는 뇌 기술의 발전과 함께 발생하는 윤리적, 사회적 문제에 적극적으로 대처하고자 합니다. 안전하고 윤리적인 방향으로 진행될 수 있도록 최선을 다하겠습니다"라며 연구에 대한 의지를 강조하며 동시에 “문명 시대 이전부터 그래왔듯 인류는 언제나 새로운 기술을 직면하게 되면서 시행착오를 겪을 수 밖에 없다. 다만, 우리가 해야 할 일은 이를 피하거나 감추지 않고 보다 나은 방향으로 이끌어가는 것”이라고 강조했다.\n\n실제로 작년 12월에 집계된 리플리 환자 중 기억 조작 이력이 있는 환자들의 비율이 30.8%로 조사된 바 있으며, 지난 3일 스페인 마드리드에서 일어났던 총격사건의 범인은 기억 조작 시술 이후 자기 자신을 부정하는 테세우스 증후군을 앓고 있던 환자였던 것으로 밝혀졌다.\n\n기억 조작 기술은 현재 다양한 분야에서 연구되고 있으며, 이에 따른 법령 및 규제는 미래에 더욱 중요한 역할을 할 것으로 예상된다.',
    pictureUrl: "/textures/pressReleases/3-2.png",
    pictureCaption: "▲ 기억 조작에 대해 발표중인 토머스 레이",
  },
  {
    title:
      "MSC, Hippo&campus Co., Ltd와 3000억 규모 인공해마 칩 대규모 계약 체결",
    author: "그웬 리 기자, WNN USA",
    date: "입력 2043-04-03 오전 10:45",
    contents:
      "메모리 서비스 센터 (이하 MSC)가 인공해마 칩의 대규모 계약을 Hippo&campus Co., Ltd와 체결했다. 이 계약은 인공해마 칩의 생산과 서비스 확대를 위한 뜻깊은 협력을 의미하며, 계약 규모는 총 3000억 원에 달한다.\n\nHippo&campus Co., Ltd는 미국 뉴욕주에 위치한 기술기업으로, 고급 인공해마 칩의 개발과 생산 분야에서 선도적인 위치를 차지하고 있다. 이번 계약으로 MSC는고객에게 제공하는 인공해마 칩의 품질과 생산량을 더욱 향상시킬 수 있게 되었다.\n\n해당 계약에 따르면 MSC는 Hippo&campus 사에 1000억 원의 선계약금을 지불 후, 잔여금 2000억 원을 향후2046년까지 순차적으로 지불할 예정이다. 이러한 조건은 양사의 장기적인 협력을 반영하며, 더 나은 기술 혁신과 서비스 품질 제고를 지향하고 있다.\n\n또한, 이번 협력에서 환경 측면에서도 주목할 만한 내용이 있다. Hippo&campus Co., Ltd는 공장내 전력을 100% 재생에너지로 조달하는 계획을 추진 중이며, 이로써 친환경적인 생산 환경을 조성하고자 하고 있다. MSC 역시 지속 가능한 비즈니스 모델과 친환경적인 제품 생산을 적극적으로 지지하고 있으며, 이번 계약은 그러한 노력의 일환으로 해석된다.\n\nMSC와 Hippo&campus Co., Ltd의 협력은 인공해마 칩 시장에서 두 기업의 경쟁력을 한층 더 강화할 것으로 예상되며, 이로써 뇌 기술 분야의 혁신과 발전에 기여할 것으로 기대된다.",
    pictureUrl: "/textures/pressReleases/4-2.png",
    pictureCaption: "▲ Hippo&campus사 대표이사와 악수 중인 MSC 대표",
  },
  {
    title: "미국 팝스타 위나 맥카시, “기억 조작은 21세기식 영혼의 디톡스”",
    author: "크왕가 웨스트 기자, WNN Star",
    date: "입력 2043-08-16 오전 09:11",
    contents: `미국의 인기 팝스타인 위나 맥카시가 기억 조작 기술을 "21세기식 영혼의 디톡스"로 칭찬하며, 자신도 '트라우마 기억 삭제' 서비스를 통해 대중들 앞에 설 수있게 되었다고 밝혔다.\n\n위나 맥카시는 지난 2월 'Elimination!'이라는 싱글로 데뷔하여, 현재 대중들의 큰 사랑을 받고 있는 팝 아티스트로 알려져 있다. 그녀는 기억 조작 기술의 장점들에 대해 얘기하며, 이를 통해 자신의 삶에서 얻은 이점과 긍정적인 경험을 강조했다.\n\n맥카시는 "기억 조작은 21세기의 디톡스입니다. 과거의 상처나 트라우마를 극복하고, 새로운 시작을 할 수 있는 기회를 제공합니다"라며 이 기술이 어떻게 개인의 영혼과 정신적인 건강에 긍정적인 영향을 미치는지에 대해 열정적으로 이야기하며, 그녀는 현재 자신의 창작과 정신적 치유를 동시에 이루어내고 있다고 설명했다.\n\n또한, 맥카시는 VMA Freshman 인터뷰에서 "주변에 과거 때문에 미래로 나아가지 못하는 사람이있다면 자신은 기억 조작을 강력하게 추천할 것"이라고 밝힌 바가 있다. 이러한 발언으로도 그녀는 기억 조작 기술이 개인의 삶에 긍정적인 영향을 미칠 수 있다는 것에 대한 강력한 지지를 표명한 셈이다.\n\nMSC 연구진들은 이러한 사례를 통해 기억 조작 기술이 인간의 삶과 정신 건강에 어떤 방식으로 긍정적인 영향을 미칠 수 있는지를 지속적으로 모니터링하며, 기술의 윤리적인 사용과 혁신적인 가능성을 탐구할 것으로 밝혔다.`,
    pictureUrl: "/textures/pressReleases/5-2.png",
    pictureCaption: "▲ 미국의 팝스타 위나 맥카시",
  },
];

const pressContentsObjEng = [
  {
    title:
      "MSC CEO Highlights Focus on Individual Happiness Over Concerns of Side Effects",
    author: "By Brenda Hermann, WNN",
    date: "Date 2042-02-11, 11:58 AM",
    contents:
      "In March, the CEO of the Memory Service Center (MSC) participated in the 'VISION 2050' conference organized by the World Memory Regulation Association (WMO) in Los Angeles, addressing ethical concerns and public opinions regarding side effects in the commercialization process of memory technology. They emphasized the importance of prioritizing individual happiness over concerns about side effects.\n\n Memory Service Center has recently encountered various controversies and ethical dilemmas while developing innovative technology that allows Modification of memories and aims to commercialize it. This technology  permits the deletion or modification of portions of one's memory, raising the possibility of manipulating individuals' past experiences.\n\n Regarding these issues, the MSC CEO stated, \"Our technology is designed to enhance individual happiness.\" They further emphasized, \"While there are concerns about side effects and ethical issues, our goal is to assist individuals in leading more fulfilling lives.\"\n\n\n Furthermore, they highlighted their efforts to establish strict ethical guidelines and supervision to ensure the responsible use of all technologies. They also urged users to utilize the technology appropriately and carefully consider its effects.\n\n MSC aims to support the treatment of mental issues such as post-traumatic stress disorder, addiction, anxiety, and depression, as well as personal development through this memory technology, with a focus on the happiness and well-being of each individual customer.\n\n However, the introduction and use of such technology still raise significant ethical, legal, and societal concerns, and discussions and oversight in this regard are expected to continue. Innovative companies like MSC are expected to proceed with the commercialization of new technology while taking these concerns into account.",
    pictureUrl: "/textures/pressReleases/1-2.png",
    pictureCaption: "▲ MSC CEO posing in the ‘VISION 2050’",
  },
  {
    title:
      "MSC Approved as the World's First Memory Modification Institution by Memory Regulation Bureau (MMR)",
    author: "By Mark Reeves, WNN USA",
    date: "Date 2042-07-03, 4:32 PM",
    contents:
      "The Memory Service Center (MSC) has obtained approval as the world's first memory Modification institution, paving the way for the gradual commercialization of technology that allows the Modification of individual memories for service and therapeutic purposes.\n\n MSC successfully passed rigorous evaluations by the Memory Regulation Bureau (MMR) and has gained formal authorization from the FDA to offer eight approved services. Among these services are artificial hippocampus transplantation, trauma memory deletion, memory recovery, and various therapeutic methods expected to enhance and manage individuals' memories in diverse situations related to mental health issues.\n\n Starting in November 2042, these services are set to be available, promising more effective management and Modification of individual memories with the introduction of this technology. This innovation is anticipated to bring about groundbreaking changes in the field of mental health, with ongoing discussions regarding ethical and legal concerns.\n\n The MSC representative stated, \"Our goal is to enhance individual happiness and well-being, combining technology with ethical guidelines to provide safe and effective services.\" They emphasized their commitment to carefully managing the responsible utilization of this technology within society.\n\n MSC's advancement signifies an innovative shift in the fields of memory and mental health, with expectations for further expansion of research and development in related areas in the future.",
    pictureUrl: "/textures/pressReleases/2-2.png",
    pictureCaption: "▲ Patient receiving 'Memory Services' through the NET-X8",
  },
  {
    title:
      "Thomas Ray, Chairman of the International Brain Association, Commits to Ongoing Research on Regulations Related to Memory Modification and Crime",
    author: "By Aleksandra Vojvodic, WNN",
    date: "Date 2043-01-31, 2:10 PM",
    contents:
      'Thomas Ray, Chairman of the International Brain Association, has announced his commitment to conducting continuous research on regulations related to crimes associated with memory Modification. Such research is being emphasized as a crucial effort to address various crimes that may arise due to the advancement of memory Modification technology.\n\n Chairman Ray stated, "Memory Modification technology is innovative, but it has also led to an increase in criminal and ethical issues. We are determined to address these issues and explore ways to strengthen laws and regulations." These efforts aim to underscore the need for regulations related to memory Modification and to improve existing laws more effectively.\n\n Chairman Ray emphasized, "We are actively addressing the ethical and societal issues arising alongside the advancement of brain technology. We will do our utmost to ensure that progress occurs safely and ethically." He also stressed the need to embrace new technologies and guide them toward better directions, as humanity has always faced challenges when encountering new technologies throughout history.\n\n In fact, a survey conducted in December of last year revealed that 30.8% of Ripple patients had a history of memory Modification, and the perpetrator of a recent shooting incident in Madrid, Spain, was found to have been suffering from the Theseus syndrome, denying himself after memory Modification procedures.\n\n Memory Modification technology is currently being researched in various fields, and corresponding laws and regulations are expected to play an increasingly crucial role in the future.',
    pictureUrl: "/textures/pressReleases/3-2.png",
    pictureCaption: "▲ Thomas Ray presenting on Memory Modification",
  },
  {
    title:
      "MSC Signs a Massive 300 Billion KRW Contract with Hippo&campus Co., Ltd for Artificial Hippocampus Chips",
    author: "By Gwen Lee, WNN USA",
    date: "Date 2043-04-03, 10:45 AM",
    contents:
      "The Memory Service Center (MSC) has entered into a significant contract for artificial hippocampus chips with Hippo&campus Co., Ltd. This contract signifies a substantial collaboration for the production and expansion of services related to artificial hippocampus chips, with a total contract value of 300 billion KRW.\n\n Hippo&campus Co., Ltd is a technology company based in New York State, USA, known for its pioneering work in the development and production of advanced artificial hippocampus chips. Through this agreement, MSC is set to enhance the quality and production capacity of artificial hippocampus chips it offers to customers.\n\n As per the terms of the contract, MSC will pay an initial advance payment of 100 billion KRW to Hippo&campus and will make sequential payments of the remaining 200 billion KRW until 2046. These conditions reflect a long-term collaboration between the two entities, aiming for improved technological innovation and service quality.\n\n Furthermore, this collaboration also highlights noteworthy environmental considerations. Hippo&campus Co., Ltd is actively pursuing plans to source 100% of its factory's power from renewable energy, aiming to create an eco-friendly production environment. MSC is likewise committed to sustainable business models and environmentally friendly product manufacturing, and this contract is seen as a part of those efforts.\n\n The collaboration between MSC and Hippo&campus Co., Ltd is expected to strengthen the competitiveness of both companies in the artificial hippocampus chip market, contributing to the advancement and innovation in the field of brain technology.",
    pictureUrl: "/textures/pressReleases/4-2.png",
    pictureCaption: "▲ MSC CEO and Hippo&campus CEO Shaking Hands",
  },
  {
    title:
      "American Pop Star Wina McCarthy said, “Memory Modification is a 21st Century’s Soul Detox”",
    author: "By Kwangar West, WNN Star",
    date: "Date 2043-08-16, 09:11 AM",
    contents: `Popular American pop star Wina McCarthy has praised memory Modification technology as a "21st- century’s detox for the soul," revealing that she, too, has benefited from the "trauma memory deletion" service and can now share her experiences with the public.\n\n Wina McCarthy made her debut in February with the single "Elimination!" and has since gained immense popularity as a pop artist. She discussed the advantages of memory Modification technology, emphasizing the positive impact it has had on her life and experiences.\n\n McCarthy stated, "Memory Modification is a 21st-century detox. It offers the opportunity to overcome past wounds or traumas and start anew," passionately describing how this technology can positively influence one\'s soul and mental well-being allowing her to simultaneously pursue her artistry and achieve emotional healing.\n\n Furthermore, during a VMA Freshman interview, McCarthy stated, "If there are people around you who can\'t move forward into the future because of their past, I would strongly recommend memory Modification." Her remarks underscore her strong support for the idea that memory Modification technology can have a positive impact on individuals\' lives.\n\n MSC researchers continue to monitor such cases, exploring how memory Modification technology can positively influence human lives and mental well-being. They remain committed to investigating the ethical use and innovative potential of this technology.`,
    pictureUrl: "/textures/pressReleases/5-2.png",
    pictureCaption: "▲ American Pop Star Wina McCarthy",
  },
];
