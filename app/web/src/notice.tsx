import { useState } from "react";
import NoticeViewBase from "../../../public/textures/noticeViewBase.png";
import { useRecoilState } from "recoil";
import langState from "./atom";

export default function NoticeView() {
  const [lang, setLang] = useRecoilState(langState);
  return (
    <div className="md:w-[800px] zero:h-[80%] zero:w-[85%] zero:px-5 zero:pt-2 bg-contain bg-no-repeat bg-center bg-[url('/textures/noticeViewBase.png')] flex text-center justify-center items-center flex-col">
      {lang ? (
        <>
          <span className="md:text-3xl zero:text-lg md:mr-6 zero:mr-2">
            공지사항
          </span>
          <span className="md:text-base md:mt-10 md:mr-6 zero:text-sm zero:mt-3 zero:mr-2">
            본 센터의 목표는 인류가 더 나은 삶을 살 수 있도록 하는 것입니다.
            <br />
            본 센터는 어떠한 규정 위반에도 책임을 지지 않습니다.
            <br />
            <br />
          </span>
        </>
      ) : (
        <>
          <span className="md:text-3xl zero:text-lg md:mr-6 zero:mr-2">
            NOTICE
          </span>
          <span className="md:text-xl md:mt-10 md:mr-6 zero:text-sm zero:mt-1 zero:mr-2 zero:leading-4">
            Our centre is for making the humans live better lives. <br />
            We do not take responsibility <br />
            for any regulatory violations. <br />
            Let’s live and act like a human being. <br />
            Excessive modulating might cause many side effects. <br />
            It is for your soul, not the greed!
            <br />
          </span>
        </>
      )}
    </div>
  );
}
