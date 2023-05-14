import Image from "next/image";

export default function({id, img, name, gamesCount=0}) {

    return (
        <div className="w-20 h-max relative">
            <Image
                width={200}
                height={200}
                alt=""
                src={img}
                className="w-20 h-20 bordeer border-red-500 rounded-full object-center object-cover shadow-md shadow-black/10"
            />
            <p className="text-xs mt-1 text-center font-[Lexend] font-medium text-slate-800">{name}</p>
        </div>
    )

}