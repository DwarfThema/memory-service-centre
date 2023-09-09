import Frame from "../../../public/textures/frame_1.png";
import LogoWitchTurnAround from "../../../public/textures/logo_witch_turnAround.gif";
import Notice from "../../../public/textures/notice.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NoticeView from "./notice";

export default function WebLayout({
  isHome = true,
  isNotice = true,
}: {
  isHome?: boolean;
  isNotice?: boolean;
}) {
  const [isNoticeView, setNoticeView] = useState(false);

  return (
    <>
      <Image
        src={Frame}
        className="w-screen h-screen z-50 pointer-events-none fixed"
        alt="frame"
      ></Image>

      {isHome ? null : (
        <Link href={"/web/home"}>
          <Image
            src={LogoWitchTurnAround}
            className="fixed left-[10%] top-[15%] w-[6%]"
            alt="home"
          />
        </Link>
      )}

      {isNotice ? (
        <button
          onClick={() => {
            setNoticeView((prev) => !prev);
          }}
        >
          <Image
            src={Notice}
            className="fixed left-[10%] bottom-[15%] w-[4%]"
            alt="notice"
          />
        </button>
      ) : null}

      {isNoticeView ? (
        <div
          onClick={() => {
            setNoticeView((prev) => !prev);
          }}
          className="absolute w-screen h-screen bg-black bg-opacity-60 z-50 flex items-center justify-center cursor-pointer"
        >
          <NoticeView />
        </div>
      ) : null}

      <div
        className="z-10 pointer-events-none w-screen h-screen  fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%),linear-gradient(rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))",
          backgroundSize: "100% 2.5px, 100% 3px",
        }}
      />
      <div className="animate-flickerAnim bg-slate-500 bg-opacity-5 z-20 w-full h-full  pointer-events-none fixed" />
    </>
  );
}
