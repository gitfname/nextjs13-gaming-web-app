"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function LeftSideBarNavigationLink({text, href, icon}) {
    const pathName = usePathname()

    return (
        <div className="pr-2">
            <div
                className={`flex items-center p-2.5 px-3.5 ${pathName===href ? "bg-[#b88ec4]" : "bg-transparent"} transition-colors hover:bg-[#b88ec4] group w-max rounded-xl`}
            >
                <p className={`${pathName === href ? "text-white" : "text-[#898792]"} group-hover:text-white transition-colors duration-200 text-sm font-semibold leading-none`}>
                    {text}
                </p>
                <div className={`${ pathName === href ? "fill-white" :  "fill-[#898792]"} group-hover:fill-white transition-colors duration-200 w-8 grid place-items-center`}>
                    {icon}
                </div>
            </div>
        </div>
    )

}