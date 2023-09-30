import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../hook/useLanguageContext";
import Link from "next/link";

const Intro = () => {
  const text = {
    kor: "고현림 ?",
    eng: "Hyeon Lim, Ko ?",
  };
  const { language } = useContext(LanguageContext);
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTitle("");
    setCount(0);
  }, [language]);

  useEffect(() => {
    setTitle("");
    setCount(0);
  }, []);

  // useEfect가 language를 인지하는 시간 / useContext에서 language를 가져오는 시간의 차이로 인해 발생하는 문제인거 같은데
  // 아 디폴트가 kor로 설정이 되어 있어서 그런거 같은데
  useEffect(() => {
    if (language === "kor") {
      const interval = setInterval(() => {
        setTitle(title + text.kor[count]);
        setCount(count + 1);
      }, 150);
      if (count === text.kor.length) clearInterval(interval);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setTitle(title + text.eng[count]);
        setCount(count + 1);
      }, 150);
      if (count === text.eng.length) clearInterval(interval);
      return () => clearInterval(interval);
    }
  }, [count, language]);

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-8xl font-extrabold text-white animate-typing">
          {title}
        </h1>
        {/* 버튼 animation 추가하기 및 버튼 클릭시 어떤식으로 작동할 건지 고민 */}
        {language === "kor" && title.length === text.kor.length ? (
          <button
            className="animate-bounce bg-[#F5DCB1] w-[150px] h-[75px] rounded-[25px] text-xl font-semibold mt-[50px] "
            type="button"
          >
            <Link href="project">더 알아보기</Link>
          </button>
        ) : null}
        {language === "eng" && title.length === text.eng.length ? (
          <button
            className="animate-bounce bg-[#F5DCB1] w-[150px] h-[75px] rounded-[25px] text-xl font-semibold mt-[50px] "
            type="button"
          >
            <Link href="project">More</Link>
          </button>
        ) : null}
      </section>
    </>
  );
};

export default Intro;
