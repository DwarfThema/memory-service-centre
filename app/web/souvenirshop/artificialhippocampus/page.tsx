"use client";

import Image from "next/image";
import ArtificialHippocampus from "../../../../public/textures/souvenirShop/PressTShirts.png";
import WebLayout from "../../src/webLayout";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <main className="w-screen h-screen  flex items-center flex-col">
      <WebLayout isHome={false}>
        <div className="flex flex-col items-center w-[80%] mt-32 text-xl">
          <div className="mt-10 w-[90%] flex">
            <Image
              src={ArtificialHippocampus}
              className="w-[50%]"
              alt="ArtificialHippocampus"
            />
            <div className="w-[50%] flex flex-col justify-around py-14">
              <div>
                <span className="block text-[50px]">
                  Artificial Hippocampus
                </span>
                <span className="block text-[36px] mt-5">₩34,000 KRW</span>
              </div>
              <div className="block text-[22px]">
                Order today, and your item is estimated to ship by Wed Sep 27
                2023 <br />
                <br /> - Mon Oct 02 2023. The above date only serves as an
                estimate, and excludes weekends and holidays.(임시 글)
              </div>
              <button className="text-[22px] w-[25%] h-[50px] rounded-md bg-[#C63484]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </WebLayout>
    </main>
  );
}
