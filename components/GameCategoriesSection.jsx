"use client"

import getGameCategories from "@/lib/db/getGameCategories";
import GameCategoryCard_1 from "./GameCategoryCard_1";
import HorizontalScrollableSection from "./HorizontalScrollableSection";

export default function GameCategoriesSection() {

    return (
        <div className="w-full">
            <div className="flex items-center justify-between w-full">
                <p className="text-xs font-medium text-slate-500 p-2 px-3 rounded-lg hover:bg-transparent/5 hover:text-slate-600 transition-colors duration-200 cursor-pointer">بیشتر</p>
                <p className="text-sm font-bold text-slate-900">دسته بندی ها</p>
            </div>

            <div className="w-full mt-4 py-2">
                <HorizontalScrollableSection
                title=""
                slideW="85px"
                showSeeMore={false}
                showPrevNextButtons={false}
                slidesPerView="auto"
                slidesPerView_sm="auto"
                slidesPerView_md="auto"
                slidesPerView_lg="auto"
                slidesPerView_xl="auto"
                spaceBetween={25}
                renderSlideTemplate={item => <GameCategoryCard_1 {...item} />}
                items={getGameCategories}
                />
            </div>
        </div>
    )
}