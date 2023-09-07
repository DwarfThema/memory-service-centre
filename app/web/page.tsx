"use client";

import Image from "next/image";
import Logo from "../../public/textures/logo.png";
import LogoWitchTurnAround from "../../public/textures/logo_witch_turnAround.gif";
import Frame from "../../public/textures/monitor_frame.png";
import Holder from "../../public/textures/main_Press Start.png";
import Link from "next/link";
import WebLayout from "./src/webLayout";
export default function Web() {
  return (
    <main className="w-screen h-screen bg-white flex items-center justify-center flex-col">
      <WebLayout isHome={true} />

      <div className="flex flex-col items-center w-1/2">
        <Image src={LogoWitchTurnAround} className="w-1/6 h-fit" alt="witch" />
        <Image src={Logo} className="w-full h-fit" alt="logo" />
        <div className="flex flex-col items-center text-center ">
          <div className="mt-14 text-[40px]">Welcome to M.S.C</div>
          <Link
            href={"/web/home"}
            className="flex items-center mt-1 cursor-pointer"
          >
            <Image src={Holder} className="w-[60px] h-fit " alt="|" />
            <div className=" text-[62px] ">{`PRESS START`}</div>
            <Image src={Holder} className="w-[60px] h-fit " alt="|" />
          </Link>
          <div className="text-[26px]">© dasomsong 2023</div>
        </div>
      </div>
    </main>
  );
}
