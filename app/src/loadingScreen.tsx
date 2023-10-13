import { useProgress } from "@react-three/drei";
import Image from "next/image";
import { useEffect, useState } from "react";
import Suppoerter from "../../public/textures/supporter.png";
import LogoGif from "../../public/textures/logo_witch_turnAround.gif";
import Logo from "../../public/textures/logo.png";
import Link from "next/link";

export default function LoadingScreen() {
  const { progress, loaded } = useProgress();
  const [loading, setLoading] = useState(false);
  const [transitionEnd, setTransitionEnd] = useState(false);

  useEffect(() => {
    if (loaded >= 52) {
      setLoading(true);
      setTimeout(() => {
        setTransitionEnd(true);
      }, 5500);
    }
  }, [progress, loaded]);

  return (
    <div
      className={clsstail(
        "absolute bg-white w-screen h-screen flex flex-col justify-center items-center text-black ",
        loading ? "opacity-0" : "opacity-100",
        transitionEnd ? "z-0 hidden" : "z-20"
      )}
    >
      <div className="flex flex-col items-center justify-center w-3/5 ">
        <Image src={LogoGif} className="w-1/6 h-fit" alt="witch" />
        <Image src={Logo} className="w-full h-fit" alt="logo" />
        <div className="flex flex-col font-extralight text-zinc-800 text-3xl my-5 items-center justify-center">
          <div className="">NOW LOADING</div>
          <div className="">{Math.floor((loaded / 52) * 100)}%</div>
        </div>
        <Link
          href="https://www.vivlepark.com"
          className="md:w-[50%] mt-5 w-[100%]"
          target="_blank"
        >
          <Image src={Suppoerter} alt="support" />
        </Link>
      </div>
    </div>
  );
}

function clsstail(...classnames: string[]) {
  return classnames.join(" ");
}
// [1,2,3] = join("/") => "1/2/3"
