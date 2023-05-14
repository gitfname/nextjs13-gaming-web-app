"use client"

import gePopularGames from "@/lib/db/gePopularGames";
import GameCard_1 from "./GameCard_1";
import HorizontalScrollableSection from "./HorizontalScrollableSection";

export default function NewGamesSection() {

    return (
        <div className="">
            <div className="flex items-center justify-between w-full">
                <p className="text-xs font-medium text-slate-500 p-2 px-3 rounded-lg hover:bg-transparent/5 hover:text-slate-600 transition-colors duration-200 cursor-pointer">بیشتر</p>
                <p className="text-sm font-bold text-slate-900">تازه ترین ها</p>
            </div>

            <div className="w-full mt-4">
                <HorizontalScrollableSection
                title=""
                showSeeMore={false}
                showPrevNextButtons={false}
                slidesPerView={1.4}
                slidesPerView_sm={2.4}
                slidesPerView_md={3}
                slidesPerView_lg={3}
                slidesPerView_xl={4}
                spaceBetween={25}
                renderSlideTemplate={item => <GameCard_1 showButton={false} {...item} />}
                items={gePopularGames}
                />
            </div>
        </div>
    )
}