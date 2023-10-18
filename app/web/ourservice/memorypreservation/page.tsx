"use client";

import Image from "next/image";
import MemoryPreservation from "../../../../public/textures/ourService/Memory Preservation.png";
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
                src={MemoryPreservation}
                className="w-1/3 "
                alt="MemoryPreservation"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center">
                <span className="w-full block text-[30px] font-semibold">
                  기억 보존
                </span>
                <span className="w-full block text-[22px] mt-3">
                  당신의 소중한 순간을 세상에서 제일 큰 기억 보관소에
                  저장해보세요.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                더 이상 현대 인류의 역사를 가르쳐주기 위한 퍼포먼스는 필요 없을
                것입니다. 실제 기억 저장소에 저장된 기억을 꺼내서 직접 보여주면
                되기 때문입니다. 삶은 잠깐이지만, 잠시나마 밝았던 불빛들이
                꺼져가기 전에 이 세계에서 제일 큰 기억 저장소에 저장될 수
                있습니다. 떠나보내야 했던 이들을 추억하고, 저장하고 싶은
                기억들을 저장하여 미래에 다시금 되돌아볼 수 있는 기회를 놓치지
                마세요. 스페인의 가수 세바스티안 모야 (53)의 히트곡 &apos;La
                bachata&apos;는 5년 전 자신이 저장했던 기억 보존을 통해
                잊어버렸던 악상을 토대로 만든 것 으로 유명합니다. 기억 저장은
                기본적으로 뇌 영상 촬영을 통해 시술 시 문제가 될 만한 상황이
                없는지 확인한 후 시행됩니다.
              </span>
              <div className="mt-10">
                <span>이런 분들에게 추천합니다:</span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>임종을 앞두고 계신 분</li>

                  <li>
                    현재는 중요하지 않으나, 미래에 중요할 것 같은 기억을 갖고
                    계신 분
                  </li>
                  <li>이 외에 지금의 기억을 소중하게 간직하고 싶으신 분</li>
                </ul>
                <span className="mt-10 block">
                  * 기억 보존은 세계에서 제일 큰 기억 보관소인 Savannah Memory
                  Library에 정식으로 보관되며, 본인의 동의 없이 타인이 절대
                  열람할 수 없습니다. 기억 디지털화는 CE 인증을 받은 전기 자극
                  기계인 NET-X8 시리 즈를 사용합니다.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">
                    기억 보존 시술 과정
                  </span>
                  우선 기억을 디지털화시킵니다. 이후 Savannah Memory Library에
                  기억을 업로드하여, 해당 기억을 보관소에 등록시킵니다. 보관된
                  기억은 지정된 센터 내에서만 본인 또는 본인의 동의를 받은
                  대상자가 열람할 수 있 게 됩니다. 데이터를 외부망으로 전송할
                  경우, 정부에 신고하여 합법적인 절차를 통해 전송하실 수
                  있습니다.
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
                src={MemoryPreservation}
                className="w-1/3 "
                alt="MemoryPreservation"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center">
                <span className="w-full block text-[30px] font-semibold">
                  Memory Preservation
                </span>
                <span className="w-full block text-[22px] mt-3">
                  Preserve your precious moments in the world&apos;s largest
                  memory repository.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                There won&apos;t be a need for performances to teach the history
                of modern humanity anymore. The memories stored in the actual
                memory repository can be retrieved and shown directly. Life is
                brief, but the moments of brightness can be stored in the
                world&apos;s largest memory repository before they fade away.
                Remember those you had to say goodbye to and store the memories
                you want to keep for the future, offering yourself a chance to
                revisit them. The hit song &apos;La bachata&apos; by Spanish
                singer Sebastian Moya (53) is famous for being created from the
                forgotten tunes he saved through memory preservation five years
                ago. Memory preservation is fundamentally verified through brain
                imaging to ensure there are no issues during the procedure.
              </span>
              <div className="mt-10">
                <span>
                  Recommended for individuals in the following situations:
                </span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>Individuals facing impending mortality</li>

                  <li>
                    Those who possess memories currently not significant but may
                    become valuable in the future
                  </li>
                  <li>
                    Others who cherish their current memories and want to
                    preserve them
                  </li>
                </ul>
                <span className="mt-10 block">
                  * Memory preservation is officially stored in the Savannah
                  Memory Library, the world&apos;s largest memory repository,
                  and cannot be accessed by others without your consent. Memory
                  digitization utilizes the CE certified electric stimulation
                  device from the NET-X8 series.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">
                    Memory Preservation Process
                  </span>
                  First, memories are digitized. Then, memories are uploaded to
                  the Savannah Memory Library and registered in the repository.
                  Preserved memories can be accessed only by the individual or
                  authorized individuals within the designated center. If you
                  need to transmit data over external networks, you can report
                  it to the government and legally proceed with the transfer.
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
