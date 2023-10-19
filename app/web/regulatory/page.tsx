"use client";

import Image from "next/image";
import Regulatory from "../../../public/textures/web-home/Regulatory.png";
import { useState } from "react";
import { useRecoilState } from "recoil";
import WebLayout from "../src/webLayout";
import Reservation from "../src/reservation";
import langState from "../src/atom";
import Minister from "../../../public/textures/regulatory/minister of memory regulatory.png";
import FigureMemory from "../../../public/textures/regulatory/Figure-Memory HD.png";
import Memorycomparison from "../../../public/textures/regulatory/notice-Memory comparison test.png";
import TheseusSyndrome from "../../../public/textures/regulatory/notice-Theseus syndrome-2.png";

export default function Home() {
  const [isReservation, setReservation] = useState(false);
  const [lang, setLang] = useRecoilState(langState);

  const [tab1State, setTab1State] = useState(true);
  const [tab2State, setTab2State] = useState(false);
  const [tab3State, setTab3State] = useState(false);
  const [tab4State, setTab4State] = useState(false);

  return (
    <main className="w-screen h-screen flex items-center flex-col">
      <link rel="stylesheet" href="https://unpkg.com/98.css" />
      <WebLayout isHome={false}>
        {isReservation ? (
          <div
            onClick={() => {
              setReservation((prev) => !prev);
            }}
            className="fixed w-screen h-screen bg-black bg-opacity-60 z-50 flex items-center justify-center cursor-pointer"
          >
            <Reservation />
          </div>
        ) : null}
        <div className="flex flex-col items-center w-6/12 mt-36 text-xl">
          <Image src={Regulatory} className="w-[12%]" alt="witch" />
          <span className="text-[40px]">Regulatory</span>
          <div className="window-body pt-[70px] w-[100%]">
            <menu role="tablist">
              <li role="tab" aria-selected={tab1State}>
                <a
                  href="#tabs"
                  onClick={() => {
                    setTab1State(true);
                    setTab2State(false);
                    setTab3State(false);
                    setTab4State(false);
                  }}
                  className="px-8"
                >
                  {lang ? <>기억 법률</> : <>Memory Regulatory (Law)</>}
                </a>
              </li>
              <li role="tab" aria-selected={tab2State}>
                <a
                  href="#tabs"
                  onClick={() => {
                    setTab1State(false);
                    setTab2State(true);
                    setTab3State(false);
                    setTab4State(false);
                  }}
                  className="px-7"
                >
                  MMR
                </a>
              </li>
              <li role="tab" aria-selected={tab3State}>
                <a
                  href="#tabs"
                  onClick={() => {
                    setTab1State(false);
                    setTab2State(false);
                    setTab3State(true);
                    setTab4State(false);
                  }}
                  className="px-7"
                >
                  Privacy
                </a>
              </li>
              <li role="tab" aria-selected={tab4State}>
                <a
                  href="#tabs"
                  onClick={() => {
                    setTab1State(false);
                    setTab2State(false);
                    setTab3State(false);
                    setTab4State(true);
                  }}
                  className="px-7"
                >
                  Notice
                </a>
              </li>
            </menu>
            <div className="window" role="tabpanel">
              <div className="window-body text-lg">
                <div className="py-8 px-8">
                  {lang ? (
                    tab1State ? (
                      <>
                        <span className="font-extrabold text-[30px]">
                          제 23장 기억 조작
                        </span>
                        <br />
                        <br />

                        <div className="text-[17px] bg-white px-3 py-3">
                          제 1조 <br />
                          &nbsp;&nbsp;&nbsp;모든 기억 조작은국가에서 통제하며,
                          시행되는 모든 기억 조작을 시스템에 기록하여 30년간
                          보관한다. <br />
                          제 2조
                          <br />
                          &nbsp;&nbsp;&nbsp;모든 기억 조작은 실행 이전에 본인의
                          권리가 보장되어야 하며, 어떠한 경우에도 본인의 동의
                          없이 타인에 의해 실행 될 수 없다.
                          <br />
                          제 3조
                          <br />
                          &nbsp;&nbsp;&nbsp;기억 조작 기록에 접근할 수 있는 이는
                          오직 본인 뿐이며, 범죄 혐의점이 있어 수사를 요하는
                          과정에서 불가피한 접근이 필요한 경우에만 이를
                          허락한다.
                          <br />
                          제 4조
                          <br />
                          &nbsp;&nbsp;&nbsp;혼인관계나 법적으로 등록된 가족
                          이외의 제 3자와 사랑에 대한 감정 혹은 그에 상응하는
                          목적으로 기억을 조작하는 것을 금한다.
                          <br />
                          제 5조
                          <br />
                          &nbsp;&nbsp;&nbsp;지식 혹은 기술과 관련된 학습에 대한
                          기억을 조작하는 것을 금한다.
                          <br />
                          제 6조
                          <br />
                          &nbsp;&nbsp;&nbsp;기억에 대한 조작이 범죄와 관련된
                          활동에 이용될 경우, 이는 가중처벌의 대상으로 지정한다.
                          <br />
                          제 7조
                          <br />
                          &nbsp;&nbsp;&nbsp;개인의 판단으로 적법한 절차를 거치지
                          않고 제 3자의 기억을 조작하는 것을 금한다.
                          <br />
                          제 8조
                          <br />
                          &nbsp;&nbsp;&nbsp;다음과 같은 정신적인 질환을 극복하기
                          위한 목적으로 기억을 조작할 경우, 해당 진료의사의
                          의학적 판단에 따라 진행한다:
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가. 외상 후
                          스트레스 (PTSD, Post-traumaticStressDisorder)
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;나. 우울장애
                          (Depressive Disorder)
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다. 경증-중등증의
                          조현병(Schizophernia)
                          <br />
                          제 9조
                          <br />
                          &nbsp;&nbsp;&nbsp;기억 조작이 헌법에 의거하여 적절한
                          상황이 아니라고 판단될 경우, 조작자의 재량으로 중단할
                          수 있다.
                          <br />
                          제 10조
                          <br />
                          &nbsp;&nbsp;&nbsp;라이선스가 부여된 기억을 구매한
                          뒤이를 제 3자에게 2차적으로 판매할 경우, 이는
                          가중처벌의 대상으로 지정한다.
                          <br />
                          제 11조
                          <br />
                          &nbsp;&nbsp;&nbsp;기억 조작 시, 기존 기억의 50% 이상이
                          다른 기억으로 대체될 경우, 이는 위법행위로 간주한다.
                          단, 질병이나 사고로 인해 기억 혹은 인지적 판단이
                          불가한 경우는 제외한다.
                          <br />
                        </div>
                      </>
                    ) : tab2State ? (
                      <>
                        <span className="font-extrabold text-[30px]">
                          MMR 이란?
                        </span>
                        <br />
                        <br />
                        <div className="text-[17px] bg-white px-10 py-1">
                          <div className="flex justify-center items-center my-10">
                            <Image
                              src={Minister}
                              alt="minister of memory regulatory"
                              className="w-[50%]"
                            />
                          </div>
                          MMR은 &quot;Memory Modification Regulations&quot;의
                          약자로, 다양한 기억 관련 기술 및 서비스를 감독하고
                          규제하는 기관이며, 기억 관련 기술을 사용하는 과정에서
                          발생할 수 있는 윤리적, 법적, 및 사회적 문제를
                          규제합니다. 이 기관은 다음과 같은 주요 역할을
                          수행합니다:
                          <ul className=" list-disc list-outside px-10 py-5 my-5">
                            <li>
                              라이선스 발급 및 감독: 기억 조작 기술을 개발하거나
                              사용하기 위해서는 MMR로부터 라이선스를 받아야
                              합니다. MMR은 라이선스를 발급하고 해당 기술 또는
                              서비스의 사용을 감독합니다.
                            </li>
                            <br />
                            <li>
                              윤리적 및 법적 가이드라인 제공: MMR은 이러한 기술
                              및 서비스를 이용할 때의 윤리적 가이드라인을
                              제공하며, 법적 제약 사항을 안내합니다. 이를 통해
                              이용자와 제공자가 기술을 적절하게 사용할 수 있도록
                              돕습니다.
                            </li>
                            <br />
                            <li>
                              기술 평가와 안전성 확인: MMR은 새로운 기억 조작
                              기술이나 서비스가 안전하며 윤리적으로 수용
                              가능한지 평가하고, 필요한 경우 안전성 검증을
                              수행합니다.
                            </li>
                            <br />
                            <li>
                              개인 정보 보호 및 권리 보장: 사용자의 개인 정보
                              보호와 권리 보호를 강화하며, 기억 조작 기술을 통해
                              얻은 정보의 안전한 보관을 관리합니다.
                            </li>
                            <br />
                            <li>
                              범죄와 법적 문제 조사: 기억 조작 기술이 범죄 또는
                              법적 문제와 연관될 때, MMR은 조사 및 법적 절차를
                              조율하고 관리합니다.
                            </li>
                          </ul>
                        </div>
                        <span className="font-extrabold text-[20px] block py-1 mt-3">
                          잠깐만요 !
                        </span>
                        <div className="text-[17px] bg-white px-10  py-3">
                          기억 조작 서비스 결제 후 MM 코드를 받으셨나요? 받지
                          못했다면 메모리 규제부(MMR) 사이트를 방문하여 기억
                          조작 플랜을 신청하세요. 플랜 신청이 거부되지 않는 한
                          영업일 기준 7일 이내에 MM 코드를 받을 수 있습니다.
                          코드가 없으면 메모리를 조작할 수 없으며 구매가
                          취소됩니다. *MM 코드: 기억 조작 코드 / ex.
                          M4032235-AD-2A
                        </div>

                        <span className="font-extrabold text-[20px] block py-1 mt-3">
                          잠깐만요 !
                        </span>
                        <div className="text-[17px] bg-white px-10 py-3">
                          기억 시술사의 ID 카드를 확인하셨나요? 시술 전에
                          시술사의 ID 카드를 보여달라고 요청하세요. <br />
                          메모리 규제부(MMR)의 인증을 받은 것이어야 합니다. 또한
                          ID 카드 뒤에 있는 QR 코드를 스캔하여 시술사의 정보를
                          확인할 수 있습니다. 문제가 발생하면 경찰에 신고하고
                          즉시 센터에서 나가세요.
                        </div>
                      </>
                    ) : tab3State ? (
                      <>
                        <br />
                        <br />
                        <div className="text-[17px] bg-white px-10 py-1">
                          <div className="flex my-10">
                            <Image
                              src={FigureMemory}
                              alt="minister of memory regulatory"
                              className="w-[30%]"
                            />
                            <span className="ml-5">
                              모든 시술 내역은 기록되어 30년 동안 보관됩니다.
                              이는 정부의 규제를 받게 됩니다. 하지만 걱정하지
                              마세요! <br /> 회원님이 기록 열람을 신청하지 않는
                              한 봉인되어 있습니다.
                              <br /> 또한, 여러분의 기록은 다른 사람이 볼 수
                              없습니다.
                              <br /> So just keep drinking your beer.
                            </span>
                          </div>
                        </div>
                      </>
                    ) : tab4State ? (
                      <>
                        <div>
                          <span className="font-extrabold text-[15px]">
                            ‘테세우스의 역설’을 아시나요?
                          </span>
                          <br />
                          <div className="text-[17px] bg-white px-10 py-1 mt-1">
                            <div className="flex my-10">
                              <Image
                                src={TheseusSyndrome}
                                alt="minister of memory regulatory"
                                className="w-[450px] h-fit"
                              />
                              <span className="ml-5">
                                테세우스가 타고 왔던 배의 판자를 점차 다른
                                판자를 갈아 끼우다 보면 어느 시점에는 테세우스가
                                있었던 원래의 배의 조각은 하나도 남지 않게
                                됩니다. 그렇다면 그 배를 ‘테세우스의 배’라고
                                부를 수 있을까요? <br />
                                <br />
                                기억 규제 관련 법령에 의거 기존 기억의 50%
                                이상이 바뀌게 될 경우 이는 위법행위로
                                간주됩니다.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <span className="font-extrabold text-[15px]">
                            기억 동등성 시험평가 (Memory Equivalent Assessment)
                          </span>
                          <br />
                          <div className="text-[17px] bg-white px-10 py-1 mt-1">
                            <div className="flex my-10">
                              <Image
                                src={Memorycomparison}
                                alt="minister of memory regulatory"
                                className="w-[400px] h-fit"
                              />
                              <span className="ml-5">
                                기존 기억을 대체하는 인공해마 수술이나 기억 제거
                                혹은 기억 추가를 통한 기억 조작 시, 기억 조작
                                이후의 기억과 기존 기억이 50% 이상 차이나지
                                않는지 실시하는 평가입니다.
                                <br />
                                <br />
                                업로드 된 기억을 십진수 데이터로 변환하여 조작
                                이후 예상되는 기억의 데이터와 비교합니다. 만약
                                데이터의 차이가 50% 이상이 될 경우, 기억 조작은
                                위법행위로 간주되어 통제됩니다.
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null
                  ) : tab1State ? (
                    <>
                      <span className="font-extrabold text-[30px]">
                        Chapter 23 Memory modification
                      </span>
                      <br />
                      <br />
                      <div className="text-[17px] bg-white px-3 py-3">
                        <span className="text-[21px] pt-3 block">
                          Article 1
                        </span>
                        &nbsp;&nbsp;&nbsp;All memory modification shall be
                        controlled by the state, and all instances of memory
                        modification conducted shall be recorded in the system
                        and retained for 30 years.
                        <span className="text-[20px] pt-3 block">
                          Article 2
                        </span>
                        &nbsp;&nbsp;&nbsp;Prior to the execution of any memory
                        modification, the rights of the individual must be
                        ensured, and under no circumstances shall modification
                        be carried out by others without the explicit consent of
                        the individual.
                        <span className="text-[20px] pt-3 block">
                          Article 3
                        </span>
                        &nbsp;&nbsp;&nbsp;Access to records of memory
                        modification shall be granted solely to the individual,
                        with exceptions allowed only when necessary for
                        investigations involving criminal charges that require
                        unavoidable access.
                        <span className="text-[20px] pt-3 block">
                          Article 4
                        </span>
                        &nbsp;&nbsp;&nbsp;Memory modification for the purpose of
                        emotions related to love or equivalent sentiments, with
                        third parties other than those within the bounds of
                        marital or legally registered familial relations, is
                        prohibited.
                        <span className="text-[20px] pt-3 block">
                          Article 5
                        </span>
                        &nbsp;&nbsp;&nbsp;Memory modification related to
                        learning involving knowledge or skills is prohibited.
                        <span className="text-[20px] pt-3 block">
                          Article 6
                        </span>
                        &nbsp;&nbsp;&nbsp;If memory modification is employed in
                        activities related to criminal conduct, it shall be
                        subject to enhanced penalties.
                        <span className="text-[20px] pt-3 block">
                          Article 7
                        </span>
                        &nbsp;&nbsp;&nbsp;Unauthorized modification of a third
                        party&apos;s memories without undergoing a legal
                        procedure is prohibited.
                        <span className="text-[20px] pt-3 block">
                          Article 8
                        </span>
                        &nbsp;&nbsp;&nbsp;For the purpose of overcoming the
                        following mental disorders, memory modification shall
                        proceed at the discretion of the attending medical
                        professional based on their medical assessment:
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Post-Traumatic
                        Stress Disorder (PTSD)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Depressive
                        Disorder
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. Schizophrenia of
                        mild to moderate severity
                        <br />
                        <span className="text-[20px] pt-3 block">
                          Article 9
                        </span>
                        &nbsp;&nbsp;&nbsp;If memory modification is determined
                        not to be in accordance with the Constitution, the
                        manipulator may cease it at their discretion.
                        <span className="text-[20px] pt-3 block">
                          Article 10
                        </span>
                        &nbsp;&nbsp;&nbsp;Secondary sale of licensed memories
                        purchased by an individual, to a third party, shall be
                        subject to enhanced penalties.
                        <span className="text-[20px] pt-3 block">
                          Article 11
                        </span>
                        &nbsp;&nbsp;&nbsp;In cases of memory modification, if
                        over 50% of the original memories are replaced with
                        different ones, such action shall be deemed illegal act.
                        However, the cases where memorization or cognitive
                        judgment is impossible due to illness or accident shall
                        be excluded.
                      </div>
                    </>
                  ) : tab2State ? (
                    <>
                      <span className="font-extrabold text-[30px]">
                        What is MMR?
                      </span>
                      <br />
                      <br />
                      <div className="text-[17px] bg-white px-10 py-1">
                        <div className="flex justify-center items-center my-10">
                          <Image
                            src={Minister}
                            alt="minister of memory regulatory"
                            className="w-[50%]"
                          />
                        </div>
                        MMR, an abbreviation for &quot;Memory Modification
                        Regulations,&quot; is an institution that oversees and
                        regulates various memory-related technologies and
                        services. It regulates ethical, legal, and societal
                        issues that may arise during the use of memory-related
                        technologies. This institution performs the following
                        key roles:
                        <ul className=" list-disc list-outside px-10 py-5 my-5">
                          <li>
                            Licensing and Oversight: To develop or use memory
                            manipulation technologies, one must obtain a license
                            from MMR. MMR issues licenses and oversees the use
                            of the technologies and services.
                          </li>
                          <br />
                          <li>
                            Provision of Ethical and Legal Guidelines: MMR
                            provides ethical guidelines for the use of these
                            technologies and services, offering guidance on
                            legal constraints. This assists both users and
                            providers in the appropriate utilization of the
                            technology.
                          </li>
                          <br />
                          <li>
                            Technology Assessment and Safety Verification: MMR
                            evaluates whether new memory manipulation
                            technologies or services are safe and ethically
                            acceptable. When necessary, safety verifications are
                            conducted.
                          </li>
                          <br />
                          <li>
                            Protection of Personal Information and Rights: MMR
                            enhances the protection of user&apos;s personal
                            information and rights, managing the secure storage
                            of information obtained through memory manipulation
                            technologies.
                          </li>
                          <br />
                          <li>
                            Investigation of Criminal and Legal Issues: In cases
                            where memory manipulation technologies are
                            associated with criminal or legal problems, MMR
                            coordinates investigations and legal procedures.
                          </li>
                        </ul>
                      </div>
                      <span className="font-extrabold text-[20px] block py-1 mt-3">
                        WAIT !
                      </span>
                      <div className="text-[17px] bg-white px-10  py-3">
                        Did you get the MM code after the purchase? If not,
                        visit Minister of Memory Regulatory (MMR) site, and
                        apply your modifying-memory plan. You can get the MM
                        code in 7 business days unless your plan is rejected.
                        Without the code, you cannot modify your memories. Then,
                        the purchase will be cancelled. *MM code: Modifying
                        Memory code / ex. M4032235-AD-2A
                      </div>

                      <span className="font-extrabold text-[20px] block py-1 mt-3">
                        WAIT !
                      </span>
                      <div className="text-[17px] bg-white px-10 py-3">
                        Did you check the ID card of your Memory Technician?{" "}
                        <br />
                        Ask him/her to show his/her ID card. It should be
                        certified by Minister of Memory Regulatory (MMR). Also,
                        you can find the information of your modulator by
                        scanning the QR code behind the ID card. If there is a
                        problem, call the police and get out of the centre
                        immediately.
                      </div>
                    </>
                  ) : tab3State ? (
                    <>
                      <br />
                      <br />
                      <div className="text-[17px] bg-white px-10 py-1">
                        <div className="flex my-10">
                          <Image
                            src={FigureMemory}
                            alt="minister of memory regulatory"
                            className="w-[30%]"
                          />
                          <span className="ml-5">
                            All the Modification details are recorded and kept
                            for 30 years. It will be regulated by the
                            government. But don’t be worried! <br />
                            It won’t break your heart unless you insist on
                            applying for access of your record.
                            <br /> Also, your records cannot be viewed by any
                            others. So just keep drinking your beer.
                          </span>
                        </div>
                      </div>
                    </>
                  ) : tab4State ? (
                    <>
                      <div>
                        <span className="font-extrabold text-[15px]">
                          Do you know The Paradox of Theseus?
                        </span>
                        <br />
                        <div className="text-[17px] bg-white px-10 py-1 mt-1">
                          <div className="flex my-10">
                            <div>
                              <Image
                                src={TheseusSyndrome}
                                alt="minister of memory regulatory"
                                className="w-[450px] h-fit"
                              />
                            </div>
                            <span className="ml-5">
                              If you gradually replace the board of the ship
                              that Theseus had been on with the other board, at
                              some point, none of the pieces of the original
                              ship that Theseus had been on were left. Then, can
                              we call it the ‘Ship of Theseus’?
                              <br />
                              <br />
                              If more than 50% of original memories are
                              replaced, according to Memory Regulatory Laws,
                              this is considered an illegal act.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10">
                        <span className="font-extrabold text-[15px]">
                          Memory Equivalent Assessment
                        </span>
                        <br />
                        <div className="text-[17px] bg-white px-10 py-1 mt-1">
                          <div className="flex my-10">
                            <div>
                              <Image
                                src={Memorycomparison}
                                alt="minister of memory regulatory"
                                className="w-[600px] h-fit"
                              />
                            </div>
                            <span className="ml-5">
                              The Memory Equivalence Assessment is conducted to
                              ascertain that alterations made to memories
                              through procedures such as artificial hippocampal
                              transplantation, memory removal, or memory
                              addition do not deviate by more than 50% from the
                              original memories after modification.
                              <br />
                              <br />
                              Uploaded memories are converted into decimal data
                              and compared with the data of post-modificated
                              memories(estimated). If the difference in data
                              exceeds 50%, memory modification is considered
                              illegal and will be restricted.
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <footer className="text-[20px] mt-20 pb-[200px]">
            © dasomsong 2023
          </footer>
        </div>
      </WebLayout>
    </main>
  );
}
