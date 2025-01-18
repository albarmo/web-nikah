'use client'

import React from 'react'
import CountdonwTimer from '../countdown.timer'

export default function Hero({ guestName }: { guestName: string }) {
    return (
        <div id='container' className="paper w-screen h-screen flex flex-col justify-around items-center p-5">
            <div className='mt-56 space-y-10'>
                <section data-aos="fade-left" ata-aos-duration="1000" className="font-aurore text-center space-y-5 w-full">
                    <span className="text-xl">the wedding of</span>
                    <h1 className="text-6xl">Albar <br />& Yulia</h1>
                    <span className="text-xl ml-24">02.02.2024</span>
                </section>
                <section data-aos="fade-right" ata-aos-duration="1000" className="text-center">
                    <p >Kepada Yth. Ibu/Bapak/Saudara/i</p>
                    <p className="text-xl font-semibold mt-2">{guestName}</p>
                </section>
                <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                    <CountdonwTimer />
                </div>
            </div>
        </div>
    )
}
