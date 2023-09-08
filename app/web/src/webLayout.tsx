import Frame from "../../../public/textures/monitor_frame.png";
import LogoWitchTurnAround from "../../../public/textures/logo_witch_turnAround.gif";
import Image from "next/image";
import Link from "next/link";

export default function WebLayout({ isHome = false }: { isHome?: boolean }) {
  return (
    <>
      <Image
        src={Frame}
        className="w-screen h-screen z-50 absolute pointer-events-none"
        alt="frame"
      />

      {isHome ? null : (
        <Link href={"/web/home"}>
          <Image
            src={LogoWitchTurnAround}
            className="absolute left-[10%] top-[15%] w-[6%]"
            alt="home"
          />
        </Link>
      )}
      <div
        className="z-10 pointer-events-none w-screen h-screen absolute"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%),linear-gradient(rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))",
          backgroundSize: "100% 2.5px, 100% 3px",
        }}
      />
      <div className="animate-flickerAnim bg-slate-500 bg-opacity-5 z-20 w-full h-full absolute pointer-events-none" />
    </>
  );
}
