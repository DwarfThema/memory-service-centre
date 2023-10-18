import Frame from "../../../public/textures/frame_1.png";
import LogoWitchTurnAround from "../../../public/textures/logo_witch_turnAround.gif";
import Notice from "../../../public/textures/notice.png";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NoticeView from "./notice";
import ScreenTransition from "./screenTransition";
import { useRecoilState } from "recoil";
import langState from "./atom";

export default function WebLayout({
  children,
  isHome = true,
  isNotice = true,
  main = false,
  url = "",
}: {
  children: React.ReactNode;
  isHome?: boolean;
  isNotice?: boolean;
  main?: boolean;
  url?: string;
}) {
  const [lang, setLang] = useRecoilState(langState);

  const [isNoticeView, setNoticeView] = useState(false);
  const [homeUrl, setHomeUrl] = useState("");
  const [coverValue, setCoverValue] = useState(3);
  useEffect(() => {
    if (coverValue === 3) {
      setTimeout(() => {
        setCoverValue(10);
      }, 70);
    } else {
      setTimeout(() => {
        setCoverValue(3);
      }, 70);
    }
  }, [coverValue]);
  return (
    <>
      <Image
        src={Frame}
        className="w-full h-full z-40 pointer-events-none fixed"
        alt="frame"
      />

      <ScreenTransition href={url || homeUrl}>
        {children}

        {isHome ? null : (
          <div
            className="cursor-pointer"
            onClick={() => {
              setHomeUrl("/web/home");
            }}
          >
            <Image
              src={LogoWitchTurnAround}
              className="fixed left-[10%] top-[15%] w-[6%]"
              alt="home"
            />
          </div>
        )}

        {main ? null : (
          <div className="fixed text-center right-[15%] top-[15%] flex font-bold text-2xl">
            <div
              onClick={() => {
                setLang(true);
              }}
              className={`${lang ? "text-[#AD2584]" : null}  cursor-pointer`}
            >
              kr
            </div>
            <div>&nbsp;/&nbsp;</div>
            <div
              onClick={() => {
                setLang(false);
              }}
              className={`${lang ? null : "text-[#AD2584]"} cursor-pointer`}
            >
              en
            </div>
          </div>
        )}

        {isNotice ? (
          <div
            className="cursor-pointer"
            onClick={() => {
              setNoticeView((prev) => !prev);
            }}
          >
            <Image
              src={Notice}
              className="fixed left-[10%] bottom-[15%] w-[4%]"
              alt="notice"
            />
          </div>
        ) : null}

        {isNoticeView ? (
          <div
            onClick={() => {
              setNoticeView((prev) => !prev);
            }}
            className="fixed w-screen h-screen bg-black bg-opacity-60 z-50 flex items-center justify-center cursor-pointer"
          >
            <NoticeView />
          </div>
        ) : null}

        <div
          className="z-10 pointer-events-none w-screen h-screen  fixed"
          style={{
            backgroundImage:
              "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%),linear-gradient(rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))",
            backgroundSize: `100% 2.5px, 100% ${coverValue}px`,
          }}
        />
        <div className="animate-flickerAnim bg-slate-500 bg-opacity-5 z-20 w-full h-full  pointer-events-none fixed" />
      </ScreenTransition>
    </>
  );
}
