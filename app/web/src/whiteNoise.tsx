import Image from "next/image";
import noiseImg from "../../../public/textures/noise.gif";
import { useEffect, useState } from "react";

export default function WhiteNoise() {
  const [isOn, setOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOn(false);
    }, 600);
  }, []);

  return (
    <>
      {isOn ? (
        <div className="w-screen h-screen z-50 absolute bg-[url('/textures/noise.gif')]" />
      ) : null}
    </>
  );
}
