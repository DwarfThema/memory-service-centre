"use client";

import Image from "next/image";
import Logo from "../../public/textures/logo.png";
import LogoWitchTurnAround from "../../public/textures/logo_witch_turnAround.gif";
import Holder from "../../public/textures/main_Press Start.png";
import Link from "next/link";
import WebLayout from "./src/webLayout";
import { VT323 } from "next/font/google";
import { Suspense, useEffect, useState } from "react";
import WhiteNoise from "./src/whiteNoise";
import ScreenTransition from "./src/screenTransition";

const mainFont = VT323({
  weight: "400",
  subsets: ["latin"],
});

export default function Web() {
  const [url, setUrl] = useState("");

  const [audio, setaudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    setaudio(new Audio("/01 MSC_main theme.mp3"));
  }, []);

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <WhiteNoise />
      <WebLayout isHome={true} isNotice={false} main={true} url={url}>
        <div className="flex flex-col items-center justify-center md:w-1/2 zero:w-5/6 ">
          <Image
            src={LogoWitchTurnAround}
            className="md:w-1/6 zero:w-[20%] h-fit"
            alt="witch"
          />
          <Image src={Logo} className="w-full h-fit" alt="logo" />
          <div className="flex flex-col items-center text-center ">
            <div className="md:mt-14 zero:mt-5 md:text-[40px] zero:text-[30px]">
              <span className={mainFont.className}>Welcome to M.S.C</span>
            </div>
            <button
              className="flex items-center md:mt-1 zero:mt-0 cursor-pointer"
              onClick={() => {
                setUrl("/web/home");
                if (audio) {
                  audio.loop = true;
                  audio.volume = 0.2;
                  audio?.play();
                }
              }}
            >
              <Image src={Holder} className="w-[60px] h-fit " alt="|" />
              <div className=" md:text-[62px] zero:text-[40px]">
                <span className={mainFont.className}>PRESS START</span>
              </div>
              <Image src={Holder} className="w-[60px] h-fit " alt="|" />
            </button>
            <div className="md:text-[26px] zero:text-[20px]">
              <footer className={mainFont.className}>© dasomsong 2023</footer>
            </div>
          </div>
        </div>
      </WebLayout>
    </main>
  );
}
