'use client'

import Image from 'next/image'
import React from 'react'
import Tilt from 'react-parallax-tilt';
import copyToClipBoard from '../../func/fn.copy.to.clipboard';

export default function Gift() {

    return (
        <div className="min-h-screen space-y-5 p-y-5 p-5">
            <section
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <h1 className="text-4xl font-semibold py-4 text-left leading-6">
                    <span className="font-aurore text-3xl">Wedding</span><br /> Gift.
                </h1>
                <p>Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui virtual account atau e-wallet di bawah ini</p>
            </section>
            <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {/* Bank - Yulia */}
                <Tilt>
                    <article
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className="relative w-full h-52 bank-card-1 shadow-md rounded-lg p-5 bg-white">
                        <section className="absolute bottom-5 left-5 flex justify-between w-11/12 items-end space-x-5">
                            <section className="text-md">
                                <p>Nomor Rekening</p>
                                <h1 className="text-2xl font-semibold font-sans">0661304005</h1>
                                <h2 className="font-aurore text-xl mt-2">Yulia Dwi Rianjani</h2>
                            </section>
                            <button onClick={() => copyToClipBoard('0661304005')} className="p-1 px-6 bg-black/80 h-min rounded-md text-white font-semibold text-md">Salin</button>
                        </section>
                        <Image className="absolute top-0 right-2" src={'/logo-bank-bca.svg'} alt="Bank BCA" width={100} height={100} />
                    </article>
                </Tilt>

                {/* Bank - Albar */}
                <Tilt>
                    <article
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className="relative w-full h-52 bank-card-2 shadow-md rounded-lg p-5 bg-white">
                        <section className="absolute bottom-5 left-5 flex justify-between w-11/12 items-end space-x-5">
                            <section className="text-md">
                                <p>Nomor Rekening</p>
                                <h1 className="text-2xl font-semibold font-sans">050101023340502</h1>
                                <h2 className="font-aurore text-xl mt-2">Albar Moerhamsa</h2>
                            </section>
                            <button onClick={() => copyToClipBoard('050101023340502')} className="p-1 px-6 bg-black/80 h-min rounded-md text-white font-semibold text-md">Salin</button>
                        </section>
                        <Image className="absolute top-5 right-5" src={'/logo-bank-bri.svg'} alt="Bank BRI" width={60} height={60} />
                    </article>
                </Tilt>

                {/* Bank - Pakeet */}
                <Tilt>
                    <article
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className="relative w-full h-60 shadow-md rounded-lg p-5 bg-white"
                    >
                        <h1 className="text-3xl font-semibold py-4 text-left leading-3">
                            <span className="font-aurore text-2xl">Misi</span><br /> Pakeet....
                        </h1>
                        <p className="w-2/3 z-10 mt-2">Jalan H Mandor 12A Cilandak Barat, Jakarta Selatan 12430</p>
                        <p className="font-aurore mt-3">Albar & Yulia</p>
                        <Image className="absolute bottom-0 right-0 z-0" src={'/ilustration/man-read-map.svg'} alt="Bank BRI" width={150} height={150} />
                    </article>
                </Tilt>
            </section>
        </div>
    )
}
