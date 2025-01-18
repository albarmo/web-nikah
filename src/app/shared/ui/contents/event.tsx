import Image from 'next/image'
import React from 'react'

export default function Event() {
    return (
        <section className="relative h-screen">
            <Image src={'/ilustration/couple-picture-bg.png'} alt="Love Story" width={300} height={300} className="w-full object-contain" />
            <section className="absolute space-y-2.5 top-0 text-center p-5 py-10">
                <h1
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="text-3xl font-semibold py-4"
                >
                    <span className="font-aurore">Save</span> The Date
                </h1>
                <h2
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1200" className="text-xl"
                >
                    Sabtu,<span className="text-4xl font-semibold">02</span>
                    <br />
                    Februari 2025
                </h2>
                <section
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-lg"
                >
                    <p> Akad     : 09.00 WIB - 10.00 WIB </p>
                    <p> Resepsi  : 10.00 WIB - 12.00 WIB</p>
                </section>
                <p data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="text-xl font-semibold"
                >
                    Kampung Kecil Cinere
                </p>
                <p
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    Jl. Telaga Warna, RT.07/RW.05, Pangkalan Jati, Kec. Cinere, Kota Depok, Jawa Barat 16514
                </p>
            </section>
            <button
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="absolute bottom-5 left-5 w-11/12 bg-white rounded p-2.5"
            >
                Google Map
            </button>
        </section>
    )
}
