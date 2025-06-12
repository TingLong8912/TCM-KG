// export default async function page() {
//   return (
//     <div className="h-[60vh] w-full justify-center items-center flex px-4 flex-col ">
//       <h1 className="scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-normal lg:text-5xl text-center space-y-3 justify-center">
//       </h1>
//       <p className="leading-7 [&:not(:first-child)]:mt-6  max-w-md text-center text-muted-foreground">
//         Are you excited to build something amazing using{" "}
//         {<br className="hidden sm:flex" />} the latest libraries and the stacks?
//       </p>
//       <div className="relative ">
//       </div>
//     </div>
//   );
// }

import { Leaf, Glasses, Database } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const features = [
  { name: '名稱', description: '主要名稱 | 別名 | 科學名稱 | 英文名稱' },
  { name: '地點', description: '地理空間 | 出處' },
  { name: '出處', description: '時間 | 年代 | 作者 | 出處' },
  { name: '植物部分', description: '植物 | 出處' },
  { name: '外觀及功用', description: '用途 | 性味 | 外觀' }
]

export default function page() {
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">中藥五大特徵</h2>
          <p className="mt-4">
            在知識圖譜上，我們將中藥的特徵區分為五大類，分別為：名稱、地點、出處、植物部分和外觀及功用，根據這五大類，使用者可以進行視覺化探索，
            恣意展開所想獲得之資訊。
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="text-base font-semibold leading-7 text-indigo-600">{feature.name}</dt>
                <dd className="mt-2 text-sm">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}