import CodeBlock from "@/components/code-block";
import TextAnimation from "@/components/text-animation";

export default function Home() {
  const TextArray = [
    "名稱",
    "地區",
    "植物部分",
    "出處",
    "外觀及功用"
  ];
  return (
    <main className="h-[65vh] w-full justify-center items-center flex px-4 flex-col ">
      <div>
        <div className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-normal lg:text-5xl text-center space-y-3 justify-center">
          多語言中藥知識圖譜 {<br />}
          <span className="flex gap-2">
            探索
            <TextAnimation
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              words={TextArray}
            />
          </span>
        </div>
        <div className="pt-2 md:pt-6">
          <CodeBlock />
        </div>
      </div>
    </main>
  );
}
