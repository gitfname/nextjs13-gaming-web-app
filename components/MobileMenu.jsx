"use client"

import Link from "next/link"
import { useState } from "react"
import { AiFillHome, AiOutlineMenu } from "react-icons/ai"
import { BsBasket3Fill, BsFillGearFill } from "react-icons/bs"
import { IoLogoGameControllerB } from "react-icons/io"
import { SiGooglemessages, SiLivewire } from "react-icons/si"
import { SlLogout } from "react-icons/sl"
import LeftSideBarNavigationLink from "./LeftSideBarNavigationLink"

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <AiOutlineMenu className="w-[18px] h-[18px] fill-black" />
            </button>
            <div onClick={() => setIsOpen(false)} className={`fixed z-[999999] w-full h-full pointer-events-none ${isOpen&&"!pointer-events-auto"}`}>
                <div  className={`fixed top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 bg-black/60 ${isOpen&&"!opacity-100"}`}>
                </div>
                <div onClick={e => e.stopPropagation()} className={`z-10 space-y-2 fixed top-0 pt-6 flex flex-col items-end left-0 w-48 h-full bg-[#f3f6fb] transition-transform duration-300 -translate-x-full ${isOpen&&"!translate-x-0"}`}>
                    <LeftSideBarNavigationLink
                        href="/"
                        text="داشبورد"
                        icon={<AiFillHome className="fill-inherit w-4 h-4" />}
                    />
                    <LeftSideBarNavigationLink
                        href="/library"
                        text="کتابخانه"
                        icon={<IoLogoGameControllerB className="fill-inherit w-[18px] h-[18px]" />}
                    />
                    <LeftSideBarNavigationLink
                        href="/store"
                        text="فروشگاه"
                        icon={<BsBasket3Fill className="fill-inherit w-4 h-4" />}
                    />
                    <LeftSideBarNavigationLink
                        href="/live"
                        text="پخش زنده"
                        icon={<SiLivewire className="fill-inherit w-4 h-4" />}
                    />
                    <LeftSideBarNavigationLink
                        href="/messages"
                        text="پیام ها"
                        icon={<SiGooglemessages className="fill-inherit w-4 h-4" />}
                    />
                    <LeftSideBarNavigationLink
                        href="/settings"
                        text="تنظیمات"
                        icon={<BsFillGearFill className="fill-inherit w-4 h-4" />}
                    />
                    <div className="!mt-auto w-full flex items-center justify-center pb-5">
                        <p className="flex items-center w-max gap-x-2 p-2.5 px-3.5 transition-colors duration-200 hover:bg-red-100 rounded-lg">
                            <p className="text-sm font-semibold text-red-500 leading-none">خروج</p>
                            <SlLogout className="fill-red-500 w-[14px] h-[14px]" />
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}