"use client";

import Image from "next/image";
import OurService from "../../../../public/textures/web-home/Our Service.png";
import ArtificialHippocampus from "../../../../public/textures/ourService/Artificial hippocampus.png";
import Link from "next/link";
import WebLayout from "../../src/webLayout";
import Reservation from "../../src/reservation";
import { useState } from "react";

export default function Home() {
  const [isReservation, setReservation] = useState(false);

  const qeustionNAnswoer = [
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

  return (
    <main className="w-screen h-screen bg-white flex items-center flex-col">
      <link rel="stylesheet" href="https://unpkg.com/98.css" />
      <WebLayout isHome={false} />
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
          <Image
            src={ArtificialHippocampus}
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
            Artificial hippocampus, a type of prosthesis related to cognition,
            replaces the functional nerve cells of the hippocampus responsible
            for memory and learning. Through this, the ability to learn about
            previously nonexistent memories or information becomes feasible by
            installing a new memory center. The surgical procedure for the
            artificial hippocampus involves initially verifying through brain
            imaging that there are no problematic conditions for the surgery.
            After backing up the existing memories and passing them through a
            ‘Memory Equivalence Assessment’, the surgery is conducted.
          </span>
          <div className="mt-10">
            <span>
              Recommended for individuals in the following situations:
            </span>
            <ul className="bg-gray-200 list-disc list-outside px-10 py-5 my-5">
              <li>
                Patients with damage to the memory center due to accidents or
                illnesses.{" "}
              </li>

              <li>Patients seeking to overcome trauma or mental disorders.</li>

              <li>
                Individuals wishing to preserve their pre-deceased memories (up
                to the backup stage)
              </li>
            </ul>
            <span className="mt-10 block">
              The artificial hippocampal transplantation is an FDA-approved
              procedure that employs an artificial hippocampal device certified
              with CE medical device approval. Therefore, it is performed
              safely.
            </span>
            <span className="mt-10 block">
              Process of Artificial Hippocampal Transplantation Following
              cranial incision, the existing hippocampus is removed, and the
              artificial hippocampus is transplanted into the respective area.
              Once the transplantation is completed, the incised cranial area is
              closed and sutured. Subsequently, over a period of 72 hours,
              cognitive functions, mobility, and eating habits are screened and
              observed at the center to monitor for any issues.
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
    </main>
  );
}
