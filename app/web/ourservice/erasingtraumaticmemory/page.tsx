"use client";

import Image from "next/image";
import mainPhoto from "../../../../public/textures/ourService/Erasing Traumatic Memory.png";
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
                src={mainPhoto}
                className="w-1/3 "
                alt="ArtificialHippocampus"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center">
                <span className="w-full block text-[30px] font-semibold">
                  트라우마 기억 지우기
                </span>
                <span className="w-full block text-[22px] mt-3">
                  매일 밤 가슴이 찢어지는 악몽을 꾸나요? 더 이상의 고통은 그만,
                  지금 지우세요.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                과거에 갖고 있던 기억 중 트라우마가 되어 현재 삶에 영향을
                끼친다면, 그것은 큰 문제입니다. 세계 청장년층의 89.9%가
                트라우마를 경험한 적이 있으며, 미국의 대통령 로널드 블런트는
                기억조작을 통해 트라우마를 극복하지 못했다면 지금 이 자리에 있지
                못했을 것이라고 인터뷰에서 밝힌 바 있습니다. 선택적 기억 제거는
                기본적으로 뇌 영상 촬영을 통해 시술 시 문제가 될 만한 상황이
                없는지 확인한 후 기존의 기억과 시술 이후의 기억을 대조하여
                &apos;기억 동등성 시험평가&apos;를 거쳐 이를 통과한 이후에
                시행됩니다.
              </span>
              <div className="mt-10">
                <span>이런 분들에게 추천합니다:</span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>심리적 외상으로 인하여 현재 삶에 지장을 받는 분</li>

                  <li>트라우마 혹은 정신적 질환을 극복하고자 하는 환자</li>
                </ul>
                <span className="mt-10 block">
                  *트라우마 기억 제거는 FDA 정식 승인이 된 시술이며, CE 인증을
                  정식으로 받은 전기 자극 기계인 NET-X8 시리즈를 사용합니다.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">
                    트라우마 기억 제거 과정
                  </span>
                  우선 기억을 디지털화시킵니다. 이후 디지털 상으로 원치 않는
                  기억이 위치하는 부위를 뇌에 적용시켜 전기 자극을 줍니다.
                  신경세포 사이의 시냅스가 파괴되며, 이전의 해당 기억을 망각하게
                  됩니다.
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
                src={mainPhoto}
                className="w-1/3 "
                alt="ArtificialHippocampus"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center">
                <span className="w-full block text-[30px] font-semibold">
                  Erasing Traumatic Memory
                </span>
                <span className="w-full block text-[22px] mt-3">
                  Having a deadly nightmare every night? Stop ruining your life.
                  Just erase it!
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                If a past memory has turned into trauma and is affecting your
                current life, it&apos;s a significant issue. According to the
                World Health Organization, 89.9% of young adults worldwide have
                experienced trauma, and in an interview, former US President
                Ronald Blunt revealed that if he hadn&apos;t overcome his trauma
                through memory manipulation, he wouldn&apos;t be where he is
                today. Selective memory removal is a procedure conducted after
                ensuring there are no potential issues during the surgery
                through brain imaging and passing a &apos;memory equivalence
                test&apos; by comparing existing memories with those after the
                procedure.
              </span>
              <div className="mt-10">
                <span>
                  Recommended for individuals in the following situations:
                </span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>
                    Those whose current life is impacted by psychological
                    trauma.
                  </li>

                  <li>
                    Patients aiming to overcome trauma or mental disorders.
                  </li>
                </ul>
                <span className="mt-10 block">
                  *Trauma memory erasure is an FDA-approved procedure that uses
                  the CE-certified electrical stimulation machine NET-X8 series.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">
                    Trauma Memory Erasure Process
                  </span>
                  First, memories are digitized. Then, unwanted memories&apos;
                  locations in the brain are identified digitally, and
                  electrical stimulation is applied to these areas. Synapses
                  between nerve cells are disrupted, leading to the forgetting
                  of the targeted memories.
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
      "수술이 끝난 직후부터 약 72시간 동안 메스꺼움, 식욕부진, 미열 등의 부작용이 생길 수 있습니다. 이는 정상적인 면역반응의 일환으로 위와 같은 부작용이 일주일 이상 지속될 경우 조속히 병원을 방문하시기 바랍니다. ",
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
