"use client";

import Image from "next/image";
import mainPhoto from "../../../../public/textures/ourService/Memory Recovery.png";
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
          <div className="flex flex-col items-center lg:w-6/12 lg:mt-36 lg:text-xl zero:w-9/12 zero:mt-20 zero:text-base">
            <h1 className="mt-10 w-full flex lg:flex-row zero:flex-col zero:items-center">
              <Image
                src={mainPhoto}
                className="lg:w-1/3 zero:w-3/4 "
                alt="mainPhoto"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center lg:mt-0 zero:mt-7">
                <span className="w-full block text-[30px] font-semibold">
                  기억 복구
                </span>
                <span className="w-full block lg:text-[22px] zero:text-[20px] mt-3">
                  어제 당신이 잃어버린 에어팟의 위치가 기억이 안나신다면, 이제는
                  찾을 수 있습니다.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                독일의 심리학자 헤르만 에빙하우스의 망각 곡선 이론에 의하면,
                우리는 무언가를 학습했을 때 20분만 지나 도 해당 기억을 58%,
                하루가 지나면 33%, 한달이 지나면 21% 정도 밖에 기억하지
                못합니다. 실제 선택적 기억 복구로 인해 소실 될 뻔했던 재화들의
                양이 약 5분의 1로 절감되었다는 연구결과가 존재하며, 현재 예술,
                범죄 수사 등의 영역에 접목되어 활발하게 활용되고 있습니다.
                선택적 기억 복구는 기본적으로 뇌 영상 촬영을 통해 시술 시 문제가
                될 만한 상황이 없는지 확인한 후 기존의 기억과 시술 이후의 기억을
                대조하여 &apos;기억 동등성 시험평가&apos;를 거쳐 이를 통과한
                이후에 시행됩니다.
              </span>
              <div className="mt-10">
                <span>이런 분들에게 추천합니다:</span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>잃어버렸던 기억을 되찾고 싶은 분</li>
                  <li>정신적 질환을 극복하고자 하는 환자</li>
                </ul>
                <span className="mt-10 block">
                  *선택적 기억 복구는 FDA 정식 승인이 된 시술이며, CE 인증을
                  정식으로 받은 전기 자극 기계인 NET-X8 시 리즈를 사용합니다.
                  기억 복구는 실제 존재하는 기억을 선명하게 만들어 주는 시술로,
                  아예 존재하지 않는 기억에 대해서는 복구할 수 없습니다.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">기억 복구 과정</span>
                  우선 기억을 디지털화시킵니다. 이후 디지털 상으로 미세한 기억이
                  위치하는 부위를 뇌에 적용시켜 약한 전 기 자극을 줍니다.
                  신경세포 사이의 시냅스가 자극을 얻어 소생 되며, 이전의 해당
                  기억을 복구하게 됩니다.
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
          <div className="flex flex-col items-center lg:w-6/12 lg:mt-36 lg:text-xl zero:w-9/12 zero:mt-20 zero:text-base">
            <h1 className="mt-10 w-full flex lg:flex-row zero:flex-col zero:items-center">
              <Image
                src={mainPhoto}
                className="lg:w-1/3 zero:w-3/4 "
                alt="mainPhoto"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center lg:mt-0 zero:mt-7">
                <span className="w-full block text-[30px] font-semibold">
                  Memory Recovery
                </span>
                <span className="w-full block lg:text-[22px] zero:text-[20px] mt-3">
                  Recall the memory of your AirPods location that you forgot
                  yesterday.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                According to the forgetting curve theory by German psychologist
                Hermann Ebbinghaus, we can remember only about 58% of something
                we&apos;ve learned after 20 minutes, 33% after a day, and only
                21% after a month. Research shows that the amount of lost
                belongings that could have been forgotten but were retrieved
                through selective memory retrieval has been reduced to
                approximately one-fifth of what it used to be. This technique is
                actively applied in various fields such as art restoration,
                criminal investigations, and more. Selective memory retrieval is
                a procedure conducted after ensuring there are no potential
                issues during the surgery through brain imaging and passing a
                &apos;memory equivalence test.&apos;
              </span>
              <div className="mt-10">
                <span>
                  Recommended for individuals in the following situations:
                </span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>Those who want to recover lost memories.</li>

                  <li>Patients aiming to overcome mental disorders.</li>
                </ul>
                <span className="mt-10 block">
                  *Selective memory retrieval is an FDA-approved procedure that
                  uses the CE-certified electrical stimulation machine NET-X8
                  series. Memory retrieval is a procedure that enhances existing
                  memories, and it cannot recover memories that do not exist.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">
                    Memory Recovery Process
                  </span>
                  First, memories are digitized. Then, small areas in the brain
                  where faint memories reside are stimulated with mild
                  electrical impulses applied digitally. Synapses between nerve
                  cells are stimulated, leading to the recovery of the targeted
                  memories.
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
    question: "Q2. Who is not eligible for surgery?",
    answer:
      "1. 뇌 영상 촬영을 위한 조영제에 금기증이 있는자 \n2. 시술 시점 6개월 이내에 질병 혹은 사고로 인하여 뇌의 실질에 손상이 생긴 환자 \n3. 시술 시점 6개월 이내에 뇌에 관련된 암을 진단받았거나 암에 대한 치료를 받을 경우, 재발성혹은 전이성 암이 있는 것이 확인된 자 \n4. 이 외의 사유로 선택적 기억 복구 시술에 적합하지 않다고 판단되는 경우",
  },
  {
    question: "Q3. 수술 이후 주의해야 할 사항이 있나요?",
    answer:
      "수술이 끝난 직후부터 약 72시간 동안 메스꺼움, 식욕부진, 미열 등의 부작용이 생길 수 있습니다. 이는 정상적인 면역반응의 일환으로 위와 같은 부작용이 일주일 이상 지속될 경우 조속히 병원을 방문하시기 바랍니다. ",
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
