import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ScreenTransition({
  children,
  href = "",
}: {
  children: React.ReactNode;
  href: string;
}) {
  const [isShrunk, setIsShrunk] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (href !== "") {
      setIsShrunk(true);
    }
    if (isShrunk) {
      setTimeout(() => {
        setIsShrunk(true);
        router.push(href);
      }, 1000);
    }
  }, [href, isShrunk]);

  useEffect(() => {});
  return (
    <div
      className={`w-screen h-screen  bg-white ${
        isShrunk ? "animate-shrink" : ""
      }`}
    >
      <div className="w-screen h-screen flex justify-center animate-visible">
        {children}
      </div>
    </div>
  );
}
