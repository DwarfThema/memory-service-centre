"use client";

import Image from "next/image";
import Logo from "../../../public/textures/logo.png";
import LogoWitchTurnAround from "../../../public/textures/logo_witch_turnAround.gif";
import About from "../../../public/textures/web-home/About.png";
import OurService from "../../../public/textures/web-home/Our Service.png";
import Regulatory from "../../../public/textures/web-home/Regulatory.png";
import PressReleases from "../../../public/textures/web-home/Press Releases.png";
import Certification from "../../../public/textures/web-home/Certification.png";
import WebLayout from "../src/webLayout";
import { useState } from "react";
export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <main className="w-screen h-screen  flex items-center justify-center flex-col">
      <WebLayout isHome={true} url={url}>
        <div className="flex flex-col items-center justify-center lg:w-[800px] zero:w-5/6 py-[100px]">
          <Image
            src={LogoWitchTurnAround}
            className="lg:w-1/6 zero:w-[20%] h-fit"
            alt="witch"
          />
          <Image src={Logo} className="w-full h-fit" alt="logo" />
          <div className="mt-7 lg:w-[600px] lg:h-[450px] lg:text-[20px] zero:w-[350px] zero:h-[300px] lg:pt-[80px] zero:pt-[40px] bg-[url('/textures/web-home/Base.png')] lg:bg-cover lg:bg-contain bg-no-repeat flex flex-col items-center text-center ">
            <div className="mr-3 flex flex-col justify-center items-center">
              <div className="flex">
                <button
                  className="flex items-center flex-col mt-1 cursor-pointer"
                  onClick={() => {
                    setUrl("/web/about");
                  }}
                >
                  <Image
                    src={About}
                    className="lg:w-[95px] zero:w-[50px] mx-10 h-fit"
                    alt="logo"
                  />
                  About
                </button>
                <button
                  className="flex items-center flex-col mt-1 cursor-pointer"
                  onClick={() => {
                    setUrl("/web/ourservice");
                  }}
                >
                  <Image
                    src={OurService}
                    className="lg:w-[95px] zero:w-[50px] mx-10 h-fit"
                    alt="logo"
                  />
                  Our Service
                </button>

                <button
                  className="flex items-center flex-col mt-1 cursor-pointer"
                  onClick={() => {
                    setUrl("/web/regulatory");
                  }}
                >
                  <Image
                    src={Regulatory}
                    className="lg:w-[95px] zero:w-[50px] mx-10 h-fit"
                    alt="logo"
                  />
                  Regulatory
                </button>
              </div>
              <div className="flex mt-5">
                <button
                  className="flex items-center flex-col lg:mt-1 zero:mt-0 cursor-pointer"
                  onClick={() => {
                    setUrl("/web/pressreleases");
                  }}
                >
                  <Image
                    src={PressReleases}
                    className="lg:w-[95px] zero:w-[50px] mx-10 h-fit"
                    alt="logo"
                  />
                  Press Releases
                </button>

                <button
                  className="flex items-center flex-col lg:mt-1 zero:mt-0 cursor-pointer"
                  onClick={() => {
                    setUrl("/web/certification");
                  }}
                >
                  <Image
                    src={Certification}
                    className="lg:w-[95px] zero:w-[50px] lg:my-3 zero:my-[5.5px] mx-10 h-fit my-3"
                    alt="logo"
                  />
                  Certification
                </button>
              </div>
            </div>
          </div>
          <footer className="text-[20px]">© dasomsong 2023</footer>
        </div>
      </WebLayout>
    </main>
  );
}
