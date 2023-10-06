import { useState } from "react";
import NoticeViewBase from "../../../public/textures/noticeViewBase.png";

export default function NoticeView() {
  return (
    <div className="h-[55%] w-[55%] bg-contain bg-no-repeat bg-center bg-[url('/textures/noticeViewBase.png')] flex text-center justify-center items-center flex-col">
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
    </div>
  );
}
