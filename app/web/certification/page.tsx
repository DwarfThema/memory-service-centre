"use client";

import Image from "next/image";
import Certification from "../../../public/textures/web-home/Certification.png";
import TShirts from "../../../public/textures/souvenirShop/PressTShirts.png";
import Link from "next/link";
import WebLayout from "../src/webLayout";
import { useState } from "react";
import { useRecoilState } from "recoil";
import langState from "../src/atom";

export default function Home() {
  const [url, setUrl] = useState("");
  const [lang, setLang] = useRecoilState(langState);

  return (
    <main className="w-screen h-screen flex items-center flex-col">
      <WebLayout isHome={false} url={url}>
        <div className="flex flex-col items-center lg:mt-36 lg:w-6/12 zero:mt-20 zero:w-10/12">
          <Image
            src={Certification}
            className="lg:w-[12%] zero:w-[25%] "
            alt="Certification"
          />
          <span className="lg:text-[40px] zero:text-[30px] ">
            Certification
          </span>
          <div className="mt-10 w-[90%] flex lg:flex-row zero:flex-col lg:items-start zero:items-center ">
            <div className="lg:w-[45%] zero:w-[90%] flex justify-center items-center">
              <div className="bg-gray-400 lg:h-[500px] lg:w-[70%] zero:h-[300px] zero:w-[90%] " />
            </div>
            <div className="lg:w-[120px] zero:w-[10px] lg:h-[0px] zero:h-[20px] " />
            <div className="lg:w-[50%] zero:w-full lg:text-2xl zero:text-md lg:text-right zero:text-left">
              <form>
                <div className="flex items-center">
                  <span className="block mr-4 w-[120px]">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="border-2 border-gray-400 border-solid px-2 w-[270px]"
                  />
                </div>

                <div className="flex items-center mt-4">
                  <span className="block mr-4 w-[120px] ">Birth date</span>
                  <input
                    type="date"
                    name="Birth Data"
                    placeholder="123123"
                    className="border-2 border-gray-400 border-solid px-2 w-[270px]"
                  />
                </div>

                <div className="flex items-center mt-4">
                  <span className="block mr-4 w-[120px]">E-mail</span>
                  <input
                    type="email"
                    name="E-mail"
                    placeholder="***@***.***"
                    className="border-2 border-gray-400 border-solid px-2 w-[270px]"
                  />
                </div>

                <div className="flex mt-4">
                  <span className="block lg:mr-4 zero:mr-0 w-[120px]">
                    Gender
                  </span>
                  <div className="grid grid-cols-2 lg:gap-x-28 zero:gap-x-10 lg:gap-y-3 zero:gap-y-1 w-[200px]">
                    <label className="w-20 h-fit flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="bg-slate-400 mr-2"
                      />
                      <span>Male</span>
                    </label>
                    <label className="w-20 h-fit flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="both"
                        className="bg-slate-400 mr-2"
                      />
                      <span>Both</span>
                    </label>{" "}
                    <label className="w-20 h-fit flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="bg-slate-400 mr-2"
                      />
                      <span>Female</span>
                    </label>
                    <label className="w-20 h-fit flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="neither"
                        className="bg-slate-400 mr-2"
                      />
                      <span>Neither</span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-center lg:mt-8 zero:mt-7">
                  <button
                    type="submit"
                    className="bg-[#C63484] text-white lg:px-4 zero:px-[120px] py-1 rounded-md"
                  >
                    Generate
                  </button>
                </div>
              </form>
              {lang ? (
                <div className="text-sm flex text-left lg:mt-5 zero:mt-7">
                  *저는 MSC와 기억 조작 관련 헌법에 기재된 모든 위반사항에 대해
                  책임을 질 수 있음을 동의합니다.
                  <br />
                  <br />
                  당사는 어떤 경우에라도 입력하신 정보를 다른 목적으로는
                  사용하지 않으며 저장하거나 외부로 유출하지 않습니다.
                </div>
              ) : (
                <div className="text-sm flex text-left mt-5">
                  *I agree that I take responsibility for all the violations
                  started the MSC and the Constitution.
                  <br />
                  <br />
                  In any case, we do not use the information you entered for any
                  other purpose and do not store it or leak it to the outside
                  world.
                </div>
              )}
            </div>
          </div>
          <footer className="text-[20px] mt-20 lg:pb-52 zero:pb-20">
            © dasomsong 2023
          </footer>
        </div>
      </WebLayout>
    </main>
  );
}
