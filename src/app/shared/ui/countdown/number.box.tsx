import React from 'react'

interface numProp {
    num: string | number,
    unit: string,
    flip: boolean,
};

export const NumberBox = ({ num, unit, flip }: numProp) => {
    return (
        <div className="flex flex-col items-center mt-4 px-2">
            <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg w-16 h-16 text-xl md:text-2xl mt-4 ">
                <div className="rounded-t-lg rounded-b-lg bg-white/40 w-full h-full"></div>
                <div className="text-2xl absolute z-10 font-bold font-redhat md:text-4xl font-mono">
                    {num}
                </div>
                <div className=" rounded-b-lg rounded-t-lg bg-white/40 w-full h-full"></div>
                <div className={`absolute w-full h-1/2 top-0 rounded-t-lg z-5 ${flip ? 'animate-flip bg-gray-200' : 'bg-transparent'}`}></div>
                {/* Two Small Dots */}
                <div className="absolute -right-1 top-[28px] rounded-full size-2 bg-[#171717]"></div>
                <div className="absolute -left-1 top-[28px] rounded-full size-2 bg-[#171717]" ></div>
            </div>
            <p className="text-md mt-3 font-semibold md:text-lg">
                {unit}
            </p>
        </div>
    )
}
