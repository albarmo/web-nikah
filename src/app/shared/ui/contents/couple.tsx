import React from 'react'
import Image from 'next/image'

export default function Couple() {
    return (
        <section className="relative w-screen h-screen flex flex-col justify-center space-y-10 items-center p-5">
            {/* Man */}
            <article
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="flex flex-col justify-center items-center w-full"
            >
                <div className='group'>
                    <Image src={'/image/albar.png'} alt="Albar Moerhamsa" width={300} height={300} className="size-32 rounded-full aspect-square bg-white object-cover" />
                    <Image className="absolute group-hover:translate-x-28 translate-x-[1000px] -rotate-12 transform-gpu transition-all delay-150 duration-500 top-20 right-0 w-min object-contain" src={'/ilustration/bride-1.svg'} alt="Love Story" width={100} height={100} />
                </div>
                <section className="text-center mt-5">
                    <h1 className="text-2xl font-semibold">
                        Albar Moerhamsa
                    </h1>
                </section>
                <span className="text-center">
                    Putra dari <br /> Asi Moeranto dan Hamidah
                </span>
            </article>

            <h1 className="text-4xl font-semibold">
                &
            </h1>
            {/* Woman */}
            <article
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="flex flex-col justify-center items-center"
            >
                <div className='group'>
                    <Image src={'/image/yulia.png'} alt=" Yulia Dwi Rianjani" width={300} height={300} className="size-32 rounded-full aspect-square bg-white object-cover" />
                    <Image className="absolute group-hover:-translate-x-40 -translate-x-[1000px] rotate-45 transform-gpu transition-all delay-150 duration-500 bottom-0 left-2 right-0 w-min object-cover" src={'/ilustration/bride-2.svg'} alt="Love Story" width={100} height={100} />
                </div>
                <section className="text-center mt-5">
                    <h1 className="text-2xl font-semibold">
                        Yulia Dwi Rianjani
                    </h1>
                </section>
                <span className="text-center">
                    Putri kedua dari <br /> Alm Jajang Joni dan Rinawaty
                </span>
            </article>
        </section>

    )
}
