"use client";

import Image from "next/image";
import OurService from "../../../public/textures/web-home/Our Service.png";
import ArtificialHippocampus from "../../../public/textures/ourService/Artificial hippocampus.png";
import PlaceboEffect from "../../../public/textures/ourService/Placebo Effect.png";
import ErasingTraumaticMemory from "../../../public/textures/ourService/Erasing Traumatic Memory.png";
import MemoryRecovery from "../../../public/textures/ourService/Memory Recovery.png";
import MemoryBooster from "../../../public/textures/ourService/Memory Booster.png";
import MemoryDeliveryService from "../../../public/textures/ourService/Memory Delivery Service.png";
import RelationshipTherapy from "../../../public/textures/ourService/Relationship therapy.png";
import MemoryPreservation from "../../../public/textures/ourService/Memory Preservation.png";
import WebLayout from "../src/webLayout";
import { useState } from "react";
import { useRecoilState } from "recoil";
import langState from "../src/atom";
export default function Home() {
  const [url, setUrl] = useState("");
  const [lang, setLang] = useRecoilState(langState);

  return (
    <main className="w-screen h-screen flex items-center flex-col">
      <WebLayout isHome={false} url={url}>
        <div className="flex flex-col items-center xl:mt-[280px] md:mt-36 md:w-6/12 zero:mt-20 zero:w-10/12 ">
          <Image
            src={OurService}
            className="md:w-[12%] zero:w-[25%] "
            alt="OurService"
          />
          <span className="md:text-[40px] zero:text-[30px] ">Our Service</span>
          {lang ? (
            <div className="md:mt-10 zero:mt-5 w-full grid grid-cols-3 gap-6">
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/artificialhippocampus");
                }}
              >
                <Image
                  src={ArtificialHippocampus}
                  className="w-full"
                  alt="ArtificialHippocampus"
                />
                <span className="text-center w-full block md:text-[22px] zero:text-[13px] zero:font-extrabold ">
                  인공 해마
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/placeboeffect");
                }}
              >
                <Image
                  src={PlaceboEffect}
                  className="w-full"
                  alt="PlaceboEffect"
                />
                <span className="text-center w-full block md:text-[22px] zero:text-[13px] zero:font-extrabold">
                  플라시보 효과
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/erasingtraumaticmemory");
                }}
              >
                <Image
                  src={ErasingTraumaticMemory}
                  className="w-full"
                  alt="ErasingTraumaticMemory"
                />
                <span className="text-center w-full block md:text-[22px] zero:text-[13px] zero:font-extrabold">
                  트라우마 기억 지우기
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/memoryrecovery");
                }}
              >
                <Image
                  src={MemoryRecovery}
                  className="w-full"
                  alt="MemoryRecovery"
                />
                <span className="text-center w-full block md:text-[22px] zero:text-[13px] zero:font-extrabold">
                  기억 복구
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/memorybooster");
                }}
              >
                <Image
                  src={MemoryBooster}
                  className="w-full"
                  alt="MemoryBooster"
                />
                <span className="text-center w-full block md:text-[22px] zero:text-[13px] zero:font-extrabold">
                  기억 부스터
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/memorydeliveryservice");
                }}
              >
                <Image
                  src={MemoryDeliveryService}
                  className="w-full"
                  alt="MemoryDeliveryService"
                />
                <span className="text-center w-full block md:text-[22px] zero:text-[13px] zero:font-extrabold">
                  기억 선물
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/relationshiptherapy");
                }}
              >
                <Image
                  src={RelationshipTherapy}
                  className="w-full"
                  alt="RelationshipTherapy"
                />
                <span className="text-center w-full block md:text-[22px] zero:text-[13px] zero:font-extrabold">
                  관계 회복 테라피
                </span>
              </button>
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/memorypreservation");
                }}
              >
                <Image
                  src={MemoryPreservation}
                  className="w-full"
                  alt="MemoryPreservation"
                />
                <span className="text-center w-full block md:text-[22px] zero:text-[13px] zero:font-extrabold">
                  기억 보관
                </span>
              </button>{" "}
            </div>
          ) : (
            <div className="mt-10 w-full grid grid-cols-3 gap-6 leading-7 ">
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/artificialhippocampus");
                }}
              >
                <Image
                  src={ArtificialHippocampus}
                  className="w-full"
                  alt="ArtificialHippocampus"
                />
                <span className="text-center w-full block mt-2 md:text-[22px] zero:text-[15px] zero:font-extrabold">
                  Artificial Hippocampus
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/placeboeffect");
                }}
              >
                <Image
                  src={PlaceboEffect}
                  className="w-full"
                  alt="PlaceboEffect"
                />
                <span className="text-center w-full block mt-2 md:text-[22px] zero:text-[15px] zero:font-extrabold">
                  Placebo Effect
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/erasingtraumaticmemory");
                }}
              >
                <Image
                  src={ErasingTraumaticMemory}
                  className="w-full"
                  alt="ErasingTraumaticMemory"
                />
                <span className="text-center w-full block mt-2 md:text-[22px] zero:text-[15px] zero:font-extrabold">
                  Erasing Traumatic Memory
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/memoryrecovery");
                }}
              >
                <Image
                  src={MemoryRecovery}
                  className="w-full"
                  alt="MemoryRecovery"
                />
                <span className="text-center w-full block mt-2 md:text-[22px] zero:text-[15px] zero:font-extrabold">
                  Memory Recovery
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/memorybooster");
                }}
              >
                <Image
                  src={MemoryBooster}
                  className="w-full"
                  alt="MemoryBooster"
                />
                <span className="text-center w-full block mt-2 md:text-[22px] zero:text-[15px] zero:font-extrabold">
                  Memory Booster
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/memorydeliveryservice");
                }}
              >
                <Image
                  src={MemoryDeliveryService}
                  className="w-full"
                  alt="MemoryDeliveryService"
                />
                <span className="text-center w-full block mt-2 md:text-[22px] zero:text-[15px] zero:font-extrabold">
                  Memory Delivery Service
                </span>
              </button>{" "}
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/relationshiptherapy");
                }}
              >
                <Image
                  src={RelationshipTherapy}
                  className="w-full"
                  alt="RelationshipTherapy"
                />
                <span className="text-center w-full block mt-2 md:text-[22px] zero:text-[15px] zero:font-extrabold">
                  Relationship
                  <br />
                  therapy
                </span>
              </button>
              <button
                className="flex flex-col items-start"
                onClick={() => {
                  setUrl("/web/ourservice/memorypreservation");
                }}
              >
                <Image
                  src={MemoryPreservation}
                  className="w-full"
                  alt="MemoryPreservation"
                />
                <span className="text-center w-full block mt-2 md:text-[22px] zero:text-[15px] zero:font-extrabold">
                  Memory Preservation
                </span>
              </button>{" "}
            </div>
          )}
          <footer className="text-[20px] mt-20 md:pb-[200px] zero:pb-[100px] ">
            © dasomsong 2023
          </footer>
        </div>
      </WebLayout>
    </main>
  );
}
