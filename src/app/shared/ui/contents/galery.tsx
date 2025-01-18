import Image from 'next/image'
import React from 'react'

export default function Galery() {
    return (
        <div className="relative h-max space-y-5 pt-20">
            <section className="absolute top-20 right-0 bg-[#FF5E00]/70 size-32 rounded-full"></section>
            <section
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="h-max z-0 flex p-5 mt-40"
            >
                <section>
                    <h1 className="text-4xl font-semibold py-4 text-left leading-6">
                        <span className="font-aurore">Momen</span><br /> Bahagia.
                    </h1>
                    <p>Foto bersama</p>
                </section>
                <Image className="-z-0 top-20 right-0 w-full object-contain" src={'/ilustration/couple-moment.svg'} alt="Love Story" width={600} height={600} />
            </section>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="-translate-y-40 grid grid-cols-2 md:grid-cols-4 gap-4 p-5"
            >
                <div className="grid gap-4">
                    <div>
                        <Image width={500} height={500} className="h-80 object-cover max-w-full rounded-lg" src="/image/image-1.jpg" alt="" />
                    </div>
                    <div>
                        <Image width={200} height={200} className="h-40 object-cover max-w-full rounded-lg" src="/image/image-2.jpg" alt="" />
                    </div>
                    <div>
                        <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="/image/image-3.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="/image/image-4.jpg" alt="" />
                    </div>
                    <div>
                        <Image width={500} height={500} className="h-60 object-cover max-w-full rounded-lg" src="/image/image-5.jpg" alt="" />
                    </div>
                    <div>
                        <Image width={500} height={500} className="h-auto max-w-full rounded-lg" src="/image/image-6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
