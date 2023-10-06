"use client";

import Image from "next/image";
import mainPhoto from "../../../../public/textures/ourService/Memory Booster.png";
import WebLayout from "../../src/webLayout";
import Reservation from "../../src/reservation";
import { useState } from "react";

export default function Home() {
  const [isReservation, setReservation] = useState(false);

  const qeustionNAnswoer = [
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
        <div className="flex flex-col items-center w-6/12 mt-36 text-xl">
          <h1 className="mt-10 w-full flex">
            <Image src={mainPhoto} className="w-1/3 " alt="mainPhoto" />
            <div className="w-[10%]" />
            <div className="flex flex-col justify-center">
              <span className="w-full block text-[30px] font-semibold">
                Memory Booster
              </span>
              <span className="w-full block text-[22px] mt-3">
                Improve your short-term memory. It can make you the world memory
                champion.
              </span>
            </div>
          </h1>
          <div className="mt-10">
            <span>
              Modern individuals surrounded by computers, smartphones, and other
              digital devices are experiencing a decline in language, memory,
              intelligence, consciousness, and more due to high dependence on
              digital technology. The term &quot;digital dementia&quot; has
              emerged to describe this phenomenon. While it is not classified as
              a separate condition from a psychiatric perspective, research
              suggests that it could potentially lead to early-onset dementia
              among young adults. Memory boosters can improve overall memory
              that has declined, and clinical results show a 98% symptom
              improvement among dementia patients. Selective memory retrieval is
              performed after ensuring there are no potential issues during the
              surgery through brain imaging.
            </span>
            <div className="mt-10">
              <span>
                Recommended for individuals in the following situations:
              </span>
              <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
                <li>Those with memory issues affecting daily life.</li>

                <li>
                  Individuals seeking symptom improvement due to memory-related
                  psychiatric conditions.
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
                to the cerebral cortex for approximately 30 minutes to 1 hour to
                enhance the function of nerve cells.
              </span>

              {qeustionNAnswoer.map((value, index) => {
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

          <footer className="text-[20px] mt-20 mb-32">© dasomsong 2023</footer>
        </div>
      </WebLayout>
    </main>
  );
}
