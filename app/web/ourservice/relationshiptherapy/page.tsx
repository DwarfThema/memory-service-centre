"use client";

import Image from "next/image";
import Relationshiptherapy from "../../../../public/textures/ourService/Relationship therapy.png";
import WebLayout from "../../src/webLayout";
import Reservation from "../../src/reservation";
import { useState } from "react";
import { useRecoilState } from "recoil";
import langState from "../../src/atom";

export default function Home() {
  const [isReservation, setReservation] = useState(false);
  const [lang, setLang] = useRecoilState(langState);

  return (
    <main className="w-screen h-screen flex items-center flex-col">
      <link rel="stylesheet" href="https://unpkg.com/98.css" />
      <WebLayout isHome={false}>
        {isReservation ? (
          <div
            onClick={() => {
              setReservation((prev) => !prev);
            }}
            className="fixed w-screen h-screen bg-black bg-opacity-60 z-50 flex items-center justify-center cursor-pointer"
          >
            <Reservation />
          </div>
        ) : null}

        {lang ? (
          <div className="flex flex-col items-center w-6/12 mt-36 text-xl">
            <h1 className="mt-10 w-full flex">
              <Image
                src={Relationshiptherapy}
                className="w-1/3 "
                alt="Relationshiptherapy"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center">
                <span className="w-full block text-[30px] font-semibold">
                  관계 테라피
                </span>
                <span className="w-full block text-[22px] mt-3">
                  소중한 사람과의 신뢰, 우정, 친밀감, 열정, 기쁨을 되찾아보세요.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                관계 테라피는 현대 사회에서 증가하는 관계 문제와 이혼률에
                대응하기 위한 의학적 접근 방식입니다. 이 치료는 기억을 조작하고
                관계를 복구하는 데 초점을 맞추며, 관계 문제의 통계적 심각성을
                고려하여 개발되 었습니다. 치료 과정에서 환자들의 부정적인 관계
                기억을 재배열하고, 감정을 다시 조절하며, 효과적인 의사 소통
                기술을 향상시키는 방법을 학습하게 됩니다. 이를 통해 치료
                대상자에게 관계의 질을 개선하고 갈등을 완화하여 보다 건강하고
                지지력 있는 관계를 구축하는 데 도움을 줄 수 있습니다. 선택적
                기억 조작은 기본 적으로 뇌 영상 촬영을 통해 시술 시 문제가 될
                만한 상황이 없는지 확인한 후 기존의 기억과 시술 이후의 기억을
                대조하여 &apos;기억 동등성 시험평가&apos;를 거쳐 이를 통과한
                이후에 시행됩니다.
              </span>
              <div className="mt-10">
                <span>이런 분들에게 추천합니다:</span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>관계 개선이 필요한 친구, 연인 혹은 가족</li>

                  <li>이혼을 고려해보았으나 관계 개선에 의지가 있는 부부</li>
                </ul>
                <span className="mt-10 block">
                  * 선택적 기억 조작을 통한 관계 테라피는 FDA 정식 승인이 된
                  치료이며, CE 인증을 정식으로 받은 전기 자극 기계인 NET-X8
                  시리즈를 사용합니다. 관계 테라피는 그룹으로 시행되는
                  그룹치료이며, 최소 2명 이상의 갈 등을 보유한 인원 단위로
                  치료가 가능합니다.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">
                    관계 테라피 시술 과정
                  </span>
                  우선 기억을 디지털화시킵니다. 이후 디지털 상으로 원치 않는
                  기억이 위치하는 부위를 뇌에 적용시켜 전기 자극을 줍니다.
                  신경세포 사이의 시냅스가 파괴되며, 이전의 해당 기억을 망각하게
                  됩니다. 또한, 의사전달에 효과적일 수 있는 영역에 대한
                  전기자극을 통해 관계 개선에 도움을 받을 수 있습니다. 시술
                  이후, 1-2주에 걸쳐 전문 상담가와 상담을 통해 집중적 관계 개선
                  요법을 실시합니다.
                </span>

                {qeustionNAnswoerKor.map((value, index) => {
                  return (
                    <div key={index} className="mt-10 block">
                      <span>{`${value.question}`}</span>
                      <div className="field-row mt-3">
                        <textarea
                          id="text17"
                          value={value.answer}
                          className="w-full h-[180px] text-base font-bold"
                        />
                      </div>
                    </div>
                  );
                })}

                <div className="flex justify-center">
                  <button
                    className="bg-black text-white p-5 font-bold text-2xl mt-20"
                    onClick={() => {
                      setReservation((prev) => !prev);
                    }}
                  >
                    예약하기
                  </button>
                </div>
              </div>
            </div>

            <footer className="text-[20px] mt-20 pb-[200px]">
              © dasomsong 2023
            </footer>
          </div>
        ) : (
          <div className="flex flex-col items-center w-6/12 mt-36 text-xl">
            <h1 className="mt-10 w-full flex">
              <Image
                src={Relationshiptherapy}
                className="w-1/3 "
                alt="Relationshiptherapy"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center">
                <span className="w-full block text-[30px] font-semibold">
                  Relationship Therapy
                </span>
                <span className="w-full block text-[22px] mt-3">
                  Rediscover trust, friendship, intimacy, passion, and joy with
                  your loved ones.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                Relationship therapy is a medical approach developed to address
                the increasing relationship issues and divorce rates in modern
                society. This therapy focuses on manipulating memories and
                restoring relationships, developed considering the statistical
                severity of relationship problems. Throughout the treatment
                process, patients reorganize negative relationship memories,
                regulate emotions, and learn effective communication skills.
                Through this, the therapy aims to improve the quality of
                relationships for the patients, helping them build healthier and
                more resilient connections by easing conflicts. Selective memory
                manipulation is primarily verified through brain imaging to
                ensure there are no issues during the procedure. It involves
                comparing existing memories with memories after the procedure
                through &apos;memory equivalence testing&apos; which is
                conducted after passing this process.
              </span>
              <div className="mt-10">
                <span>
                  Recommended for individuals in the following situations:
                </span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>
                    Friends, partners, or family members in need of relationship
                    improvement
                  </li>

                  <li>
                    Couples considering divorce but having a willingness to work
                    on their relationship
                  </li>
                </ul>
                <span className="mt-10 block">
                  * Relationship therapy through selective memory manipulation
                  is an FDA-approved treatment, utilizing the CE certified
                  electric stimulation device from the NET-X8 series.
                  Relationship therapy is conducted in group sessions, and
                  treatment is available for groups consisting of two or more
                  individuals with relationship issues.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">
                    Relationship Therapy Process
                  </span>
                  First, memories are digitized. Then, specific memories of a
                  particular drug form are formed digitally, and electrical
                  stimulation is applied to the area where the memory will be
                  transferred. Consequently, new synapses form between nerve
                  cells, creating past memories of the medication.
                </span>

                {qeustionNAnswoerEng.map((value, index) => {
                  return (
                    <div key={index} className="mt-10 block">
                      <span>{`${value.question}`}</span>
                      <div className="field-row mt-3">
                        <textarea
                          id="text17"
                          value={value.answer}
                          className="w-full h-[180px] text-base font-bold"
                        />
                      </div>
                    </div>
                  );
                })}

                <div className="flex justify-center">
                  <button
                    className="bg-black text-white p-5 font-bold text-2xl mt-20"
                    onClick={() => {
                      setReservation((prev) => !prev);
                    }}
                  >
                    reservation
                  </button>
                </div>
              </div>
            </div>

            <footer className="text-[20px] mt-20 pb-[200px]">
              © dasomsong 2023
            </footer>
          </div>
        )}
      </WebLayout>
    </main>
  );
}

const qeustionNAnswoerKor = [
  {
    question: "Q1. 수술 전 준비해야할 사항이 있나요?",
    answer:
      "본 센터의 [예약하기]를 통해 예약일정을 잡으셨다면, 실제 시술일로부터 일주일 전까지 MM코드를 받아 예약일정을 확정하시기 바랍니다. 예약일정이 확정되지 않을 경우, 구매가 취소되며 기억 시술을 할 수 없게 됩니다.",
  },
  {
    question: "Q2. 치료 제외 대상은 어떻게 되나요?",
    answer:
      "1. 뇌 영상 촬영을 위한 조영제에 금기증이 있는자 \n2. 시술 시점 6개월 이내에 질병 혹은 사고로 인하여 뇌의 실질에 손상이 생긴 환자 \n3. 시술 시점 6개월 이내에 뇌에 관련된 암을 진단받았거나 암에 대한 치료를 받을 경우, 재발성혹은 전이성 암이 있는 것이 확인된 자 \n4. 이 외의 사유로 선택적 기억 제거 시술에 적합하지 않다고 판단되는 경우",
  },
  {
    question: "Q3. 수술 이후 주의해야 할 사항이 있나요?",
    answer:
      "수술이 끝난 직후부터 약 72시간 동안 메스꺼움, 식욕부진, 미열 등의 부작용이 생길 수 있습니다. 이는 정상적인 면역반응의 일환으로 위와 같은 부작용이 일주일 이상 지속될 경우 조속히 병원을 방문하시기 바랍니다.",
  },
];

const qeustionNAnswoerEng = [
  {
    question: "Q1. Are there any preparations required before the surgery?",
    answer:
      "If you&apos;ve scheduled an appointment through our [reservation] feature, please make sure to receive an MM code to confirm your appointment at least one week before the actual procedure date. Failure to confirm your appointment will result in cancellation, and memory manipulation cannot proceed.",
  },
  {
    question: "Q2. Who is not eligible for surgery?",
    answer:
      "1. Individuals allergic to the contrast agent used for brain imaging.\n2. Patients who have suffered brain damage within the last 6 months due to illness or accidents.\n3. Patients diagnosed with brain-related cancer or receiving treatment within the last 6 months, with confirmed recurrent or metastatic cancer.\n4. Individuals deemed unsuitable for selective memory removal for other reasons.",
  },
  {
    question: "Q3. What precautions should be taken after the surgery?",
    answer:
      "Side effects such as nausea, loss of appetite, and low-grade fever may occur within the first 72 hours after surgery. These are normal immune responses. If such side effects persist for more than a week, please visit the hospital promptly.",
  },
];
