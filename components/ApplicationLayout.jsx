
import LeftSideBarNavigationLink from "./LeftSideBarNavigationLink"
import { AiFillHome } from "react-icons/ai"
import { IoLogoGameControllerB } from "react-icons/io"
import { BsBasket3Fill, BsFillGearFill } from "react-icons/bs"
import { SiLivewire, SiGooglemessages } from "react-icons/si"
import { SlLogout } from "react-icons/sl"
import Link from "next/link"
import Image from "next/image"

export default function ApplicationLayout({children}) {
    return (
        <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-[200px_1fr]">

            {/* left sidebar */}
            <div className="w-full h-screen overflow-y-auto bg-[#f3f6fb] lg:grid hidden grid-cols-1 grid-rows-[80px_1fr]">

                {/* logo */}
                <div className="flex items-center justify-center">
                    <Image
                        width={210}
                        height={186}
                        alt=""
                        src="/logo.png"
                        className="w-20 h-20 object-center object-cover"
                    />
                </div>

                {/* menu links */}
                <div className="pt-2 space-y-1 h-full flex items-end flex-col">

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
                        <Link href="/logout" className="flex items-center w-max gap-x-2 p-2.5 px-3.5 transition-colors duration-200 hover:bg-red-100 rounded-lg">
                            <p className="text-sm font-semibold text-red-500 leading-none">خروج</p>
                            <SlLogout className="fill-red-500 w-[14px] h-[14px]" />
                        </Link>
                    </div>

                </div>

            </div>


            {/* main section */}

            <div className="">
                {children}
            </div>

        </div>
    )
}