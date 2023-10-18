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
        <div className="flex flex-col items-center justify-center w-1/2 ">
          <Image
            src={LogoWitchTurnAround}
            className="w-1/6 h-fit"
            alt="witch"
          />
          <Image src={Logo} className="w-full h-fit" alt="logo" />
          <div className="flex flex-col items-center text-center ">
            <div className="mt-14 text-[40px]">
              <span className={mainFont.className}>Welcome to M.S.C</span>
            </div>
            <button
              className="flex items-center mt-1 cursor-pointer"
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
              <div className=" text-[62px] ">
                <span className={mainFont.className}>PRESS START</span>
              </div>
              <Image src={Holder} className="w-[60px] h-fit " alt="|" />
            </button>
            <div className="text-[26px]">
              <footer className={mainFont.className}>© dasomsong 2023</footer>
            </div>
          </div>
        </div>
      </WebLayout>
    </main>
  );
}
