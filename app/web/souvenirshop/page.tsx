"use client";

import Image from "next/image";
import SouvenirShop from "../../../public/textures/web-home/Souvenir Shop.png";
import TShirts from "../../../public/textures/souvenirShop/PressTShirts.png";
import Link from "next/link";
import WebLayout from "../src/webLayout";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <main className="w-screen h-screen flex items-center flex-col">
      <WebLayout isHome={false} url={url}>
        <div className="flex flex-col items-center w-[60%] mt-36">
          <Image src={SouvenirShop} className="w-[12%]" alt="witch" />
          <span className="text-[40px]">Souvenir Shop</span>
          <div className="mt-6 w-[90%] grid grid-cols-2 gap-32">
            <button
              onClick={() => {
                setUrl("/web/souvenirshop/msc");
              }}
            >
              <Image src={TShirts} className="w-full" alt="msc" />
              <span className="text-center w-full block text-[22px]">
                M.S.C. Tee
              </span>
            </button>{" "}
            <button
              onClick={() => {
                setUrl("/web/souvenirshop/artificialhippocampus");
              }}
            >
              <Image
                src={TShirts}
                className="w-full"
                alt="artificialhippocampus"
              />
              <span className="text-center w-full block text-[22px]">
                Artificial hippocampus Tee
              </span>
            </button>{" "}
          </div>
          <footer className="text-[20px] mt-20 pb-52">© dasomsong 2023</footer>
        </div>
      </WebLayout>
    </main>
  );
}
