"use client";

import Image from "next/image";
import mainPhoto from "../../../../public/textures/ourService/Artificial hippocampus.png";
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
                  인공해마
                </span>
                <span className="w-full block text-[22px] mt-3">
                  기억을 저장하고 탑재합니다. 당신은 기존과 다른 성격을 갖게 될
                  수도 있습니다.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                인공해마는 인지와 관련된 보철물의 일종으로, 기억과 학습을
                관장하는 해마의 실질적인 신경세포를 대체합니다. 이를 통해, 기억
                중추를 새롭게 장착함으로써 이전에 없던 기억 혹은 정보에 대한
                학습이 가능합니다. 인공해마 수술은 기본적으로 뇌 영상 촬영을
                통해 수술 시 문제가 될 만한 상황이 없는지 확인한 후, 기존의
                기억을 백업하여 ‘기억 동등성 시험평가’를 거쳐 이를 통과한 이후에
                시행됩니다.
              </span>
              <div className="mt-10">
                <span>이런 분들에게 추천합니다:</span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>사고 혹은 질병으로 인해 기억중추에 손상이 생긴 환자</li>

                  <li>트라우마 혹은 정신적 질환을 극복하고자 하는 환자</li>
                </ul>
                <span className="mt-10 block">
                  인공해마 이식은 FDA 정식 승인이 된 시술이며, CE 의료기기
                  인증을 받은 인공해마 기기를 사용하여 안전하게 시술됩니다.
                </span>
                <span className="mt-10 font-extrabold block">
                  인공해마 이식 과정
                </span>
                <span className="mt-1 block">
                  두부 절개 이후, 기존 해마를 제거하고 인공해마를 해당 부위에
                  이식합니다. 이식이 완료되면 절개 되었던 두부를 닫고
                  봉합합니다. 이후, 72시간 동안 인지 기능, 보행, 섭식 등을 본
                  센터에서 스크리닝 하면서 문제가 없는지 추적 관찰합니다.
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
                  Artificial Hippocampus
                </span>
                <span className="w-full block text-[22px] mt-3">
                  Save and mount your memories. You may get quite different
                  personality.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                Artificial hippocampus, a type of prosthesis related to
                cognition, replaces the functional nerve cells of the
                hippocampus responsible for memory and learning. Through this,
                the ability to learn about previously nonexistent memories or
                information becomes feasible by installing a new memory center.
                The surgical procedure for the artificial hippocampus involves
                initially verifying through brain imaging that there are no
                problematic conditions for the surgery. After backing up the
                existing memories and passing them through a ‘Memory Equivalence
                Assessment’, the surgery is conducted.
              </span>
              <div className="mt-10">
                <span>
                  Recommended for individuals in the following situations:
                </span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>
                    Patients with damage to the memory center due to accidents
                    or illnesses.{" "}
                  </li>

                  <li>
                    Patients seeking to overcome trauma or mental disorders.
                  </li>
                </ul>
                <span className="mt-10 block">
                  The artificial hippocampal transplantation is an FDA-approved
                  procedure that employs an artificial hippocampal device
                  certified with CE medical device approval. Therefore, it is
                  performed safely.
                </span>
                <span className="mt-10 font-semibold block">
                  Process of Artificial Hippocampal Transplantation
                </span>
                <span className="mt-1 block">
                  Following cranial incision, the existing hippocampus is
                  removed, and the artificial hippocampus is transplanted into
                  the respective area. Once the transplantation is completed,
                  the incised cranial area is closed and sutured. Subsequently,
                  over a period of 72 hours, cognitive functions, mobility, and
                  eating habits are screened and observed at the centre to
                  monitor for any issues.
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
    question: "Q2. 이전의 실제 해마에 있던 기억들은 어떻게 되나요?",
    answer:
      "기존 해마에 있던 이전 기억들은 별도의 시스템으로 업로드 되며, 희망하실 경우 별도의 인공해마에 업로드 해드릴 수 있습니다. 다만, 기억 관련 법령 상, 질병이나 사고로 인한 기억 오류 혹은 인지적 판단이 불가한 경우를 제외하고 본인 기억의 50% 이상을 바꾸게 되는 것은 위법행위로 간주되므로, 수술 이후 다시 기존의 인공해마로 재장착을 희망하는 경우 꼭 기억 동등성 테스트를 진행한 이후 문제가 없는 상태에서 진행하시기 바랍니다.",
  },
  {
    question: "Q3. 치료 제외 대상은 어떻게 되나요? ",
    answer:
      "1. 뇌 영상 촬영을 위한 조영제에 금기증이 있는자 \n2. 시술 시점 6개월 이내에 질병 혹은 사고로 인하여 뇌의 실질에 손상이 생긴 환자 \n3. 시술 시점 6개월 이내에 뇌에 관련된 암을 진단받았거나 암에 대한 치료를 받을 경우, 재발성 혹은 전이성 암이 있는 것이 확인된 자 \n4. 이 외의 사유로 인공해마 시술에 적절하지 않다고 판단되는 경우",
  },
  {
    question: "Q4. 수술 이후 주의해야 할 사항이 있나요?",
    answer:
      "수술이 끝난 직후부터 약 72시간 동안 메스꺼움, 식욕부진, 미열 등의 부작용이 생길 수 있습니다. 이는 정상적인 면역반응의 일환으로 위와 같은 부작용이 일주일 이상 지속될 경우 조속히 병원을 방문하시기 바랍니다. \n\n또한, 본인의 기억이 바뀌었기 때문에 테세우스증후군 혹은 자아부정증후군 등이 발생할 수 있습니다. 위 질환들은 본인의 기억과 인격이 새롭게 자리잡는 과정에서 일어날 수 있는 흔한 경우이나, 문제가 될 경우 근처 병원을 방문하시기를 권합니다.",
  },
];

const qeustionNAnswoerEng = [
  {
    question: "Q1. Are there any preparations required before the surgery?",
    answer:
      "If you've scheduled an appointment through our [reservation] feature, please make sure to receive an MM code to confirm your appointment at least one week before the actual procedure date. Failure to confirm your appointment will result in cancellation, and memory recovery cannot proceed.",
  },
  {
    question:
      "Q2. What happens to the memories that were in the original hippocampus?",
    answer:
      "The memories previously stored in the original hippocampus are uploaded into a separate system, and if desired, can be transferred to the artificial hippocampus. However, altering more than 50% of one's own memories, except in cases where memory errors result from accidents or when cognitive judgement is impaired, is considered illegal due to memory-related regulations. If you intend to revert to the original artificial hippocampus after the surgery, it's imperative to undergo the memory equivalence test and proceed only if no issues arise.",
  },
  {
    question: "Q3. Who is not eligible for treatment?",
    answer:
      "1.  Individuals allergic to the contrast agent used for brain imaging.\n2. Patients who have suffered brain damage within the last 6 months due to illness or accidents. \n3. Patients diagnosed with brain-related cancer or receiving treatment within the last 6 months, with confirmed recurrent or metastatic cancer. \n4. Individuals deemed unsuitable for Artificial Hippocampus surgery for other reasons.",
  },
  {
    question: "Q4. What precautions should be taken after the surgery?",
    answer:
      "Side effects such as nausea, loss of appetite, low-grade fever, etc., can occur for approximately 72 hours after the surgery. These are part of a normal immune response. If these side effects persist for more than a week, it's advisable to promptly visit the hospital. \n\n Additionally, due to the alteration of personal memories, conditions like the Tetris syndrome or depersonalization disorder might occur. While these conditions are common during the process of reshaping one's memories and identity, if problematic, it is advisable to visit a nearby hospital.",
  },
];
