import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { IoLogoGameControllerB } from "react-icons/io"

export default function GameCard_1({id, img, name, played=0, starsFill, starsOutline, link, showButton=true}) {

    const starts = []

    for(let i = 0; i<starsFill; i++) {
        starts.push(
            <AiFillStar className="w-4 h-4 fill-yellow-500" />
        )
    }

    for(let i = 0; i<starsOutline; i++) {
        starts.push(
            <AiOutlineStar className="w-4 h-4 fill-yellow-500" />
        )
    }

    return (
        <div className="w-full bg-[#f9eff0] rounded-3xl pb-3">

            <div className="relative group">
                <Image
                    width={480}
                    height={480}
                    alt=""
                    src={img}
                    className="w-full h-40 object-center object-cover rounded-3xl shadow-md shadow-black/10 rounded-bl-sm rounded-tr-sm"
                />

                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center top-0 left-0 w-full h-full bg-black/50 z-10 rounded-3xl rounded-tr-sm rounded-bl-sm">
                    <IoLogoGameControllerB className="w-10 h-10 fill-white cursor-pointer hover:scale-110 transition-transform duration-300" />
                    <p className="text-xs text-white font-[Lexend] mt-0.5">{played}</p>
                </div>

            </div>


            <div className="w-full px-3 mt-4">
                <p className="text-sm text-slate-800 font-semibold font-[Lexend] text-center line-clamp-2">{name}</p>
                <div className="mt-2 flex items-center justify-center gap-x-1.5">
                    {starts}
                </div>
                {
                    showButton&&(
                        <button className="block mx-auto w-max rounded-lg bg-[#ba8dc8] text-xs font-semibold text-white py-1.5 px-3 mt-3 active:scale-95 transition-transform duration-200">
                            دانلود
                        </button>
                    )
                }
            </div>

        </div>
    )
}