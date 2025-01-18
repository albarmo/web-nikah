import Image from 'next/image'
import React from 'react'

export default function Quote() {
    return (
        <section className="w-screen h-screen flex flex-col justify-center items-center p-5 space-y-10">
            <Image data-aos="fade-down" data-aos-duration="1000" src={'/ilustration/flower-box.png'} alt="Albar Moerhamsa" width={300} height={300} className="size-16 object-contain" />
            <section
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="text-center"
            >
                <p className="text-xl font-semibold">
                    Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
                </p>
            </section>
            <span data-aos="fade-up" data-aos-duration="1000">
                Surah Ar Rum : 21
            </span>
        </section>
    )
}
