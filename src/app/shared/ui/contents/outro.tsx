import Image from 'next/image'
import React from 'react'

export default function Outro() {
    return (
        <div className="relative flex flex-col items-center h-96 overflow-hidden space-y-5">
            <section
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000" className="z-0 flex p-5"
            >
                <section className="text-center space-y-5">
                    <p>Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada kami.</p>
                    <p>Sampai Jumpa,</p>
                    <h1 className="text-3xl font-aurore">
                        Albar & Yulia
                    </h1>
                </section>
            </section>
            <Image
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="w-min object-contain"
                src={'/ilustration/couple-dancing.svg'}
                alt="Love Story"
                width={100}
                height={100}
            />
        </div>
    )
}
