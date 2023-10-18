import { useState } from "react";
import NoticeViewBase from "../../../public/textures/noticeViewBase.png";
import { useRecoilState } from "recoil";
import langState from "./atom";

export default function NoticeView() {
  const [lang, setLang] = useRecoilState(langState);
  return (
    <div className="h-[55%] w-[55%] bg-contain bg-no-repeat bg-center bg-[url('/textures/noticeViewBase.png')] flex text-center justify-center items-center flex-col">
      {lang ? (
        <>
          <span className="text-3xl mr-6">공지사항</span>
          <span className="text-xl mt-10 mr-6">
            본 센터의 목표는 인류가 더 나은 삶을 살 수 있도록 하는 것입니다.
            <br />
            본 센터는 어떠한 규정 위반에도 책임을 지지 않습니다.
            <br />
            <br />
          </span>
        </>
      ) : (
        <>
          <span className="text-3xl mr-6">NOTICE</span>
          <span className="text-xl mt-10 mr-6">
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
