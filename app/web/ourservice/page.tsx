"use client";

import Image from "next/image";
import Logo from "../../../public/textures/logo.png";
import LogoWitchTurnAround from "../../../public/textures/logo_witch_turnAround.gif";
import About from "../../../public/textures/web-home/About.png";
import OurService from "../../../public/textures/web-home/Our Service.png";
import Regulatory from "../../../public/textures/web-home/Regulatory.png";
import PressReleases from "../../../public/textures/web-home/Press Releases.png";
import SouvenirShop from "../../../public/textures/web-home/Souvenir Shop.png";
import Link from "next/link";
import WebLayout from "../src/webLayout";
export default function Home() {
  return (
    <main className="w-screen h-screen bg-white flex items-center justify-center flex-col">
      <WebLayout isHome={false} />

      <div className="flex flex-col items-center w-1/4">
        <Image src={LogoWitchTurnAround} className="w-1/6 h-fit" alt="witch" />
        <Image src={Logo} className="w-full h-fit" alt="logo" />
        <div className="mt-7 w-[620px] h-[450px] bg-[url('/textures/web-home/Base.png')] bg-contain bg-no-repeat flex flex-col justify-center items-center text-center ">
          <div className="mr-3 flex flex-col justify-center items-center">
            <div className="flex">
              <Link href={"/web/about"}>
                <Image
                  src={About}
                  className="w-[95px] mx-10 h-fit"
                  alt="logo"
                />
                About
              </Link>
              <Link href={"/web/ourservice"}>
                <Image
                  src={OurService}
                  className="w-[95px] mx-10 h-fit"
                  alt="logo"
                />
                Our Service
              </Link>
              <Link href={"/web/regulatory"}>
                <Image
                  src={Regulatory}
                  className="w-[95px] mx-10 h-fit"
                  alt="logo"
                />
                Regulatory
              </Link>
            </div>
            <div className="flex mt-5">
              <Link href={"/web/pressreleases"}>
                <Image
                  src={PressReleases}
                  className="w-[95px] mx-10 h-fit"
                  alt="logo"
                />
                Press Releases
              </Link>

              <Link href={"/web/souvenirshop"}>
                <Image
                  src={SouvenirShop}
                  className="w-[95px] mx-10 h-fit"
                  alt="logo"
                />
                Souvenir Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[20px]">© dasomsong 2023</div>
    </main>
  );
}
