import Image from "next/image"
import Link from "next/link"
import { AiOutlineSearch } from "react-icons/ai"
import { SlControlPlay } from "react-icons/sl"
import GameCard_1 from "@/components/GameCard_1"
import gePopularGames from "@/lib/db/gePopularGames"
import NewGamesSection from "@/components/NewGamesSection"
import GameCategoriesSection from "@/components/GameCategoriesSection"
import MobileMenu from "@/components/MobileMenu"


function NavLink({text, href=""}) {
  return (
    <Link href={href} className="text-sm leading-none font-semibold text-[#898792] py-2 px-3 rounded-lg hover:bg-[#b88ec4] hover:text-white transition-colors duration-200">{text}</Link>
  )
}

export default function Home() {
  return (
    <div className='w-full h-screen grid grid-cols-1 grid-rows-[max-content_1fr]'>

      {/* top side */}
      <div className="p-3 px-7 shadow-sm shadow-black/5 flex items-center justify-between gap-x-3 w-full">

        <div className="lg:hidden">
          <MobileMenu />
        </div>
        
        <div className="relative w-full max-w-xs max-lg:hidden">
          <AiOutlineSearch className="w-[18px] h-[18px] fill-gray-800 pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" />
          <input type="text" placeholder="جستجو کنید" className="placeholder-gray-400 text-sm font-semibold text-right focus:outline-none text-gray-800 w-full h-full rounded-lg bg-gray-100 p-2 px-3 pl-8" />
        </div>

        <div className="flex items-center gap-x-0.5">
          <div className="max-lg:hidden">
            <NavLink text="دسته بندی" />
          </div>
          <div className="max-lg:hidden">
            <NavLink text="محبوب ترین" />
          </div>

          <div className="relative group" tabIndex={0}>
            <Image
              width={150}
              height={150}
              alt=""
              src="/game-images/thumbnail/img14.webp"
              className="w-10 h-10 shadow-sm shadow-black/10 rounded-full object-cover object-center"
            />
            <div className="absolute space-y-3 -bottom-2 left-0 w-40 rounded-lg p-5 px-3.5 shadow-lg shadow-black/10 bg-gray-50 translate-y-full opacity-0 pointer-events-none group-focus:opacity-100 group-focus:pointer-events-auto -translate-x-[calc(100%-20px)] transition-opacity duration-300 z-20">
              <p className="text-right text-sm font-semibold text-slate-800">تنظیمات</p>
              <p className="text-right text-sm font-semibold text-slate-800">پیام ها</p>
              <p className="text-right text-sm font-semibold text-red-500">خروج</p>
            </div>
          </div>

        </div>

      </div>

      <div className="w-full h-full overflow-y-auto pt-8 pb-10"> 

        {/* banner */}
        <div className="w-11/12 md:w-10/12 rounded-xl h-60 bg-gradient-to-r from-pink-200 to-[#ff4991] mx-auto relative">

          <Image
            width={400}
            height={400}
            alt=""
            src="/gamier-character.png"
            className="w-52 h-52 absolute left-4 bottom-0"
          />

          <div className="absolute top-1/2 right-10 -translate-y-1/2">
            <p className="text-white font-bold text-lg text-right">به دنیای بازی ها خوش آمدی</p>
            <p className="text-white font-bold text-lg text-right">پر هیجان و پرچالش</p>
            <p className="text-white/70 font-medium mt-2 text-sm text-right max-w-[40ch]">
              دنیای پر از برترین بازیها برای برترین گیمر ها
            </p>
            
            <button className="ml-auto mt-6 py-2 active:scale-95 transition-transform duration-200 px-3 rounded-lg bg-white shadow-md shadow-black/20 text-black text-sm font-semibold flex items-center gap-x-1">
              <SlControlPlay className="w-[14px] h-[14px] fill-slate-900 rotate-180" />
              <span>شروع کن</span>
            </button>
          </div>

        </div>


        {/* games categories */}
        <div className="w-full overflow-y-hidden mt-12 px-5 md:px-10">
          {/* <div className="w-full overflow-y-auto">

          <div className="flex py-2 flex-nowrap w-max items-center gap-x-4 ">
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
                        <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
            <div className="flex-shrink-0">
              <GameCategoryCard_1
                img="/game-images/thumbnail/img13.webp"
                gamesCount={106}
              />
            </div>
          </div>
          </div> */}
          <GameCategoriesSection />
        </div>
        

        {/* popular games */}
        <div className="w-full mt-12 px-5 md:px-10">

          <div className="flex items-center justify-between w-full">
            <p className="text-xs font-medium text-slate-500 p-2 px-3 rounded-lg hover:bg-transparent/5 hover:text-slate-600 transition-colors duration-200 cursor-pointer">بیشتر</p>
            <p className="text-sm font-bold text-slate-900">محبوب ترین ها</p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 mt-4">
            {
              gePopularGames.map(item => <GameCard_1 {...item} />)
            }
          </div>

        </div>

        {/* new games */}
        <div className="w-full mt-12 px-5 md:px-10">
          <NewGamesSection />
        </div>
          

      </div>
    </div>
  )
}
