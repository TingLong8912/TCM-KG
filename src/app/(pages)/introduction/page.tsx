import { Leaf, Glasses, Database } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import PlatformScreenShot from '@/assets/platformScreenShot.jpg';
import medicine from '@/assets/traditional-chinese-medicine.jpg';
import tcm2 from '@/assets/tcm2.jpg';
import Taiwan_location_map from '@/assets/Taiwan_location_map.jpg';
import older from '@/assets/older.jpg';

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
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">多語言中藥知識圖譜</p>
              <h1 className="text-3xl font-semibold tracking-wide flex gap-2.5 items-center">更全面的中藥資訊</h1>
              <p className="mt-6 text-xl leading-8">
              根據<span className='font-semibold'>24部</span>現代中醫和馬來醫學的藥物字典，
              連接了不同地區文化傳統中使用的中藥物，超過<span className='font-semibold'>18,000個</span>引用，
              包含<span className='font-semibold'>42,860個</span>中文主要和替代藥物名稱，
              以及<span className='font-semibold'>3,612個</span>馬來語藥物名稱。
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={PlatformScreenShot.src}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 lg:max-w-lg text-muted-foreground">
              <p>
                根據現代中醫及馬來醫學的藥物字典匹配了中藥名稱及其植物名稱，又植物名稱可透過科學名稱所建立唯一識別，
                我們能夠提供中藥名稱和植物名稱的廣泛連結，從而在植物面向全面搜索。此外，在資料可獲得之下，我們也提供了地區數據、藥物名稱之出處、功用等數據。
              </p>
              <ul role="list" className="mt-8 space-y-8 text-muted-foreground">
                <li className="flex gap-x-3">
                  <Leaf className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">連結植物名稱及區域數據｜</strong> 
                    連接了不同地區文化傳統中使用的常見藥物及其植物，並提供了有關它們的名稱和野生繁殖的區域數據
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Glasses className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">視覺探索｜</strong> 
                    提供對中藥名稱進行視覺探索
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Database className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">其他資料庫的串接｜</strong> 
                    中藥名稱與植物學、生物多樣性和植物生物化學、地理和文學等其他資料庫串接
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                該網站作為資源和工具以協助不同地區文化下對中藥藥物知識的比較、衝突或重疊，
                並促進中藥材以現代科學及知識本體紀錄，以增加不同使用者有效使用中藥知識。
                此外，通過知識本體之延伸節點可有助於其他領域之知識本體進一步貢獻有關藥物的時間段和地理數據，
                例如在「出處」子類別中，透過對於藥物的文書記載，歷史學家或文學家可明確該書籍的年代以確定藥物的名稱流通時間；
                而在「地區」子類別中，透過空間幾何位置和地圖之記載，地理學家可進一步分析藥物出現的空間範圍及移動現象。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-wide flex gap-2.5 items-center">中藥五大特徵</h1>
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
              src={medicine.src}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={tcm2.src}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={Taiwan_location_map.src}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={older.src}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
