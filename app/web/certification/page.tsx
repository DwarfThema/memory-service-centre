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

  const captureCardArea = async (e: FormEvent) => {
    e.preventDefault();
    const cardArea = document.getElementById("CardArea");
    const cardTextArea = document.getElementById("CardTextArea");
    const nameArea = document.getElementById("NameArea");
    const dobArea = document.getElementById("DOBArea");
    const genderArea = document.getElementById("GenderArea");
    const photoArea = document.getElementById("PhotoDivArea");

    if (
      cardArea &&
      cardTextArea &&
      nameArea &&
      dobArea &&
      genderArea &&
      photoArea
    ) {
      // 1. Backup the original class values
      const originalClasses = cardArea.className;
      const originTextClass = cardTextArea.className;
      const originNameClass = nameArea.className;
      const originDobClass = dobArea.className;
      const originGenderClass = genderArea.className;
      const originPhotoClass = photoArea.className;

      // 2. Change the size classes
      cardArea.className = originalClasses
        .replace("w-[310px]", "w-[620px]")
        .replace("h-[460px]", "h-[920px]");

      cardTextArea.className = originTextClass
        .replace("w-[190px]", "w-[380px]")
        .replace("mt-[185px]", "mt-[390px]")
        .replace("ml-[93px]", "ml-[186px]")
        .replace("text-xl", "text-4xl");

      nameArea.className = originNameClass.replace("h-[32px]", "h-[63px]");
      dobArea.className = originDobClass.replace("h-[31px]", "h-[65px]");
      genderArea.className = originGenderClass.replace("h-[31px]", "h-[75px]");
      photoArea.className = originPhotoClass
        .replace("w-[145px]", "w-[290px]")
        .replace("h-[190px]", "h-[380px]")
        .replace("mr-[200px]", "mr-[400px]");

      // Re-render the component to reflect the changes
      await new Promise((resolve) => setTimeout(resolve));

      // 3. Capture using html2canvas
      const canvas = await html2canvas(cardArea, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      setImg(imgData);

      // 4. Revert to the original class values
      cardArea.className = originalClasses;
      cardTextArea.className = originTextClass;
      nameArea.className = originNameClass;
      dobArea.className = originDobClass;
      genderArea.className = originGenderClass;
      photoArea.className = originPhotoClass;
    }

    setMotal(true);
  };

  return (
    <main className="w-screen h-screen flex items-center flex-col">
      <WebLayout isHome={false} url={url}>
        <div className="flex flex-col items-center xl:mt-[280px] md:mt-36 md:w-6/12 zero:mt-20 zero:w-10/12">
          <Image
            src={Certification}
            className="md:w-[12%] zero:w-[25%] "
            alt="Certification"
          />
          <span className="md:text-[40px] zero:text-[30px] ">
            Certification
          </span>
          <div className="mt-10 w-[90%] flex md:flex-row zero:flex-col md:items-start md:justify-center zero:items-center ">
            <div className="md:w-[310px] zero:w-[90%] flex justify-center items-center">
              <div className="w-[310px] h-[460px] drop-shadow-xl">
                <div
                  id="CardArea"
                  className="w-[310px] h-[460px] p-4 bg-[url('/textures/certification/certificateCard.jpeg')] bg-contain bg-no-repeat flex flex-col"
                >
                  {selectedImage ? (
                    <div
                      id="PhotoDivArea"
                      className="flex justify-center items-center w-[145px] h-[190px] mr-[200px] bg-white "
                    >
                      <Image
                        src={selectedImage}
                        alt="selectedImage"
                        width={145}
                        height={190}
                        className="w-[290px] h-[380px] object-contain"
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
                  <div
                    id="CardTextArea"
                    className="absolute  flex flex-col items-end justify-end w-[190px] mt-[185px] ml-[93px] text-xl"
                  >
                    <div
                      id="NameArea"
                      className="text-right w-[190px] h-[32px] whitespace-nowrap line-clamp-1 "
                    >
                      <span className={mainFont.className}>
                        {name ? name : <br />}
                      </span>
                    </div>
                    <div
                      id="DOBArea"
                      className=" h-[31px] text-right whitespace-nowrap line-clamp-1"
                    >
                      <span className={mainFont.className}>
                        {dob ? dob : <br />}
                      </span>
                    </div>
                    <div
                      id="GenderArea"
                      className=" h-[31px] text-right whitespace-nowrap line-clamp-1"
                    >
                      <span className={mainFont.className}>{gender}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[120px] zero:w-[10px] md:h-[0px] zero:h-[20px] " />
            <div className="md:w-[500px] zero:w-full md:text-2xl zero:text-md md:text-right zero:text-left">
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
                  onChange={onDobChange}
                  lang="en"
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
                <span className="block md:mr-4 zero:mr-0 w-[120px]">
                  Gender
                </span>
                <div className="grid grid-cols-2 md:gap-x-28 zero:gap-x-10 md:gap-y-3 zero:gap-y-1 w-[200px]">
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

              <div className="flex items-center md:mt-2 zero:mt-3">
                <span className="block md:mr-4 zero:mr-0 w-[120px]">Photo</span>
                <div className="flex w-full justify-center">
                  <button
                    className="bg-[#C0C0C0] border-[#929292] border-2 text-black md:px-7 zero:px-[70px] rounded-sm"
                    onClick={onButtonClick}
                  >
                    Upload
                  </button>

                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={onFileChange}
                  />
                </div>
              </div>
              <div className="flex justify-center md:mt-8 zero:mt-7">
                <button
                  type="submit"
                  className="bg-[#C63484] text-white md:px-4 zero:px-[120px] py-1 rounded-md"
                  onClick={captureCardArea}
                >
                  Generate
                </button>
              </div>
              {lang ? (
                <div className="text-sm flex text-left md:mt-5 zero:mt-7">
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
          <footer className="text-[20px] mt-20 md:pb-52 zero:pb-20">
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
          <div className="md:h-[55%] md:w-[55%] zero:h-[80%] zero:w-[85%] zero:px-5 zero:pt-2 bg-contain bg-no-repeat bg-center  flex text-center justify-center items-center flex-col text-white text-2xl">
            <>
              <Image src={img} width={310} height={460} alt="IDCARD" />
              <a href={img} download={`${name} ID CARD`}>
                DOWNLOAD CARD
              </a>
            </>
          </div>
        </div>
      ) : null}
    </main>
  );
}
