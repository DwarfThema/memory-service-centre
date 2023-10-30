"use client";

import Image from "next/image";
import mainPhoto from "../../../../public/textures/ourService/Memory Booster.png";
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
          <div className="flex flex-col items-center md:w-6/12 xl:mt-[280px] md:mt-36 md:text-xl zero:w-9/12 zero:mt-20 zero:text-base">
            <h1 className="mt-10 w-full flex md:flex-row zero:flex-col zero:items-center">
              <Image
                src={mainPhoto}
                className="md:w-1/3 zero:w-3/4 "
                alt="mainPhoto"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center md:mt-0 zero:mt-7">
                <span className="w-full block text-[30px] font-semibold">
                  기억 부스터
                </span>
                <span className="w-full block md:text-[22px] zero:text-[20px] mt-3">
                  단기 기억력을 향상시킵니다. 이것은 당신을 세계 기억 챔피언으로
                  만들 수 있습니다.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                컴퓨터, 스마트폰 등에 둘러싸인 현대인들은 디지털 기기에 대한
                높은 의존도 때문에 언어, 기억, 지능, 의식 등의 감퇴를 경험하고
                있으며, 이른바 디지털 치매라는 용어가 대두되고 있습니다.
                정신의학적 관점에서 이를 별도의 질환으로 분류하고 있지는 않지만,
                실제 청장년층 사이에서 조기 치매를 유발할 수도 있다는 연구결과가
                나오고 있습니다. 기억 부스터를 통해 감퇴된 기억력을 전반적으로
                부스트 할 수 있으며, 실제 삶의 질이나 치매 환자들을 대상으로 98%
                증상 개선이 일어난다는 임상적 결과가 존재합니다. 선택적 기억
                복구는 기본적으로 뇌 영상 촬영을 통해 시술 시 문제가 될 만한
                상황이 없는지 확인한 후 시행됩니다.
              </span>
              <div className="mt-10">
                <span>이런 분들에게 추천합니다:</span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>기억력에 문제가 있어 일상생활에 지장이 있는 분</li>

                  <li>
                    정신의학적으로 기억과 관련된 질병 판정을 받아 증상 개선을
                    원하는 분
                  </li>

                  <li>더 나은 학습력을 가지고 싶은 분</li>
                </ul>
                <span className="mt-10 block">
                  *기억 부스터는 FDA 정식 승인이 된 시술이며, CE 인증을 정식으로
                  받은 전기 자극 기계인 NET-X8 시리즈를 사용합니다.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">
                    기억 부스트 과정
                  </span>
                  변연계에 간단한 전기자극을 30분-1시간 정도 주어 신경세포의
                  기능을 향상 시키는 시술입니다.
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
          <div className="flex flex-col items-center md:w-6/12 xl:mt-[280px] md:mt-36 md:text-xl zero:w-9/12 zero:mt-20 zero:text-base">
            <h1 className="mt-10 w-full flex md:flex-row zero:flex-col zero:items-center">
              <Image
                src={mainPhoto}
                className="md:w-1/3 zero:w-3/4"
                alt="mainPhoto"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center md:mt-0 zero:mt-7">
                <span className="w-full block text-[30px] font-semibold">
                  Memory Booster
                </span>
                <span className="w-full block md:text-[22px] zero:text-[20px] mt-3">
                  Improve your short-term memory. It can make you the world
                  memory champion.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                Modern individuals surrounded by computers, smartphones, and
                other digital devices are experiencing a decline in language,
                memory, intelligence, consciousness, and more due to high
                dependence on digital technology. The term &quot;digital
                dementia&quot; has emerged to describe this phenomenon. While it
                is not classified as a separate condition from a psychiatric
                perspective, research suggests that it could potentially lead to
                early-onset dementia among young adults. Memory boosters can
                improve overall memory that has declined, and clinical results
                show a 98% symptom improvement among dementia patients.
                Selective memory retrieval is performed after ensuring there are
                no potential issues during the surgery through brain imaging.
              </span>
              <div className="mt-10">
                <span>
                  Recommended for individuals in the following situations:
                </span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>Those with memory issues affecting daily life.</li>

                  <li>
                    Individuals seeking symptom improvement due to
                    memory-related psychiatric conditions.
                  </li>

                  <li>Those who want to enhance their learning abilities.</li>
                </ul>
                <span className="mt-10 block">
                  *Memory Booster is an FDA-approved procedure that uses the
                  CE-certified electrical stimulation machine NET-X8 series.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">
                    Memory Booster Process
                  </span>
                  This procedure involves providing brief electrical stimulation
                  to the cerebral cortex for approximately 30 minutes to 1 hour
                  to enhance the function of nerve cells.
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
      "1. 뇌 영상 촬영을 위한 조영제에 금기증이 있는자 \n2. 시술 시점 6개월 이내에 질병 혹은 사고로 인하여 뇌의 실질에 손상이 생긴 환자 \n3. 시술 시점 6개월 이내에 뇌에 관련된 암을 진단받았거나 암에 대한 치료를 받을 경우, 재발성혹은 전이성 암이 있는 것이 확인된 자 \n4. 이 외의 사유로 선택적 기억 부스터 시술에 적합하지 않다고 판단되는 경우",
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
      "If you've scheduled an appointment through our [reservation] feature, please make sure to receive an MM code to confirm your appointment at least one week before the actual procedure date. Failure to confirm your appointment will result in cancellation, and memory surgery cannot proceed.",
  },
  {
    question: "Q2. Who is not eligible for surgery?",
    answer:
      "1. Individuals allergic to the contrast agent used for brain imaging. \n2. Patients who have suffered brain damage within the last 6 months due to illness or accidents. \n3. Patients diagnosed with brain-related cancer or receiving treatment within the last 6 months, with confirmed recurrent or metastatic cancer. \n4. Individuals deemed unsuitable for selective memory surgery for other reasons.",
  },
  {
    question: "Q3. What precautions should be taken after the surgery?",
    answer:
      "Side effects such as nausea, loss of appetite, and low-grade fever may occur within the first 72 hours after surgery. These are normal immune responses. If such side effects persist for more than a week, please visit the hospital promptly.",
  },
];
