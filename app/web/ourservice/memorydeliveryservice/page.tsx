"use client";

import Image from "next/image";
import MemoryDeliveryService from "../../../../public/textures/ourService/Memory Delivery Service.png";
import WebLayout from "../../src/webLayout";
import Reservation from "../../src/reservation";
import { useState } from "react";
import langState from "../../src/atom";
import { useRecoilState } from "recoil";

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
                src={MemoryDeliveryService}
                className="lg:w-1/3 zero:w-3/4"
                alt="MemoryDeliveryService"
              />
              <div className="w-[10%]" />
              <div className="fflex flex-col justify-center lg:mt-0 zero:mt-7">
                <span className="w-full block text-[30px] font-semibold">
                  기억 선물 서비스
                </span>
                <span className="w-full block lg:text-[22px] zero:text-[20px] mt-3">
                  현재는 잠시뿐이지만, 기억은 영원히 남습니다. <br />
                  소중한 사람에게 영원을 선물해보세요.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                프랑스의 항구 도시 르 아브르에 거주 중인 이민 2세 부모 이자벨
                수는 하나뿐인 딸을 키우기 위해 밤낮 가리지 않고 일을 해야
                했습니다. 그녀의 바쁜 스케줄만큼 무럭무럭 자라나는 딸 끌로에는
                벌써 17살이 되어 어엿한 숙녀가 되가고 있지만, 어렸을 때 엄마와
                보낸 기억이 별로 없어 유년기의 기억을 떠올리면 별로 행복해하지
                않습니다. 그런 그녀 하나만을 바라보며 열심히 일하는 엄마는
                끌로에에게 유년시절 자신과 보냈던 따뜻한 기억들을 선물하기로
                합니다. <br />
                끌로에는 지금 어떻게 되었냐구요? 프랑스에서 아마 가장 행복하게
                자란 소녀 중에 한 명일 것입니다.
              </span>
              <div className="mt-10">
                <span>이런 분들에게 추천합니다:</span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>자녀 혹은 배우자와 행복한 기억을 만들고 싶은 분</li>

                  <li>기억을 점점 잃어가는 노인 환자분</li>

                  <li>스트레스와 불안에 시달리고 있는 분</li>
                </ul>
                <span className="mt-10 block">
                  * 기억 선물은 센터 내 수취인의 성함으로 5년간 보관됩니다. 이
                  기간 내에 기억 이식을 받지 않는다면, 선물한 기억은 보관소에서
                  삭제됨을 미리 알려드립니다. 선물 받은 기억을 이식할 경우,
                  기본적으로 뇌 영상 촬영을 통해 시술 시 문제가 될 만한 상황이
                  없는지 확인한 후 기존의 기억과 시술 이후의 기억을 대조하여
                  &apos;기억 동등성 시험평가&apos;를 거쳐 이를 통과한 이후에
                  시행됩니다. 기억 이식은 CE 인증을 받은 NET-X8 시리즈의 전기
                  자극 기계를 사용합니다.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">
                    기억선물 시술 과정
                  </span>
                  기본적으로 기억 선물 과정은 &apos;기억 선물 - 기억 이식&apos;
                  단계로 나뉩니다. 기억 선물을 받는 분에게 기억을 보관 하는
                  센터에서 알림 메시지를 보내드립니다. 해당 기억을 이식하게 되면
                  센터 방문을 통해 간단한 검사 이후 기억을 삽입할 위치를 찾아
                  전기 자극을 줍니다. 전기 자극을 받은 신경 세포들은 서로
                  시냅스를 형성하여 기억이 안착하게 됩니다.
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
                src={MemoryDeliveryService}
                className="lg:w-1/3 zero:w-3/4"
                alt="MemoryDeliveryService"
              />
              <div className="w-[10%]" />
              <div className="flex flex-col justify-center lg:mt-0 zero:mt-7">
                <span className="w-full block text-[30px] font-semibold">
                  Memory Delivery Service
                </span>
                <span className="w-full block lg:text-[22px] zero:text-[20px] mt-3">
                  The present is only for a moment, but the memory is forever
                  unless you forget it.
                </span>
              </div>
            </h1>
            <div className="mt-10">
              <span>
                Isabelle Sue, a second-generation immigrant residing in the port
                city of Le Havre, France, worked tirelessly day and night to
                raise her only daughter, Chloé. Despite Chloé blossoming into a
                remarkable young lady at the age of 17, she doesn&apos;t feel
                particularly happy when recalling her childhood memories, which
                are scarce due to her mother&apos;s busy schedule. Focused on
                her daughter, Isabelle decides to gift Chloé with the warm
                memories of their early years together.
              </span>
              <div className="mt-10">
                <span>
                  Recommended for individuals in the following situations:
                </span>
                <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                  <li>
                    Who want to create happy memories with their children or
                    spouses
                  </li>

                  <li>
                    Elderly patients who are gradually losing their memories.
                  </li>

                  <li>A person struggling with stress and anxiety.</li>
                </ul>
                <span className="mt-10 block">
                  * Memory gifts will be stored under the recipient&apos;s name
                  within the center for 5 years. If memory transplantation is
                  not received within this period, the gifted memories will be
                  deleted from storage. When transferring received memories, a
                  &quot;memory equivalence test&quot; is conducted by
                  contrasting existing memories with memories after the
                  procedure, after ensuring there are no issues during the
                  procedure through brain imaging. Memory transplantation
                  utilizes the electric stimulation device from the CE certified
                  NET-X8 series.
                </span>
                <span className="mt-10 block">
                  <span className="font-extrabold block ">
                    Memory Delivery Service Process
                  </span>
                  The memory gift process is fundamentally divided into
                  &apos;Memory Gift - Memory Transplantation&apos; stages. Once
                  the recipient of the memory gift is identified, a notification
                  is sent from the memory storage center. Upon transplantation,
                  a brief examination is conducted after which the location for
                  memory insertion is determined, and electrical stimulation is
                  applied. Nerve cells stimulated by electrical impulses form
                  synapses with each other, allowing memories to settle.
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
      "1. 뇌 영상 촬영을 위한 조영제에 금기증이 있는자 \n2. 시술 시점 6개월 이내에 질병 혹은 사고로 인하여 뇌의 실질에 손상이 생긴 환자 \n3. 시술 시점 6개월 이내에 뇌에 관련된 암을 진단받았거나 암에 대한 치료를 받을 경우, 재발성혹은 전이성 암이 있는 것이 확인된 자 \n4. 이 외의 사유로 기억 시술에 적합하지 않다고 판단되는 경우",
  },
  {
    question: "Q3. 수술 이후 주의해야 할 사항이 있나요?",
    answer:
      "수술이 끝난 직후부터 약 72시간 동안 메스꺼움, 식욕부진, 미열 등의 부작용이 생길 수 있습니다. 이는 정상적인 면역반응의 일환으로 위와 같은 부작용이 일주일 이상 지속될 경우 조속히 병원을 방문하시기 바랍니다. \n\n또한, 본인의 기억이 바뀌었기 때문에 테세우스증후군 혹은 자아부정증후군 등이 발생할 수 있습니다. 위 질환들은 본인의 기억과 인격이 새롭게 자리잡는 과정에서 일어날 수 있는 흔한 경우이나, 문제가 될 경우 근처 병원을 방문하시기를 권합니다.",
  },
];

const qeustionNAnswoerEng = [
  {
    question: "Q1. Are there any preparations required before the surgery?",
    answer:
      "If you have scheduled a reservation through our [Booking] menu, please ensure to confirm your reservation date by obtaining the MM code within one week prior to the actual surgery date. Failure to confirm the reservation schedule will result in cancellation, and memory modification will become unavailable.",
  },
  {
    question:
      "Q2. What happens to the memories that were in the original hippocampus?",
    answer:
      "The memories previously stored in the original hippocampus are uploaded into a separate system, and if desired, can be transferred to the artificial hippocampus. However, altering more than 50% of one's own memories, except in cases where memory errors result from accidents or when cognitive judgment is impaired, is considered illegal due to memory-related regulations. If you intend to revert to the original artificial hippocampus after the surgery, it's imperative to undergo the memory equivalence test and proceed only if no issues arise.",
  },
  {
    question: "Q3. Who is not eligible for treatment?",
    answer:
      "Individuals with contraindications to contrast agents for brain imaging.Patients with substantial brain damage within 6 months of the procedure.Individuals diagnosed with brain-related cancer or treated for cancer within 6 months of the procedure, with confirmed recurring or metastatic cancer. Cases where artificial hippocampal surgery is deemed inappropriate for reasons beyond the mentioned criteria.",
  },
  {
    question: "Q4. What precautions should be taken after the surgery?",
    answer:
      "Side effects such as nausea, loss of appetite, low-grade fever, etc., can occur for approximately 72 hours after the surgery. These are part of a normal immune response. If these side effects persist for more than a week, it's advisable to promptly visit the hospital. Furthermore, due to the alteration of one's memories, conditions like Thesesus Syndrome or Identity Denial Syndrome might emerge. While these conditions are common in the process of adapting to new memories and identities, if they become problematic, it is recommended to seek care at a nearby hospital.",
  },
];
