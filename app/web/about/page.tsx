"use client";

import Image from "next/image";
import Logo from "../../../public/textures/logo.png";
import LogoWitchTurnAround from "../../../public/textures/logo_witch_turnAround.gif";
import WebLayout from "../src/webLayout";
export default function About() {
  return (
    <main className="w-screen h-screen bg-white flex items-center justify-center flex-col">
      <WebLayout isHome={false} />
      <div className="flex flex-col items-center w-3/4 font-dos text-center">
        <div className="text-[30px] ">
          <div>
            The present is only for a moment, but the memory is forever <br />
            unless you forget it. We cure the eternity.
          </div>
          <div className="mt-9">
            Right now, at MSC <br /> Make your dream come true.
          </div>
        </div>
        <div className="my-12 border-t-2 border-black w-full " />
        <div className="text-[25px]">
          dasomsong 2023
          <br />
          Web Development : dwarfthema <br />
          Scientific Advisor : Spacejihunnid
        </div>
      </div>
    </main>
  );
}
