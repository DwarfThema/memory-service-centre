"use client";

import Image from "next/image";
import PressRelease from "../../../public/textures/web-home/Press Releases.png";
import A_1 from "../../../public/textures/pressReleases/1-1.png";
import A_2 from "../../../public/textures/pressReleases/1-2.png";
import B_1 from "../../../public/textures/pressReleases/2-1.png";
import B_2 from "../../../public/textures/pressReleases/2-2.png";
import C_1 from "../../../public/textures/pressReleases/3-1.png";
import C_2 from "../../../public/textures/pressReleases/3-2.png";
import D_1 from "../../../public/textures/pressReleases/4-1.png";
import D_2 from "../../../public/textures/pressReleases/4-2.png";
import E_1 from "../../../public/textures/pressReleases/5-1.png";
import E_2 from "../../../public/textures/pressReleases/5-2.png";
import Link from "next/link";
import WebLayout from "../src/webLayout";
import { useState } from "react";
export default function Home() {
  const [url, setUrl] = useState("");

  const [isPressView, setPressView] = useState(false);
  const [pressContents, setPressContents] = useState(0);

  return (
    <main className="w-screen h-screen  flex items-center flex-col">
      <WebLayout isHome={false} url={url}>
        {isPressView ? (
          <div
            onClick={() => {
              setPressView((prev) => !prev);
            }}
            className="absolute w-screen py-[600px] justify-center bg-black bg-opacity-60 z-30 flex cursor-pointer"
          >
            <PressView pressContents={pressContents} />
          </div>
        ) : null}

        <div className="flex flex-col items-center w-[50%] mt-56">
          <Image src={PressRelease} className="w-[12%]" alt="witch" />
          <span className="text-[40px]">Press Release</span>
          <div className="mt-20 grid grid-cols-1 gap-5">
            <button
              className="flex hover:bg-gray-300 p-3"
              onClick={() => {
                setPressView(true);
                setPressContents(0);
              }}
            >
              <Image src={A_1} alt="A_1" className="w-[30%]" />
              <div className="w-[5%]" />
              <div className="flex flex-col text-left w-[65%] py-2">
                <div className="font-bold text-[25px]">
                  MSC CEO Highlights Focus on Individual Happiness Over Concerns
                  of Side Effects
                </div>
                <div className="text-gray-400 font-thin text-[20px]">
                  FEBRUARY 11, 2042
                </div>
              </div>
            </button>
            <button
              className="flex hover:bg-gray-300 p-3"
              onClick={() => {
                setPressView(true);
                setPressContents(1);
              }}
            >
              <Image src={B_1} alt="B_1" className="w-[30%]" />
              <div className="w-[5%]" />
              <div className="flex flex-col text-left w-[65%] py-2">
                <div className="font-bold text-[25px]">
                  {`MSC Approved as the World's First Memory Modification
                  Institution by Memory Regulation Bureau (MMR)`}
                </div>
                <div className="text-gray-400 font-thin text-[20px]">
                  JULY 03, 2042
                </div>
              </div>
            </button>
            <button
              className="flex hover:bg-gray-300 p-3"
              onClick={() => {
                setPressView(true);
                setPressContents(2);
              }}
            >
              <Image src={C_1} alt="C_1" className="w-[30%]" />
              <div className="w-[5%]" />
              <div className="flex flex-col text-left w-[65%] py-2">
                <div className="font-bold text-[25px]">
                  Thomas Ray, Chairman of the International Brain Association,
                  Commits to Ongoing Research on Regulations Related to Memory
                  Modification and Crime
                </div>
                <div className="text-gray-400 font-thin text-[20px]">
                  JANUARY 31, 2043
                </div>
              </div>
            </button>
            <button
              className="flex hover:bg-gray-300 p-3"
              onClick={() => {
                setPressView(true);
                setPressContents(3);
              }}
            >
              <Image src={D_1} alt="D_1" className="w-[30%]" />

              <div className="w-[5%]" />
              <div className="flex flex-col text-left w-[65%] py-2">
                <div className="font-bold text-[25px]">
                  MSC Signs a Massive 300 Billion KRW Contract with Hippo&campus
                  Co., Ltd for Artificial Hippocampus Chips
                </div>
                <div className="text-gray-400 font-thin text-[20px]">
                  APRIL 03, 2043
                </div>
              </div>
            </button>
            <button
              className="flex hover:bg-gray-300 p-3"
              onClick={() => {
                setPressView(true);
                setPressContents(4);
              }}
            >
              <Image src={E_1} alt="E_1" className="w-[30%]" />

              <div className="w-[5%]" />
              <div className="flex flex-col text-left w-[65%] py-2">
                <div className="font-bold text-[25px]">
                  {`American Pop Star Wina McCarthy said, “Memory Modification is
                  a 21st Century’s Soul Detox”`}
                </div>
                <div className="text-gray-400 font-thin text-[20px]">
                  AUGUST 16, 2043
                </div>
              </div>
            </button>
          </div>
          <div className="text-[20px] mt-20 pb-52">© dasomsong 2023</div>
        </div>
      </WebLayout>
    </main>
  );
}

function PressView({ pressContents }: { pressContents: number }) {
  return (
    <div className="w-[55%] bg-white flex p-20 flex-col">
      <span className="text-[28px] font-extrabold">
        {pressContentsObj[pressContents].title}
      </span>
      <span className="block text-xl text-gray-400 font-extralight">
        {pressContentsObj[pressContents].author}
      </span>
      <span className="block text-xl text-gray-400 font-extralight">
        {pressContentsObj[pressContents].date}
      </span>
      <div>
        <div className="flex justify-center my-10 items-center flex-col ml-3">
          <Image
            src={pressContentsObj[pressContents].pictureUrl}
            width={350}
            height={350}
            alt="pressPhoto"
          />
          <span className="text-center text-lg mt-1 text-gray-400">
            {" "}
            {pressContentsObj[pressContents].pictureCaption}{" "}
          </span>
        </div>
        <span className="text-xl mr-6 whitespace-pre-line">
          {pressContentsObj[pressContents].contents}
        </span>
      </div>
    </div>
  );
}

const pressContentsObj = [
  {
    title:
      "MSC CEO Highlights Focus on Individual Happiness Over Concerns of Side Effects",
    author: "By Brenda Hermann, WNN",
    date: "Date 2042-02-11, 11:58 AM",
    contents:
      "In March, the CEO of the Memory Service Center (MSC) participated in the 'VISION 2050' conference organized by the World Memory Regulation Association (WMO) in Los Angeles, addressing ethical concerns and public opinions regarding side effects in the commercialization process of memory technology. They emphasized the importance of prioritizing individual happiness over concerns about side effects.\n\n Memory Service Center has recently encountered various controversies and ethical dilemmas while developing innovative technology that allows Modification of memories and aims to commercialize it. This technology  permits the deletion or modification of portions of one's memory, raising the possibility of manipulating individuals' past experiences.\n\n Regarding these issues, the MSC CEO stated, \"Our technology is designed to enhance individual happiness.\" They further emphasized, \"While there are concerns about side effects and ethical issues, our goal is to assist individuals in leading more fulfilling lives.\"\n\n\n Furthermore, they highlighted their efforts to establish strict ethical guidelines and supervision to ensure the responsible use of all technologies. They also urged users to utilize the technology appropriately and carefully consider its effects.\n\n MSC aims to support the treatment of mental issues such as post-traumatic stress disorder, addiction, anxiety, and depression, as well as personal development through this memory technology, with a focus on the happiness and well-being of each individual customer.\n\n However, the introduction and use of such technology still raise significant ethical, legal, and societal concerns, and discussions and oversight in this regard are expected to continue. Innovative companies like MSC are expected to proceed with the commercialization of new technology while taking these concerns into account.",
    pictureUrl: "/textures/pressReleases/1-2.png",
    pictureCaption: "▲ MSC CEO posing in the ‘VISION 2050’",
  },
  {
    title:
      "MSC Approved as the World's First Memory Modification Institution by Memory Regulation Bureau (MMR)",
    author: "By Mark Reeves, WNN USA",
    date: "Date 2042-07-03, 4:32 PM",
    contents:
      "The Memory Service Center (MSC) has obtained approval as the world's first memory Modification institution, paving the way for the gradual commercialization of technology that allows the Modification of individual memories for service and therapeutic purposes.\n\n MSC successfully passed rigorous evaluations by the Memory Regulation Bureau (MMR) and has gained formal authorization from the FDA to offer eight approved services. Among these services are artificial hippocampus transplantation, trauma memory deletion, memory recovery, and various therapeutic methods expected to enhance and manage individuals' memories in diverse situations related to mental health issues.\n\n Starting in November 2042, these services are set to be available, promising more effective management and Modification of individual memories with the introduction of this technology. This innovation is anticipated to bring about groundbreaking changes in the field of mental health, with ongoing discussions regarding ethical and legal concerns.\n\n The MSC representative stated, \"Our goal is to enhance individual happiness and well-being, combining technology with ethical guidelines to provide safe and effective services.\" They emphasized their commitment to carefully managing the responsible utilization of this technology within society.\n\n MSC's advancement signifies an innovative shift in the fields of memory and mental health, with expectations for further expansion of research and development in related areas in the future.",
    pictureUrl: "/textures/pressReleases/2-2.png",
    pictureCaption: "▲ Patient receiving 'Memory Services' through the NET-X8",
  },
  {
    title:
      "Thomas Ray, Chairman of the International Brain Association, Commits to Ongoing Research on Regulations Related to Memory Modification and Crime",
    author: "By Aleksandra Vojvodic, WNN",
    date: "Date 2043-01-31, 2:10 PM",
    contents:
      'Thomas Ray, Chairman of the International Brain Association, has announced his commitment to conducting continuous research on regulations related to crimes associated with memory Modification. Such research is being emphasized as a crucial effort to address various crimes that may arise due to the advancement of memory Modification technology.\n\n Chairman Ray stated, "Memory Modification technology is innovative, but it has also led to an increase in criminal and ethical issues. We are determined to address these issues and explore ways to strengthen laws and regulations." These efforts aim to underscore the need for regulations related to memory Modification and to improve existing laws more effectively.\n\n Chairman Ray emphasized, "We are actively addressing the ethical and societal issues arising alongside the advancement of brain technology. We will do our utmost to ensure that progress occurs safely and ethically." He also stressed the need to embrace new technologies and guide them toward better directions, as humanity has always faced challenges when encountering new technologies throughout history.\n\n In fact, a survey conducted in December of last year revealed that 30.8% of Ripple patients had a history of memory Modification, and the perpetrator of a recent shooting incident in Madrid, Spain, was found to have been suffering from the Theseus syndrome, denying himself after memory Modification procedures.\n\n Memory Modification technology is currently being researched in various fields, and corresponding laws and regulations are expected to play an increasingly crucial role in the future.',
    pictureUrl: "/textures/pressReleases/3-2.png",
    pictureCaption: "▲ Thomas Ray presenting on Memory Modification",
  },
  {
    title:
      "MSC Signs a Massive 300 Billion KRW Contract with Hippo&campus Co., Ltd for Artificial Hippocampus Chips",
    author: "By Gwen Lee, WNN USA",
    date: "Date 2043-04-03, 10:45 AM",
    contents:
      "The Memory Service Center (MSC) has entered into a significant contract for artificial hippocampus chips with Hippo&campus Co., Ltd. This contract signifies a substantial collaboration for the production and expansion of services related to artificial hippocampus chips, with a total contract value of 300 billion KRW.\n\n Hippo&campus Co., Ltd is a technology company based in New York State, USA, known for its pioneering work in the development and production of advanced artificial hippocampus chips. Through this agreement, MSC is set to enhance the quality and production capacity of artificial hippocampus chips it offers to customers.\n\n As per the terms of the contract, MSC will pay an initial advance payment of 100 billion KRW to Hippo&campus and will make sequential payments of the remaining 200 billion KRW until 2046. These conditions reflect a long-term collaboration between the two entities, aiming for improved technological innovation and service quality.\n\n Furthermore, this collaboration also highlights noteworthy environmental considerations. Hippo&campus Co., Ltd is actively pursuing plans to source 100% of its factory's power from renewable energy, aiming to create an eco-friendly production environment. MSC is likewise committed to sustainable business models and environmentally friendly product manufacturing, and this contract is seen as a part of those efforts.\n\n The collaboration between MSC and Hippo&campus Co., Ltd is expected to strengthen the competitiveness of both companies in the artificial hippocampus chip market, contributing to the advancement and innovation in the field of brain technology.",
    pictureUrl: "/textures/pressReleases/4-2.png",
    pictureCaption: "▲ MSC CEO and Hippo&campus CEO Shaking Hands",
  },
  {
    title:
      "American Pop Star Wina McCarthy said, “Memory Modification is a 21st Century’s Soul Detox”",
    author: "By Kwangar West, WNN Star",
    date: "Date 2043-08-16, 09:11 AM",
    contents: `Popular American pop star Wina McCarthy has praised memory Modification technology as a "21st- century’s detox for the soul," revealing that she, too, has benefited from the "trauma memory deletion" service and can now share her experiences with the public.\n\n Wina McCarthy made her debut in February with the single "Elimination!" and has since gained immense popularity as a pop artist. She discussed the advantages of memory Modification technology, emphasizing the positive impact it has had on her life and experiences.\n\n McCarthy stated, "Memory Modification is a 21st-century detox. It offers the opportunity to overcome past wounds or traumas and start anew," passionately describing how this technology can positively influence one\'s soul and mental well-being allowing her to simultaneously pursue her artistry and achieve emotional healing.\n\n Furthermore, during a VMA Freshman interview, McCarthy stated, "If there are people around you who can\'t move forward into the future because of their past, I would strongly recommend memory Modification." Her remarks underscore her strong support for the idea that memory Modification technology can have a positive impact on individuals\' lives.\n\n MSC researchers continue to monitor such cases, exploring how memory Modification technology can positively influence human lives and mental well-being. They remain committed to investigating the ethical use and innovative potential of this technology.`,
    pictureUrl: "/textures/pressReleases/5-2.png",
    pictureCaption: "▲ American Pop Star Wina McCarthy",
  },
];
