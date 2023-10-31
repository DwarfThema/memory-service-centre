"use client";

import Image from "next/image";
import instalogo from "../../../public/textures/about/instalogo.png";
import WebLayout from "../src/webLayout";
import { useRecoilState } from "recoil";
import langState from "../src/atom";
import Link from "next/link";
export default function About() {
  const [lang, setLang] = useRecoilState(langState);
  return (
    <main className="w-screen h-screen  flex items-center justify-center flex-col">
      <WebLayout isHome={false}>
        <div className="flex flex-col items-center justify-center w-3/4 font-dos text-center">
          <div className="md:text-[30px] zero:text-[16px] ">
            {lang ? (
              <>
                <div>
                  현재는 잠시뿐이지만, 기억은 잊지 않는 이상 영원합니다.
                  <br />
                  우리는 영원을 치료 해드립니다.
                </div>
                <div className="mt-9">
                  지금 바로 MSC에서 <br /> 당신의 꿈을 실현하세요.
                </div>
              </>
            ) : (
              <>
                <div>
                  The present is only for a moment, but the memory is forever{" "}
                  <br />
                  unless you forget it. We cure the eternity.
                </div>
                <div className="mt-9">
                  Right now, at MSC <br /> Make your dream come true.
                </div>
              </>
            )}
          </div>
          <div className="md:my-12 zero:my-5 border-t-2 border-black w-full " />
          <div className="md:text-[25px] zero:text-[16px] flex flex-col justify-center items-center text-center">
            <div className="flex justify-center items-center">
              <div>© dasomsong 2023</div>
              <Link href="https://www.instagram.com/sseeoul/" target="_blank">
                <Image
                  src={instalogo}
                  width={25}
                  height={25}
                  alt="dasomInsta"
                  className="ml-[5px] zero:w-[20px] zero:h-[20px]"
                  quality={10}
                />
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <div>Web Development : dwarfthema</div>
              <Link
                href="https://www.instagram.com/dwarfthema/"
                target="_blank"
              >
                <Image
                  src={instalogo}
                  width={25}
                  height={25}
                  alt="junhoInsta"
                  className="ml-[5px] zero:w-[20px] zero:h-[20px]"
                  quality={10}
                />
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <div>Scientific Advisor & Sound : Spacejihunnid</div>
              <Link
                href="https://www.instagram.com/spacejihunnid/"
                target="_blank"
              >
                <Image
                  src={instalogo}
                  width={25}
                  height={25}
                  alt="SpaceihunnidInsta"
                  className="ml-[5px] zero:w-[20px] zero:h-[20px]"
                  quality={10}
                />
              </Link>
            </div>
          </div>
        </div>
      </WebLayout>
    </main>
  );
}
