"use client";

import Image from "next/image";
import Certification from "../../../public/textures/web-home/Certification.png";
import CertificationCard from "../../../public/textures/certification/certificateCard.jpeg";
import Link from "next/link";
import WebLayout from "../src/webLayout";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import langState from "../src/atom";
import { Oswald } from "next/font/google";
import html2canvas from "html2canvas";

const mainFont = Oswald({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  const [url, setUrl] = useState("");
  const [lang, setLang] = useRecoilState(langState);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const [img, setImg] = useState("");
  const [isModal, setMotal] = useState(false);

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        localStorage.setItem("uploadedImage", base64);
        setSelectedImage(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onDobChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    const formattedDate = `${date.getDate()} ${date.toLocaleString("en-US", {
      month: "short",
    })}.`;
    setDob(formattedDate);
  };

  const onGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  function submitOn() {
    console.log("isisis");

    setMotal(true);
  }

  const captureCardArea = async (e: FormEvent) => {
    e.preventDefault();
    const cardArea = document.getElementById("CardArea");
    if (cardArea) {
      const canvas = await html2canvas(cardArea);
      const imgData = canvas.toDataURL("image/png");
      setImg(imgData);
    }

    setMotal(true);
  };

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
            <div className="lg:w-[310px] zero:w-[90%] flex justify-center items-center">
              <div
                id="CardArea"
                className="w-[310px] h-[460px] p-4 bg-[url('/textures/certification/certificateCard.jpeg')] bg-contain bg-no-repeat flex flex-col"
              >
                {selectedImage ? (
                  <div className="flex justify-center items-center w-[145px] h-[190px] mr-[200px] bg-white">
                    <Image
                      src={selectedImage}
                      alt="selectedImage"
                      width={145}
                      height={190}
                      className="w-[145px] h-[190px] object-contain"
                    />
                  </div>
                ) : (
                  <div>
                    <button
                      className="w-[145px] h-[190px]"
                      onClick={onButtonClick}
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={onFileChange}
                    />
                  </div>
                )}
                <div className="absolute  flex flex-col items-end justify-end w-[190px] mt-[185px] ml-[93px] text-xl">
                  <div className="text-right w-[190px] h-[32px] whitespace-nowrap line-clamp-1 ">
                    <span className={mainFont.className}>
                      {name ? name : <br />}
                    </span>
                  </div>
                  <div className=" h-[31px] text-right whitespace-nowrap line-clamp-1">
                    <span className={mainFont.className}>
                      {dob ? dob : <br />}
                    </span>
                  </div>
                  <div className=" h-[31px] text-right whitespace-nowrap line-clamp-1">
                    <span className={mainFont.className}>{gender}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[120px] zero:w-[10px] lg:h-[0px] zero:h-[20px] " />
            <div className="lg:w-full zero:w-full lg:text-2xl zero:text-md lg:text-right zero:text-left">
              <form>
                <div className="flex items-center">
                  <span className="block mr-4 w-[120px]">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    maxLength={15}
                    className="border-2 border-gray-400 border-solid px-2 w-[270px]"
                    onChange={onNameChange}
                  />
                </div>

                <div className="flex items-center mt-4">
                  <span className="block mr-4 w-[120px] ">Birth date</span>
                  <input
                    type="date"
                    name="BirthData"
                    className="border-2 border-gray-400 border-solid px-2 w-[270px]"
                    required
                    pattern="\d{4}-\d{2}-\d{2}"
                    onChange={onDobChange}
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
                        value="Male"
                        className="bg-slate-400 mr-2"
                        onChange={onGenderChange}
                      />
                      <span>Male</span>
                    </label>
                    <label className="w-20 h-fit flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Both"
                        className="bg-slate-400 mr-2"
                        onChange={onGenderChange}
                      />
                      <span>Both</span>
                    </label>{" "}
                    <label className="w-20 h-fit flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        className="bg-slate-400 mr-2"
                        onChange={onGenderChange}
                      />
                      <span>Female</span>
                    </label>
                    <label className="w-20 h-fit flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Neither"
                        className="bg-slate-400 mr-2"
                        onChange={onGenderChange}
                      />
                      <span>Neither</span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-center lg:mt-8 zero:mt-7">
                  <button
                    type="submit"
                    className="bg-[#C63484] text-white lg:px-4 zero:px-[120px] py-1 rounded-md"
                    onClick={captureCardArea}
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
      {isModal ? (
        <div
          onClick={() => {
            setMotal((prev) => !prev);
          }}
          className="fixed w-screen h-screen bg-black bg-opacity-60 z-20 flex items-center justify-center cursor-pointer"
        >
          <div className="lg:h-[55%] lg:w-[55%] zero:h-[80%] zero:w-[85%] zero:px-5 zero:pt-2 bg-contain bg-no-repeat bg-center  flex text-center justify-center items-center flex-col text-white text-2xl">
            <>
              <Image src={img} width={310} height={460} alt="IDCARD" />
              DOWNLOAD CARD
            </>
          </div>
        </div>
      ) : null}
    </main>
  );
}
