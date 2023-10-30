"use client";

import Image from "next/image";
import PlaceboEffect from "../../../../public/textures/ourService/Placebo Effect.png";
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
          <div className="flex flex-col items-center lg:w-6/12 xl:mt-[280px] lg:mt-36 lg:text-xl zero:w-9/12 zero:mt-20 zero:text-base">
            <h1 className="mt-10 w-full flex lg:flex-row zero:flex-col zero:items-center">
              <Image
                src={PlaceboEffect}
                className="lg:w-1/3 zero:w-3/4 "
                alt="ArtificialHippocampus"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center lg:mt-0 zero:mt-7">
                <span className="w-full block text-[30px] font-semibold">
                  플라시보 효과
                </span>
                <span className="w-full block lg:text-[22px] zero:text-[20px] mt-3">
                  속임수가 아닙니다. 실제로 약에 대한 당신의 기억을 바탕으로 한
                  것입니다. <br />
                  복용하는 모든 약물에 플라시보 효과를 만들어 드릴 수 있습니다.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                인류는 모든 질병을 아직 정복하지 못했으며, 약물 또한
                마찬가지입니다. 일부 환자들은 내성이 생기거나 심각한
                이상반응으로 더 이상 약으로부터 효과를 기대하지 못하는 경우가
                생깁니다. 현재까지 적절한 치료제가 나오지 않은 난치병이나
                불치병은 약물에 기댈 수 조차 없습니다.
                <br /> 이때 우리는 적절한 플라시보 효과를 통해 환자의 증상을
                개선시킬 수 있는 접근법을 고려할 필요가 있습니다. 플라시보
                효과는 실제 치료 효과 와 상호작용하며, 때로는 심리학적 및
                생리학적인 변화를 유발합니다. 선택적 기억 조작은 기본적으로 뇌
                영상 촬영을 통해 시술 시 문제가 될 만한 상황이 없는지 확인한 후
                기존의 기억과 시술 이후의 기억을 대조 하여 ‘기억 동등성
                시험평가’를 거쳐 이를 통과한 이후에 시행됩니다.
              </span>
              <div className="mt-10">
                <span>이런 분들에게 추천합니다:</span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>약물로 인한 치료효과를 기대하기 어려운 분</li>

                  <li>약 제형에 대한 트라우마가 있는 어린 아이 또는 환자</li>
                </ul>
                <span className="mt-10 block">
                  * 플라시보 효과 시술은 FDA 정식 승인이 된 시술이며, CE 인증을
                  정식으로 받은 전기 자극 기계인 NET-X8 시리즈를 사용합니다.
                </span>
                <span className="mt-10 font-semibold block">
                  플라시보 효과 시술 과정
                </span>
                <span className="mt-1 block">
                  우선 기억을 디지털화시킵니다. 이후 디지털 상으로 특정 약
                  제형에 대한 기억을 형성하여 기억을 이식할 부위에 전기 자극을
                  줍니다. 이에 따라 신경세포 사이에 새로운 시냅스가 형성되며,
                  약에 대한 과거의 기억이 생성됩니다.
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
          <div className="flex flex-col items-center lg:w-6/12 xl:mt-[280px] lg:mt-36 lg:text-xl zero:w-9/12 zero:mt-20 zero:text-base">
            <h1 className="mt-10 w-full flex lg:flex-row zero:flex-col zero:items-center">
              <Image
                src={PlaceboEffect}
                className="lg:w-1/3 zero:w-3/4 "
                alt="ArtificialHippocampus"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center lg:mt-0 zero:mt-7">
                <span className="w-full block text-[30px] font-semibold">
                  Placebo Effect
                </span>
                <span className="w-full block lg:text-[22px] zero:text-[20px] mt-3">
                  This is not deception. It is based on your actual memories of
                  the medication. We can induce a placebo effect in all drugs
                  you take, relying on your memory of the drug.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                Humanity has not yet conquered all diseases, and the same goes
                for medications. Some patients develop resistance or no longer
                expect effects from drugs due to severe adverse reactions. For
                rare and incurable diseases where appropriate treatments have
                not yet been discovered, patients cannot rely on drugs anymore.
                In such cases, it is necessary to consider an approach that can
                improve patients&apos; symptoms through an appropriate placebo
                effect. The placebo effect interacts with actual therapeutic
                effects, sometimes triggering psychological and physiological
                changes. Selective memory manipulation is fundamentally verified
                through brain imaging to ensure there are no issues during the
                procedure. It involves comparing existing memories with memories
                after the procedure through &quot;memory equivalence
                testing&quot; which is conducted after passing this process.
              </span>
              <div className="mt-10">
                <span>
                  Recommended for individuals in the following situations:
                </span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>
                    Who find it challenging to expect therapeutic effects from
                    medications
                  </li>

                  <li>Children or patients traumatized by medication forms</li>
                </ul>
                <span className="mt-10 block">
                  *Placebo effect procedures are FDA-approved, utilizing the
                  NET-X8 series, an electric stimulation device certified with
                  CE marking.
                </span>
                <span className="mt-10 font-semibold block">
                  Placebo Effect Process
                </span>
                <span className="mt-1 block">
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
    question: "Q1. 수술 전 준비해야할 사항이 있나요? ",
    answer:
      "본 센터의 [예약하기]를 통해 예약일정을 잡으셨다면, 실제 시술일로부터 일주일 전까지 MM코드를 받아 예약일정을 확정하시기 바랍니다. 예약일정이 확정되지 않을 경우, 구매가 취소되며 기억 시술을 할 수 없게 됩니다.",
  },
  {
    question: "Q2. 치료 제외 대상은 어떻게 되나요? ",
    answer:
      "1. 뇌 영상 촬영을 위한 조영제에 금기증이 있는자 \n2. 시술 시점 6개월 이내에 질병 혹은 사고로 인하여 뇌의 실질에 손상이 생긴 환자 \n3. 시술 시점 6개월 이내에 뇌에 관련된 암을 진단받았거나 암에 대한 치료를 받을 경우, 재발성혹은 전이성 암이 있는 것이 확인된 자 \n4. 이 외의 사유로 선택적 기억 조작 시술에 적합하지 않다고 판단되는 경우",
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
      "If you've scheduled an appointment through our [reservation] feature, please make sure to receive an MM code to confirm your appointment at least one week before the actual procedure date. Failure to confirm your appointment will result in cancellation, and memory recovery cannot proceed.",
  },
  {
    question: "Q2. Who is not eligible for surgery?",
    answer:
      "1. Individuals allergic to the contrast agent used for brain imaging. \n2. Patients who have suffered brain damage within the last 6 months due to illness or accidents. \n3. Patients diagnosed with brain-related cancer or receiving treatment within the last 6 months, with confirmed recurrent or metastatic cancer. \n4. Individuals deemed unsuitable for selective memory recovery for other reasons.",
  },
  {
    question: "Q3. Who is not eligible for treatment?",
    answer:
      "Side effects such as nausea, loss of appetite, and low-grade fever may occur within the first 72 hours after surgery. These are normal immune responses. If such side effects persist for more than a week, please visit the hospital promptly.",
  },
];
