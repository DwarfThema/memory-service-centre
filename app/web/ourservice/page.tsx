"use client";

import Image from "next/image";
import Logo from "../../../public/textures/logo.png";
import OurService from "../../../public/textures/web-home/Our Service.png";
import ArtificialHippocampus from "../../../public/textures/ourService/Artificial hippocampus.png";
import PlaceboEffect from "../../../public/textures/ourService/Placebo Effect.png";
import ErasingTraumaticMemory from "../../../public/textures/ourService/Erasing Traumatic Memory.png";
import MemoryRecovery from "../../../public/textures/ourService/Memory Recovery.png";
import MemoryBooster from "../../../public/textures/ourService/Memory Booster.png";
import MemoryDeliveryService from "../../../public/textures/ourService/Memory Delivery Service.png";
import RelationshipTherapy from "../../../public/textures/ourService/Relationship therapy.png";
import MemoryPreservation from "../../../public/textures/ourService/Memory Preservation.png";
import Link from "next/link";
import WebLayout from "../src/webLayout";
export default function Home() {
  return (
    <main className="w-screen h-screen bg-white flex items-center flex-col">
      <WebLayout isHome={false} />

      <div className="flex flex-col items-center w-6/12 mt-36">
        <Image src={OurService} className="w-[12%]" alt="witch" />
        <span className="text-[40px]">Our Service</span>
        <div className="mt-10 w-full grid grid-cols-3 gap-6">
          <Link href={"/web/ourservice/artificialhippocampus"}>
            <Image
              src={ArtificialHippocampus}
              className="w-full"
              alt="ArtificialHippocampus"
            />
            <span className="text-center w-full block text-[22px]">
              Artificial Hippocampus
            </span>
          </Link>{" "}
          <Link href={"/web/ourservice/placeboeffect"}>
            <Image src={PlaceboEffect} className="w-full" alt="PlaceboEffect" />
            <span className="text-center w-full block text-[22px]">
              Placebo Effect
            </span>
          </Link>{" "}
          <Link href={"/web/ourservice/erasingtraumaticmemory"}>
            <Image
              src={ErasingTraumaticMemory}
              className="w-full"
              alt="ErasingTraumaticMemory"
            />
            <span className="text-center w-full block text-[22px]">
              Erasing Traumatic Memory
            </span>
          </Link>{" "}
          <Link href={"/web/ourservice/memoryrecovery"}>
            <Image
              src={MemoryRecovery}
              className="w-full"
              alt="MemoryRecovery"
            />
            <span className="text-center w-full block text-[22px]">
              Memory Recovery
            </span>
          </Link>{" "}
          <Link href={"/web/ourservice/memorybooster"}>
            <Image src={MemoryBooster} className="w-full" alt="MemoryBooster" />
            <span className="text-center w-full block text-[22px]">
              Memory Booster
            </span>
          </Link>{" "}
          <Link href={"/web/ourservice/memorydeliveryservice"}>
            <Image
              src={MemoryDeliveryService}
              className="w-full"
              alt="MemoryDeliveryService"
            />
            <span className="text-center w-full block text-[22px]">
              Memory Delivery Service
            </span>
          </Link>{" "}
          <Link href={"/web/ourservice/relationshiptherapy"}>
            <Image
              src={RelationshipTherapy}
              className="w-full"
              alt="RelationshipTherapy"
            />
            <span className="text-center w-full block text-[22px]">
              Relationship
              <br />
              therapy
            </span>
          </Link>
          <Link href={"/web/ourservice/memorypreservation"}>
            <Image
              src={MemoryPreservation}
              className="w-full"
              alt="MemoryPreservation"
            />
            <span className="text-center w-full block text-[22px]">
              Memory Preservation
            </span>
          </Link>{" "}
        </div>
        <footer className="text-[20px] mt-20 mb-32">© dasomsong 2023</footer>
      </div>
    </main>
  );
}
