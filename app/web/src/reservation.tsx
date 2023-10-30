import { useRecoilState } from "recoil";
import langState from "./atom";

export default function Reservation() {
  const [lang, setLang] = useRecoilState(langState);

  return (
    <div className="md:w-[800px] zero:h-[80%] zero:w-[85%] zero:px-5 zero:pt-2 bg-contain bg-no-repeat bg-center bg-[url('/textures/web-home/Base.png')] flex text-center justify-center items-center flex-col">
      {lang ? (
        <span className="md:text-lg md:mt-10 md:mr-6 zero:text-sm zero:mt-3 zero:mr-2 zero:leading-4">
          본 센터에서는 고객님의 편의를 위하여 온라인 예약서비스를 제공하고
          있습니다. <br />
          <br />
          온라인예약 신청 시 해당 지점에서 확인 후 안내 문자를 보내드립니다.{" "}
          <br />
          <br />
          수술일정 일주일 이전에 MM 코드를 입력하고 예약확정 안내문자를 받으셔야
          예약이 완료된 것입니다.
          <br />
        </span>
      ) : (
        <span className="md:text-xl md:mt-10 md:mr-6 zero:text-sm zero:mt-3 zero:mr-2 zero:leading-3">
          We offer online reservations for your convenience. <br />
          <br />
          If you apply for an online reservation, we will send you a text
          message after confirmation. <br />
          <br />
          Please enter the code MM at least one week before your scheduled
          surgery. Once you receive the confirmation text, your reservation is
          complete.
          <br />
        </span>
      )}
    </div>
  );
}
