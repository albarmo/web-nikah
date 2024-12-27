import Image from 'next/image'
import React from 'react'

export default function Couple() {
    return (
        <section className="relative w-screen h-screen flex flex-col justify-around items-center p-5">
            {/* Man */}
            <article className="flex flex-col justify-center items-center">
                <Image src={'/ilustration/flower-box.png'} alt="Albar Moerhamsa" width={300} height={300} className="size-32 rounded-full aspect-square bg-orange-50 object-contain" />
                <section className="text-center mt-5">
                    <h1 className="text-2xl font-semibold">
                        Albar Moerhamsa
                    </h1>
                </section>
                <span className="text-center">
                    Putra dari <br /> Asi Moeranto dan Hamidah
                </span>
            </article>
            <Image className="absolute top-20 right-0 w-min object-contain" src={'/ilustration/bride-1.svg'} alt="Love Story" width={100} height={100} />
            {/* Woman */}
            <article className="flex flex-col justify-center items-center">
                <Image src={'/ilustration/flower-box.png'} alt="Albar Moerhamsa" width={300} height={300} className="size-32 rounded-full aspect-square bg-orange-50 object-contain" />
                <section className="text-center mt-5">
                    <h1 className="text-2xl font-semibold">
                        Yulia Dwi Rianjani
                    </h1>
                </section>
                <span className="text-center">
                    Putri kedua dari <br /> Alm Jajang Joni dan Rinawaty
                </span>
            </article>
            <Image className="absolute bottom-0 left-2 right-0 w-min object-contain" src={'/ilustration/bride-2.svg'} alt="Love Story" width={100} height={100} />
        </section>

    )
}
