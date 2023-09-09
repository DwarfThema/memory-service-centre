"use client";

import Image from "next/image";
import Logo from "../../../public/textures/logo.png";
import OurService from "../../../public/textures/web-home/Our Service.png";
import BlackWoman from "../../../public/textures/pressReleases/black woman.png";
import VirgilablohoMachine from "../../../public/textures/pressReleases/virgilabloh_a_photo_of_machine.png";
import VirgilablohoMan from "../../../public/textures/pressReleases/virgilabloh__a_realistic_photo.png";
import Link from "next/link";
import WebLayout from "../src/webLayout";
import { styled } from "leva/dist/declarations/src/styles";
export default function Home() {
  return (
    <main className="w-screen h-screen bg-white flex items-center flex-col">
      <WebLayout isHome={false} />

      <div className="flex flex-col items-center w-[50%] mt-36">
        <Image src={OurService} className="w-[12%]" alt="witch" />
        <span className="text-[40px]">Our Service</span>
        <div className="mt-10 grid grid-cols-1 gap-10">
          <div className="flex items-center">
            <Image src={BlackWoman} alt="BlackWoman" className="w-[30%]" />

            <div className="w-[8%]" />
            <div className="text-center font-bold text-[17px] w-[62%]">
              가상인물 위나 맥카시(Weena McCarthy, 가수, 28) 인터뷰 <br />
              <Link
                href={"https://www.merckgroup.com/en/news.html"}
                className="underline"
              >
                https://www.merckgroup.com/en/news.html
              </Link>
              <br />
              인공해마이식이 저의 인생을 바꿔놨어요 or 기억 조작은 21세기식 우리
              영혼의 디톡스
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={VirgilablohoMachine}
              alt="VirgilablohoMachine"
              className="w-[30%]"
            />

            <div className="w-[8%]" />
            <div className="text-center font-bold text-[17px] w-[62%]">
              {`MSC, Hippo&campus Co., Ltd와 3000억 규모 인공해마 칩`}
              <br />
              대규모 계약 체결
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={VirgilablohoMan}
              alt="VirgilablohoMan"
              className="w-[30%]"
            />

            <div className="w-[8%]" />
            <div className="text-center font-bold text-[17px] w-[62%]">
              {`국제뇌협회 이사장 토머스 레이,`}
              <br />{" "}
              {`“기억 조작과 관련된 범죄, 규제 방안 최선을 다해 지속적으로 연구할 것”`}
            </div>
          </div>
          <div className="flex items-center">
            <Image src={BlackWoman} alt="BlackWoman" className="w-[30%]" />

            <div className="w-[8%]" />
            <div className="text-center font-bold text-[17px] w-[62%]">
              {`MSC, 기억규제부 (MMR)로부터 세계 최초 기억 조작기관으로 승인`}
            </div>
          </div>
          <div className="flex items-center">
            <Image src={BlackWoman} alt="BlackWoman" className="w-[30%]" />

            <div className="w-[8%]" />
            <div className="text-center font-bold text-[17px] w-[62%]">
              {`MSC 대표 인터뷰, “부작용에 대한 걱정보다는 개개인의 행복에 더 초점을 맞추어주셨으면"`}
            </div>
          </div>
        </div>
        <footer className="text-[20px] mt-20 mb-32">© dasomsong 2023</footer>
      </div>
    </main>
  );
}
